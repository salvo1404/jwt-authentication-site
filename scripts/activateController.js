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

        vm.error;

        vm.sendCode = function() {

            var body = {
                code: vm.code,
                email: $stateParams.email
            };

            $http.post('http://jwt-authentication.sbvita.tk/api/auth/activate', body,  {
                headers: {'Authorization': 'Bearer '.concat(localStorage.token)}
                }).then(function(response) {
                    localStorage.setItem('token', response.headers('Authorization'));
                    $state.go('auth', {});
                });

        }

    }

})();