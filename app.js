

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
const book = {
    title: "Berserk",
    author: "Kentaro Miura",
    pages: 100,
    readCount: 1,
    info: function() {
        return this.title +" by " + this.author +", " + this.pages +" pages, read " + this.readCount +" time."
    }
}
console.log(book.info())

