import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', {path: '/todos'}, function() {
    this.route('todo', {path: '/:todo_id'});
    this.route('new');
  });
  this.route('login');
});

export default Router;
