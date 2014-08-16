(function(){
	var app = angular.module('inner',[]);
	
	app.controller('HeadingController', ['$scope', function($scope) {
	
		InnerNameSpace.myModule.init();
		$scope.event = InnerNameSpace.myModule.event;
	}]);
	
	app.controller('BodyController', ['$scope', function($scope) {
	
		$scope.people = BodyNameSpace.myModule.people;
		$scope.itemList = BodyNameSpace.myModule.itemList;
		$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
			BodyNameSpace.myModule.init();
		});
		
	}]);
	
	app.controller('RepeatController', ['$scope', function($scope) {
		$scope.active = false;
		$scope.setActive = function(activater){
			$scope.active = !$scope.active;		
			var nameSelector = "[id='" + activater.name + "']"; 
			console.log(nameSelector);
			if(activater.active)
			{
				$(nameSelector).removeClass('active');
				activater.active = !activater.active;
			}
			else
			{
				$(nameSelector).addClass('active');
				activater.active = !activater.active;
			}
		}
		
		
		$scope.stopActive = function(event){
			console.log(event);
			//event.stopPropogation();
		}
		
	}]);
	
	app.directive('stopEvent', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind(attr.stopEvent, function (e) {
                    e.stopPropagation();
                });
            }
        };
     });
	
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