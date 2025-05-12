//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        title: "opening frame",
        class: "f1",
        chrs:[
            "Hello.",
            "I_am_computer.",
            "*Checking_search_history...",
            "...",
            "...",
            "...!",
            "WTF",
            "An_airstrike_will_arrive_at_your_house_in_3_minutes.",
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
            "*Loud_and_cool_explosion_sound"
        ]
    }
];

var dance = function(x, dunno) {
    var cat = document.getElementById(x);
    for(var i = 0; i < dunno.length; i++){
        var copycat = cat.cloneNode(true);
        copycat.innerHTML = dunno[i].title;
        copycat.classList.add(dunno[i].class);
        copycat.classList.add("cat");

        for(
            var c = 0;
            c < dunno[i].chrs.length;
            c++
        ){
            var chrHTML = document.createElement("div");
            chrHTML.innerHTML = dunno[i].chrs[c];
            chrHTML.classList.add(dunno[i].chrs[c]);
            chrHTML.classList.add("chr");
            copycat.append(chrHTML);
        };

        document.body.append(copycat);
    }
}

dance("copycat", LIST);

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