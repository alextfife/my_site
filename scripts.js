
function myFunction()
{
alert("If you are using Internet Explorer, please switch to Google Chrome or Mozilla Firefox or Apple Safari.");
}


//start IE alert
var once_per_session=1
function get_cookie(Name) {
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { // if cookie exists
offset += search.length
// set index of beginning of value
end = document.cookie.indexOf(";", offset);
// set index of end of cookie value
if (end == -1)
end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function alertornot(){
if (get_cookie('alerted')==''){
loadalert(alert)
document.cookie="alerted=yes"
}
}

function loadalert(){
var browserName=navigator.appName; 
if (browserName=="Microsoft Internet Explorer")
{
alert("This website will not display correctly on Internt Explorer, please switch to Google chrome or Mozilla Firefox.");
}
}

if (once_per_session==0)
loadalert()
else
alertornot()

//end IE alertski

//start ios blur
var content = document.querySelector('.content');
var duplicate = content.cloneNode(true);
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var header = document.querySelector('header');
header.appendChild(contentBlurred);

var contentWrapper = document.querySelector('.content-wrapper'),
translation;

contentWrapper.addEventListener('scroll',function(){
  translation = 'translate3d(0,' + (-this.scrollTop + 'px') + ',0)';
  duplicate.style['-webkit-transform'] = translation;
  duplicate.style['-moz-transform'] = translation;
  duplicate.style['transform'] = translation;
});

// offset to demo blurring
contentWrapper.scrollTop = 140;
//end ios blur
