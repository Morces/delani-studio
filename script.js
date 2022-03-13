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

  
  $('#img1').hover(()=>{
    $('#pb').css('display', 'block')
  }, function(){
    $('#pb').css('display', 'none')
  });
  $('#img2').hover(()=>{
    $('#po').css('display', 'block')
  }, function(){
    $('#po').css('display', 'none')
  });
  $('#img3').hover(()=>{
    $('#pg').css('display', 'block')
  }, function(){
    $('#pg').css('display', 'none')
  });
  $('#img4').hover(()=>{
    $('#pjc').css('display', 'block')
  }, function(){
    $('#pjc').css('display', 'none')
  });
  $('#img5').hover(()=>{
    $('#pgd').css('display', 'block')
  }, function(){
    $('#pgd').css('display', 'none')
  });
  $('#img6').hover(()=>{
    $('#pbtn').css('display', 'block')
  }, function(){
    $('#pbtn').css('display', 'none')
  });
  $('#img7').hover(()=>{
    $('#pbur').css('display', 'block')
  }, function(){
    $('#pbur').css('display', 'none')
  });
  $('#img8').hover(()=>{
    $('#pgir').css('display', 'block')
  }, function(){
    $('#pgir').css('display', 'none')
  });



  // submit button 

$("button:submit").click(function() {
  alert("YOUR MESSEGE HAS BEEN SUBMITTED!!")
});

});

