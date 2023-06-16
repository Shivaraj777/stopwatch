# stopwatch

Question:
Create a stopwatch app. Use ONLY vanilla javascript, no libraries or frameworks allowed for Javascript (you can use any css framework like Bootstrap).

This is a basic Stopwatch app built using HTML, CSS and JavaScript.

Usage:
Please follow the below steps to use Stopwatch app:
    1. Clone the repository or download the HTML, CSS, and JavaScript files.
    2. Open the index.html file in a web browser/liver server if you are using VS Code.

Features:
The features included in the stopwatch app are:
    1. Start: Click the "Start" button to start the Stopwatch timer. The timer will start counting  from 00:00:00(min:sec:ms)
    2. Stop: Click the "Stop" button to pause the Stopwatch timer. The timer will stop counting.
    3. Reset: Click the "Reset" button to reset the stopwatch timer. The timer will be set back to 00:00:00.

Styling:
    The Stopwatch is styled by using external css file style.css.
    The body of the app is dark themed and the stopwatch is centered for better visibilty.

JavaScript Logic:
    The JavaScript code in script.js handles the functionality of the stopwatch. It includes the following functions:

    startTimer(): Starts the timer by incrementing the milli seconds and updating the timer display every 10ms.
    incrementTimer(): callback added to setInterval function to increment the time at equal intervals
    stopTimer(): Stops the timer by clearing the setInterval instance.
    resetTimer(): Resets the timer by clearing the setInterval instance and setting the minutes,  seconds and milli-seconds back to 0.
    padZero(data): Pads a single digit value with a leading zero if required.

Created by Shivaraj M Shetty
