var container = document.getElementById('All');
var div = document.createElement('div');
var container2 = document.getElementById('Lunch');
var container3 = document.getElementById('Yellow');
var container4 = document.getElementById('Sushi');
var container5 = document.getElementById('Maki');
var container6 = document.getElementById('Bowl');
var container7 = document.getElementById('Comments');

$.get('http://localhost:8080/CategoryAll', function(response){
    response.forEach(function (prod) {
        
        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        div.setAttribute('id','product');
        container.appendChild(el);


        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        container.appendChild(img);

        const desc = document.createElement('h6');
        desc.innerHTML = '- '+prod.product_description;
        container.appendChild(desc);

        const prc = document.createElement('p');
        prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'send()');
        button.innerHTML = 'Buy';
        container.appendChild(button);

        const hr = document.createElement('hr');
        container.appendChild(hr);

    })

})

$.get('http://localhost:8080/LunchBoxes', function(response){
    response.forEach(function (prod) {
        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        container2.appendChild(el);

        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        container2.appendChild(img);

        const desc = document.createElement('h6');
        desc.innerHTML = prod.product_description;
        container2.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container2.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('onClick', 'send()');
        container2.appendChild(button);

        

    })

});

$.get('http://localhost:8080/YellowTail', function(response){
    response.forEach(function (prod) {
        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        container3.appendChild(el);

        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        container3.appendChild(img);
        
        const desc = document.createElement('h6');
        desc.innerHTML = prod.product_description;
        container3.appendChild(desc);


        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container3.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('onClick', 'send()');
        container3.appendChild(button);

       
    })

});

$.get('http://localhost:8080/Sushi', function(response){
    response.forEach(function (prod) {
        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        container4.appendChild(el);

        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        container4.appendChild(img);

        const desc = document.createElement('h6');
        desc.innerHTML = prod.product_description;
        container4.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container4.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('onClick', 'send()');
        container4.appendChild(button);

        

    })

});

$.get('http://localhost:8080/Maki', function(response){
    response.forEach(function (prod) {
        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        container5.appendChild(el);

        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        container5.appendChild(img);

        const desc = document.createElement('h6');
        desc.innerHTML = prod.product_description;
        container5.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container5.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('onClick', 'send()');
        container5.appendChild(button);

        

    })

});

$.get('http://localhost:8080/Bowl', function(response){
    response.forEach(function (prod) {
        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        container6.appendChild(el);

        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        container6.appendChild(img);

        const desc = document.createElement('h6');
        desc.innerHTML = prod.product_description;
        container6.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container6.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('onClick', 'send()');
        container6.appendChild(button);

       

    })

});

$.get('http://localhost:8080/contact', function (response){
    response.forEach(function (com){
        const p = document.createElement('p');
        p.innerHTML = com.comment_name;
        container7.appendChild(p);
    })
});

function send(){
    var comment_name = document.querySelector('#comment').value;
    console.log(comment_name);
    $.post('http://localhost:8080/contact', {comment_name : comment_name}, function(response){
        console.log(response);
    })
}



// var checkName = [];
// var checkImg = [];
// var checkPrice = [];

// const cont =

// function send(){
//     checkName.document.getElementById('title').value;
//     checkImg.document.getElementById('imgprod').value;
//     checkPrice.document.getElementById('buttonprod').value;


//     $.post(
//         'http://localhost:8080/checkout', // defini l'URL d'envoie vers le serveur
//         function (response) { // defini la fonction execute quand le serveur repond
//           console.log(response);
//     });

//     displayCart();
// }



