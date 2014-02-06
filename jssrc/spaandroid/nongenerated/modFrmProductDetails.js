var currentProductDetail = null;
var currentReviews = null;

function frmProductDetails_preShow() {
    showBackButton(true);
    FrmProductDetail.segReviews.setData([{
        tittle: "",
        submittedBy: "",
        image: "",
        comment: ""
    }]);
    FrmProductDetail.segReviews.widgetDataMap = {
        lblTitle: "title",
        lblSubmittedBy: "submittedBy",
        imgAvgReview: "image",
        lblComment: "comment"
    };
}

function setProductDetails(productDetail) {
    if (productDetail != null) {
        currentProductDetail = productDetail;
        FrmProductDetail.lblName.text = productDetail.name;
        FrmProductDetail.lblDescription.text = productDetail.description;
        if (productDetail.onSale) {
            FrmProductDetail.lblPrice.text = "On Sale! $" + productDetail.salePrice;
            FrmProductDetail.lblPrice.skin = sknLblOnSale;
        } else {
            FrmProductDetail.lblPrice.text = "$" + productDetail.regularPrice;
            FrmProductDetail.lblPrice.skin = sknLblCategory;
        }
        //Check Reviews Info
        var defaultReview = "bbstar0.png";
        FrmProductDetail.lblAvgReview.text = "";
        FrmProductDetail.lblReviews.text = "No reviews";
        FrmProductDetail.imgReview.src = defaultReview;
        FrmProductDetail.segReviews.setVisibility(false);
        if (productDetail["reviews"] != undefined && productDetail["reviews"] != null) {
            if (productDetail.reviews > 0) {
                FrmProductDetail.lblAvgReview.text = "Avg Review: " + productDetail.avgReview;
                FrmProductDetail.lblReviews.text = "Number of Reviews: " + productDetail.reviews;
                FrmProductDetail.imgReview.src = getImageByReview(productDetail.avgReview);
                loadReviews(productDetail);
            }
        }
        FrmProductDetail.imgImage.src = productDetail.image;
    }
}

function loadReviews(product) {
    if (product != null) {
        kony.print("Load Reviews...");
        var params = {
            appID: "BestBuyKony",
            serviceID: "BBReviews",
            channel: "rc",
            apiKey: apiKey,
            revCriteria: "(sku=" + product.sku + ")"
        };
        kony.print(JSON.stringify(params));
        var info = {};
        connHandle = kony.net.invokeServiceAsync(appConfig.url, params, callback_Reviews, info);
    } else {
        kony.print("NO PRODUCT SPEC!");
    }
}

function callback_Reviews(status, results, info) {
    kony.print("Status (reviews): " + status);
    if (status == 400) {
        if (results.opstatus == 0) {
            FrmProductDetail.segReviews.setVisibility(true);
            kony.print(JSON.stringify(results));
            for (var i = 0; i < results.reviews.length; i++) {
                results.reviews[i].template = hbxTplReviews;
                results.reviews[i].submittedBy = "submitted by: " + results.reviews[i].reviewer;
                results.reviews[i].image = getImageByReview(results.reviews[i].rating);
            }
            currentReviews = results.reviews;
            showCurrentReviews();
        } else {
            kony.print(JSON.stringify(results));
            alert("Error getting Reviews. Try again later");
        }
    }
}

function showCurrentReviews() {
    if (currentReviews != null) {
        FrmProductDetail.segReviews.setData(currentReviews);
        FrmProductDetail.segReviews.widgetDataMap = {
            lblTitle: "title",
            lblSubmittedBy: "submittedBy",
            imgAvgReview: "image",
            lblComment: "comment"
        };
    }
}

function lnkMore_onClick() {
    kony.print("Product Detail: " + currentProductDetail);
    if (currentProductDetail != null) {
        showImages(currentProductDetail);
        FrmImages.show();
    }
}

function getImageByReview(review) {
    var reviewSrc = "bbstar0.png";
    if (review > 1.0 && review < 2.0) {
        reviewSrc = "bbstar1.png";
    } else if (review < 3.0) {
        reviewSrc = "bbstar2.png";
    } else if (review < 4.0) {
        reviewSrc = "bbstar3.png";
    } else if (review < 5.0) {
        reviewSrc = "bbstar4.png";
    } else {
        reviewSrc = "bbstar5.png";
    }
    return reviewSrc;
}