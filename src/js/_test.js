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
    const orderCatalog = document.getElementById('orders');
    // JavaScript object, not correct JSON ???
    const products = {
        "coffee1": {
            "navn" : "Americano",
            "beskrivelse" : "Stærk crema espresso med varmt vand.",
            "pris" : 60,
            "img" : "americano.jpg"
        },
        "coffee2": {
            "navn" : "Caffe látte",
            "beskrivelse" : "Espresso med skummet varm mælk.",
            "pris" : 65,
            "img" : "caffe-latte.jpg"
        },
        "coffee3": {
            "navn" : "Cappuccino",
            "beskrivelse" : "Espresso med dampet mælk og skum.",
            "pris" : 75,
            "img" : "cappuccino.jpg"
        },
        "coffee4": {
            "navn" : "Espresso",
            "beskrivelse" : "Espresso lavet af vores dygtigste baristaer.",
            "pris" : 50,
            "img" : "espresso.jpg"
        },
        "coffee5": {
            "navn" : "Macchiato",
            "beskrivelse" : "Lækker espressodrik med skummet mælk og chokolade.",
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
        // Function to render a card via html5 with the values from the object it is called on/from:
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

    // SETUP
    setupUserInterface(products);
    displayOrderCount();

    // FUNCTION(S)
    function setupUserInterface(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            // console.log(keys[i]);

            // Create var, set value to object key, data type string:
            const key = keys[i];
            // console.log(key);

            const coffee = new product(
                // Image
                obj[key].img,
                // Title
                obj[key].navn,
                // Description
                obj[key].beskrivelse,
                // Price
                obj[key].pris
            );
            cardCatalog.insertAdjacentHTML('beforeend', coffee.render());
        }
    }
    function countOrders(inElement) {
        const elem = inElement;
        return elem.getElementsByTagName('li').length - 1;
    }
    function displayOrderCount() {
        // Get pill to show number of orders
        const orderCountContainer = document.getElementById('orders__count');
        // Order count:
        const orderCount = countOrders(orderCatalog);
        // Display new order count in pill
        orderCountContainer.innerHTML = orderCount;
    }
});
