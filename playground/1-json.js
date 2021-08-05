const fs = require('fs');

const dataBuffer = fs.readFileSync('1-JSON.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Laurent';
data.age = 36;
console.log(dataJSON);
console.log(data);
const updatedJSON = JSON.stringify(data);
fs.writeFileSync('1-JSON.json', updatedJSON);