import React,{useState} from 'react';
import {Jumbotron,Form,Button} from 'react-bootstrap';
import axios from 'axios';
import { Grid } from 'react-flexbox-grid';
import './register.css';
import {MToast} from './toast';

export const Register = (props) => {
    const [inputNume,setInputNume]= useState('');
    const [inputUsername,setInputUsername]= useState('');
    const [inputEmail,setInputEmail]= useState('');
    const [inputPassword,setInputPassword]= useState('');
    const [inputPassword2,setInputPassword2]= useState('');
    const [showw,setShow] = useState(false);
    

    const submitHandler = (event) => {
        event.preventDefault();

        let iN =inputNume;
        let iU = inputUsername;
        let iE = inputEmail;
        let iP = inputPassword;
        let iP2 = inputPassword2;
        console.log(JSON.stringify({name:iN, username:iU,email:iE,password:iP,password2:iP2}));
 
        if(inputPassword === inputPassword2){
            try {
                setInputNume('');
                setInputUsername('');
                setInputEmail('');
                setInputPassword('');
                setInputPassword2('');
                let data = axios.post('/user/register',JSON.stringify({name:iN, username:iU,email:iE,password:iP}) ,{
                            headers : { 'Content-Type': 'application/json'}
                });
                if (data)
                    window.location.href="/user/login"; 
            }
            catch (err){
                console.log(err)
            }
        } else {
            setInputNume('');
            setInputUsername('');
            setInputEmail('');
            setInputPassword('');
            setInputPassword2('');
            setShow(true);
            setTimeout(()=> {
                setShow(false);
            },2000);

        }
       
    };

    return(
        <div id="logR">
             <div style = {{"display":showw ? "block":"none"}}>
                <MToast children = {{show:showw}}/>
            </div>
            <Grid>
                <Jumbotron id="register">
                    <Form onSubmit={submitHandler}>
                    <p><p id ='title' class="fas fa-user-lock"></p></p>
                    <Form.Label>Name</Form.Label>
                        <Form.Control required autoComplete="off" type="test" name="name" 
                                    className={"bg-dark text-white"}
                                    placeholder="Name"
                                    value={inputNume} 
                                            onChange = { event => {
                                                setInputNume(event.target.value);
                                            }}/>
                    
                    <Form.Label>Username</Form.Label>
                        <Form.Control required autoComplete="off" type="test" name="username" 
                                    className={"bg-dark text-white"}
                                    placeholder="Username"
                                    value={inputUsername} 
                                            onChange = { event => {
                                                setInputUsername(event.target.value);
                                            }}/>

                    <Form.Label>Email</Form.Label>
                        <Form.Control required autoComplete="off" type="test" name="email" 
                                    className={"bg-dark text-white"}
                                    placeholder="Email"
                                    value={inputEmail} 
                                            onChange = { event => {
                                                setInputEmail(event.target.value);
                                            }}/>
                          
                    <Form.Label>Password</Form.Label>
                        <Form.Control required autoComplete="off" type="password" name="password" 
                                    className={"bg-dark text-white"}
                                    placeholder="Password"
                                    value={inputPassword} 
                                            onChange = { event => {
                                                setInputPassword(event.target.value);
                                            }}/>  
                                   
                     <Form.Label>Confirm password</Form.Label>
                        <Form.Control required autoComplete="off" type="password" name="password2" 
                                    className={"bg-dark text-white"}
                                    placeholder="Confirm password"  
                                    value={inputPassword2} 
                                            onChange = { event => {
                                                setInputPassword2(event.target.value);
                                            }}/>  
                                <br/>     
                                <p>
                                <Button size="sm" 
                                        variant="success" 
                                        type="submit" 
                                        >Register</Button>
                                </p>
               </Form>
               </Jumbotron>     
            </Grid>
        </div>
    )
}