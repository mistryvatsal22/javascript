    const fs = require('fs');

    fs.writeFile('file2.txt',"this is a data", ()=>{
        console.log("written to the file")
    })

    console.log("finished")