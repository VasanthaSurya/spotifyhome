import React from "react";
import './Premium.css';
import '../App.css';
import img from '../image.png';

function Premiumcard () {
    return (
        <div className="premium d-flex">
            <div className="prem lh">
                <div className="">
                    <h6>SPOTIFY PREMIUM</h6>
                    <h3>Get 3 months of Premium </h3>
                    <h3>for free</h3>
                    <div className="p-2 pl-0">
                        <p className="largep">Enjoy ad-free music listening, offline playback, and more.</p>
                        <p className="largep">Cancel anytime.</p>
                    </div>
                    <div className="p-2 pl-0">
                        <button className="btn-prem">Get 3 months free</button>
                    </div>
                    <p className="plan p-2 pl-0">Individual plan only. $9.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.</p>
                </div>
            </div>
            <div className="prem rh">
                <img src={img} className="mt-0" alt="Some random image" />
            </div>
        </div>
    )
}

export default Premiumcard;