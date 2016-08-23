import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save(model) {
            console.log("+-- friend saved to model");
        },
            cancel() {
            console.log("+-- canceled saved action");
        }
    }
});
