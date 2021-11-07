
let openbtn=document.querySelector('open'),
    products=document.querySelectorAll('.product'),
    buttons=document.querySelectorAll('button');

function createcard(){
    let cart=document.createElement('div'),
        feild=document.createElement('div'),
        heading=document.createElement('h2'),
        closebtn=document.createElement('button');

    cart.classList.add('cart')
    feild.classList.add('cart-field')
    closebtn.classList.add('close')

    heading.textContent = 'Korzinada'
    closebtn.textContent='Yopil'


    document.body.appendChild(cart)
    cart.appendChild(heading)
    cart.appendChild(feild)
    cart.appendChild(closebtn)


}

createcard()

let cart=document.querySelector('.cart')





openbtn.addEventListener('click', function(){
    cart.style.display='block'
})


