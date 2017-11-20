var list = document.getElementById('list-in');
var containerList = document.getElementsByClassName('list')[0];
var display = document.getElementsByClassName('display')[0];
//Que se despligue el input de añadir lista
containerList.addEventListener('click', function(event) {
  containerList.classList.add('hide');
  display.classList.remove('hide');
  display.classList.add('show');
});
//Que retorne a la opcion original
var close = document.getElementById('close');
close.addEventListener('click', function(event) {
  containerList.classList.remove('hide');
  display.classList.add('hide');
  display.classList.remove('show');
  containerList.style.transform = 'translateY(-80%)';
});

var text = document.getElementById('text');
var btn = document.getElementById('btn');
btn.addEventListener('click', function(event) {
  var displayTwo = document.getElementsByClassName('display-two')[0];
  containerList.classList.add('hide');
  display.classList.add('hide');
  displayTwo.classList.add('show');
  displayTwo.classList.remove('hide');

  var brother = document.getElementsByClassName('display-two')[0].children[0];
  var content = document.createElement('p');
  content.textContent = text.value;
  content.classList.add('sister');
  displayTwo.insertBefore(content, brother);

  text.value = '';
});
