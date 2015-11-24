ReactiveTemplates.onCreated('collections.announcements.index', function() {
	this.subscribe('announcements');
	console.log('asdsfhfhk,jdgsfsf');
	console.log(Announcements.find({}));
});

// Template.home.onCreated(function() {

// });

Template.home.helpers({
	announcements: function() {
		console.log('yay');
		list = [];
		found = Announcements.find({}).fetch();
		for (var i = 0; i < found.length; i++) {
			list[i] = {
				title: found[i].title,
				author: found[i].author,
				entry: found[i].entry,
				time: found[i].time.toString()
			};
		}
		console.log(list);
		return list;
	}
});