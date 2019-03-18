console.log('hello world!')

let picValOne;
let picValTwo;
let picValThree;
let picValFour;
let wincount;
let losscount;
let targetNum;
let currentScore;
console.log(picValFour);

//value assign function to the pictures
function picAssign() { //THIS FUNCTION ASSIGNS RANDOM NUMBERS TO EVERY PICTURE
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
}
$(function () {
    console.log('helo');
    picAssign();
    console.log(picValOne);
})