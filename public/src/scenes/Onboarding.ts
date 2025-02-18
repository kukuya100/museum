import Util from "../Util";
import ModaAlert from "../components/ModaAlert";
import $ from "jquery";
import mapplayAssetPackUrl from "../../static/assets/mapplay/mapplay.json";
import Api from "../Api";

export default class Onboarding extends Phaser.Scene {
  constructor() {
    super("Onboarding");
  }

  editorCreate(): void {
    const step_1 = this.add.container(0, 0);
    const text_1 = this.add.text(544, 194, "참여자 설문조사", {});
    text_1.setOrigin(0.5, 0);
    text_1.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "65px",
    });
    step_1.add(text_1);

    const BASE_URL =
      process.env.NODE_ENV === "production" ? process.env.BASE_URL : "";
    const surveyDom = fetch(`${BASE_URL}/survey.html`)
      .then((response) => response.text())
      .then((html) => {
        const survey = this.add.dom(544, 364).createFromHTML(html);
        survey.setOrigin(0.5, 0);

        const skipButton = survey.node.querySelector('button[type="button"]');
        skipButton.addEventListener("click", () => {
          step_1.setVisible(false);
          survey.node.remove();
          this.showStep(2);
        });

        const submitButton = survey.node.querySelector('button[type="submit"]');
        submitButton.addEventListener("click", (event) => {
          event.preventDefault();
          // 폼 데이터 수집
          const gender = survey.node.querySelector(
            "#gender"
          ) as HTMLSelectElement;
          const companion = survey.node.querySelector(
            "#companion"
          ) as HTMLSelectElement;
          const age = survey.node.querySelector("#age") as HTMLInputElement;

          // API 요청
          let userParams = {
            _id: this.user._id,
            gender: gender.value,
            age: age.value,
            withWhom: companion.value,
          };

          Api.updateUser(userParams)
            .then((response) => {
              if (!response.ok) {
                throw new Error("서버에서 에러가 발생했습니다.");
              }
              step_1.setVisible(false);
              survey.node.remove();
              this.showStep(2);
            })
            .catch((error) => {
              console.error("설문 제출 에러:", error);
              alert("설문 제출에 실패했습니다. 다시 시도해 주세요.");
            });
        });

        step_1.add(survey);
      })
      .catch((error) => {
        console.error("HTML 로드 실패:", error);
      });

    // step_2
    const step_2 = this.add.container(1080, 0);

    // text_2
    const text_2 = this.add.text(549, 217, "", {});
    text_2.setOrigin(0.5, 0);
    text_2.text = "여행자님의 닉네임을 적어주세요";
    text_2.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "51pt",
    });
    text_2.setWordWrapWidth(1000);
    step_2.add(text_2);

    // btn_cancel
    const btn_cancel = this.add.image(288, 784, "btn_cancel");
    step_2.add(btn_cancel);

    // btn_save
    const btn_save = this.add.image(768, 784, "btn_save");
    step_2.add(btn_save);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(552, 432, 1000, 3);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 0;
    step_2.add(rectangle_1);

    // step_3
    const step_3 = this.add.container(1080, 0);

    // text_3
    const text_3 = this.add.text(544, 144, "", {});
    text_3.setOrigin(0.5, 0);
    text_3.text = "함께 여행할 친구를\n선택해 주세요.";
    text_3.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "51pt",
    });
    text_3.setLineSpacing(10);
    step_3.add(text_3);

    // btn_mapplay
    const btn_mapplay = this.add.image(568, 1680, "btn_normal_login");
    step_3.add(btn_mapplay);

    // selected_c
    const selected_c = this.add.container(544, 752);
    step_3.add(selected_c);

    // bg_selector
    const bg_selector = this.add.image(0, 0, "bg_selector");
    selected_c.add(bg_selector);

    // img_s_3
    const img_s_3 = this.add.image(900, 0, "img_c4");
    img_s_3.scaleX = 0.7;
    img_s_3.scaleY = 0.7;
    selected_c.add(img_s_3);

    // img_s_2
    const img_s_2 = this.add.image(900, 0, "img_c6");
    img_s_2.scaleX = 0.7;
    img_s_2.scaleY = 0.7;
    selected_c.add(img_s_2);

    // img_s_1
    const img_s_1 = this.add.image(0, 0, "img_c1");
    img_s_1.scaleX = 0.7;
    img_s_1.scaleY = 0.7;
    selected_c.add(img_s_1);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(-558, -368, 128, 128);
    rectangle_2.scaleX = 1.5199638966448008;
    rectangle_2.scaleY = 5.652639796368205;
    rectangle_2.setOrigin(0, 0);
    rectangle_2.isFilled = true;
    rectangle_2.fillColor = 15459035;
    rectangle_2.strokeColor = 15459035;
    selected_c.add(rectangle_2);

    // rectangle
    const rectangle = this.add.rectangle(365, -368, 128, 128);
    rectangle.scaleX = 1.5199638966448008;
    rectangle.scaleY = 5.652639796368205;
    rectangle.setOrigin(0, 0);
    rectangle.isFilled = true;
    rectangle.fillColor = 15459035;
    selected_c.add(rectangle);

    // car_s1
    const car_s1 = this.add.container(0, 1350);
    step_3.add(car_s1);

    // bg_cr_holder_1
    const bg_cr_holder_1 = this.add.image(280, 0, "bg_cr_holder_on");
    car_s1.add(bg_cr_holder_1);

    // bg_cr_holder_2
    const bg_cr_holder_2 = this.add.image(540, 0, "bg_cr_holder");
    car_s1.add(bg_cr_holder_2);

    // bg_cr_holder_3
    const bg_cr_holder_3 = this.add.image(800, 0, "bg_cr_holder");
    car_s1.add(bg_cr_holder_3);

    // img_c1
    const img_c1 = this.add.image(280, 0, "img_c1");
    img_c1.scaleX = 0.17;
    img_c1.scaleY = 0.17;
    car_s1.add(img_c1);

    // img_c2
    const img_c2 = this.add.image(540, 0, "img_c6");
    img_c2.scaleX = 0.17;
    img_c2.scaleY = 0.17;
    car_s1.add(img_c2);

    // img_c3
    const img_c3 = this.add.image(800, 0, "img_c4");
    img_c3.scaleX = 0.17;
    img_c3.scaleY = 0.17;
    car_s1.add(img_c3);

    this.step_1 = step_1;
    this.btn_cancel = btn_cancel;
    this.btn_save = btn_save;
    this.step_2 = step_2;
    this.btn_mapplay = btn_mapplay;
    this.img_s_3 = img_s_3;
    this.img_s_2 = img_s_2;
    this.img_s_1 = img_s_1;
    this.bg_cr_holder_1 = bg_cr_holder_1;
    this.bg_cr_holder_2 = bg_cr_holder_2;
    this.bg_cr_holder_3 = bg_cr_holder_3;
    this.img_c1 = img_c1;
    this.img_c2 = img_c2;
    this.img_c3 = img_c3;
    this.step_3 = step_3;

    this.events.emit("scene-awake");
  }

  public step_1!: Phaser.GameObjects.Container;
  public btn_cancel!: Phaser.GameObjects.Image;
  public btn_save!: Phaser.GameObjects.Image;
  public step_2!: Phaser.GameObjects.Container;
  public btn_mapplay!: Phaser.GameObjects.Image;
  public img_s_3!: Phaser.GameObjects.Image;
  public img_s_2!: Phaser.GameObjects.Image;
  public img_s_1!: Phaser.GameObjects.Image;
  public bg_cr_holder_1!: Phaser.GameObjects.Image;
  public bg_cr_holder_2!: Phaser.GameObjects.Image;
  public bg_cr_holder_3!: Phaser.GameObjects.Image;
  public img_c1!: Phaser.GameObjects.Image;
  public img_c2!: Phaser.GameObjects.Image;
  public img_c3!: Phaser.GameObjects.Image;
  public step_3!: Phaser.GameObjects.Container;

  userNameField: any;

  preload() {
    document.body.style.backgroundColor = "#EBE2DB";
    this.cameras.main.setBackgroundColor(0xebe2db);
    this.load.pack("mapplay-asset-pack", mapplayAssetPackUrl);
    localStorage.setItem("lastPage", "Onboarding");
  }

  setTicketType(user: any) {
    if (user.ticketType === "diversity") {
      this.img_s_1.setTexture("img_c3");
      this.img_s_2.setTexture("img_c2");
      this.img_s_3.setTexture("img_c5");
      this.img_c1.setTexture("img_c3");
      this.img_c2.setTexture("img_c2");
      this.img_c3.setTexture("img_c5");
    } else if (user.ticketType === "openness") {
    }
  }

  user: any;
  create() {
    let _this = this;
    let paramsObj: any = Util.getUrlParams(window.location);
    if (paramsObj.ui) {
      localStorage.setItem("user_id", paramsObj.ui);
      //todo
      this.user = {
        _id: paramsObj.ui,
        ticketType: paramsObj.tt,
        visitCount: paramsObj.vc,
      };
    } else {
      const user = localStorage.getItem("user");
      if (user) this.user = JSON.parse(user);
      if (!this.user.hasOwnProperty("_id")) {
        this.scene.start("Start");
        return false;
      }
      // localStorage.setItem("user_id", this.user._id);
    }
    this.editorCreate();
    Util.fixedButtons("onboarding");
    this.setTicketType(this.user);
    $("#loginBtn").show();
    //로그인 화면 건너뛰기
    // _this.showStep(2);
    // $("#loginBtn").show();

    // this.user = {
    // 	theme: "theme_1",
    // 	isDoneGuide: true,
    // 	startPoint: 'start_1', // 시작 포인트 설정
    // 	isOffline: false,
    // 	ticketType: paramsObj.ticketType,
    // 	sImg: paramsObj.sImg,
    // 	lastPage: paramsObj.page
    // }
    // localStorage.setItem('user', JSON.stringify(this.user));
    // console.log(this.user);

    //step2
    let nickname = this.user.userName
      ? this.user.userName
      : "닉네임을 입력해 주세요 (최대 7글자)";
    this.userNameField = this.rexUI.add
      .textBox({
        x: 50,
        y: 350,
        width: 1000,
        height: 55,
        text: this.add
          .text(0, 10, nickname, {
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "50px",
            color: "#959595",
            align: "center",
          })
          .setWordWrapWidth(1000)
          .setFixedSize(1000, 55),

        type: "textarea",
      })
      .setOrigin(0, 0)
      .layout()
      .setVisible(false);
    let editInstance = null;
    this.userNameField.setInteractive().on("pointerdown", () => {
      if (
        this.userNameField.getElement("text").text ===
        "닉네임을 입력해 주세요 (최대 7글자)"
      ) {
        this.userNameField.getElement("text").setText("");
      }
      if (editInstance) {
        editInstance.close();
      }
      // 텍스트 박스를 편집 모드로 전환
      editInstance = this.rexUI.edit(this.userNameField.getElement("text"), {
        maxLength: 7,
        onClose: () => {
          editInstance = null; // 편집이 끝나면 null로 초기화
        },
      });
    });

    this.btn_save.disableInteractive().setAlpha(0.5);
    this.input.keyboard.on(
      "keyup",
      () => {
        const inputText = this.userNameField.getElement("text").text;

        if (
          inputText &&
          inputText.length > 0 &&
          inputText !== "닉네임을 입력해 주세요 (최대 7글자)"
        ) {
          this.btn_save.setInteractive().setAlpha(1);
        } else {
          this.btn_save.disableInteractive().setAlpha(0.5);
        }
      },
      this
    );

    this.btn_save.on("pointerdown", () => {
      let inputText = this.userNameField.getElement("text").text;
      if (
        inputText === "닉네임을 입력해 주세요 (최대 7글자)" ||
        inputText === ""
      ) {
        const alertModal = new ModaAlert(_this, {
          xPos: 50,
          yPos: 350,
          width: 500,
          height: 300,
          round: 25,
          bgColor: 0xffffff,
          text: "닉네임을 입력해 주세요.",
          blackLayer: true,
        });
        // alert('닉네임을 입력해 주세요.');
        return;
      }
      this.user.userName = this.userNameField.getElement("text").text;
      localStorage.setItem("user", JSON.stringify(this.user));
      if (editInstance) editInstance.close();
      _this.showStep(3);
    });

    this.btn_cancel.setInteractive();
    this.btn_cancel.on("pointerdown", () => {
      if (editInstance) editInstance.close();
      localStorage.removeItem("lastPage");
      const LINK_BASE_URL = process.env.LINK_BASE_URL || "/";
      window.location.href = LINK_BASE_URL;
    });

    //step3
    const holders = [
      this.bg_cr_holder_1,
      this.bg_cr_holder_2,
      this.bg_cr_holder_3,
    ];
    const images = [this.img_s_1, this.img_s_2, this.img_s_3];

    this.user.character = images[0].texture.key;
    localStorage.setItem("user", JSON.stringify(this.user));
    holders.forEach((holder, index) => {
      holder.setInteractive();
      holder.on("pointerdown", () => {
        this.user.character = images[index].texture.key;
        localStorage.setItem("user", JSON.stringify(this.user));
        //todo 해당 캐릭터를 선택후 버튼을 누르면 캐릭터에 대한 정보 전달
        holders.forEach((h, i) => {
          h.setTexture(i === index ? "bg_cr_holder_on" : "bg_cr_holder");
        });

        images.forEach((img, imgIndex) => {
          const targetX =
            imgIndex === index ? 0 : imgIndex < index ? -900 : 900;
          this.tweens.add({
            targets: img,
            x: targetX,
            alpha: imgIndex === index ? 1 : 0,
            scale: imgIndex === index ? 0.7 : 0.1,
            duration: 300,
            ease: "Sine.easeOut",
          });
        });
      });
    });

    this.btn_mapplay.setInteractive();
    this.btn_mapplay.on("pointerdown", () => {
      this.scene.start("MapPlay");
    });
  }

  kakaoHandleLogin(authObj: any): void {
    // 사용자 정보 요청
    window["Kakao"].API.request({
      url: "/v2/user/me",
      success: (response) => {
        this.kakaoHandleUserInfo(response);
      },
      fail: (error) => {
        alert("카카오 로그인에 실패했습니다. 다시 시도해 주세요.");
      },
    });
  }

  kakaoHandleUserInfo(userInfo: any): void {
    // 사용자 정보 처리 (예: UI 업데이트, 게임 데이터 연동 등)
    //console.log('사용자 정보:', userInfo);
    // connected_at:"2024-05-02T16:09:50Z"
    // id:3464234574
    // kakao_account:{profile_nickname_needs_agreement: false,
    // profile : {
    // 	is_default_nickname: false
    // 	nickname:"정진"
    // }
    // properties:{nickname: '정진'}

    // 예: 사용자 닉네임 출력
    this.user.userName = userInfo.kakao_account.profile.nickname;
    this.userNameField.getElement("text").setText(this.user.userName);
    this.user.isSignIn = true;
    localStorage.setItem("user", JSON.stringify(this.user));
    this.showStep(2);
  }

  naverHandleUserInfo(userInfo: any): void {
    // 사용자 정보 처리 (예: UI 업데이트, 게임 데이터 연동 등)
    // console.log("네이버 사용자 정보:", userInfo);
    // age:"40-49"
    // birthday:"06-22"
    // birthyear:"1982"
    // email:undefined
    // gender:"M"
    // id:"TN0QnXB152iwD-MGLi1Ss7cBSuUYt4076Dd6rrY73tc"
    // mobile:undefined
    // name:"윤정진"
    // nickname:"위즈키드"
    // profile_image:undefined
    // 예: 사용자 닉네임 출력

    this.user.userName = userInfo.nickname;
    this.user.isSignIn = true;
    this.userNameField.getElement("text").setText(this.user.userName);
    localStorage.setItem("user", JSON.stringify(this.user));
    this.showStep(2);
    //todo저장 후 이름 설정 단계로 이동
  }

  showStep(curStep: number) {
    if (curStep === 1) {
      $(".scene_onboarding").show();
      this.userNameField.setVisible(false);
      this.tweens.add({
        targets: this.step_2,
        x: 1080,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        // onComplete: () => {
        // 	this.currentNum = 2;
        // }
      });
      this.tweens.add({
        targets: this.step_1,
        x: 0,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        onComplete: () => {
          $("#loginBtn").show();
        },
      });
    } else if (curStep === 2) {
      $("#loginBtn").hide();
      $(".scene_onboarding").hide();
      $(".btn_back").hide();
      this.tweens.add({
        targets: this.step_1,
        x: -1080,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        // onComplete: () => {
        // 	this.currentNum = 2;
        // }
      });
      this.tweens.add({
        targets: this.step_3,
        x: 1080,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        // onComplete: () => {
        // 	this.currentNum = 2;
        // }
      });
      this.tweens.add({
        targets: this.step_2,
        x: 0,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        onComplete: () => {
          this.userNameField.setVisible(true);
        },
      });
    } else if (curStep === 3) {
      $("#loginBtn").hide();
      $(".btn_back").show();
      $(".btn_back").click(() => {
        this.showStep(2);
      });
      this.userNameField.setVisible(false);
      this.tweens.add({
        targets: this.step_2,
        x: -1080,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        // onComplete: () => {
        // 	this.currentNum = 2;
        // }
      });
      this.tweens.add({
        targets: this.step_3,
        x: 0,
        duration: 200,
        repeat: 0,
        ease: "Sine.easeOut",
        // onComplete: () => {
        // 	this.currentNum = 2;
        // }
      });
    }
  }
}
