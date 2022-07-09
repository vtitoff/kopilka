import Router from "express";
import UserController from "./UserController.js";

const userRouter = new Router()

userRouter.post('/', UserController.create)
userRouter.get('/', UserController.getAll)
userRouter.get('/user/:id', UserController.getOne)
userRouter.patch('/user/:id', UserController.update)
userRouter.delete('/user/:id', UserController.delete)

export default userRouter;