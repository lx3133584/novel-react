(function(window){var svgSprite='<svg><symbol id="icon-my" viewBox="0 0 1449 1024"><path d="M880.822685 465.284559c63.676603-42.038221 105.699341-114.222927 105.699341-196.231689 0-129.778686-105.207365-234.98433-234.98433-234.98433s-234.98261 105.207365-234.98261 234.98433c0 82.010482 42.021019 154.193469 105.697621 196.231689-160.214165 28.400484-319.318801 204.318344-319.318801 356.289316l0 17.392931c0 92.314474 149.426797 92.314474 320.43177 92.314474L879.709716 931.281279c171.030775 0 320.43177 0 320.43177-85.45088l0.00172-24.256525C1200.144927 669.602903 1041.012767 493.688483 880.822685 465.284559zM559.277947 269.052869c0-106.182717 86.077033-192.25975 192.25975-192.25975S943.797447 162.868432 943.797447 269.052869c0 106.180997-86.077033 192.25975-192.25975 192.25975S559.277947 375.233866 559.277947 269.052869zM1157.418627 845.830399c0 42.616207-209.334444 42.7263-277.70719 42.7263L623.363956 888.556699c-93.532375 0-277.71063-0.438651-277.71063-42.7263l0-21.35971c0-131.173767 182.588792-320.43005 320.43349-320.43005l170.90004 0c137.872221 0 320.43005 189.221879 320.43005 320.43005L1157.418627 845.830399 1157.418627 845.830399z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1116 1024"><path d="M810.22056 1024H306.580936c-89.899965 0-122.530881-73.273467-122.530881-122.530881V529.785829a28.276357 28.276357 0 1 1 56.552714 0v371.68329c0.150807 10.858121 4.052945 65.978167 65.978167 65.978167h503.639624c10.858121-0.150807 65.978167-4.052945 65.978167-65.978167V529.785829a28.276357 28.276357 0 1 1 56.552714 0v371.68329c0 89.881114-73.254616 122.530881-122.530881 122.530881z m-84.847923-223.55288a28.276357 28.276357 0 0 1-28.276357-28.276357V532.462657c-0.150807-10.858121-4.052945-65.978167-65.978167-65.978167h-145.472432c-10.858121 0.150807-65.978167 4.052945-65.978167 65.978167v239.726957a28.276357 28.276357 0 1 1-56.552714 0V532.462657c0-89.899965 73.273467-122.530881 122.530881-122.530881h145.472432c89.899965 0 122.530881 73.273467 122.530882 122.530881v239.726957a28.276357 28.276357 0 0 1-28.276358 28.257506zM1087.800133 548.938348c-7.238747 0-14.477495-2.752232-20.00081-8.275547L605.066163 77.891939c-7.823125-7.596915-49.559029-43.790652-93.311979 0L48.983322 540.64395A28.276357 28.276357 0 1 1 9.000553 500.661181L471.752564 37.90917C506.589036 3.072697 549.418292-8.256696 592.322951 6.088842a144.963458 144.963458 0 0 1 52.70713 31.820328l462.752011 462.752011a28.276357 28.276357 0 0 1-19.981959 48.277167z"  ></path></symbol><symbol id="icon-rank" viewBox="0 0 1024 1024"><path d="M277.333333 384H192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h85.333333a64 64 0 0 0 64-64V448a64 64 0 0 0-64-64z m21.333334 426.666667c0 35.349333-28.672 42.666667-64 42.666666-35.349333 0-64-7.317333-64-42.666666V469.333333c0-35.349333 28.650667-42.666667 64-42.666666 35.328 0 64 7.317333 64 42.666666v341.333334zM554.666667 128h-85.333334a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h85.333334a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64z m21.333333 682.666667c0 35.349333-28.672 42.666667-64 42.666666s-64-7.317333-64-42.666666V213.333333c0-35.349333 28.672-42.666667 64-42.666666s64 7.317333 64 42.666666v597.333334z m256-256h-85.333333a64 64 0 0 0-64 64v213.333333a64 64 0 0 0 64 64h85.333333a64 64 0 0 0 64-64V618.666667a64 64 0 0 0-64-64z m21.333333 256c0 35.349333-28.672 42.666667-64 42.666666s-64-7.317333-64-42.666666v-170.666667c0-35.349333 28.672-42.666667 64-42.666667s64 7.317333 64 42.666667v170.666667z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M429.056428 789.332353c-49.206702 0-96.955192-9.644661-141.918244-28.655644-43.415812-18.36323-82.397638-44.644803-115.867937-78.114078-33.470299-33.470299-59.750849-72.453149-78.113056-115.867938-19.022239-44.963051-28.656667-92.702332-28.656666-141.909034 0-49.213865 9.635451-96.963379 28.656666-141.92336 18.35709-43.414789 44.642756-82.397638 78.113056-115.864867 33.470299-33.468253 72.452125-59.746756 115.867937-78.103846 44.963051-19.012006 92.711542-28.652574 141.918244-28.652573s96.950076 9.640568 141.91415 28.652573c43.414789 18.35709 82.400708 44.635593 115.872031 78.103846 33.470299 33.467229 59.755965 72.452125 78.115102 115.867937 19.015076 44.959981 28.655643 92.709495 28.655643 141.92029 0 49.206702-9.640568 96.950076-28.662806 141.909034-18.358113 43.414789-44.63764 82.397638-78.107939 115.867938-33.471322 33.469276-72.458265 59.750849-115.872031 78.114078-44.964074 19.010983-92.707448 28.655643-141.91415 28.655644z m0-675.957189c-171.724083 0-311.425845 139.696646-311.425846 311.410495 0 171.714873 139.702786 311.405379 311.425846 311.405379 171.71999 0 311.420729-139.691529 311.420728-311.405379 0-171.71078-139.700739-311.410496-311.420728-311.410495zM879.73992 958.331371c-22.087041 0-42.841737-8.547677-58.45125-24.073278L664.051533 781.834588l36.985356-38.142715 157.656693 152.832827c5.599532 5.592368 13.068643 8.676613 21.046338 8.676614 7.968485 0 15.436574-3.085268 21.040199-8.676614 5.606695-5.611811 8.702196-13.110599 8.702196-21.087271 0-7.978718-3.092431-15.44783-8.691963-21.040198l-0.300852-0.310062L747.970828 696.762027l38.149878-36.986379 152.386666 157.195182c15.547091 15.617699 24.109094 36.366256 24.109094 58.464553 0 22.154579-8.616238 42.986023-24.25338 58.651818-15.646352 15.637142-36.45733 24.24417-58.623166 24.24417z"  ></path><path d="M270.982226 582.910003c-42.276872-42.256406-65.552995-98.432847-65.542762-158.183695 0.005117-59.728336 23.280216-115.89966 65.537646-158.171416l37.578873 37.563524c-66.51081 66.530252-66.51081 174.736697-0.010233 241.21783l-37.563524 37.573757z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)