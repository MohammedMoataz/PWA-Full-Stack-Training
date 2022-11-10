import db from '../../database/database.js'

const location = db.location

export default {

    //  Location Queries
    getAllLocations: async (args, req) => {
        try {
            return await location.findAll()
        } catch (err) {
            throw err
        }
    },

    //  Location Mutations
    addLocation: async (args, req) => {
        try {
            console.log('args: ', args)

            const newLocation = new location({
                country_name: args.locationInput.country_name,
                country_code: args.locationInput.country_code,
                state_name: args.locationInput.state_name,
                state_code: args.locationInput.state_code,
                city_name: args.locationInput.city_name,
                selected: args.locationInput.selected
            })

            return await newLocation.save()
        } catch (err) {
            throw err
        }
    }
}
