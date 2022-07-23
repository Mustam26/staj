import React, { Component } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container,NavbarBrand } from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
//import { logout } from '../actions/userActions'
//import { useHistory } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        
    }
}
 /*baslangic=()=>{
  let history = useHistory()
    const dispatch = useDispatch()

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // logout
    const logoutHandler = () => {
        dispatch(logout()) // action
        history.push("/login")
        window.location.reload()
    }
}*/

  componentDidMount(){
    //this.baslangic();
    //this.setState({activeClass:true})
  }
    render() {
    return ( 
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <NavbarBrand><i className="mb-2 fas fa-home"> Home</i></NavbarBrand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        {/* All Products */}
                        <LinkContainer to="/">
                            <Nav.Link >All Products</Nav.Link>
                        </LinkContainer>

                        {/* New Product (Admins Only) */}

                        {/*userInfo && userInfo.admin ?*/
                            <LinkContainer to="/new-product/">
                                <Nav.Link >Add Product</Nav.Link>
                            </LinkContainer>
                            //: ""
                        }

                            <span className="">
                              {/*  <SearchBarForProducts />*/}
                            </span>

                    </Nav>

                    {/* login-logout condition here */}

                    {/*userInfo ?
                        <div>
                            <NavDropdown className="navbar-nav text-capitalize" </div>title={userInfo.username} id='username'>
                                <LinkContainer to="/account">
                                    <NavDropdown.Item>Account Settings</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/all-addresses/">
                                    <NavDropdown.Item>Address Settings</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/stripe-card-details/">
                                    <NavDropdown.Item>Card Settings</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/all-orders/">
                                    <NavDropdown.Item>All Orders</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        :
*/
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                        </LinkContainer>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
        /*<div
        className={
          this.state.activeClass ? "hamburger_menu active" : "hamburger_menu"
        }
      >
        <div className="hamburger_close" /*onClick={this.props.onClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="hamburger_menu_content ">
          <ul className="menu_top_nav">
            {/*<li className="menu_item has-children">
              <a href="#">
                usd
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">cad</a>
                </li>
                <li>
                  <a href="#">aud</a>
                </li>
                <li>
                  <a href="#">eur</a>
                </li>
                <li>
                  <a href="#">gbp</a>
                </li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="#">
                English
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">French</a>
                </li>
                <li>
                  <a href="#">Italian</a>
                </li>
                <li>
                  <a href="#">German</a>
                </li>
                <li>
                  <a href="#">Spanish</a>
                </li>
              </ul>
            </li>}
            <li className="menu_item has-children">
              <a href="#">
                My Account
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li>
                  <a href="#">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    Register
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu_item">
              <a href="#">home</a>
            </li>
            <li className="menu_item">
              <a href="#">shop</a>
            </li>
            <li className="menu_item">
              <a href="#">promotion</a>
            </li>
            <li className="menu_item">
              <a href="#">pages</a>
            </li>
            <li className="menu_item">
              <a href="#">blog</a>
            </li>
            <li className="menu_item">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>*/
    )
  }
}


  export default Menu
