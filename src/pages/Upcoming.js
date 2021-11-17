import React, {useState} from "react";
import style from "../style/upcoming.module.css";
import data from "../data/upcomingCard.json";
import SubHeader from "../components/SubHeader";
import { BellOutlined, CalendarOutlined } from "@ant-design/icons"

export default function Upcoming(){

    const {today} = data;

    return (
        <div className={style.upcomingContainer}>
            <div className={style.header}>
                
                <SubHeader pageTitle="UPCOMING FOR YOU" />
                <div className={style.icon}>
                    <CalendarOutlined />
                </div>
                <h6>TODAY</h6>
            </div>
            
            <div className={style.eventContainer}>
                {today.map((item) => (
                    <>
                    <div className={style.time}>
                        <p>{item.time}</p>
                        <div className="text-end">
                            <BellOutlined />
                        </div>
                    </div>
                    <h5>{item.title}</h5>
                    <div className={style.images}>
                        <img src={item.images[0]} alt="" />
                        <img src={item.images[1]} alt="" />
                        <img src={item.images[2]} alt="" />
                        <img src={item.images[3]} alt="" />
                    </div>
                        <p className={style.description}>{item.description}</p>
                    </>
                ))}
            </div>
        </div>
        
    );
}