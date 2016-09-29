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
        
        if (currentLanguage !== chosenLanguage) {
            
            
        }
    });
    
    
    var clickDataStructure = $(".data-structures li a").click(function(){        
        
        if (this.id == "graph") {
            
            $.ajax({
                url : "data-structures/java/graph.txt",
                dataType: "text",
                success : function (data) {
                    $(".code-content").hide().html(data).fadeIn();
                }
            });

            var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
            $("#code-desc").load(descriptionPath + this.id).hide().fadeIn(); 
            
        } else {
            
            $.ajax({
                url : "data-structures/java/tree.txt",
                dataType: "text",
                success : function (data) {
                    $(".code-content").hide().html(data).fadeIn();
                }
            });
            
            
        }

    
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
        
});
