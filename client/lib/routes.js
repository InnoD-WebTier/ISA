Router.route('/', function() {
    this.render('home');
});

Router.route('/about', function() {
    this.render('about');
});

Router.route('/gallery', function() {
    this.render('gallery');
});

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
