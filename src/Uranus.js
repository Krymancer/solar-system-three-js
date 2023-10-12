import CelestialObject from "./CelestialObject";

export default class Uranus extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/uranus.jpg', 2, 'uranus', 0.068,85, 0.072);
  }
}

