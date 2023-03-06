import { EventEmitter } from 'events';

export default class Time extends EventEmitter {
  constructor() {
    super();
    // this.experience = experience;
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    this.update();
  }

  deltas = [];
  update() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.emit('update');
    if (this.deltas.length <= 50) {
      this.deltas.push(this.delta);
    }
    if (this.deltas.length == 50) {
      const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

      const result = average(this.deltas);
      console.log('average delta after 50 raf - ', result);
      // console.log(this.deltas);
    }
    // console.log(this.delta);
    window.requestAnimationFrame(() => this.update());
    // setTimeout(() => {
    //   this.update();
    // }, 60);
  }
}
