const User = require('../models/user').User;
const Boom = require('boom');

export function list(request, h) {
    let res = {};
    
    try {
        res = User.find({})
    } catch(err) {
        Boom.notFound(err);
    }
    
    return res;
}

export function create (request, h) {
    
    const user = new User();
    user.email = request.payload.email;
    user.password = request.payload.password;
    
    try {
        user.save();
    } catch(err) {
        throw Boom.badImplementation(err);
    }
    
    return {
        ok: true,
    };
};