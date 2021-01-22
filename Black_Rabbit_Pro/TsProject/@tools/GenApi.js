const fs = require('fs')
const path = require("path")

let ReplaceLists = [
    {
        find: '\"Interface/IGameLevel\"',
        replace: '\"JS/Interface/IGameLevel\"'
    },
    {
        find: '\"Dialog/SayDialog\"',
        replace: '\"JS/Dialog/SayDialog\"'
    },
    {
        find: '\"Utils/Common\"',
        replace: '\"JS/Utils/Common\"'
    }
]

let decRoot = "def"
let targetFile = "../GameScript/@types/api.d.ts"
let prefix = "JS/"

let ModArray = []
let ApiText = ""

function ModString(content, modname) {
    let temp =
        "declare module \"&<name>&\"{\n" +
        "&<content>&" +
        "}\n";
    let changename = temp.replace("&<name>&", (prefix + modname).replace("\\", "/"));
    let str = changename.replace("&<content>&", content);

    ReplaceLists.forEach((Item) => {
        str = str.replace(Item.find, Item.replace)
    })

    return str;
}

function ReadAndGen(dir) {
    fs.readdir(dir, {
        encoding: "utf-8"
    }, (err, files) => {
        if (err) {
            console.log(err.message);
            return;
        }
        files.forEach((p) => {

            let fullPath = path.join(dir, p).replace("\\", "/")
            //console.log(fullPath)
            let stat = fs.statSync(fullPath)
            if (stat.isDirectory()) {
                ReadAndGen(fullPath)
            }

            if (stat.isFile()) {
                let ModName = fullPath.replace(".d.ts", "")
                ModName = ModName.replace("\\", "/")

                let str = fs.readFileSync(fullPath, {
                    encoding: "utf-8"
                })

                let cleanExport = str.replace(/export.{0,};/g, "");

                let cleanDeclare = cleanExport.replace(/declare /g, "");

                let cleanModName
                if (ModName.startsWith(decRoot)) {
                    ModName = ModName.replace(decRoot + "/", "");
                }
                ModArray.push(ModName)
                let mod = ModString(cleanDeclare, ModName)

                ApiText += "\n"
                ApiText += mod

                for (let i = 0; i < ModArray.length; i++) {
                    let reg = new RegExp('\"' + ModArray[i]);
                    ApiText.replace(reg, "\"JS/" + ModArray[i])
                }

                //console.log(mod)
                //console.log(ModArray)
                fs.writeFileSync(targetFile, ApiText, {
                    encoding: "utf-8"
                })
            }
        });
    })
}

if (fs.existsSync(targetFile)) {
    fs.unlinkSync(targetFile)
    fs.writeFileSync(targetFile, "", {
        encoding: "utf-8"
    })
}

if (fs.existsSync(decRoot)) {
    ReadAndGen(decRoot)
} else {
    console.log("No Declare File")
}