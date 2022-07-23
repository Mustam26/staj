import React, { Component } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import axios from 'axios'
import {FaUserCircle,FaHome,FaUserAlt} from "react-icons/fa"

class NavScrollExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            subcategory: [],
            osubcategory:[]
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44317/api/Kategori/TumKategorileriGetir')
            .then(response => {
                // console.log(response)
                this.setState({ categories: response.data })
            })
            .catch(error => {
                console.log(error)
            })
        axios.get('https://localhost:44317/api/SubCategories/TumSubCategoriesGetir')
            .then(response => {
                // console.log(response)
                this.setState({ subcategory: response.data })
            })
            .catch(error => {
                console.log(error)
            })           
    }
        ozelsorgu=(id)=>{
            this.state.osubcategory.splice(0,this.state.osubcategory.length)
            this.state.subcategory.map(subs=>{
                if(id===subs.CategoryID){
                    console.log()
                    this.state.osubcategory.push(subs)
                }
            })
            
        };



    render() {      
        return (
            <div>
                <Navbar bg="info" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/"> <FaHome></FaHome></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >                              
                                <Nav.Link href="/giris"> <FaUserCircle size={30}></FaUserCircle></Nav.Link>
                               {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>*/}
                                
                                {/*<NavDropdown title={<FaUserAlt size={30}></FaUserAlt>}  id="navbarScrollingDropdown">                                 
                                    <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        Something else here
                                    </NavDropdown.Item>                                    
                            </NavDropdown>*/}
                                
                                
                               {/* <Nav.Link href="/updatee" >
                                    Kullanıcı Güncelle
                                </Nav.Link>*/
    }
{/*                                 
                                <FaUserCircle size={30}></FaUserCircle> */}
                            </Nav>                            
                            <Form className="d-flex">
                               
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar bg="light" variant="light">
                    <Container>                       
                        <Nav className="me-auto">
                            {this.state.categories.map(category => (
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={category.CategoryName}
                                    menuVariant="success"
                                    key={category.CategoryID}   
                                    onClick={this.ozelsorgu(category.CategoryID)}                                                                                              
                                >{this.state.osubcategory.map(subcat => (
                                        <NavDropdown.Item key={subcat.SubCategoriesID} href="#">{subcat.SubCategoriesName}</NavDropdown.Item>
                                    ))   
}
                                </NavDropdown>
                            ))

                            }
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavScrollExample;