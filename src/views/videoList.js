var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // render videoList before rendering each videoListEntry
    this.collection.forEach(this.renderVideo, this);
    
    console.log(this.collection);
    return this;
  },

  renderVideo: function(video) {
    var newVideoListEntry = new VideoListEntryView({model: video});
    this.$el.append(newVideoListEntry.render());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
