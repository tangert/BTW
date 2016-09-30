$(function(){
    $(".data-structures").hide();
    $(".algorithms").hide();
    $(".content-wrapper").hide();
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
          
        //switch statement 
        
        if (dataStructureIsSelected) {            
            switch(currentDataStructure){
                case "linkedlist":
                    $("#linkedlist").trigger("click");
                    break;
                case "stack":
                    $("#stack").trigger("click");
                    break;
                case "queue":
                    $("#queue").trigger("click");
                    break;
                case "tree":
                    $("#tree").trigger("click");
                    break;
                case "graph":
                    $("#graph").trigger("click");
                    break;
                case "dictionary":
                    $("#dictionary").trigger("click");
                    break;
                default:
                    break;
            }
        }
        
        if (algorithmIsSelected) {
            switch(currentAlgorithm) {
                case "breadth-first-search":
                    $("#breadth-first-search").trigger("click");
                    break;
                case "depth-first-search":
                    $("#depth-first-search").trigger("click");
                    break;
                case "linear-search":
                    $("#linear-search").trigger("click");
                    break;
                case "binary-search":
                    $("#binary-search").trigger("click");
                    break;
                case "heap-sort":
                    $("#heap-sort").trigger("click");
                    break;
                case "insertion-sort":
                    $("#insertion-sort").trigger("click");
                    break;
                case "merge-sort":
                    $("#merge-sort").trigger("click");
                    break;
                case "quick-sort":
                    $("#quick-sort").trigger("click");
                    break;
                case "selection-sort":
                    $("#selection-sort").trigger("click");
                    break;
                case "bubble-sort":
                    $("#bubble-sort").trigger("click");
                    break;
                default:
                    break;
            }
        }
    });
    
        
    $(".data-structures li a").click(function(){        

        dataStructureIsSelected = true;
        algorithmIsSelected = false;

        if (languageIsSelected && dataStructureIsSelected) {
            $(".content-wrapper").fadeIn();

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
                    
                    $("#snippet pre code").removeClass().addClass("hljs " + language);
                    $("#snippet pre code").hide().html(data).fadeIn();
                    highlightBlockInPage();

                }
            });

            var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
            $("#code-desc").load(descriptionPath + sender).hide().fadeIn(); 
        }
        
        function highlightBlockInPage() {
            // get the block and highlight it manually:
            var snippet = document.querySelector('#snippet pre code');
            hljs.highlightBlock(snippet);
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
                        $("#snippet pre code").removeClass().addClass("hljs " + language);
                        $("#snippet pre code").hide().html(data).fadeIn();
                        highlightBlockInPage();

                    }
                });

                var descriptionPath = "descriptions/algorithm-descriptions.html " + "#";
                $("#code-desc").load(descriptionPath + sender).hide().fadeIn(); 
            }
        
            function highlightBlockInPage() {
                // get the block and highlight it manually:
                var snippet = document.querySelector('#snippet pre code');
                hljs.highlightBlock(snippet);
            }
    });
    
        
});
