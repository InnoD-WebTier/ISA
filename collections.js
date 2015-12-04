Albums = new orion.collection('albums', {
	singularName: 'album',
	pluralName: 'albums',
	link: {
		title: 'Albums'
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
			orion.attributeColumn('createdAt', 'time', 'Submitted')
		]
	}
});

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
	      orion.attributeColumn('createdAt', 'time', 'Submitted')
	    ]
  }
});

Pictures = new orion.collection('pictures', {
	singularName: 'picture',
	pluralName: 'pictures',
	link: {
		title: 'Pictures'
	},
	tabular: {
		columns: [
			{
				data: "title",
				title: "Title"
			},{
				data: "albumTitle",
				title: "Album Title"
			},
			orion.attributeColumn('createdAt', 'time', 'Submitted')
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
	},
	announcementFind: function() {
		console.log('adsfgdhfgjh');
		console.log(Announcements.find({}).fetch());
		return Announcements.find({}).fetch();
	}
});

Albums.attachSchema(new SimpleSchema ({
	title: {
		type: String,
		optional: false,
		label: "Album Title"
	},
	author: {
		type: String,
		optional: false,
		label: "Author"
	},
	description: {
		type: String,
		label: "Description"
	},
	time: orion.attribute('createdAt')
}));

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
	time: orion.attribute('createdAt')
}));

function getAlbumTitles() {
	var docs = Albums.find({}).fetch();
	var titles = [];
	for (var i = 0; i < docs.length; i++) {
		titles[i] = (docs[i].title);
	}
	return titles;
}
albumTitles = getAlbumTitles();
console.log(albumTitles);

Pictures.attachSchema(new SimpleSchema ({
	title: {
		type: String,
		optional: false,
		label: 'Picture Title'
	},
	albumTitle: {
		type: String,
		optional: false,
		label: 'Album Title',
		allowedValues: albumTitles
	},
	time: orion.attribute('createdAt')
}));