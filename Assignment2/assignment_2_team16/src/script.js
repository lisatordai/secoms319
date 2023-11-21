
import React, { useState, useEffect } from 'react';



import items from "./Plants.json"

const Header = (props) => {

  return (
    <header data-bs-theme="dark">
      <div className="collapse text-bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4>About</h4>
              <p className="text-body-secondary">This is our plant shop we hope you like it!
              </p>
              <div class="paddingSM">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => { props.setView('home') }}
                >
                  Find Plants
                </button>
              </div>
              <div class="paddingSM">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => { props.setView('Cart') }}
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4>Contact Us</h4>

              <ul className="list-unstyled">
                <li className="text-white">You can reach us at</li>
                <li><a href="#" className="text-white">ltordai@iastate.edu</a></li>
                <li><a href="#" className="text-white">jayaed16@iastate.edu</a></li>
              </ul>

              <div class="paddingSM">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => { props.setView('Developers') }}
                >
                  Developers
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



const Content = (props) => {
  // Define state variables for plant data and cart items

  const [plants, setPlants] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
  let total = 0;
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddressName] = useState('')
  const [email, setEmailName] = useState('')
  const [CardName, setCardName] = useState('')
  const [CardNum, setCardNum] = useState('')
  const [card, setCards] = useState(items);
  const [viewCart, setViewCart] = useState(false);
  const [query, setQuery] = useState('');
  // Fetch plant data when component mounts
  const [data, setData] = useState(null);
  // const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    setQuery(e.target.value);
    const results = items.filter(eachCard => {
      if (e.target.value === "") return card;
      return eachCard.cardName.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setPlants(results);
  }
  const listCards = (plants) => {
    <div className="padding">
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
    </div>
  };
  // const arrPlant = [
  //   { name: "Calathea" }, { name: "Maranta Leuconeura" }, { name: "Dracaena Trifasciata" }, { name: "Begonia Maculata" }, { name: "Sansevieria" }, { name: "Common Houseleek" }];

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //   arrPlant.filter((plantFound) => {
  //     return arrPlant.name.match(searchInput);
  //   });
  // }
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
    setCartItems(clickedItems); // Update the cart items state
    console.log(`Clicked item: ${PlantName}, Price: $${price}.00`);
  }

  function handleRemoveFromCart(index) {
    let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
    clickedItems.splice(index, 1);
    sessionStorage.setItem('clickedItems', JSON.stringify(clickedItems));
    setCartItems(clickedItems); // Update the cart items state
  }

  function clearCart() {
    sessionStorage.removeItem('clickedItems');
    setCartItems([]);
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
  switch (props.page) {
    case 'home':
      content = (<div>

        {/* <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput} /> */}
        <div>

          <div>
            <input id="searchbar" type="search" value={query} onChange={handleSearch} />
            <button class="page_button" onClick={() => { setQuery(''); setCards(items); setViewCart(true) }}>
              Search
            </button>
          </div>
          <div>{listCards(plants)}</div>
        </div>
        <div className="padding">
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
        </div>
        <div>
          <div className="padding">
            <ul id="cart-items" className="list-group">
              {cartItems.map((item, index) => {

                return (
                  <li key={index} className="list-group-item d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button>
                    <span>{item.PlantName}:</span>
                    <strong>${item.price}.00</strong>
                  </li>
                );
              })}

            </ul>
          </div>
          <div className="padding">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block w-100"
              onClick={() => { props.setView('Cart') }}>
              Show Cart
            </button>
          </div>
        </div>
      </div>

      );
      break;

    case 'Cart':
      content = (
        <div class="padding">
          <div class="py-5 text-center">

            <img src="./images/plant_logo.png" alt="" width="100" height="100" />
            <h2>Checkout form</h2>
            <p class="lead">Below is your shopping cart</p>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-8">
                  <ul id="cart-items" className="list-group">
                    {clickedItems.map((item, index) => {
                      total += item.price;
                      return (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                          <span>Plant: {item.PlantName}:</span>
                          <strong>${item.price}.00</strong>

                        </li>
                      );
                    })}
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total:</span>
                      <strong>${total}.00</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="padding">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">

                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value={firstName} name="firstName" onChange={e => setFirstName(e.target.value)} required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value={lastName} name="lastName" onChange={e => setLastName(e.target.value)} required />
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
                  <input type="text" className="form-control" id="email" value={email} name="email" placeholder="you@example.com" onChange={e => setEmailName(e.target.value)} />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="" value={address} name="address" onChange={e => setAddressName(e.target.value)} required />
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
                  <input type="text" className="form-control" id="CardName" placeholder="" value={CardName} name="CardName" onChange={e => setCardName(e.target.value)} required />
                  <small className="text-body-secondary">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  <input type="text" className="form-control" id="CardNum" placeholder="" value={CardNum} name="CardNum" onChange={e => setCardNum(e.target.value)} required />

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
              <div className="padding">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => { props.setView('Summary') }}
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      );
      break;

    case 'Summary':

      content = <div className="container">
        <div class="padding">
          <div class="py-5 text-center">
            <img src="./images/plant_logo.png" alt="" width="100" height="100" />
            <h2>Order Summary</h2>
          </div>

          <div className="row justify-content-center">



            <div className="col-10">
              <ul id="cart-items" className="list-group">
                {clickedItems.map((item, index) => {
                  total += item.price;
                  return (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                      <span>{item.PlantName}:</span>
                      <strong>${item.price}.00</strong>

                    </li>
                  );
                })}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total:</span>
                  <strong>${total}.00</strong>
                </li>
              </ul>
            </div>
          </div>
          <div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10">
              <ul className="list-group"></ul>
              <li className="list-group d-flex justify-content-between">
                <strong>User Info: </strong>
                <span>Name: {firstName} {lastName}</span>
                <span>Email: {email}</span>
                <span>Address: {address}</span>
                <strong>Card Info: </strong>
                <span> Card Name:{CardName}</span>
                <span>Card Number: {CardNum}</span>
              </li>
            </div>
          </div>
          <div className="padding">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block w-100"
              onClick={() => { props.setView('home'); clearCart(); }}>

              Back to Shop
            </button>
          </div>
        </div>
      </div>

      break;

    case 'Developers':
      content =
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="bd-placeholder-img rounded-circle"
                width="225"
                height="300"
                src="./images/profile.jpg"
                alt="Placeholder1"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <h2 className="fw-normal">Lisa Tordai</h2>
              <p>
                I am Software Engineering Student at Iowa State University. This
                semester Fall2023 I am taking ComS363, ComS321, ComS309, SE319 and Engl314.
                During the school year, I am on part time coop with CNH Industrial as a
                software engineering intern and also work for digital Ag. as an undergraduate
                research assistant.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="bd-placeholder-img rounded-circle"
                width="225"
                height="300"
                src="./images/profile1.jpg"
                alt="Placeholder2"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <h2 className="fw-normal">Jaya Davis</h2>
              <p>
                I am a junior at Iowa State university studying software engineering. This
                semester I am taking ComS321, ComS309, SE319 Stats330 and HPSM383. Along with
                school I work Part time for Kent Corperation as a business architect intern.
                I am also a member of executive council for engineers week and Alpha Gamma
                Delta.
              </p>
            </div>
          </div>
          <div>
            <h2 className="fw-normal">Our Project</h2>
            <p>
              Our project aims to create something to help with documentation, organization,
              and advertisement within greenhouses. This would be a public place for a
              community to view what plants are growing within a greenhouse or garden. This
              would prevent someone from needing to physically go to a greenhouse and walk
              around to see what plants are being grown. The purpose of this project is also
              to create a base for what we plan our final project will be based from. We are
              intending to utilize Raspberry Pi to track the temperature and humidity levels
              of the greenhouses. This experience would provide us both the opportunity to
              learn more about how to incorporate Raspberry Pi with a website in a way that
              serves real life purposes.
            </p>
          </div>
        </div>;
      <section id="contact">
        <div class="container">
          <h2>Contact Us</h2>
          <p>You can reach us at ltordai@iastate.edu or jayaed16@iastate.edu</p>
        </div>
      </section>

      break;

    default:
      content = <div>Default Content</div>;
  }

  return <div>{content}</div>;
};
export { Header, Footer, Content };

