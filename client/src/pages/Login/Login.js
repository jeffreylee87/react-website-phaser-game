import React,{Component} from "react";
import {Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { FormBtn } from "../../components/Form";
import API from "../../utils/API";
import {Redirect} from 'react-router-dom';

class loginScreen extends Component  {
  state ={
    login: "",
    password: ""
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal1: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }



  //handles all the text typed on page
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handles the login creation
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.login && this.state.password) {
      API.saveLogin({
        username: this.state.login,
        password: this.state.password,
      })
      .then(res => {
        console.log(res)
        this.toggle1();
      })
      // .catch(err => {
      //   console.log(err + "here")
      //   if(err){
      //     alert("User exists!")
      //   }
      // });
    }
  };
  
  //handles the login attempt
  handleLogin = event => {
    event.preventDefault();
    //makes sure that a login and password input is present if not can't go through
    if (this.state.login && this.state.password) {
      API.getLogin({
        username: this.state.login,
        password: this.state.password
      })
      .then(res => {
        //checks if login and password is correct
        if (res.data === "Incorrect Password" || res.data === "Too many attempts"){
          this.toggle();
        } else {
          console.log(res)
          localStorage.setItem("user-loggedIn", true);
          //remember to json.parse the res when getting the storage item!!!!!
          localStorage.setItem("local", JSON.stringify(res));
          window.location.reload();
          
        } 
      } 
      )
    }
  }
  render() {
    if (localStorage.getItem("user-loggedIn")) {
      return <Redirect to='/game' />
    }
    
    return (
      <Container fluid>
    <Row>
      <Col md={12}>
        <Jumbotron>
        <h1 style={{textAlign: "center", color: "white",}}>LUDUM Login</h1>
          <Form style={{marginTop: "2%"}}>
        <FormGroup row>
          <Label for="userName" style={{color: "white"}} sm={2}>Username</Label>
          <Col sm={10}>
            <Input 
            type="text" 
            name="login" 
            id="userName" 
            placeholder="Enter Username..." 
            value={this.state.login}  
            onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="passWord" style={{color: "white"}} sm={2}>Password</Label>
          <Col sm={10}>
            <Input 
            type="password" 
            name="password" 
            id="passWord" 
            placeholder="Enter Password..." 
            value={this.state.password} 
            onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>
        <FormBtn
          disabled={!(this.state.login && this.state.password)}
          onClick={this.handleLogin}
        >
          Login
          </FormBtn>
          <FormBtn
          disabled={!(this.state.login && this.state.password)}
          onClick={this.handleFormSubmit}
          >
            Create
            </FormBtn>
          </Form>
        </Jumbotron>
      </Col>
    </Row>
    <div>
   <Modal isOpen={this.state.modal1} toggle={this.toggle1}>
     <ModalHeader toggle={this.toggle1}>Congrats!!!!!</ModalHeader>
     <ModalBody>
       Username and Password accepted!!!
     </ModalBody>
     <ModalFooter>
       <Button color="secondary" onClick={this.toggle1}>Close</Button>
     </ModalFooter>
   </Modal>
 </div>
    <div>
   <Modal isOpen={this.state.modal} toggle={this.toggle}>
     <ModalHeader toggle={this.toggle}>Warning!!!!!</ModalHeader>
     <ModalBody>
       Wrong login or password, please re-enter. 
     </ModalBody>
     <ModalFooter>
       <Button color="secondary" onClick={this.toggle}>Close</Button>
     </ModalFooter>
   </Modal>
 </div>
  </Container>
   
    )
  }
}

export default loginScreen;
  

