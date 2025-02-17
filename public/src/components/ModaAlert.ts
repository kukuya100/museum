import BBCodeText from "phaser3-rex-plugins/plugins/bbcodetext";
import Util from "../Util";
import RacRoundText from "../components/RacRoundText";
export default class ModaAlert {
  style: any;
  container: any;
  roundBox: any;
  title: any;
  text: any;
  blackLayer: any;
  btnClose: any;
  options: any;
  addImg: any;
  constructor(scene, options) {
    let _this = this;
    // 기본 스타일 설정 (사용자가 전달하지 않은 경우)
    const defaultOptions = {
      width: 700,
      height: 130,
      xPos: 0,
      yPos: 800,
      round: 25,
      bgColor: 0x000000,
      bgAlpha: 1,
      title: null,
      text: "확인",
      textAddY: 0,
      fontFamilyBold: "KoddiUDOnGothic-Bold",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSizeTitle: "30pt",
      fontSize: "30pt",
      color: "#000000",
      align: "center",
      lineSpacing: 3,
    };

    this.options = options;
    // 사용자가 제공한 옵션과 기본 옵션을 병합
    this.style = { ...defaultOptions, ...options };

    if (this.style.blackLayer) {
      this.blackLayer = scene.add
        .rectangle(0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.5)
        .setOrigin(0, 0)
        .setDepth(2);
      scene.add.existing(this.blackLayer);

      this.blackLayer
        .setInteractive()
        .once("pointerdown", function (pointer, localX, localY, event) {
          _this.hide();
          event.stopPropagation();
        });
    }

    // 컨테이너 생성
    this.container = scene.add.container(
      scene.scale.width / 2,
      scene.scale.height / 2
    );
    this.container.setDepth(3);

    // 둥근 사각형 생성
    this.roundBox = scene.add.rexRoundRectangle(
      0,
      0,
      this.style.width,
      this.style.height,
      this.style.round,
      this.style.bgColor
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

    this.container.setDepth(options.depth ? options.depth : 3);
    this.roundBox.setDepth(options.depth ? options.depth : 3);
    // console.log(this.container.depth);

    // 제목 추가
    if (options.title) {
      this.title = scene.add
        .text(0, -this.style.height / 2 + 100, this.style.title, {
          fontFamily: this.style.fontFamilyBold,
          fontSize: this.style.fontSizeTitle,
          color: this.style.color,
          align: this.style.align,
          lineSpacing: this.style.lineSpacing,
        })
        .setOrigin(0.5, 0.5);
      this.title.setName("title");
      this.title.setWordWrapWidth(this.style.width - 80);
      this.container.add(this.title);
      this.style.textAddY = this.style.textAddY ? this.style.textAddY + 50 : 50;
    }

    if (options.buttons && options.buttons.length > 0) {
      options.buttons.forEach((btn, idx) => {
        let button = new RacRoundText(scene, {
          xPos: btn.xPos ? btn.xPos : 0,
          yPos: btn.yPos ? btn.yPos : 170,
          width: btn.width ? btn.width : 300,
          height: btn.height ? btn.height : 60,
          round: btn.round ? btn.round : 25,
          bgColor: 0x161844,
          fontSize: btn.fontSize ? btn.fontSize : "25pt",
          fontFamily: "KoddiUDOnGothic-Bold",
          bgAlpha: 1,
          text: btn.label,
          color: "#ffffff",
          align: "center",
        });
        const buttonCon = button.getContainer();

        buttonCon.setSize(300, 60); // 컨테이너 크기 설정
        buttonCon.setInteractive(
          new Phaser.Geom.Rectangle(0, 0, 300, 60),
          Phaser.Geom.Rectangle.Contains,
          { cursor: "pointer" }
        );

        this.container.add(buttonCon);

        if (typeof btn.action === "function") {
          buttonCon.once(
            "pointerdown",
            function (pointer, localX, localY, event) {
              btn.action();
              _this.hide();
              event.stopPropagation();
            }
          );
        } else if (btn.action) {
          buttonCon.once(
            "pointerdown",
            function (pointer, localX, localY, event) {
              if (btn.action === "close") {
                _this.hide();
              } else if (btn.action === "goExplore") {
                localStorage.removeItem("user_id");
                scene.scene.start("ExploreRooms");
                //window.location.href = "/?page=ExploreRooms";
              }
              event.stopPropagation();
            }
          );
        }

        // this.container.add(button);
        // btnX += btnWidth + btnMargin;
      });
      this.style.textAddY = this.style.textAddY
        ? this.style.textAddY - 50
        : -50;
    }

    if (options.text) {
      if(this.style.useBBCodeText === true) {
        this.text = scene.add
          .rexBBCodeText(0, this.style.textAddY, this.style.text, {
            fontFamily: this.style.fontFamily,
            fontSize: this.style.fontSize,
            color: this.style.color,
            align: this.style.align,
            lineSpacing: this.style.lineSpacing,
            wrap: {
              mode: 2,
              width: this.style.width - 80,
            }
          })
          .setOrigin(0.5, 0.5);
        
        Util.setTextEx_2(scene,
          _this.container,
          _this.text,
          _this.style.comment,
          _this.text.width,
        );
        /*
        console.log(this.text);
        console.log(this.text.hitAreaManager.getByKey("comment_1"));
        if (this.style.comment && this.style.comment.length > 0) {
          this.text.setInteractive().on('areaclick', function(key, pointer, localX, localY, event){
            _this.style.comment.some((item)=>{
              if(key === item.key) {
                const originalX = _this.text.x - _this.text.width * _this.text.originX;
                const originalY = _this.text.y - _this.text.height * _this.text.originY;
                Util.openCommentPopup(scene, _this.container, _this.text, item, localX - (_this.text.width * _this.text.originX), localY - (_this.text.height * _this.text.originY));
                console.log("localx-originalx", localX-originalX, localY-originalY);
                console.log("original",originalX, originalY);
                console.log("containerx", _this.container.x, _this.container.y);
                console.log("textx", _this.text.x, _this.text.y);
                return true;
              } 
            });
          },"comment_1");
        }
        */
      } else {
        this.text = scene.add
          .text(0, this.style.textAddY, this.style.text, {
            fontFamily: this.style.fontFamily,
            fontSize: this.style.fontSize,
            color: this.style.color,
            align: this.style.align,
            lineSpacing: this.style.lineSpacing,
          })
          .setOrigin(0.5, 0.5);
        this.text.setName("text");
        this.text.setWordWrapWidth(this.style.width - 80);
      }
      this.container.add(this.text);
    }

    if (options.addImg) {
      this.addImg = scene.add.image(
        options.addImg.x,
        options.addImg.y,
        options.addImg.texture
      );

      this.container.add(this.addImg); // 컨테이너에 이미지 추가
    }

    this.btnClose = scene.add.image(
      this.style.width / 2 - 50,
      -this.style.height / 2 + 50,
      "btn_x"
    );
    this.btnClose
      .setInteractive({ cursor: "pointer" })
      .once("pointerdown", function (pointer, localX, localY, event) {
        _this.hide();
        event.stopPropagation();
      });
    this.container.add(this.btnClose);

    Util.toggleBlackLayer("show", this.hide.bind(this));
  }

  hide() {
    if (this.options.onClose) {
      this.options.onClose();
    }
    this.blackLayer.setVisible(false);
    this.container.setVisible(false);
    this.container.setActive(false);
    Util.toggleBlackLayer("hide", null);
  }

  // 컨테이너 반환 (필요한 경우 접근할 수 있도록)
  getContainer() {
    return this.container;
  }

  // 모달 안에서 각주 띄우기 용도로 텍스트 반환
  getTextObject() {
    return this.text;
  }
}
