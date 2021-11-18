import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/UpcomingBottomSheet.module.css";
import style1 from "../style/upcoming.module.css";
import data from "../data/upcomingCard.json";
import { BellOutlined } from "@ant-design/icons"
import { AiOutlineCopy, AiOutlineShareAlt, AiOutlineTwitter } from "react-icons/ai";

export default function UpcomingBottomSheet(props){
    return (
        <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={() => {
            props.setSheetVisible(!props.sheetVisible)
        }}
        fullScreen={props.sheetTitle == 'upcoming detail' ? true : false}
        >
        <div className={style.UpcomingBottomSheetContainer}>
        <div>
            <p className={style.switch_Line}></p>
                    <>
                    <div className={style1.time}>
                        <p>Today 3:00 PM</p>
                        <div className="text-end">
                            <BellOutlined />
                        </div>
                    </div>
                    <h5>Sacred Cypher Sundays</h5>
                    <div className={style1.images}>
                        <img src="/images/user-img.jpg" alt="" />
                        <img src="/images/user-img2.jpg" alt="" />
                        <img src="/images/user-img.jpg" alt="" />
                        <img src="/images/user-img2.jpg" alt="" />
                    </div>
                        <p className={style1.description}> w/Mummu Fresh, Rami Nashashibi, sadia Nawab & binta Diallo room room for morning reflection, recitation, Chanting, prayer and sound healing freestyle cypher</p>
                        
                    </>
            </div>
            <div className={style.link}>
            <div className="mb-4">
                <button className="mb-0">
                share<AiOutlineShareAlt />
                </button>
                <button className="mb-0">
                Tweet<AiOutlineTwitter />
                </button>
                <button className="mb-0">
                Copy link<AiOutlineCopy />
                </button>
                <button className="mb-0">
                Add to call<AiOutlineCopy />
                </button>
            </div>
            </div>
            <button className={style.JoinBtn}>Join the room in progress</button>
        </div>
        </SwipeableBottomSheet>
       
    );
} 

