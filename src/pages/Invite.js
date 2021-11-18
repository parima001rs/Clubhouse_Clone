import React from "react";
import style from "../style/invite.module.css";
import data from "../data/invite.json";
import { Input } from "antd";
import SubHeader from "../components/SubHeader";

export default function Invite(){

    const {invite} = data;
    return (
        <div className={style.inviteContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="YOU HAVE 2 INVITES" />
                <div className="text-center">
                <p>Who's a great potential addition to Clubhouse?</p>
                <p>You'll get credit for the invite on their profile!</p>
                <p>(P.S. We're iPhone only right now)</p>
            </div>
            <Input 
                style={{
                    backgroundColor: "#f4f4f4",
                    borderRadius: "0.8em",
                    padding: "0.3em 1em",
                    border: "none",
                    boxShadow: "none",
                }}
                size="large"
                prefix={<img src="images/search.png" width="15px" />}
                ></Input>
            </div>
            <div className={style.inviteDiv}>
            
                {invite.map((item) => (
                    <div>
                    <div className="d-flex align-items-center">
                    <img src={item.image} alt="" />
                    <div className={style.text}>
                        <p style={{marginBottom: "-5px", fontWeight: "500"}}>{item.name}</p>
                        <p style={{color: "#6d6d6d"}}>{item.friendsCount} friends on Clubhouse</p>
                    </div>
                    <div className={style.btn}>
                        <button>Invite</button>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}