// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Util from "../Util";
import ModaAlert from "../components/ModaAlert";
import ticketingAssetPackUrl from "../../static/assets/ticketing/ticketing.json";
/* END-USER-IMPORTS */

export default class Intro extends Phaser.Scene {
  constructor() {
    super("Intro");

    /* START-USER-CTR-CODE */
    this.selectedImage = [];
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // rectangle_1
    const rectangle_1 = this.add.rectangle(0, 0, 1080, 1920);
    rectangle_1.name = "rectangle_1";
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 15459035;

    // bg_intro
    const bg_intro = this.add.image(540, 1180, "bg_intro");
    bg_intro.name = "bg_intro";

    // img_wjs
    const img_wjs = this.add.image(363, 614, "img_wjs");
    img_wjs.name = "img_wjs";
    img_wjs.scaleX = 0.33;
    img_wjs.scaleY = 0.33;

    // img_wjs_cv_01
    const img_wjs_cv_01 = this.add.image(449, 629, "img_wjs_cv_01");
    img_wjs_cv_01.name = "img_wjs_cv_01";

    // img_wjs_cv_02
    const img_wjs_cv_02 = this.add.image(290, 643, "img_wjs_cv_02");
    img_wjs_cv_02.name = "img_wjs_cv_02";

    // img_bgz
    const img_bgz = this.add.image(782, 580, "img_bgz");
    img_bgz.name = "img_bgz";
    img_bgz.scaleX = 0.33;
    img_bgz.scaleY = 0.33;

    // img_bgz_cv_01
    const img_bgz_cv_01 = this.add.image(912, 565, "img_bgz_cv_01");
    img_bgz_cv_01.name = "img_bgz_cv_01";

    // img_is
    const img_is = this.add.image(333, 900, "img_is");
    img_is.name = "img_is";
    img_is.scaleX = 0.33;
    img_is.scaleY = 0.33;

    // img_is_cv
    const img_is_cv = this.add.image(342, 964, "img_is_cv");
    img_is_cv.name = "img_is_cv";

    // img_sgg
    const img_sgg = this.add.image(921, 766, "img_sgg");
    img_sgg.name = "img_sgg";
    img_sgg.scaleX = 0.33;
    img_sgg.scaleY = 0.33;

    // img_sgg_cv
    const img_sgg_cv = this.add.image(878, 790, "img_sgg_cv");
    img_sgg_cv.name = "img_sgg_cv";
    img_sgg_cv.scaleX = 1.3760973333045787;
    img_sgg_cv.scaleY = 1.3760973333045787;

    // img_gr
    const img_gr = this.add.image(201, 1274, "img_gr");
    img_gr.name = "img_gr";
    img_gr.scaleX = 0.33;
    img_gr.scaleY = 0.33;

    // img_gr_cv
    const img_gr_cv = this.add.image(152, 1282, "img_gr_cv");
    img_gr_cv.name = "img_gr_cv";
    img_gr_cv.scaleX = 1.1341943984541545;
    img_gr_cv.scaleY = 1.1341943984541545;

    // img_cra
    const img_cra = this.add.image(752, 1295, "img_cra");
    img_cra.name = "img_cra";
    img_cra.scaleX = 0.33;
    img_cra.scaleY = 0.33;

    // img_cra_cv
    const img_cra_cv = this.add.image(824, 1257, "img_cra_cv");
    img_cra_cv.name = "img_cra_cv";

    // img_gmw
    const img_gmw = this.add.image(309, 1520, "img_gmw");
    img_gmw.name = "img_gmw";
    img_gmw.scaleX = 0.33;
    img_gmw.scaleY = 0.33;

    // img_gmw_cv
    const img_gmw_cv = this.add.image(375, 1569, "img_gmw_cv");
    img_gmw_cv.name = "img_gmw_cv";

    // img_pmdjg
    const img_pmdjg = this.add.image(740, 1663, "img_pmdjg");
    img_pmdjg.name = "img_pmdjg";
    img_pmdjg.scaleX = 0.33;
    img_pmdjg.scaleY = 0.33;

    // img_pmdjg_cv
    const img_pmdjg_cv_ = this.add.image(896, 1668, "img_pmdjg_cv");
    img_pmdjg_cv_.name = "img_pmdjg_cv ";
    img_pmdjg_cv_.scaleX = 1.430082039602174;
    img_pmdjg_cv_.scaleY = 1.430082039602174;

    // img_pmdjg_cv_1
    const img_pmdjg_cv_1 = this.add.image(635, 1694, "img_pmdjg_cv_1");
    img_pmdjg_cv_1.name = "img_pmdjg_cv_1";

    // img_magnifier
    const img_magnifier = this.add.image(704, 1746, "img_magnifier");
    img_magnifier.name = "img_magnifier";
    img_magnifier.scaleX = 0.7;
    img_magnifier.scaleY = 0.7;

    // img_map_line
    const img_map_line = this.add.image(0, 1920, "img_map_line");
    img_map_line.name = "img_map_line";
    img_map_line.setOrigin(0, 1);
    img_map_line.visible = false;

    // container_1
    const container_1 = this.add.container(400, 130);

    // text_1
    const text_1 = this.add.text(200, 20, "", {});
    text_1.text = "우리 곁의 고려";
    text_1.setStyle({
      color: "#161844",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "53pt",
    });
    container_1.add(text_1);

    // text_3
    const text_3 = this.add.text(40, 110, "", {});
    text_3.text = "우리 곁에 남아있는 고려의 흔적 \n세 가지를 선택해 보세요.";
    text_3.setStyle({
      align: "right",
      color: "#161844",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "33pt",
    });
    text_3.setLineSpacing(1.1);
    container_1.add(text_3);

    this.img_wjs = img_wjs;
    this.img_bgz = img_bgz;
    this.img_is = img_is;
    this.img_sgg = img_sgg;
    this.img_gr = img_gr;
    this.img_cra = img_cra;
    this.img_gmw = img_gmw;
    this.img_pmdjg = img_pmdjg;
    this.img_magnifier = img_magnifier;

    this.events.emit("scene-awake");
  }

