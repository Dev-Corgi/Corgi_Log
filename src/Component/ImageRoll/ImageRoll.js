import React, {useEffect,useState} from "react";
import {motion} from "framer-motion";
import StretchWithRect from "Motion/StretchWithRect";
import { Box } from "@chakra-ui/react";
import TimerController from "Controller/TimerController";
import ImageRollFrame from "./ImageRollFrame";
export default function ImageRoll (props)  {
    
  const timerController = new TimerController(5000)
  const topanimation = new StretchWithRect("0%","100%","0%","0%",0,1,[0.25, 0.1, 0.25, 1])
  const resetanimation = new StretchWithRect("0%","0%","0%","0%",0,1,[0.25, 0.1, 0.25, 1])
  const textlist = [
    "실무정복!\nJS 스터디로 파워업!",
    "파이썬!\n이걸로 모두 해결!",
    "해외 공모전\n여기에 다 모았어요"
  ]
  

  return (

<Box display="flex" flexDirection="column">
{props.images.map((image, index) =>
    <ImageRollFrame inputcontroller = {timerController} topanimation = {topanimation} resetanimation = {resetanimation} index = {index} length = {props.images.length}>
        <Box className="imageroll-image" backgroundImage={image} position="absolute" left="0%" right = "0%" width = "100%" height = "100%" backgroundSize="cover"></Box>
        <Box className="trendingnow-foreground"></Box>
        <Box className = "trendingnow-description">{textlist[index]}</Box>
    </ImageRollFrame>
)}
</Box>

  );
};

