console.log('Моя отметка - 70 балла(ов) Отзыв по пунктам ТЗ: Все пункты выполнены полностью!');
console.log('\n\nДополнительный функционал - смена на темную и светлую темы; возможность видеть максимальное и текущее время видео; возможность развернуть видео на весь экран');

const slider = document.querySelector('.portfolio__slider');
const sliderItems = document.querySelector('.pf-container');
const slides = document.querySelectorAll('.portfolio__slide');
const controlSquares = document.querySelectorAll('.square');


const slidesLength = slides.length;
let activeSlideIndex = 0;

// Portfolio
function gallery() {

    // Заполнение галлереи
    // Winter
    // Находим блок с таким классом, в который мы бы руками положили картинки <img ... >
    const welcomeSlideWinter = document.querySelector('.slide-winter');

    // Создаем массив и заполняем его картинками
    const arrayW = [ `assets/img/winter/1.jpg`, `assets/img/winter/2.jpg`, 
                    `assets/img/winter/3.jpg`, `assets/img/winter/4.jpg`,
                    `assets/img/winter/5.jpg`, `assets/img/winter/6.jpg`]
    
    // пробегаем по нашим картинкам и каждую кладем в тег img               
    arrayW.forEach(function(src, i) {
        const img = document.createElement('img'); // создаем тег img
        img.src = src; // добавляем ему src
        img.alt = `gallery ${i + 1}`; // добавляем ему alt с индивидуальным номером
        img.classList.add('gallery-img'); // добавляем ему класс
        welcomeSlideWinter.append(img); // добавляем в нужный контейнер, созданный тег img
    });  


    const welcomeSlideSpring = document.querySelector('.slide-spring');
    const arraySp = [ `assets/img/spring/1.jpg`, `assets/img/spring/2.jpg`, 
                        `assets/img/spring/3.jpg`, `assets/img/spring/4.jpg`,
                        `assets/img/spring/5.jpg`, `assets/img/spring/6.jpg`]
    
    arraySp.forEach(function(src, i) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `galery ${i}`;
        img.classList.add('gallery-img');
        welcomeSlideSpring.append(img);
    });  



    const welcomeSlideSummer = document.querySelector('.slide-summer');
    const arraySum = [ `assets/img/summer/1.jpg`, `assets/img/summer/2.jpg`, 
                        `assets/img/summer/3.jpg`, `assets/img/summer/4.jpg`,
                        `assets/img/summer/5.jpg`, `assets/img/summer/6.jpg`]
    
    arraySum.forEach(function(src, i) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `galery ${i}`;
        img.classList.add('gallery-img');
        welcomeSlideSummer.append(img);
    });  



    const welcomeSlideAutumn = document.querySelector('.slide-autumn');
    const arrayAut = [ `assets/img/autumn/img-1.jpg`, `assets/img/autumn/img-2.jpg`, 
                    `assets/img/autumn/img-3.jpg`, `assets/img/autumn/img-4.jpg`,
                    `assets/img/autumn/img-5.jpg`, `assets/img/autumn/img-6.jpg`]
    
    arrayAut.forEach(function(src, i) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `galery ${i}`;
        img.classList.add('gallery-img');
        welcomeSlideAutumn.append(img);
    });  


    if(window.screen.width >= 768) {

        // Задаем начальное расположение галлереи - начало с Autumn
        sliderItems.style.left = '-4200px';

        // Двигаем наш контейнер, прибавляя к текущему состоянию 1400px - размер блока, где лежат фотки
        sliderItems.getElementsByClassName.left = `-${activeSlideIndex * 1400}px`;

        // функция зацикливания слайдера
        const slide = (dir) => {
            if (dir === 'left') {
                activeSlideIndex--;
                // если мы ушли в самое лево, то аквтивный теперь последний
                if (activeSlideIndex < 0) {
                    activeSlideIndex = slidesLength - 1;
                }
            }
            if (dir === 'right') {
                activeSlideIndex++;
                // если индекс больше массива, обнуляем его до первого
                if (activeSlideIndex > slidesLength - 1) {
                    activeSlideIndex = 0;
                }
            }
        
            sliderItems.style.left = `-${activeSlideIndex * 1400}px`;

            // перебираем кнопки, если у нее есть класс _active - удаляем его, 
            // если нет то, добовляем той, которая совпадает с индексом видимой части контейнера
            controlSquares.forEach(square => square.classList.remove('_active'));
            controlSquares[activeSlideIndex].classList.add('_active');
        }
        
        const slideBySquare = (ind) => {
            activeSlideIndex = ind;
        
            sliderItems.style.left = `-${activeSlideIndex * 1400}px`;
            controlSquares.forEach(square => square.classList.remove('_active'));
            controlSquares[activeSlideIndex].classList.add('_active');
        }
        
        for (let i = 0; i < controlSquares.length; i++) {
            controlSquares[i].addEventListener('click', () => slideBySquare(i));
        }
    } 

    if(window.screen.width <= 768) {
        sliderItems.getElementsByClassName.left = `-${activeSlideIndex * 450}px`;

        const slide = (dir) => {
            if (dir === 'left') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1;
            }
            }
            if (dir === 'right') {
            activeSlideIndex++;
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0;
            }
            }
        
            sliderItems.style.left = `-${activeSlideIndex * 450}px`;
            controlSquares.forEach(square => square.classList.remove('_active'));
            controlSquares[activeSlideIndex].classList.add('_active');
        }
        
        const slideBySquare = (ind) => {
            activeSlideIndex = ind;
        
            sliderItems.style.left = `-${activeSlideIndex * 450}px`;
            controlSquares.forEach(square => square.classList.remove('_active'));
            controlSquares[activeSlideIndex].classList.add('_active');
        }
        
        for (let i = 0; i < controlSquares.length; i++) {
            controlSquares[i].addEventListener('click', () => slideBySquare(i));
        }
    }
}
gallery();

