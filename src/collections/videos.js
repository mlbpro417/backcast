var Videos = Backbone.Collection.extend({
  
  initialize: function() {
    this.models.forEach(function(video) {
      this.model.initialize(video);
    });
    // console.log(this);
  },

  model: Video

});
