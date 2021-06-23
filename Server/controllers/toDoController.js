const ToDo = require('../models/toDoModels.js');

const toDoController = {};

toDoController.getTodo = (req, res, next) => {
  ToDo.find()
    .then((results) => console.log(results.rows))
    .then(data => res.locals.list = data.rows)
  next()
};

module.exports = toDoController;