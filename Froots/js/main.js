var guesserBtn = document.getElementById('value').addEventListener('click', (e) => {

})


//Come back to this code another day but it does work in the console.




var randomNumbers = Math.floor(Math.random() * 6);
var msg = prompt('Please guess a fruit.');
msg =String(msg);
var arr = ['apple', 'guava', 'grape', 'orange', 'peach', 'bananna', 'coconut'];
switch(randomNumbers){
    case 1 :
        console.log( `${msg} was guessed as `+ arr[0]);
        break;
    case 2 :
        console.log( `${msg} was guessed as `+ arr[1]);
        break;
    case 3 :
        console.log( `${msg} was guessed as `+ arr[2]);
        break;
    case 4 :
        console.log( `${msg} was guessed as `+ arr[3]);
        break;
    case 5 :
        console.log( `${msg} was guessed as `+ arr[4]);
        break;
    case 6 :
        console.log( `${msg} was guessed as `+ arr[5]);
        break;  
        default:
            console.log('No fruit was selected');
            break;
};

