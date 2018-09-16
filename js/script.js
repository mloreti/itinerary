// Todays Date //
var t = new Date();
var yyyy = t.getFullYear().toString();
var mm = (t.getMonth()+1).toString(); // getMonth() is zero-based
if(mm<10){
  mm = 0 + mm;
};
var dd  = t.getDate().toString();
if(dd<10){
  dd = 0 + dd;
};
var minDate = yyyy+"-"+mm+"-"+dd;
$('input.date').attr({
    "min": minDate
 });

$('.add').on('click', function(e) {
  $('.form').toggleClass('hidden');
  $('.container').toggle();
  $(this).toggleClass('glyphicon-remove-circle', 'glyphicon-plus-sign');
});

// Header
$('.projectName').mouseenter(function(){
  $('.edit').toggleClass('hidden');
});
$('.projectName').mouseleave(function(){
  $('.edit').toggleClass('hidden');
});
$('.mapicon').on('click', function(){
  $('iframe').toggleClass('hidden');
});

$('.clear button').on('click', function(){
  setTimeout(function(){
    location.reload();
  }, 1000);
});
