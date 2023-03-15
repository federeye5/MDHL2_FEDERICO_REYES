let dataEventsArray = Array.from(data.events)
//console.log(dataEventsArray);

let contenedor = document.getElementById("mainHome")
let checkContenedor = document.getElementById("checkContenedor")
let input = document.querySelector("input")


input.addEventListener('input', dobleFiltro)
checkContenedor.addEventListener('change', dobleFiltro)


mostrarCardsEventos(dataEventsArray);
crearCheckboxes(dataEventsArray)


function mostrarCardsEventos(array) {
        if (array.length == 0) {
                contenedor.innerHTML = "<h2 class='display-1 fw-bolder'>No hay elementos coincidentes!</h2>"
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
                                    <p class="card-text text-light">${elemento.description} </p>
                                    <p class="fs-4 text-info-emphasis mx-5">Price:$${elemento.price} </a>
                                            <a href="./details.html" class="btn btn-primary me-auto ms-5
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

function dobleFiltro() {
        let filtroTexto = filtrarPorTexto(dataEventsArray, input.value)
        let filtroCategoria = filtrarPorCategoria(filtroTexto)
        mostrarCardsEventos(filtroCategoria)
}





/*function mostrarCardsEventos() {
        let contenedor = document.getElementById("mainHome")
        let stringHTML = "";                
                for (x of data.events) {
                        //console.table(x);
                        stringHTML += `
                        <div class=" card d-flex m-3 bg-secondary bg-gradient" style="width:
                        25rem;">
                        <img src="${x.image}"
                                class="card-img-top" alt="${x.category} ">
                                <div class="card-body" data-bs-theme="dark">
                                        <h5 class="card-title text-light-emphasis">${x.name}</h5>
                                                <p class="card-text text-light">${x.description} </p>
                                                <p class="fs-4 text-info-emphasis mx-5">Price:$${x.price} </a>
                                                        <a href="./details.html" class="btn btn-primary me-auto ms-5
                                                                p-2">Details</a>
                                </div>
                        </div>`;
                }
        contenedor.innerHTML = stringHTML;
}*/