// changing theme
function changeTheme() {

    window.addEventListener('DOMContentLoaded', () => {
        const btnChangeTheme = document.querySelector('.btn-theme-light'),

            // получаем все элементы с классом pushmenu
            headerH1 = document.querySelector('h1'),
            skillsCard = document.querySelectorAll('.skills-card'),
            skillsHr = document.querySelectorAll('.skills-hr'),
            h2 = document.querySelectorAll('.h2'),
            html = document.querySelector('.html'),

            light = document.querySelectorAll('.light'),

            inputLight = document.querySelectorAll('.input-light'),
            textareaLight = document.querySelector('.textarea-light'),

            btnGold = document.querySelectorAll('.btnGold'),
            btnGoldPrice = document.querySelectorAll('.btnGoldPrice'),
            btnBlack = document.querySelectorAll('.control-squares'),

            headerImg = document.querySelectorAll('.imgLight'),

            bgHero = document.querySelector('.hero'),

            contacts = document.querySelector('.contacts'),

            headWrapper = document.querySelector('.head-wrapper'),

            navIcon3 = document.querySelectorAll('#nav-icon3'),
            
            date = document.querySelectorAll('.date'),

            iLight = document.querySelectorAll('.i-Light');

            const player = document.querySelector('.player');
            const progressBar = document.querySelector('.progress');
            const onlyProgress = document.querySelector('.onlyProgress');
            const customVolume = document.querySelector('.progress_2');
            const time = document.querySelector('#time');

            function darkTheme() {

                    
                btnChangeTheme.classList.toggle('dark');

                html.classList.toggle('dark');
                headerH1.classList.toggle('dark');
                textareaLight.classList.toggle('dark');
                bgHero.classList.toggle('dark');
                contacts.classList.toggle('dark');
                headWrapper.classList.toggle('dark');
                player.classList.toggle('dark');
                progressBar.classList.toggle('dark');
                onlyProgress.classList.toggle('dark');
                customVolume.classList.toggle('dark');
                time.classList.toggle('dark');


                // text in Skills section
                for(let i=0; i < skillsCard.length; i++ ){
                    skillsCard[i].classList.toggle('dark');
                }
                
                for(let i=0; i < inputLight.length; i++ ){
                    inputLight[i].classList.toggle('dark');
                }

                // hr
                for(let i=0; i < skillsHr.length; i++ ){
                    skillsHr[i].classList.toggle('dark');
                }

                // hr
                for(let i=0; i < h2.length; i++ ){
                    h2[i].classList.toggle('dark');
                }

                // light text
                for(let i=0; i < light.length; i++ ){
                    light[i].classList.toggle('dark');
                }

                // light text
                for(let i=0; i < btnGold.length; i++ ){
                    btnGold[i].classList.toggle('dark');
                }

                // light text
                for(let i=0; i < btnGoldPrice.length; i++ ){
                    btnGoldPrice[i].classList.toggle('dark');
                }
                // light text
                for(let i=0; i < btnBlack.length; i++ ){
                    btnBlack[i].classList.toggle('dark');
                }

                // light text
                for(let i=0; i < headerImg.length; i++ ){
                    headerImg[i].classList.toggle('dark');
                }
                // light text
                for(let i=0; i < navIcon3.length; i++ ){
                    navIcon3[i].classList.toggle('dark');
                }
                // light text
                for(let i=0; i < iLight.length; i++ ){
                    iLight[i].classList.toggle('dark');
                }
                // light text
                for(let i=0; i < date.length; i++ ){
                    date[i].classList.toggle('dark');
                }
            }


            // function tsdfd() {
            //     const inputEmail = document.querySelector('.email');
            //     let x = inputEmail.value;
            //     return x;
            // }

            if (localStorage.getItem('theme') === 'light') {
                //console.log('Мы попали в первое условие светлой темы');
                darkTheme();

            }

            btnChangeTheme.addEventListener('click', function() {

                if (localStorage.getItem('theme') === 'light') {
                    localStorage.removeItem('theme');

                    darkTheme();
                }
                else {
                    localStorage.setItem('theme', 'light')
                        

                    darkTheme();

                }
            });

    });
}
changeTheme();

