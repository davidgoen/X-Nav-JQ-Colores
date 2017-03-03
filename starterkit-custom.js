// Changing colors in a document
// To be used as file custom.js with StarterKit

jQuery(document).ready(function() {
    $("#faq").addClass("red");
    $("#faq > dt").addClass("blue");
    $("#faq > dt").hover(function() {
	$(this).addClass("green");
    },function(){
	$(this).removeClass("green");
    });
});
