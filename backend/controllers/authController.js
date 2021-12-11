
exports.authController = {
    loginUser(req, res) {
        const { email, password } = req.body;
        findUser(email, password)
            .then(user => {
                if(user) {
                    res.status(200).json(user);
                } else {
                    res.status(200).json({'error':'unauthorized'});
                }
            })
    }
};