//Form JS File
function FrmProducts_FrmProducts_preshow_seq0(eventobject, neworientation) {
    frmProducts_preShow.call(this);
};

function FrmProducts_FrmProducts_postshow_seq0(eventobject, neworientation) {
    reloadProducts.call(this);
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
        "containerWeight": 80
    }, {});
    var segProducts = new kony.ui.SegmentedUI2({
        "id": "segProducts",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblOnSale": "lblOnSale",
            "imgForward": "imgForward"
        },
        "rowTemplate": segProductsbox,
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
        "screenLevelWidget": false,
        "onRowClick": FrmProducts_segProducts_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [2, 2, 2, 2],
        "padding": [5, 5, 5, 5],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80
    }, {});
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
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": false,
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
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var hbxFooter = new kony.ui.Box({
        "id": "hbxFooter",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbBackground",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
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
    var label484726900101485 = new kony.ui.Label({
        "id": "label484726900101485",
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblUCantSeeMe"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var vbox48472690072343 = new kony.ui.Box({
        "id": "vbox48472690072343",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox48472690072343.add(
    segProducts, hbxFooter, label484726900101485);
    var scrollbox48472690070510 = new kony.ui.ScrollBox({
        "id": "scrollbox48472690070510",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 100,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false
    }, {
        "scrollArrowConfig": ["", "", "", ""]
    });
    scrollbox48472690070510.add(
    vbox48472690072343);
    FrmProducts.add(
    lblInfo, scrollbox48472690070510);
};

function FrmProductsGlobals() {
    var MenuId = [];
    FrmProducts = new kony.ui.Form2({
        "id": "FrmProducts",
        "title": null,
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmProducts_FrmProducts_preshow_seq0,
        "postShow": FrmProducts_FrmProducts_postshow_seq0,
        "needAppMenu": true,
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