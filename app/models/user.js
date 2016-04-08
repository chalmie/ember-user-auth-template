import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  posts: DS.hasMany('post', {async: true }),
  answers: DS.hasMany('answer', {async: true }),
  total_answers: 0,
  best_answers: 0
});
