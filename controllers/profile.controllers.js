const Profile = require("../models/profile");
const User = require("../models/user");




async function createProfile (req, res){

    // Read data from request body
    const {bio}  = req.body;
    const userId = req.query.userId;


    try{
        // Vérifiez si la user existe
    const user = await User.findByPk(userId);
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
        }
        
        // Create instance for my model Profile
        const newProfile = await Profile.create({
            bio,
            userId   
        });
    res.status(200).send({ message : 'Profile created successfully', profile : newProfile});   



    } catch (error){
        console.error('Error occurred during user creation :', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};



module.exports = createProfile;