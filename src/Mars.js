import CelestialObject from "./CelestialObject";
import Moon from "./Moon"

export default class Mars extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mars.jpg', 0.80, 'mars', 0.24,45, 0.103);

    //Criando Luas de marte
    const moon = new Moon(scene, this, 3);
  }
 
}

