const fs = require('fs')
const path = require("path")

if (process.argv.length == 3) {
    console.log("Will Create Level: "+process.argv[2])

    const levelName = process.argv[2]

    let template = fs.readFileSync("./@Template/BasicLevel.template", {
        encoding: "utf-8"
    })

    let code = template.replace(/&<name>&/g, levelName)
    //console.log(code)

    if(fs.existsSync("./Level/"+levelName+".ts")){
        console.error("./Level/"+levelName+".ts alrealdy exist!!! Cancel.....")
    }else{
        fs.writeFileSync("./Level/"+levelName+".ts",code,{
        encoding:"utf-8"
    })
    }
    

} else {
    console.error('invalid arguments');
}