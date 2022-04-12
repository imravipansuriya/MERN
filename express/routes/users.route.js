const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.get("/", userController.getAllUsers); // users/
userRouter.get("/:id", userController.getOneUser); // users/1
userRouter.post("/", userController.addUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;