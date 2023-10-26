import styles from './AddProduct.module.scss'
import { useState } from 'react'
import Card from '../../card/Card'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../../firebase/config';
import { toast } from 'react-toastify';

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
        price: "",
        category: "",
        brand: "",
        desc: "",
    })


    const [uploadProgress, setUploadProgress] = useState(0)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        const storageRef = ref(storage, `bulakenya/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);

            }, 
            (error) => {
                toast.error(error.message)
            }, 
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setProduct({ ...product, imageURL: downloadURL, })
                    toast.success('Image Uploaded Successfully.')
                });
            }
        );

    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log(product);
    };


    return (
        <div className={styles.product}>
            <h2>Add New Product</h2>
            <Card cardClass={styles.card}>
                <form action="" onSubmit={handleAddProduct}>
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
                        {uploadProgress === 0 ? null :(
                            <div className={styles.progress}>
                                <div 
                                    className={styles['progress-bar']} 
                                    styles={{ width: `${uploadProgress}%`}}>
                                        {uploadProgress < 100 ? `Uploading ${uploadProgress}%` 
                                            :`Upload Complete ${uploadProgress}%`
                                        }
                                </div>
                            </div>
                        )}

                        <input 
                            type="file" 
                            accept='image/*'
                            placeholder='Product Image' 
                            required 
                            name='image'
                            onChange={(e) => handleImageChange(e)}
                        />

                        {product.imageURL === "" ? null : (
                                <input
                                    type="text"
                                    // required
                                    placeholder="Image URL"
                                    name="imageURL"
                                    value={product.imageURL}
                                    disabled
                                />
                        )}
                        
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
                                    key={category.id} 
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

                    <button className='btn btn-active text-slate-800 border border-slate-500'>Save Product</button>

                </form>
            </Card>
        </div>
    )
}

export default AddProduct
