async function messageTest(){
    const Message = require('./message');
    const message = new Message();
    const tests = [
        "abc   232490i",
        "    ",
        "abc    ",
        "swdklfsl",
        "   sdfsdfa",
        "     0x536a83F5b6d824e603A7E010FbFe78A424f62DaB aldkfgjal",
        "  lkasd;jf lkkl; sklsdf",
        "",
        "   aksldf; lkjiosjd   "
    ]
    tests.forEach(async test=>{
        const result = await message.parse(test);
        console.log({test});
        console.log({result});
    });
}
messageTest();