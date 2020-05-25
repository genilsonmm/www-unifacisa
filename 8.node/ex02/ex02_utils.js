function upper(text){
    return text.toUpperCase()
}

function lower(text){
    return text.toLowerCase();
}

//module.exports = { upper };
module.exports = { upper: upper, lower: lower }