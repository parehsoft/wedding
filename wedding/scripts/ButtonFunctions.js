(function (global) { // IIFE
    var ButtonFunctions = {}; // Namespace.

    var modal = document.getElementById("ButtonContentFrame");
    var close = document.querySelector("#CloseButtonContent");

    ButtonFunctions.displayButtonContent = function (snippetToFetch) {
        ShowLoading();
        $UseAjax.FetchButtonSnippet(snippetToFetch); // First, fetch snippet.
        modal.style.removeProperty("opacity");
        modal.style.display = "block";
        close.onclick = function () {
            var opacity = 1;
            var interval = setInterval(FadeOut, 10);
            function FadeOut() {
                if (opacity <= 0.07) {
                    clearInterval(interval);
                    modal.style.opacity = 0;
                    document.getElementById("buttonContentItself").innerHTML = ""; // Clear the content. Otherwise previus content will be visible for a fraction of a second, while new content is being loaded.
                    modal.style.display = "none";
                }
                else {
                    opacity -= 0.05;
                    modal.style.opacity = opacity;
                }
            }
        };
    };

    function ShowLoading() {
        document.getElementById("buttonContentItself").innerHTML = " <div id=\"loadingImage\"><img src=\"./images/ajax-loader.gif\" width=\"100%\" height=\"auto\"></div> ";
        console.log("Show loading calleeeedd!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }

    ButtonFunctions.displayButtonWhereAndWhen = function () {
        console.log("WhereAndWhenSnippet was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/WhereAndWhenSnippet.html");
    };

    ButtonFunctions.displayButtonAccomodation = function () {
        console.log("AccomodationSnippet was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/AccomodationSnippet.html");
    };

    ButtonFunctions.displayButtonWhy = function () {
        console.log("WhySnippet was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/WhySnippet.html");
    };

    ButtonFunctions.displayButtonInternationalAccomodation = function () {
        console.log("InternationalAccomodationSnippet was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/InternationalAccomodationSnippet.html");
    };

    ButtonFunctions.displayButtonTransportation = function () {
        console.log("TransportationSnippet was clicked!");
        ButtonFunctions.displayButtonContent("./snippets/TransportationSnippet.html");
    };

    global.$ButtonFunctions = ButtonFunctions; // Exposing the namespace.
})(window); // Calling IIFE.
