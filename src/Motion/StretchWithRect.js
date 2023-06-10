export default class StretchWithRect {
  constructor(stretchTopTo, stretchRightTo, stretchBottomTo, stretchLeftTo,delay, duration, easetype) {
    if (delay !== undefined && duration !== undefined && easetype !== undefined) {
      this.motion = {
        top: [null,stretchTopTo],
        right: [null,stretchRightTo],
        bottom: [null,stretchBottomTo],
        left: [null,stretchLeftTo],
        transition: {
          duration: duration,
          delay: delay,
          ease: easetype,
        },
      };
    } else {
      this.motion = {
        top: [null,stretchTopTo],
        right: [null,stretchRightTo],
        bottom: [null,stretchBottomTo],
        left: [null,stretchLeftTo],
      };
    }
  }
}
