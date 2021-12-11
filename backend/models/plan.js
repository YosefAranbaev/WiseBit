const Expense = require('./expense');
const Incomes = require('./income');
const { Schema, model } = require('mongoose');
const planSchema = new Schema({
    uid: String,
    Date: String,
    Expense: [Expenses],
    Income: [Incomes],
    desiredSavings: Number,
}, { collection: 'plan' })
const Plan = model('Plan', planSchema)
module.exports = Plan;