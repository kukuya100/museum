import moment from "moment";
import Util from "../Util";
import Api from "../Api";
import ticketingAssetPackUrl from "../../static/assets/ticketing/ticketing.json";

export default class Ticketing extends Phaser.Scene {
  constructor() {
    super("Ticketing");
    this.url = "";
    this.baseUrl = Api.linkBaseUrl;
    this.subUrl = "";
    this.selectedImage = [];
    this.ticketType = "";
    this.selectTicket = {};
    this.selectTicketLoading = {};
    this.fontColorMain = "#699b00";
    this.fontColorSub = "#699b00";
  }

  editorCreate(): void {
    // rectangle_1
    const rectangle_1 = this.add.rectangle(0, 0, 1080, 1920);
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 15459035;

    // ticketing_1
    const ticketing_1 = this.add.container(540, 880);
    ticketing_1.visible = false;

    // img_ticket_12
    const img_ticket_12 = this.add.image(0, 642, "img_ticket_12");
    ticketing_1.add(img_ticket_12);

    // img_ticket_11
    const img_ticket_11 = this.add.image(0, 0, "img_ticket_11");
    ticketing_1.add(img_ticket_11);

    // ticketing_2
    const ticketing_2 = this.add.container(540, 880);
    ticketing_2.visible = false;

    // img_ticket
    const img_ticket = this.add.image(0, 642, "img_ticket_22");
    ticketing_2.add(img_ticket);

    // img_ticket_1
    const img_ticket_1 = this.add.image(0, 0, "img_ticket_21");
    ticketing_2.add(img_ticket_1);

    // ticket_loading_01
    const ticket_loading_01 = this.add.container(540, 1150);
    ticket_loading_01.name = "ticket_loading_01";
    ticket_loading_01.visible = false;

    // img_ticketing_loading_b
    const img_ticketing_loading_b = this.add.image(
      0,
      109,
      "img_ticketing_loading_b"
    );
    img_ticketing_loading_b.name = "img_ticketing_loading_b";
    ticket_loading_01.add(img_ticketing_loading_b);

    // img_ticketing_loading_1_tk
    const img_ticketing_loading_1_tk = this.add.image(
      10,
      -14,
      "img_ticketing_loading_1_tk"
    );
    img_ticketing_loading_1_tk.name = "img_ticketing_loading_1_tk";
    ticket_loading_01.add(img_ticketing_loading_1_tk);

    // img_ticketing_loading_1_t_3
    const img_ticketing_loading_1_t_3 = this.add.image(
      0,
      -27,
      "img_ticketing_loading_1_t_3"
    );
    ticket_loading_01.add(img_ticketing_loading_1_t_3);

    // img_ticketing_loading_1_t_2
    const img_ticketing_loading_1_t_2 = this.add.image(
      0,
      -27,
      "img_ticketing_loading_1_t_2"
    );
    ticket_loading_01.add(img_ticketing_loading_1_t_2);

    // img_ticketing_loading_1_t_
    const img_ticketing_loading_1_t_ = this.add.image(
      0,
      -28,
      "img_ticketing_loading_1_t_1"
    );
    img_ticketing_loading_1_t_.name = "img_ticketing_loading_1_t_";
    ticket_loading_01.add(img_ticketing_loading_1_t_);

    // text
    const text = this.add.text(0, 602.2474365234375, "", {});
    text.setOrigin(0.5, 0);
    text.visible = false;
    text.text =
      "고려실을 여행하며\n고려사회의 특징이 드러난\n전시품을 수집해 보세요.";
    text.setStyle({
      align: "center",
      color: "#161844",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "33pt",
    });
    text.setLineSpacing(1.2);
    ticket_loading_01.add(text);

    // ticket_loading_02
    const ticket_loading_02 = this.add.container(540, 1150);
    ticket_loading_02.name = "ticket_loading_02";
    ticket_loading_02.visible = false;

    // img_ticketing_loading_b_2
    const img_ticketing_loading_b_2 = this.add.image(
      0,
      109,
      "img_ticketing_loading_b"
    );
    img_ticketing_loading_b_2.name = "img_ticketing_loading_b_2";
    ticket_loading_02.add(img_ticketing_loading_b_2);

    // img_ticketing_loading_2_tk
    const img_ticketing_loading_2_tk = this.add.image(
      10,
      -14,
      "img_ticketing_loading_2_tk"
    );
    img_ticketing_loading_2_tk.name = "img_ticketing_loading_2_tk";
    ticket_loading_02.add(img_ticketing_loading_2_tk);

    // img_ticketing_loading_2_t_3
    const img_ticketing_loading_2_t_3 = this.add.image(
      0,
      -26,
      "img_ticketing_loading_2_t_3"
    );
    img_ticketing_loading_2_t_3.visible = false;
    ticket_loading_02.add(img_ticketing_loading_2_t_3);

    // img_ticketing_loading_2_t_2
    const img_ticketing_loading_2_t_2 = this.add.image(
      0,
      -27,
      "img_ticketing_loading_2_t_2"
    );
    img_ticketing_loading_2_t_2.visible = false;
    ticket_loading_02.add(img_ticketing_loading_2_t_2);

    // img_ticketing_loading_2_t_
    const img_ticketing_loading_2_t_ = this.add.image(
      0,
      -28,
      "img_ticketing_loading_2_t_1"
    );
    img_ticketing_loading_2_t_.name = "img_ticketing_loading_2_t_";
    ticket_loading_02.add(img_ticketing_loading_2_t_);

    // ticketed_head
    const ticketed_head = this.add.container(214, 231);
    ticketed_head.name = "ticketed_head";
    ticketed_head.visible = false;

    // ticket_type_text
    const ticket_type_text = this.add.text(0, -20, "", {});
    ticket_type_text.name = "ticket_type_text";
    ticket_type_text.text = "다양한 고려";
    ticket_type_text.setStyle({
      color: "#598DFF",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "53pt",
    });
    ticketed_head.add(ticket_type_text);

    // add_text
    const add_text = this.add.text(594, -19, "", {});
    add_text.name = "add_text";
    add_text.text = "를";
    add_text.setStyle({
      color: "#161844",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "53pt",
    });
    ticketed_head.add(add_text);

    // text_2
    const text_2 = this.add.text(156, 61, "", {});
    text_2.text = "찾아 떠나요!\n";
    text_2.setStyle({
      color: "#161844",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "53pt",
    });
    ticketed_head.add(text_2);

    // text_4
    const text_4 = this.add.text(326, 169, "", {});
    text_4.setOrigin(0.5, 0);
    text_4.visible = false;
    text_4.text =
      "불교를 국교로 한 고려는\n도교와 성리학 등의 문화를 포용하며\n다양한 문화적 발자취를 남겼어요.";
    text_4.setStyle({
      align: "center",
      color: "#161844",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "33pt",
    });
    text_4.setLineSpacing(1.2);
    ticketed_head.add(text_4);

    // ticketing_head
    const ticketing_head = this.add.container(540, 470);
    ticketing_head.name = "ticketing_head";

    // text_7
    let text_7_html = `
    <p class="ticketing_text_7"><img src="assets/ticketing/img_star_o.svg">추천 여행지</p>
    `;
    const text_7 = this.add.dom(-20, -123).createFromHTML(text_7_html);
    ticketing_head.add(text_7);

    // text_8
    const text_8 = this.add.text(0, -60, "", {});
    text_8.name = "text_8";
    text_8.setOrigin(0.5, 0);
    text_8.text = "개방적인 고려의 사회";
    text_8.setStyle({
      align: "center",
      color: "#699B00",
      fontFamily: "KoddiUDOnGothic-ExtraBold",
      fontSize: "53pt",
    });
    ticketing_head.add(text_8);

    // text_9
    const text_9 = this.add.dom(0, 220).createFromHTML("");
    let text_9_html = `
    <p class="ticketing_text_9">
      고려는 열린 마음으로 제도를 고치고 신분의 벽을 낮춰 활기찬 사회를 만들었습니다. 또한 쓸모있는 외국 문물을 적극 받아들여 고려에 알맞게 바꾸었습니다.
    </p>
    `;
    text_9.setHTML(text_9_html);
    ticketing_head.add(text_9);

    this.ticketing_1 = ticketing_1;
    this.ticketing_2 = ticketing_2;
    this.ticket_loading_01 = ticket_loading_01;
    this.ticket_loading_02 = ticket_loading_02;
    this.ticket_type_text = ticket_type_text;
    this.add_text = add_text;
    this.ticketed_head = ticketed_head;
    this.ticketing_head = ticketing_head;
    this.text_7 = text_7;
    this.text_9 = text_9;

    this.events.emit("scene-awake");
  }

