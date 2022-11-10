import { v4 as uuidv4 } from 'uuid'

import connection from '../config/db.js'

class Reel {
  constructor(photo, caption, date = '2022-09-27', location, userId) {
    this.id = uuidv4()
    this.photo = photo
    this.caption = caption
    this.date = date
    this.location = location
    this.userId = userId
  }

  save() {
    let sql = `
    INSERT INTO reels(
      id,
      photo,
      caption,
      date,
      location,
      user_id
    )
    VALUES(
      '${this.id}',
      '${this.photo}',
      '${this.caption}',
      '${this.date}',
      '${this.location}',
      '${this.userId}'
    );
    `

    return connection.execute(sql)
  }

  static findAll() {
    let sql = "SELECT * FROM reels;"

    return connection.execute(sql)
  }

  static findById(id) {
    let sql = `SELECT * FROM reels WHERE id = '${id}';`

    return connection.execute(sql)
  }

  static updateById(id, updatedReel) {
    let sql = `UPDATE reels SET
    photo = '${updatedReel.photo}',
    caption = '${updatedReel.date}',
    caption = '${updatedReel.caption}',
    location = '${updatedReel.location}',
    WHERE (id = '${id}');`

    return connection.execute(sql)
  }

  static deleteById(id) {
    let sql = `DELETE FROM reels WHERE id = '${id}';`

    return connection.execute(sql)
  }
}

export default Reel
