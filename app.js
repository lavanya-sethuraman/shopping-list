$(function(){

$(".shopping-item-toggle").on('click',function(event){
$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

$(".shopping-item-delete").click(function(event){
 $(this).closest("li").remove();
});

 $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
  var entry=$("#shopping-list-entry").val();
  var element=(
    '<li>'+
    '<span class="shopping-item">'+ entry +'</span>'+
    '<div class="shopping-item-controls">'+
'<button class="shopping-item-toggle">' +
'<span class="button-label">check </span></button>'+
 '<button class="shopping-item-delete">'+
  '<span class="button-label">delete</span>'+
          '</button>'+
    '</div>'+
    '</li>'
  );

  $("ul.shopping-list").append(element);
   this.reset();
});





});
