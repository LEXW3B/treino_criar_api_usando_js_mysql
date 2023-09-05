const express = require('express');
const routes = express.Router();

const CarController = require('./controllers/CarController');

routes.get('/cars', CarController.getAll);
routes.get('/cars/:codigo', CarController.getOne);
routes.post('/car', CarController.insert);
routes.put('/car/:codigo', CarController.update);

module.exports = routes;