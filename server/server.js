// Announcements = new Mongo.Collection("announcements");
Meteor.startup(function () {
	console.log("Successful startup!");
	// Meteor.publish("announcements", function() {
	// 	return Announcements.find();
	// });
});

Meteor.methods({

	// getAnnouncements: function() {
	// 	var itemList = Announcements.find({}).fetch();
	// 	console.log(itemList);
	// 	return itemList;
	// }
});

