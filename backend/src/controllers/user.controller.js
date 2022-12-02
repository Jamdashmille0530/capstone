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
//   return res.json({ user, message: 'User create successfully' })
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

//   return res.json({
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
    return res.json({
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
        <b>
Congratulations! with careful observation and filtering, It is with great joy that we send you this email to tell you that you passed as our Scholar!

You may now Log-In as a Scholar. Your password is attached to this email. Please do remember not to share your password with anyone else.

Sincerely,
Lao Foundation Inc.<b>
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

    return res.json({
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
        <b>Thank you for your scholarship application, unfortunately, we had a large number of applicants, and we regret to inform you that you have not been selected as a scholar.

We would like to thank you for your interest in the scholarship. This decision was also hard for us, and it doesn't mean that you are not a suitable scholar. Although you didn't get selected please continue working hard, we see what you are capable of, keep it up and try submitting your application again next school year. We hope to see you again.
Sincerely,
Lao Foundation Inc.<b> 
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

    return res.json({
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
    return res.json({
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
//   return res.json({
//       status: 'success',
//       users,
//     })
//   } catch (err) {
//     next(err)
//   }
// }
