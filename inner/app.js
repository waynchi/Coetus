(function(){
	var app = angular.module('inner',[]);
	
	app.controller('HeadingController', ['$scope', function($scope) {
	
		InnerNameSpace.myModule.init();
		$scope.event = InnerNameSpace.myModule.event;
	}]);
	
	app.controller('BodyController', ['$scope', function($scope) {
	
		$scope.people = BodyNameSpace.myModule.people;
	}]);
	
	app.directive('myRepeatDirective', function() {
	  return function(scope, element, attrs) {
		if (scope.$last){
		  window.alert("im the last!");
		}
	  };
	})
})();