//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        title: "opening frame",
        class: "f1",
        chrs:[
            "Hello.",
            "I am computer.",
            "*Checking search history...",
            "...",
            "...",
            "...!",
            "WTF",
            "An airstrike will arrive at your house in 3 minutes.",
            "Run."
        ]

    },
    {
        title: "setup",
        class: "f2",
        chrs:[
            "AAAAAAAAAAAAAAAAAAAHHHHHHHHH",
        ]
    },
    {
        title: "zoom",
        class: "f3",
        chrs:[
            "HAHAHAHAHAHAHAHAHAHAHAHAHAHA",
        ]
    },
    {
        title: "suspense",
        class: "f4",
        chrs:[
            "*Loud and cool explosion sound"
        ]
    }
];

var dance = function(x, dunno) {
    var cat = document.getElementById(x);
    for(var i = 0; i < dunno; i++){
        var copycat = cat.cloneNode(true);
        document.body.append(dunno[i].title);
    }
}

dance("copycat", 7);

var inHtml = function(x){
    document.querySelector("div#innerHTMLFUN").innerHTML = x;
}

inHtml("whatever I want in here");

var draw = function(x) {
    var target = document.getElementById("hitMe");
    var stuffToShow = '';
    alert(x.length);
    for(
        var count = 0;
        count < x.length;
        count++
    ) {
        alert("frame");
        var nextList = x[count];
        for(var i = 0; i < nextList.length; i++) {
            alert( nextList[i]);
            target.innerHTML = stuffToShow += nextList[i];
        }
    }
}

draw(LIST);