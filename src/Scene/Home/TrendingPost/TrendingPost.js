import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Pic1 from "Assets/TrendingPost1.jpg"
import Pic2 from "Assets/TestPic2.jpg"
import Pic3 from "Assets/TestPic3.jpg"
import CornerText from "Assets/Corner Text.png"
import ImageRoll from "Component/ImageRoll/ImageRoll";
import "./TrendingPost.css"
export default function TrendingPost(props) {

  const images = [Pic1,Pic2,Pic3];

  return (
 <Box className="trendingnow-frame">
    <ImageRoll images = {images}></ImageRoll>
    <Box className="trendingnow-cornertext" backgroundImage={CornerText} zIndex={images.length+1}></Box>
</Box> 
  );
}

