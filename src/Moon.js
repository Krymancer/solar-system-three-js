import CelestialObject from "./CelestialObject";

export default class Moon extends CelestialObject {
    constructor(scene, earth, radius, rotationSpeed,orbit) {
        super(scene, '../assets/textures/moon.jpg', 0.3, 'moon', 1, false);

        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
        this.object.position.x = this.orbit - 2;
        earth.mesh.add(this.object); // A Lua é filha da Terra
        this.radius = 3;
    }
  
    update(deltaTime) {
        this.rotationAngle -= this.rotationSpeed * deltaTime;
        this.object.rotation.y = this.rotationAngle;
        this.translation(deltaTime);
    }

    translation(deltaTime) {
        this.mesh.position.x = Math.cos(deltaTime * this.rotationSpeed) * this.radius;
        this.mesh.position.z = Math.sin(deltaTime * this.rotationSpeed) * this.radius;
        this.object.position.x = 0.1;
        this.object.position.z = 0.1;
    }
}