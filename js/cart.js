var cart = {};

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $('.cart-out').html('Корзина пуста!');
    }
}

function showCart() {
    if (!isEmpty(cart)) {
        $('.cart-out').html('Корзина пуста!');
    } else {
        $.getJSON('goods.json', function(data) {
            var goods = data;
            var out = '';
            for (var key in goods) {
                out += `<button data-id ="${key}" class="del-goods">Delete</button><br><br>`
                out += `<button data-id ="${key}" class="del-goods">Купить</button><br><br>`
                out += `<img src="img\\${goods[key].img}">`;
                out += `<p class="name">${goods[key].name}</p>`;
                out += `<div class="cost"><p class="cost_p">${goods[key].cost * cart[key]} грн</p></div>`;
                out += `<div class="col"><p class="p_col">${cart[key]}</p></div>`;
                if (cart[key] > 0) {
                    document.querySelector('.basket').innerHTML = '';
                    document.querySelector('.basket').innerHTML = '(' + cart[key] + ')';
                } else {
                    document.querySelector('.basket').innerHTML = '';
                    document.querySelector('.basket').innerHTML = '(0)';
                }

            }
            $('.cart-out').html(out);
            $('.del-goods').on('click', delGoods);
        })
    }
}

function delGoods() {
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function isEmpty(object) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) return true;
        return false;
    }
}

$(document).ready(function() {
    loadCart();
});