var myImage = document.querySelector('img');
var images = ['img/form1.png', 'img/form2.png', 'img/form3.png'];
var currentIndex = 0;

myImage.onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  myImage.setAttribute('src', images[currentIndex]);
};

alert("Автор не несет ответсвенность за моральный/психологический ущерб нанесенный данным оформлением.");

