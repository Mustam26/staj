import React, { useState} from 'react'
import { Form,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { register } from '../fireebase/firebase'

export default function User () {
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const handleSubmit = async e => {    
    e.preventDefault()
    const user = await register(email,password)
    if(user){
      navigate('/giris',{
replace:true
      })
    }

  }

    return (
      <div>
        <h3>Kayıt Ol</h3>
        <form className='max-w-xl mx-auto' onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          Lütfen email adresini giriniz.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!email ||!password} >
       Kayıt Ol
      </Button>
      </form>
      </div>
    )
  
}
