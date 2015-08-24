/**
 * Created by salvo on 10/08/15.
 */
(function() {

    'use strict';

    angular
        .module('jwtAuthApp')
        .controller('RegisterController', RegisterController);


    function RegisterController($state, $http) {

        var vm = this;

        vm.register = function() {

            var data = {
                first_name: vm.firstName,
                last_name: vm.lastName,
                email: vm.email,
                password: vm.password
            };

            $http.post('http://jwt-auth.app/api/users', data)
                .then(function(response) {
                    localStorage.setItem('token', response.data.data.token);
                    $state.go('activate', {'email': data.email, 'first_name': data.first_name});
                });


        }

    }

})();