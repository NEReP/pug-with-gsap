document.addEventListener("DOMContentLoaded", () => {
   let burger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.nav')

   burger.addEventListener('click', () => {
      burgerMenu.classList.toggle('active')
      burger.classList.toggle('burger-active')
      document.body.classList.toggle('no-sroll');
   })
   let scrollBtn = document.querySelector('.scroll-btn')

   scrollBtn.addEventListener('click', scrollToElement);
   function scrollToElement(e) {
   let statSection = document.querySelector(".teachers")
   statSection.scrollIntoView({
      behavior:"smooth",
      // block: "start"
   });
   }
})
