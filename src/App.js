import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/form.jsx'


const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const reg2 = /\w{4,}/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName: ""
    }
  }


  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      emailIsValid: (reg.test(e.target.value))
    })
  }
  

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: (e.target.value.length >= 5 )
    })
  }
  handleRememberMeChange = (e) => {
    if (e.target.value= true){
    this.setState({
      rememberMe: true 
    })
  }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.emailIsValid && this.state.passwordIsValid ){
      this.setState({
        isSubmitted: true 
      })
    }

 
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  render() {

    console.log(this.state);
    return (

      <>
        <Form
          emailIsValid={this.state.emailIsValid}
          passwordIsValid={this.state.passwordIsValid}
          handleEmailChange={this.handleEmailChange}
          email={this.state.email} 
          handlePasswordChange={this.handlePasswordChange}
          password= {this.state.password}
          handleRememberMeChange= {this.handleRememberMeChange}
          handleSubmit={this.handleSubmit}
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
        />
      </>
    );
  }
}

export default App;

