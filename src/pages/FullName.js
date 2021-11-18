import React from "react";
import { Link } from "react-router-dom";
import style from "../style/fullname.module.css";

export default function FullName() {

    return (
        <div className={style.fullNameContainer}>
            <Link exact to="/setup_profile" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>

            <div>
            <h1>What's your full name?</h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <p>People use real names on Clubhouse :) Thnx!</p>
            </div>

            <div className={style.actionBtn}>
            <Link exact to="/set_username" className="primaryBtn d-flex align-items-center">
            Next &#8594;
            </Link>
            </div>
            
        </div>
        
    );
}