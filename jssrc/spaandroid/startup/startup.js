//startup.js file
var appConfig = {
    appId: "BestBuyKony",
    appName: "BestBuyKony",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.1.36",
    serverPort: "8080",
    secureServerPort: "443",
    url: "http://192.168.1.36:8080/middleware/MWServlet",
    secureurl: "https://192.168.1.36:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrBBHeader();
    initializesegTplCategory();
    initializesegTplNormal();
    initializesegTplOnSale();
    FrmCategoriesGlobals();
    FrmProductDetailGlobals();
    FrmProductsGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
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
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};