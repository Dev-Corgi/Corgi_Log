import React, { useRef } from "react";

class TimerController {
  constructor(interval) {
    this.eventTarget = new EventTarget();
    this.eventname = "timerevent"
    this.slidestepevent = new CustomEvent("timerevent", {
      detail: {
        state: 1,
      },
    });
    this.interval = interval;

    const intervalId = setInterval(() => {
        this.eventTarget.dispatchEvent(this.slidestepevent); 
      }, this.interval);

      this.intervalId = intervalId
  }

  destroy() {
    clearInterval(this.intervalId);
  }
}

export default TimerController;
