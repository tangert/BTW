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
  
        //changes the language of the code-display block.
        $('#code-language').removeClass();  
        $('#code-language').addClass(currentLanguage);
        
        //if a data structure or algorithm is selected
        //update the data structure with the selected language 
        
        
        
        
    });
    
    //helper methods
    function mapLanguageToDataStructure() {     

    }
    
    function mapLanguageToAlgorithm() {
        
    }
    
    function updateDataStructure() {
        
    }
    
    function updateAlgorithm() {
        
    }
        
    var selectDataStructure = $("#data-structures li a").click(function(){
        
        event.preventDefault();
        
        if (currentLanguage == "java") {
            
            chosenLanguage = "java";
            
            switch(this.id) {
                case "linkedlist":  
                case "stack":
                case "queue":
                case "tree":
                case "graph":
                case "dictionary": 
                default:
        }
        
        }
        
        //add cases for each language, then direct function to appropriate data structure and language. 
        
    });
    
    selectDataStructure();
    
    
    var selectAlgorithm = $("#algorithms li a").click(function(){
        
        event.preventDefault();
        
        if (currentLanguage == "hljs java") {
             
            switch(this.id) {
                case "breadth-first-search":
                case "depth-first-search":
                case "linear-search":
                case "binary-search":
                case "heap-sort":
                case "insertion-sort": 
                case "merge-sort":
                case "quick-sort":
                case "selection-sort":
                case "bubble-sort":  
                default:
            }
        }
        
        //add cases for each language, then direct function to appropriate data structure and language. 
        
    }); 
    
    selectAlgorithm();
    
});
