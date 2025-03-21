gsap.registerPlugin(ScrollTrigger)

function gsapAnimation(){
    
var tl =gsap.timeline()



tl.from(".line h1",{
    y:100,
    stagger:0.3,
    duration:1,
    ease: "back2.out"
})

tl.from(".line1-part1",{
    opacity:0,
    onStart:function(){
var headingTimer = document.querySelector(".line1-part1 h5");
var grow = 0;


setInterval(function(){
    grow++

    if(grow<100){
         headingTimer.textContent=grow++
    }

    else{
        grow=100;
        headingTimer.textContent = grow
    }
   
},45)

    }
})

tl.from(".line h2",{
    opacity:0,
    delay:1,
    animationName:"textanimation"
})

tl.to(".loader",{
    height:0,
    opacity:0,
    duration:0.5,
    delay:1.5
})

tl.from(".page1",{
    y:100,opacity:0,height:0,scrollTrigger:".page1"
})

tl.to(".page1",{
    y:-50,
    opacity:1,
    height:"100%",scrollTrigger:".page1"
})

tl.from(".line-head h1",{
    y:100,
    duration:1,
    stagger:0.3,
    ease: "back2.out"
})

tl.fromTo("page2",{
    opacity:0
},{
    opacity:1,
    y:100,
    scrollTrigger:".page2"
})

tl.fromTo(".video-container",{
    opacity:0,
    
    y:100,
},{
    opacity:1,
    delay:2,
    duration:2,
    scrollTrigger:".page2"
})

tl.from(".video-cursor",{
    opacity:0
},{
    opacity:1,
    delay:2,
    duration:2,
    y:100,
    scrollTrigger:".page2"
})

tl.to(".page3",{
    y:80,
    duration:1,
    scrollTrigger: {
        trigger: ".page3", // Yeh element jab viewport mein aayega, tab animation start hoga
        start: "top 80%", // Jab .page3 ka top 80% screen pe aayega
        end: "bottom 20%", // Optional: animation kab khatam ho
        scrub: true // Scroll ke saath smooth animation
    }
})





}

gsapAnimation()

// document.addEventListener("mousemove",function(dets){
//     gsap.from("#cursor",{
//      x:dets.x,
//      y:dets.y
//     })
 
//     })




Shery.makeMagnet(".lists-icon h5" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });

const parent = document.getElementById("Flag");
const child = document.getElementById("FlagImg");

parent.addEventListener("mouseenter",function(dets){
    gsap.from(child,{
        top:dets.x,
        left:dets.y,
        opacity:1
    })
})


parent.addEventListener("mouseleave",function(dets){
        gsap.from(child,{
            opacity:0
        })

    })


function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// locomotiveScroll()




function cursorAnimation(){
    Shery.mouseFollower({
        skew:true,
        ease:"cubic-beizer(0.23,1,0.320,1)",
        duration:1,
    });

    var videoContainer = document.querySelector(".video-container");
    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(".mouseFollower",{
                opacity:0
            })
            gsap.to(".video-cursor",{
                left:dets.x - 570,
                top:dets.y - 300,
            })
        })
    })

}
cursorAnimation()

function imageAnimation(){
    Shery.imageEffect(".image-div", {
        style: 5, //Select Style
         // Debug Panel
        duration: 0.5, // Duration of animation
       gooey:true,   
      });
}

imageAnimation()