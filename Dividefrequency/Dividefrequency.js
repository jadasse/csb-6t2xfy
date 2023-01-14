/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dividefrequency extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Dividefrequency/costumes/costume1.svg", {
        x: 31.5,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "i" }, this.whenKeyIPressed)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("dividefrequency");
  }

  *whenGreenFlagClicked() {
    this.goto(160, 150);
  }

  *whenKeyIPressed() {
    this.broadcast("dividefrequency");
  }
}
