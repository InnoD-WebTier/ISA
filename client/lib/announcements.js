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


Announcements.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Announcements.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  location: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  facebook_url: {
    type: String,
    optional: true
  }
}));
