import React from 'react'

export default function AddProduct() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        fetch('http://localhost:8080/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Create a Product</h3>
            <div className="form-group mb-2">
                <label class='form-label' htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group mb-2">
                <label class='form-label' htmlFor="price">Price</label>
                <input type="number" className="form-control" id="price" name="price" />
            </div>
            <div className="form-group mb-2">
                <label class='form-label' htmlFor="stock">Stock</label>
                <input type="number" className="form-control" id="stock" name="stock" />
            </div>
            <div className="form-group mb-2">
                <label class='form-label' htmlFor="category">Category</label>
                <select className="form-control" id="category" name="category">
                    <option value="phone">Phone</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label class='form-label' htmlFor="description">Description</label>
                <textarea className="form-control" id="description" name="description" />
            </div>
            <div className="form-group mb-2">
                <label class='form-label' htmlFor="image">Image</label>
                <input type="file" className="form-control" id="image" name="image" />
            </div>
            <div className="form-group mb-2">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

