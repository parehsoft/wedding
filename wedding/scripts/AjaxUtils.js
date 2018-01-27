// AJAX utils

(function (global) { // IIFE
    var AjaxUtils = {}; // Namespace for my utility.

    function GetXMLHTTPRequestObject() { // Construct new XML HTTP request object. Older browsers are not supported.
        if (window.XMLHttpRequest) {                                                                                              return (new XMLHttpRequest()); }
        else                       { global.alert("AJAX is not supported by XMLHttpRequest object, please update your browser."); return (null); }
    }

    AjaxUtils.SendGetRequest = function (myURL, ResponceHandler) {
        var request = GetXMLHTTPRequestObject();
        request.onreadystatechange = function () { // The onreadystatechange property defines a function to be executed when the readyState changes.
            var str = "-- readystaye == " + this.readyState + " and status == " + this.status;
            if (this.readyState === 4 && this.status === 200) {
                ResponceHandler(request); // Call the function which will process the response from the server, which is located in the above created XMLHttpRequest.
            }
        };
        request.open("GET", myURL, true); // Prepare the request.
        request.send(null); // Send the request. GET Http method doesn't send any data (POST method sends data to server), so null for empty. 
    };

    global.$AjaxUtils = AjaxUtils;
})(window);