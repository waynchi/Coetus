(function(){
	var app = angular.module('inner',[]);
	
	app.controller('HeadingController', function() {
	
		InnerNameSpace.myModule.init();
		this.event = InnerNameSpace.myModule.event;
	});
})();