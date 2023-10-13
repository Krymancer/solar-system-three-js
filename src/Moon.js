import CelestialObject from "./CelestialObject";

export default class Moon extends CelestialObject {
    // constructor(scene, earth, positionMon, radius, rotationSpeed,orbit) {
        constructor(scene, parentPlanet, positionMon) {
        super(scene, '../assets/textures/moon.jpg', 0.3, 'moon', 0.8, false);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
        this.object.position.x = this.orbit - positionMon;
        parentPlanet.mesh.add(this.object); 
       
        this.radius = 3; 
    }
  
    update(deltaTime) {
        this.rotationAngle += this.rotationSpeed * deltaTime;
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