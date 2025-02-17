// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import mapplayAssetPackUrl from "../../static/assets/mapplay/mapplay.json";
import exploreroomsAssetPackUrl from "../../static/assets/explorerooms/explorerooms.json";
import moment from "moment";
import Util from "../Util";
import Api from "../Api";
import _ from "underscore";
/* END-USER-IMPORTS */

export default class ExploreRooms extends Phaser.Scene {
  constructor() {
    super("ExploreRooms");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // exploer_title
    const exploer_title = this.add.text(540, 170, "", {});
    exploer_title.name = "exploer_title";
    exploer_title.setOrigin(0.5, 0.5);
    exploer_title.text = "모아보기";
    exploer_title.setStyle({
      align: "center",
      color: "#5B5442",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });

    // mycard
    const mycard = this.add.container(546, 952);
    mycard.visible = false;

    // bg_mypage
    const bg_mypage = this.add.image(0, 0, "bg_mypage");
    mycard.add(bg_mypage);

    // btn_camera
    const btn_camera = this.add.image(0, -347, "ico_camera");
    mycard.add(btn_camera);

    // mycard_photo
    const mycard_photo = this.add.image(0, -347, "img_c1");
    mycard_photo.name = "mycard_photo";
    mycard_photo.scaleX = 0.7;
    mycard_photo.scaleY = 0.7;
    mycard_photo.visible = false;
    mycard.add(mycard_photo);

    // mycard_name
    const mycard_name = this.add.text(0, 158, "", {});
    mycard_name.name = "mycard_name";
    mycard_name.setOrigin(0.5, 0.5);
    mycard_name.text = "뿡뿡이";
    mycard_name.setStyle({
      color: "#5B5442",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "60pt",
    });
    mycard.add(mycard_name);

    // mycard_phrase
    const mycard_phrase = this.add.text(0, 211, "", {});
    mycard_phrase.name = "mycard_phrase";
    mycard_phrase.setOrigin(0.5, 0.5);
    mycard_phrase.visible = false;
    mycard_phrase.text = "마음 넓은 여행자";
    mycard_phrase.setStyle({
      color: "#5B5442",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "60pt",
    });
    mycard.add(mycard_phrase);

    // mycard_title_1
    const mycard_title_1 = this.add.text(-337, 391, "", {});
    mycard_title_1.name = "mycard_title_1";
    mycard_title_1.setOrigin(0.5, 0.5);
    mycard_title_1.text = "여행날짜";
    mycard_title_1.setStyle({
      color: "#8D866C",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      fontStyle: "bold",
    });
    mycard.add(mycard_title_1);

    // mycard_title_2
    const mycard_title_2 = this.add.text(-337, 514, "", {});
    mycard_title_2.name = "mycard_title_2";
    mycard_title_2.setOrigin(0.5, 0.5);
    mycard_title_2.text = "여행순서";
    mycard_title_2.setStyle({
      color: "#8D866C",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      fontStyle: "bold",
    });
    mycard.add(mycard_title_2);

    // mycard_title_3
    const mycard_title_3 = this.add.text(-337, 633, "", {});
    mycard_title_3.name = "mycard_title_3";
    mycard_title_3.setOrigin(0.5, 0.5);
    mycard_title_3.text = "여행시간";
    mycard_title_3.setStyle({
      color: "#8D866C",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      fontStyle: "bold",
    });
    mycard.add(mycard_title_3);

    // mycard_date
    const mycard_date = this.add.text(-205, 391, "", {});
    mycard_date.name = "mycard_date";
    mycard_date.setOrigin(0, 0.5);
    mycard_date.text = "24/06/28";
    mycard_date.setStyle({
      color: "#8D866C",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      fontStyle: "bold",
    });
    mycard.add(mycard_date);

    // mycard_visitcount
    const mycard_visitcount = this.add.text(-205, 514, "", {});
    mycard_visitcount.name = "mycard_visitcount";
    mycard_visitcount.setOrigin(0, 0.5);
    mycard_visitcount.text = "0번째 여행자";
    mycard_visitcount.setStyle({
      color: "#8D866C",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      fontStyle: "bold",
    });
    mycard.add(mycard_visitcount);

    // mycard_time
    const mycard_time = this.add.text(-205, 633, "", {});
    mycard_time.name = "mycard_time";
    mycard_time.setOrigin(0, 0.5);
    mycard_time.text = "40:38";
    mycard_time.setStyle({
      color: "#8D866C",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      fontStyle: "bold",
    });
    mycard.add(mycard_time);

    // mycard_stamp
    const mycard_stamp = this.add.image(328, 559, "img_stamp_di");
    mycard_stamp.name = "mycard_stamp";
    mycard.add(mycard_stamp);

    // btn_shoot
    const btn_shoot = this.add.ellipse(397, 98, 128, 128);
    btn_shoot.visible = false;
    btn_shoot.isFilled = true;
    btn_shoot.isStroked = true;
    btn_shoot.strokeColor = 0;
    mycard.add(btn_shoot);

    // 뒷면보기
    const btn_see_map = this.add.image(0, 858, "btn_view_back");
    mycard.add(btn_see_map);

    // mymap
    const mymap = this.add.container(545, 953).setDepth(20);
    mymap.visible = false;

    // 뒷면보기
    const btn_see_card = this.add.image(0, 858, "btn_view_back");
    mymap.add(btn_see_card);

    // bg_map
    const bg_map = this.add.rectangle(0, 0, 1040, 1587);
    bg_map.isFilled = true;
    bg_map.fillColor = 16512495;
    mymap.add(bg_map);

    // btn_x
    const btn_x = this.add.image(457, -735, "btn_x");
    mycard.add(btn_x);

    this.btn_camera = btn_camera;
    this.mycard_photo = mycard_photo;
    this.mycard_name = mycard_name;
    this.mycard_phrase = mycard_phrase;
    this.mycard_title_1 = mycard_title_1;
    this.mycard_title_2 = mycard_title_2;
    this.mycard_title_3 = mycard_title_3;
    this.mycard_date = mycard_date;
    this.mycard_visitcount = mycard_visitcount;
    this.mycard_time = mycard_time;
    this.mycard_stamp = mycard_stamp;
    this.btn_shoot = btn_shoot;
    this.btn_x = btn_x;
    this.mycard = mycard;
    this.btn_see_map = btn_see_map;
    this.bg_map = bg_map;
    this.mymap = mymap;
    this.btn_see_card = btn_see_card;

    this.events.emit("scene-awake");
  }

