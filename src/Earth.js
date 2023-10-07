import CelestialObject from "./CelestialObject";

export default class Earth extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/earth.jpg', 1, 'earth',0.04,30);
  }
}