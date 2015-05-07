'use strict';

angular.module('users').controller('ViewUserController', ['$scope', '$location', '$stateParams', 'Authentication', 'UsersProfiles', 'TableSettings','UsersForm',

    function ($scope, $location, $stateParams, Authentication, UsersProfiles, TableSettings, UsersForm) {
        // Controller Logic
        // ...
        // Find existing Employee
        $scope.authentication = Authentication;
        $scope.tableParams = TableSettings.getParams(UsersProfiles);
		    $scope.user = {};
        $scope.setFormFields = function(disabled) {
        			$scope.formFields = UsersForm.getFormFields(disabled);
        		};
            $scope.toViewUser = function() {
                 $scope.user = UsersProfiles.get( {userId: $stateParams.userId} );
                 $scope.setFormFields(true);
            };


        $scope.findOne = function () {
            $scope.user = UsersProfiles.get({
                userId: $stateParams.userId
            });
        };



        // Remove existing User
        $scope.remove = function () {
            /*if (user) {
                user.$remove();

                for (var i in $scope.users) {
                    if ($scope.users[i] === user) {
                        $scope.users.splice(i, 1);
                    }
                }
            } else {*/
            /*
            $scope.user.$remove(function () {
                $location.path('users/profiles');
            });*/
            var user = UsersProfiles.remove({
                userId: $stateParams.userId
            });
            $location.path('users/profiles/list');
            //}
        };

    }]);
