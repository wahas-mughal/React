const express = require('express'); // import express
const router = express.Router(); // call the Router from express
const {getTransactions, addTransactions, deleteTransactions} = require('../controllers/transactionscontroller'); // import the controller 

// for testing
// router.get('/', (req, res) => res.send('Hello'));

// setup transactions route
router
.route('/')
.get(getTransactions)
.post(addTransactions);

router
.route('/:id')
.delete(deleteTransactions);

module.exports = router; //export router 