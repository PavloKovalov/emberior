/**
 * Created by pavel on 5/1/15.
 */
var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
});
