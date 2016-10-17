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
            
        if (dataStructureIsSelected) {
            $("#" + currentDataStructure).trigger("click");
        }
        
        if (algorithmIsSelected) {
            $("#" + currentAlgorithm).trigger("click");
        }
    });
    
        
    $(".data-structures li a").click(function(){        

        dataStructureIsSelected = true;
        algorithmIsSelected = false;

        if (languageIsSelected && dataStructureIsSelected) {
            $(".content-wrapper").fadeIn();

        }
        
        var dataStructure = this.id;
        updateCodeContent(dataStructure, currentLanguage, "data-structure");
        
    });
    
    
    $(".algorithms li a").click(function(){
        
        algorithmIsSelected = true;
        dataStructureIsSelected = false;

        
            if (languageIsSelected && algorithmIsSelected) {
                $(".content-wrapper").fadeIn();
            }

            var algorithm = this.id;
                
            updateCodeContent(algorithm, currentLanguage, "algorithm");
    });
    
    function updateCodeContent(sender, language, DSorAlg) {

        var codeURL;
        
        if (DSorAlg == "data-structure") {
            
            codeURL = "data-structures/" + language + "/" + sender + ".txt";
            var descriptionPath = "descriptions/data-structure-descriptions.html " + "#";
            $("#code-desc").load(descriptionPath + sender).hide().fadeIn(); 
            currentDataStructure = sender; 
            
        } else if (DSorAlg == "algorithm") {
            
            codeURL = "algorithms/" + language + "/" + sender + ".txt";
            var descriptionPath = "descriptions/algorithm-descriptions.html " + "#";
            $("#code-desc").load(descriptionPath + sender).hide().fadeIn(); 
            currentAlgorithm = sender; 
        }

        $.ajax({
            url : codeURL,
            dataType: "text",
            success : function (data) {

                $("#snippet pre code").removeClass().addClass("hljs " + language);
                $("#snippet pre code").hide().html(data).fadeIn();
                highlightBlockInPage();
            }
        });
    }
    
    function highlightBlockInPage() {
        // get the block and highlight it manually:
        var snippet = document.querySelector('#snippet pre code');
        hljs.highlightBlock(snippet);
    }
    
        
});