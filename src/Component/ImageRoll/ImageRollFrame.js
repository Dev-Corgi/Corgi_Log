import React, {useEffect,useState} from "react";
import {motion} from "framer-motion";
export default function ImageRollFrame (props)  {

    const [positionIndex, setPositionIndex] = useState(props.index);

    useEffect(() => {
        const handleMotion = (event) => {
            setPositionIndex((prevIndex) => (prevIndex === props.length-1 ? 0 : prevIndex + 1));
        };
    
        if(props.inputcontroller != null)
        {
        props.inputcontroller.eventTarget.addEventListener(props.inputcontroller.eventname, handleMotion);
        return () => {
          props.inputcontroller.eventTarget.removeEventListener(props.inputcontroller.eventname, handleMotion);
        };
      }
    
      }, [props.inputcontroller]);
    

  return (
<motion.div
 className="cardframe"
 animate={() =>{
    if(positionIndex == props.length-1) {return ({...props.topanimation.motion, ...{zIndex : positionIndex}})}
    else if(positionIndex == 0){return ({...props.resetanimation.motion, ...{zIndex : positionIndex}})}
    else{return {zIndex: positionIndex}} 
}}
style={{
     position : "absolute",
    overflow: "hidden",
    left : "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
}}
>
{props.children}
</motion.div>

  );
};

