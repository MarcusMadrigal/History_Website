//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    [
        "Hello.",
        "I am computer.",
        "*Checking search history...",
        "...",
        "...",
        "...!",
        "WTF",
        "An airstrike will arrive at your house in 3 minutes.",
        "Run."

    ],
    [
        "AAAAAAAAAAAAAAAAAAAHHHHHHHHH",
    ],
    [
        "HAHAHAHAHAHAHAHAHAHAHAHAHAHA",
    ]
];

var target = document.getElementById("hitMe");
var stuffToShow = '';
var draw = function(x) {
    for(
        var count = 0;
        count < x.length;
        count++
    ) {
        var nextList = x[count];
        for(var i = 0; i < nextList.length; i++) {
            alert( nextList[i]);
            target.innerHTML = stuffToShow += nextList[i];
        }
    }
}

draw(LIST);