  public img_wjs!: Phaser.GameObjects.Image;
  public img_bgz!: Phaser.GameObjects.Image;
  public img_is!: Phaser.GameObjects.Image;
  public img_sgg!: Phaser.GameObjects.Image;
  public img_gr!: Phaser.GameObjects.Image;
  public img_cra!: Phaser.GameObjects.Image;
  public img_gmw!: Phaser.GameObjects.Image;
  public img_pmdjg!: Phaser.GameObjects.Image;
  public img_magnifier!: Phaser.GameObjects.Image;

  /* START-USER-CODE */

  selectedImage: any;
  basicScale: any;
  preload() {
    document.body.style.backgroundColor = "#EBE2DB";
    this.load.pack("ticket-asset-pack", ticketingAssetPackUrl);
    localStorage.setItem("lastPage", "Intro");
  }

  blackLayer: any;
  isMobile: any;
  create() {
    this.editorCreate();

    const alertModal = new ModaAlert(this, {
      xPos: 0,
      yPos: 700,
      width: 800,
      height: 700,
      round: 25,
      bgColor: 0xffffff,
      color: "#144E79",
      text: "고려의 흔적 세가지를 선택해 보세요.\n" + "고려의 여행지를 추천해 드려요.",
      textAddY: 100,
      align: "center",
      blackLayer: true,
      onClose: () => {
        this.isMobile =
          this.sys.game.device.os.android || this.sys.game.device.os.iOS;
        if (!this.isMobile) {
          this.input.on(
            "pointermove",
            function (pointer) {
              if (!this.isExShowPopup) {
                this.img_magnifier.x = pointer.worldX - 30;
                this.img_magnifier.y = pointer.worldY + 60;
              }
            },
            this
          );
        }
      },
    });

    let alertModalCont = alertModal.getContainer();

    // 기본 버튼 이미지 추가
    let expBtnFavorite = this.add.image(-100, -150, "btn_favorite");
    expBtnFavorite.setScale(1.0); // 기본 크기
    expBtnFavorite.setOrigin(0.5, 0.5); // 중심 기준으로 설정
    alertModalCont.add(expBtnFavorite);

    // 활성화 버튼 이미지 추가
    let expBtnFavoriteOn = this.add.image(-100, -150, "btn_favorite_on");
    expBtnFavoriteOn.setScale(1.0); // 초기 크기
    expBtnFavoriteOn.setAlpha(0); // 투명하게 시작
    expBtnFavoriteOn.setOrigin(0.5, 0.5); // 중심 기준으로 설정
    alertModalCont.add(expBtnFavoriteOn);

    // 처음 등장 애니메이션 (커지면서 나타남)
    this.add.tween({
      targets: expBtnFavoriteOn,
      scale: { from: 0.5, to: 1.2 }, // 더 크게 커짐
      alpha: 1, // 투명도 1로 설정
      duration: 500, // 500ms 동안 애니메이션
      ease: "Power2", // 부드러운 가속 효과
    });

    // 반복 애니메이션 (살짝 더 커졌다가 작아짐)
    this.time.delayedCall(1000, () => {
      this.add.tween({
        targets: expBtnFavoriteOn,
        scale: { start: 1.2, to: 1.4 }, // 더 커졌다가 원래 크기로 돌아옴
        alpha: { start: 1, to: 0.85 }, // 살짝 투명해졌다가 돌아옴
        duration: 800, // 애니메이션 지속 시간
        yoyo: true, // 애니메이션 끝난 후 반대 방향으로 되돌아감
        repeat: -1, // 무한 반복
        repeatDelay: 400, // 반복 간격
        ease: "Sine.easeInOut", // 부드러운 커졌다 작아지는 효과
      });
    });

    let expBtnFavoriteTxt = this.add.text(-40, -190, "좋아요", {
      color: "#5186FF",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "45pt",
    });
    alertModalCont.add(expBtnFavoriteTxt);

    let addImages = [
      "img_bgz_cv_01",
      "img_pmdjg_cv",
      "img_pmdjg_cv_1",
      "img_sgg_cv",
      "img_gr_cv",
      "img_cra_cv",
      "img_gmw_cv",
      "img_is_cv",
      "img_bgz_cv",
      "img_wjs_cv_01",
      "img_wjs_cv_02",
    ];
    addImages.forEach((img) => {
      let imgObj = this.children.getByName(img);
      if (imgObj) {
        // @ts-ignore
        imgObj.setDepth(1);
      }
      // _this.scene.getByName(img).setVisible(false);
    });

    // this.isMobile = this.sys.game.device.os.android || this.sys.game.device.os.iOS;
    // if(!this.isMobile) {
    // 	this.input.on('pointermove', function (pointer) {
    // 		if(!this.isExShowPopup) {
    // 			this.img_magnifier.x = pointer.worldX-30;
    // 			this.img_magnifier.y = pointer.worldY+60;
    // 		}
    // 	}, this);
    // }

    //Util.fixedButtons('intro');
    Util.setHotBtns(
      { sceneName: "Intro", btns: ["btn_home"] },
      this
    );
    // @ts-ignore
    this.blackLayer = this.add
      .rectangle(
        0,
        0,
        this.sys.game.config.width as number,
        this.sys.game.config.height as number,
        0x000000,
        0.5
      )
      .setOrigin(0, 0);
    this.blackLayer.setVisible(false);
    this.blackLayer.setDepth(2);
    this.blackLayer
      .setInteractive()
      .on("pointerdown", (pointer, localX, localY, event) => {
        this.hideExplanationPopup();
        // console.log(pointer)
        // event.stopPropagation();
      });

    const images = [
      this.img_wjs,
      this.img_bgz,
      this.img_cra,
      this.img_gmw,
      this.img_gr,
      this.img_is,
      this.img_pmdjg,
      this.img_sgg,
    ];
    this.selectedImage = [];
    this.img_magnifier.setDepth(11);

    let basicScale = (this.basicScale = 0.33);
    images.forEach((image) => {
      //this.addGlowEffect(image);
      image.setInteractive();
      image.on("pointerover", () => {
        if (!this.selectedImage.includes(image.texture.key)) {
          if (!this.isExShowPopup) {
            this.input.setDefaultCursor("pointer");
            this.tweens.add({
              targets: image,
              scaleX: { from: basicScale, to: basicScale * 1.2 },
              scaleY: { from: basicScale, to: basicScale * 1.2 },
              duration: 300,
              ease: "Power2",
            });
          }

          // this.ex_box.visible = true;
          // this.ex_box.x = image.x;
          // this.ex_box.y = image.y + 200;
          // this.tweens.add({
          // 	targets: this.ex_box,
          // 	alpha: { from: 0, to: 1 },
          // 	duration: 500,
          // 	ease: 'Sine.easeInOut'
          // });
        }
      });

      image.on("pointerout", () => {
        if (!this.selectedImage.includes(image.texture.key)) {
          if (!this.isExShowPopup) {
            this.input.setDefaultCursor("default");
            this.tweens.add({
              targets: image,
              scaleX: basicScale,
              scaleY: basicScale,
              duration: 300,
              ease: "Power2",
            });
          }

          //this.ex_box.visible = false;
        }
      });

      image.on("pointerdown", (pointer) => {
        if (!this.isExShowPopup) {
          this.tweens.add({
            targets: this.img_magnifier,
            x: image.x - 50,
            y: image.y + 70,
            duration: 500,
            ease: "Power2",
            onComplete: () => {
              // this.tweens.add({
              // 	targets: image,
              // 	scaleX: 1.2,
              // 	scaleY: 1.2,
              // 	duration: 300,
              // 	ease: 'Power2'
              // });
              this.showExplanationPopup(image);
            },
          });
        }
        //pointer.stopPropagation();
      });

      /*image.on('pointerdown', () => {
				if(!this.selectedImage.includes(image.texture.key)) {
					this.selectedImage.push(image.texture.key);
					image.setDepth(10);
					// if (image.tweens && image.tweens.length > 0) {
					// 	image.tweens.forEach(tween => tween.stop());
					// 	image.tweens = []; // Clear the array after stopping the tweens
					// }
					let pipelineInstance = this.plugins.get('rexOutlinePipeline');
					// @ts-ignore
					pipelineInstance.add(image, {
						thickness: 10,
						outlineColor: 0x96E5FF
					});
					this.tweens.add({
						targets: image,
						scaleX: { from: basicScale*1.2, to: basicScale*1.3 },
						scaleY: { from: basicScale*1.2, to: basicScale*1.3 },
						//angle: { from: 0, to: 360 },
						duration: 500,
						yoyo: false,
						ease: 'Power2'
					});

				}
				if(this.selectedImage.length === 3) {
					this.input.setDefaultCursor('default');
					this.tweens.add({
						targets: this.cameras.main,
						alpha: 0,
						scale: 2,
						duration: 1000,
						onComplete: () => {
							;
							this.scene.start("Ticketing", { selectedImage: this.selectedImage });
						}
					});
				}
			});*/
    });

    this.runMotion();
  }

