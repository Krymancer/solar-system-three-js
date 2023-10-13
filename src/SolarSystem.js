import * as THREE from "three";

import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";
import Sun from "./Sun";
import Moon from "./Moon";
import StarField from "./StarField";

export default function getSolarSystem(scene) {
    const starfield = new StarField(scene);
    const sun = new Sun(scene);
    const mercury = new Mercury(scene);
    const venus = new Venus(scene);
    const earth = new Earth(scene);
    const moon = new Moon(scene,earth, 4);
    const mars = new Mars(scene);
    const moon2 = new Moon(scene,mars, 2);
    const jupiter = new Jupiter(scene);
    const saturn = new Saturn(scene);
    const uranus = new Uranus(scene);
    const neptune = new Neptune(scene);

    return [
        sun,
        mercury,
        venus,
        earth,
        moon,
        mars,
        moon2,
        jupiter,
        saturn,
        uranus,
        neptune
    ];
}



