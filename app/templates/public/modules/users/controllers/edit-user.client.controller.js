'use strict';

angular.module('users').controller('EditUsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users', 'UsersProfiles', 'TableSettings','UsersForm',
    function ($scope, $stateParams, $location, Authentication, Users, UsersProfiles, TableSettings, UsersForm) {
        $scope.authentication = Authentication;
        $scope.tableParams = TableSettings.getParams(UsersProfiles);
        //$scope.user = {};
        $scope.setFormFields = function(disabled) {
              $scope.formFields = UsersForm.getFormFields(disabled);
            };
            $scope.toEditUser = function() {
                 $scope.user = Users.get( {userId: $stateParams.userId} );
                 $scope.setFormFields(true);
            };
        $scope.update = function () {
            var user = $scope.user;

            user.$update(function () {
                $location.path('users/profiles' + user._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        // Find existing Employee
        $scope.findOne = function () {
            $scope.user = UsersProfiles.get({
                userId: $stateParams.userId
            });
        };

    }
]);
