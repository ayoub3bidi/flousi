const Transaction = require('../models/Transaction');
// @desc Get all transactions
// @route GET /transactions
// @access Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// @desc Add a transaction
// @route POST /transactions
// @access Public
exports.addTransactions = (req, res, next) => {
    res.send('POST transaction')
}

// @desc Delete a transaction
// @route DELETE /Transactions/:id
// @access Public
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transaction')
}
 