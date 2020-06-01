import React, {useState} from 'react';
import {Jumbotron,Form,Button} from 'react-bootstrap';
import { Grid } from 'react-flexbox-grid';
import axios from 'axios';
import './login.css';

export const Login = (props) => {
    const [inputEmail,setInputEmail]= useState('');
    const [inputPassword,setInputPassword]= useState('');
    const [showw,setShow] = useState(false);


    const submitHandler = (event) => {
        event.preventDefault();

        let iE = inputEmail;
        let iP = inputPassword;
        console.log(JSON.stringify({email:iE,password:iP}));
 
        try {    
            setInputEmail('');
            setInputPassword('');
           
            let data = axios.post('/user/login',JSON.stringify({email:iE,password:iP}) ,{
                        headers : { 'Content-Type': 'application/json'}
            });
            // if (data)
            //     window.location.href="/user/login"; 
        }
        catch (err){
            console.log(err)
        }      
};


    return(
        <div id="logP">

            <Grid>
                <Jumbotron id="login">
                <Form onSubmit={submitHandler}>
                    <p><p id ='title' class="fas fa-user-lock"></p></p>
                                <Form.Label>Email</Form.Label>
                                <Form.Control required autoComplete="off" type="test" name="email" 
                                            className={"bg-dark text-white"}
                                            placeholder="Email"
                                            onChange = { event => {
                                                setInputEmail(event.target.value);
                                            }}/>
                          
                                <Form.Label>Password</Form.Label>
                                <Form.Control required autoComplete="off" type="password" name="password" 
                                            className={"bg-dark text-white"}
                                            placeholder="Password"  
                                            onChange = { event => {
                                                setInputPassword(event.target.value);
                                            }}/>    
                                <br/>     
                                <p>
                                <Button size="sm" 
                                        variant="success" 
                                        type="submit" 
                                        >Login</Button>
                                </p>
                                </Form>
                </Jumbotron>
            </Grid>
        </div>
    )
}
// export default Login;