import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";


export default function getPlanets(scene) {
  const mercury = new Mercury(scene);
  const venus = new Venus(scene);
  const earth = new Earth(scene);
  const mars = new Mars(scene);
  const jupiter = new Jupiter(scene);
  const saturn = new Saturn(scene);
  const uranus = new Uranus(scene);
  const neptune = new Neptune(scene);

  return [
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune
  ];
}