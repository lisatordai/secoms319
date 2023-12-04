
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  function loadText(SectionText) {
    var mainContainer = document.getElementById("goodmovies");
      for (var i = 0; i < SectionText.length; i++) {
        let title = SectionText[i].title;
        let text = SectionText[i].text;
        let url = SectionText[i].url;
        let urlButton = SectionText[i].url;
        let div = document.createElement("div");

      if (url != null) {
        div.innerHTML = `
        <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>${title}</h4>
        <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}> ${text}</p>
        <button onclick="${url}">${urlButton}</button>
        <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />`
      }else {
      div.innerHTML = `  
      <h4 style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}>${title}</h4>
      <p style={{marginTop:"10px", marginLeft: "100px" , marginRight: "100px"}}> ${text}</p>
      <hr style={{ marginTop: "20px", marginLeft: "100px", marginRight: "100px" }} />`
      }
    mainContainer.appendChild(div);
    console.log(div);
    }
  } 

  //get server data
  const [data, setData] = useState([]);

   useEffect(() => {
      // Fetch data from the server
      axios.get('http://localhost:3000/api/home/get')
         .then((response) => {
            setData(response.data);
            console.log(response.data)
         })
         .catch((error) => {
            console.error('Error fetching data:', error);
         });
   }, []);
  

  let content;
  switch (props.page) {
    case 'Home':
      content = (
        <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.url && <a href={item.url}>{item.url_button || 'Visit Website'}</a>}
            <hr />
          </div>
        ))}
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
export { Header, Footer, Content };


