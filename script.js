let data = [];
let great = [];
let bad = [];
let good = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function btnEnter() {
  let obj = new Object({
    'Surname': document.form.surname.value, 
    'Итех': +document.form.one.value,
    'МОДС': +document.form.two.value,
    'АК': +document.form.three.value,
    'СКБД': +document.form.four.value,
    'КСх': +document.form.five.value,
  });
  data.push(obj);
}

function btnRandom(a=2, b=6) {
  document.form.one.value = getRandomInt(a, b);
  document.form.two.value = getRandomInt(a, b);
  document.form.three.value = getRandomInt(a, b);
  document.form.four.value = getRandomInt(a, b);
  document.form.five.value = getRandomInt(a, b);
}

function getBestStudents() {
  for (let obj of data) {
    let sum = 0;

    if (obj['level'] === undefined) {
      for (let key in obj) {
        if (Number.isInteger(obj[key])) sum += obj[key];
      }
  
      if (sum == 25) {
        obj['level'] = 'great';
        great.push(obj['Surname']);
      }
    }
  }
}

function getWorstStudents() {
  outer: for (let obj of data) {
    if (obj['level'] === undefined) {
      for (let key in obj) {
        if (obj[key] === 1 || obj[key] == 2) {
          obj['level'] = 'bad';
          bad.push(obj['Surname']);
          continue outer;
        }
      }
    }
  }
}

function getOtherStudents() {
  outer: for (let obj of data) {
    if (obj['level'] === undefined) {
      for (let key in obj) {
        if (obj[key] == 3) {
          obj['level'] = 'with 3';
          continue outer;
        }
      }
      obj['level'] = 'good';
      good.push(obj['Surname']);
    }
  }
}

function btngetResult() {
  document.getElementById('output-table' ).style.display = 'table';

  getBestStudents();
  getWorstStudents();
  getOtherStudents();

  $('#great').replaceWith(`<tr id="great" class="under input" ><td>Отличники</td><td class="input">${great.length}</td><td>${great.join(', ')}</td></tr>`);
  $('#good').replaceWith(`<tr id="good" class="input"><td>Хорошисты</td><td class="input">${good.length}</td><td>${good.join(', ')}</td></tr>`);
  $('#bad').replaceWith(`<tr id="bad" class="input"><td>Неуспевающие</td><td class="input">${bad.length}</td><td>${bad.join(', ')}</td></tr>`);
}
console.log(String(document.location.href))
let notificen = new Notification("HELLO");
let data2 = new Date().getMonth(); 
console.log(data2+1);
function Person(){
    this.name = "Oleg"
    this.lastName = "Drozd"
} 
function Student() {
    this.university = "NURE"
}
Student.prototype = new Person();
console.log(new Student());