// changing languages
function languages() {
    window.addEventListener('DOMContentLoaded', () => {
        const i18Obj = {
        'en': {
            'skills': 'Skills',
            'portfolio': 'Portfolio',
            'video': 'Video',
            'price': 'Price',
            'contacts': 'Contacts',
            'en': 'en',
            'ru': 'ru',
            'hero-title': 'Alexa Rise',
            'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
            'hire': 'Hire me',
            'skill-title-1': 'Digital photography',
            'skill-text-1': 'High-quality photos in the studio and on the nature',
            'skill-title-2': 'Video shooting',
            'skill-text-2': 'Capture your moments so that they always stay with you',
            'skill-title-3': 'Retouch',
            'skill-text-3': 'I strive to make photography surpass reality',
            'skill-title-4': 'Audio',
            'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
            'winter': 'Winter',
            'spring': 'Spring',
            'summer': 'Summer',
            'autumn': 'Autumn',
            'standard': 'Standard',
            'premium': 'Premium',
            'gold': 'Gold',
            'price-description-1-span-1': 'One location',
            'price-description-1-span-2': '120 photos in color',
            'price-description-1-span-3': '12 photos in retouch',
            'price-description-1-span-4': 'Readiness 2-3 weeks',
            'price-description-1-span-5': 'Make up, visage',
            'price-description-2-span-1': 'One or two locations',
            'price-description-2-span-2': '200 photos in color',
            'price-description-2-span-3': '20 photos in retouch',
            'price-description-2-span-4': 'Readiness 1-2 weeks',
            'price-description-2-span-5': 'Make up, visage',
            'price-description-3-span-1': 'Three locations or more',
            'price-description-3-span-2': '300 photos in color',
            'price-description-3-span-3': '50 photos in retouch',
            'price-description-3-span-4': 'Readiness 1 week',
            'price-description-3-span-5': 'Make up, visage, hairstyle',
            'order': 'Order shooting',
            'contact-me': 'Contact me',
            'e-mail': 'E-mail',
            'phone': 'Phone',
            'message': 'Message',
            'send-message': 'Send message'
        },
        'ru': {
            'skills': 'Навыки',
            'portfolio': 'Портфолио',
            'video': 'Видео',
            'price': 'Цены',
            'contacts': 'Контакты',
            'en': 'анг',
            'ru': 'рус',
            'hero-title': 'Алекса Райс',
            'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
            'hire': 'Пригласить',
            'skill-title-1': 'Фотография',
            'skill-text-1': 'Высококачественные фото в студии и на природе',
            'skill-title-2': 'Видеосъемка',
            'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
            'skill-title-3': 'Ретушь',
            'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
            'skill-title-4': 'Звук',
            'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
            'winter': 'Зима',
            'spring': 'Весна',
            'summer': 'Лето',
            'autumn': 'Осень',
            'standard': 'Стандарт',
            'premium': 'Премиум',
            'gold': 'Золотой',
            'price-description-1-span-1': 'Одна локация',
            'price-description-1-span-2': '120 цветных фото',
            'price-description-1-span-3': '12 отретушированных фото',
            'price-description-1-span-4': 'Готовность через 2-3 недели',
            'price-description-1-span-5': 'Макияж, визаж',
            'price-description-2-span-1': 'Одна-две локации',
            'price-description-2-span-2': '200 цветных фото',
            'price-description-2-span-3': '20 отретушированных фото',
            'price-description-2-span-4': 'Готовность через 1-2 недели',
            'price-description-2-span-5': 'Макияж, визаж',
            'price-description-3-span-1': 'Три локации и больше',
            'price-description-3-span-2': '300 цветных фото',
            'price-description-3-span-3': '50 отретушированных фото',
            'price-description-3-span-4': 'Готовность через 1 неделю',
            'price-description-3-span-5': 'Макияж, визаж, прическа',
            'order': 'Заказать съемку',
            'contact-me': 'Свяжитесь со мной',
            'e-mail': 'Электронная почта',
            'phone': 'Телефон',
            'message': 'Сообщение',
            'send-message': 'Отправить'
        }
        }
        let lang = 'en';
        const btnLang = document.querySelectorAll('.btnLang');
        const transAtr = document.querySelectorAll('[data-i18]');
        const transInp = document.querySelectorAll('.contacts-input');
        //Translate page

        const getTranslate = (lang) => {
            transAtr.forEach(el => {
                let valueData = el.dataset.i18;
                el.textContent = `${lang[valueData]}`;
            });

            transInp.forEach(elem => {
                let valueData = elem.dataset.i18;
                elem.placeholder = `${lang[valueData]}`;
            })
        };

        const changeTranslate = (e) => {
            if (e.target.classList.contains('btnLang')) {
                btnLang.forEach(el => el.classList.remove('_active'));
                e.target.classList.add('_active');
                getTranslate(i18Obj[e.target.dataset.i18]);
            }
            lang = e.target.dataset.i18;
            setLocalStorage();
        };

        btnLang.forEach(el => el.addEventListener('click', changeTranslate));

        // Local storage for language
        function getLocalStorage() {
        if (localStorage.getItem('lang')) {
            const language = localStorage.getItem('lang');
            getTranslate(i18Obj[language]);
        }
        btnLang.forEach((el) => {
            if (el.dataset.i18 === localStorage.getItem('lang')) {
            el.classList.add('_active');
            }
            if (localStorage.getItem('lang') === null) {
            setLocalStorage();
            }
        });
        }
        window.addEventListener('load', getLocalStorage);

        function setLocalStorage() {
        localStorage.setItem('lang', lang);
        btnLang.forEach((el) => {
            if (el.dataset.i18 === localStorage.getItem('lang')) {
            el.classList.add('_active');
            }
        });
        }
    });
}
languages();

