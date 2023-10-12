import CelestialObject from "./CelestialObject";

export default class Earth extends CelestialObject {
  constructor(scene) {
    
    super(scene, '../assets/textures/earth.jpg', 1.5, 'earth', 0.2, 30, 2);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }

  update(deltaTime) {
    super.update(deltaTime);
  }

}

