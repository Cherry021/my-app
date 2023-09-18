import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice';
export const Product = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(add(product));
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result));
    },[])

const cards = products.map(product => (
<div className='col-lg-3 col-md-4 col-sm-6' style={{padding:'10px'}}>
    <Card style={{ width: '18rem' }}>
        <Card.Img src={product.image} />
        <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
            {product.description} <br />
            <b>Rs: {product.price}</b>
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)} > Add to Cart </Button>
        </Card.Body>
    </Card>
</div>
))

  return (
    <>
    <div className='row'>
        {cards}
    </div>
    </>
  )
}
