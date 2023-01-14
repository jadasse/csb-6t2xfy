import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _33 from "./_33/_33.js";
import _45 from "./_45/_45.js";
import _78 from "./_78/_78.js";
import Ntsc from "./Ntsc/Ntsc.js";
import Pal from "./Pal/Pal.js";
import Reset from "./Reset/Reset.js";
import Add from "./Add/Add.js";
import Prev from "./Prev/Prev.js";
import Next from "./Next/Next.js";
import Set from "./Set/Set.js";
import Rewind from "./Rewind/Rewind.js";
import Song from "./Song/Song.js";
import Up from "./Up/Up.js";
import Down from "./Down/Down.js";
import Down2 from "./Down2/Down2.js";
import _440 from "./_440/_440.js";
import W2 from "./W2/W2.js";
import W from "./W/W.js";
import Loop from "./Loop/Loop.js";
import Ntsc2 from "./Ntsc2/Ntsc2.js";
import Ntsc3 from "./Ntsc3/Ntsc3.js";
import Ntsc4 from "./Ntsc4/Ntsc4.js";
import Ntsc5 from "./Ntsc5/Ntsc5.js";
import Dividefrequency from "./Dividefrequency/Dividefrequency.js";
import Negate from "./Negate/Negate.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _33: new _33({
    x: -120,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  _45: new _45({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  _78: new _78({
    x: 120,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  Ntsc: new Ntsc({
    x: -120,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Pal: new Pal({
    x: 120,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Reset: new Reset({
    x: 60,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 19
  }),
  Add: new Add({
    x: -60,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Prev: new Prev({
    x: -200,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Next: new Next({
    x: 200,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Set: new Set({
    x: 60,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Rewind: new Rewind({
    x: 0,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Song: new Song({
    x: -60,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 23
  }),
  Up: new Up({
    x: 160,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Down: new Down({
    x: -160,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Down2: new Down2({
    x: -60,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  _440: new _440({
    x: 60,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  W2: new W2({
    x: -180,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  W: new W({
    x: 180,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Loop: new Loop({
    x: 0,
    y: 112,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 20
  }),
  Ntsc2: new Ntsc2({
    x: -60,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  }),
  Ntsc3: new Ntsc3({
    x: 60,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  }),
  Ntsc4: new Ntsc4({
    x: -120,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 22
  }),
  Ntsc5: new Ntsc5({
    x: 120,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 21
  }),
  Dividefrequency: new Dividefrequency({
    x: 160,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 24
  }),
  Negate: new Negate({
    x: 192,
    y: 17,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 25
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
