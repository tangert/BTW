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
        currentLanguage = this.id;

        $(".selection-content").fadeIn();
          
        if (dataStructureIsSelected) {
            if (currentDataStructure == "graph") {
                $("#graph").trigger("click");
            }
        }
    });
    
        
        $(".data-structures li a").click(function(){        

            dataStructureIsSelected = true;
            algorithmIsSelected = false;

            if (languageIsSelected && dataStructureIsSelected) {
                $(".code-wrapper").fadeIn();

            }
            
            switch(currentLanguage) {
                case "java":
                    createDataStructureSwitch(this.id, "java");
                    break;
                case "python":
                    createDataStructureSwitch(this.id, "python");
                    break;
                case "javascript":
                    createDataStructureSwitch(this.id, "javascript");
                    break;
                case "c#":
                    createDataStructureSwitch(this.id, "c#");
                    break;
                case "c++":
                    createDataStructureSwitch(this.id, "c++");
                    break;
                case "swift":
                    createDataStructureSwitch(this.id, "swift");
                    break;
                default:
                    break;
                    
            }
            
            //creates a switch statement to be executed for each language
            function createDataStructureSwitch(sender, language) {
                
                switch(sender){
                        case "linkedlist":
                            updateCodeContent(sender, language, "linkedlist");
                            break;
                        case "stack":
                            updateCodeContent(sender, language, "stack");
                            break;
                        case "queue":
                            updateCodeContent(sender, language, "queue");
                            break;
                        case "tree":
                            updateCodeContent(sender, language, "tree");
                            break;
                        case "graph":
                            updateCodeContent(sender, language, "graph");
                            break;
                        case "dictionary":
                            updateCodeContent(sender, language, "dictionary");
                            break;
                        default:
                            updateCodeContent(sender, "markup", "");
                    }
            }
            
            //updates the code content in DOM for each dat
            function updateCodeContent(sender, language, dataStructure) {
                
                currentDataStructure = dataStructure; 
                
                $.ajax({
                    url : "data-structures/" + language + "/" + dataStructure + ".txt",
                    dataType: "text",
                    success : function (data) {
                        $("#code-content").hide().html(data).fadeIn();

                    }
                });

                var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
                $("#code-desc").load(descriptionPath + sender).hide().fadeIn(); 
            }

        });
    
    
    $(".algorithms li a").click(function(){
        
        algorithmIsSelected = true;
        dataStructureIsSelected = false;

        
            if (languageIsSelected && algorithmIsSelected) {

                $(".code-wrapper").fadeIn();

            }

                //switches content for each language selected
                switch(currentLanguage) {
                    case "java":
                        createAlgorithmSwitch(this.id, "java");
                        break;
                    case "python":
                        createAlgorithmSwitch(this.id, "python");
                        break;
                    case "javascript":
                        createAlgorithmSwitch(this.id, "javascript");
                        break;
                    case "c#":
                        createAlgorithmSwitch(this.id, "c#");
                        break;
                    case "c++":
                        createAlgorithmSwitch(this.id, "c++");
                        break;
                    case "swift":
                        createAlgorithmSwitch(this.id, "swift");
                        break;
                    default:
                        break;
                }

                
            //creates a switch statement to be executed for each language
                function createAlgorithmSwitch(sender, language) {

                    switch(sender){
                            case "breadth-first-search":
                                updateCodeContent(sender, language, "breadth-first-search");
                                break;
                            case "depth-first-search":
                                updateCodeContent(sender, language, "depth-first-search");
                                break;
                            case "linear-search":
                                updateCodeContent(sender, language, "linear-search");
                                break;
                            case "binary-search":
                                updateCodeContent(sender, language, "binary-search");
                                break;
                            case "heap-sort":
                                updateCodeContent(sender, language, "heap-sort");
                                break;
                            case "insertion-sort":
                                updateCodeContent(sender, language, "insertion-sort");
                                break;
                            case "merge-sort":
                                updateCodeContent(sender, language, "merge-sort");
                                break;
                            case "quick-sort":
                                updateCodeContent(sender, language, "quick-sort");
                                break;
                            case "selection-sort":
                                updateCodeContent(sender, language, "selection-sort");
                                break;
                            case "bubble-sort":
                                updateCodeContent(sender, language, "bubble-sort");
                                break;
                            default:
                                updateCodeContent(sender, "markup", "");
                        }
                }

                //updates the code content in DOM for each data structure switch. 
                function updateCodeContent(sender, language, algorithm) {

                    currentAlgorithm = algorithm; 

                    $.ajax({
                        url : "algorithms/" + language + "/" + algorithm + ".txt",
                        dataType: "text",
                        success : function (data) {
                            $("#code-content").hide().html(data).fadeIn();

                        }
                    });

                    var descriptionPath = "descriptions/algorithm-descriptions.html " + "#";
                    $("#code-desc").load(descriptionPath + sender).hide().fadeIn(); 
                }
        
    });
    
        
});
