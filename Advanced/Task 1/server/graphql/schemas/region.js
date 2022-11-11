export default {

    //  Region entity
    Region: `
        scalar Data
        
        type Region {
            id: Int
            p_id: Int
            region: String
        }
    `,

    //  Region input
    RegionInput: `
        input RegionInput {
            parent_region: String
            region: String!
        }
    `,

    //  Region queries
    RegionQueries: `
        getRegions(parent_region: String): [String!]!
    `,

    //  Region mutations
    RegionMutations: `
        addRegion(regionInput: RegionInput): Region
    `
}
