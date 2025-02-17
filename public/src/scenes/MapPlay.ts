import mapplayAssetPackUrl from "../../static/assets/mapplay/mapplay.json";
import moment from "moment";
import Util from "../Util";
import Api from "../Api";
import _ from "underscore";
import RacRoundText from "../components/RacRoundText";
import ItrcDiversity from "./ItrcDiversity";
import ItrcOpenness from "./ItrcOpenness";
export default class MapPlay extends Phaser.Scene {
  constructor() {
    super("MapPlay");
    this.user = {};
    this.themeColor = {
      basicColor: 0x73748d,
      activeColor: 0xa2be22,
    };
    this.activePointEl = "";
    this.startPoints = {};
    this.eventPoints = {};
    this.pointStyle = {
      fillColor: 0xffffff,
      strokeColor: this.themeColor.basicColor,
      width: 70,
      height: 70,
      strokeAlpha: 3,
      lineWidth: 3,
    };
    this.activeLineSpeed = 350;
    this.lineStyle = {
      strokeColor: this.themeColor.basicColor,
      lineColor: this.themeColor.basicColor,
      activeColor: this.themeColor.activeColor,
      pointColor: 0xffffff,
      activeLineSpeed: 350,
      lineWidth: 5,
      isTyping: true,
    };
    this.eventPointEllipse = {};
    this.currenttPoint = "";
    this.currentEventPoint = "";
    this.lines = {};
    this.createLine = {};
    this.createQuadraticBezier = {};
    this.drawCurve = {};
    this.guideFlow = "";
    this.currentGuideIndex = 0;
  }

