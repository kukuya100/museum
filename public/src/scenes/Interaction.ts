import Phaser from "phaser";

export default class Interaction extends Phaser.Scene {
  constructor() {
    super("Interaction");
  }

  editorCreate(): void {
    // voteCountingArea
    const voteCountingArea = this.add.rectangle(540, 50, 1000, 20);
    voteCountingArea.isFilled = true;
    voteCountingArea.fillColor = 0;
    voteCountingArea.isStroked = true;

    // voteObject
    const voteObject = this.add.rectangle(540, 50, 1000, 10);
    voteObject.isFilled = true;

    this.voteObject = voteObject;

    this.events.emit("scene-awake");
  }

  public voteObject!: Phaser.GameObjects.Rectangle;

  create() {
    this.editorCreate();

    const path = new Phaser.Curves.Path(540, 50);
    path.cubicBezierTo(540, 50, 540, 50, 540, 50);

    this.tweens.add({
      targets: this.voteObject,
      height: 1800,
      duration: 2000,
      ease: "Power2",
    });

    this.tweens.add({
      targets: this.voteObject,
      yoyo: true,
      repeat: -1,
      duration: 500,
      ease: "Sine.easeInOut",
    });
  }
}
