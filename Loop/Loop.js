/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Loop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Loop/costumes/costume1.svg", {
        x: 31.5,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "b" }, this.whenKeyBPressed)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.loop += 1;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 112);
  }

  *whenKeyBPressed() {
    this.stage.vars.loop += 1;
  }
}
