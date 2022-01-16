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




// function adicionarTarefa() {
//   const bloco = document.createElement('div');
//   const checkBox = document.createElement('input');
//   const etiqueta = document.createElement('label');
//   const tarefa = document.querySelector('#tarefa').valeu;
//   const tarefaNode = document.createTextNode(tarefa);

//   console.log(tarefa)

//   etiqueta.setAttribute('for', tarefa);
//   etiqueta.appendChild(tarefaNode);
 
//   checkBox.setAttribute('type', 'checkbox');
//   checkBox.setAttribute('id', tarefa);
//   checkBox.setAttribute('name', tarefa);

//   bloco.appendChild(checkBox);
//   bloco.appendChild(etiqueta);

//   elemento_pai.appendChild(bloco);

// }
