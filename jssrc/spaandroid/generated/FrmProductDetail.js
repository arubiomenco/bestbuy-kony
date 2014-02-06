//Form JS File
function addWidgetsFrmProductDetail() {};

function FrmProductDetailGlobals() {
    var MenuId = [];
    FrmProductDetail = new kony.ui.Form2({
        "id": "FrmProductDetail",
        "title": null,
        "needAppMenu": true,
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
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