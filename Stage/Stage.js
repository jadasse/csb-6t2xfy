/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound(
        "Mark IV - Mister Softee (N163-3)",
        "./Stage/sounds/Mark IV - Mister Softee (N163-3).mp3"
      ),
      new Sound(
        "Holtek HT3894A - The Picnic",
        "./Stage/sounds/Holtek HT3894A - The Picnic.mp3"
      ),
      new Sound(
        "Digital I - Turkey In The Straw",
        "./Stage/sounds/Digital I - Turkey In The Straw.mp3"
      ),
      new Sound(
        "Digital II - Turkey in the Straw",
        "./Stage/sounds/Digital II - Turkey in the Straw.mp3"
      ),
      new Sound(
        "Wolo 345 - It's a Small World",
        "./Stage/sounds/Wolo 345 - It's a Small World.mp3"
      ),
      new Sound("MegaCD BIOS (VRC7)", "./Stage/sounds/MegaCD BIOS (VRC7).mp3"),
      new Sound(
        "Scary Monsters Nice Sprites MIDI (VRC7)",
        "./Stage/sounds/Scary Monsters Nice Sprites MIDI (VRC7).mp3"
      ),
      new Sound(
        "DKC2 - Klomp's Romp (FDS)",
        "./Stage/sounds/DKC2 - Klomp's Romp (FDS).mp3"
      ),
      new Sound(
        "DKC2 - Snakey Chantey (N163-5)",
        "./Stage/sounds/DKC2 - Snakey Chantey (N163-5).mp3"
      ),
      new Sound(
        "FM Towns Marty BIOS (EPSM)",
        "./Stage/sounds/FM Towns Marty BIOS (EPSM).mp3"
      ),
      new Sound(
        "Sonic Adventure - Chao Theme MIDI (VRC7+N163-4)",
        "./Stage/sounds/Sonic Adventure - Chao Theme MIDI (VRC7+N163-4).mp3"
      ),
      new Sound(
        "Sonic's Schoolhouse - A.MID (VRC7 + N163-6)",
        "./Stage/sounds/Sonic's Schoolhouse - A.MID (VRC7 + N163-6).wav"
      ),
      new Sound(
        "DKC3 - Stilt Village (MMC5)",
        "./Stage/sounds/DKC3 - Stilt Village (MMC5).mp3"
      ),
      new Sound(
        "Windows 2000 (NES) - Solitaire Clear",
        "./Stage/sounds/Windows 2000 (NES) - Solitaire Clear.mp3"
      ),
      new Sound(
        "Super Donkey Kong 99 - Level 1 (EPSM)",
        "./Stage/sounds/Super Donkey Kong 99 - Level 1 (EPSM).mp3"
      ),
      new Sound(
        "The Hawaiian Serenaders - Hawaiian Tattoo",
        "./Stage/sounds/The Hawaiian Serenaders - Hawaiian Tattoo.mp3"
      ),
      new Sound(
        "Vim! - No (N163-3) (percussion amplified)",
        "./Stage/sounds/Vim! - No (N163-3) (percussion amplified).mp3"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "ntsctopal" },
        this.whenIReceiveNtsctopal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "paltontsc" },
        this.whenIReceivePaltontsc
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "33to45" },
        this.whenIReceive33to45
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "45to78" },
        this.whenIReceive45to78
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "33to78" },
        this.whenIReceive33to78
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "45to33" },
        this.whenIReceive45to33
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "78to33" },
        this.whenIReceive78to33
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "78to45" },
        this.whenIReceive78to45
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "next" }, this.whenIReceiveNext),
      new Trigger(
        Trigger.BROADCAST,
        { name: "previous" },
        this.whenIReceivePrevious
      ),
      new Trigger(Trigger.BROADCAST, { name: "play" }, this.whenIReceivePlay),
      new Trigger(Trigger.KEY_PRESSED, { key: "k" }, this.whenKeyKPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "up" }, this.whenIReceiveUp),
      new Trigger(
        Trigger.BROADCAST,
        { name: "432440" },
        this.whenIReceive432440
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "440432" },
        this.whenIReceive440432
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "wacky" }, this.whenIReceiveWacky),
      new Trigger(
        Trigger.BROADCAST,
        { name: "wacky2" },
        this.whenIReceiveWacky2
      ),
      new Trigger(Trigger.BROADCAST, { name: "loop" }, this.whenIReceiveLoop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "paltontsc1" },
        this.whenIReceivePaltontsc1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ntsctopal1" },
        this.whenIReceiveNtsctopal1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "snes9xup" },
        this.whenIReceiveSnes9xup
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "snes9xdown" },
        this.whenIReceiveSnes9xdown
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "dividefrequency" },
        this.whenIReceiveDividefrequency
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "negate" },
        this.whenIReceiveNegate
      )
    ];

    this.vars.temp = 1;
    this.vars.speed = 0;
    this.vars.song = 17;
    this.vars.wacky = 0;
    this.vars.wacky2 = 0;
    this.vars.speed2 = -14.670690006119742;
    this.vars.loop = 0;
    this.vars.ans1 = 44100;
    this.vars.ans2 = 48000;
    this.vars.speed3 = -7;

    this.watchers.speed = new Watcher({
      label: "speed",
      style: "slider",
      visible: true,
      value: () => this.vars.speed,
      setValue: value => {
        this.vars.speed = value;
      },
      x: 240,
      y: 180
    });
    this.watchers.song = new Watcher({
      label: "song",
      style: "normal",
      visible: true,
      value: () => this.vars.song,
      x: 240,
      y: 143
    });
    this.watchers.loop = new Watcher({
      label: "loop",
      style: "normal",
      visible: true,
      value: () => this.vars.loop,
      x: 240,
      y: 122
    });
  }

  *whenIReceiveNtsctopal() {
    this.vars.speed += (Math.log(1001 / 960) / Math.log(2)) * 120;
  }

  *whenIReceivePaltontsc() {
    this.vars.speed += (Math.log(960 / 1001) / Math.log(2)) * 120;
  }

  *whenIReceive33to45() {
    this.vars.speed += (Math.log(45 / (100 / 3)) / Math.log(2)) * 120;
    this.vars.temp = 2;
  }

  *whenIReceive45to78() {
    this.vars.speed += (Math.log(78 / 45) / Math.log(2)) * 120;
    this.vars.temp = 3;
  }

  *whenIReceive33to78() {
    this.vars.speed += (Math.log(78 / (100 / 3)) / Math.log(2)) * 120;
    this.vars.temp = 3;
  }

  *whenIReceive45to33() {
    this.vars.speed += (Math.log(100 / 3 / 45) / Math.log(2)) * 120;
    this.vars.temp = 1;
  }

  *whenIReceive78to33() {
    this.vars.speed += (Math.log(100 / 3 / 78) / Math.log(2)) * 120;
    this.vars.temp = 1;
  }

  *whenIReceive78to45() {
    this.vars.speed += (Math.log(45 / 78) / Math.log(2)) * 120;
    this.vars.temp = 2;
  }

  *whenIReceiveReset() {
    this.vars.speed = 0;
    this.vars.temp = 1;
  }

  *whenGreenFlagClicked() {
    this.vars.speed = 0;
    while (true) {
      this.audioEffects.pitch = this.vars.speed;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.song = 1;
    this.audioEffects.volume = 100;
    this.broadcast("play");
    while (true) {
      if (this.vars.song > 17) {
        this.vars.song = 1;
      }
      if (this.vars.song < 1) {
        this.vars.song = 17;
      }
      yield;
    }
  }

  *whenIReceiveNext() {
    if (this.vars.loop == 0) {
      this.vars.song += 1;
      this.broadcast("play");
    } else {
      this.broadcast("loop");
    }
  }

  *whenIReceivePrevious() {
    this.vars.song += -1;
    this.broadcast("play");
  }

  *whenIReceivePlay() {
    this.stopAllSounds();
    yield* this.playSoundUntilDone(this.vars.song);
    this.broadcast("next");
  }

  *whenKeyKPressed() {
    this.broadcast("play");
    this.audioEffects.volume = 100;
  }

  *whenKeySpacePressed() {
    while (!!this.keyPressed("space")) {
      yield;
    }
    if (
      this.keyPressed("up arrow") ||
      this.keyPressed("down arrow") || this.keyPressed("right arrow") ||
      this.keyPressed("left arrow")
    ) {
      this.broadcast("reset");
    } else {
      return;
    }
  }

  *whenIReceiveDown() {
    if (this.keyPressed("space")) {
      this.vars.speed = Math.round(this.vars.speed);
      this.vars.speed += -120;
    } else {
      this.vars.speed = Math.round(this.vars.speed);
      this.vars.speed += -1;
    }
  }

  *whenIReceiveUp() {
    if (this.keyPressed("space")) {
      this.vars.speed = Math.round(this.vars.speed);
      this.vars.speed += 120;
    } else {
      this.vars.speed = Math.round(this.vars.speed);
      this.vars.speed += 1;
    }
  }

  *whenIReceive432440() {
    this.vars.speed += (Math.log(440 / 432) / Math.log(2)) * 120;
  }

  *whenIReceive440432() {
    this.vars.speed += (Math.log(432 / 440) / Math.log(2)) * 120;
  }

  *whenGreenFlagClicked3() {
    this.vars.wacky = 0;
    this.vars.wacky2 = 0;
    this.vars.loop = 0;
    this.vars.temp = 1;
  }

  *whenIReceiveWacky() {
    this.vars.speed2 = this.vars.speed;
    if (this.vars.wacky2 == 1) {
      return;
    } else {
      while (true) {
        if (this.vars.wacky == 1) {
          while (true) {
            this.vars.speed += -120;
            yield* this.wait(0.01);
            this.vars.speed += 120;
            yield* this.wait(0.01);
            yield;
          }
        }
        if (this.vars.wacky == 2) {
          this.vars.speed = this.vars.speed2;
          this.vars.wacky = 0;
        }
        yield;
      }
    }
  }

  *whenIReceiveWacky2() {
    this.vars.speed2 = this.vars.speed;
    if (this.vars.wacky == 1) {
      return;
    } else {
      while (true) {
        if (this.vars.wacky2 == 1) {
          while (true) {
            this.vars.speed += 120;
            yield* this.wait(0.01);
            this.vars.speed += -120;
            yield* this.wait(0.01);
            yield;
          }
        }
        if (this.vars.wacky2 == 2) {
          this.vars.speed = this.vars.speed2;
          this.vars.wacky2 = 0;
        }
        yield;
      }
    }
  }

  *whenIReceiveLoop() {
    while (true) {
      yield* this.playSoundUntilDone(this.vars.song);
      if (this.vars.loop == 0) {
        this.broadcast("next");
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.vars.loop == 2) {
        this.vars.loop = 0;
      }
      yield;
    }
  }

  *whenIReceivePaltontsc1() {
    this.vars.speed += (Math.log(59 / 55) / Math.log(2)) * 120;
  }

  *whenIReceiveNtsctopal1() {
    this.vars.speed += (Math.log(55 / 59) / Math.log(2)) * 120;
  }

  *whenIReceiveSnes9xup() {
    this.vars.speed += (Math.log(37 / 36) / Math.log(2)) * 120;
  }

  *whenIReceiveSnes9xdown() {
    this.vars.speed += (Math.log(36 / 37) / Math.log(2)) * 120;
  }

  *whenKeyDPressed() {
    this.audioEffects.volume = 0;
  }

  *whenIReceiveDividefrequency() {
    yield* this.askAndWait("Set first frequency");
    this.vars.ans1 = this.answer;
    if (this.vars.ans1 == "") {
      return;
    } else {
      yield* this.askAndWait("Set second frequency");
      this.vars.ans2 = this.answer;
      if (this.vars.ans2 == "") {
        return;
      } else {
        this.vars.speed =
          this.vars.speed +
          (Math.log(this.vars.ans1 / this.vars.ans2) / Math.log(2)) * 120;
      }
    }
  }

  *whenIReceiveNegate() {
    this.vars.speed += (this.vars.speed + this.vars.speed * -2) * 2;
  }
}
