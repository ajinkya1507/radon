const str = "    This Is The Assignment given today     "
const trim = function (){

    console.log(" the trimmed sentence is " + str.trim())

}

const lowerCase = function (){
    console.log(" the lowercase sentence is " + str.toLowerCase())
}

const upperCase = function (){
    console.log(" the uppercase sentence is " + str.toUpperCase())
}
module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.upperCase =upperCase