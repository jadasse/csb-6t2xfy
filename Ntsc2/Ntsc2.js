/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ntsc2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Ntsc2/costumes/costume1.svg", {
        x: 31.5,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "m" }, this.whenKeyMPressed)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("paltontsc1");
  }

  *whenGreenFlagClicked() {
    this.goto(-60, -140);
  }

  *whenKeyMPressed() {
    this.broadcast("paltontsc1");
  }
}
