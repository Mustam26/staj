import React, { Component } from 'react'
import axios from 'axios'
import {ListGroup,ListGroupItem} from 'reactstrap'

class CategoryList extends Component {
/* https://localhost:44317/api/Kategori/TumKategorileriGetir*/

    constructor(props) {
      super(props)
    
      this.state = {
         categories:[]
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
    }
  render() {
    return (
      <div>
          <h3>Kategoriler</h3>
         <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem
                               active={category.CategoryName === this.props.currentCategory ? true : false}
                                onClick={() => this.props.changeCategory(category)}
                                key={category.CategoryID} >
                                {category.CategoryName}
                            </ListGroupItem>
                        ))
                    }

                </ListGroup>
        {/*
        posts.map(post=>
        <div key={post.CategoryID}>{post.CategoryName }</div>    
        )
        */}</div>
    )
  }
}
export default CategoryList
