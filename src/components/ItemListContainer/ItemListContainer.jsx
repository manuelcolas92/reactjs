import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting, subGreeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(productsRef)
            .then(querySnapshot => {
                console.log(querySnapshot)
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if (loading) {
        return (
            <div className='cargando'>
                <h1>CARGANDO</h1>
            </div>
        )
    }

    return (
        <>
            <div className='greeting-container'>
                <h1 className='greeting'>{greeting}</h1>
                <h2 className='subGreeting'>{subGreeting}</h2>
            </div>
            <div className='item-list-container'>
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer