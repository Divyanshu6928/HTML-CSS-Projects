var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 30+ "px" 
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px" 
    blur.style.top = dets.y - 150 + "px"
})

var spanall = document.querySelectorAll(".nav span");
spanall.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.style.color = "#000"
        crsr.style.scale = 3,
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

spanall.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        elem.style.color = "#fff"
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to(".nav",{
    backgroundColor : "#000",
    duration : 1,
    height:"100px",
    scrollTrigger:{
        trigger:".nav",
        scroller : "body",
        // markers:true,
        start : "top -8%",
        end : "top -11%",
        scrub : 2
    }
}) 

gsap.to(".main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger : ".main",
        scroller : "body",
        start : "top -30%",
        end : "top -60%",
        scrub : 2
    }
})

gsap.from(".about-us img,s.about-us about-us-in",{
    y:90,
    opacity :0,
    duration:1,
    scrollTrigger:{
        trigger : ".about-us",
        scroller : "body",
        start:"top 70%",
        end:"top 70%",
        scrub:1,
    },

})

gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: ".colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from(".colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: ".colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
});

gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: "body",
    //   markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
});