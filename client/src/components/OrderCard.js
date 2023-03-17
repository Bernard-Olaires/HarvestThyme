import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios'
import { formatCurrency } from '../utilities/formatCurrency';
import useAuth from '../hooks/useAuth';

const OrderCard = (props) => {
    const {order, deleteOrder} = props;
    const [products, setProducts] = useState([]);
    const {auth} = useAuth();

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Card className='height-100'>
                <Card.Header>
                    <h2>{order.firstName}'s Order</h2>
                    <p>{order.email}</p>
                </Card.Header>
                <Card.Body className='d-flex flex-column'>
                    <p>Pick-Up: {order.pickUp}</p>
                    {
                        order.items.map(item=>{
                            const product = products.find(i=> i._id===item.id)
                            return(
                                <div key={item.id}>
                                    <p>{product?.name}</p>
                                    <p>{item.quantity}</p>
                                </div>
                            )
                        })
                    }
                    <p>Order Total: {formatCurrency(order.total)}</p>
                    <p>Status: {order.state}</p>
                    {
                        auth?.user?.role === 'user'
                            ?<button className='btn btn-danger m-2' onClick={()=>deleteOrder(order._id)}>Cancel Order</button>
                            :<div>
                                <button className='btn btn-danger m-2' onClick={()=>deleteOrder(order._id)}>Close Order</button>
                            </div>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default OrderCard;
