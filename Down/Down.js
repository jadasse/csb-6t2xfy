/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Down extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Down/costumes/costume1.svg", {
        x: 31.5,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("down");
  }

  *whenGreenFlagClicked() {
    this.goto(-160, 75);
  }

  *whenKeyDownArrowPressed() {
    this.broadcast("down");
  }

  *whenKeyLeftArrowPressed() {
    this.broadcast("down");
  }
}
