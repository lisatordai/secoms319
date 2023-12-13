
import React, { useState, useEffect, useRef } 
from 'react';import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import axios from 'axios';

 
const Header = (props) => {

  return (
    <div>
      <nav className="navbar navbar-dark">
        <div style = {{marginLeft:"155px", marginRight:"155px"}} className="container-fluid">
          <div className="row w-100 justify-content-between">
            <div className="col-auto text-left">
              <a href="https://www.iastate.edu" className="btn btn-outline-primary">iastate.edu</a>
              <a href="https://www.iastate.edu/index/A" className="btn btn-outline-primary">Index</a>
            </div>
            <div className="col-auto text-right">
              <a href="https://info.iastate.edu/" className="btn btn-outline-primary">Directory</a>
              <a href="https://www.fpm.iastate.edu/maps/" className="btn btn-outline-primary">Maps</a>
              <a href="https://web.iastate.edu/safety/" className="btn btn-outline-primary">Safety</a>
              <a href="https://iastate.okta.com/" className="btn btn-outline-primary">Sign Ons</a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="red-header left-aligned">
        {/* <img src="./images/logo.jpg" alt="Logo" /> */}
        
        <img   style={{marginLeft:"180px"}}src="https://greenhouse.eeob.iastate.edu/themes/isubit/iastate8_theme/logo.svg" alt="Logo" />
        <p   style={{marginLeft:"180px"}}><strong>Shared Plant Growth Facilities</strong></p>
      </div>

      <nav className="navbar2 navbar-dark" >
        <div className="container-fluid">
          <div style={{marginLeft:"155px"}} className="row w-100 justify-content-between">
            <div className="col-auto text-left">
              <a className="btn btn-outline-primary" onClick={() => { props.setView('Home') }}>Home</a>
              <a className="btn btn-outline-primary" onClick={() => { props.setView('Managers') }}>Managers</a>
              <a className="btn btn-outline-primary" onClick={() => { props.setView('the Greenhouses') }}>Greenhouses</a>
              <a className="btn btn-outline-primary" onClick={() => { props.setView('Current Research') }}>Current Research</a>
              <a className="btn btn-outline-primary" onClick={() => { props.setView('page 6') }}>Add Research</a>
              <a className="btn btn-outline-primary" onClick={() => { props.setView('Available Equipment') }}>Available Rentals</a>
              <a className="btn btn-outline-primary" onClick={() => { props.setView('Green House Data') }}>Green House Data</a> 
              {/* <a className="btn btn-outline-primary">page6</a> */}
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

  //home import
  const [data, setData] = useState([]);
   useEffect(() => {
      // Fetch data from the server
      axios.get('http://localhost:8081/api/home/get')
         .then((response) => {
            setData(response.data);
            console.log(response.data)
         })
         .catch((error) => {
            console.error('Error fetching data:', error);
         });
   }, []);

       //managers import
  const [managersData, setMData] = useState([]);
  useEffect(() => {
    // Fetch data from Projects.json
    fetch('http://localhost:8081/api/manager/get')
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

   //Greenhouse import
  const [GreenHouse, setPlants] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/api/greenhouse/get')
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

  // current research iport
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Fetch data from Projects.json
    fetch('http://localhost:8081/api/research/get')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        //console.log("TESTINGGGGGGGGGGGG")
        console.log('Fetched data:', data);
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //rental space rates import
  const [rentalSpaces, setRData] = useState([]);
  useEffect(() => {
    // Fetch data from Projects.json
    fetch('http://localhost:8081/api/space/get')
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

  //equipment rental rates
  const [EquipData, setEData] = useState([]);
  useEffect(() => {
    // Fetch data from Projects.json
    fetch('http://localhost:8081/api/chamber/get')
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

    //PiData
    const [PiData, setPiData] = useState([]);
    useEffect(() => {
      // Fetch data from Projects.json
      fetch('http://localhost:8081/api/data/get')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched data:', data);
          setPiData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
  // Log the state after it has been updated
  useEffect(() => {
    console.log('Projects state after setting data:', projects);
  }, [projects]);


  //grouping spaces by building and room
   const groupedRentals = rentalSpaces
   ? rentalSpaces.reduce((acc, rental) => {
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
     }, {}): {};


 // for data page
     var left = 0;

  //    function handleButtonClick() {
  //     // Get the input element
  //     var inputElement = document.getElementById("integerInput");
  //     // Get the value entered by the user
  //     var inputValue = inputElement.value;
  //     // Convert the input value to an integer
  //     var integerInput = parseInt(inputValue);
  //     // Call your function with the integer parameter
  //     deleteMethod(integerInput);
  // }
     function postProduct() {
      const productData = {
          id: parseInt(document.getElementById('idInput').value),
          title: document.getElementById('titleInput').value,
          text: document.getElementById('descriptionInput').value,
      }
      console.log("ahhhhhhhhhhhhhhhhhhhhhhh" + JSON.stringify(productData))
      fetch("http://localhost:8081/api/research/add", {
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
  fetch("http://localhost:8081/api/research/delete", {
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

function updateProductPrice() {
  var productId = document.getElementById("productIdInput").value;
  var newPrice = document.getElementById("newPriceInput").value;

  fetch("http://localhost:8081/api/research/update", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
          id: productId,
          $set: newPrice,
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
      {managersData.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Office:</strong> {item.office}</p>
          <p><strong>Address:</strong> {item.address_line_1}, {item.address_line_2}</p>
          <p><strong>Phone:</strong> {item.phone_number}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <hr />
        </div>
      ))}
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
                  <h5 className="card-title">{GreenHouse.name}</h5>
                  
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
      
        {projects.length > 0 ? (
          projects.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <hr style={{ marginTop: "20px" }} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
  
      );
      break;

    case 'Available Equipment':
        content = (
          <div id="green-house-container">
            <div id="rental-container">
            <h1 style={{ marginTop: "30px" }}>Available Rentals</h1>
            <hr style={{ marginTop: "20px", color: "#CC0001" }} />
              
              <h3 style={{ marginTop: "30px" }}>Equipment Rates</h3>
              <hr style={{ marginTop: "20px", color: "black" }} />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {EquipData.map((rental, index) => (
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
            <hr style={{ marginTop: "20px", color: "black" }} />
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
    
    case 'Green House Data':
     
      content = (

        
        <div id="green-house-container">
          <h1 style={{ marginTop: "30px" }}>Green House Data</h1>
            <hr style={{ marginTop: "20px", color: "#CC0001" }} />
              
          {PiData.slice(0, 570).map((Pi, index) => {
        const temperatures = PiData.slice(0, 570).map((Pi) => Pi.temperature_fahrenheit);
        const averageTemperature = temperatures.reduce((acc, temp) => acc + temp, 0) / temperatures.length;
        const maxTemperature = Math.max(...temperatures);
        const minTemperature = Math.min(...temperatures);
        if(index == 1){
        
            return(
             < div>
              <h3 style={{ marginTop: "30px" }}>Data Summary</h3>
            <hr style={{ marginTop: "20px", color: "grey" }} />
              
              <div className="card-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="card"  >
                  <h4 style={{ padding: "10px" }}>Average Temperature</h4>
                  <p style={{ textAlign: "center" }}>{`${averageTemperature.toFixed(2)}°F`}</p>
                </div>
                <div className="card">
                  <h4 style={{ padding: "10px" }}>Max Temperature</h4>
                  <p style={{ textAlign: "center" }}>{`${maxTemperature.toFixed(2)}°F`}</p>
                </div>
                <div className="card">
                  <h4 style={{ padding: "10px" }}>Min Temperature</h4>
                  <p style={{ textAlign: "center" }}>{`${minTemperature.toFixed(2)}°F`}</p>
                </div>
              </div>
              </div>
              )}

            })}
          <h3 style={{ marginTop: "30px" , textAlign: 'center'}}>Green House Data (fahrenheit)</h3>
          
          <div className="graph-container">
            
            {PiData.slice(0, 570).map((Pi, index) => {
              // Ensure Pi.time.$date is defined before attempting to split
              const timeString = Pi.time && Pi.time ? Pi.time.split('T')[1].split('.')[0].slice(0, 5) : '';
              // Other code remains the same
              var height = Pi.temperature_fahrenheit;
              var lHeight = height + 5;
              var left = 3;
      
              // Calculate the step size to show 19 points in the first 570 data points
              const stepSize = Math.floor(570 / 18);
              
      
              // Show every 30th data point
              if (index % stepSize === 0) {
                  left = 5 + (index/Math.floor(570 / 18))* 5;
              
                
                return (
                  <div key={index}>
                    {/* Use the height and left variables in the style attribute */}
                    <div className="data-point" style={{ left: `${left}%`, bottom: `${height}%` }}></div>
                    <div className="day-label" style={{ left: `${left}%`, bottom: `${lHeight}%`, fontSize: '12px' }}>{`${height}`}</div>
                    <div className="day-label" style={{ left: `${left}%`, fontSize: '10px' }}>{`${timeString}`}</div>
                  </div>
                );

              } else {
                return null; // If not the 30th or last data point, return null (don't render)
              }
            })}
          </div>
    

         
          </div>
        
      
      );
      break
   
      case 'page 6':
        content = (
          <div id="green-house-container" style={{ marginTop: '30px' }}>
             <h1 style={{ marginTop: "30px" }}>Add</h1>
        <hr style={{ marginTop: "20px", color: "#CC0001" }} />
            <form id="productForm" style={{ maxWidth: '100%' }}>
              <label htmlFor="idInput">ID:</label>
              <input type="text" id="idInput" required />
      
              <label htmlFor="titleInput">Title:</label>
              <input type="text" id="titleInput" required />
      
              <label htmlFor="descriptionInput">Description:</label>
              <input type="text" id="descriptionInput" required />
      
              <button type="button" onClick={postProduct}>
                Add Research
              </button>
            </form>
            <h1 style={{ marginTop: "30px" }}>Delete</h1>
        <hr style={{ marginTop: "20px", color: "#CC0001" }} />
        <form id="productForm" style={{ maxWidth: '100%' }}>
              <label htmlFor="integerInput">ID:</label>
              <input type="text" id="integerInput" required />
      
              
              <button type="button" onClick={handleButtonClick}>
                Delete Research
              </button>
            </form>

            <h1 style={{ marginTop: "30px" }}>Update</h1>
        <hr style={{ marginTop: "20px", color: "#CC0001" }} />

            <form id="updateProductForm">
                                <label htmlFor="productIdInput">ID:</label>
                                <input type="text" id="productIdInput" required />

                                <label htmlFor="newPriceInput">New Text:</label>
                                <input type="text" id="newPriceInput" required />

                                <button type="button" onClick={updateProductPrice} >Update Price</button>
                            </form> 
        </div>
          
        );
        break;


    default:

    content = 
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

              }
  return <div>{content}</div>;
} ;

export { Header, Footer, Content };

