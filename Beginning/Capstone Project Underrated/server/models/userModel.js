import { v4 as uuidv4 } from 'uuid'

import connection from '../config/db.js'

class User {
  constructor(photo, name, email, password, country) {
    this.photo = photo
    this.name = name
    this.email = email
    this.password = password
    this.country = country
    this.id = uuidv4()
  }

  save() {
    let sql = `
    INSERT INTO users(
      id,
      photo,
      name,
      email,
      password,
      country
    )
    VALUES(
      '${this.id}',
      '${this.photo}',
      '${this.name}',
      '${this.email}',
      '${this.password}',
      '${this.country}'
    );
    `

    return connection.execute(sql)
  }

  static findAll() {
    let sql = "SELECT * FROM users;"

    return connection.execute(sql)
  }

  static findByEmail(email) {
    let sql = `SELECT * FROM users WHERE email = '${email}';`

    return connection.execute(sql)
  }

  static findById(id) {
    let sql = `SELECT * FROM users WHERE id = '${id}';`

    return connection.execute(sql)
  }

  static updateById(id, updatedUser) {
    let sql = `UPDATE users SET
     name = '${updatedUser.name}',
      email = '${updatedUser.email}',
      password = '${updatedUser.password}',
      country = '${updatedUser.country}' 
      WHERE (id = '${id}');`

    return connection.execute(sql)
  }

  static deleteById(id) {
    let sql = `DELETE FROM users WHERE id = '${id}';`

    return connection.execute(sql)
  }
}

export default User
