import CelestialObject from "./CelestialObject";

export default class Earth extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/earth.jpg', 671.8);
    this.object.position.x = 4080;
  }
}