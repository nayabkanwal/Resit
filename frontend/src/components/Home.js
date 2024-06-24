import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const cartlength = useSelector(state => state.cart)
    return (
        <div className='bg-black text-white font-semibold p-2'>
            <ul className=' flex'>
                <Link to={'/home'} className='m-2'>Home</Link>
                <Link to={'/cart'} className='m-2'>Cart Items : {cartlength.length}</Link>
            </ul>
        </div>
    )
}

export default Navbar
