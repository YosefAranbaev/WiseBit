const { Router } = require('express');
const { userController } = require('../controllers/userController');

const usersRouter = new Router();



usersRouter.post('/', userController.addUser); 
usersRouter.get('/', userController.getUsers); //
// outcomesRouter.get('/:id', outcomesController.getIdflight); // localhost:3000/api/orders/6
// outcomesRouter.put('/:id', outcomesController.putFlight); //
usersRouter.delete('/:id', userController.deleteUser); //

module.exports = { usersRouter };