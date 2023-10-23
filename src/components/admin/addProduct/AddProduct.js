import { Card } from 'react-daisyui';
import styles from './AddProduct.module.scss'
import { useState } from 'react'

const categories = [
    { id: 1, name: "Laptop"},
    { id: 2, name: "Electronics"},
    { id: 3, name: "Fashion"},
    { id: 4, name: "Phone"},
]

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        imageURL: "",
        price: null,
        category: "",
        brand: "",
        desc: "",
    })

    const handleInputChange = (e) => {};
    const handleImageChange = (e) => {};


    return (
        <div className={styles.product}>
            <h1>Add New Product</h1>
            <Card cardClass={styles.card}>
                <form action="">
                    <label htmlFor="">Product Name:</label>
                    <input 
                        type="text" 
                        placeholder='Product Name' 
                        required 
                        name='name' 
                        value={product.name}
                        onChange={(e) => handleInputChange(e)}
                    />

                    <label htmlFor="">Product Image:</label>
                    <Card cardClass={styles.group}>
                        <div className={styles.progress}>
                            <div className={styles['progress-bar']} styles={{ width: "50%" }}>Uploading 50%</div>
                        </div>
                        <input 
                            type="file" 
                            accept='image/*'
                            placeholder='Product Image' 
                            required 
                            name='image'
                            value={product.imageURL} 
                            onChange={(e) => handleImageChange(e)}
                        />
                        <input 
                            type="text" 
                            required 
                            name='imageURL' 
                            disabled 
                        />
                    </Card>

                    <label htmlFor="">Product Price:</label>
                    <input 
                        type="number" 
                        placeholder='Product Price' 
                        required 
                        name='price' 
                        value={product.price}
                        onChange={(e) => handleInputChange(e)}
                    />

                    <label htmlFor="">Product Category</label>
                    <select 
                        required 
                        name="category" 
                        value={product.category}
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value="" disabled>-- choose product category --</option>
                        {categories.map((category) => {
                            return (
                                <option 
                                    key={categories.id} 
                                    value={category.name}>
                                        {category.name}
                                </option>
                            )
                        })}
                    </select>

                    <label htmlFor="">Product Company / Brand:</label>
                    <input 
                        type="text" 
                        placeholder='Product Brand' 
                        required 
                        name='brand' 
                        value={product.brand}
                        onChange={(e) => handleInputChange(e)}
                    />

                    <label htmlFor="">Product Description</label>
                    <textarea 
                        required 
                        name="desc" 
                        value={product.desc} 
                        cols="30" 
                        rows="10"
                        onChange={(e) => handleInputChange(e)}
                    >
                    </textarea>

                    <button className='btn btn-primary'>Save Product</button>

                </form>
            </Card>
        </div>
    )
}

export default AddProduct
