
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
		Calendar: "7/16/2014",
		Hour: "10:00 AM",
		Time: "",
		Location: "USC Mudd Hall Room 101"
	};
	
	var init = function(){
		event.Time = event.Hour + " on " + event.Calendar;
	};
	
	var EditClick = function(){
		//This needs to open a page that allows you to edit event details.
		window.open("", '_self', 'width=300, height=250');
	}
	
	var saveModal = function(){
		console.log("Saving Modal");
		event.Title = $('#eventTitle').value;
		event.Description = $('#eventDescription').value;
		event.Secondary = $('#eventSecondary').value;
		event.Calendar = $('#datepicker').value;
		event.Hour = $('#timepicker').value;
		event.Time = event.Hour + " on " + event.Calendar;
		event.Location = $('#eventLocation').value;
	}
	
	var closeModal = function(){
		console.log("Closing Modal");
	}
	
	var oPublic = 
	{
		init: init,
		event: event,
		EditClick: EditClick,
		closeModal: closeModal,
		saveModal: saveModal
		/* eventTitle: eventTitle,
		eventDescription: eventDescription,
		eventTime: eventTime,
		eventLocation: eventLocation */
	};
	return oPublic;
}();

var BodyNameSpace = BodyNameSpace || {};

BodyNameSpace.myModule= function() {

	var people = ["Adam","Wayne","Jennifer","Richard","Eric"];

	var oPublic =
	{
		people: people
	};
	
	return oPublic;
}();

(function(){
	$('#datepicker').datepicker();
	
	var t ;
	$( document ).on(
		'DOMMouseScroll mousewheel scroll',
		'#myModal', 
		function(){       
			window.clearTimeout( t );
			t = window.setTimeout( function(){            
				$('#datepicker').datepicker('place')
			}, 100 );        
		}
	);
	$('#timepicker').timepicker({
                minuteStep: 5,
                showInputs: false,
                disableFocus: true
            });
})();

(function() {
	$('#closeModalButton').click(function(){InnerNameSpace.myModule.closeModal()});
	$('#saveModalButton').click(function(){InnerNameSpace.myModule.saveModal()});
})();
