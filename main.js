const fs = require("node:fs")
const log = require("./logger")
const url = "https://px7-dlp.onrender.com/"


async function ping(){
    const start = Date.now();
    try{
        const res = await fetch(url)
        const duration = Date.now() - start
        if(!res.ok) {
            throw new Error("Something went wrong!")
        }
        
        const dat = await res.json()
        if(duration > 4000){
            log(`${new Date().toLocaleTimeString()}: 🧊 Cold Start or slow request (${duration}ms)`)
        } else {
            log(`${new Date().toLocaleTimeString()}: ✅ Warm (${duration}ms):`, dat)
        }
    } catch(e){ log(`${new Date().toLocaleTimeString()}: Error: ${e}`) }
}

ping()
setInterval(ping, 210000) // 3.5 mins