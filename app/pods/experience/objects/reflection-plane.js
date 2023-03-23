import { Reflector } from 'three/addons/objects/Reflector.js';
import {
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    CircleGeometry
} from 'three';



let geometry, groundMirror;

geometry = new CircleGeometry(40, 64);
groundMirror = new Reflector(geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0xb5b5b5
});
groundMirror.position.y = 0.5;
groundMirror.rotateX(- Math.PI / 2);
groundMirror.rotateY(0.2);


export function ReflectionPlane(obj) {
    if (obj.reflectionPlane) return;
    obj.reflectionPlane = groundMirror;
    obj.reflectionPlane.position.y = obj.object.position.y - 0.4;

    //obj.shadow.name = 'shadow';
    if (!obj.object.hasReflectionPlane) {
        obj.object.hasReflectionPlane = true;

        obj.object.children.push(obj.reflectionPlane);
   
    }

}