  public btn_camera!: Phaser.GameObjects.Image;
  public mycard_photo!: Phaser.GameObjects.Image;
  public mycard_name!: Phaser.GameObjects.Text;
  public mycard_phrase!: Phaser.GameObjects.Text;
  public mycard_title_1!: Phaser.GameObjects.Text;
  public mycard_title_2!: Phaser.GameObjects.Text;
  public mycard_title_3!: Phaser.GameObjects.Text;
  public mycard_date!: Phaser.GameObjects.Text;
  public mycard_visitcount!: Phaser.GameObjects.Text;
  public mycard_time!: Phaser.GameObjects.Text;
  public mycard_stamp!: Phaser.GameObjects.Image;
  public btn_shoot!: Phaser.GameObjects.Ellipse;
  public btn_x!: Phaser.GameObjects.Image;
  public mycard!: Phaser.GameObjects.Container;
  public btn_see_map!: Phaser.GameObjects.Image;
  public bg_map!: Phaser.GameObjects.Rectangle;
  public mymap!: Phaser.GameObjects.Container;
  public btn_see_card!: Phaser.GameObjects.Image;

  /* START-USER-CODE */

  // Write your code here
  preload() {
    let _this = this;
    document.body.style.backgroundColor = "#EBE2DB";
    this.cameras.main.setBackgroundColor(0xebe2db);
    this.load.pack("mapplay-asset-pack", mapplayAssetPackUrl);
    this.load.pack("explorerooms-asset-pack", exploreroomsAssetPackUrl);
    localStorage.setItem("lastPage", "ExploreRooms");
  }

