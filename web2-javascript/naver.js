
for (var i = 1; i <= 5; i++) {
  for(var j = 1; j <= i; j++) {
    document.write('<a href="https://www.naver.com/">NAVER</a>');
  }
  document.write('<br>');
}

for (var i = 4; i >=1; i--) {
  for(var j = 1; j <= i; j++) {
    document.write('<a href="https://www.naver.com/">NAVER</a>');
  }
  document.write('<br>');
}

var now = 0;
function HelloButton(){
  //jQuery
  alert('Hello World!');
  if(now == 0){
    $('h3').css('color', 'red');
    now = 1;
  } else {
    $('h3').css('color', 'black');
    now = 0;
  }

}
