import { BufferAttribute } from 'three';
import {
  BufferGeometry,
  Color,
  DoubleSide,
  PlaneGeometry,
  Points,
  ShaderMaterial,
  Vector2,
  Vector4,
} from 'three';

import vertexShader from '../shaders/backgroundVertex';
import fragmentShader from '../shaders/backgroundFragment';

export class BluedarwinExperienceParticle {
  _separation = 10;
  _amountX = 50;
  _amountY = 50;
  _particles = [];
  _count = 0;

  PI2 = Math.PI * 2;
  // let container, stats;
  // let camera, scene, renderer;
  // let particles, particle, count = 0;
  // let mouseX = 0, mouseY = 0;
  // let windowHalfX = window.innerWidth / 2;
  // let windowHalfY = window.innerHeight / 2;

  constructor() {
    this._nParticles = this._amountX * this._amountY;
    this._positions = new Float32Array(this._nParticles * 3);
    this._scales = new Float32Array(this._nParticles);
  }

  create() {
    this.__initModel();
    this.__initShadows();
    this.__initLights();
    this.__initEvents();
  }

  __initModel() {
    let i = 0;
    let j = 0;

    for (let ix = 0; ix < this._amountX; ix++) {
      for (let iy = 0; iy < this._amountY; iy++) {
        this._positions[i] =
          ix * this._separation - (this._amountX * this._separation) / 2; // x
        this._positions[i + 1] = 0; // y
        this._positions[i + 2] =
          iy * this._separation - (this._amountY * this._separation) / 2; // z

        this._scales[j] = 1;

        i += 3;
        j++;
      }
    }

    this.geometry = new BufferGeometry();
    this.geometry.setAttribute(
      'position',
      new BufferAttribute(this._positions, 3)
    );
    this.geometry.setAttribute('scale', new BufferAttribute(this._scales, 1));

    this.material = new ShaderMaterial({
      uniforms: {
        color: { value: new Color(0xffffff) },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    //

    this._particles = new Points(this.geometry, this.material);
    this._particles.rotation.x = 0.1;
    this._particles.rotation.y = -0.1;
    this.object = this._particles;
    console.log({ particles: this._particles, geometry: this.geometry });
    this.experience.scene.add(this.object);
  }
  __initLights() {}
  __initShadows() {}
  __initEvents() {
    console.log(this.experience.camera);
    document.body.addEventListener('pointermove', (event) => {
      this.experience.mouse.x = event.clientX - this.experience.sizes.width / 2;
      this.experience.mouse.y =
        event.clientY - this.experience.sizes.height / 2;
    });
  }
  setObjectX() {
    /*
      const $width = this.experience.sizes.width;
      if ($width >= 1536) {
        this.object.position.x = 1.5;
      } else if ($width > 1280) {
        this.object.position.x = 1;
      } else if ($width > 1024) {
        this.object.position.x = 0.75;
      } else if ($width > 768) {
        this.object.position.x = 0.6;
      } else {
        this.object.position.x = -0.5;
      }
      */
  }

  render() {
    this.experience.camera.perspectiveCamera.position.x +=
      (this.experience.mouse.x -
        this.experience.camera.perspectiveCamera.position.x) *
      0.05;
    this.experience.camera.perspectiveCamera.position.y +=
      (-this.experience.mouse.y -
        this.experience.camera.perspectiveCamera.position.y) *
      0.05;
    this.experience.camera.perspectiveCamera.lookAt(
      this.experience.scene.position
    );
    this._positions = this._particles.geometry.attributes.position.array;
    this._scales = this._particles.geometry.attributes.scale.array;

    let i = 0,
      j = 0;

    for (let ix = 0; ix < this._amountX; ix++) {
      for (let iy = 0; iy < this._amountY; iy++) {
        this._positions[i + 1] =
          Math.sin((ix + this._count) * 0.3) * 50 +
          Math.sin((iy + this._count) * 0.5) * 50;

        this._scales[j] =
          (Math.sin((ix + this._count) * 0.3) + 1) * 20 +
          (Math.sin((iy + this._count) * 0.5) + 1) * 20;

        i += 3;
        j++;
      }
    }

    this._particles.geometry.attributes.position.needsUpdate = true;
    this._particles.geometry.attributes.scale.needsUpdate = true;

    // renderer.render( scene, camera );

    this._count += 0.1;
  }

  async enter() {
    //   this.object.visible = false;
    //   //this.experience.transitionLeft();
    //   await wait(2000);
    //   this.object.visible = true;
    //   this.implode();
  }
  async leave() {
    //   this.object.visible = true;
    //   this.explode();
    //   //this.experience.transitionRight();
    //   await wait(1000);
    //   this.object.visible = false;
  }
}

export class ExperienceBackground extends BluedarwinExperienceParticle {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceBackground.instance) {
      return ExperienceBackground.instance;
    }
    ExperienceBackground.instance = this;
    this.experience = experience;
    this.create();
  }
}
