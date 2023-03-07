import { Scene } from 'three';

import assets from '../config/assets';
import EventEmitter from 'events';
import Camera from './camera';
import Renderer from './renderer';
import Sizes from './sizes';
import Time from './time';
import Resources from './resources';
import World from './world';

export default class Experience {
  static instance;

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.eventEmitter = new EventEmitter();
    this.canvas = canvas;
    // this.mouse = new Mouse();
    this.scene = new Scene();
    this.sizes = new Sizes();
    this.camera = new Camera();

    this.renderer = new Renderer();
    this.resources = new Resources(assets);
    // this.acts = acts;
    this.world = new World();
    this.time = new Time();

    this.sizes.on('resize', () => {
      //   // console.log('resize');
      this.resize();
    });
    this.time.on('update', () => {
      this.update();
    });
  }

  resize() {
    // this.camera.resize();
    // this.world.resize();
    // this.renderer.resize();
  }

  update() {
    this.renderer.update();
    this.camera.update();
    this.world.update();
    // this?.scroll?.raf();
  }
}
