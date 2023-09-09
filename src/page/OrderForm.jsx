import React, { useState } from 'react';
import WebNav from '../component/Nav';

function OrderForm() {
    const [orderData, setOrderData] = useState({
        order_name: '',
        skin_num: '',
        rank: '',
        win_rate: '',
        gold: '',
        diamond: '',
        marble: '',
        coupon: '',
        price: '',
        hero_num: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderData({ ...orderData, [name]: value });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setOrderData({ ...orderData, image: imageFile });
    };

    const handleSubmit = () => {
        const formData = new FormData();
        for (const key in orderData) {
            formData.append(key, orderData[key]);
        }

        fetch('http://localhost:3333/order', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <WebNav></WebNav>
            <h2>Order Form</h2>
            <form>
                <div>
                    <label>Order Name:</label>
                    <input type="text" name="order_name" onChange={handleInputChange} />
                </div>
                {/* Add similar input fields for other order details */}
                <div>
                    <label>Upload Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit Order
                </button>
            </form>
        </div>
    );
}

export default OrderForm;
