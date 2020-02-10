var newTask = document.getElementById('newTask');
var i = -1;
var item = [];

function addTask() {
  if(newTask.value != '') {
    item.push(newTask.value);
    i++;
    document.getElementById('list').innerHTML += generate();
    newTask.value = '';
  }
}

function generate() {
  return `<div class="item" id = "${i}">
            <div class="left">
              <input id="item-box" class="item-box" type="checkbox" onclick='cross(${i})'>
              <p class="item-name" id="item_${i}">${item[i]}</p>
            </div>
            <img class="item-trash id = "trash_${i}" src="delete.svg" alt="trash" onclick="remove('${i}')">
          </div>`
}

function remove(index) {
  document.getElementById(index).style.display = 'none';
}

function cross(index) {
  let cur = document.getElementById('item_' + index);
  if(cur.classList.length === 1) cur.classList.add('cross');
  else cur.classList.remove('cross');
}
