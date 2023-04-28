// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = +product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;

  console.log("price: ", price);
  console.log("quanity: ", quantity);

  // guardamos el resultado de multiplicar la cantidad de productos por el precio por producto
  const subtotal = price * quantity;
  console.log("subtotal: ", subtotal);

  // metemos el valor de la variable 'subtotal' en el nodo del DOM
  product.querySelector(".subtotal span").textContent = subtotal;

  //devolver el valor de la varible subtotal
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // usad querySelectorAll para recuperar todos los nodos del DOM que tiene la clase .product. Guardad el resultado en una variable llamado products. Verificad que lo habeis hecho bien haciendo un console.log de esa variable

  // ITERATION 3
  //... your code goes here

  /* Una altra manera de fer lu de més amunt de total += de la fila 33 és el següent: 
  
  const subtotals = document.querySelectorAll('.subtotal span');
  subtotals.forEach((subtotal) => {
    total += +subtotal.textContent;
  }); 
  
  */

  // Finalmente, actualizar el nodo del DOM para poner el valor total del compra
  document.querySelector("#total-value span").textContent = total;

};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here

  target.parentNode.parentNode.remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here

  let price = document.querySelector('#price').value;
  let name = document.querySelector('#name').value;

  // 1. Crear un nuevo nodo de tipo tr
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  // 2. Rellenar su propiedad .innerHTML

  newProduct.innerHTML = `<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price} </span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button onclick='removeProduct(event)' class="btn btn-remove">Remove</button>
</td>`

  // 3. Añadir el nodo a la <table>

  document.querySelector('#cart tbody').appendChild(newProduct);

   // limpiar los input
   document.querySelector(".create-product input[type=number]").value = "";
   document.querySelector(".create-product input[type=text]").value = "";

}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const remove = document.querySelectorAll('.btn-remove');
  remove.forEach((button) => {

     // addEventLister: primer parámetro, nombre del evento en formato string
    // segunda parámetro, la función que vamos a ejecutar cuando hagamos click
    
    button.addEventListener('click', removeProduct);
    
  });
  
  // Añade un manejador de eventos de click al botón "Crear Producto" que tomará una función llamada createProduct como callback.

  const productCreation = document.querySelector('#create');
  productCreation.addEventListener('click', createProduct);

});