  public ticketing_1!: Phaser.GameObjects.Container;
  public ticketing_2!: Phaser.GameObjects.Container;
  public ticket_loading_01!: Phaser.GameObjects.Container;
  public ticket_loading_02!: Phaser.GameObjects.Container;
  public ticket_type_text!: Phaser.GameObjects.Text;
  public add_text!: Phaser.GameObjects.Text;
  public ticketed_head!: Phaser.GameObjects.Container;
  public ticketing_head!: Phaser.GameObjects.Container;
  public text_7!: Phaser.GameObjects.DOMElement;
  public text_9!: Phaser.GameObjects.DOMElement;

  url: any;
  baseUrl: any;
  subUrl: any;
  selectedImage: any;
  ticketType: any;
  selectTicket: any;
  selectTicketLoading: any;
  fontColorMain: any;
  fontColorSub: any;
  //visit: any;
  preload() {
    document.body.style.backgroundColor = "#EBE2DB";
    this.load.pack("ticket-asset-pack", ticketingAssetPackUrl);
    localStorage.setItem("lastPage", "Ticketing");
    //this.visit = JSON.parse(localStorage.getItem('visit'));
  }

  init(data) {
    this.selectedImage = data.selectedImage ? data.selectedImage : [];

    let diversity = ["img_wjs", "img_sgg", "img_gr", "img_pmdjg"];
    let openness = ["img_is", "img_bgz", "img_cra", "img_gmw"];

    const diversityCount = diversity.filter((item) =>
      this.selectedImage.includes(item)
    ).length;
    const opennessCount = openness.filter((item) =>
      this.selectedImage.includes(item)
    ).length;

    if (diversityCount > 0 || opennessCount > 0) {
      if (diversityCount > opennessCount) {
        this.ticketType = "diversity";
      } else {
        this.ticketType = "openness";
      }
      localStorage.setItem("ticketType", this.ticketType);
    } else {
      this.ticketType = localStorage.getItem("ticketType");
      if (!this.ticketType) {
        this.scene.start("Start");
      }
    }
  }