  editorCreate(): void {
    const map = this.add.container(532, 1040);
    const bg_mapplay_01 = this.add.image(12, -12, "bg_mapplay_01");
    map.add(bg_mapplay_01);

    const img_load = this.add.image(10, -41, "img_load");
    img_load.flipX = true;
    img_load.flipY = true;
    map.add(img_load);

    // playerContainer
    const playerContainer = this.add.container(-2000, -2000);

    // bg_character
    const bg_character = this.add.image(0, 10, "bg_cr_openness");
    bg_character.setOrigin(0.5, 0.5);
    playerContainer.add(bg_character);

    // my_character
    const my_character = this.add.image(0, -10, "img_c1");
    my_character.scaleX = 0.13;
    my_character.scaleY = 0.13;
    my_character.setOrigin(0.5, 0.5);
    playerContainer.add(my_character);

    // nickname
    const nickname = this.add.text(0, 82, "", {});
    nickname.setOrigin(0.5, 0.5);
    nickname.text = "-";
    nickname.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "23pt",
    });
    playerContainer.add(nickname);

    // artifact_list
    const artifact_list = this.add.container(300, 3384);

    // bg_artifact_list
    const bg_artifact_list = this.add.image(243, 501, "bg_artifact_list");
    artifact_list.add(bg_artifact_list);

    // imb_artifact_holder_1
    const imb_artifact_holder_1 = this.add.image(
      -48,
      14,
      "imb_artifact_holder"
    );
    imb_artifact_holder_1.name = "imb_artifact_holder_1";
    artifact_list.add(imb_artifact_holder_1);

    // imb_artifact_holder_2
    const imb_artifact_holder_2 = this.add.image(
      243,
      14,
      "imb_artifact_holder"
    );
    imb_artifact_holder_2.name = "imb_artifact_holder_2";
    artifact_list.add(imb_artifact_holder_2);

    // imb_artifact_holder_3
    const imb_artifact_holder_3 = this.add.image(
      535,
      14,
      "imb_artifact_holder"
    );
    imb_artifact_holder_3.name = "imb_artifact_holder_3";
    artifact_list.add(imb_artifact_holder_3);

    // imb_artifact_holder_4
    const imb_artifact_holder_4 = this.add.image(
      -48,
      316,
      "imb_artifact_holder"
    );
    imb_artifact_holder_4.name = "imb_artifact_holder_4";
    artifact_list.add(imb_artifact_holder_4);

    // imb_artifact_holder_5
    const imb_artifact_holder_5 = this.add.image(
      243,
      316,
      "imb_artifact_holder"
    );
    imb_artifact_holder_5.name = "imb_artifact_holder_5";
    artifact_list.add(imb_artifact_holder_5);

    // imb_artifact_holder_6
    const imb_artifact_holder_6 = this.add.image(
      535,
      316,
      "imb_artifact_holder"
    );
    imb_artifact_holder_6.name = "imb_artifact_holder_6";
    artifact_list.add(imb_artifact_holder_6);

    // imb_artifact_holder_7
    const imb_artifact_holder_7 = this.add.image(
      -48,
      631,
      "imb_artifact_holder"
    );
    imb_artifact_holder_7.name = "imb_artifact_holder_7";
    artifact_list.add(imb_artifact_holder_7);

    // imb_artifact_holder_8
    const imb_artifact_holder_8 = this.add.image(
      243,
      630,
      "imb_artifact_holder"
    );
    imb_artifact_holder_8.name = "imb_artifact_holder_8";
    artifact_list.add(imb_artifact_holder_8);

    // imb_artifact_holder_9
    const imb_artifact_holder_9 = this.add.image(
      535,
      629,
      "imb_artifact_holder"
    );
    imb_artifact_holder_9.visible = false;
    artifact_list.add(imb_artifact_holder_9);

    // prog_l
    const prog_l = this.add.image(-151, -360, "ico_progress_l");
    prog_l.name = "prog_l";
    artifact_list.add(prog_l);

    // prog_r
    const prog_r = this.add.image(-127, -360, "ico_progress_r");
    prog_r.name = "prog_r";
    artifact_list.add(prog_r);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(-139, -384, 0, 48);
    rectangle_1.name = "rectangle_1";
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 5869055;
    artifact_list.add(rectangle_1);

    // artifact_location_1
    const artifact_location_1 = this.add.text(45, -275, "", {});
    artifact_location_1.text = "전시품을 획득하면 여행 완료!";
    artifact_location_1.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    artifact_location_1.setWordWrapWidth(700);
    artifact_list.add(artifact_location_1);

    // artifact_num
    const artifact_num = this.add.text(-65, -275, "", {});
    artifact_num.name = "artifact_num";
    artifact_num.text = "0 / 8";
    artifact_num.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    artifact_num.setWordWrapWidth(700);
    artifact_list.add(artifact_num);

    // point_card
    const point_card = this.add.container(544, 1034);
    point_card.visible = false;

    // bg_point_card
    const bg_point_card = this.add.image(0, 0, "point_card");
    point_card.add(bg_point_card);

    // bg_point_card_effect
    const bg_point_card_effect = this.add.image(
      -4,
      -180,
      "bg_point_card_effect"
    );
    point_card.add(bg_point_card_effect);

    // btn_qr
    const btn_qr = this.add.image(345, 217, "btn_qr_rt");
    btn_qr.scaleX = 0.8;
    btn_qr.scaleY = 0.8;
    point_card.add(btn_qr);

    // artifact_title
    const artifact_title = this.add.text(-406, 131, "", {});
    artifact_title.text = "전시품이름";
    artifact_title.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
    });
    artifact_title.setWordWrapWidth(600);
    point_card.add(artifact_title);

    // artifact_location
    const artifact_location = this.add.text(-396, 259, "", {});
    artifact_location.text = "고려 1실";
    artifact_location.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "28pt",
    });
    artifact_location.setWordWrapWidth(700);
    point_card.add(artifact_location);

    // artifact_title_1
    const artifact_title_1 = this.add.text(305, 162, "", {});
    artifact_title_1.text = "QR\n스캔";
    artifact_title_1.setStyle({
      align: "center",
      color: "#ffffff",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    point_card.add(artifact_title_1);

    // guide_line_1
    const guide_line_1 = this.add.rectangle(2, -180, 140, 100);
    guide_line_1.scaleX = 4.81;
    guide_line_1.scaleY = 4.31170777273978;
    guide_line_1.visible = false;
    guide_line_1.fillAlpha = 2;
    guide_line_1.isStroked = true;
    guide_line_1.strokeColor = 15813965;
    point_card.add(guide_line_1);

    // popup_interactive
    const popup_interactive = this.add.container(0, -3000);

    // bg_popup
    const bg_popup = this.add.image(540, 1000, "bg_popup_div");
    popup_interactive.add(bg_popup);

    // img_time
    const img_time = this.add.image(862, 235, "img_div_time");
    popup_interactive.add(img_time);

    // popup_tickettype
    const popup_tickettype = this.add.text(283, 252, "", {});
    popup_tickettype.setOrigin(0.5, 0.5);
    popup_tickettype.text = "다양성";
    popup_tickettype.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "23pt",
    });
    popup_interactive.add(popup_tickettype);

    // popup_at_name
    const popup_at_name = this.add.text(540, 393, "", {});
    popup_at_name.setOrigin(0.5, 0.5);
    popup_at_name.text = "기린을 본떠 만든 청자 향로";
    popup_at_name.setStyle({
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
    });
    popup_interactive.add(popup_at_name);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(540, 464, 128, 128);
    rectangle_2.scaleX = 1.9;
    rectangle_2.scaleY = 0.4;
    rectangle_2.visible = false;
    rectangle_2.isFilled = true;
    popup_interactive.add(rectangle_2);

    // popup_location_text
    const popup_location_text = this.add.text(540, 467, "", {});
    popup_location_text.name = "popup_location_text";
    popup_location_text.setOrigin(0.5, 0.5);
    popup_location_text.text = "덕수 3063";
    popup_location_text.setStyle({
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "28px",
    });
    popup_location_text.setPadding({ left: 10, top: 2, right: 10, bottom: 2 });
    popup_interactive.add(popup_location_text);

    // interactive_image
    const interactive_image = this.add.image(540, 827, "img_o_point_3");
    interactive_image.name = "interactive_image";
    interactive_image.scaleX = 0.2;
    interactive_image.scaleY = 0.2;
    popup_interactive.add(interactive_image);

    // bnt_zoom
    const bnt_zoom = this.add.image(707, 575, "bnt_zoom");
    bnt_zoom.visible = false;
    popup_interactive.add(bnt_zoom);

    // popup_exp_text
    const popup_exp_text = this.add.dom(0, 0).createFromHTML("");
    popup_interactive.add(popup_exp_text);

    // btn_exp
    const btn_exp = this.add.image(540, 1791 - 114, "btn_div_exp");
    popup_interactive.add(btn_exp);

    // guide_line
    const guide_line = this.add.rectangle(540, 821, 140, 120);
    guide_line.scaleX = 4.31170777273978;
    guide_line.scaleY = 4.31170777273978;
    guide_line.visible = false;
    guide_line.fillAlpha = 2;
    guide_line.isStroked = true;
    guide_line.strokeColor = 15813965;
    popup_interactive.add(guide_line);

    // img_magnifier
    const img_magnifier = this.add.image(936, 1690, "img_magnifier");
    img_magnifier.name = "img_magnifier";
    img_magnifier.scaleX = 0.8;
    img_magnifier.scaleY = 0.8;
    img_magnifier.angle = -15;

    // blank_layer
    const blank_layer = this.add.rectangle(538, 955, 1351, 2153);
    blank_layer.visible = false;
    blank_layer.isFilled = true;
    blank_layer.fillColor = 7519231;

    // mycard
    const mycard = this.add.container(546, 992);
    mycard.visible = false;

    // bg_mypage
    const bg_mypage = this.add.image(0, 0, "bg_mypage");
    mycard.add(bg_mypage);

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
    const mycard_stamp = this.add.image(368, 559, "img_stamp_di");
    mycard_stamp.name = "mycard_stamp";
    mycard.add(mycard_stamp);

    // guide_cont
    const guide_cont = this.add.container(-1000, -1000);
    guide_cont.name = "guide_cont";

    // start_guide_layer
    const start_guide_layer = this.add.rectangle(0, 0, 1080, 1920);
    start_guide_layer.name = "start_guide_layer";
    guide_cont.add(start_guide_layer);

    // guide_0
    const guide_0 = this.add.image(0, 0, "guide_0");
    guide_cont.add(guide_0);

    // 가이드 선 확인용 코드
    // function addOutline(scene, x, y, width, height, color = 0xff0000) {
    //   const outline = scene.add
    //     .rectangle(x, y, width, height)
    //     .setStrokeStyle(2, color);
    //   guide_cont.add(outline);
    //   return outline;
    // }

    // btn_close_layer
    const btn_close_layer = this.add.ellipse(452, -869, 128, 128);
    btn_close_layer.scaleX = 0.9735226353898899;
    btn_close_layer.scaleY = 0.9735226353898899;
    guide_cont.add(btn_close_layer);

    // btn_show_guide_1
    // addOutline(
    //   this,
    //   154,
    //   -29 + 190,
    //   128 * 2.397734904629178,
    //   128 * 1.0842140067479646
    // );
    const btn_show_guide_1 = this.add.rectangle(154, 161, 128, 128);
    btn_show_guide_1.name = "btn_show_guide_1";
    btn_show_guide_1.scaleX = 2.397734904629178;
    btn_show_guide_1.scaleY = 1.0842140067479646;
    guide_cont.add(btn_show_guide_1);

    // btn_show_guide_2
    const btn_show_guide_2 = this.add.rectangle(-329, -746, 128, 128);
    btn_show_guide_2.name = "btn_show_guide_2";
    btn_show_guide_2.scaleX = 2.302058192048727;
    btn_show_guide_2.scaleY = 1.0842140067479646;
    guide_cont.add(btn_show_guide_2);

    // btn_show_guide_3
    const btn_show_guide_3 = this.add.rectangle(-195, 428, 128, 128);
    btn_show_guide_3.name = "btn_show_guide_3";
    btn_show_guide_3.scaleX = 2.487779334855465;
    btn_show_guide_3.scaleY = 1.0842140067479646;
    guide_cont.add(btn_show_guide_3);

    // btn_show_guide_4
    const btn_show_guide_4 = this.add.rectangle(-195, 580, 128, 128);
    btn_show_guide_4.name = "btn_show_guide_4";
    btn_show_guide_4.scaleX = 2.487779334855465;
    btn_show_guide_4.scaleY = 1.0842140067479646;
    guide_cont.add(btn_show_guide_4);

    // guide_1
    const guide_1 = this.add.image(0, 0, "guide_1");
    guide_1.alpha = 0;
    guide_1.alphaTopLeft = 0;
    guide_1.alphaTopRight = 0;
    guide_1.alphaBottomLeft = 0;
    guide_1.alphaBottomRight = 0;
    guide_cont.add(guide_1);

    // guide_2
    const guide_2 = this.add.image(0, 0, "guide_2");
    guide_2.name = "guide_2";
    guide_2.alpha = 0;
    guide_2.alphaTopLeft = 0;
    guide_2.alphaTopRight = 0;
    guide_2.alphaBottomLeft = 0;
    guide_2.alphaBottomRight = 0;
    guide_cont.add(guide_2);

    // guide_3
    const guide_3 = this.add.image(0, 0, "guide_3");
    guide_3.name = "guide_3";
    guide_3.alpha = 0;
    guide_3.alphaTopLeft = 0;
    guide_3.alphaTopRight = 0;
    guide_3.alphaBottomLeft = 0;
    guide_3.alphaBottomRight = 0;
    guide_cont.add(guide_3);

    // guide_4
    const guide_4 = this.add.image(0, 0, "guide_4");
    guide_4.name = "guide_4";
    guide_4.alpha = 0;
    guide_4.alphaTopLeft = 0;
    guide_4.alphaTopRight = 0;
    guide_4.alphaBottomLeft = 0;
    guide_4.alphaBottomRight = 0;
    guide_cont.add(guide_4);

    // btn_done_int_cont
    const btn_done_int_cont = this.add.container(891, 1714);
    btn_done_int_cont.visible = false;

    // bg_done_int_cont
    const bg_done_int_cont = this.add.rectangle(0, -5, 128, 128);
    bg_done_int_cont.scaleX = 2.2756867908686242;
    bg_done_int_cont.scaleY = 2.315371326277973;
    bg_done_int_cont.isFilled = true;
    bg_done_int_cont.fillColor = 15459035;
    btn_done_int_cont.add(bg_done_int_cont);

    // btn_done_int
    const btn_done_int = this.add.image(0, 0, "btn_done_int_op");
    btn_done_int.tintTopLeft = 15459035;
    btn_done_int.tintTopRight = 15459035;
    btn_done_int.tintBottomLeft = 15459035;
    btn_done_int.tintBottomRight = 15459035;
    btn_done_int_cont.add(btn_done_int);

    // rectangle_3
    const rectangle_3 = this.add.rectangle(60, 173, 980, 1680);
    rectangle_3.setOrigin(0, 0);
    rectangle_3.visible = false;
    rectangle_3.isFilled = true;

    this.bg_mapplay_01 = bg_mapplay_01;
    this.img_load = img_load;
    this.bg_character = bg_character;
    this.my_character = my_character;
    this.nickname = nickname;
    this.playerContainer = playerContainer;
    this.prog_r = prog_r;
    this.rectangle_1 = rectangle_1;
    this.artifact_location_1 = artifact_location_1;
    this.artifact_num = artifact_num;
    this.artifact_list = artifact_list;
    this.bg_point_card = bg_point_card;
    this.btn_qr = btn_qr;
    this.artifact_title = artifact_title;
    this.artifact_location = artifact_location;
    this.artifact_title_1 = artifact_title_1;
    this.point_card = point_card;
    this.bg_popup = bg_popup;
    this.img_time = img_time;
    this.popup_tickettype = popup_tickettype;
    this.popup_at_name = popup_at_name;
    this.popup_location_text = popup_location_text;
    this.interactive_image = interactive_image;
    this.bnt_zoom = bnt_zoom;
    this.popup_exp_text = popup_exp_text;
    this.btn_exp = btn_exp;
    this.popup_interactive = popup_interactive;
    this.img_magnifier = img_magnifier;
    this.blank_layer = blank_layer;
    this.mycard_name = mycard_name;
    this.mycard_phrase = mycard_phrase;
    this.mycard_title_1 = mycard_title_1;
    this.mycard_title_2 = mycard_title_2;
    this.mycard_title_3 = mycard_title_3;
    this.mycard_date = mycard_date;
    this.mycard_visitcount = mycard_visitcount;
    this.mycard_time = mycard_time;
    this.mycard_stamp = mycard_stamp;
    this.mycard = mycard;
    this.start_guide_layer = start_guide_layer;
    this.btn_close_layer = btn_close_layer;
    this.btn_show_guide_1 = btn_show_guide_1;
    this.btn_show_guide_2 = btn_show_guide_2;
    this.btn_show_guide_3 = btn_show_guide_3;
    this.btn_show_guide_4 = btn_show_guide_4;
    this.guide_1 = guide_1;
    this.guide_2 = guide_2;
    this.guide_3 = guide_3;
    this.guide_4 = guide_4;
    this.guide_cont = guide_cont;
    this.btn_done_int = btn_done_int;
    this.btn_done_int_cont = btn_done_int_cont;

    this.events.emit("scene-awake");
  }

  public bg_mapplay_01!: Phaser.GameObjects.Image;
  public img_load!: Phaser.GameObjects.Image;
  public bg_character!: Phaser.GameObjects.Image;
  public my_character!: Phaser.GameObjects.Image;
  public nickname!: Phaser.GameObjects.Text;
  public playerContainer!: Phaser.GameObjects.Container;
  public prog_r!: Phaser.GameObjects.Image;
  public rectangle_1!: Phaser.GameObjects.Rectangle;
  public artifact_location_1!: Phaser.GameObjects.Text;
  public artifact_num!: Phaser.GameObjects.Text;
  public artifact_list!: Phaser.GameObjects.Container;
  public bg_point_card!: Phaser.GameObjects.Image;
  public btn_qr!: Phaser.GameObjects.Image;
  public artifact_title!: Phaser.GameObjects.Text;
  public artifact_location!: Phaser.GameObjects.Text;
  public artifact_title_1!: Phaser.GameObjects.Text;
  public point_card!: Phaser.GameObjects.Container;
  public bg_popup!: Phaser.GameObjects.Image;
  public img_time!: Phaser.GameObjects.Image;
  public popup_tickettype!: Phaser.GameObjects.Text;
  public popup_at_name!: Phaser.GameObjects.Text;
  public popup_location_text!: Phaser.GameObjects.Text;
  public interactive_image!: Phaser.GameObjects.Image;
  public bnt_zoom!: Phaser.GameObjects.Image;
  public popup_exp_text!: Phaser.GameObjects.DOMElement;
  public btn_exp!: Phaser.GameObjects.Image;
  public popup_interactive!: Phaser.GameObjects.Container;
  public img_magnifier!: Phaser.GameObjects.Image;
  public blank_layer!: Phaser.GameObjects.Rectangle;
  public mycard_name!: Phaser.GameObjects.Text;
  public mycard_phrase!: Phaser.GameObjects.Text;
  public mycard_title_1!: Phaser.GameObjects.Text;
  public mycard_title_2!: Phaser.GameObjects.Text;
  public mycard_title_3!: Phaser.GameObjects.Text;
  public mycard_date!: Phaser.GameObjects.Text;
  public mycard_visitcount!: Phaser.GameObjects.Text;
  public mycard_time!: Phaser.GameObjects.Text;
  public mycard_stamp!: Phaser.GameObjects.Image;
  public mycard!: Phaser.GameObjects.Container;
  public start_guide_layer!: Phaser.GameObjects.Rectangle;
  public btn_close_layer!: Phaser.GameObjects.Ellipse;
  public btn_show_guide_1!: Phaser.GameObjects.Rectangle;
  public btn_show_guide_2!: Phaser.GameObjects.Rectangle;
  public btn_show_guide_3!: Phaser.GameObjects.Rectangle;
  public btn_show_guide_4!: Phaser.GameObjects.Rectangle;
  public guide_1!: Phaser.GameObjects.Image;
  public guide_2!: Phaser.GameObjects.Image;
  public guide_3!: Phaser.GameObjects.Image;
  public guide_4!: Phaser.GameObjects.Image;
  public guide_cont!: Phaser.GameObjects.Container;
  public btn_done_int!: Phaser.GameObjects.Image;
  public btn_done_int_cont!: Phaser.GameObjects.Container;

  user: any;
  themeColor: any;
  activePointEl: any;
  startPoints: any;
  eventPoints: any;
  pointStyle: any;
  currenttPointObj: any;
  eventPointEllipse: any;
  currenttPoint: any;
  currentEventPoint: any;
  activeLineSpeed: any;
  lineStyle: any;
  lines: any;
  createLine: any;
  createQuadraticBezier: any;
  drawCurve: any;
  guideFlow: any;
  currentGuideIndex: any;
  guideLayer: any;
  guideText: any;
  isTyping: any;
  typingInterval: any;
  nextGuideButton: any;
  guideBackground: any;

  artifactCardBg: any;
  artifact: any;
  artifactCardTitle: any;
  artifactCardDescription: any;
  qrButton: any;
  typeLabel: any;
  playerAddPos: any;
  movingPlayer: any;
  myTween: any;
  isBlacklayerBlock: boolean = false;
  bakeIndex: integer = 0;
  preload() {
    let _this = this;
    document.body.style.backgroundColor = "#72BBFF";
    this.cameras.main.setBackgroundColor(0x72bbff);
    this.load.pack("mapplay-asset-pack", mapplayAssetPackUrl);

    localStorage.setItem("lastPage", "MapPlay");

    Util.removeURLParameters();

    let user = localStorage.getItem("user");

    if (user) {
      this.user = JSON.parse(user);

      this.user.visit_id = localStorage.getItem("visit_id");
      this.user.isSignIn = true;
      if (!this.user.visitCount) {
        let visit = JSON.parse(localStorage.getItem("visit"));
        this.user.visitCount = visit.visitCount;
      }
      if (!this.user.isSignIn) {
        this.user.discoverArtifact = [];
      }
      if (!this.user.discoverArtifact) {
        this.user.discoverArtifact = [];
      }

      let startDate = localStorage.getItem("startDate");
      if (!startDate) {
        localStorage.setItem("startDate", moment().toString());
      }

      let userParams = _.pick(this.user, [
        "_id",
        "visit_id",
        "userName",
        "ticketType",
        "character",
        "currentPoint",
        "discoverArtifact",
        "isDoneGuide",
        "snsId",
        "snsName",
        "birth",
        "age",
        "gender",
        "lastconDate",
      ]);
      Api.updateUser(userParams)
        .then((res: any) => {
          _this.user = _.defaults(_this.user, res.data);
          localStorage.setItem("user", JSON.stringify(_this.user));
        })
        .catch((error: any) => {});

      for (let i = 0; i < 8; i++) {
        const imageUrl =
          "assets/mapplay/artifact/" +
          this.user.ticketType +
          "/point_" +
          (i + 1) +
          ".png";
        const textureKey = "artifact_point_" + (i + 1); // 텍스처 키 생성
        this.load.image(textureKey, imageUrl).on("loaderror", (file: any) => {
          console.error(
            "Failed to load image: " + file.key + " from URL: " + file.src
          );
        });
      }

      for (let i = 0; i < 8; i++) {
        const imageUrl =
          "assets/mapplay/artifact_ai/" +
          this.user.ticketType +
          "/point_" +
          (i + 1) +
          ".png";
        const textureKey = "artifact_ai_point_" + (i + 1); // 텍스처 키 생성
        this.load.image(textureKey, imageUrl).on("loaderror", (file: any) => {
          console.error(
            "Failed to load image: " + file.key + " from URL: " + file.src
          );
        });
      }
    } else {
      this.scene.start("Intro");
    }
  }

  ticketTypeTheme: any;
  isDev: any;
  mask: any;
  geoMask: any;
  create() {
    this.isDev = process.env.NODE_ENV === "production" ? false : true;
    this.editorCreate();
    this.my_character.setTexture(this.user.character);
    this.playerAddPos = [0, 0];
    this.nickname.setText(this.user.userName);
    Util.setHotBtns(
      {
        sceneName: "Mapplay",
        btns: ["btn_home", "btn_my_artifact", "btn_guide"],
        contPadding: 30,
      },
      this
    );
    this.playerContainer.setDepth(10);
    this.popup_interactive.setDepth(100);

    if (!this.blackLayer) {
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
          event.stopPropagation();
        });
    }

    if (this.user.ticketType === "diversity") {
      this.ticketTypeTheme = {
        labelColorMain: 0x598dff,
        fontColorMain: 0x72bbff,
        fontColorSub: 0x72bbff,
        ticketType: "다양성",
      };
      this.themeColor.activeColor = 0x72bbff;
      this.btn_done_int.setTexture("btn_done_int_di");
      this.bg_character.setTexture("bg_cr_diversity");
    } else {
      this.ticketTypeTheme = {
        labelColorMain: 0xa1bf21,
        fontColorMain: 0xa1bf21,
        fontColorSub: 0xa1bf21,
        ticketType: "개방성",
      };
    }
    //console.log(this.ticketTypeTheme)
    // this.toggleArtifactList();
    this.createTypeLabel();
    this.setPointsData();
    this.drawStartPoint();

    this.user.kioskDirection = localStorage.getItem("kioskDirection");
    if (this.user.kioskDirection !== "top") {
      this.flipYPoints();
      this.flipXPoints();
    }

    this.drawLine();

    this.drawEventPoint();
    this.movePointToPoint();

    this.artifact_list.setDepth(50);
    if (this.user.discoverArtifact.length > 0) {
      this.user.isDoneGuide = true;

      for (let i = 0; i < this.user.discoverArtifact.length; i++) {
        this.addArtifactList(this.user.discoverArtifact[i], i + 1);
      }
      if (this.user.discoverArtifact.length > 7) {
        this.btn_done_int_cont.setVisible(true);
        if (this.myTween) {
          this.myTween.stop();
          this.myTween = null;
        }
        this.myTween = this.tweens.add({
          targets: this.btn_done_int_cont,
          scale: { from: 1, to: 1.1 },
          duration: 500,
          yoyo: true,
          repeat: -1, // 무한 반복
        });
      }
    }
    this.events.on(
      "resume",
      (scene, data) => {
        this.onResume(scene, data);
      },
      this
    );

    let _this = this;
    // this.img_magnifier.setInteractive().on("pointerdown", function () {
    //   _this.showMyCard();
    //   //_this.saveMyPage();
    // });

    this.btn_done_int_cont.setDepth(15);
    this.btn_done_int
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", function () {
        _this.showMyCard();
      });

    // this.btn_done_int_cont.setDepth(100).setInteractive({cursor:"pointer"}).on('pointerdown', function() {
    // 	_this.showMyCard();
    // });

    localStorage.setItem("user", JSON.stringify(this.user));

    //마스킹 showInteractiveTicket()에서 사용
    const mask = this.add.graphics();
    // `fillRoundedRect`를 사용하여 모양 그리기
    mask.fillStyle(0x000000); // White fill
    // mask.fillRoundedRect(0,0, 680, 600, 20);
    mask.fillRoundedRect(200, 520, 680, 600, 20);
    mask.generateTexture("mapPlay_mask");
    mask.destroy();

    this.mask = this.add.image(0, 0, "mapPlay_mask").setOrigin(0);
    this.popup_interactive.add(this.mask);
    this.mask.setVisible(false);

    this.geoMask = new Phaser.Display.Masks.BitmapMask(this, this.mask);

    //기타 알림메시지(기린을 본떠만든 청자향로)
    this.addPointCardText2 = new RacRoundText(_this, {
      xPos: 0,
      yPos: -630,
      width: 920,
      height: 200,
      round: 25,
      bgColor: 0xffffff,
      color: "#000",
      bgAlpha: 1,
      fontSize: "35pt",
      fontFamily: "KoddiUDOnGothic-Bold",
      text: "1",
      align: "center",
      depth: 20,
    });
    this.addPointCardTextCon2 = this.addPointCardText2.getContainer();
    this.point_card.add(this.addPointCardTextCon2);
    this.addPointCardTextCon2.setVisible(false);
  }

  closePopup(pointer) {
    const object = this.guideTextBoxCon;
    if (object && !object.getBounds().contains(pointer.x, pointer.y)) {
      this.playClosePopupAni(object);
    }
  }

  isPlayingClosePopup: boolean = false;
  playClosePopupAni(object) {
    const _this = this;
    if (this.isPlayingClosePopup) return;
    this.isPlayingClosePopup = true;
    this.tweens.add({
      targets: object,
      y: { from: 1750, to: 2500 },
      duration: 1000,
      ease: "Power2",
      repeat: 0,
      yoyo: false,
      onComplete: function () {
        _this.input.off("pointerdown", _this.closePopup);
        object.setVisible(false);
      },
    });
  }

  addArtifactList(point, i) {
    const textureKey = "artifact_ai_" + point;
    let holder = this.artifact_list.getByName(
      "imb_artifact_holder_" + i
    ) as Phaser.GameObjects.Image; // Image로 캐스팅
    let artifactImage = this.add.image(holder.x, holder.y, textureKey);
    //artifactImage.setDisplaySize(170, 170);
    let scaleArr = {
      diversity: {
        point_1: 0.09,
        point_2: 0.09,
        point_3: 0.08,
        point_4: 0.06,
        point_5: 0.065,
        point_6: 0.12,
        point_7: 0.08,
        point_8: 0.08,
      },
      openness: {
        point_1: 0.09,
        point_2: 0.09,
        point_3: 0.09,
        point_4: 0.09,
        point_5: 0.09,
        point_6: 0.09,
        point_7: 0.09,
        point_8: 0.09,
      },
    };
    artifactImage.setScale(scaleArr[this.user.ticketType][point]);
    this.artifact_list.add(artifactImage);

    // r - -127, 635 , 762 / 8 = 92.25
    this.rectangle_1.width = 95 * i;
    this.prog_r.setX(-127 + 95 * i);
    this.artifact_num.text = i + " / 8";
  }

  createTypeLabel() {
    const typeLabelCon = this.add.container(825, 85);
    const tempRenderTexture = this.add.renderTexture(0, 0, 1080, 1920);
    let graphics = this.add.graphics();
    graphics.setDepth(20);
    graphics.fillStyle(this.ticketTypeTheme.labelColorMain, 1); // White fill
    // graphics.postFX!.addShadow(-1, 2, 0.01, 1, 0, 2, 1);
    graphics.fillRoundedRect(0, 0, 200, 70, 20);
    graphics.strokeRoundedRect(0, 0, 200, 70, 20);
    graphics.generateTexture("typeLabelBoxTexture");
    graphics.destroy();
    const shadow = this.add.graphics();
    shadow.fillStyle(0x000000, 0.5); // 그림자 색상 (0.01은 투명도)
    shadow.fillRoundedRect(0, 0, 202, 72, 20);
    shadow.generateTexture("typeLabelBoxShadowTexture");
    shadow.destroy();
    const typeLabelBoxShadow = this.add
      .image(0, 0, "typeLabelBoxShadowTexture")
      .setOrigin(0);
    const typeLabelBox = this.add
      .image(0, 0, "typeLabelBoxTexture")
      .setOrigin(0);
    // tempRenderTexture.destroy();
    this.typeLabel = this.add
      .text(100, 35, "", {
        fontFamily: "KoddiUDOnGothic-Bold",
        fontSize: "29pt",
        color: "#ffffff",
        align: "center",
        lineSpacing: 12,
        padding: { top: 0, left: 0, right: 0, bottom: 0 },
      })
      .setOrigin(0.5, 0.5);
    this.typeLabel.setText(this.ticketTypeTheme.ticketType);

    typeLabelCon.add(typeLabelBoxShadow);
    typeLabelCon.add(typeLabelBox);
    typeLabelCon.add(this.typeLabel);
  }

  flipYPoints() {
    const height = this.cameras.main.height;
    this.img_load.flipY = false;
    // 반전된 y 좌표를 계산하는 함수
    const flipY = (y: any) => height - y + 75;

    // 반전된 시작 포인트의 위치 재설정
    for (let start in this.startPoints) {
      if (this.startPoints[start]) {
        this.startPoints[start][1] = flipY(this.startPoints[start][1]);
      }
    }

    // 반전된 이벤트 포인트의 위치 재설정
    for (let point in this.eventPoints) {
      if (this.eventPoints[point].pos) {
        this.eventPoints[point].pos[1] = flipY(this.eventPoints[point].pos[1]);
      }
    }

    // 반전된 라인의 위치 재설정
    for (let key in this.lines) {
      let lineArray = this.lines[key];
      lineArray.forEach((line: any) => {
        if (line.start && line.end) {
          line.start[1] = flipY(line.start[1]);
          line.end[1] = flipY(line.end[1]);
        }
        if (line.type === "curve" && line.control) {
          line.control[1] = flipY(line.control[1]);
        }
      });
    }

    // 플레이어 컨테이너의 위치 재설정
    if (this.playerContainer) {
      this.playerContainer.y = flipY(this.playerContainer.y);
    }
    this.bg_mapplay_01.angle = 0;

    this.topStartCon.y = flipY(this.topStartCon.y) - 31;
    this.topStartCon.getByName("topStartLabel").y = 40;
    this.topStartCon.getByName("topStartIcon").y = 90;
    this.topStartCon.getByName("topStartIcon").angle = 0;

    this.middleStartCon.y = flipY(this.middleStartCon.y) - 125;
    this.middleStartCon.getByName("middleStartLabel").x = 95;
    this.middleStartCon.getByName("middleStartIcon").x = 40;
    this.middleStartCon.getByName("middleStartIcon").angle = 180;

    this.bottomStartCon.y = flipY(this.bottomStartCon.y) - 99;
    this.bottomStartCon.getByName("bottomStartLabel").y = 90;
    this.bottomStartCon.getByName("bottomStartIcon").y = 40;
    this.bottomStartCon.getByName("bottomStartIcon").angle = 0;
  }

  flipXPoints() {
    const width = this.cameras.main.width;
    this.img_load.flipX = false;
    // 반전된 x 좌표를 계산하는 함수
    const flipX = (x: any) => width - x;

    this.bg_mapplay_01.setTexture("bg_mapplay_02");
    // 반전된 시작 포인트의 위치 재설정
    for (let start in this.startPoints) {
      if (this.startPoints[start]) {
        this.startPoints[start][0] = flipX(this.startPoints[start][0]);
      }
    }

    // 반전된 이벤트 포인트의 위치 재설정
    for (let point in this.eventPoints) {
      if (this.eventPoints[point].pos) {
        this.eventPoints[point].pos[0] = flipX(this.eventPoints[point].pos[0]);
      }
    }

    // 반전된 라인의 위치 재설정
    for (let key in this.lines) {
      let lineArray = this.lines[key];
      lineArray.forEach((line: any) => {
        if (line.start && line.end) {
          line.start[0] = flipX(line.start[0]);
          line.end[0] = flipX(line.end[0]);
        }
        if (line.type === "curve" && line.control) {
          line.control[0] = flipX(line.control[0]);
        }
      });
    }

    // 플레이어 컨테이너의 위치 재설정
    if (this.playerContainer) {
      this.playerContainer.x = flipX(this.playerContainer.x);
    }
    this.bg_mapplay_01.angle = 0; // X 좌표 반전에서는 각도 조정이 필요하지 않을 수 있습니다.

    this.topStartCon.x = flipX(this.topStartCon.x) - 135;
    this.middleStartCon.x = flipX(this.middleStartCon.x) - 120;
    this.bottomStartCon.x = flipX(this.bottomStartCon.x) - 135;
    this.img_magnifier.x = flipX(this.img_magnifier.x) + 100;
    this.img_magnifier.angle = 270 + 15;
  }

  topStartCon: any;
  middleStartCon: any;
  bottomStartCon: any;
  drawStartPoint() {
    this.topStartCon = this.add.container(185, 245).setDepth(1);

    let topStartBoxG = this.add.graphics();
    topStartBoxG.setDepth(20);
    topStartBoxG.fillStyle(0x73748c, 1); // White fill
    topStartBoxG.fillRoundedRect(0, 0, 130, 130, 10);
    topStartBoxG.generateTexture("topStartBox");
    topStartBoxG.destroy();
    let topStartBox = this.add.image(0, 0, "topStartBox").setOrigin(0);

    let topStartLabel = this.add
      .text(65, 90, "", {
        fontFamily: "KoddiUDOnGothic-Bold",
        fontSize: "25pt",
        color: "#ffffff",
        align: "center",
        lineSpacing: 12,
        padding: { top: 0, left: 0, right: 0, bottom: 0 },
      })
      .setOrigin(0.5, 0.5);
    topStartLabel.setName("topStartLabel");
    topStartLabel.setText("발해실");

    let topStartIcon = this.add.image(65, 40, "ico_bow_3").setAngle(180);
    topStartIcon.setName("topStartIcon");

    this.topStartCon.add(topStartBox);
    this.topStartCon.add(topStartLabel);
    this.topStartCon.add(topStartIcon);

    this.middleStartCon = this.add.container(810, 660).setDepth(1);

    let middleStartConG = this.add.graphics();
    middleStartConG.setDepth(20);
    middleStartConG.fillStyle(0x73748c, 1); // White fill
    middleStartConG.fillRoundedRect(0, 0, 130, 130, 10);
    middleStartConG.generateTexture("middleStartCon");
    middleStartConG.destroy();
    let middleStartCon = this.add.image(0, 0, "middleStartCon").setOrigin(0);

    let middleStartLabel = this.add
      .text(40, 65, "", {
        fontFamily: "KoddiUDOnGothic-Bold",
        fontSize: "25pt",
        color: "#ffffff",
        align: "center",
        lineSpacing: -5,
        padding: { top: 0, left: 0, right: 0, bottom: 0 },
      })
      .setOrigin(0.5, 0.5);
    middleStartLabel.setName("middleStartLabel");
    middleStartLabel.setText("신\n라\n실");

    let middleStartIcon = this.add.image(95, 65, "ico_bow_2");
    middleStartIcon.setName("middleStartIcon");

    this.middleStartCon.add(middleStartCon);
    this.middleStartCon.add(middleStartLabel);
    this.middleStartCon.add(middleStartIcon);

    this.bottomStartCon = this.add.container(185, 1720).setDepth(1);

    let bottomStartBoxG = this.add.graphics();
    bottomStartBoxG.setDepth(20);
    bottomStartBoxG.fillStyle(0x73748c, 1); // White fill
    bottomStartBoxG.fillRoundedRect(0, 0, 130, 130, 10);
    bottomStartBoxG.generateTexture("bottomStartBox");
    bottomStartBoxG.destroy();
    let bottomStartBox = this.add.image(0, 0, "bottomStartBox").setOrigin(0);

    let bottomStartLabel = this.add
      .text(65, 40, "", {
        fontFamily: "KoddiUDOnGothic-Bold",
        fontSize: "25pt",
        color: "#ffffff",
        align: "center",
        lineSpacing: 12,
        padding: { top: 0, left: 0, right: 0, bottom: 0 },
      })
      .setOrigin(0.5, 0.5);
    bottomStartLabel.setText("조선실");
    bottomStartLabel.setName("bottomStartLabel");

    let bottomStartIcon = this.add.image(65, 90, "ico_bow_1").setAngle(180);
    bottomStartIcon.setName("bottomStartIcon");

    this.bottomStartCon.add(bottomStartBox);
    this.bottomStartCon.add(bottomStartLabel);
    this.bottomStartCon.add(bottomStartIcon);
  }

  drawEventPoint() {
    for (let point in this.eventPoints) {
      let pointMeta = this.eventPoints[point];
      pointMeta.fillColor = this.pointStyle.fillColor;
      pointMeta.strokeColor = this.pointStyle.strokeColor;
      pointMeta.width = this.pointStyle.width; // 모바일은 55
      pointMeta.height = this.pointStyle.height; // 모바일은 55
      pointMeta.strokeAlpha = this.pointStyle.strokeAlpha;
      pointMeta.lineWidth = this.pointStyle.lineWidth;
      this.eventPointEllipse[point] = this.createEllipse(pointMeta);
      this.eventPointEllipse[point].setDepth(1);
    }
  }

  createEllipse(props: any) {
    if (this.isDev) {
      // 배포할때 주석 제거
      // let pointLabel = this.add
      //   .text(props.pos[0], props.pos[1], props.assetKey + "\n" + props.title, {
      //     fontFamily: "KoddiUDOnGothic-Bold",
      //     fontSize: "15pt",
      //     color: "#000000",
      //     align: "center",
      //     lineSpacing: 12,
      //     padding: { top: 0, left: 0, right: 0, bottom: 0 },
      //   })
      //   .setOrigin(0.5, 0.5);
      // pointLabel.setDepth(10);
    }

    let ellipse = this.add.ellipse(
      props.pos[0],
      props.pos[1],
      props.width,
      props.height
    );
    ellipse.isFilled = true;
    ellipse.fillColor = props.fillColor;
    if (props.strokeColor !== undefined) {
      ellipse.isStroked = true;
      ellipse.strokeColor = props.strokeColor;
      ellipse.strokeAlpha = props.strokeAlpha;
      ellipse.lineWidth = props.lineWidth || 1;
    }
    ellipse.setInteractive(
      new Phaser.Geom.Circle(
        props.width / 2,
        props.height / 2,
        props.width / 2
      ),
      Phaser.Geom.Circle.Contains
    );
    return ellipse;
  }

  drawLine() {
    let _this = this;

    function createLine(graphics: any, start: any, end: any) {
      graphics.lineStyle(
        _this.lineStyle.lineWidth,
        _this.lineStyle.lineColor,
        1
      );
      graphics.beginPath();
      graphics.moveTo(start[0], start[1]);
      graphics.lineTo(end[0], end[1]);
      graphics.strokePath();
    }

    function createQuadraticBezier(start: any, control: any, end: any) {
      const startPoint = new Phaser.Math.Vector2(start[0], start[1]);
      const controlPoint1 = new Phaser.Math.Vector2(control[0], control[1]);
      const endPoint = new Phaser.Math.Vector2(end[0], end[1]);
      return new Phaser.Curves.QuadraticBezier(
        startPoint,
        controlPoint1,
        endPoint
      );
    }

    function drawCurve(graphics: any, curve: any, segments: any) {
      graphics.lineStyle(
        _this.lineStyle.lineWidth,
        _this.lineStyle.lineColor,
        1
      );
      curve.draw(graphics, segments);
    }

    _this.createLine = createLine;
    _this.createQuadraticBezier = createQuadraticBezier;
    _this.drawCurve = drawCurve;

    const graphics = this.add.graphics();

    // Draw lines
    for (let key in this.lines) {
      let lineArray = this.lines[key];
      lineArray.forEach((line: any) => {
        // 	line.control[1] = line.control[1];
        if (line.type === "line") {
          createLine(graphics, line.start, line.end);
        } else if (line.type === "curve") {
          let curve = createQuadraticBezier(line.start, line.control, line.end);
          drawCurve(graphics, curve, 64);
        }
      });
    }
    graphics.generateTexture("drawLineTexture"); // 텍스처 bake
    this.add.image(0, 0, "drawLineTexture").setOrigin(0, 0);
    graphics.destroy(); // Graphics 객체 제거
  }

  movePointToPoint() {
    let _this = this;
    function animateLine(
      graphics: any,
      start: any,
      end: any,
      duration: any,
      callback: any
    ) {
      let indicatorImage = _this.playerContainer;
      return _this.tweens.addCounter({
        from: 0,
        to: 1,
        duration: _this.user.isContinuLining ? 0 : duration,
        onUpdate: function (tween) {
          let t = tween.getValue();
          graphics.lineStyle(7, _this.themeColor.activeColor, 1);
          graphics.beginPath();
          graphics.moveTo(start[0], start[1]);
          graphics.lineTo(
            start[0] + (end[0] - start[0]) * t,
            start[1] + (end[1] - start[1]) * t
          );
          graphics.strokePath();

          // 활성화 지점에 이미지 표시
          let indicatorX = start[0] + (end[0] - start[0]) * t;
          let indicatorY = start[1] + (end[1] - start[1]) * t;
          if (!_this.user.isContinuLining) {
            indicatorImage.setPosition(indicatorX, indicatorY);
          }

          //_this.cameras.main.pan(indicatorX, indicatorY, 1000, 'Linear');
        },
        onComplete: function () {
          if (!_this.user.isContinuLining) {
            indicatorImage.setPosition(end[0], end[1]);
          }

          if (callback) callback();
        },
        callbackScope: _this,
      });
    }

    function animateCurve(
      graphics: any,
      curve: any,
      segments: any,
      duration: any,
      callback: any
    ) {
      let indicatorImage = _this.playerContainer;
      return _this.tweens.addCounter({
        from: 0,
        to: 1,
        duration: _this.user.isContinuLining ? 0 : duration,
        onUpdate: function (tween) {
          let t = tween.getValue();
          graphics.lineStyle(7, _this.themeColor.activeColor, 1);
          graphics.beginPath();
          let previousPoint = curve.getPoint(0);
          graphics.moveTo(previousPoint.x, previousPoint.y);

          for (let i = 1; i <= segments * t; i++) {
            let point = curve.getPoint(i / segments);
            graphics.lineTo(point.x, point.y);
          }

          graphics.strokePath();

          // 활성화 지점에 이미지 표시
          let indicatorPoint = curve.getPoint(t);
          if (!_this.user.isContinuLining) {
            indicatorImage.setPosition(indicatorPoint.x, indicatorPoint.y);
          }
        },
        onComplete: function () {
          let endPoint = curve.p2;
          if (!_this.user.isContinuLining) {
            indicatorImage.setPosition(endPoint.x, endPoint.y);
          }
          if (callback) callback();
        },
        callbackScope: _this,
      });
    }

    function reverseLine(line: any) {
      return {
        type: "line",
        start: line.end,
        end: line.start,
        startPoint: line.targetPoint,
        targetPoint: line.startPoint,
      };
    }

    function reverseCurve(curve: any) {
      return {
        type: "curve",
        start: curve.end,
        control: curve.control,
        end: curve.start,
        startPoint: curve.targetPoint,
        targetPoint: curve.startPoint,
      };
    }

    function reverseConnectedLines(lines: any) {
      if (!lines) return [];
      return lines
        .map((line: any) => {
          if (line.type === "line") {
            return reverseLine(line);
          } else if (line.type === "curve") {
            return reverseCurve(line);
          }
        })
        .reverse();
    }

    function findShortestPath(start: any, end: any) {
      let queue = [[start]];
      let visited = new Set();

      while (queue.length > 0) {
        let path = queue.shift();
        let point = path ? path[path.length - 1] : [];

        if (point === end) {
          return path;
        }

        if (!visited.has(point)) {
          visited.add(point);
          let neighbors = Object.keys(_this.lines).filter(
            (key) =>
              key.startsWith(point + "_line_") || key.endsWith("_line_" + point)
          );
          for (let neighbor of neighbors) {
            let nextPoint = neighbor.split("_line_").find((p) => p !== point);
            let newPath = path ? path.slice() : [];
            newPath.push(nextPoint);
            queue.push(newPath);
          }
        }
      }
      return null;
    }

    function drawConnectedLines(lines: any, graphics: any, index = 0) {
      if (
        !_this.user.isContinuLining &&
        _this.activePointEl &&
        index >= lines.length
      ) {
        _this.activePointEl.fillColor = _this.themeColor.activeColor;
        // _this.currenttPointObj.fillColor = _this.themeColor.activeColor;
        // _this.playerContainer.setAngle(_this.currentEventPoint.playerAngle);     이미지 교체해서 각도 안틀어도될듯?

        //ellipse.fillColor = _this.themeColor.activeColor;
        _this.showPointCard();
        // if (_this.user.isDoneGuide) {
        // 	_this.showPointCard();
        // 	// _this.scene.launch('Interaction', { returnScene: 'MapPlay' });
        // 	// _this.scene.pause();
        // } else {
        //
        // 	// if(_this.guideFlow[_this.currentGuideIndex].action === 'show-point-card') {
        // 	// 	_this.showPointCard();
        // 	// 	_this.createGuideLayer(_this.currentGuideIndex+1);
        // 	// }
        // 	// else if (_this.guideFlow[_this.currentGuideIndex].action === 'point-click-inactive') {
        // 	// 	_this.scene.launch('Interaction', { returnScene: 'MapPlay' });
        // 	// 	_this.scene.pause();
        // 	// }
        // }
        graphics.generateTexture("moveLineTexture_" + _this.bakeIndex);
        _this.add
          .image(0, 0, "moveLineTexture_" + _this.bakeIndex)
          .setOrigin(0);
        graphics.destroy();
        _this.bakeIndex++;
        return;
      }
      let line = lines[index];
      let callback = function () {
        drawConnectedLines(lines, graphics, index + 1);
      };
      if (line && line.type === "line") {
        animateLine(
          graphics,
          line.start,
          line.end,
          _this.activeLineSpeed,
          callback
        );
      } else if (line && line.type === "curve") {
        let curve = _this.createQuadraticBezier(
          line.start,
          line.control,
          line.end
        );
        animateCurve(graphics, curve, 64, _this.activeLineSpeed - 50, callback);
      }
    }

    function onPointClicked(ellipse: any, isStart = false) {
      if (!_this.movingPlayer) {
        _this.movingPlayer = true;

        _this.currenttPointObj = ellipse;
        let pointKey = ellipse.name;

        //ellipse.strokeColor = _this.themeColor.activeColor;

        if (!_this.playerContainer.visible) {
          _this.playerContainer.setVisible(true);
        }
        if (
          !_this.user.isContinuLining &&
          _this.guideFlow[_this.currentGuideIndex].action === "click-point-end"
        ) {
          _this.hideGuideLayer();
          _this.user.isDoneGuide = true;
        }

        if (_this.currenttPoint === pointKey && !isStart) {
          _this.showPointCard();
        } else {
          const start_point =
            _this.user.kioskDirection === "top" ? "start_2" : "start_1";
          _this.currenttPoint = _this.currenttPoint
            ? _this.currenttPoint
            : start_point;
          if (_this.currenttPoint) {
            let connectedLinesDirect =
              _this.lines[_this.currenttPoint + "_line_" + pointKey];
            if (connectedLinesDirect) {
              let graphics = _this.add.graphics();
              drawConnectedLines(connectedLinesDirect, graphics);
              _this.currenttPoint = pointKey;
              _this.activePointEl = _this.eventPoints[pointKey];
              return;
            }

            let path = findShortestPath(_this.currenttPoint, pointKey);

            if (path) {
              let connectedLines: any[] = [];
              for (let i = 0; i < path.length - 1; i++) {
                let segment =
                  _this.lines[path[i] + "_line_" + path[i + 1]] ||
                  reverseConnectedLines(
                    _this.lines[path[i + 1] + "_line_" + path[i]]
                  );
                connectedLines = connectedLines.concat(segment);
              }
              if (connectedLines.length > 0) {
                let graphics = _this.add.graphics();
                _this.activePointEl = _this.eventPoints[pointKey];
                drawConnectedLines(connectedLines, graphics);
                _this.currenttPoint = pointKey;
              }
            }
          }
        }
      }
    }

    // Set the interactivity for event points
    for (let point in this.eventPoints) {
      let ellipse = this.eventPointEllipse[point];
      ellipse.name = point;
      ellipse.setInteractive({ cursor: "pointer" });
      ellipse.on("pointerdown", (pointer: any, event: any) => {
        if (!this.movingPlayer) {
          this.currentEventPoint = this.eventPoints[point];
          onPointClicked.call(this, ellipse);
        }
      });
    }

    this.setGuideFlowData();

    //시작시 유저 체험 처리
    if (this.user.isSignIn && this.user.discoverArtifact.length > 0) {
      let _this = this;

      let point = this.user.discoverArtifact[0];
      _this.currentEventPoint = _this.eventPoints[point];
      let ellipse = this.eventPointEllipse[point];
      _this.user.isContinuLining = true;

      onPointClicked(ellipse, true);

      for (let i = 0; i < this.user.discoverArtifact.length; i++) {
        let point = this.user.discoverArtifact[i];
        let ellipse = this.eventPointEllipse[point];
        ellipse.fillColor = _this.themeColor.activeColor;
        _this.currentEventPoint = _this.eventPoints[point];
        _this.user.isContinuLining = true;

        onPointClicked.call(this, ellipse, true);
        if (i === this.user.discoverArtifact.length - 1) {
          _this.time.delayedCall(300, () => {
            _this.playerContainer.setPosition(
              ellipse.x + _this.playerAddPos[0],
              ellipse.y + _this.playerAddPos[1]
            );
            // _this.playerContainer.setAngle(_this.currentEventPoint.playerAngle); //이미지 교체해서 필요없어보임
            _this.user.isContinuLining = false;
          });
        }
        _this.movingPlayer = false;
      }
    }
  }

  pointCardImage: any;
  addPointCardText: any;
  addPointCardTextCon: any;
  addPointCardText2: any;
  addPointCardTextCon2: any;
  showPointCard() {
    //객체가 한번 생성 되었다면 다음 실행시 객체의 데이터만 변경처리
    let _this = this;

    if (this.user.discoverArtifact.length > 0 && this.isGuiding) {
      this.guideTextBoxCon.setVisible(false);
      this.isGuiding = false;
    }

    this.playerContainer.setPosition(
      this.currentEventPoint.pos[0] + _this.playerAddPos[0],
      this.currentEventPoint.pos[1] + _this.playerAddPos[1]
    );
    this.artifact_title.setText(this.currentEventPoint.title);
    this.artifact_location.setText(this.currentEventPoint.location);
    this.point_card.setDepth(20);
    this.point_card.setVisible(true);
    // if(!this.user.isDoneGuide) {
    // 	this.btn_qr.setVisible(false);
    // }

    // this.point_card.getByName("pointCardImage")?.destroy();
    const imageUrl =
      "assets/mapplay/artifactBlack/" +
      this.user.ticketType +
      "/" +
      this.currenttPoint +
      ".png";
    const textureKey = "pointArtifactImage_black_" + this.currenttPoint;

    function addPointCardImage(textureKey) {
      if (!_this.pointCardImage) {
        _this.pointCardImage = _this.add.image(0, -175, textureKey);
        _this.pointCardImage.setInteractive();
        _this.point_card.add(_this.pointCardImage);
      }
      _this.pointCardImage.setTexture(textureKey);
      _this.pointCardImage.setVisible(true);
      _this.pointCardImage.setScale(
        _this.currentEventPoint.blackImgScale
          ? _this.currentEventPoint.blackImgScale
          : 0.25
      ); // 이미지 크기를 50%로 축소
    }

    // 새 이미지를 로드하고 추가
    if (!this.textures.exists(textureKey)) {
      if (_this.pointCardImage) _this.pointCardImage.setVisible(false);
      this.load.image(textureKey, imageUrl);
      this.load.once(
        "complete",
        () => {
          addPointCardImage(textureKey);
        },
        this
      );
      this.load.start();
    } else {
      addPointCardImage(textureKey);
    }

    // this.load.image(textureKey, imageUrl);
    //
    // let pointCardImage = this.add.image(0, 0 / 2, textureKey);
    // pointCardImage.setScale(1); // 이미지 크기를 50%로 축소
    // pointCardImage.setInteractive();
    // this.point_card.add(pointCardImage);

    //test - 삭제예정 또는 qr 버튼을 진행하기 또는 체험하기 버튼으로 수정
    if (this.isDev) {
      this.bg_point_card.setInteractive();
      this.bg_point_card.off("pointerdown").on("pointerdown", () => {
        if (this.isGuiding) {
          this.guideTextBoxCon.setVisible(false);
        }
        this.hidePointCard();
        this.showInteractiveTicket();

        // console.log(this.user.ticketType)
        // if(this.user.ticketType === 'diversity') {
        // 	this.scene.launch('ItrcDiversity', { returnScene: 'MapPlay', point: this.currenttPoint });
        // 	this.scene.pause();
        // }
        // else {
        // 	this.scene.launch('ItrcOpenness', { returnScene: 'MapPlay', point: this.currenttPoint });
        // 	this.scene.pause();
        // }
      });
    }

    this.btn_qr.setVisible(true);
    this.btn_qr.setInteractive();
    this.btn_qr.off("pointerdown").on("pointerdown", () => {
      if (this.isGuiding) {
        this.guideTextBoxCon.setVisible(false);
      }
      this.hidePointCard();
      this.scene.launch("QrCamera", {
        returnScene: "MapPlay",
        ticketType: this.user.ticketType,
        point: this.currenttPoint,
      });
      this.scene.pause();
    });

    // if(this.user.discoverArtifact.length > 0) {
    // 	this.isGuiding = false;
    // 	this.guideTextBoxCon.setVisible(false);
    // }

    if (!this.isGuiding) {
      if (!this.addPointCardTextCon) {
        this.addPointCardText = new RacRoundText(_this, {
          xPos: 0,
          yPos: 530,
          width: 920,
          height: 200,
          round: 25,
          bgColor: 0xffffff,
          color: "#000",
          bgAlpha: 1,
          fontSize: "28pt",
          text: this.currentEventPoint.addPointCardText,
          align: "center",
          depth: 20,
        });
        this.addPointCardTextCon = this.addPointCardText.getContainer();
        this.point_card.add(this.addPointCardTextCon);
      } else {
        this.addPointCardText.setRacText(
          this.currentEventPoint.addPointCardText
        );
        this.addPointCardTextCon.setVisible(true);
      }
    } else {
      this.currentGuideIndex = 1;
      this.nextGuideLayer(1, this.btn_qr);
    }

    if (this.currentEventPoint.addPointCardText2) {
      this.addPointCardText2.setRacText(
        this.currentEventPoint.addPointCardText2
      );
      this.addPointCardTextCon2.setVisible(true);
    }

    this.isGuiding
      ? this.showBlackLayer(19, "inactive")
      : this.showBlackLayer(19, "active");
    this.blackLayer.off("pointerdown").on("pointerdown", () => {
      if (this.isGuiding) return;
      this.hidePointCard();
      this.hideBlackLayer();
    });
    //this.currentEventPoint = null;
    this.movingPlayer = false;
  }

  hidePointCard() {
    this.point_card.setVisible(false);
    this.btn_qr.setVisible(false);
    if (this.addPointCardTextCon) {
      this.addPointCardTextCon.setVisible(false);
    }
    if (this.addPointCardTextCon2) {
      this.addPointCardTextCon2.setVisible(false);
    }

    this.bg_point_card.off("pointerdown");
    this.blackLayer.off("pointerdown");
    // if (this.artifactCardBg) this.artifactCardBg.setVisible(false);
    // if (this.artifact) this.artifact.setVisible(false);
    // if (this.artifactCardTitle) this.artifactCardTitle.setVisible(false);
    // if (this.artifactCardDescription) this.artifactCardDescription.setVisible(false);
    // if (this.qrButton) this.qrButton.setVisible(false);
  }

  isInitInteractiveTicket: boolean = false;
  isZoomed: boolean = false;
  previousDistance: any;
  allowZoom: boolean = false;
  // firstPos: any = {};
  showInteractiveTicket() {
    let _this = this;
    this.isZoomed = false;
    this.interactive_image.clearMask(); //유물확대 마스크 클리어
    //드래그 해제
    // this.input.setDraggable(this.interactive_image, false);
    this.interactive_image.off("drag");
    this.interactive_image.off("pointermove");
    this.interactive_image.off("pointerup");
    this.interactive_image.off("pointerdown");
    this.currentEventPoint.scale
      ? this.interactive_image.setScale(this.currentEventPoint.scale)
      : this.interactive_image.setScale(0.3);
    this.interactive_image.setX(540).setY(827);

    if (this.user.ticketType === "openness") {
      this.bg_popup.setTexture("bg_popup_opn");
      this.img_time.setTexture("img_opn_time");
      this.popup_tickettype.setText("개방성");
      this.btn_exp.setTexture("btn_opn_exp");
    }

    this.popup_at_name.setText(this.currentEventPoint.title);
    this.popup_location_text.setText(
      "No. " + this.currentEventPoint.artifactNumber
    );
    this.popup_exp_text.createFromHTML(
      `<p class="popup_exp_text">${this.currentEventPoint.text1}</p>`
    );
    if (this.currentEventPoint.isShowPopup === true)
      Util.addPopupListeners(".ex_popup_title", this);

    let roundBox = this.add.rexRoundRectangle(540, 820, 680, 600, 20);
    roundBox.setOrigin(0.5, 0.5);
    this.popup_interactive.add(roundBox);
    roundBox.lineWidth = 2;
    roundBox.strokeColor = 0xa4a4a4;

    const textureKey = "artifact_" + this.currenttPoint;
    this.interactive_image.setTexture(textureKey);

    if (!this.currentEventPoint.scale) this.currentEventPoint.scale = 0.3;
    if (this.currentEventPoint.scale) {
      this.interactive_image.setScale(this.currentEventPoint.scale);
    } else {
      this.interactive_image.setScale(0.3); // 이미지 크기를 50%로 축소
    }

    this.interactive_image.setInteractive();
    // this.popup_interactive.add(_this.interactive_image);

    this.blackLayer.on("pointerdown", (pointer) => {
      if (this.isGuiding) return; //튜토리얼중이면 못빠져나가게

      //각주팝업이 삐져나와있으면 닫기버튼 눌렀을때 블랙레이어도 없어지는 문제 수정
      if (this.isBlacklayerBlock) {
        this.isBlacklayerBlock = false;
        return;
      }
      // 팝업의 크기와 화면 중앙 기준으로 경계 계산
      const popupWidth = 800; // 팝업의 너비
      const popupHeight = 1720; // 팝업의 높이
      const popupCenterX = this.cameras.main.centerX; // 화면 중앙 X 좌표
      const popupCenterY = this.cameras.main.centerY; // 화면 중앙 Y 좌표

      // 팝업의 경계값
      const popupBounds = {
        left: popupCenterX - popupWidth / 2,
        right: popupCenterX + popupWidth / 2,
        top: popupCenterY - popupHeight / 2,
        bottom: popupCenterY + popupHeight / 2,
      };

      // 클릭이 팝업 내부인지 확인
      if (
        pointer.worldX > popupBounds.left &&
        pointer.worldX < popupBounds.right &&
        pointer.worldY > popupBounds.top &&
        pointer.worldY < popupBounds.bottom
      ) {
        return; // 팝업 내부 클릭은 무시
      }

      // 팝업 외부 클릭 시 닫기
      this.hideBlackLayer();
    });

    if (!this.isInitInteractiveTicket) {
      this.btn_exp.setInteractive().on("pointerdown", () => {
        this.user.currentPoint = this.currenttPoint;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.hideBlackLayer();
        if (this.user.ticketType === "diversity") {
          if (!this.scene.get("ItrcDiversity"))
            this.scene.add("ItrcDiversity", ItrcDiversity);
          this.scene.launch("ItrcDiversity", {
            returnScene: "MapPlay",
            point: this.currenttPoint,
          });
          this.scene.pause();
        } else {
          if (!this.scene.get("ItrcOpenness"))
            this.scene.add("ItrcOpenness", ItrcOpenness);
          this.scene.launch("ItrcOpenness", {
            returnScene: "MapPlay",
            point: this.currenttPoint,
          });
          this.scene.pause();
        }
        document.querySelector(".layer_popup")?.remove();
      });
    }

    this.popup_interactive.setVisible(true);
    this.tweens.add({
      targets: this.popup_interactive,
      y: { from: -2000, to: 0 },
      duration: 1000,
      ease: "Power2",
      repeat: 0,
      yoyo: false,
    });
    this.popup_interactive.setDepth(30);

    let zoomBox = this.add.rexRoundRectangle(810, 590, 100, 100, 20);
    zoomBox.setOrigin(0.5, 0.5);
    this.popup_interactive.add(zoomBox);

    const imageZoom = this.add.image(810, 590, "img_zoom");
    imageZoom.setOrigin(0.5, 0.5);
    imageZoom.setDisplaySize(90, 90);
    this.popup_interactive.add(imageZoom);

    if (!this.isInitInteractiveTicket) {
      zoomBox.setInteractive().on("pointerdown", () => {
        if (this.isZoomed) {
          this.currentEventPoint.scale
            ? this.interactive_image.setScale(this.currentEventPoint.scale)
            : this.interactive_image.setScale(0.3);
          this.isZoomed = false;
          this.interactive_image.clearMask();

          //드래그 해제
          this.input.setDraggable(this.interactive_image, false);
          this.interactive_image.off("drag");
          this.interactive_image.off("pointermove");
          this.interactive_image.off("pointerup");
          this.interactive_image.off("pointerdown");
          this.interactive_image.setX(540).setY(827);
        } else {
          this.interactive_image.setMask(this.geoMask);
          this.interactive_image.setScale(1);
          this.isZoomed = true;

          // 드래그 구현
          this.input.setDraggable(this.interactive_image);
          this.interactive_image.on("drag", (pointer, dragX, dragY) => {
            if (
              pointer.x < 540 - 340 ||
              pointer.x > 540 + 340 ||
              pointer.y < 820 - 300 ||
              pointer.y > 820 + 300
            ) {
              return;
            }

            if (this.input.pointer2.isDown) {
              return;
            }
            // 이미지를 드래그할 때 X와 Y 위치를 제한하여 움직임을 제한

            //이미지 자체에 여백이 많이 있어서 움직임 제한이 제대로 안됨 이미지를 수정하든 min, max를 하드코딩하든 해야함
            this.interactive_image.x = Phaser.Math.Clamp(
              dragX,
              540 - (this.interactive_image.displayWidth - roundBox.width) / 2,
              540 + (this.interactive_image.displayWidth - roundBox.width) / 2
            );
            this.interactive_image.y = Phaser.Math.Clamp(
              dragY,
              820 -
                (this.interactive_image.displayHeight - roundBox.height) / 2,
              820 + (this.interactive_image.displayHeight - roundBox.height) / 2
            );

            if (this.interactive_image.displayWidth < roundBox.width)
              this.interactive_image.x = 540;
            if (this.interactive_image.displayHeight < roundBox.height)
              this.interactive_image.y = 827;
          });

          this.previousDistance = null;
          this.interactive_image.on("pointermove", (pointer) => {
            // pointermove 이벤트 리스너 설정
            if (
              this.input.pointer1.isDown &&
              this.input.pointer2.isDown &&
              this.allowZoom
            ) {
              // 두 포인터(손가락) 사이의 거리 계산
              const dist = Phaser.Math.Distance.Between(
                this.input.pointer1.x,
                this.input.pointer1.y,
                this.input.pointer2.x,
                this.input.pointer2.y
              );

              // 손가락 사이의 중심 계산
              let centerX = (this.input.pointer1.x + this.input.pointer2.x) / 2;
              let centerY = (this.input.pointer1.y + this.input.pointer2.y) / 2;

              if (this.previousDistance !== null) {
                // 이전 거리와 현재 거리의 차이를 계산하여 이미지 스케일 조정
                let scaleFactor = dist / this.previousDistance;
                let newScale = this.interactive_image.scale * scaleFactor;

                //스케일 제한 적용
                if (newScale > 3) {
                  newScale = 3;
                }
                if (newScale < this.currentEventPoint.scale) {
                  newScale = this.currentEventPoint.scale;
                }

                //중심점을 고정된(덜 움직인) 손가락으로 변경 test
                // centerX = Phaser.Math.Distance.Between(
                //   this.firstPos.pointer1_x,
                //   this.firstPos.pointer1_y,
                //   this.input.pointer1.x,
                //   this.input.pointer1.y
                // ) < Phaser.Math.Distance.Between(
                //   this.firstPos.pointer2_x,
                //   this.firstPos.pointer2_y,
                //   this.input.pointer2.x,
                //   this.input.pointer2.y
                // ) ? this.firstPos.pointer1_x : this.firstPos.pointer2_x;

                // centerY = Phaser.Math.Distance.Between(
                //   this.firstPos.pointer1_x,
                //   this.firstPos.pointer1_y,
                //   this.input.pointer1.x,
                //   this.input.pointer1.y
                // ) < Phaser.Math.Distance.Between(
                //   this.firstPos.pointer2_x,
                //   this.firstPos.pointer2_y,
                //   this.input.pointer2.x,
                //   this.input.pointer2.y
                // ) ? this.firstPos.pointer1_y : this.firstPos.pointer2_y;

                // 월드 좌표 기준으로 중심 계산
                const worldPoint = this.cameras.main.getWorldPoint(
                  centerX,
                  centerY
                );

                // 이미지의 이동량 계산 (보정 값)
                const dx =
                  (worldPoint.x - this.interactive_image.x) *
                  (newScale / this.interactive_image.scale - 1);
                const dy =
                  (worldPoint.y - this.interactive_image.y) *
                  (newScale / this.interactive_image.scale - 1);

                this.interactive_image.setScale(newScale);
                // this.img_point_3_8.x -= dx;
                this.interactive_image.x = Phaser.Math.Clamp(
                  this.interactive_image.x - dx,
                  540 - (this.interactive_image.displayWidth * 0.9 - 680) / 2,
                  540 + (this.interactive_image.displayWidth * 0.9 - 680) / 2
                );
                // this.interactive_image.y -= dy;
                this.interactive_image.y = Phaser.Math.Clamp(
                  this.interactive_image.y - dy,
                  820 - (this.interactive_image.displayHeight * 0.9 - 600) / 2,
                  820 + (this.interactive_image.displayHeight * 0.9 - 600) / 2
                );

                if (this.interactive_image.displayWidth <= 680)
                  this.interactive_image.x = 540;
                if (this.interactive_image.displayHeight <= 600)
                  this.interactive_image.y = 820;
              }

              // 현재 거리를 이전 거리로 저장
              this.previousDistance = dist;
            }
          });

          // pointerup 이벤트 리스너 설정
          this.interactive_image.on("pointerup", () => {
            // 손가락을 뗄 때 거리를 초기화
            this.previousDistance = null;
            this.allowZoom = false;
          });

          // pointerdown 이벤트 리스너 설정
          this.interactive_image.on(
            "pointerdown",
            (pointer, localX, localY, event) => {
              //줌인줌아웃 손가락 위치 유물이랑 너무 떨어지면 안되게
              if (
                (this.input.pointer1.x > 540 - 340 - 100 &&
                  this.input.pointer1.x < 540 + 340 + 100 &&
                  this.input.pointer1.y > 820 - 300 - 200 &&
                  this.input.pointer1.y < 820 + 300 + 200) ||
                (this.input.pointer2.x > 540 - 340 - 100 &&
                  this.input.pointer2.x < 540 + 340 + 100 &&
                  this.input.pointer2.y > 820 - 300 - 200 &&
                  this.input.pointer2.y < 820 + 300 + 200)
              ) {
                this.allowZoom = true;
              }
              // 손가락을 댈 때 초기 거리 설정
              if (
                this.input.pointer1.isDown &&
                this.input.pointer2.isDown &&
                this.allowZoom
              ) {
                this.previousDistance = Phaser.Math.Distance.Between(
                  this.input.pointer1.x,
                  this.input.pointer1.y,
                  this.input.pointer2.x,
                  this.input.pointer2.y
                );

                // this.firstPos = {
                //   pointer1_x: this.input.pointer1.x,
                //   pointer1_y: this.input.pointer1.y,
                //   pointer2_x: this.input.pointer1.x,
                //   pointer2_y: this.input.pointer1.y,
                // }
              } else {
                //마스크 바깥영역 터치하면 블랙레이어 이벤트 발동
                //540 : mask.x, 820: mask.y, 340: mask.width/2, 300: mask.height/2
                if (
                  this.input.pointer1.x < 540 - 340 ||
                  this.input.pointer1.x > 540 + 340 ||
                  this.input.pointer1.y < 820 - 300 ||
                  this.input.pointer1.y > 820 + 300
                ) {
                  this.blackLayer.emit("pointerdown", pointer);
                }
              }
            }
          );
        }
      });
    }

    this.isInitInteractiveTicket = true;
  }

  hideInteractiveTicket() {
    this.popup_interactive.setVisible(false);
  }

  guideTextBox: any;
  guideTextBoxCon: any;
  isGuiding: any;
  createGuideLayer(showGuideIndex: number = 0): void {
    this.isGuiding = true;
    this.guideTextBox = new RacRoundText(this, {
      xPos: 545,
      yPos: 1740,
      width: 920,
      height: 200,
      round: 25,
      bgColor: 0xffffff,
      color: "#000000",
      bgAlpha: 1,
      fontSize: "28pt",
      text: this.guideFlow[this.currentGuideIndex].text,
      align: "center",
      depth: 30,
    });
    this.guideTextBoxCon = this.guideTextBox.getContainer();
    this.currentGuideIndex++;
  }

  // preCtrlObl_1 = null;
  nextGuideLayer(index, ctrlObl_1 = null): void {
    if (this.guideTextBoxCon.getByName("btnNext_1"))
      this.guideTextBoxCon.getByName("btnNext_1").destroy();
    if (this.guideTextBoxCon.getByName("btnNext_2"))
      this.guideTextBoxCon.getByName("btnNext_2").destroy();

    switch (index) {
      case 1:
        this.guideTextBox.setRacText(this.guideFlow[index].text);
        ctrlObl_1.setVisible(false);
        let btnNext_1 = this.add
          .image(460, 0, "btn_tuto_next")
          .setInteractive({ cursor: "pointer" });
        btnNext_1.setName("btnNext_1");
        this.guideTextBoxCon.add(btnNext_1);
        btnNext_1.on("pointerdown", () => {
          this.currentGuideIndex = 2;
          this.nextGuideLayer(2, ctrlObl_1);
        });
        break;
      case 2:
        this.guideTextBox.setRacText(this.currentEventPoint.addPointCardText);
        let btnNext_2 = this.add
          .image(460, 0, "btn_tuto_next")
          .setInteractive({ cursor: "pointer" });
        btnNext_2.setName("btnNext_2");
        this.guideTextBoxCon.add(btnNext_2);
        btnNext_2.on("pointerdown", () => {
          this.currentGuideIndex = 3;
          this.nextGuideLayer(3, ctrlObl_1);
        });
        break;
      case 3:
        this.guideTextBox.setRacText(this.guideFlow[index].text);
        ctrlObl_1.setVisible(true);
        break;

      case 4:
        this.guideTextBoxCon.setVisible(true);
        this.guideTextBox.setRacText(this.guideFlow[index].text);

        const icon_arrow =
          this.user.ticketType === "diversity"
            ? "icon_arrow_div"
            : "icon_arrow_open";

        const iconArrows = this.add.image(212, 200, icon_arrow);
        iconArrows.setScale(0.5);
        iconArrows.y = 200;
        iconArrows.setVisible(false);

        iconArrows.setVisible(true);
        this.tweens.add({
          targets: iconArrows,
          y: { from: 200, to: 210 },
          duration: 1000,
          ease: "Sine.easeInOut",
          yoyo: true,
          repeat: 2,
          onComplete: () => {
            this.tweens.add({
              targets: iconArrows,
              alpha: { from: 1, to: 0 },
              duration: 500,
              ease: "Linear",
              onComplete: () => {
                iconArrows.setVisible(false);
              },
            });
          },
        });
        break;

      case 5:
        this.guideTextBoxCon.setY(350);
        this.guideTextBox.setRacText(this.guideFlow[index].text);
        break;

      case 6:
        this.guideTextBoxCon.setY(1750);
        this.guideTextBox.setRacText(this.guideFlow[index].text);
        this.isGuiding = false;
        this.user.isDoneGuide = true;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.time.delayedCall(500, () => {
          this.input.on("pointerdown", this.closePopup, this);
        });
        this.time.delayedCall(3000, () => {
          this.playClosePopupAni(this.guideTextBoxCon);
        });
        break;
      default:
        break;
    }
  }

  hideGuideLayer(): void {
    if (this.guideBackground) {
      this.guideBackground.setVisible(false);
    }
    if (this.guideText) {
      this.guideText.setVisible(false);
    }
    if (this.nextGuideButton) {
      this.nextGuideButton.setVisible(false);
    }
  }
  dscCard: any;
  isDscCardInit: any;
  isLastDscCardInit: any;
  dscCardBox: any;
  dscTitle: any;
  dscName: any;
  dscLocation: any;
  dscBtnContinue: any;
  dscBtnQuit: any;
  discoverCardImage: any;
  cngCard: any;
  cngCardBox: any;
  cngImage_1: any;
  cngImage_myChar: any;
  cngTitle: any;
  cngCon: any;
  cngBtnOk: any;
  cngBtnOkLabel: any;
  artifactDiscoveryCard() {
    let _this = this;
    let cardWidth = 950;
    let cardHeight = 1250;

    _this.currenttPointObj.fillColor = _this.themeColor.activeColor;
    if (!this.user.discoverArtifact) {
      this.user.discoverArtifact = [];
    }

    if (this.user.discoverArtifact.indexOf(this.currenttPoint) === -1) {
      this.user.discoverArtifact.push(this.currenttPoint);
      this.addArtifactList(
        this.currenttPoint,
        this.user.discoverArtifact.length
      );
    }
    localStorage.setItem("user", JSON.stringify(this.user));
    //todo sns로 로그인 되어 있으면 서버에 저장

    const textureKey = "artifact_ai_" + this.currenttPoint;
    if (!this.isDscCardInit) {
      let xPos = ((this.sys.game.config.width as number) - cardWidth) / 2;
      let yPos = ((this.sys.game.config.height as number) - cardHeight) / 2;

      this.dscCard = this.add.container(xPos, yPos);
      this.dscCard.setDepth(20);

      this.dscCardBox = this.add.rexRoundRectangle(
        0,
        0,
        cardWidth,
        cardHeight,
        50,
        0xffffff
      );
      this.dscCardBox.setOrigin(0, 0);
      this.dscCardBox.postFX!.addShadow(-0.1, 1.3, 0.1, 1, 0, 40, 0.5);
      this.dscCard.add(this.dscCardBox);

      let dscImageBox = this.add
        .rectangle(0, 180, cardWidth, 550, 0xeeeeee)
        .setOrigin(0, 0);
      this.dscCard.add(dscImageBox);

      this.discoverCardImage = _this.add
        .image(cardWidth / 2, 180 + 550 / 2, textureKey)
        .setOrigin(0.5, 0.5);

      if (this.currentEventPoint.artifactNumber === "본관 4250") {
        this.discoverCardImage.setScale(0.38);
      } else if (this.currentEventPoint.artifactNumber === "신수 5854") {
        this.discoverCardImage.setScale(0.3);
      } else if (this.currentEventPoint.artifactNumber === "신수 1755") {
        this.discoverCardImage.setScale(0.22);
      } else if (this.currentEventPoint.artifactNumber === "구 6241") {
        this.discoverCardImage.setScale(0.225);
      } else {
        this.discoverCardImage.setScale(0.25);
      }
      this.discoverCardImage.setInteractive();
      this.dscCard.add(this.discoverCardImage);

      this.dscTitle = this.add
        .text(cardWidth / 2, 90, "새로운 전시품을 발견했습니다!", {
          fontFamily: "KoddiUDOnGothic-Bold",
          fontSize: "35pt",
          color: "#000000",
          align: "center",
          lineSpacing: 0,
        })
        .setOrigin(0.5, 0.5);
      this.dscCard.add(this.dscTitle);

      const bg_discovery_effect = this.add
        .image(500, 378, "bg_discovery_effect")
        .setOrigin(0.5, 0.5);
      this.dscCard.add(bg_discovery_effect);

      this.dscName = this.add
        .text(cardWidth / 2, 800, this.currentEventPoint.title, {
          fontFamily: "KoddiUDOnGothic-Bold",
          fontSize: "35pt",
          color: "#000000",
          align: "center",
          lineSpacing: 0,
        })
        .setOrigin(0.5, 0.5);
      this.dscCard.add(this.dscName);

      this.dscLocation = this.add
        .text(
          cardWidth / 2,
          900,
          "소장품 번호 : " + this.currentEventPoint.artifactNumber,
          {
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "20pt",
            color: "#333333",
            align: "center",
            lineSpacing: 0,
          }
        )
        .setOrigin(0.5, 0.5);
      this.dscCard.add(this.dscLocation);

      //기존 코드 (마지막 유물 아닐때)
      // this.dscImage = this.add.image(cardWidth/2, 200, 'dsc_image');
      let buttonYPos = 1115;
      let buttonSpacing = 160;
      let buttonLabelStyle = {
        fontFamily: "KoddiUDOnGothic-Regular",
        fontSize: "30pt",
        color: "#000000",
        align: "center",
        lineSpacing: 3,
      };
      let buttonLabelStyle2 = { ...buttonLabelStyle, color: "#ffffff" };

      this.dscBtnQuit = this.add
        .image(cardWidth / 2 - buttonSpacing, buttonYPos, "btn_box_1")
        .setInteractive();
      let dscBtnQuitLabel = this.add
        .text(
          cardWidth / 2 - buttonSpacing,
          buttonYPos,
          "여행\n종료하기",
          buttonLabelStyle
        )
        .setOrigin(0.5, 0.5);
      this.dscCard.add(this.dscBtnQuit);
      this.dscCard.add(dscBtnQuitLabel);

      this.dscBtnContinue = this.add
        .image(cardWidth / 2 + buttonSpacing, buttonYPos, "btn_box_2")
        .setInteractive();
      let dscBtnContinueLabel = this.add
        .text(
          cardWidth / 2 + buttonSpacing,
          buttonYPos,
          "계속\n여행하기",
          buttonLabelStyle2
        )
        .setOrigin(0.5, 0.5);
      this.dscCard.add(this.dscBtnContinue);
      this.dscCard.add(dscBtnContinueLabel);

      this.dscBtnContinue.on("pointerdown", function () {
        hideDscCard();
      });

      this.dscBtnQuit.on("pointerdown", function () {
        hideDscCard();
        _this.showConfirmPopup();
      });

      this.isDscCardInit = true;
    } else {
      this.dscCard.setVisible(true);

      this.discoverCardImage.setScale(0.25);
      this.discoverCardImage.setPosition(cardWidth / 2, 180 + 550 / 2);
      this.discoverCardImage.setTexture(textureKey);
      this.dscName.setText(this.currentEventPoint.title);
      this.dscLocation.setText(
        "소장품 번호 : " + this.currentEventPoint.artifactNumber
      );
    }

    //마지막 유물 발견시 로직
    if (this.user.discoverArtifact.length > 7 && !this.isLastDscCardInit) {
      this.dscTitle.setText("마지막 전시품을 발견했습니다!");
      let buttonYPos = 1115;
      let buttonLabelStyle = {
        fontFamily: "KoddiUDOnGothic-Regular",
        fontSize: "30pt",
        color: "#ffffff",
        align: "center",
        lineSpacing: 3,
      };

      this.dscBtnContinue = this.add
        .rexRoundRectangle(cardWidth / 2, buttonYPos, 900, 160, 20, 0x333333)
        .setInteractive();
      let dscBtnContinueLabel = this.add
        .text(cardWidth / 2, buttonYPos, "확인", buttonLabelStyle)
        .setOrigin(0.5, 0.5);
      this.dscCard.add(this.dscBtnContinue);
      this.dscCard.add(dscBtnContinueLabel);

      //유물체험완료후 축하 카드
      let cngCardWidth = 834;
      let cngCardHeight = 1185;
      let xPos_cngCard =
        ((this.sys.game.config.width as number) - cngCardWidth) / 2;
      let yPos_cngCard =
        ((this.sys.game.config.height as number) - cngCardHeight) / 2;
      this.cngCard = this.add.container(xPos_cngCard, yPos_cngCard);
      this.cngCard.setDepth(20);

      const cngCardThemeColor =
        this.user.ticketType == "diversity" ? 0x598dff : 0xb3cd41;
      this.cngCardBox = this.add
        .rexRoundRectangle(0, 0, cngCardWidth, cngCardHeight, 50, 0xffffff)
        .setStrokeStyle(10, cngCardThemeColor)
        .setOrigin(0);
      this.cngCard.add(this.cngCardBox);

      this.cngImage_1 = _this.add
        .image(cngCardWidth / 2, 245, "img_cng")
        .setOrigin(0.5, 0.5);
      this.cngCard.add(this.cngImage_1);

      this.cngImage_myChar = _this.add.image(
        cngCardWidth / 2,
        378,
        this.my_character.texture
      );
      this.cngImage_myChar.setScale(0.47).setTexture(this.user.character);
      this.cngCard.add(this.cngImage_myChar);

      const cngTitleFontSize = 62;
      this.cngTitle = _this.add
        .text(cngCardWidth / 2, 608, "수고했어요!", {
          fontFamily: "KoddiUDOnGothic-Bold",
          fontSize: cngTitleFontSize,
          color: "#000000",
          align: "center",
          lineSpacing: cngTitleFontSize * 0.3,
        })
        .setLetterSpacing(cngTitleFontSize * 0.02)
        .setOrigin(0.5, 0);
      this.cngCard.add(this.cngTitle);

      const cngConFontSize = 48;
      this.cngCon = _this.add
        .text(cngCardWidth / 2, 776, "우리 마지막으로\n엽서를 만들어볼까요?", {
          fontFamily: "KoddiUDOnGothic-Regular",
          fontSize: cngConFontSize,
          color: "#000000",
          align: "center",
          lineSpacing: cngConFontSize * 0.1,
        })
        .setLetterSpacing(cngConFontSize * 0.02)
        .setOrigin(0.5, 0);
      this.cngCard.add(this.cngCon);

      this.cngBtnOk = this.add
        .rexRoundRectangle(
          cngCardWidth / 2,
          1373 - 395 + 103 / 2,
          402,
          103,
          51.5,
          cngCardThemeColor
        )
        .setInteractive();
      this.cngBtnOkLabel = this.add
        .text(cngCardWidth / 2, 1373 - 395 + 103 / 2, "확인", {
          fontFamily: "KoddiUDOnGothic-Regular",
          fontSize: cngConFontSize,
          color: "#FFFFFF",
          align: "center",
          lineSpacing: cngConFontSize * 0.3,
        })
        .setOrigin(0.5, 0.5)
        .setLetterSpacing(cngConFontSize * 0.02);
      this.cngCard.add(this.cngBtnOk);
      this.cngCard.add(this.cngBtnOkLabel);

      this.cngBtnOk.on("pointerdown", function () {
        _this.hideBlackLayer();
        _this.cngCard.setVisible(false);
        // _this.cngCard.destroy();
      });

      this.cngCard.setVisible(false);

      this.dscBtnContinue.on("pointerdown", function () {
        _this.dscCard.setVisible(false);
        _this.cngCard.setVisible(true);
        _this.btn_done_int_cont.setVisible(true);
      });

      this.cngBtnOk.on("pointerdown", function () {
        if (_this.myTween) {
          _this.myTween.stop();
          _this.myTween = null;
        }
        _this.myTween = _this.tweens.add({
          targets: _this.btn_done_int_cont,
          scale: { from: 1, to: 1.1 },
          duration: 500,
          yoyo: true,
          repeat: -1, // 무한 반복
        });
      });

      this.isLastDscCardInit = true;
    }

    if (_this.dscCard.getByName("clonDCI")) {
      _this.dscCard.getByName("clonDCI").destroy();
    }

    this.showBlackLayer(19, "inactive");
    function hideDscCard() {
      const textureKey = "artifact_ai_" + _this.currenttPoint;
      let clonDCI: any = _this.add
        .image(_this.discoverCardImage.x, _this.discoverCardImage.y, textureKey)
        .setOrigin(0.5, 0.5);
      clonDCI.setName("clonDCI");
      clonDCI.setVisible(true);
      clonDCI.setAlpha(1);
      clonDCI.setScale(_this.discoverCardImage.scale); // 이미지 크기를 50%로 축소
      clonDCI.setInteractive();
      _this.dscCard.add(clonDCI);

      _this.tweens.add({
        targets: clonDCI,
        alpha: { from: 1, to: 0.3 },
        scale: { from: clonDCI.scale * 0.5, to: 0.02 },
        x: { from: _this.discoverCardImage.x, to: 150 },
        y: { from: _this.discoverCardImage.y, to: -260 }, // 최종 위치에 맞춰 y값도 설정
        duration: 1000,
        ease: "Power2",
        onComplete: () => {
          _this.dscCard.setVisible(false);
          _this.hideBlackLayer();
          clonDCI.destroy();
          clonDCI = null;
          if (_this.isGuiding) {
            _this.currentGuideIndex = 4;
            _this.nextGuideLayer(4); //가이드 중이면 다음 가이드 띄움
          }
        },
      });
    }
  }

  isConfirmPopupInit: any;
  cpCon: any;
  cpBox: any;
  cpTitle: any;
  cpText: any;
  cpBtnCancel: any;
  cpBtnOk: any;
  showConfirmPopup() {
    let _this = this;
    let width = 700;
    let height = 700;
    if (!this.isConfirmPopupInit) {
      let xPos = ((this.sys.game.config.width as number) - width) / 2;
      let yPos = ((this.sys.game.config.height as number) - height) / 2;

      this.cpCon = this.add.container(xPos, yPos);
      this.cpCon.setDepth(20);

      this.cpBox = this.add.rexRoundRectangle(
        0,
        0,
        width,
        height,
        50,
        0xffffff
      );
      this.cpBox.setOrigin(0, 0);
      this.cpBox.postFX!.addShadow(-0.1, 1.3, 0.1, 1, 0, 40, 0.5);
      this.cpCon.add(this.cpBox);

      this.cpTitle = this.add
        .text(width / 2, 100, "안내", {
          fontFamily: "KoddiUDOnGothic-Bold",
          fontSize: "35pt",
          color: "#000000",
          align: "center",
          lineSpacing: 0,
        })
        .setOrigin(0.5, 0.5);
      this.cpCon.add(this.cpTitle);

      this.cpText = this.add
        .text(
          width / 2,
          310,
          "지금 메인화면으로 돌아가면\n" +
            "체험이 종료됩니다.\n" +
            "체험을 종료하고 결과물을\n" +
            "받아보시겠습니까?",
          {
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "27pt",
            color: "#000000",
            align: "center",
            lineSpacing: 10,
          }
        )
        .setOrigin(0.5, 0.5);
      this.cpCon.add(this.cpText);

      let buttonYPos = 570;
      let buttonLabelStyle = {
        fontFamily: "KoddiUDOnGothic-Regular",
        fontSize: "30pt",
        color: "#000000",
        align: "center",
        lineSpacing: 3,
      };
      let buttonLabelStyle2 = { ...buttonLabelStyle, color: "#ffffff" };

      this.cpBtnCancel = this.add
        .image(width / 2 - 160, buttonYPos, "btn_box_1")
        .setInteractive();
      let dscBtnCancelLabel = this.add
        .text(
          width / 2 - 160,
          buttonYPos,
          "체험으로\n돌아가기",
          buttonLabelStyle
        )
        .setOrigin(0.5, 0.5);
      this.cpCon.add(this.cpBtnCancel);
      this.cpCon.add(dscBtnCancelLabel);

      this.cpBtnOk = this.add
        .image(width / 2 + 160, buttonYPos, "btn_box_2")
        .setInteractive();
      let dscBtnOkLabel = this.add
        .text(
          width / 2 + 160,
          buttonYPos,
          "종료하고\n결과물 보기",
          buttonLabelStyle2
        )
        .setOrigin(0.5, 0.5);
      this.cpCon.add(this.cpBtnOk);
      this.cpCon.add(dscBtnOkLabel);

      let closeBtn = this.add.image(width - 55, 50, "btn_x").setInteractive();
      this.cpBtnCancel.on("closeBtn", function () {
        _this.cpCon.setVisible(false);
      });
      this.cpCon.add(closeBtn);

      closeBtn.on("pointerdown", function () {
        hideConfirmPopup();
      });

      this.cpBtnCancel.on("pointerdown", function () {
        hideConfirmPopup();
      });

      this.cpBtnOk.on("pointerdown", function () {
        hideConfirmPopup();
        _this.showMyCard();
        localStorage.setItem("kioskDirection", "default");
      });

      this.isConfirmPopupInit = true;
    } else {
      this.hideBlackLayer();
      this.cpCon.setVisible(true);
    }

    function hideConfirmPopup() {
      _this.hideBlackLayer();
      _this.cpCon.setVisible(false);
    }
  }

  onResume(scene, data: any) {
    // scene is this
    if (data && data.mode === "qrCheck") {
      if (
        data.ticketType === this.user.ticketType &&
        data.point === this.currenttPoint
      ) {
        if (data.type === "back") {
          this.showPointCard();
          if (this.isGuiding) {
            this.guideTextBoxCon.setVisible(true);
            this.currentGuideIndex = 3;
            this.nextGuideLayer(3, this.btn_qr);
          }
        } else {
          this.hidePointCard();
          this.showInteractiveTicket();
        }
      } else {
        alert("유효하지 않은 QR코드입니다.");
        this.showPointCard();
        if (this.isGuiding) {
          this.guideTextBoxCon.setVisible(true);
          this.currentGuideIndex = 3;
          this.nextGuideLayer(3, this.btn_qr);
        }
      }
    } else {
      if (this.myTween) {
        this.myTween.stop();
        this.myTween = null;
        this.btn_done_int_cont.setScale(1);
      }

      if (data && data.mode === "exitItrc") {
        //X버튼 눌러서 나옴
        this.isGuiding
          ? this.showBlackLayer(19, "inactive")
          : this.showBlackLayer(19, "active");
        this.showInteractiveTicket();
        return;
      }

      Util.fixedButtons("mapplay");
      this.hidePointCard();

      this.currenttPointObj.fillColor = this.themeColor.activeColor;
      this.artifactDiscoveryCard();
    }
  }

  setPointsData() {
    this.startPoints = {
      start_1: [254, 350 - 72],
      start_2: [254, 1750],
      start_3: [873, 1017], //todo 수정 필요
    };
    if (this.user.ticketType === "diversity") {
      //다양성
      this.eventPoints = {
        point_1: {
          pos: [580, 470],
          title: "인종의 시호를 올리며 지은 글",
          location: "고려 1실",
          artifactNumber: "본관 4250",
          assetKey: "point_1",
          guide:
            "죽음을 기록하는 방법은 다양해요.\n" +
            "과거에는 넓적한 돌에 기록하는 경우가 많았지만, 돌\n" +
            "막대기에 기록하는 방법도 있었어요. 인종의 죽음을\n" +
            "기록한 돌 막대기를 전시실에서 찾아보세요!",
          text1:
            `인종시책은 인종이 <a class="ex_popup_title" data-content="* 승하:<br />왕이 세상을 떠남을 높여서 부르는 말이에요.">승하</a>하고 ` +
            `인종의 <a class="ex_popup_title" data-content="* 시호: 恭孝大王(공효대왕)<br />사망한 왕이나 재상, 뛰어난 선비 등에게 붙여주는 이름이에요.">시호</a>와 ` +
            `<a class="ex_popup_title" data-content="* 묘호: 인종<br />세상을 떠난 왕이 왕실 사당인 종묘에 모셔질 때 붙여준 이름이에요.">묘호<a>를 ` +
            `올리며 인종의 <a class="ex_popup_title" data-content="* 인품:<br />총명하고 너그러우며 형벌을 삼가고 간언을 가까이 구하는 군왕으로서의 자질 등을 기록했어요.">인품</a>과 ` +
            `<a class="ex_popup_title" data-content="* 업적:<br />시책에는 묘청의 난을 진압한 일, 원구에서 제사 지낸 일 등 인종의 업적들이 적혀져 있어요.">업적</a> 등을 새겨 기록한 것이에요.`,
          isShowPopup: true,
          addPointCardText: "인종의 죽음을 기록한 돌을\n전시실에서 찾아보세요!",
          blackImgScale: 0.27,
          playerAngle: 0,
          scale: 0.27,
        },
        point_2: {
          pos: [745, 651],
          title: "청자로 만든 제기, 희준",
          location: "고려 1실",
          artifactNumber: "덕수 380",
          assetKey: "point_2",
          guide:
            "고려 청자하면 그릇, 찻잔 등의 생활용품을 가장 많이\n" +
            "떠올려요. 청자로도 기와를 만든 사실을 알고 있나요?\n" +
            "전시실에서 <청자로 만든 기와>를 찾아보세요!",
          text1:
            "왕실에서 제사를 지낼 때 술을 담기 위해 사용한 바리 형태의 그릇을 준이라고 부르는데, " +
            "그중 몸통에 소를 그려 넣은 것을 희준이라고해요.",
          addPointCardText:
            "농경사회에서 소는 가장 중요한 동물이에요. \n" +
            "소가 그려진 '청자'로 만든 제기를 찾아보세요.",
          blackImgScale: 0.18,
          playerAngle: 30,
          scale: 0.27,
        },
        point_3: {
          pos: [680, 1380],
          title: "앉아있는 모습의 보살상",
          location: "고려 2실",
          artifactNumber: "구 6241",
          assetKey: "point_3",
          guide: "고려실에서 온화한 표정의 보살상을 찾아보세요!",
          text1:
            "각각의 종교에서는 종교를 대표하는 신상이나 상징물을 만들었는데 불교에서는 부처의 형상을 표현한 불상을 만들었어요.",
          isShowPopup: true,
          // textExWord: [
          //   {
          //     word: "불상",
          //     ex: "*불상: \n" + "불상에는 보살의 형상도 포함하고\n있어요.",
          //   },
          // ],
          addPointCardText: "고려실에서 온화한 표정의 보살상을 찾아보세요!",
          blackImgScale: 0.2,
          playerAngle: 0,
          scale: 0.23,
        },
        point_4: {
          pos: [410, 837],
          title: "합 속에 또 합, 모자합",
          location: "고려 1실",
          artifactNumber: "덕수 4039",
          assetKey: "point_4",
          guide:
            "화장할 때 필요한 화장품을 담은 휴대용 상자,\n" +
            "메이크업 박스는 우리 주변에서 손쉽게 볼 수 있는\n" +
            "물건이에요. 고려시대에도 메이크업 박스가 있었어요.\n" +
            "국화무늬가 새겨진 고려시대 메이크업 박스를 찾아보세요!",
          text1:
            "큰 합 안에 작은 합들이 옹기종기 모여 있는 모습이 어머니가 자식을 감싸 안은 것 같아요.",
          addPointCardText:
            "국화무늬가 새겨진\n고려시대 메이크업 박스를 찾아보세요!",
          playerAngle: 30,
          scale: 0.25,
        },
        point_5: {
          pos: [425, 573],
          title: "청자로 만든 기와",
          location: "고려 1실",
          artifactNumber: "신수 898, 18688, 증 2346, 2347",
          assetKey: "point_5",
          guide: '소가 그려진 "청자"로 만든 제기를 찾아보세요!',
          text1:
            "전통기와는 진한 회색을 띠는 반면 청자로 만든 기와는 푸른색 유약이 입혀져 있어요. 기와의 빛깔을 관찰해 보세요!",
          addPointCardText:
            "청자로도 기와를 만든 사실을 알고 있나요?\n전시실에서 <청자로 만든 기와>를 찾아보세요!",
          playerAngle: -30,
          scale: 0.5,
        },
        point_6: {
          pos: [823, 1233],
          title: "금속으로 만든 고려의 활자",
          location: "고려 2실",
          artifactNumber: "덕수 4462",
          assetKey: "point_6",
          guide: "금속으로 만든 살아 움직이는 글자,\n금속활자를 찾아보세요!",
          text1:
            "고려는 세계에서 가장 먼저 금속활자를 발명했어요. 이 활자는 &nbsp;‘覆(산덮을 복)’이 &nbsp;새겨져 있어요.",
          addPointCardText:
            "금속으로 만든 살아 움직이는 글자,\n금속활자를 찾아보세요!",
          blackImgScale: 0.3,
          playerAngle: 0,
          scale: 0.5,
        },
        point_7: {
          pos: [430, 1423],
          title: "“청녕 4년”이 새겨진 종",
          location: "고려 2실",
          artifactNumber: "신수 1755",
          assetKey: "point_7",
          guide:
            "여러분이 생각하는 가장 한국적인 소리를 내는 도구는\n" +
            "무엇인가요? 가장 한국적인 소리를 들려주는 고려시대\n" +
            "전시품을 찾아보세요!",
          text1:
            "범종은 사찰에서 시간을 알리거나 대중을 모을 때 치는 종이에요. 종소리는 먼 곳까지 진리를 전하는 부처의 말씀을 상징해요.",
          addPointCardText:
            "고려를 대표하는 소리를 들려주는 \n" + "전시품을 찾아보세요!",
          blackImgScale: 0.2,
          playerAngle: 10,
          scale: 0.5,
        },
        point_8: {
          pos: [540, 1650],
          title: "은으로 무늬를 넣은 향완",
          location: "고려 2실",
          artifactNumber: "구 3125",
          assetKey: "point_8",
          guide:
            "① 몸체가 나팔처럼 벌어져 있어요.\n" +
            "② 다리 위는 잘룩하고 아래로 가면서 넓게 퍼져 있어요.\n" +
            "③ 은으로 무늬가 새겨졌어요.\n" +
            "이 세가지 단서를 가지고 전시품을 찾아보세요!",
          text1:
            "향완의 아랫부분은 나팔 모양이고 윗부분은 밥그릇 모양이에요. 불교 의례를 지낼 때 이 그릇에 향을 피워요.",
          addPointCardText: "반짝거리는 은빛무늬의 전시품을 찾아보세요.",
          playerAngle: 0,
        },
      };

      this.lines = {
        start_1_line_start_2: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: this.startPoints.start_2,
            startPoint: "start_1",
            targetPoint: "start_2",
          },
        ],
        start_1_line_point_1: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
            control: [
              this.startPoints.start_1[0] + 5,
              this.startPoints.start_1[1] + 72 + 114,
            ],
            end: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
        ],
        start_1_line_point_4: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 510,
            ],
          },
        ],
        start_1_line_point_5: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 190,
            ],
          },
        ],

        start_1_line_point_6: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
            control: [
              this.startPoints.start_1[0] + 25,
              this.startPoints.start_1[1] + 72 + 780,
            ],
            end: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.eventPoints.point_6.pos[0] - 5,
              this.eventPoints.point_6.pos[1] - 120,
            ],
            end: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
          },
        ],
        start_1_line_point_7: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
            control: [
              this.startPoints.start_1[0] + 25,
              this.startPoints.start_1[1] + 72 + 780,
            ],
            end: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.startPoints.start_1[0] + 190,
              this.startPoints.start_1[1] + 72 + 775,
            ],
            end: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        start_1_line_point_8: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 280,
              this.eventPoints.point_8.pos[1] - 20,
            ],
            end: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],
        // /!* point_1, point_2 to n *!/
        point_1_line_point_2: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] + 153,
              this.eventPoints.point_1.pos[1] + 5,
            ],
            end: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
          },
        ],
        point_1_line_point_5: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] - 100,
              this.eventPoints.point_1.pos[1] - 10,
            ],
            end: [
              this.eventPoints.point_5.pos[0],
              this.eventPoints.point_5.pos[1],
            ],
          },
        ],
        point_2_line_point_4: [
          {
            type: "line",
            start: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
            end: [
              this.eventPoints.point_2.pos[0] - 1,
              this.eventPoints.point_2.pos[1] + 220,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_2.pos[0] - 1,
              this.eventPoints.point_2.pos[1] + 220,
            ],
            control: [
              this.eventPoints.point_2.pos[0] - 15,
              this.eventPoints.point_2.pos[1] + 310,
            ],
            end: [
              this.eventPoints.point_2.pos[0] - 100,
              this.eventPoints.point_2.pos[1] + 345,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_2.pos[0] - 100,
              this.eventPoints.point_2.pos[1] + 345,
            ],
            control: [
              this.eventPoints.point_2.pos[0] - 170,
              this.eventPoints.point_2.pos[1] + 375,
            ],
            end: [490, 980],
          },
          {
            type: "curve",
            start: [490, 980],
            control: [
              this.eventPoints.point_4.pos[0] + 0,
              this.eventPoints.point_4.pos[1] + 90,
            ],
            end: [
              this.eventPoints.point_4.pos[0],
              this.eventPoints.point_4.pos[1],
            ],
          },
        ],
        point_3_line_point_8: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1028,
            ],
            end: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1150,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1150,
            ],
            control: [
              this.startPoints.start_1[0] + 400,
              this.startPoints.start_1[1] + 72 + 1270,
            ],
            end: [
              this.startPoints.start_1[0] + 307,
              this.startPoints.start_1[1] + 72 + 1300,
            ],
          },
        ],
        point_4_line_point_5: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 510,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 190,
            ],
          },
        ],
        point_4_line_point_6: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 510,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
            control: [
              this.startPoints.start_1[0] + 25,
              this.startPoints.start_1[1] + 72 + 780,
            ],
            end: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.eventPoints.point_6.pos[0] - 5,
              this.eventPoints.point_6.pos[1] - 120,
            ],
            end: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
          },
        ],
        point_4_line_point_7: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 510,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
            control: [
              this.startPoints.start_1[0] + 25,
              this.startPoints.start_1[1] + 72 + 780,
            ],
            end: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.startPoints.start_1[0] + 190,
              this.startPoints.start_1[1] + 72 + 775,
            ],
            end: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        point_4_line_point_8: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 510,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 280,
              this.eventPoints.point_8.pos[1] - 20,
            ],
            end: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],
        point_5_line_point_6: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 190,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
            control: [
              this.startPoints.start_1[0] + 25,
              this.startPoints.start_1[1] + 72 + 780,
            ],
            end: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.eventPoints.point_6.pos[0] - 5,
              this.eventPoints.point_6.pos[1] - 120,
            ],
            end: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
          },
        ],
        point_5_line_point_7: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 190,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 870,
            ],
            control: [
              this.startPoints.start_1[0] + 25,
              this.startPoints.start_1[1] + 72 + 780,
            ],
            end: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 100,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.startPoints.start_1[0] + 190,
              this.startPoints.start_1[1] + 72 + 775,
            ],
            end: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        point_5_line_point_8: [
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 190,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 280,
              this.eventPoints.point_8.pos[1] - 20,
            ],
            end: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],
        point_6_line_point_7: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
            control: [
              this.eventPoints.point_6.pos[0] - 5,
              this.eventPoints.point_6.pos[1] - 120,
            ],
            end: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 420,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            end: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 270,
              this.startPoints.start_1[1] + 72 + 760,
            ],
            control: [
              this.startPoints.start_1[0] + 190,
              this.startPoints.start_1[1] + 72 + 775,
            ],
            end: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 178,
              this.startPoints.start_1[1] + 72 + 870,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        point_6_line_point_3: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
            control: [
              this.startPoints.start_1[0] + 560,
              this.startPoints.start_1[1] + 72 + 980,
            ],
            end: [
              this.startPoints.start_1[0] + 470,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
          },
        ],
        point_6_line_point_8: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
            control: [
              this.startPoints.start_1[0] + 560,
              this.startPoints.start_1[1] + 72 + 980,
            ],
            end: [
              this.startPoints.start_1[0] + 470,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 470,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
            end: [
              this.startPoints.start_1[0] + 430,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 430,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
            control: [
              this.startPoints.start_1[0] + 405,
              this.startPoints.start_1[1] + 72 + 1011,
            ],
            end: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1040,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1028,
            ],
            end: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1150,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1150,
            ],
            control: [
              this.startPoints.start_1[0] + 400,
              this.startPoints.start_1[1] + 72 + 1270,
            ],
            end: [
              this.startPoints.start_1[0] + 307,
              this.startPoints.start_1[1] + 72 + 1300,
            ],
          },
        ],
        point_7_line_point_8: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 13,
              this.eventPoints.point_7.pos[1] + 250,
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],

        //개방성 start_2__
        start_2_line_point_1: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
            control: [
              this.startPoints.start_1[0] + 5,
              this.startPoints.start_1[1] + 72 + 114,
            ],
            end: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
        ],
        start_2_line_point_5: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 190,
            ],
          },
        ],
        start_2_line_point_4: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0] + 165,
              this.startPoints.start_1[1] + 72 + 510,
            ],
          },
        ],
        start_2_line_point_6: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 280,
              this.eventPoints.point_8.pos[1] - 20,
            ],
            end: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 307,
              this.startPoints.start_1[1] + 72 + 1300,
            ],
            control: [
              this.startPoints.start_1[0] + 400,
              this.startPoints.start_1[1] + 72 + 1270,
            ],
            end: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1150,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1150,
            ],
            end: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1028,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 408,
              this.startPoints.start_1[1] + 72 + 1040,
            ],
            control: [
              this.startPoints.start_1[0] + 405,
              this.startPoints.start_1[1] + 72 + 1011,
            ],
            end: [
              this.startPoints.start_1[0] + 430,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 430,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
            end: [
              this.startPoints.start_1[0] + 470,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 470,
              this.startPoints.start_1[1] + 72 + 1005,
            ],
            control: [
              this.startPoints.start_1[0] + 560,
              this.startPoints.start_1[1] + 72 + 980,
            ],
            end: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
          },
        ],

        start_2_line_point_7: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 280,
              this.eventPoints.point_8.pos[1] - 20,
            ],
            end: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 13,
              this.eventPoints.point_7.pos[1] + 250,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        start_2_line_point_8: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] - 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 280,
              this.eventPoints.point_8.pos[1] - 20,
            ],
            end: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] - 180,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],

        line_2: [
          {
            type: "line",
            start: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1] + 70,
            ],
            end: [
              this.eventPoints.point_2.pos[0] + 70,
              this.eventPoints.point_2.pos[1] + 70,
            ],
          },
        ],
      };
    } else {
      //개방성
      this.eventPoints = {
        point_1: {
          pos: [445, 530],
          title: "고려임금의 딸, 복녕궁주묘지명",
          location: "고려 1실",
          artifactNumber: "신수 5854",
          assetKey: "point_1",
          guide:
            "우리는 사진으로 소중한 사람과의 추억을 떠올려요.\n" +
            "고려 사람들은 소중한 사람과의 기억을 어떻게 떠올릴까요?\n",
          text1: `복녕<a class="ex_popup_title" data-content="* 궁주:<br />궁주는 ‘궁의 주인’이라는 뜻이예요. 고려시대에 왕비나, 왕의 부인(후궁), 왕의 딸 등이 궁주라는 호칭을 사용했어요.">궁주</a>를 추모하기 위해 만든 묘지명으로, 궁주의 성품, 수명, 생애 등이 새겨져 있어요. 묘지명에 담긴 이야기를 살펴볼까요?`,
          isShowPopup: true,
          addPointCardText:
            "고려 사람들은 소중한 사람을\n어떻게 추억했을까요?\n세상을 떠난 가족을 추모하는 묘지명을 찾아보세요.",
          blackImgScale: 0.23,
          playerAngle: 0,
          scale: 0.21,
        },
        point_2: {
          pos: [716, 535],
          title: "“내시우번”이 새겨진 완",
          location: "고려 1실",
          artifactNumber: "덕수 4959",
          assetKey: "point_2",
          guide:
            "무언가를 기념하기 위해 만든 물건에 글씨를 새기는 경우가\n" +
            "많은데요. 고려시대도 같았어요.\n" +
            "전시실에서 한자를 새긴 청자 그릇을 찾아보고 무엇을\n" +
            "기념하려고 했을지 생각해 보세요.",
          text1:
            "고려 후기에는 청자에 관청 이름이나 기념하는 내용을 새기기도 했어요. 이 청자에는 어떤 내용을 새겼을까요?",
          addPointCardText:
            "특별한 의미를 기념하기 위해 글씨를 새긴\n청자 그릇을 찾아보세요.",
          blackImgScale: 0.27,
          playerAngle: 40,
          scale: 0.43,
        },
        point_3: {
          pos: [746, 654],
          title: "기린을 본떠 만든 청자향로",
          location: "고려 1실",
          artifactNumber: "덕수 3063",
          assetKey: "point_3",
          guide:
            "고려시대에는 왕실과 불교의례에 향을 사용했어요.\n향을 피우는데 사용하는 향로를 찾아보세요.",
          text1:
            "특별한 동물을 본떠 만든 향로를 찾았나요? 향로에 장식된 동물을 ‘향수’라고 부르는데요. 고려청자의 뚜껑에는 어떤 동물이 앉아 있나요?",
          addPointCardText:
            "고려시대에는 왕실과 불교의례에 향을 사용했어요.\n향을 피우는데 사용하는 향로를 찾아보세요.",
          addPointCardText2:
            "특별전 “푸른 세상을 빚다, 고려 상형청자”\n출품 중", //25년 4월1일자로 사라질 문구
          blackImgScale: 0.25,
          playerAngle: 40,
        },
        point_4: {
          pos: [745, 802],
          title: "호장 김지원의 딸 묘지명",
          location: "고려 1실",
          artifactNumber: "덕수 2580",
          assetKey: "point_4",
          guide:
            "전시실에서 8개의 잎을 가진 꽃 모양의\n" +
            "전시품을 찾아보고 어디에 사용된 물건인지,\n" +
            "어떤 내용이 적혀있는지 생각해 보세요.",
          text1:
            "이 꽃 모양의 전시품은 죽은 사람의 무덤에 같이 넣었던 묘지명이에요." +
            "이 묘지명의 주인은 누구이고 어떤 사연이 있는지 같이 알아보아요.",
          addPointCardText:
            "잎이 여덟 개인 꽃 모양의 전시품을 찾아\n어디에 사용되었는지 생각해 보세요.",
          blackImgScale: 0.25,
          playerAngle: 0,
          scale: 0.35,
        },
        point_5: {
          pos: [715, 939],
          title: "지방 백성들이 뜻을 모아 만든 쇠북",
          location: "고려 1실",
          artifactNumber: "신수 7381",
          assetKey: "point_5",
          guide:
            "우리는 기부를 하거나 어떤 일에 후원하면 그 사람의 이름을" +
            "남기는 경우가 많은데요. 고려시대에 후원으로 만들어진" +
            "동그란 북을 전시실에서 찾아보세요.",
          text1: `절에 <a class="ex_popup_title" data-content="* 시납:<br />조건없이 절이나 승려에게 물건을 베풀어 주는 일을 말해요.">시납</a>된 쇠북이에요. 화려한 문양과 함께 글씨가 새겨져 있어 누가, 언제, 어떻게 만들었는지 알 수 있어요.`,
          isShowPopup: true,
          addPointCardText:
            "고려시대에 후원을 받아 만들어진\n동그란 쇠북을 찾아보세요.",
          playerAngle: 0,
          scale: 0.33,
        },
        point_6: {
          pos: [579, 1010],
          title: "철소에서 만든 농기구",
          location: "고려 1실",
          artifactNumber: "청주 14273",
          assetKey: "point_6",
          guide:
            "기계가 없던 시절, 농사를 짓기 위해서는 꼭 필요한 도구들이\n" +
            "있었습니다. 전시실에서 고려시대 농사를 짓는데 사용한\n" +
            "도구를 찾아보세요.",
          text1:
            "이 농기구는 철로 만들었어요. 땅속에서 발굴되어 많이 녹슬었는데요. 이 농기구의 이름은 무엇일까요?",
          addPointCardText:
            "기계가 없던 시절, 농사를 짓기 위해 필요했던\n쇠로 만든 도구들을 찾아보세요.",
          playerAngle: 0,
          scale: 0.25,
        },
        point_7: {
          pos: [436, 936],
          title: "”황비창천”이 새겨진 거울",
          location: "고려 1실",
          artifactNumber: "구 2198",
          assetKey: "point_7",
          guide:
            "고려 사람들이 얼굴을 비추는 용도로 사용한\n전시품을 찾아보세요.",
          text1:
            "고려시대에는 다양한 문양이 새겨진 청동 거울이 많이 제작되었어요. 지금은 녹슬어 얼굴이 보이지 않지만 당시에는 선명하게 보였을 거예요.",
          addPointCardText:
            "고려 사람들이 얼굴을 비추는 용도로 사용한\n전시품을 찾아보세요.",
          playerAngle: 0,
          scale: 0.25,
        },
        point_8: {
          pos: [383, 1115],
          title: "무신정권 때의 문신, 양택춘의 묘지명",
          location: "고려 1실",
          artifactNumber: "신수 2774",
          assetKey: "point_8",
          guide:
            "한 사람의 생애가 담긴\n" +
            "커다란 직사각형의 검은색 돌을 찾아보세요.",
          text1:
            "묘지명에는 죽은 사람의 이름과 가족, 일생 등을 기록해 놓았어요." +
            "이 묘지명의 주인은 어떤 삶을 살았는지, 가족들은 누가 있었는지 같이 알아보아요.",
          addPointCardText:
            "한 사람의 생애가 담긴\n커다란 직사각형의 검은색 돌을 찾아보세요.",
          blackImgScale: 0.3,
          playerAngle: 0,
          scale: 0.27,
        },
      };

      this.lines = {
        start_1_line_start_2: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: this.startPoints.start_2,
            startPoint: "start_1",
            targetPoint: "start_2",
          },
        ],
        start_1_line_point_1: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
            control: [
              this.startPoints.start_1[0] + 5,
              this.startPoints.start_1[1] + 72 + 114,
            ],
            end: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            control: [
              this.eventPoints.point_1.pos[0] + 50,
              this.eventPoints.point_1.pos[1] - 60,
            ],
            end: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
          },
        ],
        start_1_line_point_2: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 60,
            ],
            control: [
              this.startPoints.start_1[0] + 5,
              this.startPoints.start_1[1] + 72 + 114,
            ],
            end: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 70,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            control: [
              this.eventPoints.point_2.pos[0] - 50,
              this.eventPoints.point_2.pos[1] - 70,
            ],
            end: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
          },
        ],
        start_1_line_point_7: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 21,
              this.eventPoints.point_7.pos[1] - 45,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        start_1_line_point_8: [
          {
            type: "line",
            start: this.startPoints.start_1,
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 110,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],
        /* point_1, point_2 to n */
        point_1_line_point_2: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] + 50,
              this.eventPoints.point_1.pos[1] - 60,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            control: [
              this.eventPoints.point_2.pos[0] - 50,
              this.eventPoints.point_2.pos[1] - 70,
            ],
            end: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
          },
        ],
        point_1_line_point_7: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] - 25,
              this.eventPoints.point_1.pos[1] + 40,
            ],
            end: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 21,
              this.eventPoints.point_7.pos[1] - 45,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        point_1_line_point_8: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] - 25,
              this.eventPoints.point_1.pos[1] + 40,
            ],
            end: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 110,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],
        point_2_line_point_3: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
            control: [
              this.eventPoints.point_2.pos[0] + 14,
              this.eventPoints.point_2.pos[1] + 20,
            ],
            end: [
              this.eventPoints.point_2.pos[0] + 25,
              this.eventPoints.point_2.pos[1] + 50,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_2.pos[0] + 25,
              this.eventPoints.point_2.pos[1] + 50,
            ],
            control: [
              this.eventPoints.point_2.pos[0] + 26,
              this.eventPoints.point_2.pos[1] + 50,
            ],
            end: [
              this.eventPoints.point_3.pos[0],
              this.eventPoints.point_3.pos[1],
            ],
          },
        ],
        point_2_line_point_7: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
            control: [
              this.eventPoints.point_2.pos[0] - 50,
              this.eventPoints.point_2.pos[1] - 70,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            control: [
              this.eventPoints.point_1.pos[0] + 50,
              this.eventPoints.point_1.pos[1] - 60,
            ],
            end: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
          },

          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] - 25,
              this.eventPoints.point_1.pos[1] + 40,
            ],
            end: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 21,
              this.eventPoints.point_7.pos[1] - 45,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],
        point_2_line_point_8: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_2.pos[0],
              this.eventPoints.point_2.pos[1],
            ],
            control: [
              this.eventPoints.point_2.pos[0] - 50,
              this.eventPoints.point_2.pos[1] - 70,
            ],
            end: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 320,
              this.startPoints.start_1[1] + 72 + 115,
            ],
            control: [
              this.eventPoints.point_1.pos[0] + 50,
              this.eventPoints.point_1.pos[1] - 60,
            ],
            end: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
            control: [
              this.eventPoints.point_1.pos[0] - 25,
              this.eventPoints.point_1.pos[1] + 40,
            ],
            end: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 110,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],
        /* n to n+1 */
        point_3_line_point_4: [
          {
            type: "line",
            start: [
              this.eventPoints.point_3.pos[0],
              this.eventPoints.point_3.pos[1],
            ],
            end: [
              this.eventPoints.point_4.pos[0],
              this.eventPoints.point_4.pos[1],
            ],
          },
        ],
        point_4_line_point_5: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_4.pos[0],
              this.eventPoints.point_4.pos[1],
            ],
            control: [
              this.eventPoints.point_4.pos[0],
              this.eventPoints.point_4.pos[1] + 105,
            ],
            end: [
              this.eventPoints.point_5.pos[0],
              this.eventPoints.point_5.pos[1],
            ],
          },
        ],
        point_5_line_point_6: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_5.pos[0],
              this.eventPoints.point_5.pos[1],
            ],
            control: [
              this.eventPoints.point_6.pos[0] + 100,
              this.eventPoints.point_6.pos[1] - 15,
            ],
            end: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
            startPoint: "point_5",
            targetPoint: "point_6",
          },
        ],
        point_6_line_point_7: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_6.pos[0],
              this.eventPoints.point_6.pos[1],
            ],
            control: [
              this.eventPoints.point_7.pos[0] + 50,
              this.eventPoints.point_7.pos[1] + 60,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
            startPoint: "point_6",
            targetPoint: "point_7",
          },
        ],
        point_7_line_point_8: [
          {
            type: "curve",
            start: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 21,
              this.eventPoints.point_7.pos[1] - 45,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 110,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 110,
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
          },
        ],

        //개방성 start_2__
        start_2_line_point_1: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_1.pos[0] - 29,
              this.eventPoints.point_1.pos[1] + 80,
            ],
            control: [
              this.eventPoints.point_1.pos[0] - 25,
              this.eventPoints.point_1.pos[1] + 40,
            ],
            end: [
              this.eventPoints.point_1.pos[0],
              this.eventPoints.point_1.pos[1],
            ],
          },
        ],
        start_2_line_point_7: [
          {
            type: "line",
            start: this.startPoints.start_2,
            end: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0],
              this.startPoints.start_1[1] + 72 + 390,
            ],
            control: [
              this.startPoints.start_1[0] + 10,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 80,
              this.startPoints.start_1[1] + 72 + 310,
            ],
            control: [
              this.startPoints.start_1[0] + 150,
              this.startPoints.start_1[1] + 72 + 315,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
          },
          {
            type: "line",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 390,
            ],
            end: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
          },
          {
            type: "curve",
            start: [
              this.startPoints.start_1[0] + 160,
              this.startPoints.start_1[1] + 72 + 500,
            ],
            control: [
              this.eventPoints.point_7.pos[0] - 21,
              this.eventPoints.point_7.pos[1] - 45,
            ],
            end: [
              this.eventPoints.point_7.pos[0],
              this.eventPoints.point_7.pos[1],
            ],
          },
        ],

        line_1: [
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1],
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 330,
              this.eventPoints.point_8.pos[1],
            ],
          },

          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0] + 330,
              this.eventPoints.point_8.pos[1],
            ],
            control: [
              this.eventPoints.point_8.pos[0] + 433,
              this.eventPoints.point_8.pos[1] + 15,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 437,
              this.eventPoints.point_8.pos[1] + 120,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0] + 437,
              this.eventPoints.point_8.pos[1] + 120,
            ],
            control: [
              this.eventPoints.point_8.pos[0] + 433,
              this.eventPoints.point_8.pos[1] + 225,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 323,
              this.eventPoints.point_8.pos[1] + 240,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0] + 323,
              this.eventPoints.point_8.pos[1] + 240,
            ],
            control: [
              this.eventPoints.point_8.pos[0] + 280,
              this.eventPoints.point_8.pos[1] + 240,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 280,
              this.eventPoints.point_8.pos[1] + 260,
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] + 280,
              this.eventPoints.point_8.pos[1] + 260,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 280,
              this.eventPoints.point_8.pos[1] + 430,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0] + 280,
              this.eventPoints.point_8.pos[1] + 430,
            ],
            control: [
              this.eventPoints.point_8.pos[0] + 280,
              this.eventPoints.point_8.pos[1] + 525,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 180,
              this.eventPoints.point_8.pos[1] + 538,
            ],
          },

          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0] + 180,
              this.eventPoints.point_8.pos[1] + 538,
            ],
            control: [
              this.eventPoints.point_8.pos[0] + 50,
              this.eventPoints.point_8.pos[1] + 545,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 50,
              this.eventPoints.point_8.pos[1] + 430,
            ],
          },
          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] + 50,
              this.eventPoints.point_8.pos[1] + 430,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 50,
              this.eventPoints.point_8.pos[1] + 100,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0] + 50,
              this.eventPoints.point_8.pos[1] + 100,
            ],
            control: [
              this.eventPoints.point_8.pos[0] + 60,
              this.eventPoints.point_8.pos[1] + 10,
            ],
            end: [
              this.eventPoints.point_8.pos[0] + 120,
              this.eventPoints.point_8.pos[1],
            ],
          },

          {
            type: "line",
            start: [
              this.eventPoints.point_8.pos[0] + 180,
              this.eventPoints.point_8.pos[1] + 538,
            ],
            end: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1] + 538,
            ],
          },
          {
            type: "curve",
            start: [
              this.eventPoints.point_8.pos[0],
              this.eventPoints.point_8.pos[1] + 538,
            ],
            control: [
              this.eventPoints.point_8.pos[0] - 100,
              this.eventPoints.point_8.pos[1] + 538,
            ],
            end: [
              this.startPoints.start_1[0],
              this.eventPoints.point_8.pos[1] + 438,
            ],
          },
        ],
        line_2: [
          {
            type: "line",
            start: [
              this.eventPoints.point_3.pos[0],
              this.eventPoints.point_3.pos[1] + 70,
            ],
            end: [
              this.eventPoints.point_3.pos[0] + 70,
              this.eventPoints.point_3.pos[1] + 70,
            ],
          },
        ],
      };
    }

    this.lines = JSON.parse(JSON.stringify(this.lines));
    this.currenttPoint = this.user.startPoint;
  }

  setGuideFlowData() {
    //todo test 진행(삭제예정)
    this.user.isKiosk = true;
    //todo test 진행(삭제예정)//

    if (this.user.isKiosk) {
      this.guideFlow = [
        {
          text:
            "캐릭터와 함께 여행방법을 알아보아요.\n" +
            "지도 위의 여행장소를 클릭해 보세요.",
          action: "show-point-card",
        },
        {
          text:
            "지도 위에서 여행 장소를 선택하면 \n" +
            "나의 캐릭터가 해당 위치로 이동합니다.\n" +
            "직접 전시품을 찾으러 고려실로 떠나볼까요?",
          action: "next",
        },
        { text: "addPointCardText", action: "next" },
        {
          text:
            "전시품 그림 아래의 QR 버튼이 보이시나요?\n" +
            "선택한 전시품 앞에 놓인 QR코드를 찾아 스캔하면\n" +
            "여행이 시작됩니다.",
          ready: "show-qr-button",
          action: "click-qr-button",
        },
        {
          text: "우측 상단의 수집목록 버튼이 보이시나요?\n버튼을 클릭하면 방금 수집한\n전시품을 확인할 수 있어요!",
          action: "click-my-artifact",
        },
        {
          text: "버튼을 다시 한번 클릭해 닫아볼까요?",
          action: "close-qr-button",
        },
        {
          text:
            "이제 다른 전시품을 찾아 떠나보아요!\n" +
            "여행 방법을 잊으셨다면 언제든지 도와드릴게요.",
          action: "click-point-end",
        },
      ];
    } else {
      this.guideFlow = [
        {
          text:
            "캐릭터와 함께 여행방법을 알아보아요.\n" +
            "지도 위의 여행장소를 클릭해 보세요.",
          action: "show-point-card",
        },
        {
          text:
            "지도 위에서 여행 장소를 선택하면 \n" +
            "나의 캐릭터가 해당 위치로 이동합니다.\n" +
            "직접 전시품을 찾으러 고려실로 떠나볼까요?",
          action: "next",
        },
        { text: "addPointCardText", action: "next" },
        {
          text:
            "전시품 그림 아래에 생긴 QR 버튼이 보이시나요?\n" +
            "선택한 전시품 앞에 놓인 QR코드를 찾아 스캔하면\n" +
            "여행이 시작됩니다.",
          ready: "show-qr-button",
          action: "click-qr-button",
        },
        {
          text: "우측 상단의 수집목록 버튼이 보이시나요?\n버튼을 클릭하면 방금 수집한 전시품을 확인할 수 있어요!",
          action: "click-my-artifact",
        },
        {
          text: "버튼을 다시 한번 클릭해 닫아볼까요?",
          action: "close-qr-button",
        },
        {
          text:
            "이제 다른 전시품을 찾아 떠나보아요!\n" +
            "여행 방법을 잊으셨다면 언제든지 도와드릴게요.",
          action: "click-point-end",
        },
      ];
    }

    if (!this.user.isDoneGuide && this.user.discoverArtifact.length === 0) {
      this.createGuideLayer();
    }
  }

  blackLayer: any;
  showBlackLayer(depth, option = null) {
    this.blackLayer.setVisible(true);
    this.blackLayer.setDepth(depth ? depth : 19);
    Util.toggleBlackLayer("show", this.hideBlackLayer.bind(this), option);
  }

  hideBlackLayer() {
    this.blackLayer.setVisible(false);
    this.hidePointCard();
    this.hideInteractiveTicket();
    Util.toggleBlackLayer("hide", false, "active");
  }

  showMyCard() {
    let _this = this;
    this.btn_done_int_cont.setVisible(false);

    this.game.renderer.snapshotArea(55, 174, 980, 1680, (image: any) => {
      this.blank_layer.setDepth(99).setVisible(true);
      let tempCardUrl = image.src;
      this.textures.addBase64("tempCardImg", tempCardUrl);

      this.textures.once("onload", function () {
        let cardImg = _this.add // 이미지 추가, 기준점(0.5, 0.5)로 가운데 회전
          .image(60 + 980 / 2, 174 + 1680 / 2, "tempCardImg")
          .setOrigin(0.5, 0.5)
          .setDepth(99);

        _this.mycard_name.setText(_this.user.userName);
        let visit: any = localStorage.getItem("visit");
        if (visit) {
          visit = JSON.parse(visit);
        }
        if (_this.user.ticketType === "openness") {
          _this.mycard_stamp.setTexture("img_stamp_op");
          _this.mycard_visitcount.setText(visit ? visit.visitCount : 0);
        }
        _this.tweens.add({
          targets: cardImg,
          scaleX: 0, // 가로 크기 0으로 축소 (앞면 → 중간)
          duration: 300, // 앞면에서 중간까지 회전 시간
          ease: "Linear",
          onComplete: () => {
            _this.mycard.setDepth(100).setVisible(true); // 중간 지점에서 뒷면으로 회전 (0 → -1)
            _this.tweens.add({
              targets: _this.mycard,
              scaleX: { from: 0, to: 1 }, // 뒷면으로 완전 회전 (중간 → 뒷면)
              duration: 300, // 중간에서 뒷면까지 회전 시간
              ease: "Linear",
              onComplete: () => {
                _this.scene.start("MyPage");
              },
            });
          },
        });
      });
    });
  }

  saveMyPage() {
    let _this = this;
    this.playerContainer.setVisible(false);
  }
}
