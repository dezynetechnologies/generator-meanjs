(function() {
    'use strict';

    angular
        .module('users')
        .factory('UsersForm', function () {

      var getFormFields = function(disabled) {

        var fields = [
  				{
  					key: 'username',
  					type: 'input',
  					templateOptions: {
  			      label: 'Username:',
  						disabled: disabled
  			    }
  				},
          {
  					key: 'firstName',
  					type: 'input',
  					templateOptions: {
  			      label: 'First Name:',
  						disabled: disabled
  			    }
  				},
          {
            key: 'lastName',
            type: 'input',
            templateOptions: {
              label: 'Last Name:',
              disabled: disabled
            }
          },
          {
            key: 'password',
            type: 'input',
            templateOptions: {
              label: 'Password:',
              disabled: disabled
            }
          }
  			];

        return fields;

      };

      var service = {
        getFormFields: getFormFields
      };

      return service;

  });

})();
