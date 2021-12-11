const { Router } = require('express');
const { outcomesController } = require('../controllers/outcomesController');

const outcomesRouter = new Router();



outcomesRouter.post('/', outcomesController.addFlight); //
outcomesRouter.get('/', outcomesController.getExpenses); //
// outcomesRouter.get('/:id', outcomesController.getIdflight); // localhost:3000/api/orders/6
// outcomesRouter.put('/:id', outcomesController.putFlight); //
// outcomesRouter.delete('/:id', outcomesController.deleteFlight); //

module.exports = { outcomesRouter };