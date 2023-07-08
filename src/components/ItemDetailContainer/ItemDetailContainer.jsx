import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc, QuerySnapshot } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)
        getDoc(productRef)
            .then(querySnapshot => {
                console.log(querySnapshot)
                const fields = querySnapshot.data()
                const productAdapted = { id: querySnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if (loading) {
        return (
            <div className='cargando'>
                <h1>CARGANDO</h1>
            </div>
        )}

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer