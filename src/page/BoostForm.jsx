import React, { useState } from 'react';
import WebNav from '../component/Nav';

function BoostForm() {
  const [formData, setFormData] = useState({
    name: '',
    p_email: '',
    surname: '',
    birth: '',
    email: '',
    tel: '',
    address: '',
    province: '',
    postcode: '',
    facebook: '',
    line: '',
    rank: '',
    star_price: '',
    m_rank: '',
    winrate: '',
    image_c: null,
    image_p: null,
    image_f: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('/boost', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle success as needed
      } else {
        console.error('HTTP Error:', response.status);
        // Handle the error
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      // Handle the error
    }
  };

  return (
    <div>
        <WebNav/>
      <h2>Upload Boost Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>P Email:</label>
          <input
            type="text"
            name="p_email"
            value={formData.p_email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other form fields */}
        <div>
          <label>Card Image:</label>
          <input
            type="file"
            name="image_c"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label>Person Image:</label>
          <input
            type="file"
            name="image_p"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label>Feature Image:</label>
          <input
            type="file"
            name="image_f"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BoostForm;
