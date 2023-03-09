import Experience from './experience';
import Lights from './lights';
// import Chatbot from '../../components/products/chatbot/world';
// import Streams from '../../components/products/streams/world';
// import Automation from '../../components/products/automation/world';
// import DocumentIntelligence from '../../components/products/document-intelligence/world';
// import Platform from '../../components/journey/world';

import { EventEmitter } from 'events';
import { ExperienceTeamCarlosGaveias } from '../../team/carlos-galveias/experience';
import { ExperienceTeamFilipeSa } from '../../team/filipe-sa/experience';
import { ExperienceTeamLuisPombo } from '../../team/luis-pombo/experience';
import { ExperienceTeamMiguelVasques } from '../../team/miguel-vasques/experience';
import { ExperienceTeamRicardoFavas } from '../../team/ricardo-favas/experience';
import { ExperienceTeamRicardoPerleques } from '../../team/ricardo-perleques/experience';
import { ExperienceTeamRuiCarvoeiro } from '../../team/rui-carvoeiro/experience';
import { ExperienceProductChatbot } from '../../products/chatbot/experience';
import { ExperienceJourney } from '../../journey/experience';
import { ExperienceProductDocumentIntelligence } from '../../products/document-intelligence/experience';
import { ExperienceProductAutomations } from '../../products/automations/experience';

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
      this.objects.push(new ExperienceTeamFilipeSa(this.experience));
      this.objects.push(new ExperienceTeamLuisPombo(this.experience));
      this.objects.push(new ExperienceTeamMiguelVasques(this.experience));
      this.objects.push(new ExperienceTeamRicardoFavas(this.experience));
      this.objects.push(new ExperienceTeamRicardoPerleques(this.experience));
      this.objects.push(new ExperienceTeamRuiCarvoeiro(this.experience));

      this.objects.push(new ExperienceProductChatbot(this.experience));
      this.objects.push(
        new ExperienceProductDocumentIntelligence(this.experience)
      );
      this.objects.push(new ExperienceProductAutomations(this.experience));
      this.objects.push(new ExperienceProductAutomations(this.experience));
      this.objects.push(new ExperienceJourney(this.experience));

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
