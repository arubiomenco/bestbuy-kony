//Form JS File
function FrmProductDetail_FrmProductDetail_preshow_seq0(eventobject, neworientation) {
    frmProductDetails_preShow.call(this);
};

function FrmProductDetail_lnkMore_onClick_seq0(eventobject) {
    lnkMore_onClick.call(this);
};

function addWidgetsFrmProductDetail() {
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
        "referenceHeight": 90,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 72
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
        "containerWeight": 28
    }, {});
    var vbox48472690070467 = new kony.ui.Box({
        "id": "vbox48472690070467",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 29,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox48472690070467.add(
    imgImage, lnkMore);
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
        "containerWeight": 18
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
        "containerWeight": 19
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
        "containerWeight": 21
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
        "containerWeight": 20
    }, {});
    var vbox48472690070437 = new kony.ui.Box({
        "id": "vbox48472690070437",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 71,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox48472690070437.add(
    lblName, lblPrice, lblAvgReview, imgReview);
    var hbox48472690070441 = new kony.ui.Box({
        "id": "hbox48472690070441",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 87,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox48472690070441.add(
    vbox48472690070467, vbox48472690070437);
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
        "containerWeight": 13
    }, {});
    var vbox48472690070440 = new kony.ui.Box({
        "id": "vbox48472690070440",
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
    vbox48472690070440.add(
    hbox48472690070441, lblDescription);
    var hbox48472690070435 = new kony.ui.Box({
        "id": "hbox48472690070435",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxWhite",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [3, 3, 3, 3],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox48472690070435.add(
    vbox48472690070440);
    var lblReviews = new kony.ui.Label({
        "id": "lblReviews",
        "isVisible": true,
        "text": "<reviews>",
        "skin": "sknLblBreadcrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var line48472690070445 = new kony.ui.Line({
        "id": "line48472690070445",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 2,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segReviewsbox = new kony.ui.Box({
        "id": "segReviewsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
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
            "lblSubmittedBy": "lblSubmittedBy",
            "lblComment": "lblComment",
            "hbxTplReviews": "hbxTplReviews"
        },
        "rowTemplate": hbxTplReviews,
        "widgetSkin": "sknSegNormal",
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": true,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [2, 2, 2, 2],
        "padding": [5, 5, 5, 5],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    segReviewsbox.add();
    var vbox118379050881556 = new kony.ui.Box({
        "id": "vbox118379050881556",
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
    vbox118379050881556.add(
    hbox48472690070435, lblReviews, line48472690070445, segReviews);
    var scrollbox118379050877187 = new kony.ui.ScrollBox({
        "id": "scrollbox118379050877187",
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
    scrollbox118379050877187.add(
    vbox118379050881556);
    FrmProductDetail.add(
    scrollbox118379050877187);
};

function FrmProductDetailGlobals() {
    var MenuId = [];
    FrmProductDetail = new kony.ui.Form2({
        "id": "FrmProductDetail",
        "title": null,
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmProductDetail_FrmProductDetail_preshow_seq0,
        "needAppMenu": true,
        "addWidgets": addWidgetsFrmProductDetail
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