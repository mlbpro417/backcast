var VideoListEntryView = Backbone.View.extend({

  // adding initialize function to listen for new video
  // the event it listens for is setting of ID
  // initialize: function() {
  //   this.model.on('change:id', this.render, this);
  // },

  // add click handler here for when video title is clicked
  // clickhandler will call .select() method of that video

  // clickHandler: function(e) {
  //   this.model.select();
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
