'use strict';

const angular = require('angular');

module.exports = angular.module('applicationBootstrap', [
])
.directive('spinnaker', function() {
  return {
    restrict: 'E',
    templateUrl: require('./applicationBootstrap.directive.html'),
  };
})
.name;