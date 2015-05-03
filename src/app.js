/* global Ember, DS */
'use strict';

var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.resource('products', function() {
        this.resource('product', {path: '/:product_id'});
    });
});

App.ProductsRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('product');
    }
});

App.ProductRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('product', params.product_id);
    }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product = DS.Model.extend({
    title: DS.attr('string'),
    price: DS.attr('number'),
    description: DS.attr('string'),
    isOnSale: DS.attr('boolean'),
    image: DS.attr('string')
});

App.Product.FIXTURES = [
    {
        id: 1,
        title: 'Nexus 9',
        price: 399.95,
        description: '',
        isOnSale: false,
        image: 'img/nexus9.jpg'
    }, {
        id: 2,
        title: 'NVidia Shield',
        price: 299.95,
        description: '',
        isOnSale: false,
        image: 'img/shield.jpg'
    }
];
