let picValOne; //VARIABLES
let picValTwo;
let picValThree;
let picValFour;
let targetNum;

$(function () { //THIS IS THE ON DOCUMENT FUNCTION
    let wincount = 0;
    let losscount = 0;

    function picAssign() { //ASSIGNS VALUES, INCLUDES ON BUTTON EVENTS TO ADD TO CURRENT SCORE



        function winloose() { //TO RUN ON EACH BUTTON CLICK TO CHECK FOR WIN/LOSS

            console.log('_______');
            console.log(currentScore);
            console.log(targetNum);
            console.log(currentScore === targetNum);
            console.log(currentScore < targetNum);
            console.log(currentScore > targetNum);
            if (currentScore === targetNum) {  //WIN LOOSE CONDITIONALS
                wincount++;
                $("#wins").text('Wins: ' + wincount);
                picAssign();
                console.log(currentScore);
                console.log('this is the current score above');
            }
            if (currentScore > targetNum) { //AFTER ONE RUN THIS STARTS RUNNING EVERY CLICK?
                losscount++;
                console.log(losscount);
                $("#losses").text('Losses ' + losscount);
                console.log('reset');
                console.log(currentScore);
                picAssign();
            }

        }
        let currentScore = 0; //THIS IS THE ONLY PLACE I CAN FIND WHERE IT CAN FIND THE VARIABLE
        let picValOne = Math.floor((Math.random() * 12) + 1); //VALUE ASSIGNING
        $('#picone').val(picValOne);
        console.log(picValOne);
        console.log(currentScore);
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

        $('#targetNumber').text('Your current goal is: ' + targetNum); //SETS TEXTS
        $('#currentScore').text('Your current score is: ' + currentScore);
    }
    picAssign(); //RUNS FUNCTION
});

