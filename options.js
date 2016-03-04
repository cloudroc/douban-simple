window.onload = function () {
	var b = chrome.extension.getBackgroundPage();

	var config = b.getConfig();
	if(config!=null) {
		
		if(!config.height){
			document.getElementById("height").value = "233" ;
		}else{
			document.getElementById("height").value = config.height ;
		}

		if(!config.width){
			document.getElementById("width").value = "525" ;
		}else{
			document.getElementById("width").value = config.width ;
		}

		if(!config.left){
			document.getElementById("left").value = "200" ;
		}else{
			document.getElementById("left").value = config.left ;
		}

		if(!config.top){
			document.getElementById("top").value = "220" ;
		}else{
			document.getElementById("top").value = config.top ;
		}
	}else{
		document.getElementById("height").value = "233" ;
		document.getElementById("width").value = "525" ;
		document.getElementById("left").value = "200" ;
		document.getElementById("top").value = "220" ;
	}

    document.getElementById("bSave").onclick=function(){
    	config.height =document.getElementById("height").value;
		config.width =document.getElementById("width").value;
		config.left =document.getElementById("left").value;
		config.top =document.getElementById("top").value;
		b.saveConfig(config);

		var status = document.getElementById("status");
		status.innerHTML = "<font color='red'>保存成功!</font>";
		setTimeout(function() {
			status.innerHTML = "";
		}, 1000);
    }
	
}
