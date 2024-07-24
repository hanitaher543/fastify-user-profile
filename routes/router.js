const createUser = require("../controllers/user.controllers");



module.exports = async function (fastify) {

    fastify.post('/create-user',createUser);
    
};