import CelestialObject from "./CelestialObject";

export default class Mercury extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mercury.jpg', 0.42, 'mercury', 0.48,15, 2.8);
  }
}

