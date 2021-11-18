import React, {useState} from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css";

export default function PhoneConfirmation() {
    const [value, setValue] = useState();

    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <h1>Enter your phone #</h1>
            <PhoneInput defaultCountry="INDIA" value={value} onChange = {setValue}/>
            <p>By entering your number, you're agreeing to our 
            <span> Terms of Service and Privace Policy.</span>
            Thanks!
            </p>
            <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center">
            Next &#8594;
            </Link>
        </div>
        
    );
}