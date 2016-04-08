import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post')
    });
    console.log(this.get('session'));
  },
  actions: {
    savePost(params) {
      params.author = this.get('session.currentUser.email');
      var newPost = this.store.createRecord('post', params);
      newPost.save();
    }
  }
});
