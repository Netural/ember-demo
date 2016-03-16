import Ember from 'ember';

export default Ember.Controller.extend({
    title: '',
    isLoading: false,

    actions: {
        submitTodo() {
            this.set('isLoading', true);
            var todo = this.store.createRecord('todo', {
                title: this.get('title')
            });
            todo.save().then(result => {
                this.set('isLoading', false);
                this.set('title', '');
                this.transitionToRoute('todos.todo', result.id);
            });
        }
    }    
});
