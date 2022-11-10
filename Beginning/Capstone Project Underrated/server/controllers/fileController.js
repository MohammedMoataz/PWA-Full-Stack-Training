import multer from 'multer'
import path from 'path'
import url from 'url'
import { Router } from 'express'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const appDir = __dirname
// const serverDir = path.join(appDir, '../public/')
const clientDir = path.join(appDir, '../../client/src/assets/public/')
let fileFullPath = ''
let response

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, clientDir)
    },

    filename: (req, file, cb) => cb(null, file.originalname)
})

const fileFilter = (req, file, cb) => {
    let isFileValid = false
    let fileNameTemp = file.originalname.split('.')
    let fileExtension = fileNameTemp[fileNameTemp.length - 1].toLowerCase()

    if (['jpeg', 'jpg', 'png'].includes(fileExtension)) {
        fileFullPath = clientDir + file.originalname
        isFileValid = true
    }

    if (isFileValid) {
        response = {
            isImgUploaded: true,
            fileName: file.originalname,
            filePath: fileFullPath
        }
        cb(null, true)

    } else {
        response = {
            isImgUploaded: false,
            fileName: file.originalname,
            filePath: ''
        }
        cb(null, false)
    }
}

const uploadStorage = multer({
    fileFilter: fileFilter,
    storage: storage
})

const router = Router()

router.post('/', uploadStorage.single('photo'), (req, res) => {
    console.log('response: ', response)
    res.status(201).json(response)
})

export default router