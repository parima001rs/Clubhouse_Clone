import React from "react";
import style from "../style/setProfile.module.css";
import {Link} from "react-router-dom";
import {AiOutlineTwitter} from "react-icons/ai";

export default function SetProfile(){
    return (
    <div className={style.setProfileContainer}>
        <div>
        <h1>🎉Welcome to Clubhouse.</h1>
        <h1>You're BlueMoon's friend!</h1>
        </div>
        <div className={style.img}>
            <img  src="images/friend.jpg" alt=""/>
        </div>
        <p>Let's set up your profile?</p>
        <div className={style.actionBtn}>
            <Link className="primaryBtn d-flex align-items-center mb3">
            <AiOutlineTwitter /> import from Twitter
            </Link>
            <Link exact to='/set_name'>
                Enter my info manually
            </Link>
        </div>
    </div>
    );
}