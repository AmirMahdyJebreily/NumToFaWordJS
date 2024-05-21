# عدد به حروف فارسی | Number to Farsi Words
### ابزار تبدیل اعداد به حروف فارسی | Tool to convert numbers to Persian letters
ابزاری ساده با الگوریتم هایی برپایه ریاضیات برای تبدیل اعداد به حروف فارسی   
A simple tool with algorithms based on mathematics to convert numbers into Persian letters

## Installation | نصب کردن
Use the following command to install this package : 
```bash
npm i num-to-fa-word-js
```  
## Usage | استفاده
To use this package, just call the `toFaWord()` function : 
```javascript
import 'num-to-fa-word-js';

console.log(toFaWord(12)) // دوازده
console.log(toFaWord(12.4)) // دوازده و چهار دهم
console.log(toFaWord(12.04)) // دوازده و چهار صدم
console.log(toFaWord(12.004)) // دوازده و چهار هزارم
console.log(toFaWord(12.0004)) // دوازده و چهار ده هزارم
console.log(toFaWord(12.00004)) // دوازده و چهار صد هزارم
// ...
console.log(toFaWord(12_000)) // دوازده هزار
console.log(toFaWord(12_000_000)) // دوازده میلیون
console.log(toFaWord(12_000_000_000)) // دوازده میلیارد
console.log(toFaWord(12_000_000_000_000)) // دوازده تریلیون
console.log(toFaWord(12_000_000_000_000_000)) // دوازده کوادریلیون
```
This package supports short scale prefix naming. You can also enter decimal and negative numbers  


I will be happy to make a pull request and create an issue! ❤️