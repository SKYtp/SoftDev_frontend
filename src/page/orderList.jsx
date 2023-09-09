import React, { useEffect, useState } from 'react';
import WebNav from '../component/Nav';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch orders data when the component mounts
        fetch('http://localhost:3333/orders')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'ok') {
                    // Orders data was fetched successfully
                    setOrders(data.orders);
                } else {
                    // Error occurred while fetching data
                    setErrorMessage(data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setErrorMessage('An error occurred while fetching data.');
            });
    }, []);

    return (
        <div>
            <WebNav/>
            <h2>Orders List</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order Name: {order.order_name}
                        {/* Display the image using the provided URL */}
                        <img src={order.image} alt={`Image for ${order.order_name}`} />
                        {/* Display other order details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderList;
