let textWrapper = document.querySelector('.about-me__title');
let textWrapper1 = document.querySelector('.about-me__title-2');
let  textWrapper2 = document.querySelector('.about-me__text');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-animation'>$&</span>");
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter-animation'>$&</span>");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter-animation'>$&</span>");

anime.timeline({loop: false})
  .add({
    update: (anim) => {
        // Получаем все буквы с классом 'letter-animation'
        const letters = document.querySelectorAll('.about-me__title .letter-animation');
        
        // Проходимся по буквам с индексами с 10 по 18
        for (let i = 11; i <= 17; i++) {
          // Присваиваем класс 'purple' букве с соответствующим индексом
          letters[i].classList.add('purple');
        }
      },
      complete: (anim) => {
        // Создаем элемент <br>
        const lineBreak = document.createElement('br');
        
        // Получаем родительский элемент, к которому хотим добавить <br>
        const parentElement = document.querySelector('.about-me__title');
        
        // Добавляем <br> после последней буквы (18-ой)
        parentElement.insertBefore(lineBreak, parentElement.children[17].nextSibling);
      },
    targets: '.about-me__title  .letter-animation',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }),

  anime.timeline({loop: false})
  .add({
    targets: '.about-me__text  .letter-animation',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i, 
  }) 
  anime.timeline({loop: false})
  .add({
    targets: '.about-me__title-2  .letter-animation',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i, 
  }) 
  
  // Другая не доработанная 
  

  
  // let textWrapper = document.querySelector('.about-me__title');
  // let textWrapper2 = document.querySelector('.about-me__text');
  
  // // Функция для создания анимации печати текста с выделением символов с 10 по 16
  // function animateText(element) {
  //   const text = element.textContent;
  //   const letters = text.split('');
  
  //   // Заменяем текст элемента пустой строкой
  //   element.textContent = '';
  
  //   // Создаем спаны для каждой буквы и добавляем их обратно в элемент
  //   for (const [index, letter] of letters.entries()) {
  //     const span = document.createElement('span');
  //     span.textContent = letter;
      
  //     // Проверяем, находится ли индекс символа в диапазоне [10, 16]
  //     if (index >= 10 && index <= 16) {
  //       span.classList.add('highlight'); // Добавляем класс для покраски
  //     }
      
  //     element.appendChild(span);
  //   }
  
  //   // Создаем анимацию для появления букв
  //   anime.timeline({ loop: false })
  //     .add({
  //       targets: `${element.tagName} span`,
  //       opacity: [0, 1],
  //       easing: 'easeInOutQuad',
  //       duration: 150,
  //       delay: (el, i) => 50 * i // Задержка между буквами
  //     });
  // }
  
  // // Запускаем анимацию для заголовка и текста
  // animateText(textWrapper);
  // animateText(textWrapper2);