import User from "./User.js";

class UserController {
    async create(req, res) {
        try {
            const {user_id, login, password} = req.body
            const post = await User.create({user_id, login, password})
            console.log(req.body)
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const items = await User.find();
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
            const item = await User.findById(id)
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

export default new UserController();