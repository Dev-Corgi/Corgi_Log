export default class ScaleMotion  {
    constructor(xScaleTo,yScaleTo,delay,duration,easetype) {

      if (delay !== undefined && duration !== undefined && easetype !== undefined) {
        this.motion = {
          scaleX: [null,xScaleTo], scaleY: [null,yScaleTo],
           transition: {
             duration: duration,
             delay: delay,
             ease:easetype
           }
       };      
      } else {
        this.motion = {
          scaleX: [null,xScaleTo], scaleY: [null,yScaleTo]
         }
        };
    }

  

  }