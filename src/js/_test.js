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
    const col = document.createElement('div');//.classList.add('col-sm-6', 'py-3');
    
    // col.innerHTML('Extra column!');
    col.classList.add('col-sm-6');
    col.classList.add('py-3');
    cardCatalog.appendChild(col);
    console.log(col);
});
