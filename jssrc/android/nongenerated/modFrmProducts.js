var productSpec = {};
var currentPage = 1;
var totalPages = 0;
var inputInfo = null;

function frmProducts_preShow() {
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
            //Todo: Handle Pagination
            if (results.total > 0) {
                for (var i = 0; i < results.products.length; i++) {
                    if (results.products[i]["reviews"] != undefined && results.products[i]["reviews"] != null) {
                        if (results.products[i].reviews > 0) {
                            results.products[i].reviewInfo = "Avg Review: " + results.products[i].avgReview;
                        }
                    }
                    if (results.products[i].onSale) {
                        results.products[i].template = hbxTplOnSale;
                        results.products[i].price = "$" + results.products[i].salePrice;
                        results.products[i].onSaleTitle = "ON SALE!";
                    } else {
                        results.products[i].template = hbxTplNormal;
                        results.products[i].price = "$" + results.products[i].regularPrice;
                        results.products[i].onSaleTitle = "";
                    }
                }
                FrmProducts.segProducts.setData(results.products);
                FrmProducts.segProducts.widgetDataMap = {
                    lblName: "name",
                    lblPrice: "price",
                    lblRate: "reviewInfo",
                    imgThumbnail: "image",
                    lblOnSale: "onSaleTitle"
                };
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