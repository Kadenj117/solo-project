const express = require('express')

const toDoController = require('../controllers/toDoController');

const router = express.Router();

router.get('/', toDoController.getTodo,
  (req, res) => {
    //console.log('list', res.locals.list)
    return res.status(200).json(res.locals.list);
  }
);

router.post('/', toDoController.postTodo,
  (req, res) => {
    return res.status(200).end();
  }
)

router.delete('/:id', toDoController.deleteItem, (req, res) => {
  return res.status(200).end();
})

router.put('/', toDoController.updateItem,
  (req, res) => {
    return res.status(200).end()
  })

module.exports = router;