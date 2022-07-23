import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { update, auth } from '../fireebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redduxx/auth'

export default function UpdateProfile() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [displayName, setDisplayName] = useState(user.displayName || '')
  const [avatar, setAvatar] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    await update({
      displayName,
      photoURL: avatar
    })
    dispatch(login({displayName: auth.currentUser.displayName,
      email:auth.currentUser.email,
      photoURL:auth.currentUser.photoURL,
      emailVerified:auth.currentUser.emailVerified,
      uid:auth.currentUser.uid}))
  }

  return (
    <div>
      <form className='max-w-xl mx-auto' onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Profili Güncelle</Form.Label>
          <Form.Control type="text" placeholder="Ahmet ..." name='displayName' value={displayName} onChange={e => setDisplayName(e.target.value)} />
          <Form.Text className="text-muted">
            Lütfen display name'i giriniz.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!displayName} >
          Güncelle
        </Button>        
      </form>
      <form className='max-w-xl mx-auto' onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Resim Ekle</Form.Label>
          <Form.Control type="text" placeholder="Photo Url ..." name='avatar' value={avatar} onChange={e => setAvatar(e.target.value)} />
          <Form.Text className="text-muted">
           Profil url'si ekleyebilirsiniz
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!avatar} >
          Fotoğraf Ekle
        </Button>        
      </form>
    </div>
  )
}
