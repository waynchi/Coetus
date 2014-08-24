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
			var nameSelector = "[id='" + activater.name + 'Span' + "']"; 
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
					var tempModalID = '#edit' + scope.person.name + 'Modal';
					var tempNewNameID = tempModalID + 'NewName';
					var tempAttendanceID = tempModalID + 'Attendance';
					var tempAttendanceRadio =  'edit' + scope.person.name + 'ModalAttendanceRadio';
					var inputRadio = 'input:radio[name=' + tempAttendanceRadio + ']';
					var inputRadioValue = '[value="' +  scope.person.attending + '"]';
					
					$(inputRadio).filter(inputRadioValue).prop('checked', true);
					$(tempModalID).modal('toggle');
					$(tempNewNameID).val(scope.person.name);
                });
            }
        };
     });
	
	app.directive('myRepeatDirective', function($timeout) {
	  return function(scope, element, attrs) {
		if (scope.$last){
			console.log(scope.person);
			$timeout(function () {
				scope.$emit('ngRepeatFinished');
			});
		}
	  };
	})
})();