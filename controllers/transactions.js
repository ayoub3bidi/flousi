const Transaction = require('../models/Transaction');
// @desc Get all transactions
// @route GET /transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
      const transactions = await Transaction.find();
  
      return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
}

// @desc Add a transaction
// @route POST /transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body

        const transaction = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)

            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc Delete a transaction
// @route DELETE /Transactions/:id
// @access Public
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transaction')
}
 