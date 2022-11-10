//timer1.js

//read arguments from command line
const args = process.argv.slice(2);

//loop through arguments
args.forEach(function(arg){
  if (arg < 0 || isFinite(arg) === false) {
    //do nothing if -ve or NaN
  } else {
    //set specified timeout in seconds then BEEP
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
});
