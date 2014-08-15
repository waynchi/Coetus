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
	
	app.controller('RepeatController', ['$scope', function($scope) {
		$scope.active = false;
		$scope.setActive = function(){
			$scope.active = !$scope.active;		
			var nameSelector = "[id='" + $scope.people.name + "']"; 
			console.log(nameSelector);
			if($scope.people.active)
			{
				$(nameSelector).removeClass('active');
				$scope.people.active = !$scope.people.active;
			}
			else
			{
				$(nameSelector).addClass('active');
				$scope.people.active = !$scope.people.active;
			}
		}
	}]);
	
	app.directive('myRepeatDirective', function($timeout) {
	  return function(scope, element, attrs) {
		if (scope.$last){
			console.log(scope.people);
			$timeout(function () {
				scope.$emit('ngRepeatFinished');
			});
		}
	  };
	})
})();