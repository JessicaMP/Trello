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
});
