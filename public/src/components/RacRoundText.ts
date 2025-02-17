import Util from "../Util";
export default class RacRoundText {
  style: any;
  container: any;
  roundBox: any;
  text: any;
  constructor(scene, options) {
    // 기본 스타일 설정 (사용자가 전달하지 않은 경우)
    const defaultOptions = {
      width: 700,
      height: 130,
      xPos: 0,
      yPos: 800,
      round: 25,
      bgColor: 0xffffff,
      bgAlpha: 0.3,
      text: "묘지명 제작소 채널이 검색되었어요.\n돋보기를 눌러 채널에 입장하세요.",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "26pt",
      color: "#000000",
      align: "center",
      lineSpacing: 3,
    };

    // 사용자가 제공한 옵션과 기본 옵션을 병합
    this.style = { ...defaultOptions, ...options };

    // 컨테이너 생성
    this.container = scene.add.container(this.style.xPos, this.style.yPos);

    // 둥근 사각형 생성
    this.roundBox = scene.add.rexRoundRectangle(
      0,
      0,
      this.style.width,
      this.style.height,
      this.style.round,
      this.style.bgColor,
    );
    this.roundBox.setAlpha(this.style.bgAlpha);
    this.roundBox.setOrigin(0.5, 0.5);
    this.container.add(this.roundBox);
    if (options.strokeWidth > 0) {
      this.roundBox.lineWidth = options.strokeWidth;
      this.roundBox.strokeColor = this.roundBox.strokeColor
        ? this.roundBox.strokeColor
        : 0x000000;
    }
    this.roundBox.setName("roundBox");

    // 텍스트 추가
    if (options.text) {
      if (this.style.align === "center") {
        this.text = scene.add
          .text(0, 0, this.style.text, {
            fontFamily: this.style.fontFamily,
            fontSize: this.style.fontSize,
            color: this.style.color,
            align: this.style.align,
            lineSpacing: this.style.lineSpacing,
            wordWrapWidth: this.style.width - 60,
          })
          .setOrigin(0.5, 0.5);
      } else {
        this.text = scene.add
          .text(
            //this.style.textXPos ? this.style.textXPos : 10,
            -this.style.width / 2 + 30,
            0,
            this.style.text,
            {
              fontFamily: this.style.fontFamily,
              fontSize: this.style.fontSize,
              color: this.style.color,
              align: this.style.align,
              lineSpacing: this.style.lineSpacing,
            },
          )
          .setOrigin(0, 0.5);
      }
      this.text.setName("text");
      this.text.setWordWrapWidth(this.style.width);
      this.container.add(this.text);

      if (options.textExWord) {
        Util.setTextEx(
          scene,
          this.container,
          this.text,
          options.textExWord,
          this.text.width,
          "btn_word_plus",
        );
      }
    }

    if (options.depth) {
      this.container.setDepth(options.depth);
      this.roundBox.setDepth(options.depth);
    }
  }

  // 컨테이너 반환 (필요한 경우 접근할 수 있도록)
  getContainer() {
    return this.container;
  }
  setRacText(text) {
    this.text.setText(text);
  }
}
