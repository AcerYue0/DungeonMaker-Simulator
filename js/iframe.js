if (window.document.getElementsByTagName("iframe")) {
    var iFrameElements = window.document.getElementsByTagName("iframe");
    for (var i = 0; i < iFrameElements.length; i++) {
        iFrameElements[i].frameBorder = "0";   //  For other browsers.
        iFrameElements[i].setAttribute("frameBorder", "0");   //  For other browsers (just a backup for the above).
        iFrameElements[i].contentWindow.document.body.style.border = "none";   //  For IE.
    }
}