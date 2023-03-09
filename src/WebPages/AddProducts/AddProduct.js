import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const addName = useRef();
    const addText = useRef();
    const addPriceOne = useRef();
    const addPriceTwo = useRef();
    const addImage= useRef();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = addName.current.value;
        const priceOne = addPriceOne.current.value;
        const priceTwo = addPriceTwo.current.value;
        const image = addImage.current.value;
        const description = addText.current.value;
        const totalAdd = { name, priceOne, priceTwo, image, description };
        console.log(totalAdd);
        fetch("http://localhost:5000/add-product", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(totalAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Added Successfully !!",
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset();
            }
          });
      };
    return (
        <div>
            <h1>This is Add Product</h1>
            <div className="addProduct-image">
      <h1 className="pt-5"> Add Product</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={addName}
          placeholder="Product Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addPriceOne}
          placeholder="Previous Price"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addPriceTwo}
          placeholder="Present Price"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addImage}
          placeholder="Product Image or Url"
          required
        />
        <br />
        <br />
        <textarea
          placeholder="Short Description"
          id=""
          ref={addText}
          name=""
          rows=""
          cols=""
        ></textarea>
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Add Product
        </Button>
      </form>
    </div>
        </div>
    );
};

export default AddProduct;