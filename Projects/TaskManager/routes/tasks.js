const express = require('express');
const routerTasks = express.Router();
const { getAllTasks } = require('../controllers/tasks');

routerTasks.route('/').get(getAllTasks);

module.exports = {
    routerTasks: routerTasks
}