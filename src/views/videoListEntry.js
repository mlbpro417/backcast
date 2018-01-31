var VideoListEntryView = Backbone.View.extend({

  // adding initialize function to listen for new video
  // the event it listens for is setting of ID
  initialize: function() {
    this.model.on('click', this.render, this);
    
    // console.log(this.model);
  },

  // add click handler here for when video title is clicked
  // clickhandler will call .select() method of that video

  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').html(this.model.attributes.snippet.title);
    this.$el.find('.video-list-entry-detail').html(this.model.attributes.snippet.description);
    this.$el.find('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
