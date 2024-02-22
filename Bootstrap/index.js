var carouselWidth = $(".ritwik_carousel-inner")[0].scrollWidth;
var cardWidth = $(".ritwik_carousel-item").width();

var scrollPosition = 0;
$(".ritwik_carousel-control-next").on("click", function () {
  console.log("next");
  scrollPosition = scrollPosition + cardWidth;
  $(".ritwik_carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
});
