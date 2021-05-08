let userName = 'Brie';
userName === '' ? console.log(`Hello!`) : console.log(`Hello, ${userName}!`);

let userQuestion = 'Am I learning?';
console.log(`${userName} asked, "${userQuestion}"."`)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (eightBall) {
  case randomNumber === 0:
  console.log('It is certain');
  break;
  case randomNumber === 1:
  console.log('It is decidedly so');
  break;
  case randomNumber === 3:
  console.log('Reply hazy try again');
  break;
  case randomNumber === 4:
  console.log('Cannot predict now');
  break;
  case randomNumber === 5:
  console.log('Do not count on it');
  break;
  case randomNumber === 6:
  console.log('My sources say no');
  break;
  case randomNumber === 7:
  console.log('Outlook not so good');
  break;
  case randomNumber === 8:
  console.log('Signs point to yes');
  break;
 default:
 console.log('No question was given');
 break;
}
