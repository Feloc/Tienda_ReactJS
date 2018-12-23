import React from 'react';

class Cart extends React.Component{
  constructor(){
    super()
    this.state = {mensaje: 'Cart'}
  }

  render(){
    return (
      <div class="jumbotron jumbotron-fluid">

        <div class="container">
          <div class="row">
            <div class="col-6">

              <div class="list-group">
                <div class="list-group-item">
                  <div class="row">
                    <div class="col-4">
                      <img src="../../assets/aguacate.jpg" alt=""/>
                    </div>
                    <div class="col-8">
                      <h4>NOmbre</h4>
                      <h6>Unidades:</h6>
                    </div>
                  </div>
                  <div class="row">
                    <h6>Subtotal:</h6>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-6">
              <div class="">
                <h3>Total:</h3>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-secondary">Cancelar</button>
                  <button type="button" class="btn btn-outline-secondary">Pagar</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Cart
