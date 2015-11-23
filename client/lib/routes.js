Router.route('/', function() {
    this.render('home');
});

Router.route('/about', function() {
    this.render('about');
});

Router.route('/blog', function() {
    this.render('blog');
});

Router.route('/events', function() {
    this.render('events');
});

Router.route('/gallery', function() {
    this.render('gallery');
});

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
