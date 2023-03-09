import { Scene, Vector3 } from 'three';
import assets from '../../../constants/assets';
import wait from '../../../utils/wait';
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

    this.cameraSlideDirection = 'none';
  }

  transitioning = false;
  async transitionLeft() {
    if (this.transitioning) return;
    this.transitioning = true;
    this.cameraSlideDirection = 'left';
    await wait(1000);
    await this.cameraLTR();
    this.transitioning = false;
  }
  async transitionRight() {
    if (this.transitioning) return;
    this.transitioning = true;
    this.cameraSlideDirection = 'right';
    await wait(1000);
    await this.cameraRTL();
    this.transitioning = false;
  }

  async cameraRTL() {
    this.camera.perspectiveCamera.position.x = 7;
    this.cameraSlideDirection = 'center';
    await wait(1000);
  }

  async cameraLTR() {
    this.camera.perspectiveCamera.position.x = -5;
    this.cameraSlideDirection = 'center';
    await wait(1000);
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

    if (this.cameraSlideDirection == 'left') {
      this.camera.perspectiveCamera.position.lerp(
        new Vector3(
          7,
          this.camera.perspectiveCamera.position.y,
          this.camera.perspectiveCamera.position.z
        ),
        0.05
      );
    } else if (this.cameraSlideDirection == 'right') {
      this.camera.perspectiveCamera.position.lerp(
        new Vector3(
          -5,
          this.camera.perspectiveCamera.position.y,
          this.camera.perspectiveCamera.position.z
        ),
        0.05
      );
    } else if (this.cameraSlideDirection == 'center') {
      this.camera.perspectiveCamera.position.lerp(
        new Vector3(
          0,
          this.camera.perspectiveCamera.position.y,
          this.camera.perspectiveCamera.position.z
        ),
        0.05
      );
    } else {
      this.camera.perspectiveCamera.position.x = 0;
    }
    // this?.scroll?.raf();
  }
}
