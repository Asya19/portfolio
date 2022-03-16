// function menuAppearance() {
// 	document.addEventListener('DOMContentLoaded', () => {

// 		// получаем все элементы с классом pushmenu
// 		const pushmenu = document.getElementsByClassName('pushmenu');
		
// 		// получаем все элементы с классом nav-link
// 		const navLink = document.getElementsByClassName('nav-link');

// 		// получаем элемент с классом hidden-overley
// 		const hiddenOverley = document.querySelector('.hidden-overley');

// 		// отслеживаем клик клика по оверлею
// 		hiddenOverley.addEventListener('click', (e) => {
// 			e.currentTarget.classList.toggle('show');
// 			document.querySelector('.head-wrapper').classList.toggle('show');
// 			document.querySelector('body').classList.toggle('sidebar-opened');
// 			for(let i=0; i < pushmenu.length; i++ ){
// 				pushmenu[i].classList.toggle('open');
// 			}
// 		});

// 		const pushmenuFunction = function() {
// 			document.querySelector('.pushmenu').classList.toggle('open');
// 			document.querySelector('.head-wrapper').classList.toggle('show');
// 			document.querySelector('.hidden-overley').classList.toggle('show');
// 			document.body.classList.toggle('sidebar-opened')
// 		};

// 		// Отслеживаем клики кнопок с классом pushmenu 
// 		for(let i=0; i < pushmenu.length; i++ ){
// 			pushmenu[i].addEventListener('click', pushmenuFunction, false);
// 		}
		
// 		// Отслеживаем клики кнопок с классом navLink 
// 		for(let i=0; i < navLink.length; i++ ){
// 			navLink[i].addEventListener('click', pushmenuFunction, false);
// 		}
// 	});
// }
// menuAppearance();