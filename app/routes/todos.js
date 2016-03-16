import Ember from 'ember';

export default Ember.Route.extend({
    authentication: Ember.inject.service(),

    beforeModel() {
        if (!this.get('authentication').isAuthenticated()) {
            this.transitionTo('login');
            return false;
        }
    },
    model() {
        return this.store.findAll('todo');
    }
});
