import React from "react";
import style from "../style/activity.module.css";
import data from "../data/activity.json";
import SubHeader from "../components/SubHeader";

export default function Activity(){
    const {activity} = data;
    
    return (
        <div className={style.activityContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="Activity" />
            </div>
            <div className={style.activityDiv}>
                {activity.map((item) => (
                    <div>
                    <div className="d-flex align-items-center">
                    <img src={item.image} alt="" />
                    <div className={style.text}>
                        <p><span>{item.title}</span> {item.description}</p>
                    </div>
                    <div className={style.time}>
                        <p>{item.time}</p>
                    </div>
                    </div>
                    {/* <p>{item.time}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}