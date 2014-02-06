//Form JS File
function FrmCategories_FrmCategories_preshow_seq0(eventobject, neworientation) {
    loadInitialCategories.call(this);
};

function FrmCategories_FrmCategories_postshow_seq0(eventobject, neworientation) {
    refreshCategories.call(this);
};

function FrmCategories_txtSearch_onDone_seq0(eventobject, changedtext) {
    search_onClick.call(this);
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
        "maxTextLength": 80,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter keywords...",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": FrmCategories_txtSearch_onDone_seq0,
        "skin": "sknTxtNormal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {
        "autoCorrect": false,
        "autoComplete": false
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
        "hExpand": false,
        "margin": [0, 0, 2, 0],
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
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
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
        "containerWeight": 83
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
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": true,
        "screenLevelWidget": false,
        "onRowClick": FrmCategories_segCategories_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR
    }, {
        "margin": [2, 0, 2, 2],
        "padding": [5, 5, 5, 5],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 83
    }, {});
    segCategoriesbox.add();
    FrmCategories.add(
    hbxSearch, lblBreadcrumb, segCategories);
};

function FrmCategoriesGlobals() {
    var MenuId = [];
    FrmCategories = new kony.ui.Form2({
        "id": "FrmCategories",
        "title": null,
        "headers": [hbxHdrBBHeader],
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBackground",
        "preShow": FrmCategories_FrmCategories_preshow_seq0,
        "postShow": FrmCategories_FrmCategories_postshow_seq0,
        "needAppMenu": true,
        "addWidgets": addWidgetsFrmCategories
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