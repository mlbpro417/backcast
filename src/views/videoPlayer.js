var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.renderSelected, this);
    // console.log(this);
  },

  render: function() {
    // this render sets the initial render and is given the first model instance in the collection
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  renderSelected: function(video) {
    // this re-renders the player when a 'select' event is found
    this.$el.html(this.template(video.attributes));
    return this;
    console.log(video.attributes);
  },

  template: templateURL('src/templates/videoPlayer.html')

});
