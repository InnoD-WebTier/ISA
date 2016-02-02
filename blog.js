Blog = new orion.collection('blog', {
	singularName: 'blog',
	pluralName: 'blogs',
	link: {
		title: 'Blog Posts'
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
	      },
	      orion.attributeColumn('createdAt', 'time', 'Submitted')
	    ]
  }
});

Blog.attachSchema(new SimpleSchema ({
	title: {
		type: String,
		optional: false,
		label: 'Post Title'
	},
	author: {
		type: String,
		optional: false,
		label: 'Author'
	},
	date: {
		type: String,
		optional: false,
		label: 'Date'
	},
	entry: orion.attribute('summernote', {
		label: 'Entry'
	}),
	time: orion.attribute('createdAt')
}));

Blog.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});
