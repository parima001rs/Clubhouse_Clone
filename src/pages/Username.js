import React from "react";
import { Link } from "react-router-dom";
import style from "../style/username.module.css";

export default function Username() {

    return (
        <div className={style.usernameContainer}>
            <Link exact to="/set_name" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>

            <div>
            <h1>Pick a username</h1>
            <input type="text" placeholder="@username" />
            </div>

            <div className={style.actionBtn}>
            <Link exact to="/set_profilePicture" className="primaryBtn d-flex align-items-center">
            Next &#8594;
            </Link>
            </div>
        </div>
        
    );
}