//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    "Hello.",
    "I am computer.",
    "*Checking search history...",
    "...",
    "...",
    "WTF",
    "An airstrike will arrive at your house in 3 minutes.",
    "Run."
];

var draw = function(x) {
    for(
        var count = 0;
        count < x.length;
        count++
    ) {
        alert(x[count]);
    }
}

draw(LIST); // Calls the function draw, which will alert us "I'm doing it!!!!" 
         // and the count for as long as the count is less than x.
         // In this case, it will alert us 9 times. Up until the alert says the count is 8.
         // When the count reaches 8, it stops.
         // This is because the count has to be less than x, and when count = 9, it is not less than x, which is 9.