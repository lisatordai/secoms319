
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import items from "./GreenHouse.json"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





 
const Header = (props) => {

  return (
    <div>
      <nav class="navbar navbar-dark">
        <div style = {{marginLeft:"155px", marginRight:"155px"}} class="container-fluid">
          <div class="row w-100 justify-content-between">
            <div class="col-auto text-left">
              <a href="https://www.iastate.edu" class="btn btn-outline-primary">iastate.edu</a>
              <a href="https://www.iastate.edu/index/A" class="btn btn-outline-primary">Index</a>
            </div>
            <div class="col-auto text-right">
              <a href="https://info.iastate.edu/" class="btn btn-outline-primary">Directory</a>
              <a href="https://www.fpm.iastate.edu/maps/" class="btn btn-outline-primary">Maps</a>
              <a href="https://web.iastate.edu/safety/" class="btn btn-outline-primary">Safety</a>
              <a href="https://iastate.okta.com/" class="btn btn-outline-primary">Sign Ons</a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="red-header left-aligned">
        {/* <img src="./images/logo.jpg" alt="Logo" /> */}
        
        <img   style={{marginLeft:"180px"}}src="https://greenhouse.eeob.iastate.edu/themes/isubit/iastate8_theme/logo.svg" alt="Logo" />
        <p   style={{marginLeft:"180px"}}><strong>Shared Plant Growth Facilities</strong></p>
      </div>

      <nav class="navbar2 navbar-dark" >
        <div class="container-fluid">
          <div style={{marginLeft:"155px"}} class="row w-100 justify-content-between">
            <div class="col-auto text-left">
              <a class="btn btn-outline-primary" onClick={() => { props.setView('Home') }}>Home</a>
              <a class="btn btn-outline-primary" onClick={() => { props.setView('Managers') }}>Managers</a>
             
              <a class="btn btn-outline-primary" onClick={() => { props.setView('the Greenhouses') }}>Greenhouses</a>
              <a class="btn btn-outline-primary" onClick={() => { props.setView('Current Research') }}>Current Research</a>
               <a class="btn btn-outline-primary" onClick={() => { props.setView('Available Equipment') }}>Available Rentals</a> 
              {/* <a class="btn btn-outline-primary">page6</a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row w-100 justify-content-between align-items-center">
          {/* Left side with logo */}
          <div className="col-auto" style={{ marginLeft: '200px' }}>
            <img src="./images/logo2.jpg" alt="Logo2" style={{ maxWidth: '250px' }} />
          </div>

          {/* Right side with buttons (removed text-right class) */}
          <div className="col-auto d-flex flex-column text-left" style={{ marginRight: '200px', marginTop: '40px', marginBottom: '40px' }}>
            <p> Copyright © 2023<br />
              Iowa State University<br />
              of Science and Technology<br />
              All rights reserved.
            </p>
            <a href="https://www.policy.iastate.edu/policy/discrimination" className="btn btn-outline-primary mb-0 ">Non-discrimination Policy</a>
            <a href="https://www.policy.iastate.edu/electronicprivacy" className="btn btn-outline-primary mb-0">Privacy Policy</a>
            <a href="https://www.it.iastate.edu/teams/digital-accessibility" className="btn btn-outline-primary mb-0">Digital Access & Accessibility</a>
            <a href="https://www.iastate.edu/consumer-information" className="btn btn-outline-primary mb-0">Consumer Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
};



const Content = (props) => {

  const [GreenHouse, setPlants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/greenhouse/get')
      .then((GreenHouseData) => {
        // Log the fetched array data
        console.log(GreenHouseData.data);
  
        if (Array.isArray(GreenHouseData.data)) {
          // Set the state with the array data
          setPlants(GreenHouseData.data);
        } else {
          console.error('Error: GreenHouseData.House is not an array', GreenHouseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from Projects.json
    fetch('./Projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [managersData, setMData] = useState([]);

  useEffect(() => {
    // Fetch data from Projects.json
    fetch('./Managers.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setMData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [rentalSpaces, setRData] = useState([]);

  useEffect(() => {
    // Fetch data from Projects.json
    fetch('./GrowthRental.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setRData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [EquipData, setEData] = useState([]);

  useEffect(() => {
    // Fetch data from Projects.json
    fetch('./Rental.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setEData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  // Log the state after it has been updated
  useEffect(() => {
    console.log('Projects state after setting data:', projects);
  }, [projects]);

  let i = projects.length;

  //get server data
  const [data, setData] = useState([]);

   useEffect(() => {
      // Fetch data from the server
      axios.get('http://localhost:4000/api/home/get')
         .then((response) => {
            setData(response.data);
            console.log(response.data)
         })
         .catch((error) => {
            console.error('Error fetching data:', error);
         });
   }, []);
   const groupedRentals = rentalSpaces.Rental
   ? rentalSpaces.Rental.reduce((acc, rental) => {
       const buildingKey = rental.building;
       const roomKey = rental.room;
 
       if (!acc[buildingKey]) {
         acc[buildingKey] = {};
       }
 
       if (!acc[buildingKey][roomKey]) {
         acc[buildingKey][roomKey] = [];
       }
 
       acc[buildingKey][roomKey].push(rental);
       return acc;
     }, {})
   : {};

  let content;
  switch (props.page) {
    case 'Home':
      content = (
        <div id="green-house-container">
          <img style={{marginTop:"30px"}} id="green-house-image" src="./images/Horticulture.jpg" alt="Green House Image"></img>
          <div style={{marginBottom:"30px"}} id="green-label">Horticulture Hall greenhouse</div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.url && (
              <button
                onClick={() => window.location.href = item.url}
                style={{
                  backgroundColor: '#1c3d1c',
                  color: 'white',
                  padding: '2px 170px', // Adjust the width by changing the padding
                  borderRadius: '8px',
                  display: 'block',
                  margin: '0 auto',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                {item.url_button || 'Visit Website'}
              </button>
            )}
            <hr />
          </div>
        ))}
      </div>
    );
      break;

    case 'Managers':
      content = (
        <div id="green-house-container">
      <h1>Managers</h1>
      <hr style={{ marginTop: "20px", color: "#CC0001" }} />
      {managersData.Manager.map((manager, index) => (
        <div key={index}>
          <h2>{manager.name}</h2>
          <p><strong>Description:</strong> {manager.description}</p>
          <p><strong>Office:</strong> {manager.office}</p>
          <p><strong>Address:</strong> {manager.address_line_1}, {manager.address_line_2}</p>
          <p><strong>Phone:</strong> {manager.phone_number}</p>
          <p><strong>Email:</strong> {manager.email}</p>
          <hr />
        </div>
      ))}
    </div>
      );
      break;

    case 'Available Equipment':
      content = (
        <div id="green-house-container">
          <div id="rental-container">
          <h1 style={{ marginTop: "30px" }}>Available Rentals</h1>
          <hr style={{ marginTop: "20px", borderTop: "3px solid #CC0001" }} />

            
            <h3 style={{ marginTop: "30px" }}>Equipment Rates</h3>
            <hr style={{ marginTop: "20px", color: "#CC0001" }} />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {EquipData.Rental.map((rental, index) => (
                <div key={index} className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{rental.description}</h5>
                      <p className="card-text">
                        <strong>Rate:</strong> ${rental.rate} per {rental.rental_period}<br />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         

          <h3 style={{ marginTop: "30px" }}>Greenhouse Space</h3>
          <hr style={{ marginTop: "20px", color: "#CC0001" }} />
          {Object.keys(groupedRentals).map((building, index) => (
  <div key={index} className="mb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{building}</h5>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Object.keys(groupedRentals[building]).map((room, subIndex) => (
            <div key={subIndex} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    <strong>Room:</strong> {room}<br />
                    {groupedRentals[building][room].map((rental, rentalIndex) => (
                      <React.Fragment key={rentalIndex}>
                        <pn>Spot:</pn> {rental.bench_floor_room}<br />
                        <pn>Square Feet:</pn> {rental.sq_ft}<br />
                        <pn>Price per Square Foot:</pn> ${rental.price_per_ft_sq}<br />
                        <pn>Weekly Rate:</pn> ${rental.weekly_rate}<br />
                        <hr style={{ marginTop: "20px", color: "Grey" }} />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
))}
            

          </div>
        </div>
      );
      break;

    case 'the Greenhouses':
      content = ( 
        <div id="green-house-container">
        <h1 style={{ marginTop: "30px" }}>About the Greenhouses</h1>
        <hr style={{ marginTop: "20px", color: "#CC0001" }} />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { GreenHouse.map((GreenHouse, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img src={GreenHouse.url} className="card-img-top" alt={GreenHouse.alt} />
                <div className="card-body">
                  <h5 className="card-title">{GreenHouse.GreenHouse}</h5>
                  <p className="card-text">{GreenHouse.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      );
      break;

    case 'Current Research':
      content = ( 
        <div id="green-house-container">
        <h1>Current Research</h1>
        <p>Welcome to the Shared Plant Growth Facilities Current Research page. Our facilities support a range of projects across various disciplines, providing a platform for scientific curiosity and discovery. Here are a few activities within our shared spaces that we are currently working on.</p>
        <hr style={{ marginTop: "20px", color: "#CC0001" }} />
      
        {projects && projects.Projects && projects.Projects.length > 0 ? (
          projects.Projects.map((item, index) => (
            <div key={index}>
              <h3>{item.header}</h3>
              <p>{item.info}</p>
              <hr style={{ marginTop: "20px" }} />
            </div>
          ))
        ) : (
          <p>Loading... {i}</p>
        )}
      </div>
  
      );
      break;

    default:
      content = <div>Default Content</div>;
  }

  return <div>{content}</div>;
};
export { Header, Footer, Content };


