Meteor.subscribe('announcements');

Template.home.helpers({
	announcements: function() {
		found = Announcements.find({}).fetch();
		return found;
	}
});
