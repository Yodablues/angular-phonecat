'use strict';

/* Directives */

var phonecatDirectives = angular.module('phonecatDirectives', []);

phonecatDirectives.directive("exampleDirective", [function(){

	return {
		restrict: 'E',
		templateUrl: 'partials/example-directive.html'
	}
}]);