function getDate(t){for(var e=t.endOf("month");1!==e.day();)e.subtract(1,"day");return e}function nextMeeting(){var t=getDate(moment()),e=t.diff(moment);e<0&&(t=getDate(moment().add(1,"month")));var n=t.subtract(5.5,"hours");n.add(1,"second"),$(".next").text(n.format("dddd, MMMM Do YYYY, h:mm:ss a")+" EST"),$(".countdown").downCount({date:n.add(4,"hours").format(),offset:0})}!function(t){t.fn.downCount=function(e,n){function o(){var t=new Date(a.date),e=f(),o=t-e;if(o<0)return clearInterval(d),void(n&&"function"==typeof n&&n());var i=1e3,s=60*i,u=60*s,l=24*u,c=Math.floor(o/l),h=Math.floor(o%l/u),m=Math.floor(o%u/s),v=Math.floor(o%s/i);c=String(c).length>=2?c:"0"+c,h=String(h).length>=2?h:"0"+h,m=String(m).length>=2?m:"0"+m,v=String(v).length>=2?v:"0"+v;var g=1===c?"day":"days",x=1===h?"hour":"hours",p=1===m?"minute":"minutes",y=1===v?"second":"seconds";r.find(".days").text(c),r.find(".hours").text(h),r.find(".minutes").text(m),r.find(".seconds").text(v),r.find(".days_ref").text(g),r.find(".hours_ref").text(x),r.find(".minutes_ref").text(p),r.find(".seconds_ref").text(y)}var a=t.extend({date:null,offset:null},e);a.date||t.error("Date is not defined."),Date.parse(a.date)||t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");var r=this,f=function(){var t=new Date,e=t.getTime()+6e4*t.getTimezoneOffset(),n=new Date(e+36e5*a.offset);return n},d=setInterval(o,1e3)}}(jQuery),function(t){"use strict";t("a.page-scroll").bind("click",function(e){var n=t(this);t("html, body").stop().animate({scrollTop:t(n.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),t("body").scrollspy({target:".navbar-fixed-top",offset:51}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:100}})}(jQuery),document.addEventListener("DOMContentLoaded",function(){nextMeeting()});