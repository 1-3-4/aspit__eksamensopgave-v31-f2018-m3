// const hello = (name) => {
//     return 'hello ' + name + '!';
//     // return 'hello ${name}'; // Why does this not work?
// }
// var nameBuilder = function (firstName="John", lastName="Doe") {
//     console.log(firstName + " " + lastName);
// }

document.addEventListener("DOMContentLoaded", function () {
    // VARIABLES
    const cardCatalog = document.getElementById('card-catalog');
    // JavaScript object, not correct JSON ???
    const products = {
        "coffee1": {
            "navn" : "Americano",
            "beskrivelse" : "Stærk crema espresso med varmt vand",
            "pris" : 60,
            "img" : "americano.jpg"
        },
        "coffee2": {
            "navn" : "Caffe latte",
            "beskrivelse" : "Espresso med skummet varm mælk",
            "pris" : 65,
            "img" : "caffe-latte.jpg"
        },
        "coffee3": {
            "navn" : "Cappuccino",
            "beskrivelse" : "Espresso med dampet mælk og skum",
            "pris" : 75,
            "img" : "cappuccino.jpg"
        },
        "coffee4": {
            "navn" : "Espresso",
            "beskrivelse" : "Espresso lavet af vores dygtigste baristaer",
            "pris" : 50,
            "img" : "espresso.jpg"
        },
        "coffee5": {
            "navn" : "Macchiato",
            "beskrivelse" : "Lækker espressodrik med skummet mælk og chokolade",
            "pris" : 100,
            "img" : "macchiato.jpg"
        }
    }

    // CLASS(ES)
    class product {
        constructor(image, title, description, price) {
            this.image = image;
            this.title = title;
            this.description = description;
            this.price = price;
        }
        render(){
            return `<div class="col-sm-6 py-3">
                        <article class="card h-100">
                            <img class="card-img-top" src="./img/product__${this.image}">
                            <div class="card-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="col px-0">
                                            <h3 class="card-title">${this.title}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col px-0">
                                            <p class="card-text">${this.description}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col px-0">
                                            <button class="btn btn-outline-secondary my-3">Bestil</button>
                                        </div>
                                        <div class="col px-0 d-inline-flex flex-row flex-nowrap justify-content-end align-items-center">
                                            <p class="card-text">${this.price}kr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>`;
        }
    }

    // const product1 = new product('americano', 'Americano', 'Stærk crema espresso med varmt vand.', 60);
    // console.log(product1);
    // const product1 = new product(products.coffee1.img, products.coffee1.navn, products.coffee1.beskrivelse, products.coffee1.pris);
    // console.log(product1);

    const keys = Object.keys(products);
    for (let i = 0; i < keys.length; i++) {
        // console.log(keys[i]);

        // Create var, set value to object key, data type string:
        const key = keys[i];
        // console.log(key);

        const coffee = new product(
            // Image
            products[key].img,
            // Title
            products[key].navn,
            // Description
            products[key].beskrivelse,
            // Price
            products[key].pris
        );
        console.log(coffee);
        cardCatalog.insertAdjacentHTML('beforeend', coffee.render());
    }


    addCard('americano','Americano', 'Stærk crema espresso med varmt vand.', 60);
    addCard('caffe-latte', 'Caffe Látte', 'Espresso med skummet varm mælk.', 65);
    addCard('cappuccino', 'Cappuccino', 'Espresso med dampet mælk og skum.', 75);

    // FUNCTIONS
    function addCard(image, title, description, price) {
        const con = document.createElement('div');
        con.classList.add('container');
        let row;
        let col;
        const card = document.createElement('article');
        card.classList.add('card');
        card.classList.add('h-100');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const cardTitle = document.createElement('h3');
        let cardText;
        const cardBtn = document.createElement('button');
        cardBtn.classList.add('btn');
        cardBtn.classList.add('btn-outline-secondary');
        cardBtn.classList.add('my-3');
        cardBtn.innerHTML = 'Bestil';

        // Create card image header:
        cardImg.classList.add('card-img-top');
        cardImg.src = `./img/product__${image}.jpg`;

        // Create card title:
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = `${title}`;

        col = document.createElement('div');
        col.classList.add('col');
        col.classList.add('px-0');
        col.appendChild(cardTitle);

        row = document.createElement('div');
        row.classList.add('row');
        row.appendChild(col);

        con.appendChild(row);

        // Create card description:
        cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerHTML = `${description}`;

        col = document.createElement('div');
        col.classList.add('col');
        col.classList.add('px-0');
        col.appendChild(cardText);

        row = document.createElement('div');
        row.classList.add('row');
        row.appendChild(col);

        con.appendChild(row);

        // Create card button and price:
        row = document.createElement('div');
        row.classList.add('row');
        // btn + col 1
        col = document.createElement('div');
        col.classList.add('col');
        col.classList.add('px-0');
        col.appendChild(cardBtn);

        row.appendChild(col);
        // price + col 2
        cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerHTML = `${price}kr`;

        col = document.createElement('div');
        col.classList.add('col');
        col.classList.add('px-0');
        col.classList.add('d-inline-flex');
        col.classList.add('flex-row');
        col.classList.add('flex-nowrap');
        col.classList.add('justify-content-end');
        col.classList.add('align-items-center');
        col.appendChild(cardText);

        row.appendChild(col);

        con.appendChild(row);

        // Populate card body with content:
        cardBody.appendChild(con);

        // Populate card with content:
        card.appendChild(cardImg);
        card.appendChild(cardBody);

        // Create column for card in card catalog:
        col = document.createElement('div');
        col.classList.add('col-sm-6');
        col.classList.add('py-3');
        col.appendChild(card);

        cardCatalog.appendChild(col);
    }
});
