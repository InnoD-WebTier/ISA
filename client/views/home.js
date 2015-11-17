// ReactiveTemplates.onCreated('collections.announcements.index', function() {
// 	this.subscribe('announcements');
// 	console.log('asdsfhfhk,jdgsfsf');
// 	console.log(Announcements.find({}));
// });

Template.home.helpers({
	announcements: function() {
		console.log('yay');
		list = [];
		found = null;
		Meteor.call('announcementFind', function (err, success) {
			console.log('called');
			if (err) {
				console.log('Failed to find anything');
			} else {
				console.log(success);
				found = success;
				for (var i = 0; i < found.length; i++) {
					console.log(found[i]);
					list[i] = {
						title: found[i].title,
						author: found[i].author,
						entry: found[i].entry,
						time: found[i].time.toString()
					};
				}
				return list;
			}
		});
		console.log(found);
	}
});