
$(document).ready(function() {
	//$('.container').css('height', $('.container').prop('scrollHeight') + 'px');
	var attendance = "Might Attend";
	var brought = false;
	$("input:radio[name=attendance]").click(function() {
			attendance = $(this).val();
	});
	$("input:radio[name=brought]").click(function() {
			brought = $(this).val();
	});
	$('#addPerson').click(function(){
		var newName = $('#newName').val();
		person = {
			name: newName,
			attending: attendance,
			active: false
		};
		console.log("Adding Person in jQuery");
		BodyNameSpace.myModule.people.push(person); 
		$('#personModal').modal('hide');
		return false; });
	$('#addItem').click(function(){
		var newName = $('#newItemName').val();
		item = {
			name: newName,
			brought: brought,
			bringer: "Wayne",
			active: false
		};
		console.log("Adding Item in jQuery");
		BodyNameSpace.myModule.itemList.push(item); 
		$('#itemModal').modal('hide');
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
		Calendar: "8/16/2014",
		Hour: "10:00 AM",
		Time: "",
		Location: "USC Mudd Hall Room 101"
	};
	
	var init = function(){
		event.Time = event.Hour + " on " + event.Calendar;
	};
	

	
	var saveModal = function(){
		console.log("Saving Modal");
		event.Title = $('#eventTitle').val();
		event.Description = $('#eventDescription').val();
		event.Secondary = $('#eventSecondary').val();
		event.Calendar = $('#datepicker').val();
		event.Hour = $('#timepicker').val();
		event.Time = event.Hour + " on " + event.Calendar;
		event.Location = $('#eventLocation').val();
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
		items: [],
		active: false
	},
	{
		name: "Wayne",
		attending: "Attending",
		items: [],
		active: false
	},
	{
		name: "Jennifer",
		attending: "Attending",
		items: [],
		active: false
	},
	{
		name: "Richard",
		attending: "Might Attend",
		items: [],
		active: false
	},
	{
		name: "Eric",
		attending: "Not Attending",
		items: [],
		active: false
	}];
	
	// Must push into people[x].items in order to work
	var itemList = [
	{
		name: "Cheetos",
		brought: true,
		bringer: "Adam",
		active: false
	},
	{
		name: "Xbox",
		brought: true,
		bringer: "Wayne",
		active: false
	}
	]
	
/* 	var setActive = function(nameSelector, person){
		console.log(person);
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
	}; */
	
	var init = function(){
/* 		jQuery.each(people, function(index,value) {
			nameSelector = '#' + value.name;
			//$(nameSelector).click(function(){setActive('#'+this.id,value); return false; });
		}); */
	};
		

	var oPublic =
	{
		init: init,
		people: people,
		itemList: itemList
		//setActive: setActive
	};
	
	return oPublic;
}();

(function(){
	$('#datepicker').datepicker();
	
	/* var t ;
	$( document ).on(
		'DOMMouseScroll mousewheel scroll',
		'#myModal', 
		function(){       
			window.clearTimeout( t );
			t = window.setTimeout( function(){            
				$('#datepicker').datepicker('place')
			}, 100 );        
		}
	); */
	$('#timepicker').timepicker({
                minuteStep: 5,
                showInputs: false,
                disableFocus: true
    });
	$('#personDatepicker').datepicker();
	$('#personTimepicker').timepicker({
                minuteStep: 5,
                showInputs: false,
                disableFocus: true
    });
})();

(function() {
	$('#closeModalButton').click(function(){InnerNameSpace.myModule.closeModal()});
	$('#saveModalButton').click(function(){InnerNameSpace.myModule.saveModal()});
})();


