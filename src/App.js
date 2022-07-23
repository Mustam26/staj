import React, { Component } from "react";
import CategoryList from "./components/CategoryList";
//import "./assets/css/responsive.css"
//import "./assets/css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap'
import SubCategories from "./components/SubCategories";
//import NavBar from './components/navbar'
//import NavBar from './components/Navv'
import NavBar from './components/NavBarr'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Login from "./components/Login";
//import Menu from "./components/Menu";
//import Navv from "./components/Navv";
import { register } from "./fireebase/firebase";
//import { login } from "./fireebase/firebase";
import { logout } from "./fireebase/firebase";
import { Toaster } from "react-hot-toast";
import UpdateProfile from "./components/UpdateProfile";
import UserProfile from "./components/UserProfile";



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCategory: "",
      products: [],
      cart: [],
      email: "",
      password: ""
    }
  }



  /*state = { currentCategory: "", products: [], cart:[] ,email:"",password:""};
  fireBases=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword]=useState('')
    this.setState({emmail:email})
    this.setState({paassword:password})
  }*/

  componentDidMount() {
    //this.firebases()
  }
  setlemeEmail = (email2) => {
    //console.log("setlemeemaial")
    this.setState({ email: email2 })
  }
  setlemePassword = (password2) => {
    //console.log("setlemepasss")
    this.setState({ password: password2 })
  }



  changeCategory = (category) => {
    this.setState({ currentCategory: category.CategoryName });
    // this.getProducts(category.id);
  };

  render() {
    return (
      <Router>
        <div>
          <Toaster />
          {/*<NavBar currentCategory={this.state.currentCategory}></NavBar>      */}
          <NavBar></NavBar>

          <Container>
            <Row>
              <Col xs='3'>
                <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} ></CategoryList>
              </Col>


              <Col xs='9'>
                <Routes>
                  <Route exacth path="/" element={<SubCategories />}>
                  </Route>
                  <Route exacth path="/kayit" element={
                    <User />} >
                  </Route>
                  <Route exacth path="/giris" element={
                    <Login />} >
                  </Route>
                  <Route exacth path="/updatee" element={
                    <UpdateProfile />
                  }>
                  </Route>
                  <Route exacth path="/profile" element={
                    <UserProfile/>
                  }>                    
                  </Route>
                </Routes>

              </Col>

            </Row>
          </Container>

          {/*  <Container>

        <Navi cart={this.state.cart} removeToCart={this.removeToCart}></Navi>

        <Row>
          <Col xs='3'>
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} ></CategoryList>
          </Col>
          <Col xs='9'>
            <Switch>
              <Route exact path='/' render={props => (
                <ProductList
                  {...props}
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  info={productInfo}>
                </ProductList>

              )}></Route>
              <Route exact path='/cart' render={props => (
                <CartList
                  {...props}
                  cart={this.state.cart}
                  removeToCart={this.removeToCart}
                >
                </CartList>
              )}>
              </Route>
              <Route exact path='/form' component={FormDemo}>
              </Route>
              {/*<Route exact path='/form2' component={FormDemo2}> </Route>}
              <Route component={NotFound}></Route>
            </Switch>

          </Col>
        </Row>
      </Container>*/}
        </div>
      </Router>
    );
  }
}

