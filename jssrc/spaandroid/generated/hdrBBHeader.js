//Template File
function hdrBBHeader_btnBack_onClick_seq0(eventobject) {
    goBack.call(this);
};

function hdrBBHeader_btnExit_onClick_seq0(eventobject) {
    closeApplication.call(this);
};

function initializehdrBBHeader() {
    hbxHdrBBHeader = new kony.ui.Box({
        "id": "hbxHdrBBHeader",
        "isVisible": true,
        "skin": "sknHbBackground",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbxHdrBBHeader() {
        var btnBack = new kony.ui.Button({
            "id": "btnBack",
            "isVisible": true,
            "text": null,
            "skin": "sknBtnInvisible",
            "focusSkin": "btnFocus",
            "onClick": hdrBBHeader_btnBack_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "vExpand": false,
            "hExpand": false,
            "margin": [0, 0, 0, 0],
            "padding": [0, 3, 0, 3],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 11
        }, {});
        var label118379050873733 = new kony.ui.Label({
            "id": "label118379050873733",
            "isVisible": true,
            "text": null,
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 19
        }, {});
        var imgLogo = new kony.ui.Image2({
            "id": "imgLogo",
            "isVisible": true,
            "src": "bblogo.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 40
        }, {});
        var label118379050866706 = new kony.ui.Label({
            "id": "label118379050866706",
            "isVisible": true,
            "text": null,
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 19
        }, {});
        var btnExit = new kony.ui.Button({
            "id": "btnExit",
            "isVisible": true,
            "text": null,
            "skin": "sknBtnExit",
            "focusSkin": "btnFocus",
            "onClick": hdrBBHeader_btnExit_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "vExpand": false,
            "hExpand": false,
            "margin": [0, 0, 0, 0],
            "padding": [0, 3, 0, 3],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 11
        }, {});
        hbxHdrBBHeader.add(
        btnBack, label118379050873733, imgLogo, label118379050866706, btnExit);
    }
    addWidgetshbxHdrBBHeader();
};