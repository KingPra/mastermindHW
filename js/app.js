
window.addEventListener('load', function () {

    // Put this anywhere; normal scope rules will apply
let testModule = require('./module'); // import module

//importing object team. 'new' for constructor. - need to look up more info.
// new testModule.Team();

    console.log('ready to rock');


// check button
    let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');
    let guess = document.querySelector('#guess');
    let checkButton = document.querySelector('#check');
    
checkButton.addEventListener('click',() => {
    console.log('post here');

    let array = [];
    if(checkParam.test(guess.value)) {
        let currentGuess = guess.value;
        sendGuess();
        for (let i= 0; i < currentGuess.length; i++) {
            let nums = parseInt(currentGuess[i]);
            array.push(nums);
            console.log(    array);
        }
    } else {
        console.log('not matching');
    }
    console.log(guess.value);
});

});

// Backbone has built in ajax request;
function sendGuess() {
    let request = new XMLHttpRequest();
    request.open('POST', 'URL');

    let body = JSON.stringify({       
    })
    request.send(body);
}
