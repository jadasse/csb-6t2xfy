/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Up/costumes/costume1.svg", {
        x: 31.49999999999997,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("up");
  }

  *whenGreenFlagClicked() {
    this.goto(160, 75);
  }

  *whenKeyUpArrowPressed() {
    this.broadcast("up");
  }

  *whenKeyRightArrowPressed() {
    this.broadcast("up");
  }
}
