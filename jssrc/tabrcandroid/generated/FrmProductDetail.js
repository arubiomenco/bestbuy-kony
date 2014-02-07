//Form JS File
function FrmProductDetail_FrmProductDetail_preshow_seq0(eventobject, neworientation) {
    frmProductDetails_preShow.call(this);
};

function FrmProductDetail_FrmProductDetail_onDeviceBack_seq0(eventobject, neworientation) {
    goBack.call(this);
};

function FrmProductDetail_lnkMore_onClick_seq0(eventobject) {
    lnkMore_onClick.call(this);
};

function addWidgetsFrmProductDetail() {
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "text": "<name>",
        "skin": "sknLblCategory"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var imgImage = new kony.ui.Image2({
        "id": "imgImage",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 100,
        "referenceHeight": 100,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 18
    }, {});
    var lnkMore = new kony.ui.Link({
        "id": "lnkMore",
        "isVisible": true,
        "text": "More...",
        "onClick": FrmProductDetail_lnkMore_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {});
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "text": "<price>",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var lblAvgReview = new kony.ui.Label({
        "id": "lblAvgReview",
        "isVisible": true,
        "text": "<avgReview>",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var imgReview = new kony.ui.Image2({
        "id": "imgReview",
        "isVisible": true,
        "src": "bbstar0.png",
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
        "containerWeight": 5
    }, {});
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "text": "<description>",
        "skin": "sknLblSmall"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var scrollbox484726900419645 = new kony.ui.ScrollBox({
        "id": "scrollbox484726900419645",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "skin": "sknScrollWhite",
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [1, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    scrollbox484726900419645.add(
    lblName, imgImage, lnkMore, lblPrice, lblAvgReview, imgReview, lblDescription);
    var lblReviews = new kony.ui.Label({
        "id": "lblReviews",
        "isVisible": true,
        "text": "<reviews>",
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
    var segReviewsbox = new kony.ui.Box({
        "id": "segReviewsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 90
    }, {});
    var segReviews = new kony.ui.SegmentedUI2({
        "id": "segReviews",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblTitle": "lblTitle",
            "segTplReview": "segTplReview",
            "imgAvgReview": "imgAvgReview",
            "vbox48472690070460": "vbox48472690070460",
            "hbxTplReviewsTablet": "hbxTplReviewsTablet",
            "lblSubmittedBy": "lblSubmittedBy",
            "lblComment": "lblComment"
        },
        "rowTemplate": hbxTplReviewsTablet,
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
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 90
    }, {
        "dockSectionHeaders": false
    });
    segReviewsbox.add();
    var scrollbox484726900419646 = new kony.ui.ScrollBox({
        "id": "scrollbox484726900419646",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "containerHeight": 90,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_PARENT_WIDTH,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    scrollbox484726900419646.add(
    lblReviews, segReviews);
    var hbox48472690070435 = new kony.ui.Box({
        "id": "hbox48472690070435",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox48472690070435.add(
    scrollbox484726900419645, scrollbox484726900419646);
    FrmProductDetail.add(
    hbox48472690070435);
};

function FrmProductDetailGlobals() {
    var MenuId = [];
    FrmProductDetail = new kony.ui.Form2({
        "id": "FrmProductDetail",
        "title": null,
        "needAppMenu": true,
        "headers": [hbxBBHeaderTablet],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmProductDetail_FrmProductDetail_preshow_seq0,
        "addWidgets": addWidgetsFrmProductDetail
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
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
        "onDeviceBack": FrmProductDetail_FrmProductDetail_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};