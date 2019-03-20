var container = document.getElementById('All');
var container2 = document.getElementById('Lunch');
var container3 = document.getElementById('Yellow');
var container4 = document.getElementById('Sushi');
var container5 = document.getElementById('Maki');
var container6 = document.getElementById('Bowl');
var container7 = document.getElementById('Comments');
var container8 = document.getElementById('Names');
var container9 = document.getElementById('list');

$.get('http://localhost:8080/CategoryAll', function(response){
    response.forEach(function (prod) {

        var div = document.createElement('div');
        document.body.appendChild(div);

        const el = document.createElement('h1');
        el.innerHTML = prod.product_name;
        el.setAttribute('id', 'title');
        div.setAttribute('id','product');
        div.appendChild(el);
        container.appendChild(div);
        

        const img = document.createElement('img');
        img.setAttribute('src', prod.product_img);
        img.setAttribute('id','imgprod');
        div.appendChild(img);
        container.appendChild(div);

        const desc = document.createElement('h6');
        desc.innerHTML = '- Recipe : '+prod.product_description;
        div.appendChild(desc);
        container.appendChild(div);

        const prc = document.createElement('p');
        prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        div.appendChild(prc);
        container.appendChild(div);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'buy()');
        button.innerHTML = 'Buy';
        div.appendChild(button);
        container.appendChild(div);
        
        

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
        desc.innerHTML = '- Recipe : '+prod.product_description;
        container2.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container2.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'buy()');
        button.innerHTML = 'Buy';
        container2.appendChild(button);

        const hr = document.createElement('hr');
        container.appendChild(hr);

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
        desc.innerHTML = '- Recipe : '+prod.product_description;
        container3.appendChild(desc);


        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container3.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'buy()');
        button.innerHTML = 'Buy';
        container3.appendChild(button);

        const hr = document.createElement('hr');
        container.appendChild(hr);
       
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
        desc.innerHTML = '- Recipe : '+prod.product_description;
        container4.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container4.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'buy()');
        button.innerHTML = 'Buy';
        container4.appendChild(button);

        const hr = document.createElement('hr');
        container.appendChild(hr);

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
        desc.innerHTML = '- Recipe : '+prod.product_description;
        container5.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container5.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'buy()');
        button.innerHTML = 'Buy';
        container5.appendChild(button);

        const hr = document.createElement('hr');
        container.appendChild(hr);

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
        desc.innerHTML = '- Recipe : '+prod.product_description;
        container6.appendChild(desc);

        const prc = document.createElement('p');
         prc.innerHTML = prod.product_price + ' €';
        prc.setAttribute('id', 'price');
        container6.appendChild(prc);

        const button = document.createElement('button');
        button.setAttribute('value', 'Buy');
        button.setAttribute('type', 'Submit');
        button.setAttribute('id', 'buttonprod');
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onClick', 'buy()');
        button.innerHTML = 'Buy';
        container6.appendChild(button);

        const hr = document.createElement('hr');
        container.appendChild(hr);

    })

});

$.get('http://localhost:8080/contact', function (response){
    response.forEach(function (com){
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        const btnDelete = document.createElement('button');
        // btnDelete.setAttribute('value','delete');
        // btnDelete.setAttribute('type','button');
        p.innerHTML = com.comment_desc;
        h3.innerHTML = com.comment_name;
        // p.appendChild(btnDelete);
        container7.appendChild(h3);
        container7.appendChild(p);
    })
});

// $.get('http://localhost:8080/checkout', function (response){
//     response.forEach(function (check){
//         const el = document.createElement('h1');
//         el.innerHTML = check.product_name;
//         el.setAttribute('id', 'title');
//         container9.appendChild(el);

//         const img = document.createElement('img');
//         img.setAttribute('src', check.product_img);
//         img.setAttribute('id','imgprod');
//         container9.appendChild(img);

//         const desc = document.createElement('h6');
//         desc.innerHTML = check.product_description;
//         container9.appendChild(desc);

//         const prc = document.createElement('p');
//          prc.innerHTML = check.product_price + ' €';
//         prc.setAttribute('id', 'price');
//         container9.appendChild(prc);

//         const button = document.createElement('button');
//         button.setAttribute('value', 'Buy');
//         button.setAttribute('type', 'Submit');
//         button.setAttribute('id', 'buttonprod');
//         button.setAttribute('class', 'btn btn-danger');
//         button.setAttribute('onClick', 'buy()');
//         container9.appendChild(button);
//     })
// })

function send(){
    var comment = document.querySelector('#comment').value;
    var name = document.querySelector('#name').value;

    console.log(comment);
    console.log(name);
    $.post('http://localhost:8080/contact', {comment_desc : comment, comment_name : name}, function(response){
        console.log(response);
    })
    
}

function supp(){
    var comment_desc = document.querySelector('#comment').value;
    var comment_name = document.querySelector('#name').value;

    $.post('http://localhost:8080/contact'), {comment_desc : comment_desc, comment_name : comment_name}, function(response){
        console.log(response);
    }
}



var ititle = [];
var iimgprod = [];
var iprice = [];
var quantity = [];
// const cont =

function buy(){
    ititle.push(document.querySelector('#title').value);
    iimgprod.push(document.querySelector('#imgprod').value);
    iprice.push(parseInt(document.querySelector('#price').value));
    console.log()

    $.post('http://localhost:8080/checkout', // defini l'URL d'envoie vers le serveur
        function (response) { // defini la fonction execute quand le serveur repond
          console.log(response);
    });

    displayCart();
}

function displayCart()
{
    cartdata = '<table><tr><th>Product Name</th><th>Price</th><th>Quantity</th><th>total</th></tr></table>';
    total = 0;
    for (i =0; i < ititle.length; i++){
        total += iprice[i];
        cartdata +=  "<tr><td>" + ititle[i] +"</td><td>"+ iimgprod[i] +"</td><td>"+ iprice[i] +"</td><button onclick='deletElement(" + i + ")>Delete</button></tr>"
        cartdata += '<tr><td></td><td></td><td></tr>' + total + '</td></tr></table>'

       
    }
     document.getElementById('list').innerHTML = cartdata;
}

function deletElement(x){
    ititle.splice(x, 1);
    iimgprod.splice(x, 1);
    iprice.splice(x, 1);

    displayCart()
}
