import "./App.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";


const render_products = (ProductsCategory) => {
    return (
        <div className='category-section fixed'>
            <h2 className="text-3xl font-extrabold tracking-tight text-amber-500 category-title">
                Products ({ProductsCategory.length})
            </h2>
            <div
                className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4"
                style={{ maxHeight: '800px', overflowY: 'scroll' }}
            >
                {/* Loop Products */}
                {ProductsCategory.map((product, index) => (
                    <div key={index} className="group relative shadow-lg">
                        <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hoover:opacity-75 lg:h-60 lg:aspect-none">
                            <img
                                alt="Product"
                                src={product.image}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="flex justify-between p-3">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>{product.title}</span>
                                    </a>
                                    <p>Tag - {product.category}</p>
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-green-600">${product.price}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

const Content = (props) => {

    console.log("Step 1: Fetch Products from API");
    const [ProductsCategory, setProductsCategory] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:8081/listProducts");
                const data = await response.json();
                setProductsCategory(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    function updateProductPrice() {
        var productId = document.getElementById("productIdInput").value;
        var newPrice = document.getElementById("newPriceInput").value;

        fetch("http://localhost:8081/updateProductPrice", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                productId: productId,
                newPrice: newPrice,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

            })
            .catch(error => console.error("Error:", error));
    }


    function handleButtonClick() {
        // Get the input element
        var inputElement = document.getElementById("integerInput");
        // Get the value entered by the user
        var inputValue = inputElement.value;
        // Convert the input value to an integer
        var integerInput = parseInt(inputValue);
        // Call your function with the integer parameter
        deleteMethod(integerInput);
    }

    function deleteMethod(id) {
        console.log("Lets do Delete ....", id);
        fetch("http://localhost:8081/deleteProduct", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                var container = document.getElementById("showData");
                container.innerHTML = JSON.stringify(data);
            })
            .catch((err) => console.log("Error:" + err));
    }

    function postProduct() {
        const productData = {
            id: parseInt(document.getElementById('idInput').value),
            title: document.getElementById('titleInput').value,
            price: parseFloat(document.getElementById('priceInput').value),
            description: document.getElementById('descriptionInput').value,
            category: document.getElementById('categoryInput').value,
            image: document.getElementById('imageInput').value,
            rating: {
                rate: parseFloat(document.getElementById('ratingRateInput').value),
                count: parseInt(document.getElementById('ratingCountInput').value)
            }
        };

        fetch("http://localhost:8081/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productData),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Product added successfully:", data);
            })
            .catch(error => {
                console.error("Error adding product:", error);
            });
    }
    let content;
    //ALL
    switch (props.page) {
        case 'page1':
            content = (
                <div>
                    <div className="min-h-screen">
                        <div className="flex fixed flex-row">
                            <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
                                <img className="w-full" src={logo} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog</h1>

                                    <div className="py-10">
                                        <button
                                            className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                            onClick={() => { props.setView('page1') }}>View All
                                        </button>
                                        <button
                                            className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                            onClick={() => { props.setView('page2') }}>Add
                                        </button>
                                        <button
                                            className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                            onClick={() => { props.setView('page3') }}>Update
                                        </button>
                                        <button
                                            className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                            onClick={() => { props.setView('page4') }}>Delete
                                        </button>
                                        <button
                                            className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                            onClick={() => { props.setView('page5') }}>Students
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-5 p-10 xl:basis-4/5 overflow-y-auto" style={{ paddingBottom: '20px' }}>

                                {console.log("Before render:", ProductsCategory.length)}
                                {render_products(ProductsCategory)}
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        //ADD
        case 'page2':
            content = (
                <div>
                    <div className="flex fixed flex-row">
                        <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '40%' }}>
                            <img className="w-full" src={logo} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog</h1>

                                <div className="py-10">
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page1') }}>View All
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page2') }}>Add
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page3') }}>Update
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page4') }}>Delete
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page5') }}>Students
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 p-10 xl:basis-4/5">


                            <form id="productForm" style={{ maxWidth: '100%' }}>
                                <label htmlFor="idInput">ID:</label>
                                <input type="text" id="idInput" required />

                                <label htmlFor="titleInput">Title:</label>
                                <input type="text" id="titleInput" required />

                                <label htmlFor="priceInput">Price:</label>
                                <input type="number" id="priceInput" required />

                                <label htmlFor="descriptionInput">Description:</label>
                                <textarea id="descriptionInput" required></textarea>

                                <label htmlFor="categoryInput">Category:</label>
                                <input type="text" id="categoryInput" required />

                                <label htmlFor="imageInput">Image URL:</label>
                                <input type="text" id="imageInput" required />

                                <label htmlFor="ratingRateInput">Rating Rate:</label>
                                <input type="number" id="ratingRateInput" step="0.1" required />

                                <label htmlFor="ratingCountInput">Rating Count:</label>
                                <input type="number" id="ratingCountInput" required />
                                <button type="button" onClick={postProduct} className="bg-green-500 text-white px-4 py-2 rounded">
                                    Save Product
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            );
            break;
        //UPDATE
        case 'page3':
            content = (
                <div>
                    <div className="flex fixed flex-row">
                        <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '40%' }}>
                            <img className="w-full" src={logo} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog</h1>

                                <div className="py-10">
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page1') }}>View All
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page2') }}>Add
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page3') }}>Update
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page4') }}>Delete
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page5') }}>Students
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 p-10 xl:basis-4/5">

                            <form id="updateProductForm">
                                <label htmlFor="productIdInput">Product ID:</label>
                                <input type="text" id="productIdInput" required />

                                <label htmlFor="newPriceInput">New Price:</label>
                                <input type="number" id="newPriceInput" required />

                                <button type="button" onClick={updateProductPrice} className="bg-green-500 text-white px-4 py-2 rounded">Update Price</button>
                            </form> </div>
                    </div>
                </div>
            );
            break;
        //DELETE
        case 'page4':
            content = (
                <div>
                    <div className="flex fixed flex-row">
                        <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '43.5%' }}>
                            <img className="w-full" src={logo} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog</h1>

                                <div className="py-10">
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page1') }}>View All
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page2') }}>Add
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page3') }}>Update
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page4') }}>Delete
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page5') }}>Students
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 p-10 xl:basis-4/5">
                            <label htmlFor="integerInput">Product ID to Delete:</label>
                            <input type="number" id="integerInput" />
                            <button onClick={handleButtonClick}>Delete</button>


                        </div>
                    </div>
                </div>
            );
            break;

        case 'page5':
            content = (
                <div>
                    <div className="flex fixed flex-row">
                        <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '40%' }}>
                            <img className="w-full" src={logo} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog</h1>

                                <div className="py-10">
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page1') }}>View All
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page2') }}>Add
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page3') }}>Update
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page4') }}>Delete
                                    </button>
                                    <button
                                        className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
                                        onClick={() => { props.setView('page5') }}>Students
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 p-10 xl:basis-4/5">
                            <div className="header">Students Information</div>

                            <div className="student">
                                <div className="student-name">Lisa Tordai</div>
                                <div className="student-email">Email: ltordai@iastate.edu</div>
                            </div>

                            <div className="student">
                                <div className="student-name">Jaya Davis</div>
                                <div className="student-email">Email: jayaed16@iastate.edu</div>
                            </div>
                        </div>
                    </div>
                </div>

            );
            break;

        default:
            content = <div>Default Content</div>;
    }

    return <div>{content}</div>;
};
export { Content };