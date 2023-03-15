/*const queryString = location.search
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
}*/

      const eventDetailsDiv = document.getElementById("event-details");
      const eventId = new URLSearchParams(window.location.search).get("id");
      const event = data.events.find(e => e._id == eventId);

      if (event) {
        eventDetailsDiv.querySelector(".event-title-card").textContent = event.name;
        eventDetailsDiv.querySelector(".event-image-card").src = event.image;
        eventDetailsDiv.querySelector(".event-image-card").alt = event.name;
        eventDetailsDiv.querySelector("p:nth-of-type(1)").textContent += ` ${event.date}`;
        eventDetailsDiv.querySelector("p:nth-of-type(2)").textContent += ` ${event.description}`;
        eventDetailsDiv.querySelector("p:nth-of-type(3)").textContent += ` ${event.category}`;
        eventDetailsDiv.querySelector("p:nth-of-type(4)").textContent += ` ${event.place}`;
        eventDetailsDiv.querySelector("p:nth-of-type(5)").textContent += ` ${event.capacity}`;
        eventDetailsDiv.querySelector("p:nth-of-type(6)").textContent += ` ${event.assistance}`;
        eventDetailsDiv.querySelector("p:nth-of-type(7)").textContent += ` $${event.price}`;
      } else {
        eventDetailsDiv.innerHTML = "<p>Event not found.</p>";
      }