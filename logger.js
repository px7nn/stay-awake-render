const fs = require("fs")
const path = require("path")


const log = function (...args) {
    const message = args.map(arg => 
        typeof(arg) === "object"? JSON.stringify(arg) : arg
    ).join(' ')
    console.log(...args)
    log_in_file(message)
}

const logdir = "logs"

function log_in_file(message){
    const d = new Date()

    const file = path.join(
        logdir, 
        `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}.txt`
    )
    try{
        if(!fs.existsSync(logdir))
            fs.mkdirSync(logdir, {recursive: true})
        
        fs.appendFileSync(file, `${message}\n`)
    } catch (e){
        console.log("Logging error:", e)
    }
}

module.exports = log