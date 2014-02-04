var homeCategory = { catId: "cat00000", catName: "Best Buy"};
var apiKey = "uuqftajjhrw8e6hpfamrqtzv";
var breadcrumb = new Array();

function loadInitialCategories(){
	loadCategories( homeCategory );
}

function loadCategories( category ){
	var catInfo = (category == null || category == undefined) ? homeCategory : category;
	
	kony.print("Load Category: " + JSON.stringify(category) );
	
	var params = { 	appID : "BestBuyKony", 
    					serviceID : "BBCategories", 
    					channel : "rc",
    					apiKey: apiKey,
    					catCriteria: "(id=" + catInfo.catId + ")" };
    					
	var info = { category: catInfo };
	
	connHandle = kony.net.invokeServiceAsync( appConfig.url, params, callback_Categories, info);
}

function callback_Categories(status, results, info) {
	kony.print ( "Status (categories): " + status);
	if (status == 400){
		if (results.opstatus == 0){
			var category = null;
			if (info["category"] != undefined && info["category"] != null){
				category = info.category;
				breadcrumb.push( category );
			}
			//TODO: Verify results categories
			if (results.categories.length > 0){
				kony.print( results );
				
				FrmCategories.segCategories.setData( results.categories );
				FrmCategories.segCategories.widgetDataMap = { lblCategory: "catName" };
				
				breadcrumb = results.path;
				
				updateBreadcrumb();
			}else{//No subcategories found!
				kony.store.setItem("category", category);
				FrmProducts.show();
			}
		}else{
			kony.print ( JSON.stringify( results ) );
			alert ( "Error getting Categories. Try again later" );
		}
	}
}

function segCategories_onClick(){
	var selCategory = FrmCategories.segCategories.selectedItems[0];
	
	loadCategories ( selCategory );
}

function updateBreadcrumb(){
	var size = breadcrumb.length;
	if (size > 0){
		FrmCategories.lblBreadcrumb.text = "";
		for (var i = 0; i < size; i++){
			FrmCategories.lblBreadcrumb.text += breadcrumb[i].catName + " > ";
		}
	}
}

function categoriesGoBack(){
	if (breadcrumb.length > 0){
		var category = breadcrumb.pop();
		if (breadcrumb.length > 0){
			category = breadcrumb.pop();
		}
		loadCategories ( category );
		updateBreadcrumb();
	}else{
		
	}
}

function disableBackButton(){
	hbxHdrBBHeader.btnBack.setVisibility( false );
}