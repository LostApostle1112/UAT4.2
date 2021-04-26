//This is the timerCode page
// file creator: James Tramel 
//email jamesltramel@gmail.com


//Creating a start function
function start() {
    document.getElementById("startButton").disabled = true;

    document.getElementById("stopButton").disabled = false;

}


//creating a stop function
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}







// Same function as version 2 with change order update the halfway point

function countDown3() { //set our var. starting position
    var count = 10;

    for (var i = 0; i <= 10; i++) { // iteration... I understand now

        if (i <= 4) {
            // as long as the iteration is less than or equal to 4 run the count down by 1 each step
            setTimeout(function() {
                //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);

        }
        // when the iteration greater than 4 less but not equal to 10 print out "Warning Less than ½ way to launch, time left + the current count down by 1 each step
        else if (i > 4 && i != 10) {
            setTimeout(function() {
                //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }
        //when the count reaches the end "blast off"
        else {
            setTimeout(function() {
                //setting the timeout function refrencing 'countDownTimer' ID to go down 1 each second
                document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
                count--;
            }, 1000 * i);


        }

    }
}



//our v2 countdown, more efficient
function countDown2() { //set our var. starting position
    var count = 10;
    for (var i = 1; i <= 10; i++) { // iteration... I understand now
        setTimeout(function() {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);

    } //setting the seconds for our timer cut in and cut out
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
        count--;
    }, 11000);

}