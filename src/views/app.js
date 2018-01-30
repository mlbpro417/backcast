var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData); // initializing the collection
    this.render();
  },


  render: function() { // we want to render the search, video player, and video list views
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});