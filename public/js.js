//Thing that alerts us when the page loads
//alert("SCRIPTS!");


// Draw Variable Thingy
var LIST = [
    
    {
        character: [
            "Computer1"
        ],
        frame: "C",
        words:[
            "Run_for_your_life",
        ]

    },
    {
        character: [
            "Human"
        ],
        frame: "H",
        words:[
            "AAAAAAAAAAAAAAAAAAAHHHHHHHHH",
        ]
    },
    {
        character: [
            "Computer2",
            "fire"
        ],
        frame: "T",
        words:[
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
        frame: "E",
        words:[
            "NOOOOOOOOOOOOOOO"
        ]
    },
    /*{
        character: [
            "Computer3"
        ],
        frame: "R",
        words:[
            "I'm_not_done_yet"
        ]
    }*/
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
            f < dunno[i].frame.length;
            f++
        ){
            var framesHTML = document.createElement("div");
            framesHTML.innerHTML = dunno[i].frame[f];
            framesHTML.classList.add("frame");
            framesHTML.classList.add(dunno[i].frame[f]);
            copycat.append(framesHTML);
        }

        for(
            var w = 0;
            w < dunno[i].words.length;
            w++
        ){
            var wordsHTML = document.createElement("div");
            wordsHTML.innerHTML = dunno[i].words[w];
            wordsHTML.classList.add("words");
            wordsHTML.classList.add(dunno[i].words[w]);
            copycat.append(wordsHTML);
        }

        for(
            var c = 0;
            c < dunno[i].character.length;
            c++
        ){
            var characterHTML = document.createElement("div");
            characterHTML.innerHTML = dunno[i].character[c];
            characterHTML.classList.add("character");
            characterHTML.classList.add(dunno[i].character[c]);
            copycat.append(characterHTML);
        }

        document.body.append(copycat);
    }
}

dance("copycat", LIST);