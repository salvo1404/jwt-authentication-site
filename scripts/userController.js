/**
 * Created by salvo on 10/08/15.
 */
(function() {

    'use strict';

    angular
        .module('jwtAuthApp')
        .controller('UserController', UserController);

    function UserController($http, $scope) {
        var vm = this;

        vm.users;
        vm.error;

        vm.getUsers = function() {
            $scope.isDisabled = true;

            $http.get('http://jwt-authentication.sbvita.tk/api/users', {
                headers: {'Authorization': 'Bearer '.concat(localStorage.token)}
            }).success(function(data, status, headers, config) {
                localStorage.setItem('token', headers('Authorization'));
                vm.users = data;
            }).error(function(data, status, config) {
                vm.error = data;
            });
        }
    }

})();