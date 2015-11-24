Router.route('/', function() {
    this.render('home');
});

Router.route('/about', function() {
    this.render('about');
});

Router.route('/blog', function() {
    this.render('blog');
});

Router.route('/diwali', function() {
	this.render('diwali');
});

Router.route('/events', function() {
    this.render('events');
});

Router.route('/gallery', function() {
    this.render('gallery');
});

Router.route('/holi', function() {
	this.render('holi');
});

Router.route('/raasgarba', function() {
	this.render('raasgarba');
});

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
