//Form JS File
function FrmCategories_FrmCategories_preshow_seq0(eventobject, neworientation) {
    loadInitialCategories.call(this);
};

function FrmCategories_FrmCategories_onDeviceBack_seq0(eventobject, neworientation) {
    goBack.call(this);
};

function FrmCategories_btnSearch_onClick_seq0(eventobject) {
    search_onClick.call(this);
};

function FrmCategories_segCategories_onRowClick_seq0(eventobject, sectionNumber, rowNumber, selectedState) {
    segCategories_onClick.call(this);
};

function addWidgetsFrmCategories() {
    var txtSearch = new kony.ui.TextBox2({
        "id": "txtSearch",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Search",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTxtNormal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_SEARCH_VIEW
    });
    var btnSearch = new kony.ui.Button({
        "id": "btnSearch",
        "isVisible": true,
        "text": null,
        "skin": "sknBtnSearch",
        "focusSkin": "btnFocus",
        "onClick": FrmCategories_btnSearch_onClick_seq0
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
        "containerWeight": 11
    }, {});
    var hbxSearch = new kony.ui.Box({
        "id": "hbxSearch",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
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
    hbxSearch.add(
    txtSearch, btnSearch);
    var lblBreadcrumb = new kony.ui.Label({
        "id": "lblBreadcrumb",
        "isVisible": true,
        "text": "Home",
        "skin": "sknLblBreadcrumb"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [5, 0, 5, 0],
        "padding": [3, 3, 3, 3],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var segCategoriesbox = new kony.ui.Box({
        "id": "segCategoriesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segCategories = new kony.ui.SegmentedUI2({
        "id": "segCategories",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblCategory": "lblCategory",
            "segTplCategory": "segTplCategory",
            "hbxTplCategory": "hbxTplCategory",
            "imgForward": "imgForward"
        },
        "rowTemplate": hbxTplCategory,
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
        "onRowClick": FrmCategories_segCategories_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
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
    segCategoriesbox.add();
    FrmCategories.add(
    hbxSearch, lblBreadcrumb, segCategories);
};

function FrmCategoriesGlobals() {
    var MenuId = [];
    FrmCategories = new kony.ui.Form2({
        "id": "FrmCategories",
        "title": null,
        "needAppMenu": true,
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmCategories_FrmCategories_preshow_seq0,
        "addWidgets": addWidgetsFrmCategories
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
        "onDeviceBack": FrmCategories_FrmCategories_onDeviceBack_seq0,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};