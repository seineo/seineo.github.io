!function(t,e){var n=Array.prototype.slice.call(e.querySelectorAll("img[srcset]"));function o(){for(var o=0;o<n.length;o++)i=n[o],void 0,void 0,c=i.getBoundingClientRect(),l=t.innerHeight||e.documentElement.clientHeight,c.top>=0&&c.left>=0&&c.top<=3*l&&function(t){var e,r,i,c,l=n[o];e=l,r=function(){n=n.filter(function(t){return l!==t})},i=new Image,c=e.getAttribute("src"),i.onload=function(){e.srcset=c,r&&r()},i.srcset=c}();var i,c,l;0===n.length&&t.removeEventListener("scroll",r)}var r=function(){var e,n;e=o,n=t,clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(n)},100)};o(),t.addEventListener("scroll",r)}(window,document);