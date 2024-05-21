export default function toFaWord(input = "") {
    let uniqNumbers = { // A dictionary for unique numbers that we cannot construct from their combinations
        1: 'یک',
        2: "دو",
        3: "سه",
        4: "چهار",
        5: "پنج",
        6: "شش",
        7: "هفت",
        8: "هشت",
        9: "نه",
        10: "ده",
        11: "یازده",
        12: "دوازده",
        13: "سیزده",
        14: "چهارده",
        15: "پانزده",
        16: "شانزده",
        17: "هفده",
        18: "هجده",
        19: "نوزده",
        20: "بیست",
        30: "سی",
        40: "چهل",
        50: "پنجاه",
        60: "شصت",
        70: "هفتاد",
        80: "هشتاد",
        90: "نود",
        100: "صد",
        200: "دویست",
        300: "سیصد",
        400: "چهارصد",
        500: "پانصد",
        600: "ششصد",
        700: "هفتصد",
        800: "هشتصد",
        900: "نهصد"
    }

    let decimalShortScaleNames = [ // 10 ^(3n + 3) and here the n is index of array items :-D
        "",
        "هزار", // thousand
        "میلیون", // million 
        "میلیارد", // billion 
        "تریلیون", // trillion 
        "کوآدریلیون", // quadrillion 
        // ...
    ]

    const nameOfUnderZeroPart = (num, i) => {
        // 0.0002345

        return `${toFaWord(Math.pow(10, i).toString()).trim()}م`;
    }

    const digitSpliter = (num = 0, inpower = 1, rm_zero = false) => {
        let res = [];
        for (let i = 0; num > 0; i++) {
            let taked_number = num % Math.pow(10, inpower * (i + 1));
            res.unshift(taked_number / ((rm_zero === true) ? Math.pow(10, inpower * i) : 1)); // the "res" is used like stack data structure
            num -= taked_number;
        }
        return res;
    } /* Works with raw math ^_^ */

    const nameOfThreeDigitNumber = (num) => {
        let res = []
        if (num < 20)
            return uniqNumbers[num]

        let digits = digitSpliter(num, 1, false)
        for (let i = 0; i < digits.length; i++) {
            let d = digits[i]
            if (d != 0) {
                if (digits.length == 3 && i == 1 && d == 10) {
                    res.push(uniqNumbers[d + digits[++i]]);
                    continue
                }
                res.push(uniqNumbers[d]);

            }
        };
        return res.join(" و ");
    }
    let num = parseInt(input);
    let flnum = (input.split(".")[1]);
    let neg = ""

    if (num < 0) {
        neg = "منفی "
        num *= -1
    }
    else if (num == 0 && flnum === undefined) {
        return "صفر"
    }
    
    let floatP = "";
    if (flnum !== undefined) {
        floatP = nameOfUnderZeroPart(parseInt(flnum), flnum.length)
    }
    let sumSet = digitSpliter(num, 3, true).reverse() // We get a stack whose member with index n is multiplied by the formula (10 ^(3n + 3))! Now we can name the number ^_^
    let res = [];
    for (let i = 0; i < sumSet.length; i++) {
        let d_num = sumSet[i]
        if (d_num != 0) {
            res.unshift(nameOfThreeDigitNumber(d_num) + " " + decimalShortScaleNames[i]);
        }
    }

    return `${neg}${res.join(" و ")}${((floatP != "") ? "و " + toFaWord(flnum.toString()) + floatP : '')}`;
}