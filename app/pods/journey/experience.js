import { BluedarwinExperienceCard } from '../experience/objects/card';

/*
export class ExperienceJourney {
  static instance;
  constructor(experience) {
    if (ExperienceJourney.instance) {
      return ExperienceJourney.instance;
    }
    ExperienceJourney.instance = this;
    this.experience = experience;
    this.init();
  }

  init() {
    this.initModel();
    this.initShadows();
    this.initLights();
  }

  initModel() {
    // this.texture = this.experience.resources.imageTexture['teamCarlos'];
    // this.geometry = new PlaneGeometry(10, 10);
    // this.material = new MeshBasicMaterial({ map: this.texture });
    // this.mesh = new Mesh(this.geometry, this.material);

    this.geometry = new BoxGeometry(1, 1, 1);
    this.material = new MeshLambertMaterial({ color: 0x0000ff });
    this.object = new Mesh(this.geometry, this.material);
    this.object.name = 'journey';
    this.object.visible = false;
    this.setObjectX();
    this.experience.scene.add(this.object);

    // console.log(this.geometry);
    // this.particles = [];
    // for (let i = 0; i < this.geometry.vertices.length; i++) {
    //   const particle = new Vector3(
    //     this.geometry.vertices[i].x + Math.random() * 0.5,
    //     this.geometry.vertices[i].y + Math.random() * 0.5,
    //     this.geometry.vertices[i].z + Math.random() * 0.5
    //   );
    //   this.particles.push(particle);
    // }

    // this.pointGeometry = new BufferGeometry().setFromPoints(this.particles);
    // this.pointMaterial = new PointsMaterial({ size: 0.1 });
    // this.pointMesh = new Points(this.pointGeometry, this.pointMaterial);

    // this.experience.scene.add(this.mesh);
    // this.experience.scene.add(this.pointMesh);
  }
  initLights() {}
  initShadows() {}

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
  render() {
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;
    // for (let i = 0; i < this.particles.length; i++) {
    //   this.particles[i].add(
    //     new Vector3(
    //       Math.random() * 0.05 - 0.025,
    //       Math.random() * 0.05 - 0.025,
    //       Math.random() * 0.05 - 0.025
    //     )
    //   );
    // }
    // this.pointGeometry.verticesNeedUpdate = true;
    // this.experience.renderer.render(
    //   this.experience.scene,
    //   this.experience.camera.perspectiveCamera
    // );
  }

  async enter() {
    this.object.visible = false;
    this.experience.transitionLeft();
    await wait(1000);
    this.object.visible = true;
  }
  async leave() {
    this.object.visible = true;
    this.experience.transitionRight();
    await wait(1000);
    this.object.visible = false;
  }
}
*/

export class ExperienceJourney extends BluedarwinExperienceCard {
  static instance;
  constructor(experience) {
    super();
    if (ExperienceJourney.instance) {
      return ExperienceJourney.instance;
    }
    ExperienceJourney.instance = this;
    this.experience = experience;
    this.create('journey',{reflections:true});
  }
}
