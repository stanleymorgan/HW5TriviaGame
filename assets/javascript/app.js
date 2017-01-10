//variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var n = 30;

//show qestions
$("#begin").click(function (){
	$("#display").show();
	//var n = 30;
	 $("#show-time").html("Time remaining:   " + n);
	setTimeout(countDown,1000);

	function countDown(){
   			n--;
   			if(n > 0){
   			$("#show-time").html("Time remaining:   " + n);	
      		setTimeout(countDown,1000);
   		    }
            
            else{
     //check question 1
	if(!$('#smart').is(':checked') && !$('#saban').is(':checked') && !$('#fedora').is(':checked') && !$('#freeze').is(':checked')){
    	unanswered++;
	}
	else if($("#smart").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 2
	if(!$('#sumlin').is(':checked') && !$('#franklin').is(':checked') && !$('#muschamp').is(':checked') && !$('#malzahn').is(':checked')){
    	unanswered++;
	}
	else if($("#muschamp").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 3
	if(!$('#auburn').is(':checked') && !$('#alabama').is(':checked') && !$('#lsu').is(':checked') && !$('#arkansas').is(':checked')){
    	unanswered++;
	}
	else if($("#auburn").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 4
	if(!$('#missisippi').is(':checked') && !$('#vanderbilt').is(':checked') && !$('#tennessee').is(':checked') && !$('#georgia').is(':checked')){
    	unanswered++;
	}
	else if($("#georgia").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 5
	if(!$('#usc').is(':checked') && !$('#missouri').is(':checked') && !$('#florida').is(':checked') && !$('#kentucky').is(':checked')){
    	unanswered++;
	}
	else if($("#florida").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//display score to the screen
	//$("#display").html("Correct Answers:  " + correct +  "   Incorrect Answers:  " + incorrect + "  Unanswered:  " + unanswered);
		var html =  "<h1>Time Up</h1>" +
		            "<p>Correct Answers: " + correct + "</p>" +
                    "<p>Incorrect Answers: " + incorrect + "</p>" +
                    "<p>Unanswered: " + unanswered + "</p>";
        $("#display").html(html);	
        $("#show-time").hide();
        $("#begin").hide();
     }
  }  
    
});
	

//////////////////////////////////////////////////////
//score game when done button is pressed
$("#done").click(function(){
	//check question 1
	if(!$('#smart').is(':checked') && !$('#saban').is(':checked') && !$('#fedora').is(':checked') && !$('#freeze').is(':checked')){
    	unanswered++;
	}
	else if($("#smart").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 2
	if(!$('#sumlin').is(':checked') && !$('#franklin').is(':checked') && !$('#muschamp').is(':checked') && !$('#malzahn').is(':checked')){
    	unanswered++;
	}
	else if($("#muschamp").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 3
	if(!$('#auburn').is(':checked') && !$('#alabama').is(':checked') && !$('#lsu').is(':checked') && !$('#arkansas').is(':checked')){
    	unanswered++;
	}
	else if($("#auburn").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 4
	if(!$('#missisippi').is(':checked') && !$('#vanderbilt').is(':checked') && !$('#tennessee').is(':checked') && !$('#georgia').is(':checked')){
    	unanswered++;
	}
	else if($("#georgia").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 5
	if(!$('#usc').is(':checked') && !$('#missouri').is(':checked') && !$('#florida').is(':checked') && !$('#kentucky').is(':checked')){
    	unanswered++;
	}
	else if($("#florida").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 6
	if(!$('#msu').is(':checked') && !$('#vandy').is(':checked') && !$('#tenn').is(':checked') && !$('#au').is(':checked')){
    	unanswered++;
	}
	else if($("#tenn").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//display score to the screen
	//$("#display").html("Correct Answers:  " + correct +  "   Incorrect Answers:  " + incorrect + "  Unanswered:  " + unanswered);
		var html =  "<p>Correct Answers: " + correct + "</p>" +
                    "<p>Incorrect Answers: " + incorrect + "</p>" +
                    "<p>Unanswered: " + unanswered + "</p>";
        $("#display").html(html);
        $("#show-time").hide();
        $("#begin").hide();
});