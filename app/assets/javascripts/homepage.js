$(document).ready(function() {


var i = -1;

function nextItem() {
    if (i < items.length - 1) {
        i = i + 1;
    } else {
    		i = 0;
    }
    $('#share-things').html(items[i]).fadeIn(500).delay(1000).fadeOut(500, nextItem);
};

var items = [
    "interests",
    "bikes",
    "trails",
    "tools",
    "advice"
];

nextItem();



});