import * as THREE from 'three';

export default class StarField {
  constructor(scene, texturePath = "../assets/textures/galaxy_starfield.png", radius = 5000, id = 'star_field', rotationSpeed = 0, orbit = false) {
    this.scene = scene;
    const BACkGROUND_STARS = 2500;
    const BACKGROUND_STAR_FIELD_DISTANCE = 1000;
    const BACKGROUND_STAR_RADIUS = 10000;
    const SCALE = 1 / 6357;
    const AVAILABLE_COLORS = [
      0xfffa78, 0xffabab, 0xa8adff, 0xffffff, 0xffffff, 0xffffff, 0xffffff,
      0xffffff, 0xffffff,
    ];

    const bgStarGeometry = new THREE.SphereGeometry(
      BACKGROUND_STAR_RADIUS * SCALE,
      8,
      8
    );

    const bgStarMaterials = AVAILABLE_COLORS.map((color) => {
      const bgStarMaterial = new THREE.MeshBasicMaterial();
      bgStarMaterial.color = new THREE.Color(color);
      return bgStarMaterial;
    });

    for (let index = 0; index < BACkGROUND_STARS; index++) {
      // Create stars with random colors
      const material = bgStarMaterials[Math.floor(Math.random() * bgStarMaterials.length)];

      const bgStarMesh = new THREE.Mesh(bgStarGeometry, material);

      bgStarMesh.position.setFromSphericalCoords(
        BACKGROUND_STAR_FIELD_DISTANCE,
        Math.random() * 2 * Math.PI,
        Math.random() * 2 * Math.PI
      );

      this.scene.add(bgStarMesh);
    }
  }
}