  visitCount: any;
  create() {
    this.editorCreate();
    Util.fixedButtons("ticketing");
    let _this = this;

    if (this.ticketType === "diversity") {
      this.selectTicketLoading = this.ticket_loading_01;
      (this.ticketing_head.getByName("text_8") as Phaser.GameObjects.Text)
        .setText("다양한 고려의 문화")
        .setColor("#598DFF");
      this.text_9.setHTML(
        `<p class="ticketing_text_9">고려 사람들은 여러 문화가 잘 어울리면 큰 힘이 된다는 걸 알았습니다. 다양성 덕분에 고려의 종교와 문화는 무지개처럼 다채롭고 아름답게 피어났습니다.</p>`
      );
      this.text_7.setHTML(
        `<p class="ticketing_text_7"><img src="assets/ticketing/img_star_d.svg">추천 여행지</p>`
      );
    } else {
      this.selectTicketLoading = this.ticket_loading_02;
    }
    this.selectTicketLoading.visible = true;

    const isDoneGuide = localStorage.getItem("isDoneGuide") === "true";
    let params = {
      ticketType: this.ticketType,
      discoverArtifact: [],
      isDoneGuide: isDoneGuide,
    };

    const user_id = localStorage.getItem("user_id");
    if(user_id) params['_id'] = user_id;

    function ticketing() {
      let totalDelay = 6000;
      let isDev = process.env.NODE_ENV === "development";
      isDev = false;
      if (isDev) totalDelay = 0;
      _this.time.delayedCall(
        Math.floor(totalDelay / 3),
        function () {
          _this.selectTicketLoading.list[4].visible = false;
          _this.selectTicketLoading.list[3].visible = true;
          _this.time.delayedCall(
            Math.floor(totalDelay / 3),
            function () {
              _this.selectTicketLoading.list[3].visible = false;
              _this.selectTicketLoading.list[2].visible = true;
            },
            [],
            _this
          );
        },
        [],
        _this
      );
      _this.tweens.add({
        targets: _this.selectTicketLoading.list[1],
        y: 300,
        duration: totalDelay,
        ease: "Power2",
        onComplete: () => {
          _this.tweens.add({
            targets: _this.selectTicketLoading.list[1],
            scale: { from: 1, to: 3.5 },
            alpha: { from: 1, to: 0.3 },
            y: { from: 300, to: 100 },
            duration: 1000,
            ease: "Power2",
            onStart: () => {
              _this.selectTicketLoading.list[1].setDepth(10);
            },
            onComplete: () => {
              _this.showTicket();
              Util.setHotBtns(
                { sceneName: "Intro", btns: ["btn_home"] },
                _this
              );
            },
          });
        },
      });
    }

    Api.updateUser(params)
      .then((res: any) => {
        this.visitCount = res.data.visitCount;
        this.genUrl(res.data._id);
        this.setLocalStorage(res.data._id);
        ticketing();
      })
      .catch((error: any) => {
        console.error(error);
        //alert("티켓 발권에 실패했습니다. 다시 시도해 주세요.");
        this.scene.start("Start");
      });
  }

