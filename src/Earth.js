import CelestialObject from "./CelestialObject";

export default class Earth extends CelestialObject {
  constructor(scene) {
    
    super(scene, '../assets/textures/earth.jpg', 1.3, 'earth', 0.1, 35, 0.1);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
  }

  update(deltaTime) {
    super.update(deltaTime);
  }

}

