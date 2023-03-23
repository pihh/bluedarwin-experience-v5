import {
    Mesh,
    PlaneGeometry,
    ShadowMaterial,
} from 'three';

let planeGeometry,planeMaterial,planeMesh;


planeGeometry = new PlaneGeometry(8000, 8000);
planeMaterial = new ShadowMaterial({
    color: 0x000000,
    opacity: 0.1, // 0.2
});

planeGeometry.rotateX(-Math.PI / 2);

planeMesh = new Mesh(planeGeometry, planeMaterial);
planeMesh.name = "shadow";
planeMesh.receiveShadow = true;

export function ShadowPlane(obj) {
    if (obj.shadow) return;
    obj.shadow = planeMesh;
    obj.shadow.position.y = obj.object.position.y - 1;
    obj.shadow.receiveShadow = true;
    //obj.shadow.name = 'shadow';
    if (!obj.object.hasShadow) {
        obj.object.hasShadow = true;

        obj.object.children.push(obj.shadow);
    }

}