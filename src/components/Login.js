import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { login } from '../fireebase/firebase'
import { login as LoginHandle } from "../redduxx/auth";


export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async e => {        
        e.preventDefault()
        const user = await login(email, password)
        console.log(user)
        if(user){
        dispatch(LoginHandle({displayName: user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            emailVerified:user.emailVerified,
            uid:user.uid}))            
    }
    if(user.displayName ===null)
        navigate('/profile', {
            replace: true
        })
    }

    return (
        <div>
            <h3>Giriş Yap</h3>
            <form className='max-w-xl mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Lütfen email adresini giriniz.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!email || !password} >
                    Giriş Yap
                </Button> <span/> <span/> <span/>
                <Link to={'/kayit'}>Kayıt Ol</Link><span></span>
            </form>
        </div>
    )

}
