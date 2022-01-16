const elemento_pai = document.querySelector("#elemento_pai");

function adicionarTarefa () {
  var tarefa = document.querySelector("#tarefa").value;
  var tarefaNode = document.createTextNode(tarefa);
  var elemento_pai = document.querySelector("#elemento_pai");

  var divNova = document.createElement("div");
  var checkBox = document.createElement("input");
  var etiqueta = document.createElement('label');
  
  etiqueta.setAttribute('for', tarefa);
  etiqueta.appendChild(tarefaNode);

  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', tarefa);
  
  divNova.appendChild(checkBox);
  divNova.append(etiqueta);

  elemento_pai.appendChild(divNova); 
}


