$(function(){
    $(".data-structures").hide();
    $(".algorithms").hide();
    
    $("#linkedlist-variations").hide();
    $("#stack-queue-variations").hide();
    
    $(".content-wrapper").hide();
    $(".selection-content").hide();
    
});

$(document).ready(function(){
        
//    $('[data-toggle="popover"]').popover()
    
    //some variable initialization 
    var currentLanguage, 
        currentDataStructure,
        currentAlgorithm = ""; 

    var languageIsSelected,
        dataStructureIsSelected,
        algorithmIsSelected = false;
    
    //specific stuff for linked list, stack, and queue
    var linkedlistIsSelected,
        stackIsSelected,
        queueIsSelected = false;
    
    //initial window stuff
    var canvas = document.getElementById("myCanvas");
    
    $(window).on('resize', function() {
        $("myCanvas").height = window.height();
        $("myCanvas").width = window.width();
    });
    
    //functions
    $("#dataStructuresBtn").click(function(){
        
        if(languageIsSelected) {
            $(".data-structures").fadeIn();
            $(".algorithms").hide();
        }
        
        if(algorithmIsSelected) {
            dataStructureIsSelected = true;
            algorithmIsSelected = false;
            
            $("#" + currentDataStructure).trigger("click");
            
        }

    });
    
    $("#algorithmsBtn").click(function(){
        
        if(languageIsSelected) {
            $(".algorithms").fadeIn();
            $(".data-structures").hide();
        }
        
        if(dataStructureIsSelected) {
            algorithmIsSelected = true;
            dataStructureIsSelected = false;
            
            $("#" + currentAlgorithm).trigger("click");
            
        }

    });
    
    
    $("#languages li a").click(function(){
  
        languageIsSelected = true; 
        currentLanguage = this.id;

        $(".selection-content").fadeIn();
          
        //switch statement 
        
        //adjust to accomodate stack, queue, linked list variations. 
        
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
        
        var dataStructure = this.id;

        switch(currentLanguage) {
            case "java":
                switchDataStructure(dataStructure, "java");
                break;
            case "python":
                switchDataStructure(dataStructure, "python");
                break;
            case "javascript":
                switchDataStructure(dataStructure, "javascript");
                break;
            case "cs":
                switchDataStructure(dataStructure, "cs");
                break;
            case "c++":
                switchDataStructure(dataStructure, "c++");
                break;
            case "swift":
                switchDataStructure(dataStructure, "swift");
                break;
            default:
                break;

        }

        //creates a switch statement to be executed for each language
        function switchDataStructure(sender, language) {

            //adjust to accomodate stack, queue, linked list variations. 
            //stack, queue, linkedlist buttons only to show further choices
            
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
                $(".content-wrapper").fadeIn();
            }

            var algorithm = this.id;
        
            //switches content for each language selected
            switch(currentLanguage) {
                case "java":
                    switchAlgorithm(algorithm, "java");
                    break;
                case "python":
                    switchAlgorithm(algorithm, "python");
                    break;
                case "javascript":
                    switchAlgorithm(algorithm, "javascript");
                    break;
                case "cs":
                    switchAlgorithm(algorithm, "cs");
                    break;
                case "c++":
                    switchAlgorithm(algorithm, "c++");
                    break;
                case "swift":
                    switchAlgorithm(algorithm, "swift");
                    break;
                default:
                    break;
            }

                
        //creates a switch statement to be executed for each language
            function switchAlgorithm(sender, language) {

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
                
                //image path
                //var imagePath = path/to/image
                //$("#code-images").load(imagePath + sender).hide().fadeIn();
            }
        
            function highlightBlockInPage() {
                // get the block and highlight it manually:
                var snippet = document.querySelector('#snippet pre code');
                hljs.highlightBlock(snippet);
            }
    });
    
        
});
