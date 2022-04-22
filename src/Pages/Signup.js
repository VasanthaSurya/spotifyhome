import React from "react";
import './Signup.css';
import logo from './spotify.png';

function Signup() {
    return (
        <div className="su-cont">
            <div className="cnt">
                <div className="logo">
                    <img src={logo} alt="logo" /> Spotify
                </div>
                <div className="ldt">Sign up for free to start listening.</div>
            </div>
            <div className="cnt">
                <button className="fbk">
                    <div className="d-flex via">
                        <img src={logo} alt="" />
                        <p className="m-0 p-2">Sign up with Facebook.</p>
                    </div>
                </button><br/>
                <button className="gle">
                    <div className="d-flex via">
                        <img src={logo} alt="" />
                        <p className="m-0 p-2" >Sign up with Google.</p>
                    </div>
                </button>
            </div>
            <div className="hdivide cnt">
                <p className="hline">or</p>
            </div>
            <div>
                <p className="p-2 cnt">Sign up with Email address</p>
            </div>
            <form action="" className="frm">
                <div className="lab">
                    <label className="lab" for="email-o" >What's your email?</label>
                </div>
                <input className="inp" type="email" placeholder="Enter your Email" name="email-o"/>
                <div className="lab">
                    <label className="lab" for="email-c">Confirm your email</label>
                </div>
                <input className="inp" type="email" placeholder="Confirm your Email" name="email-c"/>
                <div className="lab">
                    <label className="lab" for="password">Create a password</label>
                </div>
                <input className="inp" type="password" name="password" placeholder="Create a password."/>
                <div className="lab">
                    <label className="lab" for="profname">What should we call you?</label>
                </div>
                <input className="inp" type="text" name="profname" placeholder="Enter a profile name."/>
                <p className="inst">This appears on your profile.</p>
                <div className="lab">
                    <label className="lab" for="dob">What's your date of birth?</label>
                </div>
                <div class="d-flex dob">
                    <div class="year">
                        <p class="m-0">Year</p>
                        <input className="idob" type="number" name="dob" min="1900" max="2200" maxlength="4" />
                    </div>
                    <div className="month">
                        <p class="m-0">Month</p>
                        <select className="idob" name="dob" >
                            <option value="month">Month</option>
                            <option value="jan">January</option>
                            <option value="feb">February</option>
                            <option value="mar">March</option>
                            <option value="apr">April</option>
                            <option value="may">May</option>
                            <option value="jun">June</option>
                            <option value="jul">July</option>
                            <option value="aug">August</option>
                            <option value="sep">September</option>
                            <option value="oct">October</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select>
                    </div>
                    <div class="date">
                        <p class="m-0">Date</p>
                        <input className="idob" type="number" name="dob" min="01" max="12" maxlength="2"/>
                    </div>
                </div>
                <div className="lab">
                    <label className="lab" for="gender">What's your gender?</label>
                </div>
                <div className="d-flex">
                    <div className="lp-2"><input type="radio" name="gender" value="male"/><span>Male</span></div>
                    <div className="lp-2"><input type="radio" name="gender" value="female"/><span>Female</span></div>
                    <div className="lp-2"><input type="radio" name="gender" value="other"/><sapn>Non-binary</sapn></div>
                </div>
                <div className="d-flex">
                    <div className="lab"><input type="checkbox" name="data"/></div>
                    <div className="lab">
                        <label className="lab" for="data">Share my registration data with Spotify's content providers for marketing purposes.</label>
                    </div>
                </div>
                <div className="recaptcha d-flex">
                    <div className="chkcap d-flex">
                        <div><input id="recaptcha" type="checkbox" /></div>
                        <div className="robotxt"><span>I'm not a robot.</span></div>
                    </div>
                    <div className="chkcap">
                        <img src="" alt="recaptcha" />
                    </div>
                </div>
                <div className="cnt smtxt">
                    <p>By clicking on sign-up, you agree to Spotify's <a href="" className="gt">Terms and Conditions of Use.</a> </p>
                    <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="" className="gt">Spotify's Privacy Policy.</a> </p>
                    <input type="submit" className="supbtn" value="Sign up" />
                    <p>Have an account? <a href="" className="gt">Log in</a>.</p>
                </div>
            </form>
        </div>
    );
}

export default Signup;