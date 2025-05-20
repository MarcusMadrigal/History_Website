//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        title: "Computer1",
        class: "computerF1",
        chrs:[
            "Run."
        ]

    },
    {
        title: "Human",
        class: "humanF2",
        chrs:[
            "AAAAAAAAAAAAAAAAAAAHHHHHHHHH",
        ]
    },
    {
        title: "Computer2",
        class: "computerF3",
        chrs:[
            "HAHAHAHAHAHAHAHA",
        ]
    },
    {
        title: "Explosion",
        class: "explosionF4",
        chrs:[
            "*Loud_and_cool_explosion_sound"
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
        copycat.innerHTML = dunno[i].title;
        copycat.classList.add(dunno[i].class);

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

            //var chrHTML = document.querySelector("#copycat .chr").cloneNode(true);
            //chrHTML.classList.add(dunno[i].chrs[c]);
            //chrHTML.classList.add("chr");
            //copycat.append(chrHTML);
        }

        for(
            var f = 0;
            f < dunno[f].class.length;
            f++
        ){
            var framesHTML = document.createElement("div");
            framesHTML.innerHTML = dunno[i].class[f];
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