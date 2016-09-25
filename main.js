$(function(){
    $(".data-structures").hide();
    $(".algorithms").hide();
});

$(document).ready(function(){
    
    $("#dataStructuresBtn").click(function(){
        $(".data-structures").fadeIn();
        $(".algorithms").hide();

    });
    
    $("#algorithmsBtn").click(function(){
        $(".algorithms").fadeIn();
        $(".data-structures").hide();
    });
});

