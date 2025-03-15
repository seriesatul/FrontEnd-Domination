// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });



function formSubmit(){

  document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (name && email && address && paymentMethod) {
      document.getElementById('confirmation-message').innerText = `Thank you, ${name}! Your order has been placed successfully.`;
      document.getElementById('order-form').reset();
    }
  });
}

formSubmit()



function breakingText(){
    var footerHeading = document.querySelector("#footer-heading");
  var footerText = footerHeading.textContent
  var clutter = ""

 var text = footerText.split("");
  text.forEach(
    function(e){
      clutter+=`<span>${e}<span/>`;
      
    }
  )

  footerHeading.innerHTML = clutter;
  
   }

breakingText()

   
function gsapAnimation(){


   const main = document.querySelector(".main");
   const cursor = document.querySelector(".cursor")
   const topRated = document.querySelector(".top-rated-product");
   const serialImage = document.querySelector(".img-slab");
   const childContainer = document.querySelectorAll(".child-container");
   const footer = document.querySelector(".footer");
   const loader = document.querySelector(".loader");
   const loaderHeading = document.querySelector(".loader .content h1");



   main.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
      x:e.x,
      y:e.y,
      ease: "back.out"
    })
   })

   gsap.to(loader,{
    duration: 1.5,
    delay:2,
    opacity:0,
    height:0
   })

   gsap.to(loaderHeading,{
    duration: 1.5,
    opacity:0,
    height:0
   })
   
   topRated.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
      color:"white",
      scale:4
    })
   })

   topRated.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
      scale:1
    })
   })

   footer.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
      backgroundColor : "white"
    })
   })

   footer.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
      backgroundColor : "black"
    })
   })


   serialImage.addEventListener("mouseenter",function(){
    cursor.innerHTML = "SCROLL"
    gsap.to(cursor,{
      color:"white",
      scale:4
    })
   })

   serialImage.addEventListener("mouseenter",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
      scale:1
    })
   })


   gsap.from(".child-container",{
    opacity:0,
    stagger:0.5,
    scrollTrigger:".page5"
   })


  gsap.to()

   gsap.from( "#footer-heading span",{
    y:50,
    stagger:0.05,
    scrollTrigger: ".footer"
   })

   

   }

gsapAnimation()





var timerCounter = document.getElementById("timerCounter");

var grow = 0;

setInterval(function(){
  if(grow<100){
    grow++
    timerCounter.innerHTML = grow++
  }else{
    grow = 100
    timerCounter.innerHTML = grow
  }

},45)
