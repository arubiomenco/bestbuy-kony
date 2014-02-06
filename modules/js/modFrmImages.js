function FrmImages_preShow(){
	showBackButton( true );
}

function showImages( productDetail ){
	var data = new Array();

	if (productDetail != null){
		FrmImages.lblProductInfo.text = productDetail.name;
		var imagesInfo = [	
							"image", "angleImage", "backImage",
						 	"leftImage", "accessoriesImage", "remoteCImage",
						 	"rightImage", "topImage"
						 ];
		for (var i = 0; i < imagesInfo.length; i++){
			var info = imagesInfo[i];
			if (productDetail[info] != undefined && productDetail[info] != null){
				data.push( { url: productDetail[info] });
			}
		}
	}
	
	FrmImages.hzImages.setData(data, "url");
}