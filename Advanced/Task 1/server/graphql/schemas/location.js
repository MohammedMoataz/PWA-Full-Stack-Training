export default {
    
    //  Location entity
    Location: `
        scalar Data
        
        type Location {
            id: Int
            country_name: String
            country_code: String
            state_name: String
            state_code: String
            city_name: String
            selected: Boolean 
        }
    `,

    //  Location input
    LocationInput: `
        input LocationInput {
            country_name: String
            country_code: String
            state_name: String
            state_code: String
            city_name: String
            selected: Boolean
        }
    `,

    //  Location queries
    LocationQueries: `
        getAllLocations: [Location!]!
    `,

    //  Location mutations
    LocationMutations: `
        addLocation(locationInput: LocationInput): Location
    `
}
