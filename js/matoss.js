$(document).ready(function () {
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('data1.json', function(data) {
   $.each(data, function(key, value){
    if (value.name.search(expression) != -1 || value.url.search(expression) != -1)
    {
     $('#result').append('<a class="text-muted" href="'+value.url+'"><li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40"  /> '+value.name+' | '+value.brand +'</li></a>');
    }
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});