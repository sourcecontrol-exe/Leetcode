

var romanToInt = function (s) {
    let set = {

        'I': 1,
        'II': 2,
        "III": 3,
        "IV": 4,
        "V": 5,
        "VI": 6,
        "VII": 7,
        "VIII": 8,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        'D': 500,
        "CM": 900,
        'M': 1000
    }

    let p1 = 0;
    let result =0;
    let k =3
    while(p1<s.length){
        let temp = s.slice(p1,p1+k)
        if(set[temp] !== undefined){
            result+=set[temp];
            p1+=k;
            k=3
        }
        else k--;
    }
    return result
};
console.log(romanToInt('MMMCMXCIX'))