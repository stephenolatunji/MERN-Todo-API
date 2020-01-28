let Todo = require('../models/todo.model');

module.exports.create = (req, res) => {
    const todo = req.body;

    const newTodo = new Todo(todo);

    newTodo.save()
        .then(() => res.json({message: 'todo created'}))
        .catch(err => res.status(400).json({error: err, message: 'todo was not created'}));
};

module.exports.getAll = (req, res) => {
    Todo.find()
        .then(todos => res.json({body: todos}))
        .catch(err => res.status(400).json({ error: err, message: 'Can not find todos' }))
}

module.exports.getOne = (req, res) => {
    Todo.findById(req.params.todoId)
        .then(todo => res.json({body: todo}))
        .catch(err => res.status(400).json({ error: err, message: 'Can not find todo'}))
}

module.exports.update = (req, res) => {
    Todo.update({_id: req.params.todoId})
}

module.exports.delete = (req, res) => {
    Todo.findOneAndDelete({_id: req.params.todoId})
        .then(todos => res.json({body: todos, message: 'todo was deleted'}))
        .catch(err => res.status(400).json({ error: err, message: 'todo was not deleted' }))
}