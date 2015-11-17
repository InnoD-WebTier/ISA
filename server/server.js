Meteor.startup(function () {
  console.log("Successful startup");
  Meteor.publish("events", function() {
    return Announcements.find();
  });
});

Meteor.methods({
  getAnnouncements: function() {
    var eventList = Events.find({}).fetch();
    return eventList;
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

