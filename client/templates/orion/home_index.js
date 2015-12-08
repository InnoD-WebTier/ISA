ReactiveTemplates.onCreated('home', function() {

  this.subscribe('announcements', {sort: {submitted: -1, _id: -1}, limit: 0});
});