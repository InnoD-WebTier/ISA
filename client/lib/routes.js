Router.route('/', function() {
    this.render('home');
}, {
    onAfterAction: function() {
        return setTitle('Home');
    }
});

Router.route('/about', function() {
    this.render('about');
}, {
    onAfterAction: function() {
        return setTitle('About');
    }
});

Router.route('/blog', function() {
    this.render('blog');
}, {
    onAfterAction: function() {
        return setTitle('Blog');
    }
});

Router.route('/diwali', function() {
	this.render('diwali');
});

Router.route('/events', function() {
    this.render('events');
}, {
    onAfterAction: function() {
        return setTitle('Events');
    }
});

Router.route('/gallery', function() {
    this.render('gallery');
}, {
    onAfterAction: function() {
        return setTitle('Gallery');
    }
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

this.setTitle = function(title) {
  document.title = title;
};
