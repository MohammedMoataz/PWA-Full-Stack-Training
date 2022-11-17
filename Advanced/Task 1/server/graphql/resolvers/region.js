import db from '../../database/database.js'

const REGION = db.region

export default {

    //  Region Queries
    getRegions: async (args, req) => {
        const parent_region = args.parent_region.trim()

        let parent_id = (parent_region === "root")
            ? 1
            : await REGION.findOne({
                where: { region: parent_region }
            })
                .then(res => res.dataValues.id)
                .catch(() => 0)

        if (parent_id === 0)
            throw new Error('Parent region not exists')

        return await REGION.findAll({
            where: {
                p_id: parent_id
            }
        })
            .then(res => res
                .filter(region => region.dataValues.id > 1)
                .map(region => region.dataValues.region))
            .catch(err => err)
    },

    //  Region Mutations
    addRegion: async (args, req) => {
        const parent_region = args.regionInput.parent_region.trim()
        const region = args.regionInput.region.trim()

        let parent_id = (parent_region === "root")
            ? 1
            : await REGION.findOne({
                where: {
                    region: parent_region
                }
            })
                .then(res => res.dataValues.id)
                .catch(() => {
                    throw new Error('Parent region not exists')
                })

        let regionExist = await REGION.findOne({
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
            .catch(err => err)
    }

}
