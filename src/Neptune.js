import CelestialObject from "./CelestialObject";

export default class Neptune extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/neptune.jpg', 671.8);
    this.object.position.x = 14080;
  }
}