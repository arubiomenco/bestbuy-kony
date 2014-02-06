//Form JS File
function FrmImages_FrmImages_preshow_seq0(eventobject, neworientation) {
    FrmImages_preShow.call(this);
};

function addWidgetsFrmImages() {
    var hzImages = new kony.ui.HorizontalImageStrip2({
        "id": "hzImages",
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": "load100.png",
        "spaceBetweenImages": 0,
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
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_PAGEVIEW
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 2, 2, 2],
        "padding": [5, 5, 5, 5],
        "referenceWidth": 100,
        "referenceHeight": 100,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox118379050877160 = new kony.ui.Box({
        "id": "hbox118379050877160",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxWhite",
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
        "margin": [5, 5, 5, 5],
        "padding": [2, 2, 2, 2],
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
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmImages_FrmImages_preshow_seq0,
        "needAppMenu": true,
        "addWidgets": addWidgetsFrmImages
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