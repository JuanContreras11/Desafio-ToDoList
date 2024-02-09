const tareaInput = document.querySelector("#tareaInput");
const btnAgregar = document.querySelector("#boton");
const lista = document.querySelector("#lista");
const lista2 = document.querySelector("#lista2");
const totalElement = document.querySelector("#total");
const realizadasElement = document.querySelector("#realizadas");

let index = 0;
let tareas = [];
let realizadas = [];

const agregarTarea = () => {
  const nuevaTarea = tareaInput.value;
  if (nuevaTarea.trim() !== "") {
    tareas.push({ descripcion: nuevaTarea, completado: false });
    tareaInput.value = "";
    index += 1;
    actualizarLista();
  }
};

// Función para actualizar la lista de tareas
const actualizarLista = () => {
  let html = "";
  for (let i = 0; i < tareas.length; i++) {
    html += `
    <tr> 
    <th scope="row">${i + 1} 
    </th>
    <td class="select">
        ${tareas[i].descripcion}
        <div class="select">
        <div class="select">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkbox-${i}">
          <label class="form-check-label" for="checkbox-${i}"></label>
        </div>
        <i class="fa-solid fa-x" id="icono-x-${i}"></i>
      </div>
    </td>
    </tr>`;
  }
  lista.innerHTML = html;

  totalElement.textContent = tareas.length;

  for (let i = 0; i < tareas.length; i++) {
    const checkbox = document.getElementById(`checkbox-${i}`);
    const iconoX = document.getElementById(`icono-x-${i}`);

    checkbox.addEventListener("click", () => {
      tareas[i].completado = checkbox.checked;
      if (checkbox.checked) {
        realizadas.push(tareas[i]);
        tareas.splice(i, 1);
      }else{
        
      }
      realizadasElement.textContent = realizadas.length;
        

      console.log(tareas);
      console.log(`Checkbox ${i + 1} clicado. Completado: ${checkbox.checked}`);
    actualizarLista();
    });

    iconoX.addEventListener("click", () => {
      tareas.splice(i, 1);
      console.log(`Icono "x" ${i + 1} clicado.`);
      actualizarLista();
    });
  }
let rea = ""
  for (let i = 0; i < realizadas.length; i++) {
    rea += `
    
    <tr> 
    <th scope="row">${i + 1} 
    </th>
    <td class="select">
        ${realizadas[i].descripcion}
        <div class="select">
        <div class="select">
        <div class="form-check">
          
          <label class="form-check-label" for="checkbox-${i}"></label>
        </div>
        <i class="fa-solid fa-x" id="icono-x-${i}"></i>
      </div>
    </td>
    </tr>`;
  }

  iconoX.addEventListener("click", () => {
    tareas.splice(i, 1);
    console.log(`Icono "x" ${i + 1} clicado.`);
    actualizarLista();
  });
  lista2.innerHTML = rea;

};

// Evento al presionar la tecla en el input
tareaInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    agregarTarea();
  }
});

// Evento al hacer clic en el botón
btnAgregar.addEventListener("click", agregarTarea);
