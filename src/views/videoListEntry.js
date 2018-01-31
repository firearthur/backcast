var VideoListEntryView = Backbone.View.extend({
  //controller
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  //---------------------------------------------------
  //views
  initialize: function() {
    this.render();
  },
  
  handleClick: function(e) {
    // console.log(e, 'this is ')
    // console.log('IM claaaaaaaaaaaaaaaaaicked');
    this.model.select();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this
  },

  template: templateURL('src/templates/videoListEntry.html')

});