export default class OpacityMotion  {
    constructor(opacityTo,delay,duration,easetype) {


    if (delay !== undefined && duration !== undefined && easetype !== undefined) {
      this.motion = {
        opacity: opacityTo,
        transition: {
          duration: duration,
          delay: delay,
          ease:easetype
        }
      };
    } else {
      this.motion = {
        opacity: opacityTo
        }
      };
    }


  }