export default class ZIndexMotion  {
    constructor(zIndexTo,delay,duration,easetype) {

    if (delay !== undefined && duration !== undefined && easetype !== undefined) {
        this.motion = {
            zIndex: +zIndexTo,
            transition: {
              duration: duration,
              delay: delay,
              ease:easetype
            }
          };
      } else {
        this.motion = {
            zIndex: +zIndexTo
            }
        };
    }

  }