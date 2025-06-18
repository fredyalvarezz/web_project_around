export class Section{
constructor({items, renderer}, containerSelector){
  this._items=items; // Array de datos iniciales
  this._renderer=renderer; // Funcion para renderizar cada Item
  this._container= document.querySelector(containerSelector); // Contenedor en el DOM

}  // Renderiza todos los elementos usando el renderer
  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }
  addItem(element){
    this._container.prepend(element);
  }
}