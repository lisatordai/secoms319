import "./App.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
import { Categories } from "./Categories";
import { Methods } from "./Methods";


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
                                alt="Product Image"
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

// const App = () => {


//   return (
//     <div className="flex fixed flex-row">
//       <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
//         <img className="w-full" src={logo} alt="Sunset in the mountains" />
//         <div className="px-6 py-4">
//           <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog App </h1>
//           <div className="py-10">
//             {Categories ? <p className='text-amber-500'>Views: </p> : ''}
//             {Categories.map((tag) => (
//               <button
//                 key={tag}
//                 className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
//                 onClick={() => {
//                   handleClick(tag);
//                 }}
//               >
//                 {tag}
//               </button>

//             ))}
//           </div>
//           <div className="py-10">
//             {Methods ? <p className='text-amber-500'>Options: </p> : ''}
//             {Methods.map((view) => (
//               <button
//                 key={view}
//                 className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
//                 onClick={() => {
//                   handleMethod(view);
//                 }}
//               >
//                 {view}
//               </button>

//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="ml-5 p-10 xl:basis-4/5">
//         {console.log("Before render:", ProductsCategory.length)}
//         {render_products(ProductsCategory)}
//       </div>
//     </div>
//   );
// };

// export default App;



// function App() {
//   return (
//     <div >
//       {Products[0].description}
//       <img src={Products[0].image} />
//     </div>
//   );
// }
// function getMethod() {
//   fetch('http://localhost:8081/listProducts')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       var container = document.getElementById("showData");
//       container.innerHTML = JSON.stringify(data, undefined, 2);
//       loadProducts(data);
//     })
// };

// function loadProducts(product) {
//   var mainContainer = document.getElementById("goodmovies");
//   for (var i = 0; i < product.length; i++) {
//     let name = product[i].name;
//     let price = product[i].price;
//     let description = product[i].description;
//     let imageUrl = product[i].imageUrl;
//     let div = document.createElement("div");
//     div.innerHTML = `
//   <h3>${name}</h3>
//   ${price} <br>
//   ${description} <br>
//   <img src=${imageUrl} width="200"> <br> <br>
//   `;
//     mainContainer.appendChild(div);
//     console.log(div);
//   }
// }

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

    function handleClick(tag) {
        console.log("Step 4: in handleClick", tag);
        let filtered = ProductsCategory.filter((cat) => cat.category === tag);
        setProductsCategory(filtered);
        console.log("Step 5:", ProductsCategory.length);
    }
    //   function handleMethod(view) {
    //     console.log("Step 4: in handleClick", view);

    //     let filtered = ProductsCategory.filter((cat) => cat.id === id);
    //     setProductsCategory(filtered);
    //     console.log("Step 5:", ProductsCategory.length);
    //   }

    let content;
//ALL
    switch (props.page) {
        case 'page1':
            content = (
                <div>
                    <div className="flex fixed flex-row">
                        <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
                            <img className="w-full" src={logo} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog App </h1>

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
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 p-10 xl:basis-4/5">
                            {console.log("Before render:", ProductsCategory.length)}
                            {render_products(ProductsCategory)}
                        </div>
                    </div>
                </div>
            );
            break;
//ADD
        case 'Page2':
            content = (
                <div>
                    <div>
                        <div className="flex fixed flex-row">
                            <div className="h-screen bg-red-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
                                <img className="w-full" src={logo} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <h1 className="text-3xl mb-2 font-bold text-amber-500"> Assignment 3 <br></br>Product Catalog App </h1>

                                </div>
                            </div>
                            <div className="ml-5 p-10 xl:basis-4/5">
                                {console.log("Before render:", ProductsCategory.length)}
                                {render_products(ProductsCategory)}
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
//UPDATE
        case 'page3':
            content = (
                <div>
                    <p>
                        page 3
                    </p>
                </div>
            );
            break;
//DELETE
        case 'page4':
            content = (
                <div>
                    <p>
                        page 4
                    </p>

                </div>
            );
            break;

        case 'page5':
            content = (
                <div>
                    <p>
                        page 5
                    </p>
                </div>

            );
            break;

        default:
            content = <div>Default Content</div>;
    }

    return <div>{content}</div>;
};
export { Content };