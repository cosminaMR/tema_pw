import React,{useState} from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import { Grid } from 'react-flexbox-grid';
import './employeeAdd.css';
import {MToast} from './toast';
import {Nav} from 'react-bootstrap';
import axios from 'axios';


export const EmployeeAdd = (props) => {
    const [inputNume,setInputNume]= useState('');
    const [inputPrenume,setInputPrenume]= useState('');
    const [inputCalificare,setInputCalificare]= useState('');
    const [inputSalariu,setInputSalariu]= useState('');
    const [showw,setShow] = useState(false);
    const [message,setMessage] = useState('');
    

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify({firstName:inputNume, lastName:inputPrenume,job:inputCalificare,salary:inputSalariu}));
        // const json = await fetch('/add', {
        //         method: 'POST',
        //         mode:'no-cors',
        //         headers : { 'Content-Type': 'application/json' },
        //         body:JSON.stringify({firstName:inputNume, lastName:inputPrenume,job:inputCalificare,salary:inputSalariu})
        //     }).then(() =>{console.log('mergeee')})
        //     .catch (() =>{console.log(' nu mergeee')})///???
        let fN =inputNume;
        let lN = inputPrenume;
        let job = inputCalificare;
        let sal = inputSalariu;
        try {
            setInputNume('');
            setInputPrenume('');
            setInputSalariu('');
            setInputCalificare('');
            setShow(true);
            setTimeout(()=> {
                setShow(false);
             },2000);   
            await axios.post('/add', JSON.stringify({firstName:fN, lastName:lN,job:job,salary:sal}),{
                        headers : { 'Content-Type': 'application/json' }
            });
        }
        catch (err){
            console.log(err)
        }
       
    };

    return (
        <div>
            <div style = {{"display":showw ? "block":"none"}}>
                <MToast children = {{show:showw}}/>
            </div>
            <Grid>
                <br/>
                <Card className= {"border border-dark bg-dark text-white"}>
                    <Card.Header> 
                        <p><p id ='title' className="fas fa-hard-hat"></p></p>
                        <Nav.Link href="/employees" className="btn-floating btn-large red">
                            <div > <i class="far fa-arrow-alt-circle-left"></i></div>
                        </Nav.Link>     
                    </Card.Header>
                    <Card.Body>
                        <Form id="employeeForm" onSubmit={submitHandler}>
                            <Form.Group>
                                <Form.Label>Nume</Form.Label>
                                <Form.Control required autoComplete="off" type="test" name="nume" 
                                            className={"bg-dark text-white"}
                                            placeholder="Introdu numele"  
                                            value={inputNume} 
                                            onChange = { event => {
                                                setInputNume(event.target.value);
                                            }}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Prenume</Form.Label>
                                <Form.Control required autoComplete="off" type="test" name="prenume" 
                                            className={"bg-dark text-white"}
                                            placeholder="Introdu prenumele"  
                                            value={inputPrenume} 
                                            onChange = { event => {
                                                setInputPrenume(event.target.value);
                                            }}/>        
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Calificare</Form.Label>
                                <Form.Control required autoComplete="off" type="test" name="calificare" 
                                            className={"bg-dark text-white"}
                                            placeholder="Introdu calificarea"  
                                            value={inputCalificare} 
                                            onChange = { event => {
                                                setInputCalificare(event.target.value);
                                            }}/>        
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Salariu</Form.Label>
                                <Form.Control  required autoComplete="off" type="test" name="salariu" 
                                            className={"bg-dark text-white"}
                                            placeholder="Introdu salariul"  
                                            value={inputSalariu} 
                                            onChange = { event => {
                                                setInputSalariu(event.target.value);        
                                            }}/>                          
                            </Form.Group>
                                <Button size="sm" 
                                        variant="success" 
                                        type="submit" 
                                        >Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Grid>
        </div>
    )
}
