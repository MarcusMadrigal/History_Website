var LIST = [
    
    {
        authors: [
            "MarcusㅤMadrigal"
        ],
        button: [
            "HistoricalㅤContext"
        ],
    },
    {
        authors: [
            "EmersonㅤBrown"
        ],
        button: [
            "Thesis"
        ],
    },
    {
        authors: [
            "CodyㅤSics"
        ],
        button: [
            "OctoberㅤRevolution"
        ],
    },
    {
        authors: [

        ],
        button: [
            "FebruaryㅤRevolution"
        ],
    },
    {
        authors: [

        ],
        button: [
            "RussianㅤCivilㅤWar"
        ],
    },
];

var create = function(x, dunno) {
    var thingy = document.getElementById(x);
    
    for(
        var i = 0;
        i < dunno.length;
        i++
    ){
        var thingamajig = thingy.cloneNode(true);

        for(
            var b = 0;
            b < dunno[i].button.length;
            b++
        ){
            var buttonsHTML = document.createElement("div");
            buttonsHTML.innerHTML = dunno[i].button[b];
            buttonsHTML.classList.add("button");
            buttonsHTML.classList.add(dunno[i].button[b]);
            


            buttonsHTML.addEventListener("click", function() {
                window.location.href = dunno[i].button + ".html";
            });

            buttonsHTML.addEventListener("mouseover", function() {
                this.classList.add("hover");
            });
            
            thingamajig.append(buttonsHTML);
        }

        for(
            var a = 0;
            a < dunno[i].authors.length;
            a++
        ){
            var authorsHTML = document.createElement("div");
            authorsHTML.innerHTML = dunno[i].authors[a];
            authorsHTML.classList.add("author");
            authorsHTML.classList.add(dunno[i].authors[a]);
            thingamajig.append(authorsHTML);
        }

        document.body.append(thingamajig);
    }
}

create("thingamajig", LIST);