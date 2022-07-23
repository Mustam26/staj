import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { profile } from "../redduxx/profileuser";
//import store from "../redduxx";
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export default function UserProfile() {
    //var a= new Object()
    const navigate = useNavigate()
    //const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const [nuser, setNuser] = useState({})
    const [names, setNames] = useState("")
    const [snames, setSnames] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [adres, setAdres] = useState("")
    const [eklendi, setEklendi] = useState(false)
   // const puser = useSelector(state => state.profileuser)
    const handleProfile = e => {
        // await delay(2000)
        e.preventDefault()
         setNuser({
            CustomerName: names,
            CustomerSurname: snames,
            City: city,
            Age: age,
            Email: user.email,
            Password: "123456789",
            Phone: phone,
            Gender: gender,
            Adress: adres
        })
       /* dispatch(profile({
            CustomerName: names,
            CustomerSurname: snames,
            City: city,
            Age: age,
            Email: user.email,
            Password: "123456789",
            Phone: phone,
            Gender: gender,
            Adress: adres
        }))*/
        console.log('Profil bilgileri:' + nuser.CustomerName)
        axios.post('https://localhost:44317/api/Kullanici/KullaniciEkle', nuser)
            .then(response => {
                setEklendi(response.data)
            })
        if (eklendi) {
            toast.success("Profile oluşturuldu")
            navigate('/', {
                replace: true
            })
        } else {
            toast.error("Profile oluşturulamadı bilgileri kontrol edip tekrar deneyin.")
        }

    }


    return (
        <div>
            <h3>Profil</h3>
            <form className='max-w-xl mx-auto' onSubmit={handleProfile}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adınız</Form.Label>
                    <Form.Control type="text" placeholder="name" name='names' value={names} onChange={e => setNames(e.target.value)} />
                </Form.Group>
                {names}
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Soyadınız</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='snames' value={snames} onChange={e => setSnames(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail3">
                    <Form.Label>Yaşadığınız Şehir</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='city' value={city} onChange={e => setCity(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail4">
                    <Form.Label>Yaş</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='age' value={age} onChange={e => setAge(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail5">
                    <Form.Label>Telefon Numarası</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail6">
                    <Form.Label>Cinsiyet</Form.Label>
                    <Form.Select aria-label="Default select example" name='gender' value={gender} onChange={e => setGender(e.target.value)} >
                        <option value={null} >Seçiniz</option>
                        <option value="Erkek" >Erkek</option>
                        <option value="Kadın" >Kadın</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail7">
                    <Form.Label>Adres</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Adress" name='adres' value={adres} onChange={e => setAdres(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="secondary" type="submit" disabled={!names || !snames || !city || !age || !phone || !adres || !gender} >
                    Profili Oluştur
                </Button> <span /> <span /> <span />
            </form>
        </div>
    )
}
