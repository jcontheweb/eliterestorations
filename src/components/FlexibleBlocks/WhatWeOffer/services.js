import IconBiohazard from "../../../images/icons/biohazard-sign.inline.svg"
import IconCarpet from "../../../images/icons/carpet.inline.svg"
import IconFire from "../../../images/icons/fire.inline.svg"
import IconFlood from "../../../images/icons/flooded-house.inline.svg"
import IconMold from "../../../images/icons/shield.inline.svg"

const data = [
  {
    type: "carpet",
    path: "/service/carpet-tile",
    title: "Carpet & Tile",
    description: "some description about carpet & tile",
    thumbnail: IconCarpet,
  },
  {
    type: "water",
    path: "/service/water",
    title: "Water & Flooding",
    description: "some description about water & flooding",
    thumbnail: IconFlood,
  },
  {
    type: "mold",
    path: "/service/mold",
    title: "Mold Remediation",
    description: "some description about mold remediation",
    thumbnail: IconMold
  },
  {
    type: "fire",
    path: "/service/fire",
    title: "Fire Damage",
    description: "some description about fire damage",
    thumbnail: IconFire
  },
  {
    type: "biohazard",
    path: "/service/biohazard-trauma",
    title: "Biohazard & Trauma Cleanup",
    description: "some description about biohazard and trauma cleanup",
    thumbnail: IconBiohazard
  },
]

export default data
