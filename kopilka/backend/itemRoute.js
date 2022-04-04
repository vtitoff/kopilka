import Router from "express";
import ItemController from "./ItemController.js";

const itemRouter = new Router()

itemRouter.post('/', ItemController.create)
itemRouter.get('/', ItemController.getAll)
itemRouter.get('/item/:id', ItemController.getOne)
itemRouter.patch('/item/:id', ItemController.update)
itemRouter.delete('/item/:id', ItemController.delete)

export default itemRouter;