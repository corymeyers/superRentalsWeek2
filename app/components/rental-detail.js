import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if(confirm('Really really man?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
