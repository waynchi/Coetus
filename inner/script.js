
$(document).ready(function() {
	//$('.container').css('height', $('.container').prop('scrollHeight') + 'px');
});

var InnerNameSpace = InnerNameSpace || {};

InnerNameSpace.myModule = function(){


	var event =
	{
		Title: "Video Game Night",
		Description: "Video Game Party featuring Super Smash Bros., League of Legends, Starcraft II, and more!",
		Secondary: "Dinner will be served.",
		Month: "July",
		Day: "3",
		Year: "2014",
		Hour: "7" + " "+ "P.M.",
		Time: "",
		Location: "USC Mudd Hall Room 101"
	};
	
	var init = function(){
		event.Time = event.Hour + " on " + event.Month + ", " + event.Day + " , " + event.Year;
	};
	
	var EditClick = function(){
		//This needs to open a page that allows you to edit event details.
	}
		
	
	var oPublic = 
	{
		init: init,
		event: event,
		EditClick: EditClick
		/* eventTitle: eventTitle,
		eventDescription: eventDescription,
		eventTime: eventTime,
		eventLocation: eventLocation */
	};
	return oPublic;
}();


(function() {
	$('#Edit').attr('href', "javascript:InnerNameSpace.myModule.EditClick()");
})();

