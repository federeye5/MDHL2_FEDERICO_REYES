function mostrarCardsEventos() {
        let contenedor = document.getElementById("mainHome")
        let stringHTML = "";                
                for (x of data.events) {
                        console.table(x);
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
}


mostrarCardsEventos();
