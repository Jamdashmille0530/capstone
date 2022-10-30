import { prisma } from '../utils/db'
import bcrypt from 'bcrypt'
import { findUserById } from '../services/user.services'

// export const createUser = async (req, res) => {
//   try {
//     const { fname, mname, lname, email, address } = req.body

//     const user = await prisma.user.create({
//       data: { email, fname, mname, lname, address },
//     })
//     res.json({ user, message: 'User create successfully' })
//   } catch (error) {
//     return res.status(500).json({
//       error: true,
//       message: error.message,
//     })
//   }
// }

// export const signUp = async (req, res) => {
//   try {
//     const { fname, mname, lname, email, address } = req.body;

//     const user = await prisma.user.create({
//       data: { fname, mname, lname, email, address },
//     });

//     res.json({
//       status: "success",
//       user,
//       message: "User created successfully",
//     });
//   } catch (error) {
//     return res.status(400).json({
//       status: "failed",
//       message: "User creation is failed",
//     });
//   }
// };

export const me = async (req, res, next) => {
  try {
    const { userId } = req.payload
    const user = await findUserById(userId)
    delete user.password
    res.json({
      status: 'success',
      message: 'Successfully retrieved logined user',
      data: user,
    })
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 12)

    const user = await prisma.user.update({
      where: { email },
      data: { password: hashedPassword, role: 'SCHOLAR' },
    })

    res.json({
      status: 'success',
      data: user,
      message: 'Successfully update user',
    })
  } catch (err) {
    next(err)
  }
}

export const getAllUserWithoutPass = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      where: { role: 'APPLICANT', password: null },
    })
    res.json({
      status: 'success',
      users,
    })
  } catch (err) {
    next(err)
  }
}

// export const getAllUser = async (req, res, next) => {
//   try {
//     const users = await prisma.user.findMany({
//       where: { role: 'APPLICANT' && 'ADMIN' && 'SCHOLAR' },
//     })
//     res.json({
//       status: 'success',
//       users,
//     })
//   } catch (err) {
//     next(err)
//   }
// }
