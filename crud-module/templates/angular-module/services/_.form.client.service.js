(function() {
    'use strict';

    angular
        .module('<%= slugifiedPluralName %>')
        .factory('<%= classifiedPluralName %>Form', function () {

      var getFormFields = function(disabled) {

        var fields = [
  				{
  					key: 'name',
  					type: 'input',
  					templateOptions: {
  			      label: 'Name:',
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
