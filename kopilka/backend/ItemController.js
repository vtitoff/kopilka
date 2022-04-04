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

    async getAll(req, res){

    }

    async getOne(req, res){

    }

    async update(req, res){

    }

    async delete(req, res){

    }
}

export default new ItemController();