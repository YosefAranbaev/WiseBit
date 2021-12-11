const User = require('../models/user');
const getMemberid = (obj1) => {
    let memberId = obj1.split('/')[1];
    return memberId;
}
exports.userController = {
    getUsers(req, res) {
        console.log("docs");
        User.find({})
            .then(docs => {
                console.log(docs);
                res.status(200); res.json(docs);
            })
            .catch(err => { res.status(400); res.json(`Error getting the data from db: ${err}`) });
    },
    // putFlight(req, res) {
    //     const { body } = req;
    //     Expense.updateOne({ _id: getMemberid(req.url) }, { amount: body.amount})
    //         .then(docs => {
    //             res.status(200); res.json(docs);
    //         })
    //         .catch(err => { res.status(400); res.json(`Error updating the data from db: ${err}`) });
    // },
    deleteUser(req, res) {
        User.deleteOne({ _id: getMemberid(req.url) })
            .then(docs => {
                res.status(200); res.json(docs);
            })
            .catch(err => { res.status(400); res.json(`Error deleting the data from db: ${err}`) });
    },
    addUser(req, res) {
        console.log("ddd");
        const { body } = req;
        const newUser = new User({
            "username": body.username,
            "email": body.email,
            "phone":  body.phone,
            "password":  body.password,
        });
        if (!(body.username && body.email && body.phone && body.password)) {
            res.status(404).send("Error saving a Outcome");
        }
        else {
            newUser.save().then(result => {
                if (result) {
                    res.json(result);
                } else {
                    res.status(404).send("Error saving a Outcome");
                }
            });
        }
    }
}