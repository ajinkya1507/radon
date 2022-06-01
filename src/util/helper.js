const dat = function (){
    console.log(Date())
}

const today = new Date()

const getMonth = function (){
    console.log(" the month going on is " + today.getMonth()+"th" +" month of the year " )
}

const batc = function getBatch(){
    console.log("Roadon, W3D1, the topic for today is Nodejs module system")
}


module.exports.dat =dat
module.exports.getmonth = getMonth
module.exports.batc= batc