// Slider portfolio

// const slider = document.querySelector('.portfolio__slider');
// const sliderItems = document.querySelector('.pf-container');
// const slides = document.querySelectorAll('.portfolio__slide');
// const controlSquares = document.querySelectorAll('.square');

// const slidesLength = slides.length;
// let activeSlideIndex = 0;

// // Заполнение галлереи
// function gallery() {

//     // Winter
//     // Находим блок с таким классом, в который мы бы руками положили картинки <img ... >
//     const welcomeSlideWinter = document.querySelector('.slide-winter');

//     // Создаем массив и заполняем его картинками
//     const arrayW = [ `assets/img/winter/1.jpg`, `assets/img/winter/2.jpg`, 
//                     `assets/img/winter/3.jpg`, `assets/img/winter/4.jpg`,
//                     `assets/img/winter/5.jpg`, `assets/img/winter/6.jpg`]
    
//     // пробегаем по нашим картинкам и каждую кладем в тег img               
//     arrayW.forEach(function(src, i) {
//         const img = document.createElement('img'); // создаем тег img
//         img.src = src; // добавляем ему src
//         img.alt = `gallery ${i + 1}`; // добавляем ему alt с индивидуальным номером
//         img.classList.add('gallery-img'); // добавляем ему класс
//         welcomeSlideWinter.append(img); // добавляем в нужный контейнер, созданный тег img
//     });  


//         const welcomeSlideSpring = document.querySelector('.slide-spring');
//         const arraySp = [ `assets/img/spring/1.jpg`, `assets/img/spring/2.jpg`, 
//                             `assets/img/spring/3.jpg`, `assets/img/spring/4.jpg`,
//                             `assets/img/spring/5.jpg`, `assets/img/spring/6.jpg`]
        
//         arraySp.forEach(function(src, i) {
//             const img = document.createElement('img');
//             img.src = src;
//             img.alt = `galery ${i}`;
//             img.classList.add('gallery-img');
//             welcomeSlideSpring.append(img);
//         });  



//         const welcomeSlideSummer = document.querySelector('.slide-summer');
//         const arraySum = [ `assets/img/summer/1.jpg`, `assets/img/summer/2.jpg`, 
//                             `assets/img/summer/3.jpg`, `assets/img/summer/4.jpg`,
//                             `assets/img/summer/5.jpg`, `assets/img/summer/6.jpg`]
        
//         arraySum.forEach(function(src, i) {
//             const img = document.createElement('img');
//             img.src = src;
//             img.alt = `galery ${i}`;
//             img.classList.add('gallery-img');
//             welcomeSlideSummer.append(img);
//         });  



//         const welcomeSlideAutumn = document.querySelector('.slide-autumn');
//         const arrayAut = [ `assets/img/autumn/img-1.jpg`, `assets/img/autumn/img-2.jpg`, 
//                         `assets/img/autumn/img-3.jpg`, `assets/img/autumn/img-4.jpg`,
//                         `assets/img/autumn/img-5.jpg`, `assets/img/autumn/img-6.jpg`]
        
//         arrayAut.forEach(function(src, i) {
//             const img = document.createElement('img');
//             img.src = src;
//             img.alt = `galery ${i}`;
//             img.classList.add('gallery-img');
//             welcomeSlideAutumn.append(img);
//         });  
// }
// gallery();

// if(window.screen.width >= 768) {

//     // Задаем начальное расположение галлереи - начало с Autumn
//     sliderItems.style.left = '-4200px';

//     // Двигаем наш контейнер, прибавляя к текущему состоянию 1400px - размер блока, где лежат фотки
//     sliderItems.getElementsByClassName.left = `-${activeSlideIndex * 1400}px`;

//     // функция зацикливания слайдера
//     const slide = (dir) => {
//         if (dir === 'left') {
//             activeSlideIndex--;
//             // если мы ушли в самое лево, то аквтивный теперь последний
//             if (activeSlideIndex < 0) {
//                 activeSlideIndex = slidesLength - 1;
//             }
//         }
//         if (dir === 'right') {
//             activeSlideIndex++;
//             // если индекс больше массива, обнуляем его до первого
//             if (activeSlideIndex > slidesLength - 1) {
//                 activeSlideIndex = 0;
//             }
//         }
    
//         sliderItems.style.left = `-${activeSlideIndex * 1400}px`;

//         // перебираем кнопки, если у нее есть класс _active - удаляем его, 
//         // если нет то, добовляем той, которая совпадает с индексом видимой части контейнера
//         controlSquares.forEach(square => square.classList.remove('_active'));
//         controlSquares[activeSlideIndex].classList.add('_active');
//     }
    
//     const slideBySquare = (ind) => {
//         activeSlideIndex = ind;
    
//         sliderItems.style.left = `-${activeSlideIndex * 1400}px`;
//         controlSquares.forEach(square => square.classList.remove('_active'));
//         controlSquares[activeSlideIndex].classList.add('_active');
//     }
    
//     for (let i = 0; i < controlSquares.length; i++) {
//         controlSquares[i].addEventListener('click', () => slideBySquare(i));
//     }
// } 

// if(window.screen.width <= 768) {
//     sliderItems.getElementsByClassName.left = `-${activeSlideIndex * 450}px`;

//     const slide = (dir) => {
//         if (dir === 'left') {
//         activeSlideIndex--;
//         if (activeSlideIndex < 0) {
//             activeSlideIndex = slidesLength - 1;
//         }
//         }
//         if (dir === 'right') {
//         activeSlideIndex++;
//         if (activeSlideIndex > slidesLength - 1) {
//             activeSlideIndex = 0;
//         }
//         }
    
//         sliderItems.style.left = `-${activeSlideIndex * 450}px`;
//         controlSquares.forEach(square => square.classList.remove('_active'));
//         controlSquares[activeSlideIndex].classList.add('_active');
//     }
    
//     const slideBySquare = (ind) => {
//         activeSlideIndex = ind;
    
//         sliderItems.style.left = `-${activeSlideIndex * 450}px`;
//         controlSquares.forEach(square => square.classList.remove('_active'));
//         controlSquares[activeSlideIndex].classList.add('_active');
//     }
    
//     for (let i = 0; i < controlSquares.length; i++) {
//         controlSquares[i].addEventListener('click', () => slideBySquare(i));
//     }
// }
// console.log('Если геллерея или что-то еще, после изменения размера экрана, не соответствуют макету - ОБНОВИТЕ, ПОЖАЛУЙСТВА, СТРАНИЦУ. Возможно скрпит не перестроился')