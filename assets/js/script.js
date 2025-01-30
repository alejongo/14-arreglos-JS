import { propiedades_alquiler, propiedades_venta } from "./data.js";

const enVentaDiv = document.getElementById('en_venta_container')
const enAlquierDiv = document.getElementById('en_alquiler_container')







// Mostrar propiedades en Alquiler Home
const mostrarPropiedadesHome = (propiedades, divToRender) => {
  let html = ''
  for (let i = 0; i < 3; i++) {

    html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src=${propiedades[i].src}
              class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
              <h5 class="card-title">
                ${propiedades[i].nombre}
              </h5>
              <p class="card-text">
                ${propiedades[i].descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> 
                ${propiedades[i].ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${propiedades[i].habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedades[i].banios} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedades[i].costo} /per night</p>
              ${propiedades[i].smoke === true
        ? '<p class="text-success"><i class="fas fa-smoking"> </i> Se permite fumar</p>'
        : '<p class="text-danger"><i class="fas fa-smoking-ban"> </i> No se permite fumar</p>'
      }
              ${propiedades[i].pets === true
        ? '<p class="text-success"> <i class="fas fa-paw"> </i> Mascotas permitidas</p>'
        : '<p class="text-danger"> <i class="fa-solid fa-ban"> </i> No se permiten mascotas</p>'
      }
            </div>
          </div>
        </div>
        `
    divToRender.innerHTML = html

  }
}

mostrarPropiedadesHome(propiedades_venta, enVentaDiv)
mostrarPropiedadesHome(propiedades_alquiler, enAlquierDiv)
