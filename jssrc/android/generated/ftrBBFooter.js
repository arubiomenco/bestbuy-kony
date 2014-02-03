//Template File
function initializeftrBBFooter() {
    hbxFtrBBFooter = new kony.ui.BoxTemplate({
        "id": "hbxFtrBBFooter",
        "isVisible": true,
        "skin": "sknHbBackground",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxFtrBBFooter
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

    function addWidgetshbxFtrBBFooter() {
        var btnPrevious = new kony.ui.Button({
            "id": "btnPrevious",
            "isVisible": true,
            "text": "<< Previous",
            "skin": "btnNormal",
            "focusSkin": "btnFocus"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 3, 0, 3],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 25
        }, {});
        var lblPageInfo = new kony.ui.Label({
            "id": "lblPageInfo",
            "isVisible": true,
            "text": "<page_info>",
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 50
        }, {});
        var btnNext = new kony.ui.Button({
            "id": "btnNext",
            "isVisible": true,
            "text": "Next >>",
            "skin": "btnNormal",
            "focusSkin": "btnFocus"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 3, 0, 3],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 25
        }, {});
        hbxFtrBBFooter.add(
        btnPrevious, lblPageInfo, btnNext);
    }
};