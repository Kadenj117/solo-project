const express = require('express')

const toDoController = require('../controllers/toDoController');

const router = express.Router();

router.get('/', toDoController.getTodo,
  (req, res) => {
    console.log('list', res.locals.list)
    return res.status(200).json(res.locals.list).send();
  }
);

router.post('/', toDoController.postTodo,
  (req, res) => {
    return res.status(200).send();
  }
)

router.delete('/:id', toDoController.deleteItem, (req, res) => {
  return res.status(200).send();
})

router.put('/', toDoController.updateItem,
  (req, res) => {
    return res.status(200).send()
  })

module.exports = router;