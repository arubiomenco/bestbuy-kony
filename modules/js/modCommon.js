function goBack(){
	var form = kony.application.getCurrentForm();
	kony.print ("Current form: " + form.id );
	
	if (form.id == "FrmCategories"){
		categoriesGoBack ();
	}else if ( form.id == "FrmProductDetail"){
		FrmProducts.show();
	}else if ( form.id == "FrmProducts"){
		FrmCategories.show();
	}else if ( form.id == "FrmImages"){
		FrmProductDetail.show();
	}
}

function closeApplication(){
	var basicConf = {
		message: "Close Appplication?", alertType: constants.ALERT_TYPE_CONFIRMATION, alertTitle: "BestBuy Kony",
				yesLabel:"Yes", noLabel: "No", alertHandler: handleCloseApp};
	
	kony.ui.Alert(basicConf, {});
}

function handleCloseApp( response ){
	if (response){
		kony.store.clear();
		kony.application.exit();
	}
}

function showBackButton ( value ){
	hbxHdrBBHeader.btnBack.setEnabled( value );
	if (value){
		hbxHdrBBHeader.btnBack.skin = sknBtnBack;
	}else{
		hbxHdrBBHeader.btnBack.skin = sknBtnInvisible;
	}
}


function showLoadingScreen(){
	kony.application.showLoadingScreen("sknFrmLoading","Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);	
}

function dismissLoadingScreen(){
	kony.application.dismissLoadingScreen();
}