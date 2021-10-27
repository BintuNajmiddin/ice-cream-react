import { useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";


const AddIceCream = () => {

    let history = useHistory();



    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();

    const newObj = {
        iceCream: {
            id:image,
            name,
        },
        quantity : quantity,
        price,
        description
    };

    fetch('http://localhost:8000/menuData', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(newObj)   
    }).then(response => {
        console.log('');


        toast.success('🦄Post qo`shildi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            });


            history.push('/')

    });

        setImage('');
        setName('');
        setPrice('');
        setQuantity('');
        setDescription('');

}
    return(
        <div className="pageContent">
            <div className="container">
                <div className="add-ice">
                <h2>Add post</h2>
                <form onSubmit={handleSubmit}>
                    <label for="image">Choose image  </label>
                    <input type="number" id="image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                    <br/>
                    <label for="name">Choose name  </label>
                    <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <br/>
                    <label for="price">Price  </label>
                    <input type="number" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                    <br/>
                    <label for="quantity">Quantity  </label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
                    <br/>
                    <label for="description">Description  </label>
                    <input type="text" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                   <button className="add-btn" type="submit">Add post </button>
                </form>
                </div>
            </div>
        </div>
    );
}


export default AddIceCream;