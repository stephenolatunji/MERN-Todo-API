const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        trim: true
    }
});
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo