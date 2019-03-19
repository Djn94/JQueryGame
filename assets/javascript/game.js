let picValOne;
let picValTwo;
let picValThree;
let picValFour;
let wincount;
let losscount;
let targetNum;
let currentScore;

//value assign function to the pictures

$(function () {
    function onWin() { //FUNCTION TO RUN ON WIN,
        wincount++;
        picAssign();
    }
    function onLoss() { //FUNCTION TO RUN ON LOSS
        losscount++;
        picAssign();
    }
    if (currentScore === targetNum) {  //WIN LOOSE CONDITIONALS
        $('#currentScore').text('Your current score is:wiiin');
    }
    if (currentScore > targetNum) {
        $('#currentScore').text('Your current score is:looose ');
    }
    function picAssign() { //ASSIGNS VALUES, INCLUDES ON BUTTON EVENTS TO ADD TO CURRENT SCORE
        let currentScore = 0;
        let picValOne = Math.floor((Math.random() * 12) + 1);
        $('#picone').val(picValOne);
        console.log(picValOne);
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
        $('#picone').on('click', function () {
            currentScore += picValOne;
            $('#currentScore').text('Your current score is: ' + currentScore);
        })
        $('#pictwo').on('click', function () {
            currentScore += picValTwo;
            $('#currentScore').text('Your current score is: ' + currentScore);
        })
        $('#picthree').on('click', function () {
            currentScore += picValThree;
            $('#currentScore').text('Your current score is: ' + currentScore);
        })
        $('#picfour').on('click', function () {
            currentScore += picValFour;
            $('#currentScore').text('Your current score is: ' + currentScore);
            console.log(currentScore);
            console.log(targetNum);
        })

    }

    picAssign(); //RUNS FUNCTION



});

