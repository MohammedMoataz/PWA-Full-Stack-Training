import Reel from '../models/reelModel.js'

export const getAllReels = async (req, res) => {
  try {
    const reels = await Reel.findAll()
    console.log('Reels: ', reels[0])

    res.status(200).json({ reels: reels[0] })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createReel = async (req, res) => {
  let photo = req.body.photo
  let caption = req.body.caption
  let date = req.body.date
  let location = req.body.location
  let userId = req.body.userId

  let reel = new Reel(photo, caption, date, location, userId)

  try {
    await reel.save()
    console.log('reel: ', reel)

    res.status(201).json({ reel })

  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

export const getReelById = async (req, res) => {
  try {
    let reelId = req.params.id

    let reel = await Reel.findById(reelId)

    res.status(200).json({ reel: reel[0].at(0) })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateReelById = async (req, res) => {
  try {

    let reelId = req.params.id
    let updatedReel = req.body

    let reel = await Reel.updateById(reelId, updatedReel)

    res.status(200).json({ affectedRows: reel[0].affectedRows })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteReelById = async (req, res) => {
  try {
    let reelId = req.params.id

    let reel = await Reel.deleteById(reelId)

    res.status(200).json({ affectedRows: reel[0].affectedRows })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