  ticketTypeText: any;
  showTicket() {
    this.ticketing_head.visible = false;
    this.ticketed_head.visible = true;
    this.selectTicketLoading.visible = false;

    if (this.ticketType === "diversity") {
      this.ticket_type_text.text = "다양한 고려의 문화";
      this.selectTicket = this.ticketing_1;
      this.fontColorMain = "#72bbff";
      this.fontColorSub = "#00589d";
      this.ticketTypeText = "다양한 고려의 문화";
    } else {
      this.ticket_type_text.text = "개방적인 고려의 사회";
      this.ticket_type_text.x = -30;
      this.ticket_type_text.setStyle({ color: "#699B00" });
      this.add_text.x = 624;
      this.selectTicket = this.ticketing_2;
      this.fontColorMain = "#699B00";
      this.fontColorSub = "#699B00";
      this.ticketTypeText = "개방적인 고려의 사회";
    }
    this.selectTicket.visible = true;
    this.addString();

    this.selectTicket.iterate((child) => {
      if (
        child instanceof Phaser.GameObjects.Image &&
        (child.texture.key === "img_ticket_12" ||
          child.texture.key === "img_ticket_22")
      ) {
        child.setInteractive();
        child.on("pointerdown", () => {
          const originalX = child.x;
          const originalY = child.y;

          this.tweens.add({
            targets: child,
            x: originalX + 300,
            y: originalY + 300,
            alpha: 0,
            angle: 45,
            duration: 1000,
            ease: "Power2",
            onComplete: () => {
              child.destroy();
              if (this.url) {
                window.location.href = this.url;
              } else {
                console.error("URL is not defined");
              }
            },
          });
        });
      }
    });
  }

  addString() {
    let now = moment();
    const ticketBox = this.add.container(570, 950);

    // ticketType
    const ticketType = this.add.text(330, 90, "", {}).setOrigin(1, 0);
    ticketType.text = this.ticketTypeText;
    ticketType.setStyle({
      color: this.fontColorSub,
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "53pt",
    });
    ticketBox.add(ticketType);

    // year
    const year = this.add.text(6, 190, "", {}).setOrigin(1, 0);
    year.text = now.format("YYYY.");
    year.setStyle({
      color: this.fontColorMain,
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
    });
    ticketBox.add(year);

    // date
    const date = this.add.text(160, 190, "", {}).setOrigin(1, 0);
    date.text = now.format("MM. DD");
    date.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
    });
    ticketBox.add(date);

    // underline
    const underline = this.add.text(230, 210, "", {}).setOrigin(1, 0);
    underline.text = "___";
    underline.setStyle({
      color: this.fontColorMain,
      fontSize: "27px",
      stroke: this.fontColorMain,
      strokeThickness: 2,
    });
    ticketBox.add(underline);

    // weekDay
    const weekDay = this.add.text(330, 190, "", {}).setOrigin(1, 0);
    weekDay.text = now.format("ddd").toUpperCase();
    weekDay.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
    });
    ticketBox.add(weekDay);

    // n번째 방문
    const nthIndex = this.add.text(330, 256, "", {}).setOrigin(1, 0);
    nthIndex.text = this.visitCount + "번째 여행자";
    nthIndex.setStyle({
      align: "right",
      color: this.fontColorSub,
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "36pt",
    });
    nthIndex.setLetterSpacing(0);
    ticketBox.add(nthIndex);
  }

  genUrl(user_id) {
    let selectedImageStr = this.selectedImage.map(encodeURIComponent).join();
    this.url =
      this.baseUrl +
      this.subUrl +
      "?page=Onboarding&tt=" +
      this.ticketType +
      "&sImg=" +
      selectedImageStr +
      "&ui=" +
      user_id +
      "&vc=" +
      this.visitCount;
  }

  setLocalStorage(user_id) {
    let selectedImageStr = this.selectedImage.map(encodeURIComponent).join();
    localStorage.setItem("lastPage", "Onboarding");
    localStorage.setItem("ticketType", this.ticketType);
    const user = {
      _id: user_id,
      ticketType: this.ticketType,
      visitCount: this.visitCount,
    };
    localStorage.setItem("user", JSON.stringify(user));

  }
}
