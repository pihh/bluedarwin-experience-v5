import Experience from './experience';
import Lights from './lights';
// import Chatbot from '../../components/products/chatbot/world';
// import Streams from '../../components/products/streams/world';
// import Automation from '../../components/products/automation/world';
// import DocumentIntelligence from '../../components/products/document-intelligence/world';
// import Platform from '../../components/journey/world';

import { EventEmitter } from 'events';
import { ExperienceTeamCarlosGaveias } from '../../team/carlos-galveias/experience';
import { ExperienceProductChatbot } from '../../products/chatbot/experience';

export default class World extends EventEmitter {
  objects = [];
  ready = false;
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    // this.mouse = this.experience.mouse;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      this.lights = new Lights(this.experience);
      this.objects.push(new ExperienceTeamCarlosGaveias(this.experience));
      this.objects.push(new ExperienceProductChatbot(this.experience));
      //   this.objects.push(new Chatbot(this.experience));
      //   this.objects.push(new Streams(this.experience));
      //   this.objects.push(new Automation(this.experience));
      //   this.objects.push(new Platform(this.experience));
      //   this.objects.push(new DocumentIntelligence(this.experience));
      //
      for (let object of this.objects) {
        this.scene.add(object.object);
      }
      this.ready = true;
      this.emit('ready');
    });
  }

  resize() {}

  update() {
    // const objectNames = this.objects.map((el) => el.object.name);
    // this.mouse.raycaster.setFromCamera(
    //   this.mouse.pointer,
    //   this.camera.perspectiveCamera
    // );
    //
    // // calculate objects intersecting the picking ray
    // const intersects = this.mouse.raycaster.intersectObjects(
    //   this.scene.children
    // );
    //
    // for (let i = 0; i < intersects.length; i++) {
    //   if (objectNames.indexOf(intersects[i].object.name) > -1) {
    //     console.log(intersects[i].object.name);
    //   }
    // }

    // console.log(this.objects.map((el) => el.object.name));
    // console.log('render');
    // this?.object?.render();

    this.objects.forEach((obj) => {
      obj.render();
    });
  }
}
