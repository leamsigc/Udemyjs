//Regular expressions 
let re;
re = /hello/;

// console.log(re);
// console.log(re.source);

//exec() 
    //Return array || null
const result  = re.exec('hello world ');
const resultIndexSeven = re.exec('Ismael hello world');
const resultFail = re.exec('hi world');
console.log(result);
console.log(resultIndexSeven);
console.log(resultIndexSeven[0]);
console.log(resultIndexSeven.index);
console.log(resultIndexSeven.input);
console.log(resultFail);

re = /hello/i; // i = case insensitive  g = global  search 

//=== test() - return true || false 
const resultTest = re.test('Hello');
console.log(resultTest);

// === match() - Return result [] || null
const str = 'Hello ismael ';
const resultMatch = str.match(re);

console.log(resultMatch);

// === search() - Return the index of the first match if ! return -1
const strSearch  = 'Hello there';
const resultSearch = strSearch.search(re);

console.log(resultSearch);

// replace() - Return new string with some || all matches of the patter 
const strReplace = 'hello from the moon';
const resultReplace = strReplace.replace(re,'ismael');
console.log(resultReplace);