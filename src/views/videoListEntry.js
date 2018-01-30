var VideoListEntryView = Backbone.View.extend({
 
  el: ".video-list",

  initialize: function() {
    $('.video-list-entry-title').on('click', this.model.select.bind(this.model));
    this.render();
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});