const Data = require('../models/dataModel');
const bcrypt = require('bcrypt'); 

const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log('Received name:', name);
        console.log('Received password:', password);

        const user = await Data.findOne({ name }); // Find the user by name
        console.log('User found:', user);

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                res.render('loginSuccess', { name: user.name });
            } else {
                res.status(401).send('Login Failed: Incorrect password');
            }
        } else {
            res.status(401).send('Login Failed: Name not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { login };
