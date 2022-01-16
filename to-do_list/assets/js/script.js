// var q = 0

// function adicionarTarefa () {
//   var tarefa = document.querySelector("#tarefa").value;
//   var elemento_pai = document.querySelector("#elemento_pai");
//   var pNovo = document.createElement("p");
//   var checkBox = document.createElement("input");

//   pNovo.id = "p" + q;
//   checkBox.id = "c" + q;

//   checkBox.type = "checkbox";
//   pNovo.appendChild(checkBox);
//   pNovo.append(tarefa);
//   elemento_pai.appendChild(pNovo);
//   q++;
}
const elemento_pai = document.querySelector("#elemento_pai");

function adicionarTarefa() {
 var bloco = document.createElement('div');
 var checkBox = document.createElement('input');
 var etiqueta = document.createElement('label');
 var tarefa = document.getElementById('checkbox').value;
 var tarefaNode = document.createTextNode(tarefa);

 console.log(tarefa)

 etiqueta.setAttribute('for', tarefa);
 etiqueta.appendChild(tarefaNode);
 
 checkBox.setAttribute('type', 'checkbox');
 checkBox.setAttribute('id', tarefa);
 checkBox.setAttribute('name', tarefa);

 bloco.appendChild(checkBox);
 bloco.appendChild(etiqueta);

 elemento_pai.appendChild(bloco);

}
