Meteor.subscribe('albums');
Meteor.subscribe('pictures');
Meteor.subscribe('announcements');

ReactiveTemplates.onCreated('collections.announcements.index', function() {
	this.subscribe('announcements');
});

ReactiveTemplates.onCreated('collections.albums.index', function() {
	this.subscribe('albums');
	console.log("albums");
	console.log(Albums.find({}).fetch());
});

ReactiveTemplates.onCreated('collections.pictures.index', function() {
	this.subscribe('pictures');
	console.log("pictures");
	console.log(Pictures.find({}).fetch());
});

Template.home.helpers({
	announcements: function() {
		found = Announcements.find({}).fetch();
		return found;
	}
});
