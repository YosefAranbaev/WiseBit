const {Schema, model} = require('mongoose');

const expenseSchema = new Schema({
    uid: {type:String},
    CategoryName: {type:String},
    amount: {type:Number},
},{collection:'plans'});

const Expense = model('Expense', expenseSchema);

module.exports = Expense;