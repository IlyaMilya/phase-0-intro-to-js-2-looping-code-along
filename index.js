// Code your solutions in this file


const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event= "surprise") {
    let newCards = [];
    for (let c = 0; c < cards.length; c++) {
    newCards.push(`Thank you, ${cards[c]}, for the wonderful ${event} gift!`);
    debugger;
    } 
    
    return newCards;
}
console.log(writeCards(cards))


let count = 10;
function countDown(count){
   console.log(count);
    do {
       count -= 1 ;
       console.log(count);
   } while (count > 0);
}
console.log(countDown(count));
