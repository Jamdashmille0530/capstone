import multer from 'multer'

import * as fs from 'fs'

const storage = multer.diskStorage({
  destination: (req, _, cb, __) => {
    const { userId } = req.payload
    const path = `./images/${userId}`
    fs.mkdirSync(path, { recursive: true })
    return cb(null, path)
  },
  filename: (req, file, cb, __) => {
    let originalname =
      Date.now() +
      '_' +
      Math.floor(Math.random() * 10000000) +
      '_' +
      file.originalname
    if (!!req.fileName) {
      const splitFileName = file.originalname.split('.')
      const fileExtension = splitFileName[splitFileName.length - 1]
      originalname = req.fileName + '.' + fileExtension
    }
    return cb(null, originalname)
  },
})

export const userFile = (req, _, next) => {
  const { userId } = req.payload
  req.fileName = userId + '-' + req.params.column
  next()
}

export const uploadImg = multer({ storage: storage }).single('image')

export const getImageLocation = (req) =>
  req.file.destination.substring(1) + '/' + req.file.filename
