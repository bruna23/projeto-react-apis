import Bug from "../icons/Bug.svg";

import Fire from "../icons/Fire.svg";
import Grass from "../icons/Grass.svg";

import Normal from "../icons/Normal.svg";
import Poison from "../icons/Poison.svg";

import Water from "../icons/Water.svg";

export const Type = (type) => {
  switch (type) {
    case "bug":
      return Bug;

    case "fire":
      return Fire;

    case "grass":
      return Grass;

    case "normal":
      return Normal;
    case "poison":
      return Poison;

    case "water":
      return Water;
    default:
  }
};
