function urlify(str){
    let copy = str.trim().replace(/ +/g,"%20")
        return copy;
}
console.log(urlify("Mr  JHon Simth 13- "))