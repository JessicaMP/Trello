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
//Despliegue el area de añadir tarea y guarda el nombre de la tarea que se ingreso
var text = document.getElementById('text');
var button = document.getElementById('button');
var displayTwo = document.getElementsByClassName('display-two')[0];
button.addEventListener('click', function(event) {
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
//A hacer click en añadir tarea te despliega el textarea
var homework = document.getElementsByClassName('brother-two')[0];
var textArea = document.getElementsByClassName('display-two')[0].children[3].focus();
homework.addEventListener('click', function(event) {
  var textArea = document.getElementsByClassName('display-two')[0].children[3];
  var btn = document.getElementsByClassName('display-two')[0].children[4];
  var img = document.getElementsByClassName('display-two')[0].children[5];
  homework.classList.add('hide');
  //textArea.classList.remove('hide');
  textArea.classList.add('show');
  btn.classList.remove('hide');
  btn.classList.add('show');
  img.classList.remove('hide');
  img.classList.add('show');
  displayTwo.style.transform = 'translateY(5%)';
  display.style.transform = 'translateY(-80%)';
})
//Al darle clik en enviar tu nueva tarea se agrega despues del titulo de la lista
var save = document.getElementById('save');
var info = document.getElementById('info');
save.addEventListener('click', function(event) {
  var child = document.getElementsByClassName('display-two')[0].children[1];
  var miniCont = document.createElement('p');
  miniCont.textContent = info.value;
  miniCont.classList.add('sister');
  miniCont.classList.add('sister-two');
  var displayTwo = document.getElementsByClassName('display-two')[0];
  displayTwo.insertBefore(miniCont, info);

  info.value = '';
})
