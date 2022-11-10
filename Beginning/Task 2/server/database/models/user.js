export default (sequelize, DataTypes) => {
    return sequelize.define("tblUser", {
        intUserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        strName: {
            type: DataTypes.STRING
        },
        dtmDOB: {
            type: DataTypes.DATE
        },
        strEmail: {
            type: DataTypes.STRING
        },
        strPassword: {
            type: DataTypes.STRING
        },
        blnIsActive: {
            type: DataTypes.BOOLEAN
        }
    }, {
        defaultScope: {
            attributes: {
                exclude: ['strPassword']
            }
        }
    })
}