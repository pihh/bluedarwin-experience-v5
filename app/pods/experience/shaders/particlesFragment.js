/*
const fragment = `
uniform vec3 color;
varying float vAlpha;

void main() {
    gl_FragColor = vec4( color, vAlpha );
}
`;
*/

const fragment = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.14159265359;

void main(){
    vec4 tt = texture2D(texture1,vUv);
    gl_FragColor = vec4(1.,0.,0.0,1.);
    gl_FragColor = tt;
}
`;

export default fragment;
