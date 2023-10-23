import { Card } from 'react-daisyui';
import styles from './AddProduct.module.scss'
import { useState } from 'react'

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
        <Card>

        </Card>
    </div>
  )
}

export default AddProduct
