Meteor.subscribe('albums');
Meteor.subscribe('pictures');

// Still playing around with this, NOT DONE
Template.gallery.helpers({
	gallery: function() {
		list = [];
		photos = Pictures.find({}).fetch();
		// albums = Albums.find({}).fetch(); 	
		// gallery = {}
		// console.log(photos);
		// for (var i = 0; i < albums.length; i++) {
		// 	album = albums[i];
		// 	gallery[album.title] = [];
		// }
		// for (var i = 0; i < photos.length; i++) {
		// 	photo = photos[i]
		// 	title = photo.albumTitle;
		// 	url = photo.image.url;

		// 	current = gallery[title];
		// 	current.push(url);
		// 	gallery[title] = current;
		// }
		// console.log(gallery);
		return photos;
	},	
});