$(document).ready(function() {
  $(".design").click(function() {
    $(".dicon").toggle();
    $(".description").toggle();
  });
  $(".dev").click(function() {
    $(".devcon").toggle();
    $(".dev-des").toggle();
  });
  $(".manage").click(function() {
    $(".pmg").toggle();
    $(".pro-des").toggle();
  });
});