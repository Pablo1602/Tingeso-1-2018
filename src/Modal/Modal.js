import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'


class Modal extends Component {


    

    constructor (props){
        super(props);
      
        this.state = {
        codigoValue: '',
        nombreValue: '',
        precioValue: '',
    };

    this.handleCodigoValue = this.handleCodigoValue.bind(this);
    this.handleNombreValue = this.handleNombreValue.bind(this);
    this.handlePrecioValue = this.handlePrecioValue.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
}
    handleCodigoValue(event){
          this.setState({codigoValue: event.target.value});
    }

    handleNombreValue(event){
            this.setState({nombreValue: event.target.value});
    }
    handlePrecioValue(event){
            this.setState({precioValue: event.target.value});
    }

    handleOnClick(event){
        console.log(event)

            Axios.post('http://localhost:8081/mingeso-backend/producto',{
                codigo:	this.state.codigoValue,
                nombre:	this.state.nombreValue,
                precio:	this.state.precioValue,
                vencimiento: '10-01-2014',
                categoria:	1
             }).then(function (response) {
                console.log(response);
              }).catch(function (error) {
                console.log(error);
              }).then(
                this.props.onClose
              );
    }
    
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div> Ingrese datos </div>
            <input type="text" value={this.state.codigoValue} placeholder="Código producto" onChange={this.handleCodigoValue}>
            </input>
            <input type="text" value={this.state.nombreValue} placeholder="Nombre producto" onChange={this.handleNombreValue}>
            </input>
            <input type="text" value={this.state.precioValue} placeholder="Precio producto" onChange={this.handlePrecioValue}>
            </input>
          <div className="footer">
            <button onClick={this.handleOnClick}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};



export default Modal;