import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { logout, verified } from '../fireebase/firebase'
import { logout as logoutHandle } from '../redduxx/auth'
import { useNavigate } from 'react-router-dom'




export default function SubCategories() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('https://localhost:44317/api/SubCategories/TumSubCategoriesGetir')
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.log(error)
      }
      );      
  }, [])

  const handleLogout = async () => {
    await logout()
    dispatch(logoutHandle())
    navigate('/giris', {
      replace: true
    })
  }

  const handleVerified = async () => {
    await verified()
  }
 const user=useSelector(state=>state.auth)
  console.log(user);
  if (user) {
  //  console.log(user.photoURL)
    return (<div>
            {/*user.photoURL ?
      <div>
      <Figure>
          <Figure.Image
            width={200}
            height={200}
            alt="200x200"
            src={user.photoURL}
          />
          <Figure.Caption>
            Profil resmi
          </Figure.Caption>
        </Figure> 
        <br/>
        </div>:<br/>
    */}
      <p>Hoş Geldin {user.email} </p> <br />
      <Button onClick={handleLogout} type='primary'>Çıkış Yap</Button><br />
      {!user.emailVerified && <Button onClick={handleVerified} type='primary'>E Posta Onayla</Button>}

    </div>

    )
  }
  return (
    <div>
      <h3>Alt Kategoriler</h3>
      <ListGroup>
        {
          categories.map(category => (
            <ListGroupItem
              //active={category.CategoryName === this.props.currentCategory ? true : false}
              //onClick={() => this.props.changeCategory(category)}
              key={category.SubCategoriesID} >
              {category.SubCategoriesName} {category.CategoryID}
            </ListGroupItem>
          ))
        }

      </ListGroup>

    </div>
  )

}


