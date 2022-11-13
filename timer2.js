//timer2.js

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("Set a timer! Press 'b', '1'..'9', or 'ctrl+c' :")

stdin.on('data', (key) => {
  if (key === '\u0003') {
    // \u0003 maps to ctrl+c input
    console.log("Thanks for using me, ciao!")
    process.exit();
  } else if (key === '\u0062') {
    // on 'b' from stdin (standard input), output a BEEP to stdout
    process.stdout.write('\x07');
  } else if (key === '\u0031') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 1 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000);
  } else if (key === '\u0032') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 2 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 2000);
  } else if (key === '\u0033') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 3 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 3000);
  } else if (key === '\u0034') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 4 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 4000);
  } else if (key === '\u0035') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 5 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 5000);
  } else if (key === '\u0036') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 6 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 6000);
  } else if (key === '\u0037') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 7 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 7000);
  } else if (key === '\u0038') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 8 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 8000);
  } else if (key === '\u0039') {
    //set specified timeout in seconds then BEEP
    console.log("setting timer for 9 second");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 9000);
  }
});
