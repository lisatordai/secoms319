import React from "react";


function Header() {

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
}

export default Header;