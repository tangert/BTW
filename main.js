$(function(){
    $(".data-structures").hide();
    $(".algorithms").hide();
    $(".linked-list-variations").hide();
    $("#languageSelectionWarning").hide();
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
    
    $("#languages li a").click(function(){
  
        event.preventDefault();
        var currentLanguage = "language-" + this.id + " text-center";
  
        //changes the language of the code-display block.
        $('#chosen-language').removeClass();  
        $('#chosen-language').addClass(currentLanguage);
        
        //adjust language of data/structure/algorithm searching tool.
    });
    
    
});
