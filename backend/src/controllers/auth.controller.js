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
  findUserByRegisteredEmail,
  createUser,
  findUserById,
} from '../services/user.services'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { hashToken } from '../utils/hashToken'
import { prisma } from '../utils/db'

export const register = async (req, res, next) => {
  try {
    const { fname, mname, lname, address, email } = req.body
    if (!email) {
      return res.status(400).json({
        status: 'failed',
        message: 'You must provide an email and a password.',
      })
    }

    const existingUser = await findUserByRegisteredEmail(email)

    if (existingUser) {
      return res.status(400).json({
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

    return res.json({
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
      return res.status(400).json({
        status: 'failed',
        message: 'You must provide an email and a password.',
      })
    }

    const existingUser = await findUserByEmail(email)

    if (!existingUser) {
      return res.status(403).json({
        status: 'failed',
        message: 'Invalid login credentials.',
      })
    }

    if (existingUser.role === 'APPLICANT') {
      return res.status(400).json({ message: 'Unauthorized' })
    }

    if (existingUser.password === null)
      return res.status(403).json({ message: 'This user is not yet verified' })

    const validPassword = await bcrypt.compare(password, existingUser.password)
    if (!validPassword) {
      return res.status(403).json({
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

    return res.json({
      user: existingUser,
      accessToken,
      refreshToken,
    })
  } catch (err) {
    return next(err)
  }
}

export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) {
      return res.status(400).json({
        status: 'failed',
        message: 'Missing refresh token',
      })
    }

    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)

    const savedRefreshToken = await findRefreshTokenById(payload.jti)
    console.log(payload)
    if (!savedRefreshToken) {
      return res.status(401).json({
        status: 'failed',
        message: 'Unauthorized',
      })
    }

    const hashedToken = hashToken(refreshToken)
    if (hashedToken !== savedRefreshToken.hashedToken) {
      return res.status(401).json({
        status: 'failed',
        message: 'Unauthorized',
      })
    }

    const user = await findUserById(payload.userId)
    if (!user) {
      return res.status(401).json({
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

    return res.json({
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
    return res.json({
      status: 'success',
      message: `Tokens revoked for user with id #${userId}`,
    })
  } catch (err) {
    next(err)
  }
}
