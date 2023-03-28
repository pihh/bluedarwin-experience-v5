import Controller from '@ember/controller';
import { action } from '@ember/object';
import hljs from 'highlight.js';
import CognusChatbot from 'CognusChatbot/build';

export default class DocumentationChatbotController extends Controller {
  @action didInsert() {
    console.log('didInsert', hljs);
    hljs.initHighlightingOnLoad();
  }

  @action getIframeElement() {
    alert('@todo');
  }

  @action listDefaultStyles() {
    alert('@todo');
  }
  @action bootIframe() {
    const buttonColor = null;
    const colorSend = null;
    const colorStart = null;
    const colorEnd = null;

    // set your credentials
    const CHANNEL_TOKEN = '8f2e2fbf-b6d5-46e3-aa5b-69a163cc3eeb';
    const API_KEY = '87a17c87-7c75-4e66-be14-b15905a2f5a8';
    const ENVIRONMENT = 'development';
    const CONFIG = {
      environment: ENVIRONMENT,
      display: {
        colors: {
          headerGradientStart: colorStart || '#fa551e',
          headerGradientEnd: colorEnd || '#fa551e',
          headerLetters: 'light',
          sendMessageButton: colorSend || '#fa551e',
        },
      },
      context_variables: {
        developer: 'Pihh himself',
        storedParameter: 'pihh',
      },
    };

    // boot your Api
    // boot your Iframe
    this.iframe = new CognusChatbot.Iframe(CHANNEL_TOKEN, API_KEY, CONFIG);
    this.iframe.render();
  }
  @action bootApi() {
    alert('@todo');
  }
  @action getMeta() {
    alert('@todo');
  }
  @action getConversation() {
    alert('@todo');
  }
  @action sendTextMessage() {
    alert('@todo');
  }
  @action sendPostBack() {
    alert('@todo');
  }
  @action sendVoice() {
    alert('@todo');
  }
  @action startConversation() {
    alert('@todo');
  }
  @action resetConversation() {
    alert('@todo');
  }
}
