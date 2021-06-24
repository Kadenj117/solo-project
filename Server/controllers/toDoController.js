const ToDo = require('../models/toDoModels.js');

const toDoController = {};

toDoController.getTodo = (req, res, next) => {
  ToDo.find({}, (err, list) => {
    if (err) return res.status(400).send();
    res.locals.list = list;
    return next()
  })

};

toDoController.postTodo = (req, res, next) => {
  //console.log('data sent: ', req.body)
  ToDo.create(req.body, (err, todo) => {
    if (err) return res.status(400).send();
    res.locals.todo = todo;
    return next();
  })

}

toDoController.deleteItem = (req, res, next) => {
  //console.log('data recieved', req.params)
  ToDo.deleteOne({ _id: req.params.id }, (err, item) => {
    if (err) return res.status(400).send()
    res.locals.deleted = item;
    return next();
  })
  
}

toDoController.updateItem = (req, res, next) => {
  //console.log('here', !req.body.done)

  ToDo.updateOne({ _id: req.body._id }, { done: !req.body.done }, (err, item) => {
    return next();
  })
}

module.exports = toDoController;