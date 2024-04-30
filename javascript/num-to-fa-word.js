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

    function getSetofAddedNumbers(c_num) {
        let res = [];
        for (let i = 0; Math.floor(c_num) > 0; i++) {
            let mul10 = 1;
            for (let j = i; j > 0; j--) {
                mul10 *= 10
            }
            c_num /= 10;
            res.push((Math.round((c_num - (c_num.toFixed(0))) * 10)) * mul10);
        }
        return res;
    } // To get the set of numbers that are added together to make the num e.g. if the num = 12 then we can say num = 10 + 2

    let sumSet = getSetofAddedNumbers(num)
    console.log(sumSet);
}