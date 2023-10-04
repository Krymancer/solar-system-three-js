import CelestialObject from "./CelestialObject";

export default class Venus extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/venus.jpg', 651.8);
    this.object.position.x = 2080;
  }
}