var homeCategory = { catId: "cat00000", catName: "Best Buy"};
var apiKey = "uuqftajjhrw8e6hpfamrqtzv";
var breadcrumb = new Array();

function loadInitialCategories(){
	var categoryInfo = getCurrentCategory();
	if (categoryInfo == null){
		categoryInfo = homeCategory;
	}
	loadCategories( categoryInfo );
}

function loadCategories( category ){
	var categoryInfo = (category == null || category == undefined) ? homeCategory : category;
	
	kony.print("Load Category: " + JSON.stringify(categoryInfo) );
	var cachedData = cachedData = getCachedSubcategories(categoryInfo);
	
	if (cachedData != null){
		kony.print("Loading data from cache!");
		
		renderCategories ( categoryInfo, cachedData );
	}else{
		var params = { 	appID : "BestBuyKony", 
	    					serviceID : "BBCategories", 
	    					channel : "rc",
	    					apiKey: apiKey,
	    					catCriteria: "(id=" + categoryInfo.catId + ")" };
	    					
		var info = { category: categoryInfo };
		
		var connHandle = kony.net.invokeServiceAsync( appConfig.url, params, callback_Categories, info);
	}
}

function callback_Categories(status, results, info) {
	kony.print ( "Status (categories): " + status);
	if (status == 400){
		if (results.opstatus == 0){
			var categoryInfo = null;
			if (info["category"] != undefined && info["category"] != null){
				categoryInfo = info.category;
			}
			
			//TODO: Verify results categories
			kony.print( results );
			
			renderCategories ( categoryInfo, results );
		}else{
			kony.print ( JSON.stringify( results ) );
			alert ( "Error getting Categories. Try again later" );
		}
	}
}

function search_onClick(){
	var searchFor = FrmCategories.txtSearch.text;
	if (searchFor != null && searchFor.trim() != ""){
		clearCurrentCategory ();
		kony.store.setItem("search", searchFor);
		FrmProducts.show();
	}
}

function segCategories_onClick(){
	var selCategory = FrmCategories.segCategories.selectedItems[0];
	
	loadCategories ( selCategory );
}

function renderCategories( categoryInfo, results ){
	//Cache Data
	cacheSubcategories ( categoryInfo, results );
	
	if (results.categories.length > 0){
		FrmCategories.segCategories.setData( results.categories );
		FrmCategories.segCategories.widgetDataMap = { lblCategory: "catName" };
		
		breadcrumb = results.path;
		
		updateBreadcrumb();
	} else{//No subcategories found!
		setCurrentCategory ( categoryInfo );
		kony.store.removeItem( "search" );
		FrmProducts.show();
	}
}

function updateBreadcrumb(){
	var size = breadcrumb.length;
	if (size > 0){
		var breadcrumbText = "";
		for (var i = 0; i < size; i++){
			breadcrumbText += breadcrumb[i].catName + " > ";
		}
		FrmCategories.lblBreadcrumb.text = breadcrumbText;
	}
	
	showBackButton ( (size > 1) );
}

function categoriesGoBack(){
	if (breadcrumb.length > 0){
		var category = breadcrumb.pop();
		//Remove previous cached data
		clearCachedSubcategories ( category );
		
		if (breadcrumb.length > 0){
			category = breadcrumb.pop();
		}
		setCurrentCategory ( category );
		loadCategories ( category );
	}
	updateBreadcrumb();
}

function setCurrentCategory(categoryInfo){
	kony.store.setItem("category", categoryInfo);
}

function getCurrentCategory(){
	return kony.store.getItem("category");
}

function clearCurrentCategory(){
	kony.store.removeItem("category");
}

function cacheSubcategories(categoryInfo, subcategories){
	kony.store.setItem("cat_" + categoryInfo.catId, subcategories);
}

function getCachedSubcategories( categoryInfo ){
	return kony.store.getItem("cat_" + categoryInfo.catId);
}

function clearCachedSubcategories( categoryInfo ){
	kony.store.removeItem( "cat_" + categoryInfo.catId );
}