import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import Loader from '../Loader/Loader'

function Formulario() {
    const { cart, EmptyCart, PriceTotal, IconCart } = useCartContext()
    const [id, setId] = useState(null)
    const [creandoOrden, setCreandoOrden] = useState(false)
    const [dataForm, setDataForm] = useState({
        nombre: '', email: '', telefono: ''
    })

    async function generarOrden(e) {
        e.preventDefault()
        setCreandoOrden(true)
        let orden = {}
        orden.buyer = dataForm
        orden.total = PriceTotal()
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.producto.id
            const nombre = cartItem.item.producto.nombre
            const precio = cartItem.item.producto.precio * cartItem.item.cantidad
            return { id, nombre, precio }
        })

        console.log(orden)
        const db = getFirestore()

        const orderCollection = collection(db, 'ordenes')
        addDoc(orderCollection, orden)
            .then(resp => setId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setCreandoOrden(false)
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
                creandoOrden ?
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
                            <Form onSubmit={generarOrden}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                        onChange={handleChange}
                                        required={true}
                                        id="nombre"
                                        name='nombre'
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Telefono"
                                        onChange={handleChange}
                                        required={true}
                                        id="telefono"
                                        name='telefono'
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

export default Formulario