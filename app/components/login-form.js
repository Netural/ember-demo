import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['login_form'],
    username: '',
    password: '',
    isSubmitted: false,

    usernameError: Ember.computed('username', 'isSubmitted', function() {
        return this.get('isSubmitted') && this.get('username.length') < 3;
    }),

    passwordError: Ember.computed('password', 'isSubmitted', function() {
        return this.get('isSubmitted') && this.get('password.length') < 3;
    }),

    isSubmitDisabled: Ember.computed('username', 'password', function() {
        return this.get('username.length') < 3 || this.get('password.length') < 3;
    }),    

    submit(event) {
        event.preventDefault();
        this.set('isSubmitted', true);
        if (this.get('isSubmitDisabled')) {
            return;
        }
        this.sendAction('onLogin', this.get('username'),this.get('password'));
    }
});
