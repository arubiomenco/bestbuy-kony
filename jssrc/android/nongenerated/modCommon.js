function goBack() {
    var form = kony.application.getCurrentForm();
    if (form.id == "FrmCategories") {
        categoriesGoBack();
    } else if (form.id == "FrmProductDetail") {
        FrmProducts.show();
    } else if (form.id == "FrmProducts") {
        FrmCategories.show();
    }
}

function closeApplication() {
    kony.store.clear();
    kony.application.exit();
}

function showBackButton(value) {
    hbxHdrBBHeader.btnBack.setEnabled(value);
    if (value) {
        hbxHdrBBHeader.btnBack.skin = sknBtnBack;
    } else {
        hbxHdrBBHeader.btnBack.skin = sknBtnInvisible;
    }
}