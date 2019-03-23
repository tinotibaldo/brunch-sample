import Webgl from 'js/core/Webgl';
import loop from 'js/core/Loop';
import props from 'js/core/props';
import Example from 'js/components/Example';
import Example2 from 'js/components/Example2';


// ##
// INIT
const webgl = new Webgl(window.innerWidth, window.innerHeight);
document.body.appendChild(webgl.dom);
// - Add object update to loop
loop.add(webgl.onUpdate);

// ##
// GUI
const gui = new dat.GUI();
gui.add(props, 'rotation', 0.01, 1);
gui.close();

// ##
// EXAMPLE LIGHT
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(1, 1, 1);
webgl.add(light);

// ##
// EXAMPLE BOX
const example = new Example();
webgl.add(example);
loop.add(example.onUpdate);


const example2 = new Example2();
example2.position.y = 1;
webgl.add(example2);
loop.add(example2.onUpdate);
// ##
// RENDERER
loop.start();


// ##
// ON RESIZE / ORIENTATION CHANGE
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  webgl.onResize(w, h);
}

window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);
