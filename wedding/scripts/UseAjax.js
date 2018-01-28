(function (global) { // IIFE
    var UseAjax = {}; // Namespace.

    var jsonURL = "./json/Buttons.json";
    var buttonSnippetURL = "./snippets/ButtonSnippet.html";

    var jsonContent;
    var snippetContent;

    var InsertHTML = function (selector, html) {
        document.querySelector(selector).innerHTML = html;
    }

    // var ShowLoading = function (selector) {}

    var InsertProperty = function (snippet, propertyName, propertyValue) {
        var propertyToReplace = "{{" + propertyName + "}}";
        snippet = snippet.replace(new RegExp(propertyToReplace, "g"), propertyValue);
        return snippet;
    }

    function FormFinalHTML(fromJson, fromButtonSnippet) {
        var finalHTML = "";
        for (var i = 0; i < fromJson.length; ++i) {
            finalHTML += InsertProperty(fromButtonSnippet, "buttonContent", fromJson[i].text);
        }
        InsertHTML("#buttonContainer", finalHTML);
    }

    function BuildAndShowButtons(request, isJason) {
        if (isJason == undefined) {
            isJason = false;
        }
        if (isJason == true) {
            jsonContent = JSON.parse(request.response);
            $AjaxUtils.SendGetRequest(buttonSnippetURL, BuildAndShowButtons, false);
        }
        else { // if (isJason == false)
            snippetContent = request.response + "\n";
            FormFinalHTML(jsonContent, snippetContent);
        }
    }

    UseAjax.LoadButtons = function () {
        // Show Loading ... perhaps.
        $AjaxUtils.SendGetRequest(jsonURL, BuildAndShowButtons, true);
    };

    global.$UseAjax = UseAjax; // Exposing the namespace.
})(window); // Calling IIFE.

$UseAjax.LoadButtons();
