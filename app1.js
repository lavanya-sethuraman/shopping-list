var state = {
  items: []
};

function addItem(state, item) {
  state.items.push(item);
}

function renderList(state, element) {
  var itemsHTML = state.items.map(function(item) {
    var list='<li id="'+item+'">'+
    '<span class="shopping-item">'+ item +'</span>'+
    '<div class="shopping-item-controls">'+
    '<button class="shopping-item-toggle">' +
    '<span class="button-label">check </span>'+
    '</button>'+
    '<button id="'+item+'" class="shopping-item-delete">'+
    '<span class="button-label">delete</span>'+
    '</button>'+
    '</div>'+
    '</li>';

    return list;
  });
  element.html(itemsHTML);
}

function handleList(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var entry=$("#shopping-list-entry").val();
    addItem(state, entry);
    renderList(state, $('ul.shopping-list'));
    handleClicks();
    this.reset();
  });

}

function handleClicks()
{
  $(".shopping-item-toggle").on('click',function(event){
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });

  $(".shopping-item-delete").click(function(event){
    $(this).closest("li").remove();
    delItem(state,this.id);});


}
function delItem(state,itm){
 var del=state.items.findIndex(function(i){
   return i===itm;});
  state.items.splice(del,1);


}
$(function(){handleList();});
