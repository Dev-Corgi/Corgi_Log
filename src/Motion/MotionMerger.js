export default class MovingMotion  {
    constructor(motion1,motion2,delay,duration,easetype) {

    if (delay !== undefined && duration !== undefined && easetype !== undefined) {
        this.motion = { 
            ...motion1.motion, 
            ...motion2.motion,
            ...{
            transition: {
            duration: duration,
            delay: delay, 
            ease:easetype
          },
        } ,
        };
      } else {
            this.motion = { 
                ...motion1.motion, 
                ...motion2.motion
            }
        };
    }
  }