  listParams: any;
  sliderPanelStyle: any;
  scrollablePanel: any;
  loadingMore: any;
  stopPagingScroll: any;
  sizer: any;
  orientation: any;
  user: any;
  cardImg: Phaser.GameObjects.Image;
  artifactImgs: Array<Phaser.GameObjects.Image>;
  create() {
    let _this = this;

    let paramsObj: any = Util.getUrlParams(window.location);
    if (paramsObj.ui) {
      this.user = {
        _id: paramsObj.ui,
      };
    } else {
      this.user = {};
    }

    this.editorCreate();
    Util.setHotBtns({ sceneName: "ExploreRooms", btns: ["btn_home"] }, this);

    this.listParams = {
      limit: 20,
      page: 1,
    };

    if (this.user && this.user._id) this.listParams.excludedId = this.user._id; //특정 urlParam에 id있을경우 해당 아이디 제외하고 쿼리

    this.orientation = 0;
    this.sizer = this.rexUI.add
      .fixWidthSizer({
        orientation: this.orientation,
        space: {
          left: 15,
          right: 0,
          top: 0,
          bottom: 0,
          item: 0,
          line: 0,
        },
      })
      .addBackground(this.rexUI.add.roundRectangle(0, 0, 0, 0, 0));

    Api.exploreList(this.listParams)
      .then((res: any) => {
        if (this.user && this.user._id) {
          //특정 urlParam에 id있을경우 해당 아이디만 따로 쿼리해서 리스트 맨 위에 작성
          Api.getExplorerById(this.user).then((res_id: any) => {
            if (res_id.data) res.docs.unshift(res_id.data);
            this.drawCardList(res);
          });
        } else {
          this.drawCardList(res);
        }
      })
      .catch((error: any) => {});

    this.sliderPanelStyle = {
      sliderTrack: 0x73748d,
      sliderThumb: 0xa2be22,
    };

    this.mycard.setDepth(20);
    this.blackLayer = this.add
      .rectangle(
        0,
        0,
        this.sys.game.config.width as number,
        this.sys.game.config.height as number,
        0x000000,
        0.5
      )
      .setOrigin(0, 0)
      .setVisible(false);
    this.blackLayer
      .setInteractive()
      .on("pointerdown", function (pointer, localX, localY, event) {
        console.log("blackLayer");
        _this.hideBlackLayer();
        event.stopPropagation();
      });
    this.btn_x
      .setInteractive()
      .on("pointerdown", function (pointer, localX, localY, event) {
        _this.hideBlackLayer();
        event.stopPropagation();
      });

    const cardImg = _this.add.image(0, 0, "map_diversity").setOrigin(0.5, 0.5);
    _this.mymap.add(cardImg);
    this.cardImg = cardImg;

    let artifactImgs = [];
    this.artifactImgs = artifactImgs;
    for (let i = 0; i < 8; i++) {
      this.artifactImgs.push(_this.add.image(0, 0, "div_" + (i + 1)));
      this.mymap.add(this.artifactImgs[i]);
      this.artifactImgs[i].setVisible(false);
    }

    _this.btn_see_map.setInteractive().on("pointerdown", function () {
      _this.tweens.add({
        targets: _this.mycard,
        scaleX: 0, // 가로 크기 0으로 축소 (앞면 → 중간)
        duration: 300, // 앞면에서 중간까지 회전 시간
        ease: "Linear",
        onComplete: () => {
          // 중간 지점에서 뒷면으로 회전 (0 → -1)
          _this.mycard.setVisible(false);
          _this.tweens.add({
            targets: _this.mymap,
            scaleX: { from: 0, to: 1 }, // 뒷면으로 완전 회전 (중간 → 뒷면)
            duration: 300, // 중간에서 뒷면까지 회전 시간
            ease: "Linear",
            onStart: () => {
              _this.mymap.setVisible(true);
            },
          });
        },
      });
    });

    //_this.mycard.setVisible(false);
    _this.btn_see_card.setInteractive().on("pointerdown", function () {
      _this.tweens.add({
        targets: _this.mymap,
        scaleX: 0, // 가로 크기 0으로 축소 (앞면 → 중간)
        duration: 300, // 앞면에서 중간까지 회전 시간
        ease: "Linear",
        onComplete: () => {
          // 중간 지점에서 뒷면으로 회전 (0 → -1)
          _this.mymap.setVisible(false);
          _this.tweens.add({
            targets: _this.mycard,
            scaleX: { from: 0, to: 1 }, // 뒷면으로 완전 회전 (중간 → 뒷면)
            duration: 300, // 중간에서 뒷면까지 회전 시간
            ease: "Linear",
            onStart: () => {
              _this.mycard.setVisible(true);
            },
          });
        },
      });
    });
  }
  appendCardList(newList) {
    if (newList.docs.length > 0) {
      this.listData.docs = this.listData.docs.concat(newList.docs);
      this.drawCard(this, newList);
      // this.scrollablePanel.getElement('panel').add(newCardSizer);
      this.scrollablePanel.layout();
    } else {
      this.stopPagingScroll = true;
    }
  }
  drawCard(scene, newList = null) {
    let _this = this;
    if (!newList) newList = this.listData;
    let prevCardsLength = this.listData.docs.length - newList.docs.length;

    newList.docs.map((item, index) => {
      let cardOverlapSizer = scene.rexUI.add.overlapSizer();
      cardOverlapSizer;

      // 카드 이미지 생성
      let cardBgImage = scene.add.image(0, 0, "bg_card_list").setScale(0.95);
      cardOverlapSizer.add(cardBgImage, { align: "center" });

      let userCharacter;
      if (item.photoType === "character") {
        userCharacter = scene.add.image(0, 0, item.character).setScale(0.33);
        cardOverlapSizer.add(userCharacter, {
          align: "center",
          padding: { top: -120 }, // 캐릭터 이미지 위치 조정
          expand: false, // 크기 확장을 막음 (스케일 적용 유지)
        });

        if (scene.user && scene.user._id && item._id === scene.user._id) {
          //특정 urlParam에 id있을경우 엽서 앞면 보여주기
          const tempCardData = item;
          tempCardData.index = index + prevCardsLength;
          _this.showCardDetail(tempCardData);
        }
      } else {
        userCharacter = scene.add.image(0, 0, item.character).setScale(0.46);
        cardOverlapSizer.add(userCharacter, {
          align: "center",
          padding: { top: -123 }, // 캐릭터 이미지 위치 조정
          expand: false, // 크기 확장을 막음 (스케일 적용 유지)
        });
        userCharacter.setAlpha(0);
        scene.load.image(
          "myphoto" + (index + prevCardsLength),
          Api.baseUrl + item.photoUrl
        );
        scene.load.once("complete", function () {
          userCharacter.setTexture("myphoto" + (index + prevCardsLength));
          userCharacter.setAlpha(1);
          if (scene.user && scene.user._id && item._id === scene.user._id) {
            //특정 urlParam에 id있을경우 엽서 앞면 보여주기
            const tempCardData = item;
            tempCardData.index = index + prevCardsLength;
            _this.showCardDetail(tempCardData);
          }
        });
        this.load.start();
      }
      userCharacter.cardData = item;
      userCharacter.cardData.index = index + prevCardsLength;

      // 카드 텍스트 생성 (이미지 위에 배치할 텍스트)
      let userName = scene.add
        .text(0, 0, item.userName, {
          fontFamily: "KoddiUDOnGothic-Bold",
          fontSize: "20pt",
          color: "#5B5442",
        })
        .setOrigin(0.5);

      // OverlapSizer에 이미지와 텍스트 추가 (텍스트가 이미지 위로 오도록)

      cardOverlapSizer.add(userName, {
        align: "center",
        padding: { top: 320 }, // 텍스트 위치 조정 (카드 이미지 하단에 가까워지도록)
        expand: false,
      });

      userCharacter
        .setInteractive({ cursor: "pointer" })
        .on("pointerdown", function (pointer) {
          this.downX = pointer.x;
          this.downY = pointer.y;
          this.isPointerDown = true;
        })
        .on("pointerup", function (pointer) {
          if (this.isPointerDown) {
            let deltaX = pointer.x - this.downX;
            let deltaY = pointer.y - this.downY;
            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // 이동 거리 계산
            if (distance <= 30) {
              //30px
              _this.showCardDetail(this.cardData);
            }
          }
          this.isPointerDown = false;
        });

      // fixWidthSizer에 OverlapSizer 추가
      this.sizer.add(cardOverlapSizer, { padding: { top: 10, bottom: 10 } });
    });

    return this.sizer;
  }