  isExShowPopup: any;
  explanationPopupCon: any;
  explData: any;
  explanationPopup: any;
  expHead: any;
  expImg: any;
  expText: Phaser.GameObjects.DOMElement;
  expBtnFavorite: any;
  expBtnFavoriteTxt: any;
  expBtnClose: any;
  btnClose: any;
  showExplanationPopup(image: any) {
    Util.toggleBlackLayer("show", this.hideExplanationPopup.bind(this));
    this.isExShowPopup = true;
    this.blackLayer.setVisible(true);
    let _this = this;
    let selectedImage = image.texture.key;
    if (!this.explanationPopupCon) {
      this.explData = {
        img_wjs: {
          head: "월정사",
          img: "img_wjs",
          setScale: 0.4,
          text: "월정사 팔각구층석탑은 고려를 대표하는 탑이에요. 북한을 제외한 남한에 남아있는 유일한 고려의 팔각구층석탑이랍니다.",
        },
        img_bgz: {
          head: "본관제",
          img: "img_bgz",
          setScale: 0.7,
          text:
            "본관은 사람의 거주지나 출신지를 말해요. 태조 왕건은 공을 세운 지방 호족에게 " +
            "성씨를 주고, 그 지역을 본관으로 삼게 했어요.",
        },
        img_is: {
          head: "인삼",
          img: "img_is",
          setScale: 0.4,
          text:
            "삼국시대부터 널리 알려진 인삼은 고려시대에 " +
            "이르러 국제 상품으로 큰 인기를 얻었어요. " +
            "지금도 고려 인삼의 명성은 계속되고 " +
            "있어요.",
        },
        img_sgg: {
          head: "성균관",
          img: "img_sgg",
          setScale: 0.7,
          text:
            "고려 후기에 국자감을 개편한 성균관이 " +
            "만들어졌어요. 성균관은 최고의 유학 교육 " +
            "기관으로 조선을 거쳐 지금까지 이어지고 있어요." +
            "",
        },
        img_gr: {
          head: "강릉단오제",
          img: "img_gr",
          setScale: 0.4,
          text:
            "강릉 단오제는 강릉의 수호신을 모시는 " +
            "고려의 축제예요. 현재도 계속되고 있으며 유네스코 인류 무형문화유산으로 지정 " +
            "되었어요.",
        },
        img_cra: {
          head: "코리아",
          img: "img_cra",
          setScale: 0.8,
          text: "고려의 국제 무역항인 벽란도를 다녀간 아라비아 상인들에 의해 고려는 코리아라는 이름으로 세상에 알려졌어요.",
        },
        img_gmw: {
          head: "공무원 시험",
          img: "img_gmw",
          setScale: 0.35,
          text:
            "과거제도는 국가를 운영할 관리를 뽑는 " +
            "제도로 고려 광종 때 처음 시행되었어요. " +
            "그 후 조선시대를 거쳐 지금의 " +
            "공무원 시험으로 이어지고 있어요.",
        },
        img_pmdjg: {
          head: "팔만대장경",
          img: "img_pmdjg",
          setScale: 0.8,
          text:
            "초조대장경은 거란의 침입 때 만든 불교 " +
            "경전으로 몽골의 침입 때 불탔어요. 그러자 " +
            "고려는 팔만대장경을 만들어 몽골의 침입" +
            "을 이겨내려고 했어요.",
        },
      };
      this.explanationPopupCon = this.add.container(170, 580);
      this.explanationPopup = this.add.graphics();
      this.explanationPopup.fillStyle(0xffffff, 1);
      this.explanationPopup.lineStyle(1, 0xcdcbc9, 1);
      // this.explanationPopup.postFX!.addShadow(0, 1, 0.1, 1, 0xCDCBC9, 2, 1);
      this.explanationPopup.fillRoundedRect(0, 0, 750, 760, 20);
      this.explanationPopup.strokeRoundedRect(0, 0, 750, 760, 20);
      this.explanationPopup.setInteractive(
        new Phaser.Geom.Rectangle(0, 0, 750, 760),
        Phaser.Geom.Rectangle.Contains
      );
      this.explanationPopupCon.add(this.explanationPopup);

      this.expHead = this.add.text(50, 50, this.explData[selectedImage].head, {
        color: "#20567F",
        fontFamily: "KoddiUDOnGothic-Bold",
        fontSize: "41pt",
      });
      this.explanationPopupCon.add(this.expHead);

      this.expImg = this.add.image(375, 250, this.explData[selectedImage].img);
      this.expImg.setScale(this.explData[selectedImage].setScale);
      this.expImg.setOrigin(0.5, 0.5);
      this.explanationPopupCon.add(this.expImg);
      this.expText = this.add
        .dom(0, 0)
        .createFromHTML(
          `<p class="main_exp_text">${
            this.explData[selectedImage].text || ""
          }</p>`
        );
      this.explanationPopupCon.add(this.expText);

      // 좋아요 버튼 정의
      let btnFavCon = this.add.container(70, 700);
      this.explanationPopupCon.add(btnFavCon);

      this.expBtnFavorite = this.add.image(0, 0, "btn_favorite");

      this.expBtnFavorite.setScale(1.3);
      btnFavCon.add(this.expBtnFavorite);
      this.expBtnFavoriteTxt = this.add.text(43, -27, "좋아요", {
        color: "#5186FF",
        fontFamily: "KoddiUDOnGothic-Regular",
        fontSize: "31pt",
      });
      btnFavCon.add(this.expBtnFavoriteTxt);
      _this.explanationPopupCon.setDepth(20);
      _this.explanationPopupCon.setVisible(true);

      this.btnClose = this.add.image(750 - 50, 50, "btn_x");
      this.explanationPopupCon.add(this.btnClose);

      this.expBtnFavorite.setInteractive();
      this.expBtnFavoriteTxt.setInteractive();
      // this.explanationPopupCon.visible = false;

      //this.btnClose

      this.explanationPopup
        .setInteractive()
        .on("pointerdown", (pointer, localX, localY, event) => {
          event.stopPropagation();
        });
      this.btnClose
        .setInteractive()
        .on("pointerdown", (pointer, localX, localY, event) => {
          this.hideExplanationPopup();
        });
    } else {
      if (image.selectedImage) {
        this.expBtnFavorite.setTexture("btn_favorite_on");
        this.expBtnFavoriteTxt.setText("좋아요 취소");
      } else {
        this.expBtnFavorite.setTexture("btn_favorite");
        this.expBtnFavoriteTxt.setText("좋아요");
      }
      selectedImage = image.texture.key.replace("_on", "");
      this.expHead.setText(this.explData[selectedImage].head);
      this.expImg.setTexture(this.explData[selectedImage].img);
      this.expImg.setScale(this.explData[selectedImage].setScale);
      this.expText.createFromHTML(
        `<p class="main_exp_text">${this.explData[selectedImage].text}</p>`
      );
      this.explanationPopupCon.setVisible(true);
    }

    this.expBtnFavorite.off("pointerdown").on("pointerdown", () => {
      if (!image.selectedImage) {
        selectImage(image);
      } else {
        disSelectImage(image);
      }
    });
    this.expBtnFavoriteTxt.off("pointerdown").on("pointerdown", () => {
      if (!image.selectedImage) {
        selectImage(image);
      } else {
        disSelectImage(image);
      }
    });

    function selectImage(image: any) {
      image.selectedImage = true;
      _this.expBtnFavorite.setTexture("btn_favorite_on");
      _this.tweens.add({
        targets: _this.expBtnFavorite,
        scale: { from: 1, to: 1.2 },
        duration: 500,
        yoyo: false,
        ease: "Power2",
        onStart: () => {
          _this.input.enabled = false;
        }, //애니메이션동안 입력 이벤트 비활성화
        onComplete: () => {
          _this.expBtnFavorite.scale = 1;
          _this.tweens.add({
            targets: [_this.explanationPopupCon, _this.blackLayer],
            alpha: { from: 1, to: 0 },
            duration: 300,
            yoyo: false,
            ease: "Power2",
            onComplete: () => {
              _this.hideExplanationPopup();
              _this.input.enabled = true;
            },
          });
          if (!_this.selectedImage.includes(image.texture.key)) {
            _this.selectedImage.push(image.texture.key);
            image.setDepth(10);
            image.angle = 0;
            // if (image.tweens && image.tweens.length > 0) {
            // 	image.tweens.forEach(tween => tween.stop());
            // 	image.tweens = []; // Clear the array after stopping the tweens
            // }

            // let pipelineInstance = _this.plugins.get('rexOutlinePipeline');
            // // @ts-ignore
            // pipelineInstance.add(image, {
            // 	thickness: 10,
            // 	outlineColor: 0x96E5FF
            // });

            image.setTexture(image.texture.key + "_on");
            _this.tweens.add({
              targets: image,
              scaleX: {
                from: _this.basicScale * 1.2,
                to: _this.basicScale * 1.3,
              },
              scaleY: {
                from: _this.basicScale * 1.2,
                to: _this.basicScale * 1.3,
              },
              //angle: { from: 0, to: 360 },
              duration: 500,
              yoyo: false,
              ease: "Power2",
            });
          }
          if (_this.selectedImage.length === 3) {
            _this.input.setDefaultCursor("default");
            _this.tweens.add({
              targets: _this.cameras.main,
              alpha: 0,
              scale: 2,
              duration: 500,
              onStart: () => {
                _this.input.enabled = false;
              }, //애니메이션동안 입력 이벤트 비활성화
              onComplete: () => {
                _this.tweens.add({
                  targets: _this.cameras.main,
                  alpha: 0,
                  duration: 1000,
                  onComplete: () => {
                    _this.explanationPopupCon.destroy();
                    _this.explanationPopupCon = null;
                    _this.scene.start("Ticketing", {
                      selectedImage: _this.selectedImage,
                    });
                    _this.input.enabled = true;
                  },
                });
              },
            });
          }
        },
      });
    }
    function disSelectImage(image: any) {
      image.selectedImage = false;
      let offTexture = image.texture.key.replace("_on", "");
      _this.selectedImage = _this.selectedImage.filter(
        (item: any) => item !== offTexture
      );
      console.log(_this.selectedImage);
      image.setTexture(offTexture);
      image.setDepth(0);
      console.log(image.depth);
      _this.expBtnFavorite.setTexture("btn_favorite");
      _this.tweens.add({
        targets: [_this.explanationPopupCon, _this.blackLayer],
        alpha: { from: 1, to: 0 },
        duration: 300,
        yoyo: false,
        ease: "Power2",
        onStart: () => {
          _this.input.enabled = false;
        }, //애니메이션동안 입력 이벤트 비활성화
        onComplete: () => {
          _this.hideExplanationPopup();
          _this.input.enabled = true;
        },
      });
    }
  }
  hideExplanationPopup() {
    if (this.isExShowPopup) {
      this.blackLayer.setVisible(false);
      this.explanationPopupCon.setVisible(false);
      this.explanationPopupCon.alpha = 1;
      this.blackLayer.alpha = 1;
      this.isExShowPopup = false;
      this.expBtnFavorite.setTexture("btn_favorite");
      Util.toggleBlackLayer("hide", false);
    }
  }
  runMotion() {
    const images = [
      this.img_wjs,
      this.img_bgz,
      this.img_cra,
      this.img_gmw,
      this.img_gr,
      this.img_is,
      this.img_pmdjg,
      this.img_sgg,
    ];

    images.forEach((image) => {
      // @ts-ignore
      image.orgScale = image.scale;
      const repeatDelay = Phaser.Math.Between(3000, 10000);
      const tween = this.tweens.add({
        targets: image,
        scale: { from: image.scale, to: image.scale * 1.15 },
        angle: { from: -3, to: 3 },
        alpha: { from: 1, to: 0.5 },
        duration: 300,
        yoyo: true,
        repeat: -1,
        delay: 300,
        repeatDelay: repeatDelay,
        ease: "Sine.easeInOut",
        onUpdate: () => {},
      });

      // 이미지 클릭 시 트윈 정지
      image.setInteractive().on("pointerdown", () => {
        image.setAlpha(1);
        tween.stop();
      });
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
