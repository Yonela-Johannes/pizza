const showCart = document.querySelector('.showCart')
const hideCart = document.querySelector('.hideCart')
const cartTotal = document.querySelector('.cartTotal')
const cart = document.querySelector('.cart')

let pizzaOne = '/img/pizzaOne.png'
let pizzaTwo = './img/pizzaTwo.png'
let pizzaThree = './img/pizzaThree.jpg'
let specialsList = document.getElementById('specials')
let list = document.getElementById('list')

const products = [
    {
        key: 1,
        id: 1,
        name: "Small Pizza",
        image: pizzaOne,
        price: 48.99,
        quantity: 1,
        items: [
            { desc: "small pizza with 3 toppings." },
            { desc: "1 meat topping" },
            { desc: "3 or less other toppings" }]
        ,
        button: "Order Small Pizza"
    },
    {
        key: 2,
        id: 2,
        name: "Medium Pizza",
        image: pizzaTwo,
        price: 78.99,
        quantity: 1,
        items: [
            { desc: "medium magretha with 3 topping max." },
            { desc: "2 or less meat toppings" },
            { desc: "3 or less other toppings" }]
        ,
        button: "Order Medium Pizza"
    },
    {
        key: 3,
        id: 3,
        name: "Large Pizza",
        image: pizzaThree,
        price: 114.99,
        quantity: 1,
        items: [
            { desc: "medium magretha with 3 topping max." },
            { desc: "3 meat toppings" },
            {
                desc: "3 or less other toppings"
            }]
        ,
        button: "Order large Pizza"
    },

]

// Show cart button

showCart.addEventListener('click', () => {
    cart.classList.remove('hide')
    showCart.classList.add('hide')
    cartTotal.classList.add('hidden')
})

// Hide cart button
hideCart.addEventListener('click', () => {
    cart.classList.add('hide')
    showCart.classList.remove('hide')
    cartTotal.classList.remove('hidden')
})