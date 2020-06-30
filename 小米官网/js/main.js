//单独设置一个元素
$(".box1").css("width", "200px");
$(".box1").css("height", "200px");
$(".box1").css("background", "red");

//同时设置多个元素
$(".box2").css({
	width: "200px",
	height: "200px",
	background: "yellow"
});

//筛选元素
$("p").first().css({//第一个
	color: "blue"
});

$("p").last().css({//最后一个
	color: "blue"
});

$("p").eq(2).css({//定位第三个p标签，要定位第几个就写第几个在数组中的位置
	color: "blue"
});

//从第三个开始一直到最后一个，不包括第三个
$("p").eq(2).nextAll().css("background", "green");

//从第三个开始一直到第一个，不包括第三个
$("p").eq(2).prevAll().css("background", "orange");