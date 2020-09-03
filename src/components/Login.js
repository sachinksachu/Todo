import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, Form, FormGroup, Label, Input, FormText , Col, Container, Row} from 'reactstrap';
export default class Login extends Component {
    constructor(props) {
    super(props);

    this.state = {
        username : '',
        password : '',
        apiResponse : ''
    };
}

    callAPI() {
    	fetch('http://localhost:9000/users')
    	.then(res => res.text())
    	.then(res => this.setState({apiResponse : res}))
    	//.then((res) => {
          //  res.statusCode = 201;
          //  res.setHeader("Content-Type", "application/json");
          //  res.json(res);
          //  console.log("hello:"+ res);
        }
    	//.catch(err => err);	
    userName = (event) => {
        this.setState({username : event.target.value});
    }

    userPassword = (event) => {
        this.setState({password : event.target.value});
    }

    userSubmit = () => {
        alert('username :' + this.state.username + 'and password' + this.state.password );
    }

    componentDidMount() {
    this.callAPI();
	}
	
    render() {
        return (
          <Container className="Login container">
          
            <Row className="justify-content-center ">
              <Form className=" login-body">
      		      <FormGroup row>
        		      <Label for="exampleEmail" sm={2}>Username</Label>
        		      <Col sm={{size :6 , offset:1}}>
          		      <Input type="text" name="email" id="user" placeholder="username" />
       		 	      </Col>
      		      </FormGroup>
      		
      		      <FormGroup row>
                  <Col sm={2}>
       			      <Label for="examplePassword" >Password {this.state.apiResponse}</Label>
                   </Col>
        		      <Col sm={{size :6 , offset:1}}>
         	 	        <Input type="password" name="password" id="password" placeholder="password" />
        		      </Col>
      		      </FormGroup>
      		
                <FormGroup check row>
                  <Col sm={{ size: 10}}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
            </Form>
            </Row>
          </Container>


        
    )
}
}
