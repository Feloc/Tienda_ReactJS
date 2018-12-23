import React from 'react';
import {NavLink, Link, withRouter}  from 'react-router-dom'


class Mas extends React.Component{


  state = {
    data: [],
    name: ""
  }


  getDataFromDb = () => {
    fetch("/api/getProduct")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  componentDidMount(){
    this.getDataFromDb();
  }

  render(){
    const { data } = this.state;
    const filtro = [] = data.filter(dat =>(dat.name === "Papa"))

    return (
      <div class="">
        {filtro.map(dat =>(
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h3 class="display-4"></h3>

            <div class="row">
              <div class="col-6">
                <img src="" alt=""/>
              </div>
              <div class="col-6" >
                <ul>
                  <li>Precio: {dat.price}</li>
                  <li>Unidades disponibles:{dat.units} </li>
                </ul>
              </div>
            </div>

            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button"><Link to="/home" >Atrás</Link></button>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  }
}
Mas = withRouter(Mas);

export default Mas
