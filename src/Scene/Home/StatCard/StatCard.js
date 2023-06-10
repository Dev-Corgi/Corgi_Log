import React, { useEffect } from "react";
import { Box, Text,Image } from "@chakra-ui/react";
import "./StatCard.css"
export default function StatCard(props) {

  return (
    <Box className="statcard-frame" background={props.background}>
      <Box className="statcard-titleframe" border = {"1px solid " +props.pointcolor}>
        <Box className = "statcard-titletext" color={props.pointcolor}>{props.title}</Box>
      </Box>
      <Image className = "statcard-emoji" src = {props.emoji}></Image>
      <Box className = "statcard-subtitle" color={props.pointcolor}>{props.subtitle}</Box>
      <Box className="statcard-stat"color={props.pointcolor} >{props.stat}</Box>
    </Box>
  );
}

