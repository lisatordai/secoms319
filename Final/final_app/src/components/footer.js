import React from "react";


function Footer() {

    return (
        <div>
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
        </div>
    );
}

export default Footer;