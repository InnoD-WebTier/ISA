Meteor.startup(function () {
  console.log("Successful startup");
  Meteor.publish("events", function() {
    return Announcements.find();
  });
  console.log(Announcements.find({}).fetch());
});

Meteor.methods({
  getAnnouncements: function() {
    var annoList = Announcements.find({}).fetch();
    return annoList;
  },
});

Announcements = new orion.collection('announcements', {
  singularName: 'announcement',
  pluralName: 'announcements',
  link: {
    title: 'Announcements'
  },
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      { data: "location", title: "Location" },
      { data: "date", title: "Date" },
      { data: "time", title: "Time" },
      { data: "facebook_url", title: "Facebook Link" }
    ]
  }
});

