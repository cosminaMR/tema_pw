import React ,{Fragment,useState}from 'react';
import {Jumbotron,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import { Grid } from 'react-flexbox-grid'
import './about.css';
export const About = () => {
   
    return (
        <div id='about'>
            <Grid className='grid'>
                <Jumbotron>
                    <h1>KORION</h1>
                    <br/>
                    <Row className="show-grid text-center">
                        <Col xs={9} sm={4} className="person-wrapper">
                            <h1 className="fas fa-award"></h1>         
                            <p>10 premii</p>
                        </Col>

                        <Col xs={9} sm={4} className="person-wrapper">
                            <h1 class="fas fa-clipboard-list"></h1>
                            <p>15 certificari</p>
                        </Col>

                        <Col xs={9} sm={4} className="person-wrapper">
                            <h1 className="fas fa-chart-line"></h1>
                            <p>60 proiecte</p>
                        </Col> 
                    </Row>
                </Jumbotron>

                <Jumbotron id='karion'>
                   
                    <p>Industria de constructie a caselor implica un mare angajament,
                        atat din partea constructorului, cat si din partea clientului. 
                        Asadar, alegand KORION S.R.L., aveti ocazia sa construiti casa 
                        visurilor dumneavoastra, cu ajutorul unei echipe devotate dorintelor clientului.
                        Specializati pe constructii case Iasi si imprejurimi, cat si pe finisaje interioare 
                        sau exterioare, constructii anexe sau doar proiectarea casei, noi suntem siguri ca 
                        veti fi multumiti de serviciile noastre.
                    </p>

                    <p> Doza ridicata de profesionalism, dar si apropierea fata de clienti ne permit sa 
                        imbinam utilul cu placutul si sa realizam case spectaculoase si unice, care se
                        potrivesc gusturilor fiecarui client.Portofoliul nostru include o gama variata de 
                        proiecte, fiecare finalizandu-se cu reactii pozitive din partea clientilor, astfel
                        incat va permitem sa contactati persoanele cu care am lucrat anterior, pentru a putea
                            fi siguri ca faceti alegerea potrivita.
                    </p>
                </Jumbotron> 
            </Grid>   
        </div>
    );
};