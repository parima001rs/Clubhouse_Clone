import React from "react";
import { Link } from "react-router-dom";
import style from "../style/profilePicture.module.css";

export default function ProfilePicture() {

    return (
        <div className={style.profilePictureContainer}>
            <Link exact to="/set_username" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>

            <div>
            <h1>Great! Now add a photo?</h1>
            <input type="file"/>
            </div>

            <div className={style.actionBtn}>
            <Link exact to="/allow_notification" className="primaryBtn d-flex align-items-center">
            Next &#8594;
            </Link>
            </div>

        </div>
        
    );
}