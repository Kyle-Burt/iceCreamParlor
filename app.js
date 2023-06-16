// SECTION Global Variables 

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
}]



// SECTION Functions

function addCookieDough() {
    let cookieDough = iceCream.find(iceCreamItem => iceCreamItem.name == 'Cookie Dough')
    cookieDough.quantity++
    console.log(cookieDough)
    drawIceCreamToCart()
    drawTotal()
}

function addVanilla() {
    let vanilla = iceCream.find(iceCreamItem => iceCreamItem.name == 'Vanilla')
    vanilla.quantity++
    console.log(vanilla)
    drawIceCreamToCart()
    drawTotal()
}

function addStrawberry() {
    let strawberry = iceCream.find(iceCreamItem => iceCreamItem.name == 'Strawberry')
    strawberry.quantity++
    console.log(strawberry)
    drawIceCreamToCart()
    drawTotal()
}

function addWaffleCone() {
    let container = containers.find(containerItem => containerItem.name == 'Waffle Cone')
    console.log(container)
}

function addWaffleBowl() {
    let container = containers.find(containerItem => containerItem.name == 'Waffle Bowl')
    console.log(container)
}

function addSprinkles() {
    let sprinkles = toppings.find(toppingItem => toppingItem.name == 'Sprinkles')
    sprinkles.quantity++
    console.log(sprinkles)
}

function addChocolateChips() {
    let chocolateChip = toppings.find(toppingItem => toppingItem.name == 'Chocolate Chips')
    chocolateChip.quantity++
    console.log(chocolateChip)
}

function drawIceCreamToCart() {
    let stringOfIceCreamItemHTML = ''
    iceCream.forEach(iceCreamItem => {
        if (iceCreamItem.quantity > 0) {
            stringOfIceCreamItemHTML += `
                <li>
                <div class="d-flex fs-3 justify-content-between">
                    <span>${iceCreamItem.name} x ${iceCreamItem.quantity}</span>
                    <span>$${iceCreamItem.price.toFixed(2)}</span>
                </div>
                </li>
                `
            console.log('ICE CREAM ITEM', iceCreamItem)
        }
    })

    console.log(stringOfIceCreamItemHTML)

    const cartElement = document.getElementById('cart')

    cartElement.innerHTML = stringOfIceCreamItemHTML
}

function drawToppingToCart() {

    let stringOfToppingItemHTML = ''
    toppings.forEach(toppingItem => {
        if (toppingItem.quantity > 0) {
            stringOfToppingItemHTML += `
                <li>
                <div class="d-flex fs-3 justify-content-between">
                    <span>${toppingItem.name} x ${toppingItem.quantity}</span>
                    <span>$${toppingItem.price.toFixed(2)}</span>
                </div>
                </li>
                `
            console.log('Topping ITEM', toppingItem)
        }
    })

    console.log(stringOfToppingItemHTML)
    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = stringOfToppingItemHTML
    drawTotal()
}

function drawTotal() {
    let cartSum = 0

    iceCream.forEach(iceCreamItem => {
        cartSum += iceCreamItem.price * iceCreamItem.quantity
    })

    let cartTotalElement = document.getElementById('cartTotal')

    cartTotalElement.innerText = cartSum.toFixed(2).toString()
}

function checkout() {
    const wantsToCheckout = window.confirm(`Thanks for shopping`)

    if (!wantsToCheckout) {
        return
    }
    iceCream.forEach(iceCreamItem => iceCreamItem.quantity = 0)

    drawIceCreamToCart()
}



// SECTION Function invoke