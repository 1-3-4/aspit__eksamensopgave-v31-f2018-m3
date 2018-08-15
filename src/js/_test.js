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
});
