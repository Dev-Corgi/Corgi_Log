export default class MovingMotion  {
    constructor(xTo, yTo,delay,duration,easetype) {
 

    if (delay !== undefined && duration !== undefined && easetype !== undefined) {
      this.motion = {
        x:+xTo,y:+yTo,
        transition: {
          duration: duration,
          delay: delay,
          ease:easetype
        }
    };
    } else {
      this.motion = {
        x:+xTo,y:+yTo
      }
      };
    }

  }