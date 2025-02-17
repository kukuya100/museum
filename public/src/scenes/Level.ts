// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-core";
import { PushActionScript } from "@phaserjs/editor-scripts-simple-animations";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { MoveInSceneActionScript } from "@phaserjs/editor-scripts-simple-animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // fufuSuperDino
    const fufuSuperDino = this.add.image(640, 257, "FufuSuperDino");

    // onPointerDownScript
    const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

    // pushAction
    new PushActionScript(onPointerDownScript);

    // onAwakeScript_1
    const onAwakeScript_1 = new OnAwakeScript(fufuSuperDino);

    // moveInSceneActionScript_1
    const moveInSceneActionScript_1 = new MoveInSceneActionScript(
      onAwakeScript_1,
    );

    // text
    const text = this.add.text(640, 458, "", {});
    text.setOrigin(0.5, 0.5);
    text.text = "Phaser 3 + Phaser Editor v4\nWebpack + TypeScript";
    text.setStyle({ align: "center", fontFamily: "Arial", fontSize: "3em" });

    // onAwakeScript
    const onAwakeScript = new OnAwakeScript(text);

    // moveInSceneActionScript
    const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

    // moveInSceneActionScript_1 (prefab fields)
    moveInSceneActionScript_1.from = "TOP";

    // moveInSceneActionScript (prefab fields)
    moveInSceneActionScript.from = "BOTTOM";

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    // let pinch = this.rexGestures.add.pinch({
    // 	enable: true,
    // 	bounds: undefined,
    // 	threshold: 0,
    // });
    //
    // pinch.on('pinch', function(pinch) {
    // 	// var scaleFactor = pinch.scaleFactor;
    // 	// gameObject.scaleX *= scaleFactor;
    // 	// gameObject.scaleY *= scaleFactor;
    // }, this);
    const pinch = this.rexGestures.add.pinch({ enable: true });

    pinch.on("pinch", (pinch: any) => {
      const scaleFactor = pinch.scaleFactor;
      this.cameras.main.zoom *= scaleFactor;
    });

    // this.rexUI.add.label({
    // 	x: 640,
    // 	y: 540,
    // 	background: this.rexUI.add.roundRectangle(100, 100, 100, 40, 20, 0x5e81ac),
    // 	text: this.add.text(0, 0, 'Click Me', {
    // 		fontSize: '20px'
    // 	}),
    // 	space: {
    // 		left: 10,
    // 		right: 10,
    // 		top: 10,
    // 		bottom: 10
    // 	}
    // }).setInteractive()
    // 	.on('pointerdown', () => {
    // 		console.log('Button clicked!');
    // 	});
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
