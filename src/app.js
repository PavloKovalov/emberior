/* global Ember */
'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.resource('products');
});

App.ProductsRoute = Ember.Route.extend({
    model: function() {
        return App.PRODUCTS;
    }
});

App.PRODUCTS = [
    {
        title: 'Nexus 9',
        price: 399.95,
        image: 'img/nexus9.jpg'
    }, {
        title: 'NVidia Shield',
        price: 299.95,
        image: 'img/shield.jpg'
    }
];
