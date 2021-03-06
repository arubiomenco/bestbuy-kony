var productSpec = {};
var currentPage = 1;
var totalPages = 1;
var inputInfo = null;

function frmProducts_preShow() {
    if (productSpec == null || productSpec["category"] == undefined) {
        buildProductSpec();
    }
    showBackButton(true);
    var cachedInfo = getCachedProducts();
    if (cachedInfo != null) {
        kony.print("Loading products from Cache...");
        currentPage = cachedInfo.currentPage;
        totalPages = cachedInfo.totalPages;
        renderProducts(cachedInfo);
    } else {
        currentPage = 1;
        totalPages = 1;
        FrmProducts.lblInfo.text = "";
        FrmProducts.segProducts.removeAll();
        handleProductPagination();
        loadProducts();
    }
}

function buildProductSpec() {
    var category = kony.store.getItem("category");
    var searchFor = kony.store.getItem("search");
    productSpec = {
        isSearch: (searchFor != null),
        category: category,
        searchFor: searchFor
    };
}

function loadProducts() {
    if (productSpec != null) {
        kony.print("Load Products: " + JSON.stringify(productSpec));
        var productCriteria = null;
        if (productSpec.isSearch) {
            productCriteria = "(search=" + productSpec.searchFor + ")";
        } else {
            productCriteria = "(categoryPath.id=" + productSpec.category.catId + ")";
        }
        var params = {
            appID: appConfig.appId,
            serviceID: "BBProducts",
            channel: "rc",
            apiKey: apiKey,
            prodCriteria: productCriteria,
            page: "" + currentPage
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
            setCachedProducts(results);
            renderProducts(results);
        } else {
            kony.print(JSON.stringify(results));
            alert("Error getting Products. Try again later");
        }
    }
}

function reloadProducts() {
    var cachedInfo = getCachedProducts();
    if (cachedInfo != null) {
        currentPage = cachedInfo.currentPage;
        totalPages = cachedInfo.totalPages;
        renderProducts(cachedInfo);
    } else {
        loadProducts();
    }
}

function renderProducts(results) {
    FrmProducts.segProducts.setVisibility(results.total > 0);
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
                results.products[i].template = hbxTplProduct;
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
        handleProductPagination();
    }
    //Update label info
    setProductsLabelInfo(results.total);
}

function productNext_onClick() {
    if (currentPage < totalPages) {
        currentPage++;
        loadProducts();
    }
}

function productPrevious_onClick() {
    if (currentPage > 1) {
        currentPage--;
        loadProducts();
    }
}

function segProducts_onClick() {
    var selProduct = FrmProducts.segProducts.selectedItems[0];
    setProductDetails(selProduct);
    FrmProductDetail.show();
}

function setProductsLabelInfo(count) {
    if (count > 0) {
        if (productSpec.isSearch) {
            FrmProducts.lblInfo.text = "Results for: \"" + productSpec.searchFor + "\" (" + count + ")";
        } else {
            FrmProducts.lblInfo.text = "Category: " + productSpec.category.catName + " (" + count + ")";
        }
    } else {
        if (productSpec.isSearch) {
            FrmProducts.lblInfo.text = "No results for: \"" + productSpec.searchFor + "\"";
        } else {
            FrmProducts.lblInfo.text = "No products in Category: " + productSpec.category.catName;
        }
    }
}

function handleProductPagination() {
    FrmProducts.hbxFooter.isVisible = (totalPages > 1);
    if (currentPage < totalPages) {
        FrmProducts.btnNext.setEnabled(true);
        FrmProducts.btnNext.skin = sknBtnNext;
    } else {
        FrmProducts.btnNext.setEnabled(false);
        FrmProducts.btnNext.skin = sknBtnInvisible;
    }
    if (currentPage > 1) {
        FrmProducts.btnPrevious.setEnabled(true);
        FrmProducts.btnPrevious.skin = sknBtnPrevious;
    } else {
        FrmProducts.btnPrevious.setEnabled(false);
        FrmProducts.btnPrevious.skin = sknBtnInvisible;
    }
    FrmProducts.lblPageInfo.text = "Page " + currentPage + " of " + totalPages;
}

function getCachedProducts() {
    return kony.store.getItem("cached_products");
}

function setCachedProducts(products) {
    kony.store.setItem("cached_products", products);
}

function clearCachedProducts() {
    kony.store.removeItem("cached_products");
}