function toFaWord(num) {

    uniqNumbers = { // A dictionary for unique numbers that we cannot construct from their combinations
        1: ['یک', "یاز"],
        2: ["دو", "دواز"],
        3: ["سه", "سیز", "سی"],
        4: ["چهار"],
        5: ["پنج", "پانز", "پان"],
        6: ["شش", "شانز"],
        7: ["هفت", "هف"],
        8: ["هشت", "هج", "هش"],
        9: ["نه", "نوز"],
        10: ["ده"],
        20: ["بیست"],
        30: ["سی"],
        40: ["چهل"],
        50: ["پنجاه"],
        60: ["شصت"],
        70: ["هفتاد"],
        80: ["هشتاد"],
        90: ["نود"],
        100: ["صد", "یست"],
        1000: ["هزار"],
        1000000: ["میلیون"],
        1000000000: ["میلیارد"],
    }

    function numOfDig(num) {
        let i = 0;
        for (i = 0; num.toFixed(0) > 0; i++) {
            num /= 10;
        }
        return i;
    }

    function getSetofAddedNumbers(c_num) {
        let res = [];
        for (let i = 0; Math.floor(c_num) > 0; i++) {
            let mul10 = Math.pow(10, i); // 2nd -> Calculating which round of the loop we are in, to find out whether this number that went beyond the floating point is one or tens or...

            c_num /= 10; // 1st -> Divide by 10 to send the one digit to the other side of the floating point!
            res.unshift((Math.round((c_num - (c_num.toFixed(0))) * 10)) * mul10); // At first, we reach a number that has only one floating number, and that is our one, and it is multiplied by mul10 to find out which order we pulled out!
        }
        return res;
    } // To get the set of numbers that are added together to make the num e.g. if the num = 12 then we can say num = 10 + 2

    let sumSet = getSetofAddedNumbers(num)
    let res = "";
    for (let i = 0; i < sumSet.length; i++) {
        let num = sumSet[i]
        let cONum = Math.pow(10, numOfDig(num) - 1)
        let muller = num / cONum
        res += uniqNumbers[muller][0] + uniqNumbers[cONum][0] + " "
    }

    return res;
}