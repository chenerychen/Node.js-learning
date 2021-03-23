const franc = require('franc')
const langs = require("langs")
const colors = require("colors")
const input = process.argv[2]  // important
const language = franc(input) 

if (language === 'und') {
    console.log("Sorry, cannot figure out the input language".red )
}else {
    console.log((langs.where("3", language)).name.green)
}

// try {
//     console.log((langs.where("3", language)).name)
// } catch (e) {
//     console.log("Sorry, cannot figure out the input language " + e )
// }

