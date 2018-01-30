var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    console.log(this.collection);
    console.log(this);
    this.collection.models.forEach(this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template(new VideoListEntryView()));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
