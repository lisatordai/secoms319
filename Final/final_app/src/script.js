
import React, { useState, useEffect } from 'react';

import items from "./GreenHouse.json"






const Header = (props) => {

  return (
    <div>
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
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
        
        <img src="https://greenhouse.eeob.iastate.edu/themes/isubit/iastate8_theme/logo.svg" alt="Logo" />
        <p><strong>Shared Plant Growth Facilities</strong></p>
      </div>

      <nav class="navbar2 navbar-dark">
        <div class="container-fluid">
          <div class="row w-100 justify-content-between">
            <div class="col-auto text-left">
              <a class="btn btn-outline-primary"  onClick={() => { props.setView('Home') }}>Home</a>
              <a  class="btn btn-outline-primary"  onClick={() => { props.setView('Managers') }}>Managers</a>
              <a class="btn btn-outline-primary" onClick={() => { props.setView('page3') }}>page3</a>
              <a class="btn btn-outline-primary" onClick={() => { props.setView('the Greenhouses') }}>Greenhouses</a>
              <a class="btn btn-outline-primary" onClick={() => { props.setView('page5') }}>Current Research</a>
              <a class="btn btn-outline-primary">page6</a>
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
            <p> Copyright © 2023<br/>
              Iowa State University<br/>
              of Science and Technology<br/>
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
    fetch('./GreenHouse.json')
      .then(response => response.json())
      .then(GreenHouseData => {
        console.log(GreenHouseData); // Log the fetched data
        if (Array.isArray(GreenHouseData.House)) {
          setPlants(GreenHouseData);
        } else {
          console.error('Error: plantsData.Plant is not an array', GreenHouse);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  


  if (!Array.isArray(GreenHouse.House)) {
    return <div>Error: plants.Plant is not an array</div>;
  }

  let content;// no idea what this does
  switch (props.page) {
    case 'Home':
      content = ( 
        <div>
          <p>
          page 1 Home
          </p>
        </div>
      );
      break;

      case 'Managers':
      content = ( 
      <div>
          <p>
          page 2 Managers
          </p>
        </div>
      );
      break;

      case 'page3':
      content = ( 
      <div>
          <p>
          page 3
          </p>
        </div>
      );
      break;

      case 'the Greenhouses':
      content = ( 
        <div>
          <h1 style={{marginTop:"10px"}}>About the Greenhouses</h1>
        <div className="padding">
          <div id="plant-container" className="row row-cols-1 row-cols-md-3 g-4">
            {GreenHouse.House.map((GreenHouse, index) => (
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
      
      
    </div>
      );
      break;

      case 'page5':
      content = ( 
      <div>
          
          <h1 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Current Research</h1>
          <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
          Welcome to the Shared Plant Growth Facilities Current Research page.
          Our facilities support a range of projects across various disciplines,
          providing a platform for scientific curiosity and discovery.Here are a
          few activities within our shared spaces that we are currently working on. 
          </p>

          <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px", color: "#CC0001" }} />

          <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Agronomy Greenhouse room 131</h4>
          <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            With the evolution of greenhouse lighting technology there
            comes obsolescence. Current lighting technology is rumored 
            to be on its way to obsolescence in the near future. Most LED
            lighting research has been conducted with plants that are 
            much shorter than corn and soybeans at full maturity so a
            lighting trial is being conducted to see if those crops can 
            be successful under standard toplighting or if additional
            methods need to be investigated before the current lighting 
            technology is gone. 
            </p>

          <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

          <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Horticulture Hall rooms 82 and 86</h4>
          <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
          The ISU Horticulture Club is producing a Poinsettia crop to be sold 
          before the end of the semester.  
            </p>

            <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

            <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Agronomy Hall Room 116 and ATRB room 6302</h4>
            <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            The Iowa Monarch Conservation Consortium is raising milkweed plants to feed Monarch
             butterfly butterfly caterpillars in their colony.   
              </p>

              <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

            <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Plant Pathology Greenhouse room 115</h4>
            <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            An experiment on soil applied herbicides and their effect on weed seed germination.  
              </p>

              <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

            <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Plant Pathology Greenhouse room 121</h4>
            <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            A winter seed increase on soybeans for use in field trials for summer 2024.
             </p>

             <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

            <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Agronomy Greenhouse room 119</h4>
            <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            Genetic research on Sorghum plants for food and biofuel uses.
            </p>

            <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

            <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Horticulture Hall room 46J</h4>
            <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            Research on Mungbean to investigate its suitability as a staple crop in North America. 
            </p>

            <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />

            <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>Agronomy Greenhouse and Agronomy Hall – multiple chambers</h4>
            <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>
            Climate change research investigating soybean production under different climate parameters. 
            </p>
        </div>
      );
      break;

    default:
      content = <div>Default Content</div>;
  }

  return <div>{content}</div>;
};
export { Header, Footer, Content};

