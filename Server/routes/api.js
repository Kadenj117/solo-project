const express = require('express')

const toDoController = require('../controllers/toDoController');

const router = express.Router();

router.get('/', toDoController.getTodo,
  (req, res) => {
    return res.status(200)
  }
);

module.exports = router;