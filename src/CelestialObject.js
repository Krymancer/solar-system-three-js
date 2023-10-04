import * as THREE from "three";

export default class CelestialObject {
  constructor(scene) {
    this.radius = 2;
    const loader = new THREE.TextureLoader();
    const texture = loader.load( '../assets/textures/sun.jpg' );
    texture.colorSpace = THREE.SRGBColorSpace;
    this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);
    this.material = new THREE.MeshBasicMaterial({ map: texture });
    this.object = new THREE.Mesh(this.geometry, this.material);

    scene.add(this.object);
  }

  update() {

  }

  render() {

  }
}
