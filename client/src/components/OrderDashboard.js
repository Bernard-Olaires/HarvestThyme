import React, {useEffect, useState} from 'react';
import OrderCard from './OrderCard';
import axios from 'axios'

const OrderDashboard = () => {
    const [orders, setOrders] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allOrders')
            .then(res=>{
                setOrders(res.data)
                setLoaded(true)
            })
            .catch(err=>console.log(err))
    },[])

    const deleteOrder = (id) =>{
        axios.delete(`http://localhost:8000/api/deleteOrder/${id}`, {withCredentials:true})
            .then(res=>{
                console.log(res)
                setOrders(orders.filter(o=> o._id !==id))
            })
            .catch(err=>console.log(err))
    }
    return (
        <div className='container'>
            {loaded &&
                orders.map(order=>(
                        <OrderCard key={order.id} order={order} deleteOrder={deleteOrder}/>
                ))
            }
        </div>
    );
}

export default OrderDashboard;
