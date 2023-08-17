const fs = require("fs");

const folder = process.argv[2];


const checkDirectory = (path) => {
    fs.stat(path, (err, data) => {
    if (data.isDirectory()) {
        fs.readdir(path, (err, data) => {
            for (let directory of data) {
                fs.stat(path, (err, data) => {
                    if (data.isDirectory()) {
                        checkDirectory(`${path}/${directory}`)
                    } else {
                        console.log(`${path}/${directory} - file`);
                    }
                })
            }
        })
    } else {
        console.log(`${path} - file`);
    }
})
}

checkDirectory(folder)

