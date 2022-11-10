import express from 'express'
import multer from 'multer'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const appDir = __dirname
const resumeDir = path.join(appDir, '../public/resume/')
const profileDir = path.join(appDir, '../public/profile/')
let fileFullPath = ''
let response = []
let counter = 0

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const userData = JSON.parse(req.body.userData)

        if (userData.type === 'resumeFile')
            fileFullPath = resumeDir

        else if (userData.type === 'profileImage')
            fileFullPath = profileDir

        cb(null, fileFullPath)
    },

    filename: (req, file, cb) => cb(null, file.originalname)
})

const fileFilter = (req, file, cb) => {
    let isFileValid = false
    const userData = JSON.parse(req.body.userData)

    if (parseInt(counter) >= parseInt(userData.length)) {
        response = []
        counter = 0
    }
    counter++

    let fileNameTemp = file.originalname.split('.')
    const fileExtension = fileNameTemp[fileNameTemp.length - 1].toLowerCase()

    if (userData.type === 'resumeFile') {
        if (['doc', 'docx', 'txt', 'pdf'].includes(fileExtension)) {
            fileFullPath = resumeDir + file.originalname
            isFileValid = true
        }
    } else if (userData.type.includes('profileImage')) {
        if (['jpeg', 'jpg', 'png', 'gif'].includes(fileExtension)) {
            fileFullPath = profileDir + file.originalname
            isFileValid = true
        }
    }

    if (isFileValid) {
        response.push({
            blnsUploaded: true,
            strFileName: file.originalname,
            strFileFullPath: fileFullPath
        })
        cb(null, true)

    } else {
        response.push({
            blnsUploaded: false,
            strFileName: file.originalname,
            strFileFullPath: ''
        })
        cb(null, false)
    }
}

const uploadStorage = multer({
    fileFilter: fileFilter,
    storage: storage
})

const router = express.Router()

router.post('/', uploadStorage.array('userFiles', 5), (req, res) => {
    console.log('from post\n', req.files)
    return res.send({ response })
})

export default router