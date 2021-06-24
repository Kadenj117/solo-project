const ToDo = require('../models/toDoModels.js');

const toDoController = {};

toDoController.getTodo = async (req, res, next) => {
  await ToDo.find({}, (err, list) => {
    if (err) res.status(400);
    res.locals.list = list;
  })
  return next()
};

toDoController.postTodo = async (req, res, next) => {
  //console.log('data sent: ', req.body)
  await ToDo.create(req.body, (err, todo) => {
    if (err) res.status(400);
    res.locals.todo = todo;
  })
  return next();
}

toDoController.deleteItem = async (req, res, next) => {
  //console.log('data recieved', req.params)
  await ToDo.deleteOne({ _id: req.params.id }, (err, item) => {
    if (err) return next(err)
    res.locals.deleted = item;
  })
  return next();
}

toDoController.updateItem = async (req, res, next) => {
  //console.log('here', !req.body.done)

  await ToDo.updateOne({ _id: req.body._id }, { done: !req.body.done })
  next();
}

module.exports = toDoController;