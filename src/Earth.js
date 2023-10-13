import CelestialObject from "./CelestialObject";
import Moon from "./Moon"

export default class Earth extends CelestialObject {
  constructor(scene) {
    
    super(scene, '../assets/textures/earth.jpg', 1.3, 'earth', 0.1, 35, 0.1);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
    // Adicionando a lua da terra
    // const moon = new Moon(scene, this, 3, 2, 3);
  }

  update(deltaTime) {
    super.update(deltaTime);
  }

}

