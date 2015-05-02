/* global Ember */
'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.resource('products');
    this.resource('product', {path: '/products/:title'});
});

App.ProductsRoute = Ember.Route.extend({
    model: function() {
        return App.PRODUCTS;
    }
});

App.ProductRoute = Ember.Route.extend({
    model: function(params) {
        var product = App.PRODUCTS.findBy(
            'title',
            params.title
        );
        console.log(product);
        return product;
    }
});

App.PRODUCTS = [
    {
        title: 'Nexus 9',
        price: 399.95,
        description: '',
        isOnSale: false,
        image: 'img/nexus9.jpg'
    }, {
        title: 'NVidia Shield',
        price: 299.95,
        description: '',
        isOnSale: false,
        image: 'img/shield.jpg'
    }
];
