'use strict';

// <%= humanizedPluralName %> controller
angular.module('<%= slugifiedPluralName %>').controller('<%= classifiedPluralName %>Controller', ['$scope', '$stateParams', '$location', 'Authentication', '<%= classifiedPluralName %>', 'TableSettings', '<%= classifiedPluralName %>Form',
	function($scope, $stateParams, $location, Authentication, <%= classifiedPluralName %>, TableSettings, <%= classifiedPluralName %>Form ) {
		$scope.authentication = Authentication;
		$scope.tableParams = TableSettings.getParams(<%= classifiedPluralName %>);
		$scope.<%= camelizedSingularName %> = {};
		$scope.setFormFields = function(disabled) {
			$scope.formFields = <%= classifiedPluralName %>Form.getFormFields(disabled);
		};

		// Create new <%= humanizedSingularName %>
		$scope.create = function() {
			// Create new <%= humanizedSingularName %> object
			var <%= camelizedSingularName %> = new <%= classifiedPluralName %> ($scope.<%= camelizedSingularName %>);

			// Redirect after save
			<%= camelizedSingularName %>.$save(function(response) {
				$location.path('<%= slugifiedPluralName %>/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing <%= humanizedSingularName %>
		$scope.remove = function(<%= camelizedSingularName %>) {
			if ( <%= camelizedSingularName %> ) { 
				/*<%= camelizedSingularName %>.$remove();

				for (var i in $scope.<%= camelizedPluralName %>) {
					if ($scope.<%= camelizedPluralName %> [i] === <%= camelizedSingularName %>) {
						$scope.<%= camelizedPluralName %>.splice(i, 1);
					}
				}*/
				<%= camelizedSingularName %> = <%= classifiedPluralName %>.get({<%= camelizedSingularName %>Id:<%= camelizedSingularName %>._id}, function() {
					<%= camelizedSingularName %>.$remove();
					$scope.tableParams.reload();
				});
			} else {
				$scope.<%= camelizedSingularName %>.$remove(function() {
					$location.path('<%= slugifiedPluralName %>');
				});
			}
		};

		// Update existing <%= humanizedSingularName %>
		$scope.update = function() {
			var <%= camelizedSingularName %> = $scope.<%= camelizedSingularName %>;

			<%= camelizedSingularName %>.$update(function() {
				$location.path('<%= slugifiedPluralName %>/' + <%= camelizedSingularName %>._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of <%= humanizedPluralName %>
		$scope.find = function() {
			$scope.<%= camelizedPluralName %> = <%= classifiedPluralName %>.query();
		};

		// Find existing <%= humanizedSingularName %>
		$scope.findOne = function() {
			$scope.<%= camelizedSingularName %> = <%= classifiedPluralName %>.get({ 
				<%= camelizedSingularName %>Id: $stateParams.<%= camelizedSingularName %>Id
			});
		};
		$scope.toView<%= classifiedSingularName %> = function() {
			$scope.<%= camelizedSingularName %> = <%= classifiedPluralName %>.get( {<%= camelizedSingularName %>Id: $stateParams.<%= camelizedSingularName %>Id} );
			$scope.setFormFields(true);
		};

		$scope.toEdit<%= classifiedSingularName %> = function() {
			$scope.<%= camelizedSingularName %> = <%= classifiedPluralName %>.get( {<%= camelizedSingularName %>Id: $stateParams.<%= camelizedSingularName %>Id} );
			$scope.setFormFields(false);
		};

	}
]);
