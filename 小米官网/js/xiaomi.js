//鼠标经过购物车，购物车菜单
$(".topNavBox .con .rightBox .shopCar").mouseenter(function() {
	$(".topNavBox .con .rightBox .shopCar .carList").stop().slideDown(200);
	$(this).css("background", "#ffffff");
	$(".shopCar span").css("color", "#ff6700");
	$(".shopCar img").attr("src", "img/gouwu1.png");//修改属性值
}).mouseleave(function() {
	$(".topNavBox .con .rightBox .shopCar .carList").stop().slideUp(200);
	setTimeout(function() {
		$(".shopCar").css("background", "#424242");
		$(".shopCar span").css("color", "#B0B0B0");
		$(".shopCar img").attr("src", "img/gouwu.png");
	}, 300);
});

//鼠标经过logo
$(".logoBox").mouseenter(function() {
	//animate()修改某个属性值的动画
	$(".centerNavBox .logoBox .imgBox").stop().animate({"left": "0px"}, 150);
}).mouseleave(function() {
	$(".centerNavBox .logoBox .imgBox").stop().animate({"left": "-55px"}, 150);
});

//鼠标经过导航栏
$(".navBox ul li").mouseenter(function() {
	//获取下标
	var index = $(this).index();
	if (index < 7) {
		$(".navListBox").stop().slideDown(300);
	}
}).mouseleave(function() {
	$(".navListBox").stop().slideUp(300);
});

//鼠标经过下拉菜单，保持弹出的状态
$(".navListBox").mouseenter(function () {
	$(this).stop().slideDown(0);
}).mouseleave(function () {
	$(this).stop().slideUp(300);
});

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

// 图片叠化轮播
// 当前下标
var index = 0;
// 下一个下标
var nextIndex = 0;

var timer

autoPlay();

function animationPlay() {
	//淡出
	$(".imgRotation img").eq(index).stop().fadeOut(500);
	//淡入
	$(".imgRotation img").eq(nextIndex).stop().fadeIn(500);

	// 小圆点变色
	$(".imgRotation ul li").eq(nextIndex).addClass("first").siblings().removeClass("first");
}

// 轮播动画
function autoPlay() {
	timer = setInterval(function(argument) {
		if (nextIndex == 4) {
			nextIndex = 0;
		}else{
			nextIndex++;
		}
		animationPlay();
		index = nextIndex;
	}, 2000);
}

$(".imgRotation ul li").click(function () {
	clearInterval(timer);
	nextIndex = $(this).index();
	animationPlay();
	index = nextIndex;
	autoPlay();
});

$(".imgRotation .leftBtn").click(function () {
	clearInterval(timer);
	if (nextIndex == 0) {
		nextIndex = 4;
	}else{
		nextIndex--;
	}
	animationPlay();
	index = nextIndex;
	autoPlay();
});

$(".imgRotation .rightBtn").click(function () {
	clearInterval(timer);
	if (nextIndex == 4) {
		nextIndex = 0;
	}else{
		nextIndex++;
	}
	animationPlay();
	index = nextIndex;
	autoPlay();
});