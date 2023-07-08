import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import './Checkout.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const navigate = useNavigate()

    const createOrder = async (name, phone, email, direccion) => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name,
                phone,
                email,
                direccion
            },
            items: cart,
            total
        }

        try {
            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)

            const outOfStock = []

            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const ordersRef = collection(db, 'orders')

                const { id } = await addDoc(ordersRef, objOrder)

                alert("Su orden fue generada correctamente bajo al código: " + id)
                clearCart()
                navigate('/')

            } else {
                alert("No hay stock")
            }
        } catch (error) {
            console.log(error)
            alert("Error al generar la orden")
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="cargando">
                <h1>Se está generando su orden</h1>
            </div>
        )
    }

    return (
        <div className="checkout-container" >
            <p className="checkout-texto">Complete el siguiente formulario con sus datos para generar la orden de compra</p>
            <div className="checkout-formulario">
                <CheckoutForm onConfirm={createOrder} />
            </div>
        </div>
    )
}

export default Checkout 