counter = 0
$(".nav-toggle").click(function(event) {
    if ($("nav").hasClass('open')) {
        nav_close()
    } else {
        nav_open()
    }
    $("nav ul li").click(function(event){
      nav_close()
    });
    $(".overlay").click(function(event){
      nav_close()
    });
});
var gridWidth = 520;
// Draggable.create(".cards", {type:"x", edgeResistance:0.25, bounds:".container", throwProps:true});
Draggable.create(".cards", {
    type:"x",
    edgeResistance:0.8,
     bounds:{minX:0, maxX:-1880},
    throwProps:true,
    snap:function(endValue) {
      // console.log(endValue);
      var val = (Math.round(endValue / gridWidth) * gridWidth) - (Math.round(endValue / gridWidth) * 120)
console.log(val)
      if (val <=-1200) {
        return -1200;
      }
      else {
        return val;
      }
    }
});




















function nav_open() {
    var tl = new TimelineMax
    tl.set(".overlay", {display:"block"});
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
    tl.to(".cards", 0.2, {
        left: "500px"
    }, "=-0.2");
    tl.to(".overlay", 0.2, {
        opacity: 0.4
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
    tl.to(".cards", 0.2, {
        left: "0"
    }, "=-0.2");
    tl.to(".overlay", 0.4, {
      opacity: 0
    }, "=-0.2");
    tl.set(".overlay", {display:"none"});
    $("nav").removeClass('open')
}
