(function (global) { // IIFE
    var UseAjax = {}; // Namespace.

    function ShowLoading() {
        document.querySelector("#contentPlaceHolder").innerHTML = "<div id=\"imageHolder\"><div style=\"display: block; min-height: 301px;\"><img style=\"display: block; margin-left: auto; margin-right:auto;\" src=\"pictures/ajax-loader.gif\"></div></div>";
    }

    function HandleResponse(request) {
	    document.querySelector("#contentPlaceHolder").innerHTML = request.responseText;
    }

    UseAjax.LoadNetCurtains = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/netCurtains.html", HandleResponse);
    };

    UseAjax.LoadCurtains = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/curtains.html", HandleResponse);
    };

    UseAjax.LoadPelmets = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/pelmets.html", HandleResponse);
    };

    UseAjax.LoadMattresses = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/mattresses.html", HandleResponse);
    };

    UseAjax.LoadClothesAdjustments = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/clothesAdjustments.html", HandleResponse);
    };

    UseAjax.LoadUpholstery = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/upholstery.html", HandleResponse);
    };

    UseAjax.LoadCarpets = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/carpets.html", HandleResponse);
    };

    UseAjax.LoadPvc = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/pvc.html", HandleResponse);
    };

    UseAjax.LoadFeatherPurification = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/featherPurification.html", HandleResponse);
    };

    UseAjax.LoadEmbroidery = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/embroidery.html", HandleResponse);
    };

    UseAjax.LoadTentReparations = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/tentReparations.html", HandleResponse);
    };

    UseAjax.LoadRollerBlinds = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/rollerBlinds.html", HandleResponse);
    };

    UseAjax.LoadGardenFurniture = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/gardenFurniture.html", HandleResponse);
    };

    UseAjax.LoadCarUpholstery = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/carUpholstery.html", HandleResponse);
    };

    UseAjax.LoadAntiques = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/antiques.html", HandleResponse);
    };

    UseAjax.LoadMaterialSale = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/materialSale.html", HandleResponse);
    };

    UseAjax.LoadProfessionSummary = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/professionSummary.html", HandleResponse);
    };

    UseAjax.LoadHouseholdEquipment = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/householdEquipment.html", HandleResponse);
    };

    UseAjax.LoadForKids = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/forKids.html", HandleResponse);
    };

    UseAjax.LoadGifts = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/gifts.html", HandleResponse);
    };

    UseAjax.LoadAdvertising = function () {
        ShowLoading();
        setTimeout(void (0), 1000);
        $AjaxUtils.SendGetRequest("./snippets/advertising.html", HandleResponse);
    };

    UseAjax.LoadBillboard = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/billboard.html", HandleResponse);
    };

    UseAjax.LoadOffice = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/office.html", HandleResponse);
    };

    UseAjax.LoadSchools = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/schools.html", HandleResponse);
    };

    UseAjax.LoadTheatres = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/theatres.html", HandleResponse);
    };

    UseAjax.LoadHomeForElderly = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/homeForElderly.html", HandleResponse);
    };

    UseAjax.LoadPolice = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/police.html", HandleResponse);
    };

    UseAjax.LoadHealthCare = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/healthCare.html", HandleResponse);
    };

    UseAjax.LoadCarRepairShops = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/carRepairShops.html", HandleResponse);
    };

    UseAjax.LoadVeterans = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/veterans.html", HandleResponse);
    };

    UseAjax.LoadYounker = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/younker.html", HandleResponse);
    };

    UseAjax.LoadChurch = function () {
        ShowLoading();
        $AjaxUtils.SendGetRequest("./snippets/church.html", HandleResponse);
    };

    global.$UseAjax = UseAjax; // Exposing the namespace.
})(window); // Calling IIFE.

document.getElementById("netCurtains").onclick = $UseAjax.LoadNetCurtains;
document.getElementById("curtains").onclick = $UseAjax.LoadCurtains;
document.getElementById("pelmets").onclick = $UseAjax.LoadPelmets;
document.getElementById("mattresses").onclick = $UseAjax.LoadMattresses;
