import ItemService from "./Service/ItemService.js";

class ItemController {
    async create(req, res) {
        try {
            const item = await ItemService.create(req.body)
            res.append('Access-Control-Allow-Origin', ['*']);
            res.status(200).json(item)
        } catch (e) {
            res.status(500).json(e.message())
        }
    }

    async getAll(req, res) {
        try {
            const items = await ItemService.getAll();
            res.append('Access-Control-Allow-Origin', ['*']);
            res.json(items)	
        } catch (e) {
            res.status(500).json(e.message())
        }
    }

    async getOne(req, res) {
        try {
            const item = await ItemService.getOne(req.params.id)
            res.append('Access-Control-Allow-Origin', ['*']);
            res.json(item)
        } catch (e) {
            res.status(500).json(e.message())
        }
    }

    async update(req, res) {
        try {
            const item = await ItemService.update(req.body)
            res.append('Access-Control-Allow-Origin', ['*']);
            res.json(item)
        } catch (e) {
            res.status(500).json(e.message())
        }
    }

    async delete(req, res) {
        try {
            const item = await ItemService.delete(req.params.id)
            res.append('Access-Control-Allow-Origin', ['*']);
            res.json(item)
        } catch (e) {
            res.status(500).json(e.message())
        }
    }
}

export default new ItemController();