  isPointerDown: boolean = false;
  downX: any;
  downY: any;
  listData: any;
  drawCardList(list) {
    this.listData = list;
    const panelPosition = [0, 300];
    // @ts-ignore
    const panelWidth: any = this.sys.game.config.width;
    // @ts-ignore
    const panelHeight: any = this.sys.game.config.height - panelPosition[1];

    this.scrollablePanel = this.rexUI.add
      .scrollablePanel({
        x: panelWidth / 2,
        y: panelHeight / 2 + panelPosition[1],
        scrollDetectionMode: 1,
        width: panelWidth,
        height: panelHeight,
        scrollMode: this.orientation,
        background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10),
        panel: {
          child: this.drawCard(this),
          mask: {
            mask: true,
            padding: 1,
          },
        },
        slider: {
          track: this.rexUI.add.roundRectangle(
            0,
            0,
            20,
            10,
            10,
            this.sliderPanelStyle.sliderTrack
          ),
          thumb: this.rexUI.add.roundRectangle(
            0,
            0,
            0,
            200,
            10,
            this.sliderPanelStyle.sliderThumb
          ),
          position: "right",
        },
        mouseWheelScroller: {
          focus: false,
          speed: 0.1,
        },
        space: {
          left: 0,
          // right: 20,
          right: 0,
          top: 0,
          bottom: 0,
          panel: 0,
          header: 0,
          footer: 0,
        },
      })
      .layout();

