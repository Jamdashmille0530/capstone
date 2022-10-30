import { v4 as uuid4 } from 'uuid'
import { generateTokens } from '../utils/jwt'
import {
  addRefreshTokenToWhitelist,
  deleteRefreshToken,
  findRefreshTokenById,
  revokeTokens,
} from '../services/auth.services'
import {
  findUserByEmail,
  createUser,
  findUserById
} from '../services/user.services'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { hashToken } from '../utils/hashToken'
import { prisma } from '../utils/db'

export const register = async (req, res, next) => {
  try {
    const { fname, mname, lname, address, email } = req.body
    if (!email) {
      res.status(400).json({
        status: 'failed',
        message: 'You must provide an email and a password.',
      })
    }

    const existingUser = await findUserByEmail(email)

    if (existingUser) {
      res.status(400).json({
        status: 'failed',
        message: 'Email already in user.',
      })
    }

    const user = await createUser({
      email,
      fname,
      mname,
      lname,
      address,
    })

    const jti = uuid4()
    const { accessToken, refreshToken } = generateTokens(user, jti)
    await addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id })

    res.json({
      user,
      accessToken,
      refreshToken,
    })
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({
        status: 'failed',
        message: 'You must provide an email and a password.',
      })
    }

    const existingUser = await findUserByEmail(email)

    if (!existingUser) {
      res.status(403).json({
        status: 'failed',
        message: 'Invalid login credentials.',
      })
    }

    if (existingUser.password === null)
      return res.status(403).json({ message: 'This user is not yet verified' })

    const validPassword = await bcrypt.compare(password, existingUser.password)
    if (!validPassword) {
      res.status(403).json({
        status: 'failed',
        message: 'Invalid login credentials.',
      })
    }

    const jti = uuid4()
    const { accessToken, refreshToken } = generateTokens(existingUser, jti)
    await addRefreshTokenToWhitelist({
      jti,
      refreshToken,
      userId: existingUser.id,
    })

    res.json({
      user: existingUser,
      accessToken,
      refreshToken,
    })
  } catch (err) {
    next(err)
  }
}

export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) {
      res.status(400).json({
        status: 'failed',
        message: 'Missing refresh token',
      })
    }

    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
    const savedRefreshToken = await findRefreshTokenById(payload.jti)

    if (!savedRefreshToken || savedRefreshToken.revoked === true) {
      res.status(401).json({
        status: 'failed',
        message: 'Unauthorized',
      })
    }

    const hashedToken = hashToken(refreshToken)
    if (hashToken !== savedRefreshToken.hashedToken) {
      res.status(401).json({
        status: 'failed',
        message: 'Unauthorized',
      })
    }

    const user = await findUserById(payload.userId)
    if (!user) {
      res.status(401).json({
        status: 'failed',
        message: 'Unauthorized',
      })
    }

    await deleteRefreshToken(savedRefreshToken.id)
    const jti = uuid4()
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user,
      jti
    )
    await addRefreshTokenToWhitelist({
      jti,
      refreshToken: newRefreshToken,
      userId: user.id,
    })

    res.json({
      accessToken,
      refreshToken: newRefreshToken,
    })
  } catch (err) {
    next(err)
  }
}

export const revokedRefreshTokens = async (req, res, next) => {
  try {
    const { userId } = req.body

    await revokeTokens(userId)
    res.json({
      status: 'success',
      message: `Tokens revoked for user with id #${userId}`,
    })
  } catch (err) {
    next(err)
  }
}
