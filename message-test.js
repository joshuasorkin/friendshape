const Message = require('./message');
const message = new Message();
const tests = [
    "abc   232490i",
    "    ",
    "abc    ",
    "swdklfsl",
    "   sdfsdfa",
    "     slknkasdf aldkfgjal"
]
tests.forEach(test =>{
    const result = message.parse(test);
    console.log({result});
});