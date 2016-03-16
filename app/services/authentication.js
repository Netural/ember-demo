import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Service.extend({
    session: null,

    isAuthenticated() {
        let token = this.get('session.token');
        return !!(token ? token : this.restoreSession());
    },

    login(username, password) {
        // Perform login
        return new Promise((resolve, reject) => {
            // do some async stuff
            ajax('http://10.28.0.37:3001/api/account/login', {
                method: 'POST',
                data: { username, password }
            }).then(session => {
                this.set('session', session);
                localStorage.setItem('session', JSON.stringify(session));
                resolve(session);
            }, error => {
                reject(error);
            })
        });
    },

    logout() {
        // Perform logout
        this.set('session', null);
        localStorage.removeItem('session');
    },

    restoreSession() {
        let session = JSON.parse(localStorage.getItem('session'));
        if (session && session.username && session.token) {
            this.set('session', session);
            return session;
        } else {
            this.logout();
            return null;
        }
    }    
});
