//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        character: [
            "Computer1"
        ],
        class: "computerF1",
        otherClass: "C",
        chrs:[
            "Run_for_your_life",
        ]

    },
    {
        character: [
            "Human"
        ],
        class: "humanF2",
        otherClass: "H",
        chrs:[
            "AAAAAAAAAAAAAAAAAAAHHHHHHHHH",
        ]
    },
    {
        character: [
            "Computer2"
        ],
        class: "computerF3",
        otherClass: "T",
        chrs:[
            "HAHAHAHAHA",
            "HAHAHAHA",
            "HAHAHA",
            "HAHA"
        ]
    },
    {
        character: [
            "Explosion"
        ],
        class: "explosionF4",
        otherClass: "E",
        chrs:[
            "NOOOOOOOOOOOOOOO"
        ]
    }
];

var dance = function(x, dunno) {
    var cat = document.getElementById(x);
    
    for(
        var i = 0;
        i < dunno.length;
        i++
    ){
        var copycat = cat.cloneNode(true);

        for(
            var f = 0;
            f < dunno[i].otherClass.length;
            f++
        ){
            var framesHTML = document.createElement("div");
            framesHTML.innerHTML = dunno[i].otherClass[f];
            framesHTML.classList.add("frame");
            framesHTML.classList.add(dunno[i].otherClass[f]);
            copycat.append(framesHTML);
        }

        for(
            var c = 0;
            c < dunno[i].chrs.length;
            c++
        ){
            var chrHTML = document.createElement("div");
            chrHTML.innerHTML = dunno[i].chrs[c];
            chrHTML.classList.add("chr");
            chrHTML.classList.add(dunno[i].chrs[c]);
            copycat.append(chrHTML);
        }

        for(
            var C = 0;
            C < dunno[i].character.length;
            C++
        ){
            var characterHTML = document.createElement("div");
            characterHTML.innerHTML = dunno[i].character[C];
            characterHTML.classList.add("character");
            characterHTML.classList.add(dunno[i].character[C]);
            copycat.append(characterHTML);
        }

        document.body.append(copycat);
    }
}

dance("copycat", LIST);


















































































//var inHtml = function(x){
//    document.querySelector("div#innerHTMLFUN").innerHTML = x;
//}

//inHtml("whatever I want in here");

//var draw = function(x) {
//    var target = document.getElementById("hitMe");
//    var stuffToShow = '';
//    alert(x.length);
//    for(
//        var count = 0;
//        count < x.length;
//        count++
//    ) {
//        alert("frame");
//        var nextList = x[count];
//        for(var i = 0; i < nextList.length; i++) {
//            alert( nextList[i]);
//            target.innerHTML = stuffToShow += nextList[i];
//        }
//    }
//}
//
//draw(LIST);