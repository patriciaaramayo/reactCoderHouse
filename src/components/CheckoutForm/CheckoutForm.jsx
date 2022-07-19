import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getFirestore} from "firebase/firestore"
import Loader from '../Loader/Loader'

function CheckoutForm() {
    const { cart, EmptyCart, PriceTotal } = useCartContext()
    const [id, setId] = useState(null)
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [dataForm, setDataForm] = useState({
        name: '', email: '', phone: ''
    })

    async function generateOrder(e) {
        e.preventDefault()
        setCreatingOrder(true)
        let order = {}
        order.buyer = dataForm
        order.total = PriceTotal()
        order.items = cart.map(cartItem => {
            const id = cartItem.item.product.id
            const name = cartItem.item.product.name
            const price = cartItem.item.product.price * cartItem.item.quantity
            return { id, name, price }
        })

        const db = getFirestore()

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
            .then(resp => setId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setCreatingOrder(false)
                EmptyCart()
            })
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {
                creatingOrder ?
                    <div className="text-center">
                        <h1>Procesando su orden...</h1>
                        <Loader />
                    </div>
                    :
                    id ?
                        <div className="text-center">
                            <h2>Gracias por su compra</h2>
                            <h3> Su ID de compra es {id} </h3>
                        </div>
                        :
                        <div className="container py-5">
                            <h2>Completar Formulario</h2>
                            <Form onSubmit={generateOrder}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                        onChange={handleChange}
                                        required={true}
                                        id="name"
                                        name='name'
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Telefono"
                                        onChange={handleChange}
                                        required={true}
                                        id="phone"
                                        name='phone'
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        required={true}
                                        id="email"
                                        name='email'
                                    />
                                </Form.Group>

                                <Button variant="success" type="submit">
                                    REALIZAR PEDIDO
                                </Button>
                            </Form>
                        </div>
            }
        </>
    )
}

export default CheckoutForm