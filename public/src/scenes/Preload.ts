// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Util from "../Util";
import Api from "../Api";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

import assetPackUrl from "../../static/assets/asset-pack.json";
import Start from "~/scenes/Start";
import Intro from "~/scenes/Intro";
import Ticketing from "~/scenes/Ticketing";
import MapPlay from "~/scenes/MapPlay";
import MyPage from "~/scenes/MyPage";

/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");

    /* START-USER-CTR-CODE */
    this.user = null;
    this.graphics = null;
    this.wabeMotions = {
      colors: [
        0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x4b0082, 0x8b00ff,
      ],
      waveData: [],
      waveIndex: 0,
      waveSpeed: 5,
    };
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // preload_layer
    const preload_layer = this.add.rectangle(540, 960, 1080, 1920);
    preload_layer.alpha = 0;
    preload_layer.isFilled = true;
    preload_layer.fillColor = 7519231;

    this.preload_layer = preload_layer;

    this.events.emit("scene-awake");
  }

  public preload_layer!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */
  // Write your code here
  editorPreload(): void {
    this.load.pack("asset-pack", assetPackUrl);
  }

  user: any;
  graphics: any;
  wabeMotions: any;
  preload() {
    this.editorCreate();
    this.editorPreload();

    Api.getCount({ operation: "visit" })
      .then((res: any) => {})
      .catch((error: any) => {
        console.error(error);
      });
    let paramsObj: any = Util.getUrlParams(window.location);
    if (paramsObj.kioskDirection) {
      localStorage.setItem("kioskDirection", paramsObj.kioskDirection);
    }
    if (paramsObj.isKiosk) {
      localStorage.setItem("isKiosk", paramsObj.isKiosk);
    }

    this.user = JSON.parse(localStorage.getItem("user"));
    //todo 체험 데이터가 있습니다. 체험을 계속하시겠습니까?

    // window.addEventListener('resize', syncContainerSize);
    // let $canvas = $("#game-container canvas");
    // function syncContainerSize() {
    // 	if($canvas.width() > 1080) {
    // 		$("#left-button-ctrl").css({"left": 20 + window.innerWidth/2 - ($canvas.width() / 2) + "px"})
    // 		$("#right-button-ctrl").css({"right": 20 + window.innerWidth/2 - ($canvas.width() / 2) + "px"})
    // 		$("#bottom-left-ctrl").css({"left": 20 + window.innerWidth/2 - ($canvas.width() / 2) + "px"})
    // 		$("#bottom-right-ctrl").css({"right": 20 + window.innerWidth/2 - ($canvas.width() / 2) + "px"})
    // 	}
    // 	else {
    // 		$("#left-button-ctrl").css({"left": ""})
    // 		$("#right-button-ctrl").css({"right": ""})
    // 		$("#bottom-left-ctrl").css({"left": "", "bottom": 20 + window.innerHeight - ($canvas.height()) + "px"})
    // 		$("#bottom-right-ctrl").css({"right": "", "bottom":20 + window.innerHeight - ($canvas.height()) + "px"})
    // 	}
    // 	// $(".left-button-ctrl")
    // }
    // syncContainerSize();

    this.load.on(Phaser.Loader.Events.PROGRESS, (progress: number) => {
      //console.log(`Loading progress: ${Math.round(progress * 100)}%`);
      this.preload_layer.alpha = 1 - progress;
    });

    let goPage = "Start";
    let lastPage = localStorage.getItem("lastPage");
    if (paramsObj.page) {
      goPage = paramsObj.page === "home" ? "Start" : paramsObj.page;
    } else if (lastPage) {
      goPage = lastPage;
    }
    // else if(this.user && this.user.lastPage) {
    // 	goPage = this.user.lastPage;
    // }
    if(goPage.toLowerCase() === "explorerooms") goPage = "ExploreRooms";  //url 뒤에 파라미터가 추가로 붙으니까 자동으로 Explorerooms 로 변하는 이슈

    //종료창 크기 맞춤
    const div = document.querySelector("#game-container > div") as HTMLElement;
    const div2 = document.querySelector("#exit-layer > .box") as HTMLElement;
    div2.style.transform = div.style.transform;
    window.addEventListener('resize', ()=>{
      div2.style.transform = div.style.transform;
    });

    this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start(goPage));
    // if(paramsObj.page === 'Onboarding') {
    // 	this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Onboarding"));
    // }
    // else if(paramsObj.page === 'home') {
    // 	//http://localhost:4183/museumplay/goryeo-ro/?startPage=true
    // 	this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Start"));
    // 	//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Intro"));
    // }
    // else if(paramsObj.page == 'MapPlay') {
    // 	//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Onboarding"));
    // 	this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("MapPlay"));
    // }
    // else {
    //
    // 	if(this.user) {
    // 		// this.user = JSON.parse(this.user);
    // 		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Start"));
    // 		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Intro"));
    // 		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Ticketing"));
    // 		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("MapPlay"));
    //
    // 	}
    // 	else {
    // 		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Start"));
    // 		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Ticketing"));
    // 		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Intro"));
    // 		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Ticketing"));
    // 	}
    // }
  }

  // create() {
  // 	const graphics = this.add.graphics();
  //
  // 	const centerX = 0;
  // 	const centerY = 0;
  //
  // 	// 무지개 색상 배열 (빨강, 주황, 노랑, 초록, 파랑, 남색, 보라)
  // 	const colors = [0xff0000, 0xffa500, 0xffff00, 0x008000, 0x0000ff, 0x4b0082, 0xee82ee];
  //
  // 	// 빨간색 원이 화면에 꽉 차도록 설정
  // 	const maxRadius = Math.min(this.scale.width, this.scale.height) * 2;
  //
  // 	// 원의 반지름을 계산, 각 원이 점점 작아지도록 설정
  // 	const radii = Array.from({ length: colors.length }, (_, i) => maxRadius - i * (maxRadius / colors.length));
  //
  // 	// 무지개 색상으로 크기가 다른 7개의 원을 그림
  // 	for (let i = 0; i < colors.length; i++) {
  // 		graphics.lineStyle(2, colors[i], 1);
  // 		graphics.fillStyle(colors[i], 1);
  //
  // 		// 물결 모양으로 원을 그림
  // 		const segments = 360; // 더 많은 세그먼트로 세밀하게
  // 		const waveAmplitude = radii[i] * 0.1; // 물결의 높이, 반지름의 10%
  // 		const waveFrequency = 8; // 물결의 빈도
  //
  // 		graphics.beginPath();
  // 		for (let j = 0; j <= segments; j++) {
  // 			const angle = (j / segments) * Math.PI * 2;
  // 			const waveOffset = Math.sin(angle * waveFrequency) * waveAmplitude;
  // 			const x = centerX + (radii[i] + waveOffset) * Math.cos(angle);
  // 			const y = centerY + (radii[i] + waveOffset) * Math.sin(angle);
  // 			if (j === 0) {
  // 				graphics.moveTo(x, y);
  // 			} else {
  // 				graphics.lineTo(x, y);
  // 			}
  // 			this.tweens.add({
  // 				targets: graphics,
  // 				scaleX: { from: 1.15, to: 1.3 },
  // 				scaleY: { from: 1.15, to: 1.3 },
  // 				//angle: { from: 0, to: 360 },
  // 				duration: 500,
  // 				yoyo: false,
  // 				ease: 'Power2'
  // 			});
  // 		}
  // 		graphics.closePath();
  // 		graphics.fillPath();
  // 		graphics.strokePath();
  // 	}
  // }

  // Phaser에서 사용 가능한 이징 함수들은 다음과 같습니다:
  //
  // 	Linear: 애니메이션이 일정한 속도로 진행됩니다. 시작과 끝이 일정한 속도로 움직입니다.
  // Quad: 제곱 함수로, 애니메이션의 시작과 끝이 점점 빠르거나 느려집니다. (Ease-In, Ease-Out, Ease-In-Out)
  // Cubic: 세제곱 함수로, Quad보다 더 강한 가속과 감속을 제공합니다.
  // Quart: 네제곱 함수로, Cubic보다 더 강한 가속과 감속을 제공합니다.
  // Quint: 다섯제곱 함수로, Quart보다 더 강한 가속과 감속을 제공합니다.
  // Sine: 사인 함수로, 부드럽고 자연스러운 가속과 감속을 제공합니다.
  // Expo: 지수 함수로, 급격한 가속과 감속을 제공합니다.
  // Circ: 원형 함수로, 애니메이션이 곡선을 그리며 움직입니다.
  // Elastic: 탄성 함수로, 애니메이션이 마치 고무줄처럼 움직입니다.
  // Back: 애니메이션이 끝날 때 조금 되돌아가는 효과를 제공합니다.
  // Bounce: 애니메이션이 튕기는 효과를 제공합니다.
  // Power2는 Quad와 Cubic 사이의 중간 강도의 가속과 감속을 제공하는 이징 함수입니다. Power0에서 Power4까지 다양한 강도의 Power 이징 함수를 사용할 수 있습니다.
  //
  // Phaser의 Ease 객체에서 이러한 이징 함수들을 사용할 수 있으며, 각 이징 함수는 'In', 'Out', 'InOut' 버전을 제공합니다. 예를 들어, Power2의 경우 다음과 같이 사용할 수 있습니다:
  //
  // 	Power2 또는 Power2.In: 느리게 시작하여 빠르게 끝나는 이징
  // Power2.Out: 빠르게 시작하여 느리게 끝나는 이징
  // Power2.InOut: 느리게 시작하여 빠르게 중간으로 갔다가 다시 느리게 끝나는 이징

  create() {
    window.onbeforeunload = function () {
      let endTime = new Date();
      // Api.updateEndTime(params).then((res: any) => {
      //
      // }).catch((error: any) => {
      //
      // });
    };

    //
    // // Trigger the resize event initially to set the correct dimensions
    // window.dispatchEvent(new Event('resize'));

    /*const graphics = this.add.graphics();

		const centerX = 0;
		const centerY = 0;

		// 무지개 색상 배열 (빨강, 주황, 노랑, 초록, 파랑, 남색, 보라)
		const colors = [0xff0000, 0xffa500, 0xffff00, 0x008000, 0x0000ff, 0x4b0082, 0xee82ee];

		// 빨간색 원이 화면에 꽉 차도록 설정
		const maxRadius = Math.min(this.scale.width, this.scale.height) * 2;

		// 원의 반지름을 계산, 각 원이 점점 작아지도록 설정
		const radii = Array.from({ length: colors.length }, (_, i) => maxRadius - i * (maxRadius / colors.length));

		// 무지개 색상으로 크기가 다른 7개의 원을 그림
		for (let i = 0; i < colors.length; i++) {
			graphics.lineStyle(2, colors[i], 1);
			graphics.fillStyle(colors[i], 1);

			// 물결 모양으로 원을 그림
			const segments = 360; // 더 많은 세그먼트로 세밀하게
			const waveAmplitude = radii[i] * 0.1; // 물결의 높이, 반지름의 10%
			const waveFrequency = 8; // 물결의 빈도

			graphics.beginPath();
			for (let j = 0; j <= segments; j++) {
				const angle = (j / segments) * Math.PI * 2;
				const waveOffset = Math.sin(angle * waveFrequency) * waveAmplitude;
				const x = centerX + (radii[i] + waveOffset) * Math.cos(angle);
				const y = centerY + (radii[i] + waveOffset) * Math.sin(angle);
				if (j === 0) {
					graphics.moveTo(x, y);
				} else {
					graphics.lineTo(x, y);
				}
				this.tweens.add({
					targets: graphics,
					scaleX: { from: 1, to: 10 },
					scaleY: { from: 1, to: 10 },
					angle: { from: 0, to: 45 },
					duration: 3000,
					yoyo: false,
					ease: 'Circ'
				});
			}
			graphics.closePath();
			graphics.fillPath();
			graphics.strokePath();
		}*/
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
