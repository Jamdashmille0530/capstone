import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const addAttachment = async (req, res) => {
  try {
    const {
      idPicture,
      gradeSlip,
      eslip,
      ncae,
      ebill,
      wbill,
      tbill,
      bcert,
      indigency,
      autobiograpahy,
      pantawidId,
      sketchAddress,
    } = req.body

    const user = await prisma.user.create({
      data: {
        idPicture,
        gradeSlip,
        eslip,
        ncae,
        ebill,
        wbill,
        tbill,
        bcert,
        indigency,
        autobiograpahy,
        pantawidId,
        sketchAddress,
      },
    })

    return res.json({
      status: 'success',
      user,
      message: 'User created successfully',
    })
  } catch (error) {
    return res.status(400).json({
      status: 'failed',
      message: 'User creation failed',
    })
  }
}
