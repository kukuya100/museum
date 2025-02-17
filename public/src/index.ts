import Phaser from "phaser";
//asset
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
//scene
import Level from "./scenes/Level";
import Preload from "./scenes/Preload";
import Start from "./scenes/Start";
import Intro from "./scenes/Intro";
import Ticketing from "./scenes/Ticketing";
import Onboarding from "./scenes/Onboarding";
import MapPlay from "./scenes/MapPlay";
import QrCamera from "./scenes/QrCamera";
import ItrcDiversity from "./scenes/ItrcDiversity";
import ItrcOpenness from "./scenes/ItrcOpenness";
import MyPage from "./scenes/MyPage";
import ExploreRooms from "./scenes/ExploreRooms";
import RoundRectanglePlugin from "phaser3-rex-plugins/plugins/roundrectangle-plugin.js";
import GesturesPlugin from "phaser3-rex-plugins/plugins/gestures-plugin.js";
import UIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";
import OutlinePipelinePlugin from "phaser3-rex-plugins/plugins/outlinepipeline-plugin.js";
import GlowFilterPipelinePlugin from "phaser3-rex-plugins/plugins/glowfilterpipeline-plugin.js";
import TextEditPlugin from "phaser3-rex-plugins/plugins/textedit-plugin.js";
import BBCodeTextPlugin from "phaser3-rex-plugins/plugins/bbcodetext-plugin.js";
import "./styles/common.scss";
class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.pack("pack", preloadAssetPackUrl);
    this.load.start();
  }

  create() {
    this.scene.start("Preload");
  }
}

window.addEventListener("load", function () {
  const params = new URLSearchParams(location.search);
  const type = params.get("t");
  const param = params.get("p");
  // const tmp = localStorage.getItem("user");
  // const user_id = localStorage.getItem("user_id");
  // const user = tmp ? JSON.parse(tmp) : {};
  const BASE_URL = process.env.BASE_URL || "/static";

  if (
    (type === "d" || type === "o") &&
    ["1", "2", "3", "4", "5", "6", "7", "8"].includes(param)
  ) {
    document.documentElement.innerHTML = `
    <!DOCTYPE html>
    <HTML>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </head>
    <body style="
      margin: 0;
      background-color: #415D7F;
    ">
    <img src="${BASE_URL}/no_login_error.png" class="responsive-image" style="
      display: block;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
      margin: 0 auto;
    " />
    </body>
    </html>
    `;
    const img = document.querySelector(".responsive-image") as HTMLElement;
    img.style.height = window.innerHeight + "px"; // 주소창을 고려하여 높이 설정
    return;
  }

  let gameWidth = 1080; //540//1170;//1080/2=540
  let gameHeight = 1920; //2530;//1265//1920/2=960
  let mode = Phaser.Scale.FIT;

  //데스크탑에서는 자동 스케일 조정안하고 브라우저크기 50%로 맞추고 보려고 이러면 픽셀 맞출때 곱하기 2하면될듯
  let isDev = process.env.NODE_ENV === "development" ? true : false;
  isDev = false;
  if (
    isDev &&
    !(
      navigator.userAgent.indexOf("Mac OS X") > -1 || //아이패드에서도 걸리게
      navigator.userAgent.indexOf("Android") > -1
    )
  )
    mode = Phaser.Scale.NONE;
  //let mode = Phaser.Scale.WIDTH_CONTROLS_HEIGHT;
  //let mode = Phaser.Scale.ENVELOP;
  // if(window.innerWidth > 1080) {
  // 	mode = Phaser.Scale.FIT;
  // }
  //let mode = Phaser.Scale.ENVELOP;
  // console.log(window.devicePixelRatio)
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    // type: Phaser.CANVAS,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: "#72BBFF", //"#72BBFF",
    antialias: true,
    // 최적화 하기위해 fps 제한 고려 필요 - 근데 이거 적용하니까 이미지 드래그할때 뚝뚝끊김
    // fps: {
    //   target: 60,  // FPS를 60으로 제한
    //   forceSetTimeOut: true
    // },
    scale: {
      //mode: Phaser.Scale.FIT,
      //mode: Phaser.Scale.ENVELOP,
      //mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
      mode: mode,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      //autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: "game-container",
    input: {
      mouse: {
        target: "game-container",
      },
      touch: {
        target: "game-container",
      },
      activePointers: 3, //다중포인터 지원
    },
    dom: {
      createContainer: true, // DOM 컨테이너를 생성하도록 설정
    },
    plugins: {
      global: [
        {
          key: "rexOutlinePipeline",
          plugin: OutlinePipelinePlugin,
          start: true,
        },
        {
          key: "rexRoundRectanglePlugin",
          plugin: RoundRectanglePlugin,
          start: true,
        },
        {
          key: "rexTextEdit",
          plugin: TextEditPlugin,
          start: true,
        },
        {
          key: "rexGlowFilterPipeline",
          plugin: GlowFilterPipelinePlugin,
          start: true,
        },
        {
          key: "rexBBCodeTextPlugin",
          plugin: BBCodeTextPlugin,
          start: true,
        },
      ],
      scene: [
        {
          key: "rexGestures",
          plugin: GesturesPlugin,
          mapping: "rexGestures",
        },
        {
          key: "rexUI",
          plugin: UIPlugin,
          mapping: "rexUI",
        },
      ],
    },
    scene: [
      Boot,
      Preload,
      Start,
      Intro,
      Ticketing,
      Onboarding,
      MapPlay,
      QrCamera,
      ItrcDiversity,
      ItrcOpenness,
      MyPage,
      ExploreRooms,
    ],
  });

  game.scene.start("Boot");
});
