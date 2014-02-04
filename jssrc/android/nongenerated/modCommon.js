function goBack() {
    var form = kony.application.getCurrentForm();
    if (form.id == "FrmCategories") {
        categoriesGoBack();
    } else if (form.id == "FrmProductDetail") {
        FrmProducts.show();
    } else if (form.id == "FrmProducs") {
        FrmCategories.show();
    }
}