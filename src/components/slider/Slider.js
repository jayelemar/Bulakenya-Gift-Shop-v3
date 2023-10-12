import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Slider = () => {
        // console.log(files[0]);
        const [selectedImage, setSelectedImage] = useState(null);

        const imageUrl = 'https://res.cloudinary.com/dbjn51v3x/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697063976/hz5egbemlrpegazajq0v.png';

        const handleImageChange = (e) => {
            const file = e.target.files[0];
            setSelectedImage(file);
        };

        const handleImageUpload = async () => {
            if (selectedImage) {
                const formData = new FormData();
                formData.append('file', selectedImage);
                formData.append('upload_preset', 'a6i8f07s'); // Replace with your Cloudinary upload preset

                try {
                    const response = await axios.post('https://api.cloudinary.com/v1_1/dbjn51v3x/image/upload', formData);
                    console.log('Image uploaded:', response.data);
                  // Handle the Cloudinary response as needed (e.g., save the URL to your database).
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        };

        return (
            <div>
                <input type="file" onChange={handleImageChange} />
                <button onClick={handleImageUpload}>Upload Image</button>

                <img src={ imageUrl } alt="Your Image" style={{ width: 200 }} />
            </div>
        );
      };

export default Slider
