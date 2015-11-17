Router.route('/', function() {
	this.render('home');
});

Router.route('home', {
	controller: 'MainController'
});

// Router.route('/announcements', function() {
// 	this.render('Announcements');
// });

Router.configure({
	layoutTemplate: 'ApplicationLayout',
	notFoundTemplate: '404',
	waitOn: function() {
		return Meteor.subscribe("announcements");
	}
});

MainController = RouteController.extend({
  template: 'home',
  data: function(){
    return {announcements: Announcements.find({}, {sort: {order: 1}})};
  }
});