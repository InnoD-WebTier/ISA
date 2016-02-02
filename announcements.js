Announcements = new orion.collection('announcements', {
	singularName: 'announcement',
	pluralName: 'announcements',
	link: {
		title: 'Announcements'
	},
	tabular: {
	    columns: [
	      {
	        data: "title",
	        title: "Title"
	      },{
	        data: "author",
	        title: "Author"
	      },{
	      	data: "date",
	      	title: "Event Date"
	      },{
	      	data: "location",
	      	title: "Event Location"
	      },
	      orion.attributeColumn('createdAt', 'time', 'Submitted')
	    ]
  }
});

Announcements.attachSchema(new SimpleSchema ({
	title: {
		type: String,
		optional: false,
		label: 'Announcement Title'
	},
	author: {
		type: String,
		optional: false,
		label: 'Author'
	},
	date: {
		type: String,
		optional: false,
		label: 'Event Date'
	},
	location: {
		type: String,
		optional: false,
		label: "Event location"
	},
	entry: orion.attribute('summernote', {
		label: 'Entry'
	}),
	time: orion.attribute('createdAt')
}));



Announcements.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});
