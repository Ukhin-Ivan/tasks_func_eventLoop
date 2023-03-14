//Задача 1. 
/*Сделать функцию, которая будет позволять вызывать себя последовательно для
суммирования и/или при выводе и/или математической операции вернет конечный
результат fucn(2)(3)(5) = 10*/
{
	function func(a) {
		let currentValue = a;

		function f(b) {
			currentValue += b;
			return f;
		}
		
		f.toString = function() {
			return currentValue;
		}

		return f;
	}
}

//Задача 2. 
//*Написать функцию которая выполнит быструю сортировку массива чисел
{
	function qsort(arr) {
			if (arr.length <= 1) {
				return arr;
			}

			let pivot = arr[Math.floor(arr.length / 2)];
			let left = [];
			let right = [];

			for (let elem of arr) {
				if (elem < pivot) {
					left.push(elem);
				};
				if (elem > pivot) {
					right.push(elem);
				}
			}

			return [].concat(qsort(left), pivot, qsort(right));
	}

	alert(qsort([2, 27, 14, 52, 31, 96, 73, 47, 22, 6]))
}

//Задача 3.
/*Написать функцию которая создаст очереди в следующем порядке:
1. Задача
	1. микрозадача
	2. Рендер задача (например изменение стилей)
2. Задача
	1. микрозадача
	2. микрозадача
3. Задача
	1. микрозадача
	2. Рендер задача (например изменение содержание элемента)*/
{
	function tasksFunc() {

		let firstPromise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				let answer = confirm('Вы желаете изменить стиль страницы?')

				if (answer) {
					resolve();
				} else {
					reject();
				};

			}, 1000);

		});

		firstPromise
		.then(function() {document.body.style.backgroundColor = 'green'})
		.catch(() => alert('Ну как хотите...'));

		let userName;
		let secondPromise = new Promise(function(resolve, reject) {
			
			setTimeout(function() {
				userName = prompt('Как вас зовут?', '');
				if (userName) {
					resolve();
				} else {
					reject();
				}

			}, 3000);

		});

		secondPromise
		.then(() => alert(`Приятно познакомится ${userName}`))
		.catch(() => alert('Приветствую, незнакомец...'));

		secondPromise
		.then(() => alert(`Представляете, ${userName}, ёмкость мозга человека превышает 4 терабайта.`))
		.catch(() => alert('Удачи...'));

		let thirdPromise = new Promise(function(resolve, reject) {
				
			setTimeout(function() {
				let answer = prompt('Вы знаете в каком году родился Дима Билан?', '');
				if (answer === '1981') {
					resolve();
				} else {
					reject();
				}

			}, 7000);

		});

		thirdPromise
		.then(function() {document.body.textContent = 'В точку!'})
		.catch(function() {document.body.textContent = 'Вообще-то в 1981...'});
	}
}