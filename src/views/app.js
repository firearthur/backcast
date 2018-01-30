var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // overwrite video list class invoke an instance of videolist
    new VideoListView({el: $('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
