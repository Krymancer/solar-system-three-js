import * as THREE from "three";

import Sun from "./src/Sun.js";
import getPlanets from "./src/planets.js";

const width = window.innerWidth;
const height = window.innerHeight;
const aspectRation = width / height;
const fieldOfView = 75;
const near = 100;
const far = 16000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRation,
  near,
  far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
// const axesHelper = new THREE.AxesHelper( 10000 );
// scene.add( axesHelper );


const sun = new Sun(scene);
const planets = getPlanets(scene);

const celestialObjects = [
  sun,
  ...planets
];

camera.position.z = 14000;

function animate() {
  requestAnimationFrame(animate);

  celestialObjects.forEach((celestialObject) => {
    celestialObject.update();
  });

  renderer.render(scene, camera);
}

animate();