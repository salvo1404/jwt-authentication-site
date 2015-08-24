/**
 * Created by salvo on 10/08/15.
 */

(function() {

    'use strict';

    angular
        .module('jwtAuthApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/auth');

            $stateProvider
                .state('register', {
                    url: '/register',
                    templateUrl: '../views/registerView.html',
                    controller: 'RegisterController as register'
                })
                .state('activate', {
                    url: '/activate',
                    params: {'email':null, 'first_name':null},
                    templateUrl: '../views/activateView.html',
                    controller: 'ActivateController as activate'
                })
                .state('auth', {
                    url: '/auth',
                    templateUrl: '../views/authView.html',
                    controller: 'AuthController as auth'
                })
                .state('users', {
                    url: '/users',
                    templateUrl: '../views/userView.html',
                    controller: 'UserController as user'
                });
        });
})();