import EmberRouter from '@ember/routing/router';
import config from 'bluedarwin-experience-v5/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('journey', {
    path: '/',
  });

  this.route('team', function () {
    this.route('carlos-galveias');
    this.route('luis-pombo');
    this.route('filipe-sa');
  });

  this.route('products', function () {
    this.route('automations');
    this.route('chatbot');
    this.route('streams');
    this.route('document-intelligence');
  });

  this.route('documentation', function () {
    this.route('chatbot');
  });

  this.route('try', function () {
    this.route('document-intelligence');
    this.route('streams');
  });
  this.route('contacts');
});
