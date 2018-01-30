var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    
    this.collection.forEach((video) => {
      new VideoListEntryView({model: video})
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});

