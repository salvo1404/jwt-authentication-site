/**
 * Created by salvo on 10/08/15.
 */

(function() {

    'use strict';

    angular
        .module('authApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/auth');

            $stateProvider
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