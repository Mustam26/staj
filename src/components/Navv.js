import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import axios from 'axios'
import CategoryList from './CategoryList'
class Navv extends Component{
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  constructor(props) {
    super(props)
  
    this.state = {
      categories:[],
      subcategory:[]
    }
  }

  componentDidMount(){
    axios.get('https://localhost:44317/api/Kategori/TumKategorileriGetir')
    .then(response =>{
       // console.log(response)
        this.setState({categories:response.data})
    })
    .catch(error =>{
        console.log(error)
    })
    axios.get('https://localhost:44317/api/SubCategories/TumSubCategoriesGetir')
    .then(response =>{
       // console.log(response)
        this.setState({subcategory:response.data})
    })
    .catch(error =>{
        console.log(error)
    })
  }
  render() {
  return (
    <div>
      <Navbar color="info">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler  />
          <Nav >
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown  nav inNavbar>
            <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem/>
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
      <Navbar color="info">
        <NavbarToggler  />
          <Nav >
            <UncontrolledDropdown 
            className="me-2"
            direction="down">{/*
              this.state.categories.map(category => (
                <div>
                <DropdownToggle caret color='success'
                key={category.CategoryID} >
                {category.CategoryName}             
              </DropdownToggle> 
              <DropdownMenu key={category.CategoryID*5}>{
                this.setState.subcategory.map(category=>(
                  <DropdownItem key={category.SubCategoriesID}>
                    {category.SubCategoriesName}
                  </DropdownItem>
                ))
                }

              </DropdownMenu>
              </div>
            ))
                
    
  }              
                {/*
                  this.state.subcategory.map(category=>(
                    <DropdownMenu key={category.CategoryID}>
                  <DropdownItem key={category.SubCategoriesID}> 
                    {category.SubCategoriesName}                
                    </DropdownItem> 
                    </DropdownMenu>))*/
                              }
              
            </UncontrolledDropdown>
          </Nav>
          {/*<NavbarText>Simple Text</NavbarText>*/}
      </Navbar>
    </div>
  );
}
}
export default Navv