//Form JS File
function FrmProducts_FrmProducts_preshow_seq0(eventobject, neworientation) {
    frmProducts_preShow.call(this);
};

function addWidgetsFrmProducts() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "text": "<info>",
        "skin": "sknLblBreadcrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var segProductsbox = new kony.ui.Box({
        "id": "segProductsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segProducts = new kony.ui.SegmentedUI2({
        "id": "segProducts",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblOnSale": "lblOnSale",
            "lblRate": "lblRate",
            "imgThumbnail": "imgThumbnail",
            "vbox4847269003": "vbox4847269003",
            "hbxTplNormal": "hbxTplNormal",
            "lblName": "lblName",
            "lblPrice": "lblPrice",
            "segTplNormal": "segTplNormal",
            "imgForward": "imgForward"
        },
        "rowTemplate": hbxTplNormal,
        "widgetSkin": "sknSegNormal",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": true,
        "screenLevelWidget": true,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    segProductsbox.add();
    var btnPrevious = new kony.ui.Button({
        "id": "btnPrevious",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnPrevious",
        "focusSkin": "sknBtnPreviousP"
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
    var lblPageInfo = new kony.ui.Label({
        "id": "lblPageInfo",
        "isVisible": true,
        "text": "<page_info>",
        "skin": "sknLblBreadcrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var btnNext = new kony.ui.Button({
        "id": "btnNext",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnNext",
        "focusSkin": "sknBtnNextP"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
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
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "skin": "sknHbBackground",
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
    hbxFooter.add(
    btnPrevious, lblPageInfo, btnNext);
    FrmProducts.add(
    lblInfo, segProducts, hbxFooter);
};

function FrmProductsGlobals() {
    var MenuId = [];
    FrmProducts = new kony.ui.Form2({
        "id": "FrmProducts",
        "title": null,
        "needAppMenu": true,
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmProducts_FrmProducts_preshow_seq0,
        "addWidgets": addWidgetsFrmProducts
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};