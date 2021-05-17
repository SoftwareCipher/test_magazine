function init() {
    $.post(
        "core.php",
        {
            "action" : "init"
        },
        showGoods
    );
}

function showGoods(data) {
    data = JSON.parse(data);
    var out='<select>';
    out +='<option data-id="0">Новый товар</option>';
    for (var id in data) {
        out +=`<option data-id="${id}">${data[id].name}</option>`;
    }
    out +='</select>';
    $('.goods-out').html(out);
    $('goods-out select').on('change', selectGoods);
}

function selectGoods(){
    var id = $('.goods-out select option:selected').attr('data-id');
   $.post(
       "core.php",
       {
            'action' : 'selectOneGoods',
            'gid' : id
       },
       function(data){
        data = JSON.parse(data);
        $('#gname').val(data.name);
        $('#gcost').val(data.cost);
        $('#gimg').val(data.img);
        $('#gid').val(data.id);
       }
   );
}

function saveToDB(){
    
}

$(document).ready(function () {
   init();
   $('.add-to-db').on('click', saveToDB);
});