const queryString = window.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")


const eventos = data.events.find(info => info._id == id)

let contenedor = document.getElementById("contDet")

mostrarCardsEventos()

function mostrarCardsEventos() {
let tarjetas = ''
        tarjetas += `<div class=" card d-flex m-3 bg-secondary bg-gradient" style="width:
        25rem;">
        <img src="${eventos.image}"
                class="card-img-top" alt="${eventos.category} ">
                <div class="card-body" data-bs-theme="dark">
                        <h5 class="card-title text-light-emphasis">${eventos.name}</h5>
                                <p class="card-text text-light">${eventos.description} </p>
                                <li class="card-text text-light">Category: ${eventos.category} </li>
                                <li class="card-text text-light">Place: ${eventos.place} </li>
                                <li class="card-text text-light">Capacity: ${eventos.capacity} </li>
                                <li class="card-text text-light">Assistance/Estimate: ${eventos.assistance || eventos.estimate} </li>
                                <li class="card-text text-light">Date of Event: ${eventos.date} </li>
                                <p class="fs-4 text-info-emphasis mx-5">Price: $${eventos.price} </p>
                                        <a href="/paginas/home.html" class="btn btn-primary me-auto ms-5
                                                p-2">Return</a>
                </div>
        </div>`
        contenedor.innerHTML = tarjetas
}
