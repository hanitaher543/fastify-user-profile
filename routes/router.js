const createProfile = require("../controllers/profile.controllers");
const createUser = require("../controllers/user.controllers");



module.exports = async function (fastify) {

    fastify.post('/create-user',createUser);
    fastify.post('/create-profile', createProfile);
    
};