const tl = gsap.timeline()

tl.fromTo('.logo', 
   {
      y:-100,
      opacity:0
   },
   {
      y:0,
      opacity:1
   },
   2
).fromTo(
   '.header__descr',
   {
      x: -150,
      opacity:0,
   },
   {
      x: 0,
      opacity:1,
      duration:1
   },0.3
)
.fromTo(
   '.header__btn',
   {
      x: -150,
      opacity:0,
   },
   {
      x: 0,
      opacity:1,
      duration:0.5
   },0.6
)
.fromTo(
   '.social__item',
   {
      scale:0,
   },
   {
      scale:1,
      stagger:0.2,
   },1.3
)
.fromTo(
   '.nav__item',
   {  y:-50,
      opacity:0,
   },
   {  y:0,
      opacity:1,
      stagger:0.1,
   },1
)
.fromTo(
   '.header__img svg',
   {  y:-50,
      opacity:0,
   },
   {  y:0,
      opacity:1,
      duration:1,
      stagger:0.1,
   },0.8
)
.fromTo(
   '.header__img img',
   {  x:-50,
      opacity:0,
   },
   {  x:0,
      opacity:1,
      duration:1,
      stagger:0.1,
   },0.6
)
.fromTo(
   '.scroll-btn ',
   {  opacity:0,
   },
   {  opacity:1,
      duration:1,
      stagger:0.1,
   },1
   
)

gsap.from('.stat__quantity',{
      scrollTrigger:{
         trigger:'.stat',
         // markers:true,
         start:'-60% 80%',
         end:"+=70%",
         scrub:1
         
      },
      y:150,
      opacity: 0,
      stagger:0.5
   }
   
)
gsap.from('.teachers__card',
   {
      scrollTrigger:{
         trigger:'.teachers',
         markers:true,
         start:'start center',
         end:"80% center",
         scrub:1
         
      },
      opacity: 0,
      x:200,
      y:-100
      // stagger: 10
   }
)
gsap.from('.teachers__descr',
   {
      scrollTrigger:{
         trigger:'.teachers',
         start:'10% center',
         end:"+=30%",
         scrub:1
         
      },
      duration:1,
      x:-200,
      y:100,
      opacity: 0,
   }
)