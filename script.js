
$("#leftside-navigation .parent > a > i").click(function(e) {
  e.preventDefault();
  var toClose = $("#leftside-navigation ul").not($(this).parents("ul"));
  toClose.slideUp();
  toClose.parent().removeClass("open");
  if(!$(this).parent().next().is(":visible")) {
    var toOpen = $(this).parent().next()
    toOpen.slideDown();
    toOpen.parent().not(".open").addClass("open");
  }  
  e.stopPropagation();
});