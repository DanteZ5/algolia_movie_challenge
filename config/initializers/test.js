var els = document.getElementsByClassName('imageWrapper');

Array.from(els).forEach((el) => {
  var img = el.getElementsByTagName('img')[0];
  img.style.top = "20%";
});
