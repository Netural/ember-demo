import Ember from 'ember';

export default Ember.Controller.extend({
    authentication: Ember.inject.service(),
    
    actions: {
        logout() {
            this.get('authentication').logout();
            this.transitionToRoute('login');
        }
    }
});
