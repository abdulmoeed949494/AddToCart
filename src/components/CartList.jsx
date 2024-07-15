import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img className='border-2 border-gray-400' src={cartItem.url} width={40} ></img>
                            <span className='text-green-600'> {cartItem.name} </span>
                            <button className='text-red-600'
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? { ...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                })
                                setCART(_CART)
                             }}
                            >-</button>
                            <span> {cartItem.quantity}  </span>
                            <button className='text-green-700'
                             onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? { ...item, quantity : item.quantity + 1 } : item
                                })
                                setCART(_CART)
                             }}
                            >+</button>
                            <span className='text-red-600'>Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p className='text-blue-400 '>Total: <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                    // cart.map(item => item.price).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default CartList;