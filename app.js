

// Exercise 1 Section
// const numbers = [2,22,12,17,18,39,129];
// let sum = 0;
// function arraySum(sum) {
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//         console.log(sum)
//     }
//     return sum;
// }
// arraySum(sum);

// Exercise 2 Section
// const book = {
//     title: "Berserk",
//     author: "Kentaro Miura",
//     pages: 100,
//     readCount: 1,
//     info: function() {
//         return this.title +" by " + this.author +", " + this.pages +" pages, read " + this.readCount +" time."
//     }
// }
// console.log(book.info())

// Exercise 3 Section
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWord(sentence) {
    let result = [];
    let words = sentence.split(" ");
    console.log("these are the words split", words);
    for (let i = 0;i < words.length ; i++) {
        let letters = words[i].split('');
        console.log("here are the letters split", letters);
        for(let j = letters.length - 1; j >= 0; j--){
            result.push(letters[j]);
            console.log("this is after the push for result", result);
        }
        result.push(" ")
    }
    return result.join('');
}

console.log(reverseWord(sentence));