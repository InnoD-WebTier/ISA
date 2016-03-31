Template.archive.onRendered(function() {
  Session.set("showArchive", true);
  $("body").css("background-image", 'url(' + 'img/home/backgroundISALarge.png' + ')');
  $("body").css("background-position", "right");
  $("body").css("background-attachment", "fixed");
  $("body").css("background-repeat", "no-repeat");
});

Template.archive.onDestroyed(function() {
    $("body").css("background-image", 'none');
});

Template.archive.helpers({
  posts: function() {
    posts = Blog.find({}).fetch();
    posts = posts.reverse();
    return posts;
  },

  showArchive: function() {
    return Session.get("showArchive");
  },

  archivedPost: function() {
    post = Session.get("archivedPost");
    if (post) {
      content = post.entry;

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
      post.entry = content;
      return post;
    }
  }
});

Template.archive.events({
  'click p': function() {
    var postId = event.target.id;
    var post = Blog.findOne(postId);
    Session.set("archivedPost", post);
    Session.set("showArchive", false);
  },

  'click #backToArchive': function () {
    Session.set("showArchive", true);
  }
});
