import Phaser from "phaser";
import $ from "jquery";
import QrScanner from "qr-scanner";

export default class QrCamera extends Phaser.Scene {
  constructor() {
    super("QrCamera");
  }

  editorCreate(): void {
    this.events.emit("scene-awake");
  }

  prevBackgroundColor: any;
  preload() {
    this.prevBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#000000";
    this.cameras.main.setBackgroundColor(0x000000);
  }

  ticketType: any;
  point: any;
  init(data: any) {
    this.ticketType = data.ticketType;
    this.point = data.point;
  }

  CommonUtils: any;
  btnBack: any;
  create() {
    this.editorCreate();

    function getDataFormQrUrl(qrUrl: string) {
      let queryString = qrUrl.split("?")[1];
      let paramsObj: any = new URLSearchParams(queryString);
      let result: any = {};
      result.mode = "qrCheck";
      result.ticketType =
        paramsObj.get("t") === "d"
          ? "diversity"
          : paramsObj.get("t") === "o"
          ? "openness"
          : null;
      result.point = "point_" + paramsObj.get("p");
      return result;
    }

    // jQuery 객체를 명시적으로 정의
    let $video = $("<video/>");
    let qrScanner;
    let mediaStream;
    $("#qrcode").append($video).show();

    //테스트용 나중에 제대로 index.html에 추가필요
    let $button = $("<button>돌아가기</button>");
    $("#qrcode").append($button);

    // 모바일 후면 카메라 사용
    navigator.mediaDevices
      .getUserMedia({
        video:
          process.env.NODE_ENV 
            ? {
                width: { min: window.innerWidth },
                height: { min: window.innerHeight },
                // facingMode: "user", // 전면 카메라
                facingMode: "environment", // 후면 카메라
              }
            : true, // 로컬 개발 환경에서는 true
      })
      .then((stream: MediaStream) => {
        const videoElement = $video[0] as HTMLVideoElement;
        videoElement.srcObject = stream;
        mediaStream = stream;
        videoElement.play();

        qrScanner = new QrScanner(
          $video[0] as HTMLVideoElement,
          (result) => {
            // console.log("decoded qr code:", result);
            // QR 코드가 성공적으로 스캔된 후 QR 스캐너와 비디오 스트림을 중지
            if (result) {
              qrScanner.stop(); // QR 스캐너 중지
              // 비디오 스트림의 모든 트랙 중지
              stream.getTracks().forEach((track) => track.stop());
              // QR 스캔 및 카메라 종료 후 수행할 코드

              //index.html 수정했던 것 원복
              $("#qrcode").find($video).detach();
              $("#qrcode").find($button).detach();
              $("#qrcode").hide();
              document.body.style.backgroundColor = this.prevBackgroundColor;

              let data = getDataFormQrUrl(result.data);
              this.scene.resume("MapPlay", data);
              this.scene.stop("QrCamera");
            }
          },
          { returnDetailedScanResult: true }
        );

        qrScanner
          .start()
          .then(() => {
            console.log("QR Scanner started");
          })
          .catch((err) => {
            console.error("Unable to start QR Scanner:", err);
          });
      })
      .catch((err: Error) => {
        console.error("Error accessing camera:", err);
        alert("카메라 접근이 거부되었습니다. 권한을 확인해주세요.");
      });

    //뒤로가기 버튼
    this.btnBack = this.add.image(540, 1330, "btn_back_2").setOrigin(0.5, 0);
    this.btnBack.setInteractive();
    $($button).on("mousedown", () => {
      //추후 index.html에 추가후 사용예정
      // this.btnBack.on("pointerdown", () => {
      if (qrScanner) qrScanner.stop(); // QR 스캐너 중지
      // 비디오 스트림의 모든 트랙 중지
      if (mediaStream) mediaStream.getTracks().forEach((track) => track.stop());
      //index.html 수정했던 것 원복
      $("#qrcode").find($video).detach();
      $("#qrcode").hide();
      $($button).remove();
      document.body.style.backgroundColor = this.prevBackgroundColor;

      let data: any = {};
      data.mode = "qrCheck";
      data.ticketType = this.ticketType;
      data.point = this.point;
      data.type = "back";
      this.scene.stop("QrCamera");
      this.scene.resume("MapPlay", data);
    });
  }
}
