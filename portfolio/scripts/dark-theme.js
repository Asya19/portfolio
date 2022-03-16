// function changeTheme() {

//     window.addEventListener('DOMContentLoaded', () => {
//         const btnChangeTheme = document.querySelector('.btn-theme-light'),

//             // получаем все элементы с классом pushmenu
//             headerH1 = document.querySelector('h1'),
//             skillsCard = document.querySelectorAll('.skills-card'),
//             skillsHr = document.querySelectorAll('.skills-hr'),
//             h2 = document.querySelectorAll('.h2'),
//             html = document.querySelector('.html'),

//             light = document.querySelectorAll('.light'),

//             inputLight = document.querySelectorAll('.input-light'),
//             textareaLight = document.querySelector('.textarea-light'),

//             btnGold = document.querySelectorAll('.btnGold'),
//             btnGoldPrice = document.querySelectorAll('.btnGoldPrice'),
//             btnBlack = document.querySelectorAll('.control-squares'),

//             headerImg = document.querySelectorAll('.imgLight'),

//             bgHero = document.querySelector('.hero'),

//             contacts = document.querySelector('.contacts'),

//             headWrapper = document.querySelector('.head-wrapper'),

//             navIcon3 = document.querySelectorAll('#nav-icon3'),
            
//             date = document.querySelectorAll('.date'),

//             iLight = document.querySelectorAll('.i-Light');

//             function darkTheme() {

                    
//                 btnChangeTheme.classList.toggle('dark');

//                 html.classList.toggle('dark');
//                 headerH1.classList.toggle('dark');
//                 textareaLight.classList.toggle('dark');
//                 bgHero.classList.toggle('dark');
//                 contacts.classList.toggle('dark');
//                 headWrapper.classList.toggle('dark');


//                 // text in Skills section
//                 for(let i=0; i < skillsCard.length; i++ ){
//                     skillsCard[i].classList.toggle('dark');
//                 }
                
//                 for(let i=0; i < inputLight.length; i++ ){
//                     inputLight[i].classList.toggle('dark');
//                 }

//                 // hr
//                 for(let i=0; i < skillsHr.length; i++ ){
//                     skillsHr[i].classList.toggle('dark');
//                 }

//                 // hr
//                 for(let i=0; i < h2.length; i++ ){
//                     h2[i].classList.toggle('dark');
//                 }

//                 // light text
//                 for(let i=0; i < light.length; i++ ){
//                     light[i].classList.toggle('dark');
//                 }

//                 // light text
//                 for(let i=0; i < btnGold.length; i++ ){
//                     btnGold[i].classList.toggle('dark');
//                 }

//                 // light text
//                 for(let i=0; i < btnGoldPrice.length; i++ ){
//                     btnGoldPrice[i].classList.toggle('dark');
//                 }
//                 // light text
//                 for(let i=0; i < btnBlack.length; i++ ){
//                     btnBlack[i].classList.toggle('dark');
//                 }

//                 // light text
//                 for(let i=0; i < headerImg.length; i++ ){
//                     headerImg[i].classList.toggle('dark');
//                 }
//                 // light text
//                 for(let i=0; i < navIcon3.length; i++ ){
//                     navIcon3[i].classList.toggle('dark');
//                 }
//                 // light text
//                 for(let i=0; i < iLight.length; i++ ){
//                     iLight[i].classList.toggle('dark');
//                 }
//                 // light text
//                 for(let i=0; i < date.length; i++ ){
//                     date[i].classList.toggle('dark');
//                 }
//             }


//             // function tsdfd() {
//             //     const inputEmail = document.querySelector('.email');
//             //     let x = inputEmail.value;
//             //     return x;
//             // }

//             if (localStorage.getItem('theme') === 'light') {
//                 //console.log('Мы попали в первое условие светлой темы');
//                 darkTheme();

//             }

//             btnChangeTheme.addEventListener('click', function() {

//                 if (localStorage.getItem('theme') === 'light') {
//                     localStorage.removeItem('theme');

//                     darkTheme();
//                 }
//                 else {
//                     localStorage.setItem('theme', 'light')
                        

//                     darkTheme();

//                 }
//             });

//     });
// }
// changeTheme();