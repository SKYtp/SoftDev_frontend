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
                    <br/>
                    <label>skin_num:</label>
                    <input type="text" name="skin_num" onChange={handleInputChange} />
                    <br/>
                    <label>rank:</label>
                    <input type="text" name="rank" onChange={handleInputChange} />
                    <br/>
                    <label>win_rate:</label>
                    <input type="text" name="win_rate" onChange={handleInputChange} />
                    <br/>
                    <label>gold:</label>
                    <input type="text" name="gold" onChange={handleInputChange} />
                    <br/>
                    <label>diamond:</label>
                    <input type="text" name="diamond" onChange={handleInputChange} />
                    <br/>
                    <label>marble:</label>
                    <input type="text" name="marble" onChange={handleInputChange} />
                    <br/>
                    <label>coupon:</label>
                    <input type="text" name="coupon" onChange={handleInputChange} />
                    <br/>
                    <label>price:</label>
                    <input type="text" name="price" onChange={handleInputChange} />
                    <br/>
                    <label>hero_num:</label>
                    <input type="text" name="hero_num" onChange={handleInputChange} />
                    <br/>
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
