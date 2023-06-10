export default class ScaleMotion  {
    constructor(scaleTo,delay,duration,easetype) {

      if (delay !== undefined && duration !== undefined && easetype !== undefined) {
        this.motion = {
          right : -scaleTo[0], left : +scaleTo[0], bottom : -scaleTo[1], top : +scaleTo[1],
          transition: {
            duration: duration,
            delay: delay, 
            ease:easetype
          }
      };      
      } else {
        this.motion = {
          right : -scaleTo[0], left : +scaleTo[0], bottom : -scaleTo[1], top : +scaleTo[1]
        }
        };
    }  

  }