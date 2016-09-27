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
    
    var alreadySelected = false;
    var clickCount = 0;
    
    $("#languages li a").click(function(){
  
        var previousLanguage;
        var currentLanguage = "language-" + this.id;
        
        //handles first time events 
        if (alreadySelected == false) {
            
            $('#chosen-language').addClass(currentLanguage); 
            $('#chosen-language').replaceWith(currentLanguage); 
            alreadySelected = true;
            
            previousLanguage = currentLanguage;
            
            console.log("Current language: "+ currentLanguage);
                        
        } else {
            
            $('#chosen-language').removeClass(previousLanguage);
            $('#chosen-language').addClass(currentLanguage)
            previousLanguage = currentLanguage;
            
            console.log("Current language: "+ currentLanguage);
            console.log("Previous language: "+ previousLanguage);
            
        }
        
        //select current language, good
        //second time press, new current language, then previous current language = previous language
        //remove previous language
        //add new current language 
        
    });

//    if chosen language == java,python,etc, 
//        access certain file
//    if chosen d-s == stack, queue, etc
//        access div from certain file
//     if chosen alg == mergesort, quick sort
//    
    
    
});

    //initializing the chosen data points
    var chosenLanguage;
    var chosenDataStructure;
    var chosenAlgorithm;

    //function that loads a specific language into the code canvas.
    
    var languageIsSelected = false;
//    
//    $("#languages>li>a").click(function(){
//        chosenLanguage = this.id;
//        languageIsSelected = true;
//    })
//    
//    if (languageIsSelected == true) {
//        $("#data-structures>li>a").click(function(){
//            chosenDataStructure = this.id;
//        })
//
//        $("#algorithms>li>a").click(function(){
//            chosenAlgorithm = this.id;
//        })
//    } else if (languageIsSelected == false {
//               
//        $("#languageSelectionWarning").fadeIn();
//
//    }
//    
