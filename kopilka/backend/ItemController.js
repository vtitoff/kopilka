import Item from "./Item.js";
import ItemService from "./Service/ItemService.js";

class ItemController {
    async create(req, res) {
        try {
            const item = await ItemService.create(req.body)
            res.status(200).json(item)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const items = await ItemService.getAll();
            res.json(items)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const item = await ItemService.getOne(req.params.id)
            res.json(item)
        } catch (e) {
            res.status(500).json(e)
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