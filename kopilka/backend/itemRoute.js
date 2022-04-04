import Router from "express";
import Item from "./Item.js";

const itemRouter = new Router()

itemRouter.post('/', async (req, res) => {
    try {
        const {name, description, full_sum, current_sum, currency, user_id, archive} = req.body
        const post = await Item.create({name, description, full_sum, current_sum, currency, user_id, archive})
        console.log(req.body)
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json(e)
        console.log(e)
    }
})
itemRouter.get('/')
itemRouter.post('/item/:id')
itemRouter.patch('/item/:id')
itemRouter.delete('/item/:id')

export default itemRouter;