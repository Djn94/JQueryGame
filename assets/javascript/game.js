let picValOne; //VARIABLES
let picValTwo;
let picValThree;
let picValFour;
let targetNum;
let wincount = 0;
let losscount = 0;
let currentScore = 0;
function winloose() {
    if (currentScore === targetNum) {  //WIN LOOSE CONDITIONALS
        wincount++;
        $("#wins").text('Wins: ' + wincount);
        picAssign();
    }
    else if (currentScore > targetNum) { //AFTER ONE RUN THIS STARTS RUNNING EVERY CLICK?
        losscount++;
        $("#losses").text('Losses ' + losscount);
        picAssign();
    }
};
function picAssign() { //ASSIGNS VALUES, INCLUDES ON BUTTON EVENTS TO ADD TO CURRENT SCORE
    picValOne = Math.floor((Math.random() * 12) + 1); //VALUE ASSIGNING
    $('#picone').val(picValOne);
    console.log(picValOne);
    console.log(currentScore);
    picValTwo = Math.floor((Math.random() * 12) + 1);
    console.log(picValTwo);
    $('#pictwo').val(picValTwo);
    picValThree = Math.floor((Math.random() * 12) + 1);
    console.log(picValThree);
    $('#picthree').val(picValThree);
    picValFour = Math.floor((Math.random() * 12) + 1);
    console.log(picValFour);
    $('#picfour').val(picValFour);
    targetNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19)
    console.log(targetNum);

    console.log(currentScore);
    currentScore = 0;
    $('#targetNumber').text('Your current goal is: ' + targetNum); //SETS TEXTS
    $('#currentScore').text('Your current score is: ' + currentScore);
}
$(document).ready(function () {
    //THIS IS THE ON DOCUMENT FUNCTION
    picAssign();
});

$('#picone').on('click', function () {  //ADDS VALUES TO CURRNET SCORES ON CLICK,
    currentScore += picValOne;      //RUNS WINLOOSE FUNCTION
    $('#currentScore').text('Your current score is: ' + currentScore); //ADDS TO SCORE TEXT
    winloose();
})
$('#pictwo').on('click', function () {
    currentScore += picValTwo;
    $('#currentScore').text('Your current score is: ' + currentScore);
    winloose();

})
$('#picthree').on('click', function () {
    currentScore += picValThree;
    $('#currentScore').text('Your current score is: ' + currentScore);
    winloose();
})
$('#picfour').on('click', function () {
    currentScore += picValFour;
    $('#currentScore').text('Your current score is: ' + currentScore);
    winloose();
})
