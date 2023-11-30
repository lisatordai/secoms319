
import React, { useState, useEffect } from 'react';

import items from "./GreenHouse.json"






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
      
      <div className="red-header left-aligned container-fluid">
      <img  style={{marginLeft:"180px"}}  src="https://greenhouse.eeob.iastate.edu/themes/isubit/iastate8_theme/logo.svg" alt="Logo" />
        <p  style={{marginLeft:"180px", marginTop:"5px"}} ><strong>Shared Plant Growth Facilities</strong></p>
      </div>

      <nav class="navbar2 navbar-dark" >
        <div class="container-fluid">
          <div style={{marginLeft:"155px"}} class="row w-100 justify-content-between">
            <div class="col-auto text-left">
              <a class="btn btn-outline-primary"  onClick={() => { props.setView('page1') }}>Home</a>
              <a  class="btn btn-outline-primary"  onClick={() => { props.setView('page2') }}>page2</a>
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
        console.log('test 1', projects);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  let i = projects.length;
  

  let content;
  switch (props.page) {
    case 'page1':
      content = ( 
        <div>
          <body>
          <div id="green-house-container">
              <img style={{marginTop:"30px"}} id="green-house-image" src="./images/Horticulture.jpg" alt="Green House Image"></img>
              <div id="green-label">Horticulture Hall greenhouse</div>
              <h2 style={{marginTop:"10px"}}>About the Facilities</h2>
              <p style={{marginTop:"10px"}}>
              The Shared Plant Growth Facilities encompasses 43,967 square feet of greenhouse space in the Advanced Teaching and Research Building (ATRB), Agronomy Greenhouse, Agronomy Hall, Horticulture Hall, and Plant Pathology Greenhouse with a total of 84 rooms to house instructional and research projects as well as 56 plant growth chambers in Agronomy Hall and Horticulture Hall that have a total growing space of over 985 square feet. The greenhouses range in construction dates from 1967 through 2018. The Agronomy Hall, Horticulture Hall, and ATRB greenhouses have computer control systems to ensure proper environmental conditions and to provide specific conditions for research and instructional projects. The growth chambers are able to simulate the climate of many locations from around the globe with lighting and temperature control in all changes and some chambers also have humidity and CO2 controls as well. 
              <br/> <br/>
              The majority of the insect pest control in the Shared Plant Growth Facilities is accomplished with the use of beneficial insects, predatory mites, and parasitic wasps to significantly decrease the use of chemical pesticides and the risks associated with them for all of our faculty, staff, and students. 

              </p>
          </div>
          
          </body>
        </div>
      );
      break;

      case 'page2':
      content = ( 
      <div>
          <p>
          page 2
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
        <div id="green-house-container">
          <h1 style={{marginTop:"30px"}}>About the Greenhouses</h1>
        
          <div  className="row row-cols-1 row-cols-md-3 g-4">
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
      );
      break;

      case 'page5':
      content = ( 
       <div id="green-house-container">
        <h1>Current Research</h1>
                <p>Welcome to the Shared Plant Growth Facilities Current Research page. Our facilities support a range of projects across various disciplines, providing a platform for scientific curiosity and discovery. Here are a few activities within our shared spaces that we are currently working on.</p>
                <hr style={{ marginTop: "20px", color: "#CC0001"}} />
    
        
          {projects.Projects.length > 0 ? (
            projects.Projects.map((item, index) => (
              <div key={index}>
                <h3>{item.header}</h3>
                <p>{item.info}</p>
                <hr style={{ marginTop: "20px"}} />
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
export { Header, Footer, Content};

