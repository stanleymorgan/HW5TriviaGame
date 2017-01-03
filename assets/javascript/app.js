//variables
var correct = 0;
var incorrect = 0;
var number = 30;
var counter;
//run function
function run() {
      counter = setInterval(decrement, 1000);
    }
//start timer
$("begin").click(function run(){
	counter = setInterval(decrement, 1000);
})
//decrement function
 function decrement() {   
      number--;
}
//show timer
$("#show-time").html(number);
run();
//////////////////////////////////////////////////////
//score game when done button is pressed
$("#done").click(function(){
	//check question 1
	if($("#smart").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 2
	if($("#muschamp").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 3
	if($("#auburn").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 4
	if($("#georgia").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//check question 5
	if($("#florida").is(":checked")){
		correct++;
	}
	else{
		incorrect++;
	}
	//display score to the screen
	$("#display").html("Correct Answers:  " + correct +  "   Incorrect Answers:  " + incorrect);

});