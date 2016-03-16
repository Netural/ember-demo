import Ember from 'ember';

export default Ember.Controller.extend({
    authentication: Ember.inject.service(),

    actions: {
        login(username, password) {
            this.get('authentication').login(username, password).then(session => {
                this.transitionToRoute('todos');
            }, error => {
                alert('Could not login');
            })
        }
    }    
});
