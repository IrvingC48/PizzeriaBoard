function funcionPrueba() {
  const miBotonNode = document.querySelector("#miBoton");
  miBotonNode.textContent = "Valor nuevo"
};

//Metodo de selección de elementos tradicional
// document.getElementById("miBoton").addEventListener('click', funcionPrueba);


//Metodo de selección de elementos moderno
document.querySelector("#miBoton").addEventListener('click', eliminarContainer);

//Crear elemento
//Tarea pendiente
// const elementoContainer = document.querySelector("container");
// const spanContainer = elementoContainer.createElement("span");
// spanContainer.textContent = "Texto dinámico con javaScript";


//Modificar elemento
// const miBotonNode = document.querySelector("#miBoton");
// miBotonNode.textContent = "Valor nuevo"

//Eliminar elemento

const eliminarContainer = () => {
  const elementoContainer = document.querySelector("container");
  elementoContainer.remove();
};