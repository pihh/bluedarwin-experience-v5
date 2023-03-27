import {
  Color,
  DoubleSide,
  PlaneGeometry,
  Points,
  ShaderMaterial,
  Vector2,
  Vector4,
} from 'three';
import wait from '../../../utils/wait';
import lerp from '../../../utils/lerp';

import vertexShader from '../shaders/particlesVertex';
import fragmentShader from '../shaders/particlesFragment';

export class BluedarwinExperienceImage {
  constructor() {}

  create(name, textureName) {
    this.__initModel(name, textureName);
    this.__initShadows();
    this.__initLights();
    this.__initEvents();
  }

  __initModel(name, textureName) {
    // this.geometry = new PlaneGeometry(1, 1, 512, 512);
    this.geometry = new PlaneGeometry(1, 1, 51, 51);
    /*
    console.log({ geometry });
    // add an attribute
    var numVertices = geometry.attributes.position.count;
    var alphas = new Float32Array(numVertices * 1); // 1 values per vertex
    console.log({ numVertices });
    for (var i = 0; i < numVertices; i++) {
      // set alpha randomly
      alphas[i] = Math.random();
    }

    geometry.setAttribute('alpha', new BufferAttribute(alphas, 1));
    */
    // uniforms
    this.uniforms = {
      time: { type: 'f', value: 0 },
      resolution: { type: 'v4', value: new Vector4() },
      distortion: { type: 'f', value: 0 },
      opacity: { type: 'f', value: 1 },
      uvRate1: { value: new Vector2(1, 1) },
      color: { value: new Color(0xffff00) },
      texture1: { value: this.experience.resources.imageTexture[textureName] },
    };

    // point cloud material
    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      side: DoubleSide,
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable',
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });

    // point cloud
    this.object = new Points(this.geometry, this.material);
    this.object.rotation.y = -Math.PI / 5;
    this.object.name = name;
    this.object.visible = false;
    this.setObjectX();
    this.experience.scene.add(this.object);
  }
  __initLights() {}
  __initShadows() {}
  __initEvents() {
    // this.experience.eventEmitter.on('loadAsideSection', () => {
    //   this.glitch();
    // });
  }
  setObjectX() {
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
  }

  target = 1000;
  current = 0;
  render() {
    // this.material.uniforms.time.value = this.experience.time.elapsed;
  }

  // __getDistortion(distortion, duration) {
  //   const maxDuration = distortion * 1000;
  //   const unit = maxDistortion / duration;
  //   return { distortion, duration, unit };
  // }

  async explode() {
    const distortion = 1;
    const maxDistortion = distortion * 1000;
    const duration = 50;
    const unit = maxDistortion / duration;
    // const { distortion, duration, unit } = this.__getDistortion(1, 50);
    for (let i = 0; i < duration; i++) {
      this.uniforms.distortion.value = (i * unit) / 1000;
      this.uniforms.opacity.value = 1 - i / duration / 2;
      await wait(1);
    }
    this.uniforms.opacity.value = 0;
    this.uniforms.distortion.value = distortion;
  }
  async implode() {
    const distortion = 1;
    const maxDistortion = distortion * 1000;
    const duration = 50;
    const unit = maxDistortion / duration;
    //const { distortion, duration, unit } = this.__getDistortion(1, 50);
    for (let i = 0; i < duration; i++) {
      this.uniforms.distortion.value = distortion - (i * unit) / 1000;
      this.uniforms.opacity.value = i / duration;
      await wait(1);
    }
    this.uniforms.opacity.value = 1;
    this.uniforms.distortion.value = 0;
  }

  isGlitching = false;
  async glitch() {
    if (this.isGlitching) return;
    this.isGlitching = true;
    // (Math.random() * (1.2 - 0.8) + 0.8).toFixed(4);
    const distortion = 1.2;
    const maxDistortion = distortion * 1000;
    const duration = 25;
    const unit = maxDistortion / duration;
    for (let i = 0; i < duration; i++) {
      this.uniforms.distortion.value = (i * unit) / 1000;
      await wait(1);
    }
    this.uniforms.distortion.value = distortion;
    await wait(1500);
    for (let i = 0; i < duration; i++) {
      this.uniforms.distortion.value = distortion - (i * unit) / 1000;
      await wait(1);
    }
    this.uniforms.distortion.value = 0;
    this.isGlitching = false;
  }

  async enter() {
    this.object.visible = false;
    //this.experience.transitionLeft();
    await wait(2000);
    //this.object.visible = true;
    // this.implode();
  }
  async leave() {
    //this.object.visible = true;
    // this.explode();
    //this.experience.transitionRight();
    await wait(1000);
    this.object.visible = false;
  }
}
