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

Meteor.subscribe('albums');
Meteor.subscribe('pictures');
Meteor.subscribe('announcements');
// Template.home.onCreated(function() {

// });

Template.home.helpers({
	announcements: function() {
		list = [];
		found = Announcements.find({}).fetch();
		for (var i = 0; i < found.length; i++) {
			list[i] = {
				title: found[i].title,
				author: found[i].author,
				entry: found[i].entry,
				time: found[i].time.toString(),
				date: found[i].date,
				location: found[i].location
			};
		}
		return list;
	}
});