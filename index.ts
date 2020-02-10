// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var myVar: number = 111;
var myLet: number = 222;
const myConst: number = 444;

if (true) {
    var myVar: number = 444;
}

console.log('myvar = ' + myVar);

if (true) {
    let myLet: number = 555;
}

console.log('mylet = ' + myLet);

myConst = 123;