import React from "react";
import '../App.css';
import './Navbar.css';

function Home () {
    return (
        <div className="d-flex navtext pt-0 bg-dark mt-0">
            <div className="p-2 logo1">
                <div className="p-2">Logo</div>
            </div>
            <div className="p-2 logo2 d-flex">
                <div className="p-2">Premium</div>
                <div className="p-2">support</div>
                <div className="p-2">Download</div>
                <div className="p-2">|</div>
                <div className="p-2">signup</div>
                <div className="p-2">login</div>
            </div>            
        </div>
    );
}

export default Home;