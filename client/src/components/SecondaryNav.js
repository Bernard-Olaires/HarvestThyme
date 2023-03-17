import React, {useContext}from 'react';
import './SecondaryNav.css'
import useAuth from '../hooks/useAuth';
import cart from '../images/cart-icon.svg'
import { cartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';


const SecondaryNav = (props) => {
    
    const {auth} = useAuth();
    const { openCart, cartQuantity} = useContext(cartContext)
    const navigate = useNavigate()
    const logout = useLogout()

    const signOut = async ()=>{
        await logout();
    }

    return (
        <div className='container'>
            <div className='sNav-wrapper'>
                {
                    auth?.user?.firstName? <h3>Welcome {auth.user.firstName}!</h3>:null
                }

                    {
                        auth?.user?._id
                            ? auth?.user?.role==='user'
                                ?
                                <div className='cart-wrapper'>
                                    <button onClick={signOut}>Logout</button>
                                    <button onClick={()=>navigate('/userOrders')}>My Orders</button>
                                    <button className='cart-btn' onClick={openCart}><img src={cart} alt="cart" /><div className='cart-items'>{cartQuantity}</div></button>
                                </div>
                                :
                                <div>
                                    <button onClick={()=>navigate('/shop/add')}>Add Product</button>
                                    <button onClick={()=>navigate('/services/add')}>Add Service</button>
                                    <button onClick={()=>navigate('/orders')}>Orders</button>
                                    <button onClick={signOut}>Logout</button>
                                </div>
                            :
                            <button onClick={()=>navigate('/login')}>Login</button>
                    }

                
            </div>
        </div>
    );
}

export default SecondaryNav;
