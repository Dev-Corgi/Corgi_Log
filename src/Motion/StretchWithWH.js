export default class StretchWithWH  {
  constructor(stretchWidthTo,stretchHeightTo,delay,duration,easetype) { 

    if (delay !== undefined && duration !== undefined && easetype !== undefined) {
      this.motion = {
        width : stretchWidthTo, height : stretchHeightTo,
        transition: {
          duration: duration,
          delay: delay,
          ease:easetype
        }
      };     
    } else {
      this.motion = {
        width : stretchWidthTo, height : stretchHeightTo
      }
      };
  }


}