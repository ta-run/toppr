(function () {
    'use strict';
    angular
        .module('onepush', ['ui.router']);

    angular
        .module('onepush')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')
            $stateProvider
                .state('index', {
                    url: '/',
                    views: {
                        'listing': {
                            templateUrl: 'templates/listing.html',
                            controller: 'listing',
                            controllerAs: 'l'
                        },
                        'newListing': {
                            templateUrl: 'templates/new.listing.html',
                            controller: 'newlisting',
                            controllerAs: 'nl'
                        }
                    }
                })
        })
})()