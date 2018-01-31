(function (global) { // IIFE
    var ButtonFunctions = {}; // Namespace.

    var modal = document.getElementById("ButtonContentFrame");
    var close = document.querySelector("#CloseButtonContent");

    ButtonFunctions.displayButtonContent = function (snippetToFetch) {
        $UseAjax.FetchButtonSnippet(snippetToFetch); // First, fetch snippet.
        modal.style.display = "block";
        close.onclick = function () {
            // When closed, firstly, remove the content. But it will be overwritten by another XMLHTTPRequest.
            modal.style.display = "none";
        };
    };

    ButtonFunctions.displayButtonWhereAndWhen = function () {
        console.log("1st, or 2nd button was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/WhereAndWhenSnippet.html");
    };

    ButtonFunctions.displayButtonAccomodation = function () {
        console.log("3dr button was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/AccomodationSnippet.html");
    };

    ButtonFunctions.displayButtonWhy = function () {
        console.log("4th button was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/WhySnippet.html");
    };

    global.$ButtonFunctions = ButtonFunctions; // Exposing the namespace.
})(window); // Calling IIFE.

//$ButtonFunctions.;
