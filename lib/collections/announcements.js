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
	      },
	      orion.attributeColumn('createdAt', 'time', 'Submitted'),
	    ]
  }
});

Meteor.methods({
	announcementInsert: function(announcementAttributes) {
		check(this.userId, String);
		check(announcementAttributes, {
			title: String,
			author: String
		});

		var announcement = _.extend(announcementAttributes, {
			submitted: new Date()
		});

		var announcementId = Announcements.insert(announcement);
		return announcementId;
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
	entry: orion.attribute('summernote', {
		label: 'Entry'
	}),
	time: {
		type: Date,
		optional: false,
		label: 'Date'
	}
}));