const { Schema, model } = require('mongoose')

const Todo = new Schema({
    value: {type: Object},
})

module.exports = model('Todo', Todo)