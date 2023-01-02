const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    todos: [{type: Object, ref: 'Todo'}],
    roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User)