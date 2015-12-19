function openUrl() {
  window.open ('http://douban.fm/radio','douban',
  	'height=276,width=521,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
}

chrome.browserAction.onClicked.addListener(openUrl);