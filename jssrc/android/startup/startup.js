//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "BestBuyKony",
    appName: "BB Kony Cert",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.1.36",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://192.168.1.36:8080/middleware/MWServlet",
    secureurl: "https://192.168.1.36:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrBBHeader();
    initializesegTplCategory();
    initializesegTplOnSale();
    initializesegTplProduct();
    initializesegTplReview();
    FrmCategoriesGlobals();
    FrmImagesGlobals();
    FrmProductDetailGlobals();
    FrmProductsGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            FrmCategories.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;