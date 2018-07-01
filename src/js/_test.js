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
    // const col = document.createElement('div');
    // const card = document.createElement('article');
    // const cardBody = document.createElement('div');
    // const container = document.createElement('div');
    // const row = document.createElement('div');
    // const cardTitle = document.createElement('h3');
    // const cardCol = document.createElement('div');

    addCard('americano','Americano', 'Stærk crema espresso med varmt vand.', 60);

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

        // Create card and its divisions:
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
