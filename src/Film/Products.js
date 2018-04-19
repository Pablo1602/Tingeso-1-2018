import React, { Component } from 'react'
import './Products.css'
import logo from './../puppy.jpg'

class Products extends Component {

    handleCompra = () => {

        alert("Boton comprar");
    };

    handleInfo = () => {
        alert("Boton info");
    };

  render() {
    return (
      <div class="gallery responsive">
          <img className="image" href={"https://www.puppyleaks.com/wp-content/uploads/2017/09/puppysmile.png"} src={"https://www.puppyleaks.com/wp-content/uploads/2017/09/puppysmile.png"} />

          <div className="product-id">
              Producto
          </div>
          <div class="desc">

            <div className="product-code">
                Código: {this.props.codigo}
            </div>


            <div className="product-name">
              Nombre: {this.props.title}
            </div>


            <div className="product-precio">
              Precio: {this.props.precio}
            </div>


        </div>


          <button className="button-comprar" onClick={this.handleCompra}> Comprar </button>
          <button className="button-verinfo" onClick={this.handleInfo}> Ver info </button>

      </div>
    )
  }

}

export default Products
