Meteor.publish('announcements', function(){
  return Announcements.find({});
});

Meteor.publish("pictures", function () {
	return Pictures.find();
});

Meteor.publish("blog", function () {
  return Blog.find();
});
