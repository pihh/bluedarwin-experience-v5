import * as THREE from 'three';
import {
  CineonToneMapping,
  PCFSoftShadowMap,
  sRGBEncoding,
  WebGLRenderer,
} from 'three';
import Experience from './experience';

export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.setRenderer();
  }

  setRenderer() {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });

    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.toneMapping = CineonToneMapping;
    this.renderer.toneMappingExposure = 1.75;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    // let start = Date.now();
    // this.renderer.setViewport(0, 0, this.sizes.width, this.sizes.height);
    this.renderer.render(this.scene, this.camera.perspectiveCamera);
    // console.log('diff', Date.now() - start);
    // Second Screen
    // this.renderer.setScissorTest(true);
    // this.renderer.setViewport(
    //     this.sizes.width - this.sizes.width / 3,
    //     this.sizes.height - this.sizes.height / 3,
    //     this.sizes.width / 3,
    //     this.sizes.height / 3
    // );

    // this.renderer.setScissor(
    //     this.sizes.width - this.sizes.width / 3,
    //     this.sizes.height - this.sizes.height / 3,
    //     this.sizes.width / 3,
    //     this.sizes.height / 3
    // );

    // this.renderer.render(this.scene, this.camera.perspectiveCamera);

    // this.renderer.setScissorTest(false);
  }
}
