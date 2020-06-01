import React ,{ Component }from 'react';
import { Card,Table,Button, InputGroup,FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers,faStepBackward,faStepForward,faFastBackward,faFastForward} from '@fortawesome/free-solid-svg-icons';
import { Grid } from 'react-flexbox-grid'
import './employees.css';
import {Nav} from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

class Employees extends Component {
    constructor() {
      super();
      this.state = {
        employees: [],
        startPage:1,
        employeePerPage:5,
        suma:0,
        salaryArr: [],
        numeArr: []
      };
    }
      
    componentDidMount() {
      fetch('/api/employees',{mode: 'no-cors'})
        .then(res => res.json())
        .then(employees => this.setState({employees}, () => console.log('Customers fetched...', employees)));
    }
    
    changePage = event => {
        this.setState({
            [event.target.name]:parseInt(event.target.value)
        });
    };

    firstPage =() => {
        if(this.state.startPage >1){
            this.setState({
                startPage:1
            });
        };
    ;}

    prevPage = () => {
        if(this.state.startPage >1){
            this.setState({
                startPage:this.state.startPage-1
            });
        };
    };

    nextPage = () => {
        if(this.state.startPage < Math.ceil(this.state.employees.length/this.state.employeePerPage)){
            this.setState({
                startPage:this.state.startPage+1
            });
        };
    };

    lastPage = () => {
        if(this.state.startPage < Math.ceil(this.state.employees.length/this.state.employeePerPage)){
            this.setState({
                startPage:Math.ceil(this.state.employees.length/this.state.employeePerPage)
            });
        };

    }

    render() {
      let {employees,startPage,employeePerPage,suma,salaryArr,numeArr} = this.state;
      const lastIndex = startPage*employeePerPage;
      const firstIndex = lastIndex - employeePerPage;
      const currentEmp = employees.slice(firstIndex,lastIndex);
      const totalPages = employees.length/employeePerPage;

      let summa = currentEmp.map((employee)=>
      (
           suma +=employee.salary
        ));
      let salary = currentEmp.map((employee)=> (
          employee.salary
      ));
      let name = currentEmp.map((employee)=> (
        name = employee.firstName
      ));

      // chart
      const options = { labels:name,
        datasets:[{
            label:"Repatitie salarii",
            data:salary,
            backgroundColor:['rgba(75,100,123'],
            borderWidth:7
        }]}

      return (
        <div id ="employees">
            <Grid>
            <br/>
          <Card className={"border border-dark bg-dark text-white"}>
              <Card.Header>
                  <p><FontAwesomeIcon icon={faUsers}/> Employees</p>

                  <Nav.Link href="/employee/add" className="btn-floating btn-large red">
                    <div id="add"><i className="fa fa-plus"> Add</i></div>     
                  </Nav.Link>       
              </Card.Header>
              <Card.Body>
                  <Table bordered hover striped variant='dark'>
                      <thead>
                          <tr>
                              <td>Nume</td>
                              <td>Prenume</td>
                              <td>Calificare</td>
                              <td>Salariu</td>
                          </tr>
                      </thead>

                      <tbody>
                          {employees.length === 0 ?
                            <tr align = "center">
                                <td colSpan='6'>No employees</td>
                            </tr>:
                            currentEmp.map((employee)=>
                                (
                                <tr>
                                    <td key={employee.id}> {employee.firstName} </td>
                                    <td key={employee.id}> {employee.lastName} </td>
                                    <td key={employee.id}> {employee.job} </td>
                                    
                                    <td key={employee.id}> {employee.salary}</td>
                                </tr>
                            ))  }
                      </tbody>
                  </Table>
              </Card.Body>
              <Card.Footer>
                  <div style = {{"float":"left"}}>
                        {startPage} of {Math.ceil(this.state.employees.length/this.state.employeePerPage)}
                  </div>
                  <div style = {{"float":"right"}}>
                      <InputGroup size = "sm">
                      <InputGroup.Prepend>
                        <Button  className="button" type = "button" variant = "outline-info" disabled = {startPage === 1 ? true:false} onClick={this.firstPage}>
                            <FontAwesomeIcon icon={faFastBackward}/> First
                        </Button>
                        <Button className="button" type = "button" variant = "outline-info" onClick={this.prevPage}>
                            <FontAwesomeIcon icon={faStepBackward}/>Prev
                        </Button>
                      </InputGroup.Prepend>
                      <FormControl className="pageNum bg-dark" name="currentPage" value = {startPage} onChange = {this.changePage}/>
                      <InputGroup.Append>
                        <Button className="button" type = "button" variant = "outline-info" disabled = {startPage === totalPages ? true:false} onClick={this.nextPage}>
                            <FontAwesomeIcon icon={faStepForward}/>Next
                        </Button>
                        <Button className="button" type = "button" variant = "outline-info" disabled = {startPage === totalPages ? true:false} onClick={this.lastPage}>
                            <FontAwesomeIcon icon={faFastForward}/>Last
                        </Button>
                      </InputGroup.Append>
                      </InputGroup>
                  </div>
              </Card.Footer>
          </Card>
            <br/>                
          <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                     <p><i class="fas fa-money-bill-wave"></i> Total salarii</p> 
                </Card.Header>
                <Card.Body>
                    <p>{summa[summa.length-1]} lei</p>
                </Card.Body>
                <Card.Footer>

                </Card.Footer>
          </Card>
          <br/>
          <Card className={"border border-dark bg-dark text-white"}>
                <Line data= {options}/>
          </Card>
          </Grid>
          <br/>
        </div>
      );
    }
  }
  
  export default Employees;
  