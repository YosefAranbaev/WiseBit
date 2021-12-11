const Expense = require('../models/expense');

const getMemberid = (obj1) => {
    let memberId = obj1.split('/')[1];
    return memberId;
}

exports.outcomesController = {
    getExpenses(req, res) {
        console.log("docs");
        Expense.find({})
            .then(docs => {
                console.log(docs);
                res.status(200); res.json(docs);
            })
            .catch(err => { res.status(400); res.json(`Error getting the data from db: ${err}`) });
    },
    putFlight(req, res) {
        const { body } = req;
        Expense.updateOne({ _id: getMemberid(req.url) }, { amount: body.amount})
            .then(docs => {
                res.status(200); res.json(docs);
            })
            .catch(err => { res.status(400); res.json(`Error updating the data from db: ${err}`) });
    },
    deleteFlight(req, res) {
        Expense.deleteOne({ _id: getMemberid(req.url) })
            .then(docs => {
                res.status(200); res.json(docs);
            })
            .catch(err => { res.status(400); res.json(`Error deleting the data from db: ${err}`) });
    },
    addFlight(req, res) {
        console.log("ddd");
        const { body } = req;
        const newExpense = new Expense({
            "uid": body.uid,
            "CategoryName": body.CategoryName,
            "amount":  body.amount
        });
        console.log(newExpense);
        if (!(body.uid && body.CategoryName && body.amount)) {
            res.status(404).send("Error saving a Outcome");
        }
        else {
            newExpense.save().then(result => {
                if (result) {
                    res.json(result);
                } else {
                    res.status(404).send("Error saving a Outcome");
                }
            });
        }
    }
}