(function (global) { // IIFE
    var ButtonFunctions = {}; // Namespace.

    var modal = document.getElementById("ButtonContentFrame");
    var close = document.querySelector("#CloseButtonContent");

    ButtonFunctions.displayButtonContent = function () {
        modal.style.display = "block";
        close.onclick = function () {
            modal.style.display = "none";
        };
//        window.onclick = function (event) { if (event.target.tagName == "SECTION" || event.target == close2) { modal.style.display = "none"; } };
    };

    ButtonFunctions.displayButtonId1 = function () {
        console.log("1st button was clicked!");
        ButtonFunctions.displayButtonContent();
    }

    ButtonFunctions.displayButtonId2 = function () {
        console.log("2nd button was clicked!");
        ButtonFunctions.displayButtonContent();
    }

    ButtonFunctions.displayButtonId3 = function () {
        console.log("3dr button was clicked!");
        ButtonFunctions.displayButtonContent();
    }

    ButtonFunctions.displayButtonId4 = function () {
        console.log("4th button was clicked!");
        ButtonFunctions.displayButtonContent();
    }

    global.$ButtonFunctions = ButtonFunctions; // Exposing the namespace.
})(window); // Calling IIFE.

//$ButtonFunctions.;
