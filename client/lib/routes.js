// This file handles the routing for the application using the Iron-Router package for Meteor.
// Look at any route for an example of how to add another page route to this file.
// The setTitle function is declared at the bottom of the file and sets the title of each page.

Router.route('/', function() {
    this.render('home');
}, {
    onAfterAction: function() {
        return setTitle('Home | ISA');
    }
});

Router.route('/about', function() {
    this.render('about');
}, {
    onAfterAction: function() {
        return setTitle('About | ISA');
    }
});

Router.route('/blog', function() {
    this.render('blog');
}, {
    onAfterAction: function() {
        return setTitle('Blog | ISA');
    }
});

Router.route('/diwali', function() {
    this.render('diwali');
}, {
    onAfterAction: function() {
        return setTitle('Diwali | ISA');
    }
});

Router.route('/events', function() {
    this.render('events');
}, {
    onAfterAction: function() {
        return setTitle('Events | ISA');
    }
});

Router.route('/gallery', function() {
    this.render('gallery');
}, {
    onAfterAction: function() {
        return setTitle('Gallery | ISA');
    }
});

Router.route('/holi', function() {
    this.render('holi');
}, {
    onAfterAction: function() {
        return setTitle('Holi | ISA');
    }
});

Router.route('/raasgarba', function() {
    this.render('raasgarba');
}, {
    onAfterAction: function() {
        return setTitle('Raasgarba | ISA');
    }
});

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

this.setTitle = function(title) {
  document.title = title;
};
