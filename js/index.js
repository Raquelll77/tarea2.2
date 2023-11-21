
const getProductos = async ()=>{
    try {
        const resp = await fetch('https://fakestoreapi.com/products')
        const prod = await resp.json()

        const ul= document.createElement('ul')
        const section = document.querySelector('section')

        section.appendChild(ul)

        prod.forEach(products =>{
            //const li = document.createElement('li')
            const {image, description, price}= products
            //li.textContent =`${image}-${description}<li><img src="${image}"></li>`
            ul.innerHTML += `
            <li>
            <div style="display: flex;justify-content: center;">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Precio: L${price}</h5>
                        <p class="card-text">${description}</p>
                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                    </div>
                </div>         
            </div>
            <li>
            `
        })

        console.log(prod)
    } catch (error) {
        console.log(error)
    }
}


getProductos()

