import CelestialObject from "./CelestialObject";

export default class Venus extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/venus.jpg', 0.98, 'venus',0.35,25, 8.15);
  }
}