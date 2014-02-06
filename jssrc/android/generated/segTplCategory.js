//Template File
function initializesegTplCategory() {
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "text": "<category>",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 91
    }, {});
    var imgForward = new kony.ui.Image2({
        "id": "imgForward",
        "isVisible": true,
        "src": "forward.png",
        "imageWhenFailed": "forward.png",
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 1, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    hbxTplCategory = new kony.ui.Box({
        "id": "hbxTplCategory",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxTplCategory.add(
    lblCategory, imgForward);
};