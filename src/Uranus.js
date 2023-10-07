import CelestialObject from "./CelestialObject";

export default class Uranus extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/uranus.jpg', 1.75, 'uranus',0.004,80);
  }
}

