import { prisma } from '../utils/db'
import bcrypt from 'bcrypt'
import { findUserById } from '../services/user.services'
import { transporter } from '../utils/transporter'

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

export const acceptApplicant = async (req, res, next) => {
  try {
    const { id, email } = req.body
    const currentYear = new Date().getFullYear()
    const generatePass = `${currentYear}-${id.split('-')[0]}`

    const hashedPassword = bcrypt.hashSync(generatePass, 12)

    const user = await prisma.user.update({
      where: { email },
      data: { password: hashedPassword, role: 'SCHOLAR' },
    })

    transporter.sendMail(
      {
        from: 'lao.noreply@gmail.com',
        to: email,
        subject: 'Accepted',
        html: `
        <b>Congrats!<b>
        <br/>
        <p>email: ${email}
        <p>password: ${generatePass}
        `,
      },
      (error, info) => {
        if (error) {
          return res
            .status(500)
            .json({ status: 'failed', message: 'Error sending email' })
        }
      }
    )

    res.json({
      status: 'success',
      data: user,
      message: 'Successfully update user',
    })
  } catch (err) {
    next(err)
  }
}

export const rejectApplicant = async (req, res, next) => {
  try {
    const { id, email } = req.body
    await prisma.refreshToken.deleteMany({ where: { userId: id } })
    await prisma.user.delete({ where: { id } })

    transporter.sendMail(
      {
        from: 'lao.noreply@gmail.com',
        to: email,
        subject: 'Rejected',
        html: `
        <b>Sorry!<b> 
        `,
      },
      (error, info) => {
        if (error) {
          return res.status(500).json({
            status: 'failed',
            message: 'Error sending email',
          })
        }
      }
    )

    res.json({
      status: 'success',
      message: 'Successfully delete user',
    })
  } catch (error) {
    next(error)
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
