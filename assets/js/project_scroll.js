function onscroll(e){
  const page = document.querySelector('html');
  const scroll = page.scrollTop;
  var num = (scroll) / 250;
  if(num<1) num = 1;
  else num=Math.floor(num);
  document.getElementById("scroll-number").innerHTML = num;
}

window.addEventListener('scroll', onscroll);

