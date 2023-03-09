import {
  BoxGeometry,
  DoubleSide,
  Group,
  Mesh,
  MeshLambertMaterial,
  PlaneGeometry,
  RepeatWrapping,
  ShadowMaterial,
  SpotLight,
  sRGBEncoding,
} from 'three';
import gsap from 'gsap';
import wait from '../../../utils/wait';
import { CONFIG } from '../../../constants/containers';
export class BluedarwinExperienceCard {
  TEXTURES = [
    'chatbotIntro',
    'chatbotWatson',
    'chatbotConversation',
    'chatbotDragDrop',
    'chatbotMultiChannel',
    'chatbotKpi',
    'chatbotSecure',
  ];
  OBJECT_CONFIGURATION = {
    rotation: {
      x: 0.05,
      y: -2.2,
      z: 0.2,
    },
  };
  textures = [];
  textureIdx = 0;

  children = {};

  constructor() {}

  create(name) {
    this.__initModel(name);
    this.__initShadows();
    this.__initLights();
    this.__initEvents();
  }

  __initModel(name, textures = []) {
    console.log(name, CONFIG[name]);
    this.TEXTURES = CONFIG[name].assets;
    for (let textureName of this.TEXTURES) {
      const texture = this.experience.resources.items[textureName];
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;

      // texture.format = THREE.RGBFormat;
      texture.encoding = sRGBEncoding;
      texture.repeat.set(1, 1);
      texture.rotation = Math.PI / 2;
      this.textures.push(texture);
    }

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshLambertMaterial({
      map: this.textures[0],
      // shading: THREE.FlatShading,
      side: DoubleSide,
    });

    // this.object = new Mesh(geometry, material);
    this.object = this.experience.resources.items[name].scene;

    this.object.name = name;

    this.object.rotation.set(
      this.OBJECT_CONFIGURATION.rotation.x,
      this.OBJECT_CONFIGURATION.rotation.y,
      this.OBJECT_CONFIGURATION.rotation.z
    );

    this.object.position.set(1.3, 0, 0);
    this.object.floatAnimation = 0;
    this.object.scale.set(1, 1, 1);

    this.object.originalPosition = JSON.parse(
      JSON.stringify(this.object.position)
    );
    this.object.originalRotation = JSON.parse(
      JSON.stringify(this.object.rotation)
    );
    this.object.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      child.originalPosition = JSON.parse(JSON.stringify(child.position));
      child.originalRotation = JSON.parse(JSON.stringify(child.rotation));

      if (child instanceof Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
          groupchild.originalPosition = JSON.parse(
            JSON.stringify(groupchild.position)
          );
          groupchild.originalRotation = JSON.parse(
            JSON.stringify(groupchild.rotation)
          );
        });
      }

      this.children[child.name.toLowerCase()] = child;
    });

    this.children.video.material = material;

    this.object.visible = false;
    this.object.name = name;
    this.experience.scene.add(this.object);
  }

  __initShadows() {
    if (!this.shadow) {
      const planeGeometry = new PlaneGeometry(8000, 8000);
      const planeMaterial = new ShadowMaterial({
        color: 0x000000,
        opacity: 0.025, // 0.2
      });

      planeGeometry.rotateX(-Math.PI / 2);

      this.shadow = new Mesh(planeGeometry, planeMaterial);
      this.shadow.position.y = this.object.position.y - 1;
      this.shadow.receiveShadow = true;
      this.shadow.name = 'shadow';
    }
    if (!this.object.hasShadow) {
      this.object.hasShadow = true;

      this.object.children.push(this.shadow);
    }
  }

  __initLights() {
    if (!this.light) {
      const light = new SpotLight(0xffffff, 0.000001);
      light.position.set(-50, 500, 200);
      light.angle = Math.PI * 0.05;
      light.castShadow = true;
      light.shadow.camera.near = 200;
      light.shadow.camera.far = 2000;
      light.shadow.bias = -0.000222;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      this.light = light;
    }

    if (!this.object.hasLight) {
      this.object.hasLight = true;

      this.object.children.push(this.light);
    }
  }

  __initEvents() {
    this.experience.eventEmitter.on('loadAsideSection', (id) => {
      if (!this.object.visible) return;
      console.log(id);
      this.glitch(id);
    });
  }

  setTexture(idx) {
    if (idx !== this.textureIdx && idx >= 0) {
      this.textureIdx = idx;
      this.children.video.material = new MeshLambertMaterial({
        map: this.textures[idx],
        // shading: THREE.FlatShading,
        side: DoubleSide,
      });
    }
  }

  glitching = false;
  async glitch(id) {
    if (this.glitching) return;
    this.glitching = true;
    await wait(150);
    const originalRotation = this.OBJECT_CONFIGURATION.rotation.y;
    gsap.to(this.object.rotation, {
      y: originalRotation + Math.PI * 2,
    });
    await wait(200);
    this.setTexture(id);
    await wait(800);
    this.object.rotation.y = originalRotation;
    await wait(250);
    this.glitching = false;
  }

  render() {
    const t = this.experience.time.elapsed * 0.0005;
    this?.object?.translateY(Math.sin(t) / 5000);
  }

  async enter() {
    console.log('enter');
    this.setTexture(0);
    this.object.visible = false;
    await this.experience.transitionLeft();
    this.object.visible = true;
  }

  async leave() {
    console.log('leave');
    this.object.visible = true;

    this.experience.transitionRight();
    await wait(500);
    this.object.visible = false;
    await wait(500);
    this.setTexture(0);
  }
}
