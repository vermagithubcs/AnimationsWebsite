function animationPage(){
    var tl = gsap.timeline();
tl.from("nav h1, nav .nav2 button",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2,
})
tl.from(".main-center .center1 h1",{
    x:-500,
    opacity:0,
    duration:0.5
})
tl.from(".main-center .center1 p, .main-center .center1 button",{
    x:-100,
    opacity:0,
    duration:0.3,
    delay:0.2,
    stagger:0.3
})
tl.from(".main-center .center2 img",{
    opacity:0,
    duration:0.5,
},"-=0.5")
tl.from(".icon img",{
    opacity:0,
    y:30,
    stagger:0.2,
    duration:0.5
})
}
animationPage();

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section1",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
});
tl2.from(".services",{
    y:-30,
    opacity:0
})
tl2.from("#box-container #box1",{
    x:-300,
    opacity:0,
    stagger:0.3,
    delay:0.1,
    duration:0.1
})