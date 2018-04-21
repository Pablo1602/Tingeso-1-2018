import React, { Component } from 'react'
import './Products.css'
import logo from './../puppy.jpg'
import Axios from 'axios';

class Products extends Component {



    handleCompra = () => {

        alert("Boton comprar");
    };

    handleInfo = () => {
        alert("Boton info");
    };

    handleBorrar = event => {
      event.preventDefault();
      console.log('http://localhost:8081/mingeso-backend/producto/remove/'+this.props.id);
      Axios.delete('http://localhost:8081/mingeso-backend/producto/remove/'+this.props.id)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
      })
      document.getElementById(this.props.id+4187).style.display = "none";
      console.log(this.props.id+4187);
      this.forceUpdate();
  }


  render() {
    return (
      <div id={this.props.id+4187} className="gallery responsive" style={{display: true}}>
          <img className="image" href={"https://www.puppyleaks.com/wp-content/uploads/2017/09/puppysmile.png"} src={"https://www.puppyleaks.com/wp-content/uploads/2017/09/puppysmile.png"} />

          <div className="product-id">
              Cachorro
          </div>
          <div className="desc">

          <div className="product-code">
              Código: {this.props.codigo}
          </div>


          <div className="product-name">
            Nombre: {this.props.nombre}
          </div>


          <div className="product-precio">
            Precio: {this.props.precio}
          </div>


        </div>


          <button className="button-comprar" onClick={this.handleCompra}> Comprar </button>
          <button className="button-verinfo" onClick={this.handleInfo}> Ver info </button>
          <button className="button-verinfo" onClick={this.handleBorrar}> Borrar </button>

      </div>
    )
  }

}

export default Products
