function goBack() {
    var form = kony.application.getCurrentForm();
    if (form.id == "FrmCategories") {
        categoriesGoBack();
    } else if (form.id == "FrmProductDetail") {
        FrmProducts.show();
    } else if (form.id == "FrmProducts") {
        clearCachedProducts();
        FrmCategories.show();
    } else if (form.id == "FrmImages") {
        FrmProductDetail.show();
    }
}

function closeApplication() {
    var basicConf = {
        message: "Close Appplication?",
        alertType: constants.ALERT_TYPE_CONFIRMATION,
        alertTitle: "BestBuy Kony",
        yesLabel: "Yes",
        noLabel: "No",
        alertHandler: handleCloseApp
    };
    kony.ui.Alert(basicConf, {});
}

function handleCloseApp(response) {
    if (response) {
        kony.store.clear();
        kony.application.exit();
    }
}

function showBackButton(value) {
    var header = hbxHdrBBHeader;
    header.btnBack.setEnabled(value);
    if (value) {
        header.btnBack.skin = sknBtnBack;
    } else {
        header.btnBack.skin = sknBtnInvisible;
    }
}

function showLoadingScreen() {
    kony.application.showLoadingScreen("sknFrmLoading", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
}

function dismissLoadingScreen() {
    kony.application.dismissLoadingScreen();
}