var VideoListEntryView = Backbone.View.extend({

  // adding initialize function to listen for new video
  // the event it listens for is setting of ID
  initialize: function() {
    this.model.on('change:selected', this.render, this);
    
    // console.log(this.model);
  },

  // add click handler here for when video title is clicked
  // clickhandler will call .select() method of that video

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
