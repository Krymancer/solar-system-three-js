import CelestialObject from "./CelestialObject";

export default class Mars extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mars.jpg', 1.8, 'mars',0.02,40);
  }
}

