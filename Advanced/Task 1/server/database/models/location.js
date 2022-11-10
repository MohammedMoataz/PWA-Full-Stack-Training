export default (sequelize, DataTypes) => {
    return sequelize.define("location", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country_name: {
            type: DataTypes.STRING
        },
        country_code: {
            type: DataTypes.STRING
        },
        state_name: {
            type: DataTypes.STRING
        },
        state_code: {
            type: DataTypes.STRING
        },
        city_name: {
            type: DataTypes.STRING
        },
        selected: {
            type: DataTypes.BOOLEAN
        },
    })
}