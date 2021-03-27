import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key } = props.product;
    return (
        <div className="review-item">
            <h4 className="item-header">{name}</h4>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.removeProduct(key)} className="buy-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;