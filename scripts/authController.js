/**
 * Created by salvo on 10/08/15.
 */
(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('AuthController', AuthController);


    function AuthController($state, $http) {

        var vm = this;

        vm.login = function() {

            var credentials = {
                email: vm.email,
                password: vm.password
            }

            $http.post('http://jwt-auth.app/api/auth/login', credentials)
                .then(function(response) {
                    localStorage.setItem('token', response.data.data.token);
                    $state.go('users', {});
                });


        }

    }

})();