var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(function(video) {
      this.$('.video-list').append(
        new VideoListEntryView({
          model: video
        }).el
      )
    })
    return this
  },

  template: templateURL('src/templates/videoList.html')

});

