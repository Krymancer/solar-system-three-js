import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import Timer from "./src/Timer.js";
import getSolarSystem from "./src/SolarSystem.js";

const width = window.innerWidth;
const height = window.innerHeight;
const aspectRation = width / height;
const fieldOfView = 50;
const near = 10;
const far = 16000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRation,
  near,
  far
);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

const solarSystem = getSolarSystem(scene);
// const planets = getPlanets(scene);

const celestialObjects = [
  ...solarSystem
];

camera.position.set(0,25,145);
controls.update();

renderer.shadowMap.enabled = true;

function main() {
  const timer = new Timer();

  timer.update = function update(deltaTime) {
    celestialObjects.forEach((celestialObject) => {
      celestialObject.update(deltaTime);
    });
    controls.update();
    renderer.render(scene, camera);
  }

  timer.start();
}

main();
