const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()
module.exports = {
  adminInit: async (email, pass) => {
    const salt = bcrypt.genSaltSync()
    const hashedPassword = bcrypt.hashSync(pass, salt)
    await prisma.user.create({
      data: {
        fname: 'admin',
        lname: 'admin',
        mname: 'admin',
        email: email,
        address: 'admin',
        password: hashedPassword,
        role: 'ADMIN',
      },
    })
  },
}
