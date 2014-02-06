var productSpec = {};
var currentPage = 1;
var totalPages = 1;
var inputInfo = null;

function frmProducts_preShow() {
    currentPage = 1;
    totalPages = 1;
    FrmProducts.segProducts.removeAll();
    handlePagination();
    FrmProducts.lblInfo.text = "";
    showBackButton(true);
    var category = kony.store.getItem("category");
    var searchFor = kony.store.getItem("search");
    productSpec = {
        isSearch: (searchFor != null),
        category: category,
        searchFor: searchFor
    };
    loadProducts(currentPage);
}

function loadProducts(page) {
    if (productSpec != null) {
        kony.print("Load Products: " + JSON.stringify(productSpec));
        var productCriteria = null;
        if (productSpec.isSearch) {
            productCriteria = "(search=" + productSpec.searchFor + ")";
        } else {
            productCriteria = "(categoryPath.id=" + productSpec.category.catId + ")";
        }
        var params = {
            appID: "BestBuyKony",
            serviceID: "BBProducts",
            channel: "rc",
            apiKey: apiKey,
            prodCriteria: productCriteria,
            page: "" + page
        };
        kony.print(JSON.stringify(params));
        var info = {};
        connHandle = kony.net.invokeServiceAsync(appConfig.url, params, callback_Products, info);
    } else {
        kony.print("NO PRODUCT SPEC!");
    }
}

function callback_Products(status, results, info) {
    kony.print("Status (products): " + status);
    if (status == 400) {
        if (results.opstatus == 0) {
            kony.print(JSON.stringify(results));
            if (results.total > 0) {
                currentPage = results.currentPage;
                totalPages = results.totalPages;
                for (var i = 0; i < results.products.length; i++) {
                    if (results.products[i]["reviews"] != undefined && results.products[i]["reviews"] != null) {
                        if (results.products[i].reviews > 0) {
                            results.products[i].reviewInfo = "Avg Review: " + results.products[i].avgReview;
                        }
                    }
                    if (results.products[i].onSale) {
                        results.products[i].template = hbxTplOnSale;
                        results.products[i].price = "$" + results.products[i].salePrice;
                    } else {
                        results.products[i].template = hbxTplNormal;
                        results.products[i].price = "$" + results.products[i].regularPrice;
                    }
                }
                FrmProducts.segProducts.setData(results.products);
                FrmProducts.segProducts.widgetDataMap = {
                    lblName: "name",
                    lblPrice: "price",
                    lblRate: "reviewInfo",
                    imgThumbnail: "image"
                };
                handlePagination();
            }
            //Update label info
            setLabelInfo(results.total);
        } else {
            kony.print(JSON.stringify(results));
            alert("Error getting Products. Try again later");
        }
    }
}

function setLabelInfo(count) {
    if (count > 0) {
        if (productSpec.isSearch) {
            FrmProducts.lblInfo.text = "Results for: \"" + productSpec.searchFor + "\"";
        } else {
            FrmProducts.lblInfo.text = "Category: " + productSpec.category.catName;
        }
    } else {
        if (productSpec.isSearch) {
            FrmProducts.lblInfo.text = "No results for: \"" + productSpec.searchFor + "\"";
        } else {
            FrmProducts.lblInfo.text = "There are no products in Category: " + productSpec.category.catName;
        }
    }
}

function handlePagination() {
    FrmProducts.hbxFooter.isVisible = (totalPages > 1);
    kony.print("btnNext Skin (Before): " + FrmProducts.btnNext.skin);
    if (currentPage < totalPages) {
        FrmProducts.btnNext.setEnabled(true);
        FrmProducts.btnNext.skin = sknBtnNext;
    } else {
        FrmProducts.btnNext.setEnabled(false);
        FrmProducts.btnNext.skin = sknBtnInvisible;
    }
    kony.print("btnNext Skin (After): " + FrmProducts.btnNext.skin);
    kony.print("btnPrevious Skin (Before): " + FrmProducts.btnPrevious.skin);
    if (currentPage > 1) {
        FrmProducts.btnPrevious.setEnabled(true);
        FrmProducts.btnPrevious.skin = sknBtnBack;
    } else {
        FrmProducts.btnPrevious.setEnabled(false);
        FrmProducts.btnPrevious.skin = sknBtnInvisible;
    }
    kony.print("btnPrevious Skin (After): " + FrmProducts.btnPrevious.skin);
    FrmProducts.lblPageInfo.text = "Page " + currentPage + " of " + totalPages;
}