import connection from '../config/db.js'

class User {
  constructor(name, birthdate, email, password) {
    this.name = name
    this.birthdate = birthdate
    this.email = email
    this.password = password
  }

  save() {
    let sql = `
    INSERT INTO tblUser(
        strName,
        dtmDOB,
        strEmail,
        strPassword
    )
    VALUES(
      '${this.name}',
      '${this.birthdate}',
      '${this.email}',
      '${this.password}'
    );
    `

    return connection.execute(sql)
  }

  static findAll() {
    let sql = "SELECT * FROM tblUser;"

    return connection.execute(sql)
  }

  static findById(id) {
    let sql = `SELECT * FROM tblUser WHERE intUserID = ${id};`

    return connection.execute(sql)
  }
}

export default User
