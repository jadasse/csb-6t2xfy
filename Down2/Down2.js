/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Down2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Down2/costumes/costume1.svg", {
        x: 31.5,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "o" }, this.whenKeyOPressed)
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast(440432);
  }

  *whenGreenFlagClicked() {
    this.goto(-60, -45);
  }

  *whenKeyOPressed() {
    this.broadcast(440432);
  }
}
