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
      <div className="Product-item">
          <img className="image" src={"https://www.puppyleaks.com/wp-content/uploads/2017/09/puppysmile.png"} alt="logo" />

          <div className="product-id">
              Producto
          </div>

          <div className="product-code">
              Código: {this.props.codigo}
          </div>


        <div className="product-name" style={{backgroundColor: this.props.color}}>
          Nombre: {this.props.title}
        </div>


          <div className="product-precio" style={{backgroundColor: this.props.color}}>
            Precio: {this.props.precio}
          </div>


          <button className="button-comprar" onClick={this.handleCompra}> Comprar </button>
          <button className="button-verinfo" onClick={this.handleInfo}> Ver info </button>

      </div>
    )
  }

}

export default Products
