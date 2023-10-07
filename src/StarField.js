import * as THREE from 'three';

export default class StarField {
  constructor(scene, texturePath = "../assets/textures/galaxy_starfield.png", radius = 5000, id = 'star_field', rotationSpeed = 0, orbit = false) {
    this.object = new THREE.Object3D();
    this.geometry = new THREE.SphereGeometry(radius, 50, 50);
    this.texture = new THREE.TextureLoader().load(texturePath);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.material = new THREE.MeshBasicMaterial({ map: this.texture, side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.object.add(this.mesh);
    this.scene = scene;
    this.scene.add(this.object);
  }
}