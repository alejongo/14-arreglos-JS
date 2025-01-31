import { propiedades_alquiler, propiedades_venta } from "./data.js";

const enVentaTodasDiv = document.getElementById('en_venta_container_todas')
const enAlquilerTodasDiv = document.getElementById('en_alquiler_container_todas')





// Mostrar propiedades TODAS
const mostrarTodasPropiedades = (propiedades, divToRender) => {
  let html = ''
  if (divToRender) {
    propiedades.map((propiedad) => {
      html += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top" alt="Imagen del departamento" />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.banios} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} / per night</p>
                ${propiedad.smoke === true
          ? '<p class="text-success"><i class="fas fa-smoking"> </i> Se permite fumar</p>'
          : '<p class="text-danger"><i class="fas fa-smoking-ban"> </i> No se permite fumar</p>'
        }
                ${propiedad.pets === true
          ? '<p class="text-success"> <i class="fas fa-paw"> </i> Mascotas permitidas</p>'
          : '<p class="text-danger"> <i class="fa-solid fa-ban"> </i> No se permiten mascotas</p>'
        }
              </div>
            </div>
          </div>
          `

    })
    divToRender.innerHTML = html
  }
}

mostrarTodasPropiedades(propiedades_alquiler, enAlquilerTodasDiv)
mostrarTodasPropiedades(propiedades_venta, enVentaTodasDiv)
