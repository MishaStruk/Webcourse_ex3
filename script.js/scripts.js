var NUMBER_OF_FAMILY_LETTERS = 5;
var COLORS = ['blue',
    '#EC5657',
    '#1BCDD1',
    '#8FAABB',
    '#B08BEB',
    '#3EA0DD',
    '#F5A52A',
    '#23BFAA',
    '#FAA586',
    '#EB8CC6',
]
function addNewBox(){
    var addedBox = $("<div></div>");
    addedBox.addClass("box");
    addedBox.css("background-color", COLORS[Math.floor(Math.random() * COLORS.length)]);
    if(($(".box").length+1) % 3 == 0){
        addStar(addedBox);
    }
    addedBox.click(function(){
        if(this == $(".box")[0]){
            console.log("First box clicked");
            return;
        }
        if($(this).hasClass("clickedBox")){
            $(this).removeClass("clickedBox");
            $(this).children().css("visibility","visible");
        }
        else{
            $(this).addClass("clickedBox");
            $(this).children().css("visibility","hidden");
        }
    });
    addedBox.appendTo($(".mainContent")[0]);
}

function addStar(object) {
    var addedStar = $("<img/>");
    addedStar.attr('alt', "star");
    addedStar.attr('title', "star");
    addedStar.attr('class', "star");
    addedStar.attr('src', "images/star.png");
    addedStar.addClass("star");
    addedStar.appendTo(object);
}
function addPlus(object){
    var addedPlus = $("<img/>");
    addedPlus.attr('alt', "plus");
    addedPlus.attr('title', "plus");
    addedPlus.attr('id', "addPic");
    addedPlus.attr('src', "images/plus.png");
    addedPlus.click(addNewBox);
    addedPlus.appendTo(object);
}


function initialize() {
    for (i = 0; i < NUMBER_OF_FAMILY_LETTERS * 2; i++) {
        addNewBox();
    }
    divs = $('.box');
    addPlus($(divs[0]));
}
(initialize());