import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css'

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
      username:"",
      password:""
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  getDataFromDb = () => {
    fetch("/api/getUser")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  handleChangeUsername(event){
    this.setState(
      {
        username: event.target.value,
      }
    );
  }

  handleChangePassword(event){
    this.setState(
      {
        password: event.target.value
      }
    );
  }

  handleSubmit(event){
    const data = this.state.data
    const usuarios = [] = data.map(item => item.username)
    data.forEach(item => {
      if (item.username === this.state.username && item.password === this.state.password){
        this.props.history.push('./home')
      }else {
        
      }
    })
    console.log(usuarios)
    console.log(data)
    console.log(this.state.username)
    event.preventDefault()
  }


  componentDidMount(){
    this.getDataFromDb();
  }

  render(){
    const { data } = this.state;

    return(
      <form className="form-signin" onSubmit={this.handleSubmit}>
           <h2 className="form-signin-heading">Please sign in</h2>
           <label for="email" className="sr-only">Correo</label>
           <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Correo electrónico" value={this.state.username} onChange={this.handleChangeUsername} required autofocus />
           <label for="inputPassword" className="sr-only">Contraseña</label>
           <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Contraseña" value={this.state.password} onChange={this.handleChangePassword} required/>
           <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    )
  }
}

export default Login;
