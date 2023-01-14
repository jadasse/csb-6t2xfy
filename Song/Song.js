/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Song extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Song/costumes/costume1.svg", {
        x: 31.50000000000003,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("choose a song:");
    if (this.answer > 0 && this.answer < 18) {
      this.stage.vars.song = this.answer;
      this.broadcast("play");
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-60, 75);
  }

  *whenKeySPressed() {
    yield* this.askAndWait("choose a song:");
    if (this.answer > 0 && this.answer < 18) {
      this.stage.vars.song = this.answer;
      this.broadcast("play");
    }
  }

  *whenKey1Pressed() {
    this.stage.vars.song = 1;
    this.broadcast("play");
  }

  *whenKey2Pressed() {
    this.stage.vars.song = 2;
    this.broadcast("play");
  }

  *whenKey3Pressed() {
    this.stage.vars.song = 3;
    this.broadcast("play");
  }

  *whenKey4Pressed() {
    this.stage.vars.song = 4;
    this.broadcast("play");
  }

  *whenKey5Pressed() {
    this.stage.vars.song = 5;
    this.broadcast("play");
  }

  *whenKey6Pressed() {
    this.stage.vars.song = 6;
    this.broadcast("play");
  }

  *whenKey7Pressed() {
    this.stage.vars.song = 7;
    this.broadcast("play");
  }

  *whenKey8Pressed() {
    this.stage.vars.song = 8;
    this.broadcast("play");
  }

  *whenKey9Pressed() {
    this.stage.vars.song = 9;
    this.broadcast("play");
  }

  *whenKey0Pressed() {
    this.stage.vars.song = 10;
    this.broadcast("play");
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed("q")) {
        this.stage.vars.song = 11;
        this.broadcast("play");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed(2)) {
        this.stage.vars.song = 12;
        this.broadcast("play");
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed(3)) {
        this.stage.vars.song = 13;
        this.broadcast("play");
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed(4)) {
        this.stage.vars.song = 14;
        this.broadcast("play");
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed(5)) {
        this.stage.vars.song = 15;
        this.broadcast("play");
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed(6)) {
        this.stage.vars.song = 16;
        this.broadcast("play");
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.keyPressed(1) && this.keyPressed(7)) {
        this.stage.vars.song = 17;
        this.broadcast("play");
      }
      yield;
    }
  }
}
