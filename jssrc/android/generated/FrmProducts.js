//Form JS File
function FrmProducts_FrmProducts_preshow_seq0(eventobject, neworientation) {
    frmProducts_preShow.call(this);
};

function FrmProducts_FrmProducts_onDeviceBack_seq0(eventobject, neworientation) {
    goBack.call(this);
};

function FrmProducts_segProducts_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    segProducts_onClick.call(this);
};

function FrmProducts_btnPrevious_onClick_seq0(eventobject) {
    productPrevious_onClick.call(this);
};

function FrmProducts_btnNext_onClick_seq0(eventobject) {
    productNext_onClick.call(this);
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
        "margin": [1, 0, 1, 0],
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
        "groupCells": true,
        "screenLevelWidget": true,
        "onRowClick": FrmProducts_segProducts_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [2, 2, 2, 2],
        "padding": [5, 5, 5, 5],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "dockSectionHeaders": false
    });
    segProductsbox.add();
    var btnPrevious = new kony.ui.Button({
        "id": "btnPrevious",
        "isVisible": true,
        "text": "Button",
        "skin": "sknBtnPrevious",
        "focusSkin": "sknBtnPreviousP",
        "onClick": FrmProducts_btnPrevious_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "pressedSkin": "sknBtnPreviousP"
    });
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
        "text": "Button",
        "skin": "sknBtnNext",
        "focusSkin": "sknBtnNextP",
        "onClick": FrmProducts_btnNext_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "pressedSkin": "sknBtnNextP"
    });
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": false,
        "skin": "sknHbBackground",
        "position": constants.BOX_POSITION_AS_FOOTER,
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "onDeviceBack": FrmProducts_FrmProducts_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};