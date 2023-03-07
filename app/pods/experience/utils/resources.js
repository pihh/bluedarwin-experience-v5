import * as THREE from 'three';

import Experience from './experience';
import { EventEmitter } from 'events';
import { GLTFLoader } from '../loaders/GLTFLoader';
import { DRACOLoader } from '../loaders/DRACOLoader';
import { KTX2Loader } from '../loaders/KTX2Loader';
import { TextureLoader, VideoTexture } from 'three';

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    this.assets = assets;

    this.items = {};
    this.queue = this.assets.length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  get ready() {
    try {
      return this.loaded == this.queue;
    } catch (ex) {
      return true;
    }
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath('/draco/');
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

    this.loaders.ktx2Loader = new KTX2Loader();
    this.loaders.ktx2Loader.setTranscoderPath('/basis/');
    this.loaders.ktx2Loader.detectSupport(this.renderer.renderer);

    this.video = {};
    this.videoTexture = {};

    this.imageTexture = {};
  }

  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === 'glbModel') {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.singleAssetLoaded(asset, file);
        });
      } else if (asset.type === 'basisTexture') {
        this.loaders.ktx2Loader.load(asset.path, (file) => {
          this.singleAssetLoaded(asset, file);
        });
      } else if (asset.type === 'videoTexture') {
        this.video[asset.name] = document.createElement('video');
        this.video[asset.name].src = asset.path;
        this.video[asset.name].muted = true;
        this.video[asset.name].playsInline = true;
        this.video[asset.name].autoplay = true;
        this.video[asset.name].loop = true;
        this.video[asset.name].play();

        this.videoTexture[asset.name] = new VideoTexture(
          this.video[asset.name]
        );
        this.videoTexture[asset.name].flipY = true;
        this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
        this.videoTexture[asset.name].magFilter = THREE.NearestFilter;
        this.videoTexture[asset.name].generateMipmaps = false;
        this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

        this.singleAssetLoaded(asset, this.videoTexture[asset.name]);
      } else if (asset.type === 'imageTexture') {
        const tl = new TextureLoader();
        tl.load(asset.path, (texture) => {
          this.imageTexture[asset.name] = texture;
          this.singleAssetLoaded(asset, this.imageTexture[asset.name]);
        });
      }
    }
  }

  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;

    this.emit('resource-progress', this.loaded / this.queue);

    if (this.loaded === this.queue) {
      this.emit('ready');
    }
  }
}
