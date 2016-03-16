import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://10.28.0.37:3001',
    namespace: 'api'
});
