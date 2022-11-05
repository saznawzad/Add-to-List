

  document.getElementById('btn').addEventListener('click', newTask);

function newTask(){
  const txt = document.getElementById('txt').value;

  var p = document.createElement('p');
  var t = document.createTextNode(txt); 
  p.appendChild(t);
  document.getElementById('task-table').appendChild(p);
}