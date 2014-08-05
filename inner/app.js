(function(){
	var app = angular.module('inner',[]);
	
	app.controller('InnerController', function() {
	
		InnerNameSpace.myModule.init();
		this.event = InnerNameSpace.myModule.event;
		this.people = BodyNameSpace.myModule.people;
	});
})();