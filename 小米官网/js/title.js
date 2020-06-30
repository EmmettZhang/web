//模拟后台数据
var xiaomiSrc = ["img/1e8be88112405471cee2c18ae0f1f62d.png",
 				"img/2b0d7d2c85734b80a1b8d1a4100c9c1f.png",
				"img/2c16238f786e4f93bdb175d7bf21aa47.jpg",
				"img/3d3ee15816d2ccbe922172033c3c3941.png", 
				"img/3ee5503ee5b2be373525e36309d922f8.png", 
				"img/4a7a4f24061860901f724b6ba6d75fd9.png"];
var xiaomiName = ["小米mix", "小米10", "小米10 Pro", "小米9", "小米CC9", "小米CC9e"];
var xiaomiPrice = ["13900元起", "4999元起", "3999元起", "1499元起", "1299元起", "1999元起"];

var hongmiSrc = ["img/1e8be88112405471cee2c18ae0f1f62d.png",
 				"img/2b0d7d2c85734b80a1b8d1a4100c9c1f.png",
				"img/2c16238f786e4f93bdb175d7bf21aa47.jpg",
				"img/3d3ee15816d2ccbe922172033c3c3941.png", 
				"img/3ee5503ee5b2be373525e36309d922f8.png", 
				"img/4a7a4f24061860901f724b6ba6d75fd9.png"];
var hongmiName = ["红米mix", "红米10", "红米10 Pro", "红米9", "红米CC9", "红米CC9e"];
var hongmiPrice = ["1900元起", "2999元起", "1999元起", "1699元起", "1329元起", "1899元起"];

getData();
//动态创建标签
function getData() {
	for (var i = 0; i < xiaomiSrc.length; i++) {
		//动态创建一个div
		var goodsDiv = $("<div class='goodsDiv'></div>");
		$(".navListBox .listBox").append(goodsDiv);
		//动态创建img标签
		var goodsImg = $("<img  />");
		goodsDiv.append(goodsImg);
		//动态创建p标签
		var goodsName = $("<p class='goodsName'></p>");
		goodsDiv.append(goodsName);
		//动态创建p标签
		var goodsPrice= $("<p class='goodsPrice'></p>");
		goodsDiv.append(goodsPrice);
	}
}

//鼠标穿过li
$(".navBox ul li").mouseenter(function(){
	var index = $(this).index();

	var list = [];
	var nameList = [];
	var priceList = [];

	if(index == 0){
		list = xiaomiSrc;
		nameList = xiaomiName;
		priceList = xiaomiPrice;
	}else if(index == 1){
		list = hongmiSrc;
		nameList = hongmiName;
		priceList = hongmiPrice;
	}

	//	次加载数据
	for(var i=0;i<6;i++){
		var box = $(".navListBox .listBox .goodsDiv").eq(i);
		box.children(1).attr("src",list[i]);
		box.children(".goodsName").text(nameList[i]);
		box.children(".goodsPrice").text(priceList[i]);
	}
});
