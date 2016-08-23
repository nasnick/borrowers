import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save() {
            console.log("+- save action in edit-form template");
            this.save(this.get('model'));
        },
        cancel() {
            console.log("+- cancel action in edit-form template");
            this.cancel();
        }
    }
});