// Burger menu
function menuAppearance() {
	document.addEventListener('DOMContentLoaded', () => {

		// получаем все элементы с классом pushmenu
		const pushmenu = document.getElementsByClassName('pushmenu');
		
		// получаем все элементы с классом nav-link
		const navLink = document.getElementsByClassName('nav-link');

		// получаем элемент с классом hidden-overley
		const hiddenOverley = document.querySelector('.hidden-overley');

		// отслеживаем клик клика по оверлею
		hiddenOverley.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('show');
			document.querySelector('.head-wrapper').classList.toggle('show');
			document.querySelector('body').classList.toggle('sidebar-opened');
			for(let i=0; i < pushmenu.length; i++ ){
				pushmenu[i].classList.toggle('open');
			}
		});

		const pushmenuFunction = function() {
			document.querySelector('.pushmenu').classList.toggle('open');
			document.querySelector('.head-wrapper').classList.toggle('show');
			document.querySelector('.hidden-overley').classList.toggle('show');
			document.body.classList.toggle('sidebar-opened')
		};

		// Отслеживаем клики кнопок с классом pushmenu 
		for(let i=0; i < pushmenu.length; i++ ){
			pushmenu[i].addEventListener('click', pushmenuFunction, false);
		}
		
		// Отслеживаем клики кнопок с классом navLink 
		for(let i=0; i < navLink.length; i++ ){
			navLink[i].addEventListener('click', pushmenuFunction, false);
		}
	});
}
menuAppearance();

// videoPlayer

