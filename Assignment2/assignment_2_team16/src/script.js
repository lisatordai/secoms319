
import React, { useState, useEffect } from 'react';





const Header = () => {
  return (
    <header data-bs-theme="dark">
      <div className="collapse text-bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4>About</h4>
              <p className="text-body-secondary">This is our plant shop we hope you like it!
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4>Contact Us</h4>

              <ul className="list-unstyled">
                <li className="text-white">You can reach us at</li>
                <li><a href="#" className="text-white">ltordai@iastate.edu</a></li>
                <li><a href="#" className="text-white">jayaed16@iastate.edu</a></li>
              </ul>

              <button
                type="button"
                className="btn btn-primary"
                >
                Checkout
                </button>
              <div class ="padding">
              <button
                type="button"
                className="btn btn-primary"
                >
                Checkout
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2"
              viewBox="0 0 24 24">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>Album</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
            aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
    return (
      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">&copy; Lisa and Jaya</p>
      </footer>
    );
  };

  const Content = ({ page, changeView }) => {
        // Define state variables for plant data and cart items
        const [plants, setPlants] = useState([]);
        const [cartItems, setCartItems] = useState([]);

        // Fetch plant data when component mounts
        const [data, setData] = useState(null);

        useEffect(() => {
          fetch('./Plants.json')
            .then(response => response.json())
            .then(plants => {
              console.log(plants); // Log the fetched data
              setPlants(plants);
            });
        }, []);
        //functions
        function handleAddToCart(PlantName, price) {
            let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
            clickedItems.push({ PlantName, price });
            sessionStorage.setItem('clickedItems', JSON.stringify(clickedItems));
            console.log(`Clicked item: ${PlantName}, Price: $${price}.00`);
        }

        function displayClickedItems() {
            let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
            let message = "Cart:\n";
            clickedItems.forEach(item => {
                message += `Plant: ${item.PlantName}, Price: $${item.price}.00\n`;
            });
                alert(message);
        }
        if (!Array.isArray(plants.Plant)) {
          return <div>Error: plants.Plant is not an array</div>;
        }
        
        let content;// no idea what this does
    switch (page) {
      case 'home':
        content =   <div>
                      <div class="padding">
                        <div id="plant-container" className="row row-cols-1 row-cols-md-3 g-4">
                            {plants.Plant.map((plant, index) => (
                                <div key={index} className="col">
                                    <div className="card h-100">
                                      <img src={plant.url} className="card-img-top" alt={plant.alt} />
                                      <div className="card-body">
                                          <h5 className="card-title">{plant.Plantname}</h5>
                                          <p className="card-text">{plant.bio}</p>
                                          <p className="card-text">Price: ${plant.price}.00</p>
                                      <button
                                          type="button"
                                          className="btn btn-primary"
                                          onClick={() => handleAddToCart(plant.Plantname, plant.price)}>
                                          Add to Cart
                                      </button>
                                      </div>
                                    </div>
                                  </div>
                
                            ))}
                        </div>
                        <div class = 'padding'>
                        <button type="button" className="btn btn-primary btn-lg btn-block w-100" onClick={displayClickedItems}>
                          Show Cart
                        </button>
                        </div>
                      </div>;
                    </div>
        break;
      
      case 'Cart':
            content = (
              <div>
                <div className="col-md-7 col-lg-8">
                  <h4 className="mb-3">Billing address</h4>
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
          
                      <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
          
                      <div className="col-12">
                        <label htmlFor="username" className="form-label">Username</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text">@</span>
                          <input type="text" className="form-control" id="username" placeholder="Username" required />
                          <div className="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                      </div>
          
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>
          
                      <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
          
                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                      </div>
          
                      <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
          
                      <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>IA</option>
                          <option>IL</option>
                          <option>MN</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>
          
                    <hr className="my-4" />
          
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                        <small className="text-body-secondary">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
          
                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                    <div className = "padding">
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                    </div>
                  </form>
                </div>
              </div>
            );
            break;
       
      case 'Summary':
        content = <div>Contact Page Content</div>;
        break;
      default:
        content = <div>Default Content</div>;
    }
  
    return <div>{content}</div>;
  };
  export { Header, Footer, Content };

