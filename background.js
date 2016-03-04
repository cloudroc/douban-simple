function getConfig(cfgName) {
	var name = "douban-config";
	var config = null;
	if(cfgName) name = cfgName;
	var _config = localStorage[name];
	try{
		config = JSON.parse(_config);
	}catch(err){
		console.error(err);
	}
	if(!config || typeof config != "object") {
		config = {};
	}
	return config;
}

function saveConfig(config, cfgName) {
	var name = "douban-config";
	if(cfgName) name = cfgName;
	localStorage[name] = JSON.stringify(config);
}

function openUrl() {
	var b = chrome.extension.getBackgroundPage();
	var config = b.getConfig();

	var height = config.height;
	var width = config.width;
	var top = config.top;
	var left = config.left;

	if(!height) height = "233";
	if(!width) width = "525";
	if(!top) width = "200";
	if(!left) left = "220";

  	window.open ('http://douban.fm/radio','douban',
  		'height='+height+'px,width='+width+'px,top='+top+'px,left='+left+'px,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
}

chrome.browserAction.onClicked.addListener(openUrl);