function videoPlayer() {

    const video = document.querySelector('.vidos');

    const progressBar = document.querySelector('.progress');
    const onlyProgress = document.querySelector('.onlyProgress');
    const customVolume = document.querySelector('.progress_2');

    const btn = document.getElementById('play-pause');
    const bigBtn = document.getElementById('bigPlay-pause');
    const bigBtnBackground = document.getElementById('btn-bigPlay');

    const player = document.querySelector('.player');
    const onlyProgressPlayer = document.querySelector('.onlyProgressPlayer');

    const currentTimeElement = document.getElementById('current');
    const durationTimeElement = document.getElementById('duration');

    const muteBtn = document.querySelector('.volume');
    const progressVolume = document.querySelector('.progressVolume');

    const fullscreenBtn = document.querySelector('.fullscreen');

    progressVolume.addEventListener('change', setVolume, false);
    fullscreenBtn.addEventListener('click', toggleFullscreen, false);
  
    // Button for play / pause video
    function togglePlayPause() {
    if (video.paused) {
      btn.className = 'pause';
      video.play();
      bigBtn.style.display = 'none';
    }
    else {
      btn.className = 'play';
      video.pause();
      bigBtn.style.display = 'block';
    }
    }
    btn.onclick = function() {
      togglePlayPause();
    };
  
    
if(window.screen.width >= 769) {


    function toggleBigPlayPause() {
    if (video.paused) {
      btn.className = 'pause';
      bigBtn.className = 'pause';
      video.play();
      bigBtn.style.display = 'none';
    }
    else {
      bigBtn.className = 'play';
      btn.className = 'play';
      video.pause();
      bigBtn.style.display = 'block';
    }
    }
    bigBtn.onclick = function() {
        toggleBigPlayPause();
        player.classList.add('_visible');
        onlyProgressPlayer.classList.add('_visible');
    };
}  
    function togglePlayPauseBackground() {
    if (video.paused) {
      bigBtnBackground.className = 'pause';
      btn.className = 'pause';
      video.play();
      bigBtn.style.display = 'none';
    }
    else {
      bigBtnBackground.className = 'play';
      btn.className = 'play';
      video.pause();
      bigBtn.style.display = 'block';
    }
    }
    bigBtnBackground.onclick = function() {
    togglePlayPauseBackground();
        player.classList.add('_visible');
        onlyProgressPlayer.classList.add('_visible');
    };


    //progress

    video.addEventListener('timeupdate', function() {
        let progressPosition = (video.currentTime / video.duration) * 100;
  
        progressBar.value = progressPosition;
        progressBar.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressPosition}%, rgb(200, 200, 200) ${progressPosition}%, rgb(200, 200, 200) 100%)`;
    });


    //rewind

    function scrollingVideo(){
        let progressTime = (video.duration / 100) * progressBar.value;
        video.currentTime = progressTime;
    }
    progressBar.addEventListener('input', scrollingVideo);


    // onlyProgressBar
    video.addEventListener('timeupdate', function() {
        let onlyProgressPosition = (video.currentTime / video.duration) * 100;
    
        onlyProgress.value = onlyProgressPosition;
        onlyProgress.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${onlyProgressPosition}%, rgb(200, 200, 200) ${onlyProgressPosition}%, rgb(200, 200, 200) 100%)`;
    });
  
    // change progress Bar on click
    function scrollingV() {
        let progressTime = (video.duration / 100) * onlyProgress.value;
        video.currentTime = progressTime;
    }
    onlyProgress.addEventListener('input', scrollingV);

  

  
    // volume button
    function toggleMuteBackground() {
  
        if (video.muted) {
        video.muted = false;
        muteBtn.classList = 'volume';
        progressVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressVolume.value}%, rgb(200, 200, 200) ${progressVolume.value}%, rgb(200, 200, 200) 100%)`;
        
        } else {
        video.muted = true;
        muteBtn.classList = 'mute';
        progressVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressVolume.value}%, rgb(200, 200, 200) ${progressVolume.value}%, rgb(200, 200, 200) 100%)`;
        }
  
    }
    muteBtn.onclick = function() {
        toggleMuteBackground();
    };
  
    function setVolume() {
        let progressPosition =  progressVolume.value / 100;
        video.volume = progressPosition;
        progressVolume.style.background = `linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ${progressVolume.value}%, rgb(200, 200, 200) ${progressVolume.value}%, rgb(200, 200, 200) 100%)`;
    
        if (video.volume == 0) {
            video.muted = true;
            muteBtn.classList = 'mute';
        } 
        else {
            video.muted = false;
            muteBtn.classList = 'volume';
        }
    }
  
    function toggleFullscreen() {
        muteBtn.onclick = function() {
        toggleMuteBackground();
        };
  
        if (video.requestFullscreen) {
            console.log('Full');
            video.requestFullscreen();
            bigBtn.onclick = function() {
            toggleBigPlayPause();
        };
        } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
        } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
        }
    }
  
    // Time
    const currentTime = () => {
        let currentMinutes = Math.floor(video.currentTime / 60);
        let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
        let durationMinutes= Math.floor(video.duration / 60);
        let durationSeconds = Math.floor(video.duration  - durationMinutes * 60);
    
        currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
        durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
    }
  
    video.addEventListener('timeupdate', currentTime);
}
videoPlayer();