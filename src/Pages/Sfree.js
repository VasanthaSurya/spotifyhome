import React from "react";
import './Premium.css';
import '../App.css';
import img from '../image.png';

function Sfree () {
    return (
        <div className="free d-flex">
            <div className="prem lh">
                <div className="">
                    <h6>SPOTIFY FREE</h6>
                    <h3>Listening is Everything </h3>
                    <div className="p-2 pl-0">
                        <p className="largep">Millions of songs and podcasts. No credit card</p>
                        <p className="largep">needed.</p>
                    </div>
                    <div className="p-2 pl-0">
                        <button className="btn-free">GET SPOTIFY FREE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sfree;