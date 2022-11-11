import db from '../../database/database.js'

const REGION = db.region

export default {

    //  Region Queries
    getRegions: async (args, req) => {
        try {
            let parent_id = args.parent_region
                ? await REGION.findOne({ where: { region: args.parent_region } })
                : 1

            if (isNaN(parent_id))
                parent_id = parent_id.dataValues.id

            let regions = await REGION.findAll({
                where: {
                    p_id: parent_id
                }
            })

            return regions
                .filter(region => region.dataValues.id > 1)
                .map(region => region.dataValues.region)

        } catch (err) {
            throw err
        }
    },

    //  Region Mutations
    addRegion: async (args, req) => {
        try {
            const parent_region = args.regionInput.parent_region
            const region = args.regionInput.region

            if (parent_region === 'root')
                throw Error('ERROR!!!')

            let parent_id = parent_region ? await REGION.findOne({
                where: {
                    region: parent_region
                }
            }) : 1

            if (!parent_id)
                throw new Error('Parent region not exists')

            if (isNaN(parent_id))
                parent_id = parent_id.dataValues.id

            const regionExist = await REGION.findOne({
                where: {
                    p_id: parent_id,
                    region: region
                }
            })

            if (regionExist)
                throw new Error('Region already exists')

            const newRegion = new REGION({
                p_id: parent_id,
                region: region
            })

            return await newRegion.save()
        } catch (err) {
            throw err
        }
    }
}
