import { DirectionalLight, AmbientLight } from 'three';
export default class Lights {
  constructor(experience) {
    this.ambientLight = new AmbientLight('#ffffff', 1);
    this.sunLight = new DirectionalLight('#ffffff', 1);
    this.sunLight.castShadow = false;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(-10, 5, 2);
    this.sunLight.name = 'sunLight';

    experience.scene.add(this.sunLight);
    experience.scene.add(this.ambientLight);
  }
}
