const Transaction = require("../models/Transaction");

// @desc  Get all transactions
// @route GET /api/v1/transactions
// access public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "internal server error",
    });
  }
};

// @desc  Add all transactions
// @route POST /api/v1/transactions
// access public

exports.addTransactions = async (req, res, next) => {
  try {
    const { text , amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const msgs = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
          success: false,
          error: msgs
      })
    } else {
      return res.status(500).json({
        success: false,
        error: "internal server error",
      });
    }
  }
};

// @desc  Delete all transactions
// @route DELETE /api/v1/transactions/:id
// access public

exports.deleteTransactions = async (req, res, next) => {
  try {
      const transaction = await Transaction.findById(req.params.id);

      if(!transaction){
          return res.status(404).json({
              success: false,
              error: 'No transaction found'
          })
      }

      await transaction.remove();

      return res.status(200).json({
          success: true,
          data: {}
      });
      
  } catch (err) {
      res.status(500).json({
          success: false,
          error: "internal server error"
      });
  }
};
