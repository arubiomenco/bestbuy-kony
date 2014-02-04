function frmProducts_preShow() {
    hbxHdrBBHeader.btnBack.setVisibility(true);
    var category = kony.store.getItem("category");
    if (category != null) {
        FrmProducts.lblInfo.text = "Category: " + category.catName;
    } else {}
}