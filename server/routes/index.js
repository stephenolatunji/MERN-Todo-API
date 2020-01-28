const todoResource = require('../controller/todosController');

module.exports = (app) => {
    app.route('/api/todos')
        .post(todoResource.create)
        .get(todoResource.getAll);

    app.route('/api/todos/:todoId')
        .get(todoResource.getOne)
        .put(todoResource.update)
        .delete(todoResource.delete);
}