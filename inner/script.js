
$(document).ready(function() {
	//$('.container').css('height', $('.container').prop('scrollHeight') + 'px');
	console.log("TEST");
	$('#addPerson').click(function(){ person = {
		name: "Joseph",
		attending: "Might Attend",
		active: false
		};
		console.log("Adding Person in jQuery");
		BodyNameSpace.myModule.people.push(person); 
		$('#personModal').modal('hide');
		return false; });
	//$('#saveModalButton').click(function(){InnerNameSpace.myModule.saveModal();return false;});
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
	

	
	var saveModal = function(){
		console.log("Saving Modal");
		event.Title = "TESTING 123 TESTING"
		event.Description = $('#eventDescription').value;
		event.Secondary = $('#eventSecondary').value;
		event.Calendar = $('#datepicker').value;
		event.Hour = $('#timepicker').value;
		event.Time = event.Hour + " on " + event.Calendar;
		event.Location = $('#eventLocation').value;
	};
	
	var closeModal = function(){
		console.log("Closing Modal");
	};
	
	var oPublic = 
	{
		init: init,
		event: event,
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

	var people = [
	{
		name: "Adam",
		attending: "Might Attend",
		active: false
	},
	{
		name: "Wayne",
		attending: "Attending",
		active: false
	},
	{
		name: "Jennifer",
		attending: "Attending",
		active: false
	},
	{
		name: "Richard",
		attending: "Might Attend",
		active: false
	},
	{
		name: "Eric",
		attending: "Not Attending",
		active: false
	}];
	
	var setActive = function(nameSelector, person){
		console.log(person);
		personDetail = nameSelector + 'Detail';
		if(person.active)
		{
			$(nameSelector).removeClass('active');
			person.active = !person.active;
			//console.log(personDetail);
			//$(personDetail).hide();
		}
		else
		{
			$(nameSelector).addClass('active');
			person.active = !person.active;
			//console.log(personDetail);
			//$(personDetail).show();
		}
	};
	
	var init = function(){
		console.log('HI');
		jQuery.each(people, function(index,value) {
			nameSelector = '#' + value.name;
			$(nameSelector).click(function(){setActive('#'+this.id,value); return false; });
		});
	};
		

	var oPublic =
	{
		init: init,
		people: people,
		setActive: setActive
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
	//$('#saveModalButton').click(function(){InnerNameSpace.myModule.saveModal()});
})();


