

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
			orion.attributeColumn('image', 'image', 'Image'),
			orion.attributeColumn('createdAt', 'time', 'Submitted')
		]
	}
});

Pictures.attachSchema(new SimpleSchema ({
	title: {
		type: String,
		optional: false,
		label: 'Picture Title'
	},
	albumTitle: {
		type: String,
		optional: true,
		label: 'Album Title',
		// double check on what "allowedValues" actually is
		// not sure this is how it's supposed to work
		allowedValues: function() {
			var docs = Albums.find({}).fetch();
			var titles = [];
			for (var i = 0; i < docs.length; i++) {
				titles[i] = docs[i].title;
			}
			console.log("this is running and returning " + titles[0]);
			return titles;
		}()
	},
	image: orion.attribute('image', {
		label: 'Image',
		optional: true
	}),
	time: orion.attribute('createdAt')
}));

Pictures.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Albums.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});
