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
		//person variables
		$scope.tempAttendance;
		
		//item variables
		$scope.tempBrought;
		
		
		//Set Active
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
		
		//Saves changes for an edited person
		$scope.saveChangesPerson = function(person){
			var tempModalID = '[id="edit' + person.name + 'Modal"]';
			//New Name Variable
			var tempNewNameID = '[id="edit' + person.name + 'ModalNewName"]';
			var newName = $(tempNewNameID).val();
			console.log($scope.tempAttendance);
			person.name = newName;
			person.attending = $scope.tempAttendance;
			
			console.log(person.attending);
			console.log("Saving Person in AngularJS");
		}
		
		//Saves changes for an edited item
		$scope.saveChangesItem = function(item){
			var tempModalID = '[id="edit' + item.name + 'Modal"]';
			//New Name Variable
			var tempNewNameID = '[id="edit' + item.name + 'ModalNewItemName"]';
			var newName = $(tempNewNameID).val();
			console.log($scope.tempBrought);
			item.name = newName;
			item.brought = $scope.tempBrought;
			
			console.log(item.brought);
			console.log("Saving Item in AngularJS");
		}
	}]);
	
	app.directive('stopEvent', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind(attr.stopEvent, function (e) {
                    e.stopPropagation();
					
					//Opening Modal for Edit Person
					if(scope.person){
						console.log("editing Person");
						//variables to set edit modal to current values
						var tempModalID = '[id="edit' + scope.person.name + 'Modal"]';
						var tempNewNameID = '[id="edit' + scope.person.name + 'ModalNewName"]';
						var tempAttendanceID = '[id="edit' + scope.person.name + 'ModalAttendance"]';
						var tempAttendanceRadio =  'edit' + scope.person.name + 'ModalAttendanceRadio';
						var inputRadio = 'input:radio[name="' + tempAttendanceRadio + '"]';
						var inputRadioValue = '[value="' +  scope.person.attending + '"]';
						//Creating click function for radio buttons
						$(inputRadio).click(function() {
							scope.tempAttendance = $(this).val();
							console.log(scope.tempAttendance);
						});
						scope.tempAttendance = scope.person.attending;
						$(inputRadio).filter(inputRadioValue).prop('checked', true);
						$(tempModalID).modal('toggle');
						$(tempNewNameID).val(scope.person.name);
					}
					
					else if(scope.item) {
						console.log("editing Item");	
						//variables to set edit modal to current values
						var tempModalID = '[id="edit' + scope.item.name + 'Modal"]';
						var tempNewNameID = '[id="edit' + scope.item.name + 'ModalNewItemName"]';
						var tempBroughtID = '[id="edit' + scope.item.name + 'ModalBrought"]';
						var tempBroughtRadio =  'edit' + scope.item.name + 'ModalBroughtRadio';
						var inputRadio = 'input:radio[name="' + tempBroughtRadio + '"]';
						var inputRadioValue = '[value=' +  scope.item.brought + ']';
						$(inputRadio).click(function() {
							scope.tempBrought = $(this).val();
							console.log(scope.tempBrought);
						});
						scope.tempBrought = scope.item.brought;
						$(inputRadio).filter(inputRadioValue).prop('checked', true);
						$(tempModalID).modal('toggle');
						$(tempNewNameID).val(scope.item.name);
					}
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