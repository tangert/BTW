$(function(){
    $(".data-structures").hide();
    $(".algorithms").hide();
});

$(document).ready(function(){
    
    var currentLanguage;
    var chosenLanguage; 

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
        currentLanguage = this.id;
  
        //if a data structure or algorithm is selected
        //update the data structure with the selected language 
        
        //fire the data structure click function with the updated language. 
        //fire the algorithm click function with the updated language. 
        
        
    });
    
        
    $(".data-structures li a").click(function(){
        
        event.preventDefault();
        
        //$('.code-content').html();
        
        
//        if (currentLanguage == "java") {
//            
//            chosenLanguage = "java";
//            
//            switch(this.id) {
//                case "linkedlist":  
//                case "stack":
//                case "queue":
//                case "tree":
//                case "graph":
//                case "dictionary": 
//                default:
//        }
//        
//        }
        
        //add cases for each language, then direct function to appropriate data structure and language. 
        
    });
    
    var $gists = $ajax_container.find('script[src^="https://gist.github.com/"]');

        // if gist embeds are found
        if( $gists.length ){

            // update each gist
            $gists.each(function(){

                // we need to store $this for the callback
                var $this = $(this);

                // load gist as json instead with a jsonp request
                $.getJSON( $this.attr('src') + 'on?callback=?', function( data ) {

                    // replace script with gist html
                    $this.replaceWith( $( data.div ) );

                    // load the stylesheet, but only once…
                    add_stylesheet_once( 'https://gist.github.com/' + data.stylesheet )

                });

            });

    }
    
    function add_stylesheet_once( url ){
        $head = $('head');
        if( $head.find('link[rel="stylesheet"][href="'+url+'"]').length < 1 )
            $head.append('<link rel="stylesheet" href="'+ url +'" type="text/css" />');
    }
    
//    $("#algorithms li a").click(function(){
//        
//        event.preventDefault();
//        
//        switch(currentLanguage) {
//                
//            case "java":
//                
//        }
//        
//        if (currentLanguage == "java") {
//             
//            switch(this.id) {
//                case "breadth-first-search":
//                case "depth-first-search":
//                case "linear-search":
//                case "binary-search":
//                case "heap-sort":
//                case "insertion-sort": 
//                case "merge-sort":
//                case "quick-sort":
//                case "selection-sort":
//                case "bubble-sort":  
//                default:
//            }
//        }
//        
//        //add cases for each language, then direct function to appropriate data structure and language. 
//        
//    });
//    
//    function loadLanguageToAlgorithm(var language, var algorithm) {
//            
//            return 
//            
//
//        }
        
});
