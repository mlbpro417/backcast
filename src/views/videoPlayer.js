var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('select', this.renderSelected, this);
  },

  render: function() {
    // this render sets the initial render and is given the first model instance in the collection

    // Attempt to write for edge case when models array is empty
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // if (!this.collection.models) {
    //   this.template = templateURL('src/templates/videoPlayerV2.html');
    //   this.$el.html(this.template());
    //   return this;
    // } else {
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
    // }
  },

  renderSelected: function(video) {
    // this re-renders the player when a 'select' event is found
    this.collection.models.unshift(video);
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
