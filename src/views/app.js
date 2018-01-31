var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData); // initializing the collection
    this.render();
  },


  render: function() { 
    // we want to render the search, video player, and video list views
    // we need to instantiate new views of each
    // we need to direct them to the correct areas of the app html
    this.$el.html(this.template());
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    new SearchView({el: this.$('.search')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});