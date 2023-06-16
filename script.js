//get the HTML elements with the help of id
const timer = document.getElementById('display-timer'); //stopwatch timer, which displays the time
const start = document.getElementById('start'); //start button
const pause = document.getElementById('stop'); //stop button
const resett = document.getElementById('reset'); //reset button
let runningMode = false; //to make sure that start button is not allowed to be clicked simultaneously

//define the timer units
let mm = 0; //minutes
let ss = 0; //seconds
let msms = 0; //milli-seconds
let intervalId; // to store the instaance of timing function
// console.log(start);

//function to increase the time
function incrementTimer(){
    //parse the additional zeros
    mm = parseInt(mm);
    ss = parseInt(ss);
    msms = parseInt(msms);

    //increment second after every 1000ms
    if(msms === 100){
        msms = 0;
        ss++;
    }

    //increment minute after every 60s
    if(ss === 60){
        ss = 0;
        mm++;
    }
    msms++;

    if(msms !== 100){
        //update the stopwatch timer display
        timer.textContent = padZero(mm) + ':' + padZero(ss) + ':' + padZero(msms);
    }
}

//prefix zero for single digit values
function padZero(data){
    return data < 10 ? `0${data}` : data;
}

//callback function to handle start timer operation on click
function startTimer(){
    //check if timer is running
    if(!runningMode){
        runningMode = true; //disable start button
        intervalId = setInterval(incrementTimer, 10);
    }
}

//callback function to handle stop timer operation on click
function stopTimer(){
    clearTimeout(intervalId);
    runningMode = false; //enable start button
}

//callback function to handle reset timer operation on click
function resetTimer(){
    clearTimeout(intervalId);
    runningMode = false; //enable start button
    
    //reset the timer values
    msms = 0;
    ss = 0;
    mm = 0;
    timer.textContent = '00:00:00';
}

//handle the events for clicking timer buttons
start.addEventListener('click', startTimer); //to start the stopwatch timer
pause.addEventListener('click', stopTimer); //to sto the stopwatch timer
resett.addEventListener('click', resetTimer); //tp reset the stopwatch timer
