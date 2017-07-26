"use strict";

use(function () {
    var CONST = {
        CUSTOM_TITLE: "custom-title",
        CUSTOM_URL: "custom-url",
        CUSTOM_SIZE: {
            HEIGHT: "height",
            WIDTH: "width"
        }
    }

    var params = {};

    params.title = resource.properties[CONST.CUSTOM_TITLE];
    params.url = resource.properties[CONST.CUSTOM_URL];
    params.size = {
        width: resource.getChild('video').properties[CONST.CUSTOM_SIZE.WIDTH],
        height: resource.getChild('video').properties[CONST.CUSTOM_SIZE.HEIGHT]
    }

    return params;
});