Meteor.subscribe("blog");

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

Template.blog.helpers({
	posts: function() {
		posts = Blog.find({}).fetch();
		// Sort by earliest to latest
		posts = posts.reverse();

		numPosts = posts.length;
		if (numPosts > 4) {
			posts = posts.slice(0, 4);
		}

		for (i = 0; i < numPosts; i ++) {
			post = posts[i];
			content = post.entry;
			console.log(content);

			// Remove the html tags and inline styles from the text that summernote stores
			// First removes the outer paragraph tags, then removes all inline-styles
			// Second removes the closing tags from the span tags

			content = content.replace("<p>", "");
			content = content.replace("</p>", "");

			end = content.indexOf(">");
			style = content.substring(0, end + 1);

			content = content.replaceAll(style, "");
			content = content.replaceAll("</span>", "");
			content = content.replaceAll("&nbsp;", " ");

			post["entry"] = content;
		}
		return posts;
	}
});
