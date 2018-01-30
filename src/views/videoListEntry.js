var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   // console.log('hii');
  //   this.render();
  //   // this.model.on('change', this.render, this);
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
