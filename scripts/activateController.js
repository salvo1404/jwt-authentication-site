/**
 * Created by salvo on 10/08/15.
 */
(function() {

    'use strict';

    angular
        .module('jwtAuthApp')
        .controller('ActivateController', ActivateController);


    function ActivateController($state, $http, $stateParams) {

        var vm = this;

        vm.user;
        vm.error;

        vm.sendCode = function() {

            var body = {
                code: vm.code,
                email: $stateParams.email
            };

            $http.post('http://jwt-auth.app/api/auth/activate', body,  {
                headers: {'Authorization': 'Bearer '.concat(localStorage.token)}
                }).success(function(data, status, headers) {
                    localStorage.setItem('token', data.data.token);
                    vm.user = data;
                    $state.go('users', {});
                }).error(function(data, status, config) {
                    vm.error = data;
                });

        }

    }

})();