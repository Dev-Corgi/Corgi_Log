import React, { useEffect } from "react";
import { Box, Img } from "@chakra-ui/react";
import "./Drawer.css"
import Icon_Home from "Assets/Icon_Home.png"
import Icon_Menu from "Assets/Icon_Menu.png"
import Icon_Music from "Assets/Icon_Music.png"
import Icon_Notification from "Assets/Icon_Notification.png"
import Icon_Pause from "Assets/Icon_Pause.png"
import Icon_Play from "Assets/Icon_Play.png"
import Icon_Search from "Assets/Icon_Search.png"
import Icon_Timer from "Assets/Icon_Timer.png"
import Frame_Drawer from "Assets/Frame_Drawer.png"
import Vector_MusicProgress from "Assets/Vector_MusicProgress.png"
import Icon_Arrow from "Assets/Icon_Arrow.png"


export default function Drawer(props) {

  return (
    <Box className="drawer-frame" backgroundImage={Frame_Drawer} backgroundSize="cover" zIndex={99}>
        <Img className="drawer-arrowicon" src = {Icon_Arrow} ></Img>
        <Img className = "drawer-musicprogressbar" src = {Vector_MusicProgress}></Img>
        <div className="drawer-musicinfoframe">
            <div className="drawer-musicinfotitle">Cool Kids</div>
            <div className="drawer-musicinfosinger">French Madusa</div>
        </div>
        <Img className="drawer-playicon" src = {Icon_Play}></Img>
        <Img className="drawer-pauseicon" src = {Icon_Pause}></Img>
        <div className="drawer-trackframe">
            <Img className="drawer-trackicon" src = {Icon_Music}></Img>
            <div className="drawer-tracktext">17 Tracks</div>
        </div>
        <div className="drawer-timerframe">
            <Img className="drawer-timericon" src = {Icon_Timer}></Img>
            <div className="drawer-timertext">01:34</div>
        </div>
        <Img className="drawer-homeicon" src={Icon_Home}></Img>
        <Img className="drawer-menuicon" src = {Icon_Menu}></Img>
        <Img className="drawer-searchicon" src = {Icon_Search}></Img>
        <Img className="drawer-subscribeicon" src = {Icon_Notification}></Img>
    </Box>
  );
}

