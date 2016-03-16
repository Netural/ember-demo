import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteTodo(todo) {
            todo.deleteRecord();
            todo.save();
        }
    }
});
