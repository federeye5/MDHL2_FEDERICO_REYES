let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

const contenedor = document.getElementById("mainFE")
const checkContenedor = document.getElementById("checkContenedor")
const input = document.querySelector("input")

traerDatos()

async function traerDatos(){
try{
        const response = await fetch(urlApi)
        const data = await response.json()
        const futureEvents = filtrarEventosFuturos(data);
        mostrarCardsEventos(futureEvents)
        crearCheckboxes(data.events)
        input.addEventListener('input', ()=>{
                dobleFiltro(data.events, input.value)
        })
        checkContenedor.addEventListener('change', ()=>{
                dobleFiltro(data.events)
        })
}catch (e){
        console.log(e);
}

}


function mostrarCardsEventos(array) {
        if (array.length == 0) {
                contenedor.innerHTML = "<h2 class='display-1 fw-bolder'>There are no matching events!</h2>"
                return
        }
        let tarjetas = ''
        array.forEach(elemento => {
                tarjetas += `<div class=" card d-flex m-3 bg-secondary bg-gradient" style="width:
            25rem;">
            <img src="${elemento.image}"
                    class="card-img-top" alt="${elemento.category} ">
                    <div class="card-body" data-bs-theme="dark">
                            <h5 class="card-title text-light-emphasis">${elemento.name}</h5>
                                    <p class="card-text text-light">${elemento.description}
                                    <li class="card-text text-light">Date of Event: ${elemento.date} </li> </p>
                                    <p class="fs-4 text-info-emphasis mx-5">Price:$${elemento.price} </p>
                                            <a href="/paginas/details.html?id=${elemento._id}" class="btn btn-primary me-auto ms-5
                                                    p-2">Details</a>
                    </div>
            </div>`
        })
        contenedor.innerHTML = tarjetas
}

function crearCheckboxes(array) {
        let arrayCategories = array.map(elemento => elemento.category)

        let setCategory = new Set(arrayCategories.sort((a, b) => {
                if (a < b) {
                        return -1
                } else if (a > b) {
                        return 1
                } else
                        return 0
        }))

        let checks = ''
        setCategory.forEach(e => {
                checks += `<div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="${e}" value="${e}">
                <label class="form-check-label" for="${e}">${e}</label>
              </div>  `
        })
        checkContenedor.innerHTML = checks
}

function filtrarPorTexto(array, texto) {
        let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
        return arrayFiltrado

}

function filtrarPorCategoria(array) {
        let checkboxes = document.querySelectorAll("input[type='checkbox']")
        let arrayCheck = Array.from(checkboxes)
        let checks = arrayCheck.filter(check => check.checked)
        if (checks.length == 0) {
                return array
        }
        let categoria = checks.map(check => check.value)
        let arrayFiltrado = array.filter(elemento => categoria.includes(elemento.category))
        return arrayFiltrado

}

function dobleFiltro(array) {
        let filtroTexto = filtrarPorTexto(array, input.value)
        let filtroCategoria = filtrarPorCategoria(filtroTexto)
        mostrarCardsEventos(filtroCategoria)
}

function filtrarEventosFuturos(array){
        const eventosFuturos = array.events.filter((event) => event.date > array.currentDate)
        return eventosFuturos
}


