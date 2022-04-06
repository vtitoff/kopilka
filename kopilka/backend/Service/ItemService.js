import Item from "../Item.js";

class ItemService {
    async create(item) {
        try {
            return await Item.create(item)
        } catch (e) {
            throw new Error('Create Error!')
        }
    }

    async getAll(items) {
        try {
            return await Item.find()
        } catch (e) {
            throw new Error('Get Error!')
        }
    }

    async getOne(id) {
        try {
            if (!id) {
                new Error('Id Error!')
            }
            return await Item.findById(id)
        } catch (e) {
            throw new Error('Get Error!')
        }
    }

    async update(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }

    async delete(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }
}

export default new ItemService();