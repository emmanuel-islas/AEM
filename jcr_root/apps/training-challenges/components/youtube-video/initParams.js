"use strict";

use(function () {
    var CONST = {
        CUSTOM_TITLE: "custom-title",
        CUSTOM_URL: "custom-url",
        CUSTOM_SIZE: {
            height: "height",

        }
    }
    var params = {};

    params.title = granite.resource.properties[CONST.CUSTOM_TITLE];
    params.url = granite.resource.properties[CONST.CUSTOM_URL];
    console.log(granite.resource.properties);

    return params;
});