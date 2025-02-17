import Phaser from "phaser";
import introAssetPackUrl from "../../static/assets/intro/intro.json";
import Util from "../Util";
import moment from "moment/moment";
import $ from "jquery";
import Api from "../Api";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // container_1
    const container_1 = this.add.container(195, 373);

    // img_postcard
    const img_postcard = this.add.image(525, 897, "img_postcard");
    container_1.add(img_postcard);

    // img_ticket_02
    const img_ticket_02 = this.add.image(212, 507, "img_ticket_02");
    container_1.add(img_ticket_02);

    // img_ticket_01
    const img_ticket_01 = this.add.image(295, 432, "img_ticket_01");
    container_1.add(img_ticket_01);

    // img_start_map
    const img_start_map = this.add.image(369, 646, "img_start_map");
    container_1.add(img_start_map);

    // img_camera
    const img_camera = this.add.image(16, 1226, "img_camera");
    container_1.add(img_camera);

    // img_compass
    const img_compass = this.add.image(723, 1146, "img_compass");
    img_compass.scaleX = 0.8;
    img_compass.scaleY = 0.8;
    container_1.add(img_compass);

    // img_compass_pin
    const img_compass_pin = this.add.image(713, 1135, "img_compass_pin");
    img_compass_pin.scaleX = 0.8;
    img_compass_pin.scaleY = 0.8;
    img_compass_pin.angle = 113;
    container_1.add(img_compass_pin);

    // img_object_01
    const img_object_01 = this.add.image(426, 1270, "img_object_01");
    container_1.add(img_object_01);

    // img_corea_01
    const img_corea_01 = this.add.image(61, 1399, "img_corea_01");
    container_1.add(img_corea_01);

    // img_object_02
    const img_object_02 = this.add.image(681, 11, "img_object_02");
    container_1.add(img_object_02);

    // img_corea_03
    const img_corea_03 = this.add.image(2, -126, "img_corea_03");
    container_1.add(img_corea_03);

    // post_con
    const post_con = this.add.container(211, 423);
    container_1.add(post_con);

    // img_start_post
    const img_start_post = this.add.image(114, 191, "img_start_post_1");
    post_con.add(img_start_post);

    // text_1
    const text_1 = this.add.text(-37, 2, "", {});
    text_1.text = "우리가 몰랐던 고려를 탐험하는";
    text_1.setStyle({
      color: "#434343",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "20pt",
    });
    post_con.add(text_1);

    // text
    const text = this.add.text(26, 316, "", {});
    text.text = "디지털 탐구 활동";
    text.setStyle({
      color: "#434343",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "23pt",
    });
    post_con.add(text);

    // text_2
    const text_2 = this.add.text(-19, 47, "", {});
    text_2.text = "우리곁의";
    text_2.setStyle({
      color: "#434343",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "62pt",
    });
    post_con.add(text_2);

    // img_corea_02
    const img_corea_02 = this.add.image(97, 377, "img_corea_02");
    img_corea_02.scaleX = 0.9037556434303511;
    img_corea_02.scaleY = 0.9037556434303511;
    container_1.add(img_corea_02);

    // img_magnifier
    const img_magnifier = this.add.image(284, 1412, "img_magnifier");
    container_1.add(img_magnifier);

    // gnbttt
    const gnbttt = this.add.container(57, 57);
    gnbttt.name = "gnbttt";
    gnbttt.visible = false;

    // btn_exproom
    const btn_exproom = this.add.image(0, 0, "btn_exproom");
    btn_exproom.name = "btn_exproom";
    btn_exproom.setOrigin(0, 0);
    gnbttt.add(btn_exproom);

    // btn_how_play
    const btn_how_play = this.add.image(968, 0, "btn_how_play");
    btn_how_play.name = "btn_how_play";
    btn_how_play.setOrigin(1, 0);
    gnbttt.add(btn_how_play);

    // start_guide_cont
    const start_guide_cont = this.add.container(540, -1000);
    start_guide_cont.name = "start_guide_cont";

    // start_guide_layer
    const start_guide_layer = this.add.rectangle(0, 0, 1080, 1920);
    start_guide_layer.name = "start_guide_layer";
    start_guide_layer.isFilled = true;
    start_guide_cont.add(start_guide_layer);

    // start_guide
    const start_guide = this.add.image(0, 0, "start_guide");
    start_guide.scaleX = 0.5011938675968296;
    start_guide.scaleY = 0.5011938675968296;
    start_guide_cont.add(start_guide);

    // btn_close_layer
    const btn_close_layer = this.add.ellipse(433, -854, 128, 128);
    btn_close_layer.scaleX = 0.7892423128609205;
    btn_close_layer.scaleY = 0.7892423128609205;
    start_guide_cont.add(btn_close_layer);

    this.img_ticket_02 = img_ticket_02;
    this.img_ticket_01 = img_ticket_01;
    this.img_camera = img_camera;
    this.img_compass_pin = img_compass_pin;
    this.img_start_post = img_start_post;
    this.img_magnifier = img_magnifier;
    this.container_1 = container_1;
    this.gnbttt = gnbttt;
    this.start_guide_layer = start_guide_layer;
    this.start_guide = start_guide;
    this.btn_close_layer = btn_close_layer;
    this.start_guide_cont = start_guide_cont;

    this.events.emit("scene-awake");
  }

  public img_ticket_02!: Phaser.GameObjects.Image;
  public img_ticket_01!: Phaser.GameObjects.Image;
  public img_camera!: Phaser.GameObjects.Image;
  public img_compass_pin!: Phaser.GameObjects.Image;
  public img_start_post!: Phaser.GameObjects.Image;
  public img_magnifier!: Phaser.GameObjects.Image;
  public container_1!: Phaser.GameObjects.Container;
  public gnbttt!: Phaser.GameObjects.Container;
  public start_guide_layer!: Phaser.GameObjects.Rectangle;
  public start_guide!: Phaser.GameObjects.Image;
  public btn_close_layer!: Phaser.GameObjects.Ellipse;
  public start_guide_cont!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  // Write your code here

  user: any;
  isMobile: any;
  preload() {
    document.body.style.backgroundColor = "#72BBFF";
    // this.cameras.main.setBackgroundColor(0x72BBFF)
    this.load.pack("introAssetPackUrl", introAssetPackUrl);
    this.isMobile =
      this.sys.game.device.os.android || this.sys.game.device.os.iOS;

    localStorage.removeItem("startDate");
    localStorage.setItem("lastPage", "Start");

    localStorage.removeItem("startDate");

    let isKiosk = localStorage.getItem("isKiosk") === "true";

    Util.removeURLParameters();

    const fpPromise = FingerprintJS.load();
    (async () => {
      // Get the visitor identifier when you need it.
      const fp = await fpPromise;
      const result = await fp.get();

      // 1. 접속자 정보
      // 1) 일/주간/월 단위 접속자 수
      // 2) 접속자의 연령 및 성별 X-> 카카
      // 3) 접속자별 콘텐츠 이용 시간 [끝나는 사간-preload.ts에서 처리]
      // 4) 주제별 접속자 수 (다양성/개방성)
      // 5) 주제별 접속자의 콘텐츠 이용 시간 X

      // 2. 콘텐츠 접속 위치
      // 1) 키오스크
      // 2) 조선실 방향
      // 3) 신라실 방향

      let params = {
        fpId: result.visitorId,
        isKiosk: isKiosk,
        location: "basic",
        deviceType: this.isMobile ? "mobile" : "pc",
      };

      if (!isKiosk) {
        // localStorage.removeItem("visit_id");
        Api.updateVisit(params)
          .then((res: any) => {
            localStorage.setItem("visit", JSON.stringify(res.data));
            // localStorage.setItem("visit_id", res.data._id);
          })
          .catch((error: any) => {});
      }
    })();

    // let user = localStorage.getItem('user');
    // if(user) {
    // 	this.user = JSON.parse(user);
    // 	this.user.lastPage = "Start";
    // 	localStorage.setItem('user', JSON.stringify(this.user));
    // }
    // else {
    // 	//this.scene.start("Intro");
    // }
  }
  create() {
    this.editorCreate();
    // Util.fixedButtons('start');
    Util.setHotBtns(
      {
        sceneName: "Start",
        btns: ["btn_exproom", "btn_how_play"],
      },
      this
    );
    let user: any = localStorage.getItem("user");
    localStorage.removeItem("user");

    let user_id = localStorage.getItem("user_id");
    if(!user_id) {
      Api.updateUser({discoverArtifact:[]})
      .then((res: any) => {
        localStorage.setItem("user_id", res.data._id);
        // localStorage.setItem("visit_id", res.data._id);
      })
      .catch((error: any) => {});
    }
    
    if (user) {
      //todo 체험 데이터가 있습니다. 체험을 계속하시겠습니까?
      user = JSON.parse(user);
      this.user = {
        isDoneGuide: user.isDoneGuide,
      };
      localStorage.setItem("user", JSON.stringify(this.user));
    } else {
      //this.scene.start("Intro");
    }
    localStorage.removeItem("startDate");
    localStorage.removeItem("endDate");
    localStorage.removeItem("visit");
    // localStorage.removeItem("visit_id");
    // localStorage.removeItem("visitorId");

    // Api.getVisitCount({ fpId:result.visitorId }).then((res: any) => {
    // 	localStorage.setItem('visit_id', res.data._id);
    // 	localStorage.setItem('visit', JSON.stringify(res.data));
    // 	this.visit = res.data;
    // 	ticketing();
    // }).catch((error: any) => {
    // 	console.error(error);
    // 	this.visit = {
    // 		visitCount: 1
    // 	};
    // });

    //localStorage.clear();

    // 카메라 후레쉬 효과 추가
    this.addCameraFlashEffect(this.img_camera);

    this.addTicketMotion(this.img_ticket_01, { angle: "+=2", duration: 1000 }); //blue
    this.addTicketMotion(this.img_ticket_02, { angle: "+=8", duration: 1000 }); //green

    // 나침반 바늘 회전 애니메이션 추가
    this.addCompassPinRotation(this.img_compass_pin);

    let pipelineInstance = this.plugins.get("rexGlowFilterPipeline") as any;
    // pipelineInstance.add(this.img_magnifier, {
    // 	intensity: 0.01,
    // 	glowColor: 0x00ff00
    // });

    // 글로우 효과 점점 강하게
    this.addGlowEffect(this.img_magnifier, pipelineInstance);

    this.addMagnifierMotion(this.img_magnifier);

    /*let pipelineInstance = this.plugins.get('rexOutlinePipeline');

		// @ts-ignore
		pipelineInstance.add(this.img_magnifier, {
			thickness: 3,
			outlineColor: 0xffffff
		});*/

    // 포인터가 특정 영역에 들어왔는지 확인하는 플래그
    let pointerInArea = false;

    // 기본 커서 모양 설정
    this.input.setDefaultCursor("default");

    // 특정 영역에 마우스 오버 시 커서 모양 변경
    this.img_start_post.setInteractive();
    this.img_start_post.on("pointerover", () => {
      this.input.setDefaultCursor("pointer");
    });
    this.img_start_post.on("pointerout", () => {
      this.input.setDefaultCursor("default");
    });

    // 클릭 시 다음 씬으로 이동
    this.img_start_post.on("pointerdown", () => {
      this.input.setDefaultCursor("default");
      //효과 1
      this.tweens.add({
        targets: this.cameras.main,
        alpha: 0,
        color: { from: 0x72bbff, to: 0xebe2db },
        scale: 2,
        duration: 1000,
        onComplete: () => {
          this.scene.start("Intro");
        },
      });

      //this.add.rectangle(400, 300, 800, 600, 0x000000);
      //this.scene.start('Intro');

      //효과 2
      var gameWidth = 1920;
      var gameHeight = 1080;

      // 시간의 흐름 파티클
      // const particles = this.add.particles('timeParticle');
      //
      // // 이미터 설정
      // const emitter = this.add.particles(gameWidth / 2, gameHeight / 2, 'timeParticle', {
      // 	speed: { min: 200, max: 400 },
      // 	scale: { start: 0.5, end: 0 },
      // 	blendMode: 'ADD',
      // 	lifespan: 1500,
      // 	quantity: 5
      // });

      // 포털 효과
      // const portal = this.add.circle(gameWidth / 2, gameHeight / 2, 100, 0x00ffff);
      // portal.setAlpha(0.7);
      //
      // // 포털 애니메이션
      // this.tweens.add({
      // 	targets: portal,
      // 	scale: 15,
      // 	alpha: 0,
      // 	duration: 1500,
      // 	ease: 'Quad.easeIn',
      // 	onComplete: () => {
      // 		this.cameras.main.flash(1000, 255, 255, 255);
      // 		this.time.delayedCall(1000, () => {
      // 			this.scene.start('Intro');
      // 		});
      // 	}
      // });
      //
      // // 파티클을 포털 주변으로 이동
      // this.time.addEvent({
      // 	delay: 25,
      // 	loop: true,
      // 	callback: () => {
      // 		const angle = Phaser.Math.Between(0, 360);
      // 		const radius = portal.scale * 100;
      // 		emitter.setPosition(
      // 			gameWidth / 2 + radius * Math.cos(angle),
      // 			gameHeight / 2 + radius * Math.sin(angle)
      // 		);
      // 	}
      // });
    });

    // let camera = this.cameras.main;
    // const pinch = this.rexGestures.add.pinch({ enable: true });
    // const pan = this.rexGestures.add.pan({ enable: true });
    //
    // camera.zoom = 1.3;
    // console.log(-((this.scale.width * camera.zoom) - camera.width)/2, ((this.scale.width * camera.zoom) - camera.width)/2)
    // pan.on('pan', (pan: any) => {
    // 	const newScrollX = camera.scrollX - pan.dx;
    // 	const newScrollY = camera.scrollY - pan.dy;
    //
    // 	//camera.scrollY = Phaser.Math.Clamp(newScrollY, 0, this.scale.height - camera.height);
    // 	console.log(this.scale.height, camera.height, camera.zoom)
    // 	camera.scrollX = Phaser.Math.Clamp(newScrollX, -((this.scale.width * camera.zoom) - camera.width)/2, ((this.scale.width * camera.zoom) - camera.width)/2);
    // 	camera.scrollY = Phaser.Math.Clamp(newScrollY, -
    // 		((this.scale.height * camera.zoom) - camera.height)/2, ((this.scale.height * camera.zoom) - camera.height)/2);
    //
    // });
    //
    // pinch.on('pinch', (pinch: any) => {
    // 	const scaleFactor = pinch.scaleFactor;
    // 	const newZoom = camera.zoom * scaleFactor;
    // 	camera.zoom = Phaser.Math.Clamp(newZoom, 1, 1.5);
    // });
  }

  addGlowEffect(target, pipelineInstance) {
    this.tweens.add({
      targets: { intensity: 0 },
      intensity: { from: 0.0, to: 0.01 },
      duration: 100,
      repeat: 0,
      yoyo: true,
      ease: "Sine.easeInOut",
      onUpdate: (tween) => {
        const intensity = tween.getValue();
        target.intensity = intensity;
        // pipelineInstance.add(this.img_magnifier, {
        // 	intensity: intensity,
        // 	glowColor: 0x00ff00
        // });
      },
    });
  }

  addMagnifierMotion(magnifier) {
    const moveMagnifier = () => {
      const randomX = Phaser.Math.Between(100, this.scale.width - 300);
      const randomY = Phaser.Math.Between(100, this.scale.height - 300);
      const randomAngle = Phaser.Math.Between(-15, 15);
      const randomDuration = Phaser.Math.Between(2000, 4000);

      this.tweens.add({
        targets: magnifier,
        x: randomX,
        y: randomY,
        angle: randomAngle,
        duration: randomDuration,
        ease: "Sine.easeInOut",
        onComplete: moveMagnifier,
      });
    };

    moveMagnifier();
  }

  addCameraFlashEffect(camera) {
    let x = camera.x + camera.width / 2 - 10;
    let y = camera.y + camera.height / 2 + 90;

    // 실제 후레쉬 모양의 이미지 추가
    const flash = this.add.image(x, y, "img_flash");
    flash.setOrigin(0.5, 0.5);
    flash.setDepth(100); // 다른 모든 객체보다 위에 그려지도록 설정
    flash.alpha = 0; // 초기 알파값 설정

    this.tweens.add({
      targets: flash,
      alpha: { from: 1, to: 0 },
      scaleX: { from: 0, to: 2 },
      scaleY: { from: 0, to: 2 },
      duration: 200,
      repeat: -1,
      repeatDelay: 2700,
      ease: "Sine.easeOut",
      onRepeat: () => {
        flash.x = x;
        flash.y = y;
      },
    });
  }

  addTicketMotion(ticket, options = { angle: "+=20", duration: 500 }) {
    this.tweens.add({
      targets: ticket,
      angle: options.angle, // 10 픽셀 위로 이동
      yoyo: true, // 애니메이션이 끝나면 다시 원래 위치로
      repeat: -1, // 무한 반복
      ease: "Sine.easeInOut", // 부드러운 애니메이션을 위해 사인 곡선 사용
      duration: options.duration, // 애니메이션의 지속 시간
    });
  }

  addCompassPinRotation(pin) {
    this.tweens.add({
      targets: pin,
      angle: { from: -170, to: 100 }, // -180도에서 180도 사이를 반복
      yoyo: true, // 애니메이션이 끝나면 다시 원래 위치로
      repeat: -1, // 무한 반복
      ease: "Sine.easeInOut", // 부드러운 애니메이션을 위해 사인 곡선 사용
      duration: Phaser.Math.Between(1000, 5000), // 1초에서 5초 사이의 지속 시간
      onComplete: () => {
        // 애니메이션이 완료될 때 새로운 회전 애니메이션 시작
        this.addCompassPinRotation(pin);
      },
    });
  }
}
