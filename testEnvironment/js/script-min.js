$(document).ready(function(){$(".berichten-inner").delay(3e3).slick({slidesToShow:2,autoplay:!0,autoplaySpeed:0,variableWidth:!0,speed:4e3,cssEase:"linear",infinite:!0,arrows:!1,dots:!1})}),$.getJSON("antwoorden.json",function(e){for(var n=0;n<e.chat.length;n++){var t=e.chat[n];const a=document.createElement("div");a.className="slide",console.log(t.comment),a.innerHTML="<p>"+t.user+"</p>",document.getElementById("plaatsen").appendChild(a)}});var countDownDate=new Date("May 8, 2019 15:37:25").getTime(),x=setInterval(function(){var e=(new Date).getTime(),n=countDownDate-e,t=Math.floor(n/864e5),a=Math.floor(n%864e5/36e5),o=Math.floor(n%36e5/6e4);document.getElementById("dag").innerHTML=t,document.getElementById("uren").innerHTML=a,document.getElementById("minuten").innerHTML=o,n<0&&(clearInterval(x),document.getElementById("demo").innerHTML="EXPIRED")},1e3);