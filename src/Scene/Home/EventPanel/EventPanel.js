import React, { useEffect } from "react";
import { Box, Text,Image } from "@chakra-ui/react";
import EventPic from "Assets/Event Notification.png"
import "./EventPanel.css"
export default function EventPanel(props) {

  return (
    <Box className="eventpanel-frame" >
        <Box className="eventpanel-image" backgroundImage={EventPic}></Box>
        <Box className = "eventpanel-foreground"></Box>
      <Box className="eventpanel-titleframe" >
        <Box className = "eventpanel-titletext">{"EVENT"}</Box>
      </Box>
      <Box className = "eventpanel-descrption">
        <span width={"auto"} fontWeight={700}>{props.eventname}</span>
        <span width={"auto"} fontWeight={500}>{" | "}</span>
        <span width={"auto"} fontWeight={600}>{props.leftdays}</span>
      </Box>
    </Box>
  );
}

