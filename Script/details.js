const queryString = location.search
let params = new URLSearchParams(queryString)
let _id = params.get("_id")

let events = data.events.find(info => info._id == _id)

let contenedor = document.getElementById("contDet")

mostrarCardsEventos()

function mostrarCardsEventos() {
    let tarjetas = ''
        tarjetas += `<div class=" card d-flex m-3 bg-secondary bg-gradient" style="width:
        25rem;">
        <img src="${events.image}"
                class="card-img-top" alt="${events.category} ">
                <div class="card-body" data-bs-theme="dark">
                        <h5 class="card-title text-light-emphasis">${events.name}</h5>
                                <p class="card-text text-light">${events.description} </p>
                                <p class="fs-4 text-info-emphasis mx-5">Price:$${events.price} </a>
                                        <a href="./details.html?id=${events._id} " class="btn btn-primary me-auto ms-5
                                                p-2">Details</a>
                </div>
        </div>`
    
    contenedor.innerHTML = tarjetas
}