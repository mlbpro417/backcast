var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.renderSelected, this);
    // console.log(this);
  },

  render: function() {
    // debugger;
    console.log(this);
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  renderSelected: function(video) {
    this.$el.html(this.template(video.attributes));
    return this;
    console.log(video.attributes);
  },

  template: templateURL('src/templates/videoPlayer.html')

});
