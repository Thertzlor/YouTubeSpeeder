// ==UserScript==
// @name     youtube speed
// @version  1
// @grant    none
// @include  https://www.youtube.com/*
// ==/UserScript==
var vids = document.getElementsByTagName("video")[0].playbackRate
var disp = document.createElement("div");
var curate;
var inta = 1;
var pomo;
var speeding=false;

var dura = document.getElementsByClassName("ytp-time-duration")[0]
console.log(dura.innerHTML)
var cura = document.getElementsByClassName("ytp-time-current")[0]

function fancyTimeFormat(time)
{time = Math.round(time)
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function mandura(){
  speeding = true;
if(curate == 1){dura.innerHTML=dura.innerHTML.split(" ")[0];return}
var dur = dura.innerHTML.split(" ")[0].split(":");
var oridur = (dur.length == 3)? ((parseInt(dur[0])*60*60) + (parseInt(dur[1])*60) + parseInt(dur[2])) : ((parseInt(dur[0])*60)+parseInt(dur[1])) ;
var cur = cura.innerHTML.split(":");
var oricur = (cur.length == 3)? ((parseInt(cur[0])*60*60) + (parseInt(cur[1])*60) + parseInt(cur[2])) : ((parseInt(cur[0])*60)+parseInt(cur[1])) ;

  var newdur = fancyTimeFormat(oridur/curate)
  var newcur = fancyTimeFormat(oricur/curate)
dura.innerHTML = dura.innerHTML.split(" ")[0]+" ("+newcur+" / "+newdur+")";
}

disp.style.opacity="0";
disp.style.background="black";
disp.style.position= "absolute";
disp.style.right="2%";
disp.style.bottom ="10%";
disp.style.zIndex ="2999999999"
disp.style.transition="all 0.3s ease-in"

document.getElementById("movie_player").appendChild(disp)

function speeder(n){

vids = vids + (n/10);
curate = Math.round(vids*1000)/1000;
disp.innerHTML = curate
disp.style.opacity="1";

document.getElementsByTagName("video")[0].playbackRate = curate
clearInterval(pomo);
pomo = window.setTimeout(function(){disp.style.opacity="0";},800)
if(speeding == false)setInterval(function(){mandura()},100)
}

document.body.addEventListener("keydown",function(e){
    if(!e.altKey) return
	var intu = inta/((e.shiftKey)?1:2);
	if(e.keyCode == 38)speeder(intu)
	else if(e.keyCode ==40)speeder(-intu)
})