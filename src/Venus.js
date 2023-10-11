import CelestialObject from "./CelestialObject";

export default class Venus extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/venus.jpg', 1.5, 'venus',0.3,20, 0.8);
  }
}