$(function(){
    $(".data-structures").hide();
    $(".algorithms").hide();
    $(".code-wrapper").hide();
    $(".selection-content").hide();
    
});

$(document).ready(function(){
    
    //some variable initialization 
    var currentLanguage, 
        currentDataStructure,
        currentAlgorithm = ""; 

    var languageIsSelected,
        dataStructureIsSelected,
        algorithmIsSelected= false;
    
    //functions
    $("#dataStructuresBtn").click(function(){
        
        if(languageIsSelected) {
            $(".data-structures").fadeIn();
            $(".algorithms").hide();
        }

    });
    
    $("#algorithmsBtn").click(function(){
        
        if(languageIsSelected) {
            $(".algorithms").fadeIn();
            $(".data-structures").hide();
        }

    });
    
    
    $("#languages li a").click(function(){
  
        languageIsSelected = true; 
        
        $(".selection-content").fadeIn();
        
        //event.preventDefault();
        currentLanguage = this.id;
  
        //if a data structure or algorithm is selected
        //update the data structure with the selected language 
        
        //fire the data structure click function with the updated language. 
        //fire the algorithm click function with the updated language. 
        
        if (dataStructureIsSelected) {
            
            if (currentDataStructure == "graph") {
                $("#graph").trigger("click");
            }
        }
    });
    
        
        $(".data-structures li a").click(function(){        

            dataStructureIsSelected = true;
            algorithmIsSelected = false;

            if (languageIsSelected && 
                (algorithmIsSelected || dataStructureIsSelected)) {
                $(".code-wrapper").fadeIn();

            }

            //switch statement for this.id
            //add cases for each language, then direct function to appropriate data structure and language. 

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

            
            //TESTING BETWEEN JAVA AND PYTHON.
            
            
            if(currentLanguage == "java") {

                if (this.id == "graph") {
                    
                    currentDataStructure = "graph";

                    $.ajax({
                        url : "data-structures/java/graph.txt",
                        dataType: "text",
                        success : function (data) {
                            $("#code-content").hide().html(data).fadeIn();

                        }
                    });

                    var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
                    $("#code-desc").load(descriptionPath + this.id).hide().fadeIn(); 
                    
                    

                } else {
                    
                    currentDataStructure = "tree";
                    $.ajax({
                        url : "data-structures/java/tree.txt",
                        dataType: "text",
                        success : function (data) {
                            $("#code-content").hide().html(data).fadeIn();
                        }
                    });
                    
                    var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
                    $("#code-desc").load(descriptionPath + this.id).hide().fadeIn();
                }

            } else if (currentLanguage == "python") {

                if (this.id == "graph") {
                    
                    currentDataStructure = "graph";

                    $.ajax({
                        url : "data-structures/python/graph.txt",
                        dataType: "text",
                        success : function (data) {
                            $("#code-content").hide().html(data).fadeIn();

                        }
                    });

                    var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
                    $("#code-desc").load(descriptionPath + this.id).hide().fadeIn(); 

                } else {
                    
                    currentDataStructure = "tree";

                    $.ajax({
                        url : "data-structures/python/tree.txt",
                        dataType: "text",
                        success : function (data) {
                            $("#code-content").hide().html(data).fadeIn();
                        }
                    });
                    
                    var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
                    $("#code-desc").load(descriptionPath + this.id).hide().fadeIn();
                }
            }


        });
    
    
    var clickAlgorithm = $(".algorithms li a").click(function(){
        
        algorithmIsSelected = true;
        dataStructureIsSelected = false;

        
        if (languageIsSelected && 
            (algorithmIsSelected || dataStructureIsSelected)) {

            $(".code-wrapper").fadeIn();
        
        }
        
        
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
    });
    
        
});
