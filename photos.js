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
