//图片动态连续切换形成动画
//计时器
var timer;

var cat = document.getElementById("cat");
var cymbal = document.getElementById("cymbal");
var drink = document.getElementById("drink");
var eat = document.getElementById("eat");
var fart = document.getElementById("fart");
var pie = document.getElementById("pie");
var scratch = document.getElementById("scratch");
var knockOut = document.getElementById("knockOut");
var angry = document.getElementById("angry");
var footLeft = document.getElementById("footLeft");
var footRight = document.getElementById("footRight");
var stomach = document.getElementById("stomach");

//获取音频
var music = document.getElementById("music");

//封装函数，开始动画
function start(name, count) {
	clearInterval(timer);
	var index = 0;
	timer = setInterval(function () {
		//判断当前显示的图片是否为最后一张图片
		if (++index < count) {
			cat.src = getImgSrc(name, index);
		}else{
			clearInterval(timer);
		}
	},80);
}

//封装函数，拼接图片路径
function getImgSrc(name, index) {
	return "img/Animations/" + name + "/" + name + "_" + getIndex(index) + ".jpg";
}

//封装处理图片名字是否带零的函数
function getIndex(index) {
	if(index < 10){
		return "0" + index;
	}else{
		return index;
	}
}

cymbal.onclick = function () {
	start("cymbal", 13);
	music.src = "mp3/cymbal.wav";
	music.play();
}
drink.onclick = function () {
	start("drink", 81);
	var tm1 = setInterval(function () {
		music.src = "mp3/pour_milk.wav";
		music.play();
		clearInterval(tm1);
	}, 1000)
	var tm2 = setInterval(function () {
		music.src = "mp3/drink.wav";
		music.play();
		clearInterval(tm2);
	}, 2000)
}
eat.onclick = function () {
	start("eat", 40);
	music.src = "mp3/p_eat.wav";
	music.play();
}
fart.onclick = function () {
	start("fart", 28);
	music.src = "mp3/fart002.wav";
	music.play();
}
//需要重新调音频
pie.onclick = function () {
	start("pie", 24);
	setTimeout(function () {
		music.src = "mp3/slap4.wav";
		music.play();
	}, 1100);
	setTimeout(function () {
		music.src = "mp3/splat_01.wav";
		music.play();
	}, 1150);
}
scratch.onclick = function () {
	start("scratch", 56);
	var tm = setInterval(function () {
		music.src = "mp3/scratch_kratzen.wav";
		music.play();
		clearInterval(tm);
	}, 1300)
}

knockOut.onclick = function () {
	start("knockout", 81);
	music.src = "mp3/p_belly1.wav";
	music.play();
	setTimeout(function () {
		music.src = "mp3/fall.wav";
		music.play();
	}, 1200);
	setTimeout(function () {
		music.src = "mp3/p_stars2s.wav";
		music.play();
	}, 1500);
}

angry.onclick = function () {
	start("angry", 26);
	setTimeout(function () {
		music.src = "mp3/angry.wav";
		music.play();
	}, 450);
}

footLeft.onclick = function () {
	start("footRight", 30);
	music.src = "mp3/p_foot3.wav";
	music.play();
}

footRight.onclick = function () {
	start("footLeft", 30);
	music.src = "mp3/p_foot4.wav";
	music.play();
}

stomach.onclick = function () {
	start("stomach", 34);
	music.src = "mp3/p_noo.wav";
	music.play();
}