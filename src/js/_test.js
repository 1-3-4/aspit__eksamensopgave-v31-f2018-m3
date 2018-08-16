// DATA
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
let orders;
// Check if there already exist a localStorage key 'dumbStarbucksCoffeeOrders'. The result will affect what value 'orders' gets:
if (localStorage.getItem('dumbStarbucksCoffeeOrders')) {
    orders = JSON.parse(localStorage.getItem('dumbStarbucksCoffeeOrders'));
}
else {
    orders = [];
}
// Create a localStorage item with the key of 'dumbStarbucksCoffeeOrders' and set its value to array of orders (which has been converted to a string):
localStorage.setItem('dumbStarbucksCoffeeOrders', JSON.stringify(orders));
// Convert the string stored in localStorage to an array of obj:
const savedOrders = JSON.parse(localStorage.getItem('dumbStarbucksCoffeeOrders'));

// CLASS(ES)
class product {
    constructor(id, image, title, description, price) {
        this.id = id;
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
                                        <button class="btn btn-outline-secondary my-3" onclick="orderProduct('${this.id}');" data-product-id="${this.id}">Bestil</button>
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
class order {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<li class="list-group-item d-flex flex-row flex-nowrap justify-content-between align-items-center">
                    <span class="font-weight-bold">${this.title}</span>
                    <span>${this.price}kr</span>
                </li>`;
    }
}

// FUNCTION(S)
function setupUserInterface(obj, location) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        // console.log(keys[i]);

        // Create var, set value to object key, data type string:
        const key = keys[i];

        const coffee = new product(
            //ID
            key,
            // Image
            obj[key].img,
            // Title
            obj[key].navn,
            // Description
            obj[key].beskrivelse,
            // Price
            obj[key].pris
        );
        location.insertAdjacentHTML('beforeend', coffee.render());
    }
}
function isProductExisting(source, searchFor, iterationCount) {
    const numberOfProducts = Object.keys(source).length;
    const productIDs = Object.keys(source);
    const productID = productIDs[iterationCount];
    if (searchFor == productID) {
        console.log(`Searchterm ${searchFor} was found in the product line! :)`);
        return true;
    }
    else if (iterationCount > numberOfProducts) {
        console.log(`iterationCount (${iterationCount}) is higher than the number of products in the product line (${numberOfProducts}).`);
        return false;
    }
    else if (searchFor != productID) {
        console.log(`Searchterm was not found in product line. :(`);
        iterationCount++;
        return isProductExisting(source, searchFor, iterationCount);
    }
}
function saveOrderToLocalStorage(order) {
    // Add order to array of orders:
    orders.push(order);
    // Convert the array of order obj into a string and save it in localStorage:
    localStorage.setItem('dumbStarbucksCoffeeOrders', JSON.stringify(orders));
}
function orderProduct(id) {
    const keys = Object.keys(products);
    // Check if ID exists in products:
    const productExists = isProductExisting(products, id, 0);
    if (productExists == true) {
        // Create an order obj:
        const title = products[id].navn;
        const price = products[id].pris;
        const orderedProduct = new order(title, price);

        saveOrderToLocalStorage(orderedProduct);
            console.log(orders);
        // Create the rendered order in the order catalog:
        const orderCatalog = document.getElementById('orders');
        orderCatalog.insertAdjacentHTML('afterbegin', orderedProduct.render());
        // Update the displayed count of orders:
        updateOrderCount(orderCatalog);
        // Update the displayed sum total:
    }
    else {
        alert('We could not find the product in our product catalog.')
    }
}
function updateOrderCount(fromThisElement) {
    // Get pill to show number of orders
    const orderCountDisplay = document.getElementById('orders__count');
    // Count orders in the order catalog:
    const orderCount = fromThisElement.getElementsByTagName('li').length - 1;
    // const orderCount = countOrders(fromThisElement);

    // Display new order count in pill
    orderCountDisplay.innerHTML = orderCount;
}

// SETUP
document.addEventListener("DOMContentLoaded", function () {
    // VARIABLES
    const cardCatalog = document.getElementById('card-catalog');
    const orderCatalog = document.getElementById('orders');

    setupUserInterface(products, cardCatalog);
    // updateOrderCount(orderCatalog);
    savedOrders.forEach(order => {
        // orderCatalog.insertAdjacentHTML('afterbegin', order.render());
        console.log(order);
    });
    updateOrderCount(orderCatalog);
});
