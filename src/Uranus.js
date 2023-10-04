import CelestialObject from "./CelestialObject";

export default class Uranus extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/uranus.jpg', 671.8);
    this.object.position.x = 12080;
  }
}