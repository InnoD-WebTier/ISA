Router.route('/', function() {
	this.render('home');
});

Router.configure({
	layoutTemplate: 'ApplicationLayout',
	notFoundTemplate: '404'
});