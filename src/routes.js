const express = require('express');

const routes = express.Router();

const devController = require('./controllers/dev.controller');
const likeController = require('./controllers/like.controller');
const deslikeController = require('./controllers/deslike.controller');

routes.get('/devs', devController.index)
routes.post('/devs', devController.store)
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/deslikes', deslikeController.store);

module.exports = routes;