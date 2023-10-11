import CelestialObject from "./CelestialObject";

export default class Mercury extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mercury.jpg', 1, 'mercury',0.5,10, 0.5);
  }
}

