

// // task 1
// let btn = document.getElementById('button');
// btn.addEventListener('click', func);
// let time = setTimeout(func, 3000);

// // ожидание 3 секунд и перенос на 500px вниз

// function func(){
//     setTimeout(() => {
//         window.scrollTo({
//             top:500,
//             left:0,
//             behavior: "smooth"
//         });
//     }, 3000);
// }




// //task 2

// let btn = document.getElementById("button");

// // добавление события

// btn.addEventListener("click",func);

// function func() {

// //Проверка на наличие прокрутки

// if ((window.innerWidth - document.documentElement.clientWidth) > 0) {
// 			alert("Есть");
// 		}
//     else
//         alert('нет')
// }


// task 3

// let btn = document.getElementById("button")
// let form = document.getElementById("form")

// btn.addEventListener("click",func);

// //перебирание инпутов и добавление абзаца с числом
// function func(){
//     var sum = 0;
// 	for(var i=0; i<form.length; i++){
// 		sum = sum + Number(form[i].value)
//         }
//     console.log(sum)
//     let p = document.createElement("p")
//     form.appendChild(p)
//     p.innerHTML = sum
// }



//task 4

// function city(){
//     select = document.querySelector("#select");
//     elem = select[select.selectedIndex].innerHTML;
//     //создание массива с городами
//     arr = {
//         "Россия": ['Москва', 'Питер', 'Чебоксары'],
//         "Америка": ['Елабуга', 'Киев', 'Казань'],
//         "Афганистан": ['Тимур', 'Зекрин', 'Домой']
//     }
//     if (elem in arr){
//         //добавление селекта
//         createSelect = document.createElement("select");
//         document.body.appendChild(createSelect);
//         // добавление города 
//         for (let num = 0; num < arr [elem].length; num++){
//             createOption = document.createElement("option");
//             createOption.innerHTML = arr[elem][num];
//             createSelect.appendChild(createOption)
//         }
//     }
// }

//task 5
// let ol = document.getElementById("ol")
// let btn = document.getElementById("button")
// btn.addEventListener("click", func);

// function func(){
//     let li = document.createElement("li")
//     ol.appendChild(li)
//     li.innerHTML = 'пункт'
// }




//task 6

// let elem = document.getElementsByTagName('a');
// for (let i = 0; i < elem.length; i++) {
//     //добавление события при наведении
// 	elem[i].addEventListener('mouseover', func);
// }


// //добавление ссылки при наведении на текст

// function func() {
// 	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// }



//task 7


// let p = document.querySelectorAll("p")

// for (var i = 0; i < p.length; i++) {
//     //добавление события на клик
// 	p[i].addEventListener('click', func);
// }

// // возведение в квадрат нашего абзаца
// function func() {
// 	this.innerHTML = this.innerHTML * this.innerHTML;
// }






//task 8

// let click = document.getElementById("click")

// click.addEventListener("click", func);

// //считаем клик пользователя
// function func(){
//     click.value = parseInt(click.value) + 1;
// }



//task 9

// let ul = document.getElementById("ul");


// //добавление события и функции
// ul.addEventListener("click", function func(event) {
// 	let li = event.target.closest("li");
	
// //добавление "!" в конец li при нажатии на него
// 	if (li) {
// 		li.innerHTML +="!"; 
// 	}
// }); 


// let btn = document.getElementById("button");


// btn.addEventListener("click", function() {

// //добавление новых li с текстом "пункт"
//     let add = document.createElement("li");
//     add.innerHTML = "пункт";
//     ul.appendChild(add);
// });


//task 10



// const getForm = document.querySelector('.form');
// const getTable = document.querySelector('.task');
// getForm.submit.addEventListener('click', func);
// getTable.addEventListener('click', func2);
// function func2(event) {
//     //добавление исправления ячеек
//     const newValue = prompt("изменить " + event.target.innerHTML, '');
//     event.target.innerHTML = newValue;
// };
// function func(event) {
//     event.preventDefault();
//     const createTdFirst = document.createElement('td');
//     createTdFirst.innerHTML = getForm.firstname.value;
//     const createTdLast = document.createElement('td');
//     createTdLast.innerHTML = getForm.lastname.value;
//     const createTr = document.createElement('tr');
//     createTr.appendChild(createTdFirst);
//     createTr.appendChild(createTdLast);
//     getTable.appendChild(createTr);
// };