import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        direccion: ''
    })

    const handleConfirm = (event) => {
        event.preventDefault()

        const { name, phone, email, direccion } = formData

        onConfirm(name, phone, email, direccion)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleConfirm} className='form'>
                <label className='form-label'>                    
                    <input
                        className='form-input'
                        type="text"
                        name="name"
                        placeholder='Nombre'
                        value={formData.name}
                        onChange={handleInputChange} />
                </label>
                <label className='form-label'>                    
                    <input
                        className='form-input'
                        type="text"
                        name="phone"
                        placeholder='Teléfono'
                        value={formData.phone}
                        onChange={handleInputChange} />
                </label>
                <label className='form-label'>
                    
                    <input
                        className='form-input'
                        type="text"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange} />
                </label>
                <label className='form-label'>
                    
                    <input
                        className='form-input'
                        type="text"
                        name="direccion"
                        placeholder='Dirección'
                        value={formData.direccion}
                        onChange={handleInputChange} />
                </label>
                <button className='form-button' type="submit">GENERAR ORDEN DE COMPRA</button>
            </form>
        </div>
    )
}

export default CheckoutForm