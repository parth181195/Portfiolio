$(".nav-toggle").click(function(event) {
    if ($("nav").hasClass('open')) {
        nav_close()
    } else {
        nav_open()
    }
    $("nav ul li").click(function(event){
      nav_close()
    });
});








function nav_open() {
    var tl = new TimelineMax
    tl.to("ul.links", 0.2, {
        right: 0
    });
    tl.to(".nav-toggle .bar.one", 0.2, {
        transform: "rotate(-45deg) translateY(8px)"
    }, "=-0.2");
    tl.to(".nav-toggle .bar.two", 0.2, {
        opacity: 0
    }, "=-0.2");
    tl.to(".nav-toggle .bar.three", 0.2, {
        transform: "rotate(45deg) translateY(-8px)"
    }, "=-0.2");
    $("nav").addClass('open')
}
function nav_close() {
    var tl = new TimelineMax
    tl.to("ul.links", 0.2, {
        right: "-300px"
    });
    tl.to(".nav-toggle .bar.one", 0.2, {
        transform: "rotate(0) translateY(0)"
    }, "=-0.2");
    tl.to(".nav-toggle .bar.two", 0.2, {
        opacity: 1
    }, "=-0.2");
    tl.to(".nav-toggle .bar.three", 0.2, {
        transform: "rotate(0) translateY(0)"
    }, "=-0.2");
    $("nav").removeClass('open')
}
