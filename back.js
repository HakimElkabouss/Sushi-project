const sqlite3 =require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbFile = "blog.db";
const db = new sqlite3.Database(dbFile);

const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


db.serialize(() =>{
    db.run('CREATE TABLE IF NOT EXISTS products (product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, product_img TEXT, product_price INTEGER, product_description TEXT, category_id INTEGER, FOREIGN KEY(category_id) REFERENCES category(id) )');



    
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Poke Bowl Saumon", "./Images/poke-bowl-saumon-detox.png", 12, "Saumon, Haricot",5);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Poke Bowl Daurade", "./Images/poke-bowl-daurade.png", 18, "Daurade, Haricot, epinard",5);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Maki Yellow Ponzu", "./Images/maki-yellowtail-ponzu.png", 20, "Feuille seche, Ponzu",4);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Maki thon spicy", "./Images/maki-thon-spicy.png", 23, "Thon, Piment, Herbe douces",4);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Lunch Box 3", "./Images/lunch-box-3.png", 12, "Riz, poisson, viande",1);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Lunch Box 6", "./Images/lunch-box-6.png", 24, "Saumon, Haricot",1);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Gourmet Mix", "./Images/gourmet-mix.png", 20, "Pate, , riz, feuille",3);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "California saumon wasabi", "./Images/california-saumon-a-wasabi-de-.png", 10, "Saumon, Haricot",3);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "ceviche de Daurade", "./Images/ceviche-de-daurade-a-leche-de-.png", 13, "Poissons, Haricot",3);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Sashimi Yellow", "./Images/sashimi-yellowtail.png", 15, "Ecrevise, Haricot",2);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Sushi Yellow", "./Images/sushi-yellowtail.png", 26, "Canard, Haricot",2);
    db.run('INSERT INTO products (product_name, product_img, product_price, product_description, category_id) VALUES (?,?,?,?,?)', "Sushi Yellow tail Safran", "./Images/sushi-yellowtail-safran-a-fleu.png", 20, "Poisson clown, Haricot",2);

    
    
    
    
    db.run('CREATE TABLE IF NOT EXISTS category (category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name TEXT)')
    
    db.run('INSERT INTO category (category_name) VALUES (?)', "Lunch Boxes");
    db.run('INSERT INTO category (category_name) VALUES (?)', "YellowTail");
    db.run('INSERT INTO category (category_name) VALUES (?)', "Sushi");
    db.run('INSERT INTO category (category_name) VALUES (?)', "Maki");
    db.run('INSERT INTO category (category_name) VALUES (?)', "Bowl");
    db.run('INSERT INTO category (category_name) VALUES (?)', "Boissons");

    db.run('CREATE TABLE IF NOT EXISTS comments (comment_id INTEGER PRIMARY KEY AUTOINCREMENT, comment_name VARCHAR(200), comment_desc TEXT)');
    

    db.run('CREATE TABLE IF NOT EXISTS checkout (checkout_id INTEGER PRIMARY KEY AUTOINCREMENT, product_id INTEGER, FOREIGN KEY(product_id) REFERENCES products(id)  )');
    

})

app.get('/categoryAll', function(req, res){
    db.all('SELECT * FROM products',
    function (error, data){
        if (!error) res.send(data)
        else console.log(error);   
    })

});
app.get('/LunchBoxes', function (req, res){
    db.all('SELECT * FROM products WHERE category_id=1', function (error, data){
        if (!error) res.send(data)
        else console.log(error);  
    })
});

app.get('/YellowTail', function (req, res){
    db.all('SELECT * FROM products WHERE category_id=2', function (error, data){
        if (!error) res.send(data)
        else console.log(error);  
    })
});

app.get('/Maki', function (req, res){
    db.all('SELECT * FROM products WHERE category_id=4', function (error, data){
        if (!error) res.send(data)
        else console.log(error);  
    })
});

app.get('/Sushi', function (req, res){
    db.all('SELECT * FROM products WHERE category_id=3', function (error, data){
        if (!error) res.send(data)
        else console.log(error);  
    })
});

app.get('/Bowl', function (req, res){
    db.all('SELECT * FROM products WHERE category_id=5', function (error, data){
        if (!error) res.send(data)
        else console.log(error);  
    })
});

app.get('/checkout', function (req, res){
    db.all('SELECT * FROM checkout NATURAL JOIN products', function (error, data){
        if (!error) res.send(data)
        else console.log(error);  
    })
});

app.get('/contact',function (request, response){
    db.all('SELECT * FROM comments', function (error, data){
        response.send(data);
     });
});


app.post('/checkout', function (request, response){
    db.run('INSERT INTO checkout (product_id) VALUES (?)', request.body.product_id, function(error , data){
        console.log(request.body.product_id);
    })
})

 app.post('/contact', function(request, response) {
    db.run('INSERT INTO comments (comment_desc, comment_name) VALUES (?, ?)', request.body.comment_desc, request.body.comment_name, function(error, data){
       console.log(request.body.comment_desc);
       console.log(request.body.comment_name);
        });

});

app.post('/delete', function(request, response){
    db.run('DELETE INTO comments (comment_desc, comment_name) VALUES (?, ?)', request.body.comment_desc, request.body.comment_name, function (error, data){
        response.send(request.body.comment_desc, request.body.comment_name);
    })
});



// app.post('/checkout', function(request,response){
//    db.all('INSERT INTO products (product_name, product_img, product_price) VALUES (?,?,?)', request.body.product,
//    function (error, date){
//       response.send(request.body.product_name);
//    })
//  })



app.listen(8080, function(error){
    if(!error) console.log("everything works");
});