    this.scrollablePanel?.on("scroll", (event: any) => {
      if (!this.stopPagingScroll) {
        let percent = event.t;
        if (percent >= 0.99 && !this.loadingMore) {
          // 스크롤이 99% 이상에 도달했을 때
          this.loadingMore = true; // 데이터를 불러오는 동안 중복 호출 방지
          this.listParams.page += 1; // 다음 페이지로 이동
          Api.exploreList(this.listParams)
            .then((res: any) => {
              this.appendCardList(res); // 새로운 데이터를 추가
              this.loadingMore = false; // 로딩 상태 해제
            })
            .catch((error: any) => {
              console.error(error);
              this.loadingMore = false; // 에러 발생 시 로딩 상태 해제
            });
        }
      }
    });
  }

  blackLayer: any;
  async showCardDetail(cardData) {
    if (!cardData.discoverArtifact) {
      const response = await Api.getDiscoveredArtifactById({
        _id: cardData.user_id,
      });
      cardData.discoverArtifact = response.data.discoverArtifact;
    }

    this.showBlackLayer(0);
    this.mycard_name.text = cardData.userName;
    this.mycard_date.text = moment(cardData.explorerDate).format("YY/MM/DD");
    this.mycard_visitcount.text = `${cardData.visitCount}번째 여행자`;
    this.mycard_time.text = moment(cardData.durationMSec).format("mm:ss");
    if (cardData.ticketType === "openness") {
      this.mycard_stamp.setTexture("img_stamp_op");
      this.cardImg.setTexture("map_openness");
      for (let i = 0; i < 8; i++) {
        this.artifactImgs[i].setTexture("open_" + (i + 1));
        this.artifactImgs[i].setOrigin(0, 0);
      }

      this.artifactImgs[0].setPosition(-520 + 672.55, -793.5 + 1135.27);
      this.artifactImgs[1].setPosition(-520 + 170.08, -793.5 + 1206.77);
      this.artifactImgs[2].setPosition(-520 + 75.83, -793.5 + 1085.44);
      this.artifactImgs[3].setPosition(-520 + 65, -793.5 + 963.03);
      this.artifactImgs[4].setPosition(-520 + 98.58, -793.5 + 852.54);
      this.artifactImgs[5].setPosition(-520 + 360.75, -793.5 + 695.46);
      this.artifactImgs[6].setPosition(-520 + 672.55, -793.5 + 826.54);
      this.artifactImgs[7].setPosition(-520 + 573.08, -793.5 + 575.22);
    } else {
      this.mycard_stamp.setTexture("img_stamp_di");
      this.cardImg.setTexture("map_diversity");

      for (let i = 0; i < 8; i++) {
        this.artifactImgs[i].setTexture("div_" + (i + 1));
        this.artifactImgs[i].setOrigin(0, 0);
      }
      //원점 : (545-520, 953-793.5) mymapX - bgmapWidth/2, mymapY - bgmapheight/2
      this.artifactImgs[0].setPosition(-520 + 454.29, -793.5 + 1239.03);
      this.artifactImgs[1].setPosition(-520 + 162.46, -793.5 + 1069.24);
      this.artifactImgs[2].setPosition(-520 + 157.28, -793.5 + 445.4);
      this.artifactImgs[3].setPosition(-520 + 355.98, -793.5 + 918.39);
      this.artifactImgs[4].setPosition(-520 + 549.5, -793.5 + 1036.05);
      this.artifactImgs[5].setPosition(-520 + 126.14, -793.5 + 621.35);
      this.artifactImgs[6].setPosition(-520 + 571.24, -793.5 + 453.01);
      this.artifactImgs[7].setPosition(-520 + 251.46, -793.5 + 292.28);
    }

    //유물이미지들 전부 비활성화후 탐험한 유물만 활성화
    for (let i = 0; i < this.artifactImgs.length; i++) {
      this.artifactImgs[i].setVisible(false);
    }
    for (let i = 0; i < cardData.discoverArtifact.length; i++) {
      this.artifactImgs[
        parseInt(cardData.discoverArtifact[i].split("point_")[1]) - 1
      ].setVisible(true);
    }
    // this.artifactImgs[0].setVisible(true);

    if (cardData.photoType === "character") {
      this.mycard_photo.setTexture(cardData.character);
      this.mycard_photo.setScale(0.7);
      this.mycard_photo.setY(-347);
      this.mycard_photo.visible = true;
    } else {
      this.mycard_photo.setTexture("myphoto" + cardData.index);
      this.mycard_photo.setScale(1);
      this.mycard_photo.setY(-337);
      this.mycard_photo.visible = true;
    }

    //this.mycard_photo.setTexture(cardData.photoUrl);
    //this.mycard_phrase.text = cardData.ticketType;
    this.mycard.setVisible(true);
    this.mycard.setScale(1);

    this.mycard
      .setInteractive()
      .on("pointerdown", function (pointer, localX, localY, event) {
        event.stopPropagation();
      });
  }

  showBlackLayer(depth) {
    this.blackLayer.setVisible(true);
    this.blackLayer.setDepth(depth ? depth : 19);
    Util.toggleBlackLayer("show", this.hideBlackLayer.bind(this));
  }

  hideBlackLayer() {
    this.mycard.visible = false;
    this.mymap.visible = false;
    this.blackLayer.setVisible(false);
    Util.toggleBlackLayer("hide", false);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
