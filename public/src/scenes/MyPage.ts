import mapplayAssetPackUrl from "../../static/assets/mapplay/mapplay.json";
import Util from "../Util";
import ModaAlert from "../components/ModaAlert";
import moment from "moment/moment";
import Api from "../Api";
import _ from "underscore";

export default class MyPage extends Phaser.Scene {
  constructor() {
    super("MyPage");
  }

  editorCreate(): void {
    // mycard
    const mycard = this.add.container(545, 952);

    // bg_mypage
    const bg_mypage = this.add.image(0, 0, "bg_mypage");
    mycard.add(bg_mypage);

    // mycard_photo
    const mycard_photo = this.add.image(0, -338, "img_c1");
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

    // btn_share
    const btn_share = this.add.image(464, 882, "btn_share");
    btn_share.name = "btn_share";
    mycard.add(btn_share);

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
    this.btn_share = btn_share;
    this.mycard = mycard;

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
  public btn_share!: Phaser.GameObjects.Image;
  public btn_shoot!: Phaser.GameObjects.Image;
  public mycard!: Phaser.GameObjects.Container;

  imageData: any;
  init(data) {
    this.imageData = data.imageData;
  }

  user: any;
  preload() {
    document.body.style.backgroundColor = "#72BBFF";
    this.cameras.main.setBackgroundColor(0x72bbff);
    this.load.pack("mapplay-asset-pack", mapplayAssetPackUrl);

    // Util.removeURLParameters();
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user) {
      localStorage.setItem("endDate", moment().toString());

      let userParams = _.pick(this.user, [
        "_id",
        "visit_id",
        "userName",
        "ticketType",
        "character",
        "currentPoint",
        "discoverArtifact",
        "isDoneGuide",
        "lastconDate",
      ]);
      Api.updateUser(userParams);
    } else {
      this.scene.start("Intro");
    }
  }
  baseUrl: any;
  linkBaseUrl: any;
  videoElement: any;
  videoStream: any;
  myEvent: any;
  explore_id: any;
  create() {
    let _this = this;
    this.editorCreate();
    this.mycard_photo.setTexture(this.user.character).setVisible(true);

    Util.toggleBlackLayer("hide", false);
    Util.setHotBtns(
      { sceneName: "MyPage", btns: ["btn_home"], contPadding: 30 },
      this
    );

    this.baseUrl =
      process.env.NODE_ENV === "production"
        ? "http://54.92.221.142/museumplay/"
        : process.env.BASE_URL
        ? process.env.BASE_URL
        : "http://localhost:4183/museumplay/"; // 개발 환경에 따라 URL 변경
    this.linkBaseUrl =
      process.env.NODE_ENV === "production"
        ? "http://54.92.221.142/museumplay/goryeo-ro/"
        : process.env.LINK_BASE_URL
        ? process.env.LINK_BASE_URL
        : "/"; // 개발 환경에 따라 URL 변경

    // this.textures.addBase64('capturedImage', this.imageData);
    // this.textures.once('onload', function() {
    // 	_this.add.image(0, 0, 'capturedImage').setOrigin(0);
    // });

    let startData = localStorage.getItem("startDate");
    let endData = localStorage.getItem("endDate");
    let duration: any;
    if (startData && endData) {
      let startDate = moment(startData);
      let endDate = moment(endData);
      duration = moment.duration(endDate.diff(startDate));
      console.log(duration._milliseconds);
      this.mycard_time.setText(duration.minutes() + ":" + duration.seconds());
    }

    this.mycard_name.setText(this.user.userName);
    this.mycard_date.setText(moment().format("YY/MM/DD"));

    this.mycard_visitcount.setText(this.user.visitCount + "번째 여행자");
    if (this.user.ticketType === "openness") {
      this.mycard_stamp.setTexture("img_stamp_op");
    }

    function uploadExplorerRoom() {
      _this.user.photoType = "character";
      // _this.user.photoType = 'photo';
      // _this.user.photoUrl = "storage\\\\photo\\\\20241118\\\\MjAyNDExMTc\\\\1731885785235.png";
      //user_id:ID, userName: String, photoType: String, explorerDate: String, visitCount: Int, ticketType: String, photoUrl: String, character:String

      let params = {
        id: _this.explore_id ? _this.explore_id : null,
        user_id: _this.user._id,
        userName: _this.user.userName,
        photoType: _this.user.photoType, //'character',
        durationMSec: duration._milliseconds,
        explorerDate: endData,
        visitCount: parseInt(_this.user.visitCount),
        ticketType: _this.user.ticketType,
        photoUrl: _this.user.photoUrl ? _this.user.photoUrl : null,
        character: _this.user.character,
      };
      Api.updateExplore(params)
        .then((res: any) => {
          _this.explore_id = res.data._id;
          const alertModal = new ModaAlert(_this, {
            xPos: 0,
            yPos: 0,
            width: 770,
            height: 600,
            round: 25,
            bgColor: 0xffffff,
            fontSize: "35pt",
            text: "모아보기에\n업로드 되었습니다.",
            align: "center",
            buttons: [
              {
                label: "모아보기 가기",
                action: "goExplore",
                xPos: 0,
                yPos: 100,
                width: 300,
                height: 100,
                round: 25,
                fontSize: "23pt",
              },
            ],
            blackLayer: true,
          });
          let alertModalCont = alertModal.getContainer();
          // _this.add.container(0, 0, [alertModalCont]);
        })
        .catch((error: any) => {});
    }

    function shareContent() {
      _this.user.photoType = "character";
      let params = {
        id: _this.explore_id ? _this.explore_id : null,
        user_id: _this.user._id,
        userName: _this.user.userName,
        photoType: _this.user.photoType, //'character',
        durationMSec: duration._milliseconds,
        explorerDate: endData,
        visitCount: parseInt(_this.user.visitCount),
        ticketType: _this.user.ticketType,
        photoUrl: _this.user.photoUrl ? _this.user.photoUrl : null,
        character: _this.user.character,
      };
      Api.updateExplore(params)
        .then((res: any) => {
          _this.explore_id = res.data._id;
          if (navigator.share) {
            navigator
              .share({
                title: "제목",
                text: "공유 컨텐츠를 확인해 보세요!",
                url:
                  window.location.href +
                  "?page=ExploreRooms&ui=" +
                  _this.explore_id,
              })
              .then(() => {
                console.log("공유 성공");
              })
              .catch((error) => {
                // alert('공유 취소');
                console.log("공유 실패:", error);
              });
          } else {
            //alert('이 브라우저에서는 공유 기능을 지원하지 않습니다.');
          }
        })
        .catch((error: any) => {});
    }

    _this.btn_share.setInteractive().on("pointerdown", function () {
      // _this.mycard.setVisible(false);
      // _this.blank_layer.setVisible(false);

      const alertModal = new ModaAlert(_this, {
        xPos: 0,
        yPos: -160,
        width: 770,
        height: 600,
        round: 25,
        bgColor: 0xffffff,
        fontSize: "35pt",
        text: "모아보기에 엽서\n업로드 또는 공유하기",
        align: "center",
        buttons: [
          {
            label: "모아보기에\n엽서 업로드",
            action: uploadExplorerRoom,
            xPos: -170,
            yPos: 130,
            width: 300,
            height: 140,
            round: 25,
            fontSize: "23pt",
          },
          {
            label: "SNS 공유",
            action: shareContent,
            xPos: 170,
            yPos: 130,
            width: 300,
            height: 140,
            round: 25,
            fontSize: "23pt",
          },
        ],
        blackLayer: true,
      });
      let alertModalCont = alertModal.getContainer();
      //_this.add.container(0, 0, [alertModalCont]);
    });
  }
}
