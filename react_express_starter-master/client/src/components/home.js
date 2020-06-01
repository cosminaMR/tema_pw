import React from 'react';
import {Jumbotron,Row,Col} from 'react-bootstrap';
import './home.css';
import Slider from './slider';
import i1 from '../images/p1.1.jpg';
import i2 from '../images/p2.1.jpg';
import i3 from '../images/p3.1.jpg';



import Img from './imgAvatar';
import { Grid } from 'react-flexbox-grid'

export const Home = () => (
    <div>
     <Slider/>
     <div id='home'>
    <Grid>
       <Jumbotron id='karion'>
        <h1>KORION</h1>
          <p>build & renovation</p>           
       <div><br></br></div> 
       <Row className="show-grid text-center">
         <Col xs={9} sm={4} className="person-wrapper">
           <Img src={i1} />
           <h5>Ana</h5>
           <p>Arhitect</p>
         </Col>

         <Col xs={9} sm={4} className="person-wrapper">
           <Img src={i2} />
           <h5>Vlad</h5>
           <p>Inginer constructor</p>
         </Col>

         <Col xs={9} sm={4} className="person-wrapper">
           <Img src={i3} />
           <h5>Dan</h5>
           <p>Inginer constructor</p>
         </Col>
       </Row>
       </Jumbotron>
       </Grid>
    </div>
    </div>
);
