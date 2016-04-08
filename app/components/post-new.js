import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
        var params = {
        question: this.get('question') ? this.get('question') : "",
        detail: this.get('detail') ? this.get('detail') : "",
        };
        this.set('addNewPost', false);
        this.sendAction('savePost', params);
    }
  }
});
