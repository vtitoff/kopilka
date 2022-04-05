import Item from "./Item.js";

class ItemController {
    async create(req, res) {
        try {
            const {name, description, full_sum, current_sum, currency, user_id, archive} = req.body
            const post = await Item.create({name, description, full_sum, current_sum, currency, user_id, archive})
            console.log(req.body)
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const items = await Item.find();
            return res.json(items)
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const item = await Item.findById(id)
            return res.json(item)
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
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

export default new ItemController();