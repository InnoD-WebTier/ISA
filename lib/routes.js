Router.route('/', function() {
	this.render('home');
});

// Router.route('/announcements', function() {
// 	this.render('Announcements');
// });

Router.configure({
	layoutTemplate: 'ApplicationLayout',
	notFoundTemplate: '404'
});