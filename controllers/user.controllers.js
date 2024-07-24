const User = require("../models/user");



async function createUser (req, res){

    // Read data from the request body
    const {username, email} = req.body;

    try {

        // Create instance from my model User
        const newUser = await User.create ({
            username,
            email
        });

        res.status(200).send ({ message : 'User Created successfully', user : newUser});

    } catch (error){
        console.error('Error occurred during user creation :', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};


module.exports = createUser;