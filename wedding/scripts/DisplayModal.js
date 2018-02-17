
/*** DISPLAY MODAL --------------------------------------------------------------------------------------------- */

//IIFE to pass window
(function (window) {

    var ModalManipulator = {};

    var modal  = document.getElementById("myModal");
    var close  = document.querySelector(".Close");

    ModalManipulator.displayModal = function () {
        $UseAjax.FetchModalSnippet("./snippets/AllSnippet.html");
        //modal.style.display = "block";
        // close.onclick = function () { modal.style.display = "none"; };
        modal.style.removeProperty("opacity");
        modal.style.display = "block";
        close.onclick = function () {
            // When closed, firstly, remove the content. But it will be overwritten by another XMLHTTPRequest.
            var opacity = 1;
            var interval = setInterval(FadeOut, 10);
            function FadeOut() {
                if (opacity <= 0.07) { clearInterval(interval); modal.style.opacity = 0; modal.style.display = "none"; }
                else {
                    opacity -= 0.05;
                    modal.style.opacity = opacity;
                }
            }
        };

    };

    // ModalManipulator.listOfButtons = document.querySelectorAll(".Button");



    window.$ModalManipulator = ModalManipulator;

})(window);
/*
for (var i = 0; i < $ModalManipulator.listOfButtons.length; ++i) {
    $ModalManipulator.listOfButtons[i].onclick = $ModalManipulator.displayModal;
}
*/