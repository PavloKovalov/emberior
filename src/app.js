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

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('product');
    }
});

App.IndexController = Ember.ArrayController.extend({
    productsCount: function() {
        return this.get('length');
    }.property('length')
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

App.ProductsController = Ember.ArrayController.extend({
    sortProperties: ['price']
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product = DS.Model.extend({
    title: DS.attr('string'),
    price: DS.attr('number'),
    description: DS.attr('string'),
    isOnSale: DS.attr('boolean'),
    image: DS.attr('string'),
    reviews: DS.hasMany('review', {async: true})
});

App.Product.FIXTURES = [
    {
        id: 1,
        title: 'Nexus 9',
        price: 399.95,
        description: '',
        isOnSale: false,
        image: 'img/nexus9.jpg',
        reviews: [100, 101]
    },
    {
        id: 2,
        title: 'NVidia Shield',
        price: 299.95,
        description: '',
        isOnSale: false,
        image: 'img/shield.jpg',
        reviews: [102, 103, 104]
    }
];

App.Review = DS.Model.extend({
    text: DS.attr('string'),
    product: DS.belongsTo('product')
});

App.Review.FIXTURES = [
    {
        id: 100,
        text: 'Awesome',
        product: '1'
    },
    {
        id: 101,
        text: 'Great!',
        product: '1'
    },
    {
        id: 102,
        text: 'Powerful!',
        product: '2'
    },
    {
        id: 103,
        text: 'Ololo! Pshchhcshs!111',
        product: '2'
    },
    {
        id: 104,
        text: 'Nice one!',
        product: '2'
    },
];
