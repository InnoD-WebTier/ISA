var now = new Date().getTime();

var testId = Announcements.insert({
	title: 'Introducing Announcements',
	author: 'Jeff Gong',
	entry: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	time: new Date(now - 5 * 3600 * 1000)
});