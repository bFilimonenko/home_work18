document.write('<b> Task 1 </b>' + '<br>')

const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
    first: 'First Name', last: 'Last Name'
};
document.write('myNum = ' + myNum + '<br>');
document.write('myStr = ' + myStr + '<br>');
document.write('myBool = ' + myBool + '<br>');
document.write('myArr = ' + myArr + '<br>');
document.write('myObj = ' + '<br>' + myObj.first + '<br>' + myObj.last + '<br>');

document.write('<br>' + '<b> Task 2 </b>' + '<br>')

const decimal2 = parseFloat(myNum).toFixed(2);
document.write('decimal2 = ' + decimal2 + '<br>');

document.write('<br>' + '<b> Task 3 </b>' + '<br>')

let i = 4;
document.write('i = ' + i + '<br>');
++i;
document.write('i = ' + i + '<br>');
i--;
document.write('i = ' + i + '<br>');
i++;
document.write('i = ' + i + '<br>');
--i;
document.write('i = ' + i + '<br>');

document.write('<br>' + '<b> Task 4 </b>' + '<br>')

let myTest = 20;
myTest += i;
document.write('myTest = ' + myTest + '<br>');
myTest -= 6;
document.write('myTest = ' + myTest + '<br>');
myTest *= 2;
document.write('myTest = ' + myTest + '<br>');
myTest /= 4;
document.write('myTest = ' + myTest + '<br>');
myTest %= 3;
document.write('myTest = ' + myTest + '<br>');

document.write('<br>' + '<b> Task 5 </b>' + '<br>')

const myPi = Math.PI;
document.write('myPi = ' + myPi + '<br>');
const myRound = Math.round(89.279);
document.write('myRound = ' + myRound + '<br>');
const myRandom = Math.random() * 10;
document.write('myRandom = ' + myRandom + '<br>');
const myPow = Math.pow(3, 5);
document.write('myPow = ' + myPow + '<br>');

document.write('<br>' + '<b> Task 6 </b>' + '<br>')

// const strObj = {
//     str: 'Мама мыла раму, рама мыла маму',
// };
// strObj.length = strObj.str.length;
let str = 'Мама мыла раму, рама мыла маму';
const strObj = {
    str,
    length: str.length,
};
document.write('strObj = ' + strObj.str + '<br>');
document.write('strObj = ' + strObj.length + '<br>');

document.write('<br>' + '<b> Task 7 </b>' + '<br>')

// const isRamaPos = strObj.str.search('рама');
const isRamaPos = strObj.str.indexOf('рама');
document.write('isRamaPos = ' + isRamaPos + '<br>');
const isRama = isRamaPos !== -1;
document.write('isRama = ' + isRama + '<br>');

document.write('<br>' + '<b> Task 8 </b>' + '<br>')

const strReplace = strObj.str
    .replace('мыла', 'моет')
    .replace('рама мыла', 'Рама держит');
document.write('strObj = ' + strObj.str + '<br>');
document.write('strReplace = ' + strReplace + '<br>');

document.write('<br>' + '<b> Task 9 </b>' + '<br>')

const someStr = 'some STRING';
document.write('someStr = ' + someStr + '<br>');
const upperStr = someStr.toUpperCase();
document.write('upperStr = ' + upperStr + '<br>');
const lowerStr = someStr.toLowerCase();
document.write('lowerStr = ' + lowerStr + '<br>');