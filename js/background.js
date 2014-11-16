// function parse(url){
//     var IDvid;
//     var IDcheck = 0;
//     var newURL = "";
//     var request = new XMLHttpRequest(); 
//     request.open("GET", url, true);
//     request.send(null);
//     request.onreadystatechange = function(){

//         if(url.indexOf("youku.com") !== -1) {

//             if (request.readyState == 4) {
//                 var response = request.responseText
//             }
//             newURL = jQuery(response).find("#link2").attr("value");
//             IDcheck = 1
//         }

//         else if(url.indexOf("tudou.com") !== -1) {
//             var spliturl = url.split('/');
//             var type = spliturl[3].charAt(0);
//             if (request.readyState == 4) {
//                 var response = request.responseText
//             }
//             var lcode = "";
//             var iid = "";
//             var count = 2
//             var lines = response.split('\n');

//             for(var i=0;i < lines.length;i++){
//                 if(count == 0){
//                     break;
//                 }
//                 if(lines[i].indexOf('lcode:') !== -1){
//                     count -= 1;
//                     lcode = $.trim(lines[i].split(':')[1]);
//                     lcode = lcode.substring(1,lcode.length-1);
//                     // console.log(lcode);
//                 }
//                 if(lines[i].indexOf('iid: ') !== -1){
//                     count -= 1;
//                     iid = $.trim(lines[i].split(':')[1]);
//                     // iid = iid.substring(1,lcode.length-1);
//                     // console.log(iid);
//                 }
//             }
//             newURL = "http://www.tudou.com/" + type + "/" + lcode +"/&"+ "iid=" + iid + "/v.swf";
//             // console.log(newURL);
//             IDcheck = 1;

//         }

//         else if(url.indexOf("v.qq.com") !== -1) {
//             var spliturl = url.split('?');
//             IDvid = spliturl[1];
//             console.log(IDvid);
//             newURL = "http://static.video.qq.com/TPout.swf?" + IDvid + "&auto=0";
//             IDcheck = 1;
//         }

//         else if(url.indexOf("iqiyi.com") !== -1) {
//             var spliturl = url.split("?");
//             IDvid = spliturl[0].split('/')
//             IDvid = IDvid[IDvid.length-1];
//             IDvid = IDvid.substring(0,IDvid.length-5);
//             // console.log(IDvid);
//             if (request.readyState == 4) {
//                 var response = request.responseText
//             }
//             var target = jQuery(response).find('#flashbox');
//             var data_player_videoid = target.attr('data-player-videoid');
//             // console.log(data_player_videoid);

//             newURL = "http://player.video.qiyi.com/" + data_player_videoid + "/0/0/" + IDvid +".swf";
//             IDcheck = 1;
//         }

//         else if(url.indexOf("tv.sohu") !== -1){
//             if (request.readyState == 4) {
//                 var response = request.responseText
//             }

//             var count = 2;
//             var playlistId = "";
//             var video_id = "";

//             var lines = response.split('\n');
//             for(var i=0;i < lines.length;i++){
//                 if(count == 0){
//                     break;
//                 }
//                 if(lines[i].indexOf(" playlistId=") !== -1){
//                     count -= 1;
//                     playlistId = $.trim(lines[i].split('=')[1]);
//                     playlistId = playlistId.substring(1,playlistId.length-2);
//                     // console.log(playlistId);
//                 }

//                 if(lines[i].indexOf(" vid=") !== -1){
//                     count -= 1;
//                     video_id = $.trim(lines[i].split('=')[1]);
//                     video_id = video_id.substring(1,video_id.length-2);
//                     // console.log(video_id);
//                 }
//             }
//             newURL = "http://share.vrs.sohu.com/" + video_id +"/v.swf&topBar=1&autoplay=false&plid="+ playlistId + "&pub_catecode=0&from=page";
//             IDcheck = 1;
//         }

//         else if(url.indexOf("youtube.com") !== -1) {
//             var spliturl = url.split('v=');
//             IDvid = spliturl[1];
//             IDvid = IDvid.substring(0,11);
//             IDcheck = 1;
            
//             newURL = "http://www.youtube.com/embed/" + IDvid;  

//         }

//         else if(url.indexOf("bilibili.com") !== -1) {
//             var spliturl = url.split('/');
//             IDvid = spliturl[4];
//             IDvid = IDvid.substring(2,IDvid.length);
//             console.log(IDvid);
//             newURL = "http://static.hdslb.com/miniloader.swf?aid=" + IDvid + "&page=1";
//             IDcheck = 1;
//         }

//         if (IDcheck == 1) { 
//             return window.open (newURL, 'nom_interne_de_la_fenetre', config='height=480, width=600, toolbar=no, menubar=no, scrollbars=no, location=no, directories=no, status=no')
//         }
//     }

// }
function openvid(tab) {

	var url = tab.url;
	var newURL = '';
	if(url.indexOf('.sixxs.org') !== -1){
		newURL = url;
	}else{
		var spliturl = url.split('/');
    	spliturl = spliturl.slice(2);
    	spliturl[0] = "http://" + spliturl[0] + '.sixxs.org';
    	newURL = spliturl.join('/');
	}
    // console.log(spliturl.join('')) 
    chrome.tabs.update({url: newURL});
}


	
chrome.browserAction.onClicked.addListener(function(tab) {
	openvid(tab);
});
