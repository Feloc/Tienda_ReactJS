import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Login from './Login.js';
import Mas from './mas.js';
import './home.css';
import agua from './assets/aguacate.jpg'
import axios from "axios"


class Home extends Component{


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
    const foto = [] = data.map(dat =>(dat.photo));
    const productos = [] = data.map(dato =>(dato.name))
    const filtrado = []
    var searchtext = this.state.name ;

    searchtext = searchtext.toLowerCase();
          data.forEach(item =>{
            if(item.name.toLowerCase().indexOf(searchtext) !== -1){
              filtrado.push(item);
            }
          })

    //foto.map(fot => fot[1])
    const filtro = [] = data.filter(dat =>(dat.name === this.state.name))
    //data.map(dat =>(dat.name))
    const fo = filtro.map(filt => (filt.photo))

    return (
      <div className='container'>

            <div>
              <input
                type="text"
                style={{ width: "200px" }}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="Que buscas?"
              />

            </div>


             <div className="row">
             {filtrado.map(dat => (
               <div className="col-3">
                   <div className="card">
                   <img className="card-img-top" src="" alt="Card image cap"/>
                     <div className="card-body">
                       <h5 className="card-title">{dat.name}</h5>
                       <p className="card-text">Cantidad: {dat.units}</p>

                       <div className="row">
                         <button className="btn btn-primary col-4 btn-sm">Ver mas</button>
                         <div className="input-group mb-3 col-8" >
                           <div className="input-group-prepend">
                             <button className="btn btn-outline-secondary btn-sm" type="button">Añadir</button>
                           </div>
                           <select className="custom-select" ngModel="cantidad" id="inputGroupSelect03" aria-label="Example select with button addon">
                             <option selected="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                             <option value="6">6</option>
                             <option value="7">7</option>
                             <option value="8">8</option>
                           </select>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 ))}
             </div>
      </div>
    )
  }
}

export default Home
