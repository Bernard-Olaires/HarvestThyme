import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Shop.css'
import ProductCard from '../components/ProductCard';
import { Col, Row } from 'react-bootstrap';




const Shop = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const removeProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`, {withCredentials:true})
            .then(res=>{
                console.log(res)
                setProducts(products.filter(p=> p._id !==id))
            })
            .catch(err=>console.log(err))
    } 
    return (
        <div>
            <div className='container p-3'>
                <Row xs={1} md={2} lg={3}>

                    {
                        products.map(product => (
                            <Col key={product._id}>
                                <ProductCard product={product} removeProduct={removeProduct}/>
                            </Col>
                            ))
                    }
                
                </Row>
            </div>
        </div>
    );
}

export default Shop;

