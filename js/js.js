$('.price_1').on('click', function() {
    $('.price_span').html(5748);
    $('.price_p').html('6574 грн.');
});
$('.price_2').on('click', function() {
    $('.price_span').html(5848);
    $('.price_p').html('6674 грн.');
});
$('.price_3').on('click', function() {
    $('.price_span').html(5934);
    $('.price_p').html('6974 грн.');
});
$('.price_4').on('click', function() {
    $('.price_span').html(6234);
    $('.price_p').html('6674 грн.');
});
$('.price_5').on('click', function() {
    $('.price_span').html(6534);
    $('.price_p').html('6874 грн.');
});


function show_hide_password(target) {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}


var cart = {};

function init() {
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    var out = '';
    for (var key in data) {
        out += '<div class="cart">';
        document.querySelector('.name').innerHTML = data[key].name;
        out += `<img src="img/${data[key].img}" alt="">`;
        document.querySelector('.price_span').innerHTML = data[key].cost;
        out += '</div>';
        document.querySelector('.div_button').innerHTML = '';
        document.querySelector('.div_button').innerHTML = '<button class="add-to-cart to_buy" data-id="' + key + '">Купить</button>';
    }

    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    var id = $(this).attr('data-id');
    if (cart[id] == undefined) {
        cart[id] = 1;
    } else {
        cart[id]++;
    }

    saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

$(document).ready(function() {
    init();

});