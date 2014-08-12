(function(){
	var app = angular.module('inner',[]);
	
	app.controller('HeadingController', ['$scope', function($scope) {
	
		InnerNameSpace.myModule.init();
		$scope.event = InnerNameSpace.myModule.event;
	}]);
	
	app.controller('BodyController', ['$scope', function($scope) {
	
		$scope.people = BodyNameSpace.myModule.people;
		$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
			BodyNameSpace.myModule.init();
		});
	}]);
	
	app.directive('myRepeatDirective', function($timeout) {
	  return function(scope, element, attrs) {
		if (scope.$last){
			console.log(scope.people);
			$timeout(function () {
				scope.$emit('ngRepeatFinished');
			});
		  $('#Adam').click(function(){ console.log("TEST"); return false; });
		}
	  };
	})
})();