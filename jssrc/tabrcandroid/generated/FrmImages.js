//Form JS File
function FrmImages_FrmImages_preshow_seq0(eventobject, neworientation) {
    FrmImages_preShow.call(this);
};

function FrmImages_FrmImages_onDeviceBack_seq0(eventobject, neworientation) {
    goBack.call(this);
};

function addWidgetsFrmImages() {
    var hzImages = new kony.ui.HorizontalImageStrip2({
        "id": "hzImages",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": "load100.png",
        "spaceBetweenImages": 100,
        "skin": "hStrip2Normal",
        "focusSkin": "hStrip2Focus",
        "showArrows": true,
        "arrowConfig": {
            "rightArrowImage": "hzforward.png",
            "leftArrowFocusImage": "hzback.png",
            "rightArrowFocusImage": "hzforward.png",
            "leftArrowImage": "hzback.png"
        },
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "coverflowAngle": 0,
                "coverflowDepth": 0
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            }
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_COVERFLOW
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "referenceWidth": 200,
        "referenceHeight": 200,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox118379050877160 = new kony.ui.Box({
        "id": "hbox118379050877160",
        "isVisible": true,
        "skin": "sknHbxWhite",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 29,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox118379050877160.add(
    hzImages);
    var lblProductInfo = new kony.ui.Label({
        "id": "lblProductInfo",
        "isVisible": true,
        "text": "<productInfo>",
        "skin": "sknLblBreadcrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "padding": [3, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    FrmImages.add(
    hbox118379050877160, lblProductInfo);
};

function FrmImagesGlobals() {
    var MenuId = [];
    FrmImages = new kony.ui.Form2({
        "id": "FrmImages",
        "title": null,
        "needAppMenu": true,
        "headers": [hbxBBHeaderTablet],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmImages_FrmImages_preshow_seq0,
        "addWidgets": addWidgetsFrmImages
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
        "onDeviceBack": FrmImages_FrmImages_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};