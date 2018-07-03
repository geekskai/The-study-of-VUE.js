// JavaScript Document
// zengqingfeng_20130618 create
function GetRequest() {
    var d = document.getElementById("ebsgovicon").src;
    var theRequest = /govicon.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)/.test(d) ? RegExp.$1 : "error";
    var iconwidth = /govicon.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)&type=([0-9]+)/.test(d) ? RegExp.$2 : "36"; //default height
    var iconheight = /govicon.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)&type=([0-9]+)/.test(d) ? RegExp.$3 : "50"; //default width
    var type = /govicon.js\?id=([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})&width=([0-9]+)&height=([0-9]+)&type=([0-9]+)/.test(d) ? RegExp.$4 : "1"; //default width
    var retstr = { "id": theRequest, "width": iconwidth, "height": iconheight, "type": type };
    return retstr;
}
var webprefix = "http://szcert.ebs.org.cn/"
var iconImageURL = "http://szcert.ebs.org.cn/Images/govIcon.gif";
var niconImageURL = "http://szcert.ebs.org.cn/Images/newGovIcon.gif";
var tempiconImageURL = "";

var params = GetRequest();
if (params.type == "1") {
    tempiconImageURL = iconImageURL;
}
if (params.type == "2") {
    tempiconImageURL = niconImageURL;
}
document.write('<a href="' + webprefix + params.id + '" target="_blank"><img src="' + tempiconImageURL + '" title="深圳市市场监督管理局企业主体身份公示" alt="深圳市市场监督管理局企业主体身份公示" width="' + params.width + '" height="' + params.height + '"border="0" style="border-width:0px;border:hidden; border:none;"></a>');

//在页面加载完成后，获取信息并且异步post到cert.gov.com
document.write('<script type="text/javascript" src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script>');

