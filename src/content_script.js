// copyright 2022 conceptualspace

"use strict";

const zoomLinkElement = "a[web_client]";

document.arrive(zoomLinkElement, {onceOnly: true, existing: true}, function(elem) {
    elem.click();
});
