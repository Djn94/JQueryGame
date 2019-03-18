let picValOne;
let picValTwo;
let picValThree;
let picValFour;
let wincount;
let losscount;
let targetNum;
let currentScore = 0;

//value assign function to the pictures

$(function () {

    //ON DOCUMENT READY FUNCTION, BEGINS THE WHOLE GAME
    function picAssign() { //THIS FUNCTION ASSIGNS RANDOM NUMBERS TO EVERY PICTURE and the target
        let picValOne = Math.floor((Math.random() * 12) + 1);
        $('#picone').val(picValOne);
        console.log($('#picone').val());
        let picValTwo = Math.floor((Math.random() * 12) + 1);
        console.log(picValTwo);
        $('#pictwo').val(picValTwo);
        let picValThree = Math.floor((Math.random() * 12) + 1);
        console.log(picValThree);
        $('#picthree').val(picValThree);
        let picValFour = Math.floor((Math.random() * 12) + 1);
        console.log(picValFour);
        $('#picfour').val(picValFour);
        let targetNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19)
        console.log(targetNum);
        $('#targetNumber').text('Your current goal is: ' + targetNum);
        $('#currentScore').text('Your current score is: ' + currentScore);
    }
    picAssign(); //Assigns everything

});
function toAdd() {
    $('#picone').on('click', function () {
        scoreAdd();
    })
    $('#pictwo').on('click', function () {
        scoreAdd();
    })
    $('#picthree').on('click', function () {
        scoreAdd();
    })
    $('#picfour').on('click', function () {
        scoreAdd();
    })

}

function onWin() { //FUNCTION TO RUN ON WIN,
    wincount++;
    picAssign();
}
function onLoss() { //FUNCTION TO RUN ON LOSS
    losscount++;
    picAssign();
}