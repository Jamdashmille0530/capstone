import multer from 'multer'

import * as fs from 'fs'

const storage = multer.diskStorage({
  destination: (req, _, cb, __) => {
    const { userId } = req.payload
    const path = `./images/${userId}`
    fs.mkdirSync(path, { recursive: true })
    return cb(null, path)
  },
  filename: (_, file, cb, __) =>
    cb(
      null,
      Date.now() +
        '_' +
        Math.floor(Math.random() * 10000000) +
        '_' +
        file.originalname
    ),
})

export const uploadImg = multer({ storage: storage }).single('image')

export const getImageLocation = (req) =>
  req.file.destination.substring(1) + '/' + req.file.filename
