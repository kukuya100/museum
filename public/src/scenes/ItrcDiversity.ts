import Util from "../Util";
import RacRoundText from "../components/RacRoundText";
import ModaAlert from "../components/ModaAlert";
import itrcdiAssetPackUrl from "../../static/assets/itrcdi/itrcdi.json";
import point1AssetPackUrl from "../../static/assets/itrcdi/point_1/point1.json";
import point2AssetPackUrl from "../../static/assets/itrcdi/point_2/point2.json";
import point3AssetPackUrl from "../../static/assets/itrcdi/point_3/point3.json";
import point4AssetPackUrl from "../../static/assets/itrcdi/point_4/point4.json";
import point5AssetPackUrl from "../../static/assets/itrcdi/point_5/point5.json";
import point6AssetPackUrl from "../../static/assets/itrcdi/point_6/point6.json";
import point7AssetPackUrl from "../../static/assets/itrcdi/point_7/point7.json";
import point8AssetPackUrl from "../../static/assets/itrcdi/point_8/point8.json";
import { saveAs } from "file-saver";
import $ from "jquery";

export default class ItrcDiversity extends Phaser.Scene {
  contentImageX: any;
  contentImageY: any;
  audio: any;
  constructor() {
    super("ItrcDiversity");
  }

  editorCreate(): void {
    // 공통 스타일 정의
    const titleX = 288;
    const titleY = 120;
    const titleStyle = {
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    };

    const contentImageX = 288;
    this.contentImageX = contentImageX;
    const contentImageY = 1144;
    this.contentImageY = contentImageY;
    setTimeout(() => {
      Util.addPopupListeners(".ex_popup_title");
    }, 0);

    // bg_interactive
    const bg_interactive = this.add.image(0, 0, "bg_interactive");
    bg_interactive.name = "bg_interactive";
    bg_interactive.setOrigin(0, 0);

    // temp_p3
    const temp_p3 = this.add.container(250, 90);
    temp_p3.name = "temp_p3";
    temp_p3.visible = false;

    // bg_lp_1
    const bg_lp_1 = this.add.image(288, 1152, "bg_lp_1");
    temp_p3.add(bg_lp_1);

    // bg_lp_title
    const bg_lp_title = this.add.image(288, 717, "bg_lp_title");
    temp_p3.add(bg_lp_title);

    // text_117
    const text_117 = this.add.text(288, 695, "", {});
    text_117.setOrigin(0.5, 0);
    text_117.text = "연계 전시품도 관람해 보세요.";
    text_117.setStyle({
      align: "center",
      color: "#fff",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "27pt",
    });
    text_117.setLineSpacing(2);
    temp_p3.add(text_117);

    // temp_p3_name
    const temp_p3_name = this.add.text(-100, 1491, "", {});
    temp_p3_name.name = "temp_p3_name";
    temp_p3_name.text = "복녕궁주의 거처에서 쓰이던 접시";
    temp_p3_name.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "27pt",
      fontStyle: "bold",
      fixedWidth: 776,
    });
    temp_p3_name.setLineSpacing(2);
    temp_p3_name.setOrigin(0, 0);
    temp_p3.add(temp_p3_name);

    // temp_p3_location
    const temp_p3_location = this.add.text(-100, 1549, "", {});
    temp_p3_location.name = "temp_p3_location";
    temp_p3_location.text = "고려, 고려 1실, 덕수 131";
    temp_p3_location.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "23pt",
      fixedWidth: 776,
    });
    temp_p3_location.setLineSpacing(2);
    temp_p3_location.setOrigin(0, 0);
    temp_p3.add(temp_p3_location);

    // img_lp
    const img_lp = this.add.image(290, 1080, "btn_x");
    img_lp.name = "img_lp";
    temp_p3.add(img_lp);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(290, 1066, 128, 128);
    rectangle_1.scaleX = 5.671777500525016;
    rectangle_1.scaleY = 4.5329239845976055;
    rectangle_1.visible = false;
    rectangle_1.fillColor = 16000807;
    rectangle_1.fillAlpha = 2;
    rectangle_1.isStroked = true;
    rectangle_1.strokeColor = 16000807;
    temp_p3.add(rectangle_1);

    // temp_p3_title
    const temp_p3_title = this.add.text(titleX, titleY + 36, "", titleStyle);
    temp_p3_title.name = "temp_p3_title";
    temp_p3_title.setOrigin(0.5, 0.5);
    temp_p3.add(temp_p3_title);

    // temp_p3_text
    const temp_p3_text = this.add.dom(0, 0).createFromHTML("");
    temp_p3.add(temp_p3_text);

    // temp_p4
    const temp_p4 = this.add.container(250, 90);
    temp_p4.name = "temp_p4";
    temp_p4.visible = false;

    // bg_ir_4s
    const bg_ir_4s = this.add.image(289, 954, "bg_ir_4s");
    temp_p4.add(bg_ir_4s);

    // text_118
    const text_118 = this.add.text(290, 227, "", {});
    text_118.setOrigin(0.5, 0);
    text_118.text = "함께 생각하기";
    text_118.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "62px",
    });
    text_118.setLineSpacing(0.3 * 62);
    text_118.setLetterSpacing(-0.02 * 62);
    text_118.setWordWrapWidth(715);
    temp_p4.add(text_118);

    // point_n_41_text
    const point_n_41_text = this.add.dom(-68, 670).createFromHTML("");
    temp_p4.add(point_n_41_text);

    // prg_con
    const prg_con = this.add.container(250, 90);

    // prg_1
    const prg_1 = this.add.container(0, 0);
    prg_con.add(prg_1);

    // ico_big
    const ico_big = this.add.image(0, 2, "ico_big_on");
    prg_1.add(ico_big);

    // ico_sml_1
    const ico_sml_1 = this.add.image(48, 0, "ico_sml_on");
    prg_1.add(ico_sml_1);

    // ico_sml_2
    const ico_sml_2 = this.add.image(81, 0, "ico_sml_on");
    prg_1.add(ico_sml_2);

    // prg_2
    const prg_2 = this.add.container(194, 0);
    prg_con.add(prg_2);

    // ico_sml_3
    const ico_sml_3 = this.add.image(-80, 1, "ico_sml");
    prg_2.add(ico_sml_3);

    // ico_sml_4
    const ico_sml_4 = this.add.image(-49, -1, "ico_sml");
    prg_2.add(ico_sml_4);

    // ico_big_1
    const ico_big_1 = this.add.image(0, 0, "ico_big");
    prg_2.add(ico_big_1);

    // ico_sml_5
    const ico_sml_5 = this.add.image(48, -1, "ico_sml");
    prg_2.add(ico_sml_5);

    // ico_sml_6
    const ico_sml_6 = this.add.image(81, -1, "ico_sml");
    prg_2.add(ico_sml_6);

    // prg_3
    const prg_3 = this.add.container(386, 1);
    prg_con.add(prg_3);

    // ico_sml_7
    const ico_sml_7 = this.add.image(-78, -1, "ico_sml");
    prg_3.add(ico_sml_7);

    // ico_sml_8
    const ico_sml_8 = this.add.image(-47, -2, "ico_sml");
    prg_3.add(ico_sml_8);

    // ico_big_2
    const ico_big_2 = this.add.image(0, 0, "ico_big");
    prg_3.add(ico_big_2);

    // ico_sml_9
    const ico_sml_9 = this.add.image(48, -1, "ico_sml");
    prg_3.add(ico_sml_9);

    // ico_sml_10
    const ico_sml_10 = this.add.image(81, -1, "ico_sml");
    prg_3.add(ico_sml_10);

    // prg_4
    const prg_4 = this.add.container(578, 1);
    prg_con.add(prg_4);

    // ico_sml_11
    const ico_sml_11 = this.add.image(-78, 0, "ico_sml");
    prg_4.add(ico_sml_11);

    // ico_sml_12
    const ico_sml_12 = this.add.image(-47, 0, "ico_sml");
    prg_4.add(ico_sml_12);

    // ico_big_3
    const ico_big_3 = this.add.image(0, 1, "ico_big");
    prg_4.add(ico_big_3);

    // point_1
    const point_1 = this.add.container(250, 90);
    point_1.visible = false;

    // point_1_11
    const point_1_11 = this.add.container(0, 0);
    point_1_11.name = "point_1_11";
    point_1_11.visible = false;
    point_1.add(point_1_11);

    // btn_in_next
    const btn_in_next = this.add.image(692, 1706, "btn_next");
    btn_in_next.name = "btn_in_next";
    btn_in_next.visible = false;
    point_1_11.add(btn_in_next);

    // text_27
    const text_27 = this.add.text(
      titleX,
      titleY,
      "인종시책 구멍의 용도",
      titleStyle
    );
    text_27.name = "text_27";
    text_27.setOrigin(0.5, 0);
    point_1_11.add(text_27);

    // text_28
    const text_28 = this.add.text(293, 256, "", {});
    text_28.name = "text_28";
    text_28.setOrigin(0.5, 0);
    text_28.visible = false;
    text_28.text =
      "인종시책 옆면에 구멍이 뚫려 있는 이유는 무엇일까요?\n이 구멍은 금실 같은 끈을 넣어 시책을 연결하는 용도예요.";
    text_28.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_28.setLineSpacing(2);
    text_28.setWordWrapWidth(850, true);
    point_1_11.add(text_28);

    // img_point_1_1
    const img_point_1_1 = this.add.image(290, 933, "img_point_1_1");
    img_point_1_1.name = "img_point_1_1";
    point_1_11.add(img_point_1_1);

    // eff_point_1_2
    const eff_point_1_2 = this.add.image(266, 685, "eff_point_1_2");
    eff_point_1_2.name = "eff_point_1_2";
    eff_point_1_2.visible = false;
    point_1_11.add(eff_point_1_2);

    // eff_point_1_1
    const eff_point_1_1 = this.add.image(271, 1317, "eff_point_1_1");
    eff_point_1_1.name = "eff_point_1_1";
    eff_point_1_1.visible = false;
    point_1_11.add(eff_point_1_1);

    // text_57
    const text_57 = this.add.text(421, 950, "", {});
    text_57.name = "text_57";
    text_57.setOrigin(0.5, 0);
    text_57.visible = false;
    text_57.alpha = 0;
    text_57.alphaTopLeft = 0;
    text_57.alphaTopRight = 0;
    text_57.alphaBottomLeft = 0;
    text_57.alphaBottomRight = 0;
    text_57.text = "인종시책 옆면에 구멍이 뚫려 있는 이유는 무엇일까요?";
    text_57.setStyle({
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_57.setLineSpacing(2);
    text_57.setWordWrapWidth(800);
    point_1_11.add(text_57);

    // line_point_1_1
    const line_point_1_1 = this.add.image(216, 1085, "line_point_1_1");
    line_point_1_1.name = "line_point_1_1";
    line_point_1_1.visible = false;
    line_point_1_1.alpha = 0;
    line_point_1_1.alphaTopLeft = 0;
    line_point_1_1.alphaTopRight = 0;
    line_point_1_1.alphaBottomLeft = 0;
    line_point_1_1.alphaBottomRight = 0;
    point_1_11.add(line_point_1_1);

    // btn_word_plus_5
    const btn_word_plus_5 = this.add.image(197, 1271, "btn_word_plus");
    btn_word_plus_5.name = "btn_word_plus_5";
    point_1_11.add(btn_word_plus_5);

    // point_1_21
    const point_1_21 = this.add.container(-10, 2);
    point_1_21.name = "point_1_21";
    point_1_21.visible = false;
    point_1.add(point_1_21);

    // bg_img_box_7
    const bg_img_box_7 = this.add.image(290, 1077, "img_point_1_2");
    bg_img_box_7.name = "bg_img_box_7";
    point_1_21.add(bg_img_box_7);

    // text_83
    const text_83 = this.add.text(
      titleX,
      titleY,
      "인종을 지키는 神將(신장)",
      titleStyle
    );
    text_83.name = "text_83";
    text_83.setOrigin(0.5, 0);
    point_1_21.add(text_83);

    const content_div_1_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">인종 시책의 양 끝에는 희미하게 새겨진 신장이 있어요. 자세히 관찰해 볼까요?</p>`
      );
    content_div_1_1.name = "content_div_1_1";
    point_1_21.add(content_div_1_1);

    // text_14
    const text_14 = this.add.text(290, 1621 + 56, "", {});
    text_14.name = "text_14";
    text_14.setOrigin(0.5, 0);
    text_14.text = "호위 신장을 찾아 클릭하세요. ";
    text_14.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_14.setLineSpacing(2);
    text_14.setWordWrapWidth(800);
    point_1_21.add(text_14);

    // btn_plus
    const btn_plus = this.add.image(-65, 1058, "btn_plus_dotted");
    btn_plus.name = "btn_plus";
    point_1_21.add(btn_plus);

    // ico_bow
    const ico_bow = this.add.image(723, 1070, "ico_bow");
    ico_bow.name = "ico_bow";
    ico_bow.visible = false;
    point_1_21.add(ico_bow);

    // ico_bow_p1_l
    const ico_bow_p1_l = this.add.image(-130, 1070, "ico_bow");
    ico_bow_p1_l.name = "ico_bow_p1_l";
    ico_bow_p1_l.angle = -180;
    ico_bow_p1_l.visible = false;
    point_1_21.add(ico_bow_p1_l);

    // point_1_31
    const point_1_31 = this.add.container(-10, 1);
    point_1_31.name = "point_1_31";
    point_1_31.visible = false;
    point_1.add(point_1_31);

    // point_1_41
    const point_1_41 = this.add.container(-10, 0);
    point_1_41.name = "point_1_41";
    point_1_41.visible = false;
    point_1.add(point_1_41);

    // point_2
    const point_2 = this.add.container(250, 89);
    point_2.visible = false;

    // point_2_11
    const point_2_11 = this.add.container(0, 0);
    point_2_11.name = "point_2_11";
    point_2_11.visible = false;
    point_2.add(point_2_11);

    // text_1
    const text_1 = this.add.text(
      titleX,
      titleY,
      "네 마리 각기 다른 소",
      titleStyle
    );
    text_1.setOrigin(0.5, 0);
    point_2_11.add(text_1);

    // text
    const content_div_2_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">소는 신에게 바치는 제물 가운데 최고로 여겼기 때문에 왕실 제기에도 소가 그려졌어요.</p>`
      );
    point_2_11.add(content_div_2_1);

    const text_6 = this.add.text(
      contentImageX,
      contentImageY + 536,
      "사진을 넘겨 다른 면을 살펴보세요.",
      {}
    );
    text_6.setOrigin(0.5, 0);
    text_6.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_6.setLineSpacing(2);
    text_6.setWordWrapWidth(850);
    point_2_11.add(text_6);

    // bg_img_box
    const bg_img_box = this.add.image(
      contentImageX,
      contentImageY,
      "bg_img_box"
    ); // 1010
    point_2_11.add(bg_img_box);

    // point_2_21
    const point_2_21 = this.add.container(0, 0);
    point_2_21.name = "point_2_21";
    point_2_21.visible = false;
    point_2.add(point_2_21);

    // text_4
    const text_4 = this.add.text(298, 87, "", {});
    text_4.setOrigin(0.5, 0);
    text_4.text = "희준 사용설명서";
    text_4.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_4.setLineSpacing(0.5);
    text_4.setWordWrapWidth(850, true);
    point_2_21.add(text_4);

    // bg_div_point_2_21
    const bg_div_point_2_21 = this.add.image(
      288,
      342 + (392 - 88) * 2,
      "bg_div_point_2_21"
    );
    point_2_21.add(bg_div_point_2_21);

    // point_2_22
    const point_2_22 = this.add.container(0, 0);
    point_2_22.name = "point_2_22";
    point_2_22.visible = false;
    point_2.add(point_2_22);

    // text_10
    const text_10 = this.add.text(298, 77, "", {});
    text_10.setOrigin(0.5, 0);
    text_10.text =
      "희준에 맑은 물과 제사용 술을 옮겨 담아보면서 \n왕실의 안녕을 빌어보세요!";
    text_10.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_10.setLineSpacing(0.5);
    text_10.setWordWrapWidth(800);
    point_2_22.add(text_10);

    // bg_point_1
    const bg_point_1 = this.add.image(287, 964, "bg_point_1");
    point_2_22.add(bg_point_1);

    // bg_drag_zone
    const bg_drag_zone = this.add.image(70, 655, "bg_ract");
    bg_drag_zone.name = "bg_drag_zone";
    point_2_22.add(bg_drag_zone);

    // water_zone
    const water_zone = this.add.image(78, 1203, "img_point_2_5");
    water_zone.name = "water_zone";
    point_2_22.add(water_zone);

    // alcohol_zone
    const alcohol_zone = this.add.image(526, 1203, "img_point_2_6");
    alcohol_zone.name = "alcohol_zone";
    point_2_22.add(alcohol_zone);

    // bg_drag_zone_1
    const bg_drag_zone_1 = this.add.image(518, 655, "bg_ract");
    bg_drag_zone_1.name = "bg_drag_zone_1";
    point_2_22.add(bg_drag_zone_1);

    // text_9
    const text_9 = this.add.text(66, 685, "", {});
    text_9.setOrigin(0.5, 0);
    text_9.text = "맑은 물";
    text_9.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_9.setLineSpacing(0.5);
    text_9.setWordWrapWidth(800);
    point_2_22.add(text_9);

    // text_11
    const text_11 = this.add.text(518, 685, "", {});
    text_11.setOrigin(0.5, 0);
    text_11.text = "제사용 술";
    text_11.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_11.setLineSpacing(0.5);
    text_11.setWordWrapWidth(800);
    point_2_22.add(text_11);

    // img_water
    const img_water = this.add.image(64, 546, "img_water");
    img_water.name = "img_water";
    point_2_22.add(img_water);

    // img_alcohol
    const img_alcohol = this.add.image(517, 546, "img_alcohol");
    img_alcohol.name = "img_alcohol";
    point_2_22.add(img_alcohol);

    // text_12
    const text_12 = this.add.text(290, 1630, "", {});
    text_12.name = "text_12";
    text_12.setOrigin(0.5, 0);
    text_12.text = "물과 술을 드래그하여 희준을 채워주세요.";
    text_12.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "27pt",
    });
    text_12.setLineSpacing(0.5);
    text_12.setWordWrapWidth(800);
    point_2_22.add(text_12);

    // water_1
    const water_1 = this.add.sprite(71, 1055, "sp_water_1", 0);
    water_1.name = "water_1";
    water_1.scaleX = 0.5;
    water_1.scaleY = 0.5;
    water_1.visible = false;
    point_2_22.add(water_1);

    // water_2
    const water_2 = this.add.sprite(71, 1050, "sp_water_2", 0);
    water_2.name = "water_2";
    water_2.scaleX = 0.5;
    water_2.scaleY = 0.5;
    water_2.visible = false;
    point_2_22.add(water_2);

    // ani_alcohol_1
    const ani_alcohol_1 = this.add.sprite(519, 1055, "sp_alcohol_1", 0);
    ani_alcohol_1.name = "ani_alcohol_1";
    ani_alcohol_1.scaleX = 0.5;
    ani_alcohol_1.scaleY = 0.5;
    ani_alcohol_1.visible = false;
    point_2_22.add(ani_alcohol_1);

    // ani_alcohol_2
    const ani_alcohol_2 = this.add.sprite(519, 1050, "sp_alcohol_2", 0);
    ani_alcohol_2.name = "ani_alcohol_2";
    ani_alcohol_2.scaleX = 0.5;
    ani_alcohol_2.scaleY = 0.5;
    ani_alcohol_2.visible = false;
    point_2_22.add(ani_alcohol_2);

    // point_2_31
    const point_2_31 = this.add.container(0, 0);
    point_2_31.name = "point_2_31";
    point_2_31.visible = false;
    point_2.add(point_2_31);

    // point_2_41
    const point_2_41 = this.add.container(0, 0);
    point_2_41.name = "point_2_41";
    point_2_41.visible = false;
    point_2.add(point_2_41);

    // point_3
    const point_3 = this.add.container(250, 89);
    point_3.visible = false;

    // point_3_11
    const point_3_11 = this.add.container(0, 0);
    point_3_11.name = "point_3_11";
    point_3_11.visible = false;
    point_3.add(point_3_11);

    // text_29
    const text_29 = this.add.text(
      titleX,
      titleY,
      "온화한 표정을 가진 보살",
      titleStyle
    );
    text_29.setOrigin(0.5, 0);
    point_3_11.add(text_29);

    const content_div_1_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">불교에서는 깨달은 자 모두를 부처라고 불러요. 보살은 부처 다음가는 성인으로 도움이 필요한 사람들을 두루 도와줘요.</p>`
      );
    point_3_11.add(content_div_1_2);

    // img_point_3_1
    const img_point_3_1 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_3_1"
    );
    point_3_11.add(img_point_3_1);

    // point_3_21
    const point_3_21 = this.add.container(0, 0);
    point_3_21.name = "point_3_21";
    point_3_21.visible = false;
    point_3.add(point_3_21);

    // text_7
    const text_7 = this.add.text(288, 77, "완성해보살", titleStyle);
    text_7.setOrigin(0.5, 0);
    point_3_21.add(text_7);

    // text_8
    const text_8 = this.add.text(
      288,
      188,
      "보살상의 머리, 옷을 찾아보세요.",
      {}
    );
    text_8.name = "text_8";
    text_8.setOrigin(0.5, 0);
    text_8.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "48px",
    });
    text_8.setLineSpacing(10);
    text_8.setWordWrapWidth(900);
    point_3_21.add(text_8);

    // img_point_3_t_1
    const img_point_3_t_1 = this.add.image(290, 525, "img_point_3_t_1");
    img_point_3_t_1.name = "img_point_3_t_1";
    point_3_21.add(img_point_3_t_1);

    // img_point_3_m_1
    const img_point_3_m_1 = this.add.image(290, 946, "img_point_3_m_1");
    img_point_3_m_1.name = "img_point_3_m_1";
    point_3_21.add(img_point_3_m_1);

    // img_point_3_b_1
    const img_point_3_b_1 = this.add.image(290, 1369, "img_point_3_b_1");
    img_point_3_b_1.name = "img_point_3_b_1";
    point_3_21.add(img_point_3_b_1);

    // bnt_point_3_l_t
    const bnt_point_3_l_t = this.add.image(-99, 531, "bnt_point_3_l");
    bnt_point_3_l_t.name = "bnt_point_3_l_t";
    point_3_21.add(bnt_point_3_l_t);

    // bnt_point_3_l_m
    const bnt_point_3_l_m = this.add.image(-99, 939, "bnt_point_3_l");
    bnt_point_3_l_m.name = "bnt_point_3_l_m";
    point_3_21.add(bnt_point_3_l_m);

    // bnt_point_3_l_b
    const bnt_point_3_l_b = this.add.image(-99, 1356, "bnt_point_3_l");
    bnt_point_3_l_b.name = "bnt_point_3_l_b";
    point_3_21.add(bnt_point_3_l_b);

    // bnt_point_3_r_t
    const bnt_point_3_r_t = this.add.image(685, 531, "bnt_point_3_r");
    bnt_point_3_r_t.name = "bnt_point_3_r_t";
    point_3_21.add(bnt_point_3_r_t);

    // bnt_point_3_r_m
    const bnt_point_3_r_m = this.add.image(685, 939, "bnt_point_3_r");
    bnt_point_3_r_m.name = "bnt_point_3_r_m";
    point_3_21.add(bnt_point_3_r_m);

    // bnt_point_3_r_b
    const bnt_point_3_r_b = this.add.image(685, 1356, "bnt_point_3_r");
    bnt_point_3_r_b.name = "bnt_point_3_r_b";
    point_3_21.add(bnt_point_3_r_b);

    // text_13
    const text_13 = this.add.text(290, 1660, "", {});
    text_13.name = "text_13";
    text_13.setOrigin(0.5, 0);
    text_13.text = "화살표를 눌러 불상의 모습을 바꿔보세요.";
    text_13.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_13.setLineSpacing(10);
    text_13.setWordWrapWidth(950);
    point_3_21.add(text_13);

    // img_point_6_3_21
    const img_point_6_3_21 = this.add.image(
      contentImageX,
      1020,
      "img_point_3_2"
    );
    img_point_6_3_21.name = "img_point_6_3_21";
    img_point_6_3_21.visible = false;
    point_3_21.add(img_point_6_3_21);

    // btn_in_next_1
    const btn_in_next_1 = this.add.image(692, 1707, "btn_next");
    btn_in_next_1.name = "btn_in_next_1";
    btn_in_next_1.visible = false;
    point_3_21.add(btn_in_next_1);

    // point_3_31
    const point_3_31 = this.add.container(0, 0);
    point_3_31.name = "point_3_31";
    point_3_31.visible = false;
    point_3.add(point_3_31);

    // point_3_41
    const point_3_41 = this.add.container(0, 0);
    point_3_41.name = "point_3_41";
    point_3_41.visible = false;
    point_3.add(point_3_41);

    // point_4
    const point_4 = this.add.container(250, 90);
    point_4.visible = false;

    // point_4_11
    const point_4_11 = this.add.container(0, 0);
    point_4_11.name = "point_4_11";
    point_4_11.visible = false;
    point_4.add(point_4_11);

    // text_31
    const text_31 = this.add.text(
      titleX,
      titleY,
      "취향 발견, 모자합 속 화장품",
      titleStyle
    );
    text_31.setOrigin(0.5, 0);
    point_4_11.add(text_31);

    // text_32
    const text_32 = this.add.text(
      -70,
      250,
      "모자합을 관찰해 보고, 여러 자합과 유병은 어떻게사용하는지 알아보세요.",
      {}
    );
    text_32.setStyle({
      color: "#080809",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_32.setLineSpacing(10);
    text_32.setWordWrapWidth(850);
    point_4_11.add(text_32);

    // img_point_4_0
    const img_point_4_0 = this.add.image(288, 1022, "img_point_4_0");
    point_4_11.add(img_point_4_0);

    // btn_point_4_1_on
    const btn_point_4_1_on = this.add.image(-10, 1450 + 52, "btn_point_4_1_on");
    btn_point_4_1_on.name = "btn_point_4_1_on";
    point_4_11.add(btn_point_4_1_on);

    // btn_point_4_2_on
    const btn_point_4_2_on = this.add.image(590, 1450 + 52, "btn_point_4_2_on");
    btn_point_4_2_on.name = "btn_point_4_2_on";
    point_4_11.add(btn_point_4_2_on);

    // btn_point_4_3_on
    const btn_point_4_3_on = this.add.image(290, 1450 + 52, "btn_point_4_3_on");
    btn_point_4_3_on.name = "btn_point_4_3_on";
    point_4_11.add(btn_point_4_3_on);

    const eff_point_4_1_head = this.add.image(
      88,
      1014 + 20,
      "eff_point_4_1_head"
    );
    eff_point_4_1_head.name = "eff_point_4_1_head";
    eff_point_4_1_head.visible = false;
    eff_point_4_1_head.alpha = 0;
    eff_point_4_1_head.alphaTopLeft = 0;
    eff_point_4_1_head.alphaTopRight = 0;
    eff_point_4_1_head.alphaBottomLeft = 0;
    eff_point_4_1_head.alphaBottomRight = 0;
    point_4_11.add(eff_point_4_1_head);

    // eff_point_4_1
    const eff_point_4_1 = this.add.image(502, 1006 + 20, "eff_point_4_1");
    eff_point_4_1.name = "eff_point_4_1";
    eff_point_4_1.visible = false;
    eff_point_4_1.alpha = 0;
    eff_point_4_1.alphaTopLeft = 0;
    eff_point_4_1.alphaTopRight = 0;
    eff_point_4_1.alphaBottomLeft = 0;
    eff_point_4_1.alphaBottomRight = 0;
    point_4_11.add(eff_point_4_1);

    // eff_point_4_2
    const eff_point_4_2 = this.add.image(500, 992 + 20, "eff_point_4_2");
    eff_point_4_2.name = "eff_point_4_2";
    eff_point_4_2.visible = false;
    eff_point_4_2.alpha = 0;
    eff_point_4_2.alphaTopLeft = 0;
    eff_point_4_2.alphaTopRight = 0;
    eff_point_4_2.alphaBottomLeft = 0;
    eff_point_4_2.alphaBottomRight = 0;
    point_4_11.add(eff_point_4_2);

    // eff_point_4_3
    const eff_point_4_3 = this.add.image(503, 979 + 20, "eff_point_4_3");
    eff_point_4_3.name = "eff_point_4_3";
    eff_point_4_3.visible = false;
    eff_point_4_3.alpha = 0;
    eff_point_4_3.alphaTopLeft = 0;
    eff_point_4_3.alphaTopRight = 0;
    eff_point_4_3.alphaBottomLeft = 0;
    eff_point_4_3.alphaBottomRight = 0;
    point_4_11.add(eff_point_4_3);

    // text_49
    const text_49 = this.add.text(288, 1682, "", {});
    text_49.setOrigin(0.5, 0);
    text_49.text = "궁금한 부분을 클릭해 보세요.";
    text_49.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_49.setLineSpacing(2);
    text_49.setWordWrapWidth(900, true);
    point_4_11.add(text_49);

    // point_4_21
    const point_4_21 = this.add.container(0, 0);
    point_4_21.name = "point_4_21";
    point_4_21.visible = false;
    point_4.add(point_4_21);

    // bg_point_4_0
    const bg_point_4_0 = this.add.image(-250, -90, "bg_point_4_0");
    bg_point_4_0.setOrigin(0, 0);
    bg_point_4_0.visible = false;
    point_4_21.add(bg_point_4_0);

    // bg_point_4_2
    const bg_point_4_2 = this.add.image(290, 1514, "bg_point_4_2");
    bg_point_4_2.visible = false;
    point_4_21.add(bg_point_4_2);

    // img_point_4_3
    const img_point_4_3 = this.add.image(15, 1383, "img_point_4_3");
    img_point_4_3.visible = false;
    point_4_21.add(img_point_4_3);

    // img_point_4_1
    const img_point_4_1 = this.add.image(15, 1677, "img_point_4_1");
    img_point_4_1.visible = false;
    point_4_21.add(img_point_4_1);

    // img_point_4_4
    const img_point_4_4 = this.add.image(507, 1667, "img_point_4_4");
    img_point_4_4.visible = false;
    point_4_21.add(img_point_4_4);

    // img_point_4_2
    const img_point_4_2 = this.add.image(507, 1372, "img_point_4_2");
    img_point_4_2.visible = false;
    point_4_21.add(img_point_4_2);

    // text_41
    const text_41 = this.add.text(-171, 1440, "", {});
    text_41.setOrigin(0.5, 0);
    text_41.visible = false;
    text_41.text = "분";
    text_41.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "37pt",
    });
    text_41.setLineSpacing(2);
    text_41.setWordWrapWidth(900, true);
    point_4_21.add(text_41);

    // text_42
    const text_42 = this.add.text(720, 1440, "", {});
    text_42.setOrigin(0.5, 0);
    text_42.visible = false;
    text_42.text = "머릿\n기름";
    text_42.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "37pt",
    });
    text_42.setLineSpacing(2);
    text_42.setWordWrapWidth(900, true);
    point_4_21.add(text_42);

    // text_43
    const text_43 = this.add.text(-136, 1725, "", {});
    text_43.setOrigin(0.5, 0);
    text_43.visible = false;
    text_43.text = "눈썹";
    text_43.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "37pt",
    });
    text_43.setLineSpacing(2);
    text_43.setWordWrapWidth(900, true);
    point_4_21.add(text_43);

    // text_44
    const text_44 = this.add.text(720, 1725, "", {});
    text_44.setOrigin(0.5, 0);
    text_44.visible = false;
    text_44.text = "연지";
    text_44.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "37pt",
    });
    text_44.setLineSpacing(2);
    text_44.setWordWrapWidth(900, true);
    point_4_21.add(text_44);

    // img_point_4_1_face
    const img_point_4_1_face = this.add.image(305, 793, "img_point_4_1_face");
    img_point_4_1_face.visible = false;
    point_4_21.add(img_point_4_1_face);

    // img_point_4_7
    const img_point_4_7 = this.add.image(310, 694, "img_point_4_7");
    img_point_4_7.visible = false;
    point_4_21.add(img_point_4_7);

    // img_point_4_5
    const img_point_4_5 = this.add.image(305, 636, "img_point_4_5");
    img_point_4_5.visible = false;
    point_4_21.add(img_point_4_5);

    // img_point_4_6
    const img_point_4_6 = this.add.image(305, 496, "img_point_4_6");
    img_point_4_6.visible = false;
    point_4_21.add(img_point_4_6);

    // img_point_4_8
    const img_point_4_8 = this.add.image(305, 919, "img_point_4_8");
    img_point_4_8.visible = false;
    point_4_21.add(img_point_4_8);

    // point_4_info_con
    const point_4_info_con = this.add.container(290, 10);
    point_4_info_con.visible = false;
    point_4_21.add(point_4_info_con);

    // bg_point_4_1
    const bg_point_4_1 = this.add.image(0, 25, "bg_point_4_1");
    bg_point_4_1.scaleY = 0.6;
    bg_point_4_1.angle = -180;
    point_4_info_con.add(bg_point_4_1);

    // text_58
    const text_58 = this.add.text(0, -5, "", {});
    text_58.setOrigin(0.5, 0);
    text_58.text = "얼굴에 맞춰 사진을 찍고\n모자합을 선택해 화장을 해 볼까요?";
    text_58.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "37pt",
    });
    text_58.setLineSpacing(2);
    text_58.setWordWrapWidth(900, true);
    point_4_info_con.add(text_58);

    // ico_camera
    const ico_camera = this.add.image(290, 1617, "ico_camera_2");
    ico_camera.visible = false;
    point_4_21.add(ico_camera);

    // point_4_31
    const point_4_31 = this.add.container(0, 0);
    point_4_31.name = "point_4_31";
    point_4_31.visible = false;
    point_4.add(point_4_31);

    // point_4_41
    const point_4_41 = this.add.container(0, 0);
    point_4_41.name = "point_4_41";
    point_4_41.visible = false;
    point_4.add(point_4_41);

    // point_5
    const point_5 = this.add.container(250, 89);
    point_5.visible = false;

    // point_5_11
    const point_5_11 = this.add.container(0, 0);
    point_5_11.name = "point_5_11";
    point_5_11.visible = false;
    point_5.add(point_5_11);

    // bg_img_box_1
    const bg_img_box_1 = this.add.image(290, 948, "bg_img_box");
    bg_img_box_1.visible = false;
    point_5_11.add(bg_img_box_1);

    // text_15
    const text_15 = this.add.text(
      titleX,
      titleY,
      "다양한 빛깔의 청자",
      titleStyle
    );
    text_15.setOrigin(0.5, 0);
    point_5_11.add(text_15);

    const content_div_5_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">청자의 유색은 연회청색부터 녹갈색까지 색의 스펙트럼이 굉장히 넓어요. 청자 기와 유색을 관찰해 보세요.</p>`
      );
    point_5_11.add(content_div_5_1);

    // img_point_5_1
    const img_point_5_1 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_5_1"
    );
    point_5_11.add(img_point_5_1);

    // point_5_21
    const point_5_21 = this.add.container(0, 0);
    point_5_21.name = "point_5_21";
    point_5_21.visible = false;
    point_5.add(point_5_21);

    // text_40
    const text_40 = this.add.text(
      titleX,
      titleY,
      "청자로 장식한 집",
      titleStyle
    );
    text_40.name = "text_40";
    text_40.setOrigin(0.5, 0);
    point_5_21.add(text_40);

    const content_div_5_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">『고려사』에는 궁궐에 청자로 장식한 집, 양이정이 있었다는 기록이 있어요. 현재는 사라져버린 청자 기와로 장식한 집을 만들어볼까요?</p>`
      );
    point_5_21.add(content_div_5_2);

    // bg__quote
    const bg__quote = this.add.image(
      287,
      1052 + (131 - 85) * 2,
      "bg_img_point"
    );
    point_5_21.add(bg__quote);

    // text_17
    const text_17 = this.add.text(284, 860, "", {});
    text_17.name = "text_17";
    text_17.setOrigin(0.5, 0);
    text_17.text =
      "봄 4월 궁궐에 연못을 팠다.\n거기에 정자를 세우고\n그 이름을 養怡亭(양이정)이라 했는데,\n청자 기와로 지붕을 덮었다.";
    text_17.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "35pt",
      align: "center",
    });
    text_17.setLineSpacing(80);
    text_17.setWordWrapWidth(850);
    point_5_21.add(text_17);

    // text_18
    const text_18 = this.add.text(402, 1416, "", {});
    text_18.name = "text_18";
    text_18.setOrigin(0.5, 0);
    text_18.text = "『고려사』 의종 11년(1157)";
    text_18.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_18.setLineSpacing(2);
    text_18.setWordWrapWidth(850);
    point_5_21.add(text_18);

    // point_5_22
    const point_5_22 = this.add.container(0, 0);
    point_5_22.name = "point_5_22";
    point_5_22.visible = false;
    point_5.add(point_5_22);

    // text_19
    const text_19 = this.add.text(
      titleX,
      titleY,
      "청자 기와로 장식한 지붕",
      titleStyle
    );
    text_19.name = "text_19";
    text_19.setOrigin(0.5, 0);
    point_5_22.add(text_19);

    // img_point_5_2
    const img_point_5_2 = this.add.image(286, 1000, "img_point_5_2");
    img_point_5_2.name = "img_point_5_2";
    point_5_22.add(img_point_5_2);

    // box_area_1
    const box_area_1 = this.add.image(298, 580, "box_area_1");
    box_area_1.name = "box_area_1";
    point_5_22.add(box_area_1);

    // btn_plus_1
    const btn_plus_1 = this.add.image(304, 780, "btn_plus");
    btn_plus_1.name = "btn_plus_1";
    point_5_22.add(btn_plus_1);

    // img_point_5_3
    const img_point_5_3 = this.add.image(288, 607, "img_point_5_3");
    img_point_5_3.name = "img_point_5_3";
    img_point_5_3.visible = false;
    point_5_22.add(img_point_5_3);

    // ico_qm_blue
    const ico_qm_blue = this.add.image(187, 640, "ico_qm_blue");
    ico_qm_blue.name = "ico_qm_blue";
    ico_qm_blue.visible = false;
    point_5_22.add(ico_qm_blue);

    // ico_qm_green_1
    const ico_qm_green_1 = this.add.image(105, 1076, "ico_qm_green_1");
    ico_qm_green_1.name = "ico_qm_green_1";
    ico_qm_green_1.visible = false;
    point_5_22.add(ico_qm_green_1);

    // ico_qm_green_2
    const ico_qm_green_2 = this.add.image(611, 640, "ico_qm_green_2");
    ico_qm_green_2.name = "ico_qm_green_2";
    ico_qm_green_2.visible = false;
    point_5_22.add(ico_qm_green_2);

    // ico_gw_1
    const ico_gw_1 = this.add.image(-24, 1623, "ico_gw_1");
    ico_gw_1.name = "ico_gw_1";
    ico_gw_1.setOrigin(0.5, 1);
    ico_gw_1.visible = false;
    point_5_22.add(ico_gw_1);

    // ico_gw_2
    const ico_gw_2 = this.add.image(303, 1623, "ico_gw_2");
    ico_gw_2.name = "ico_gw_2";
    ico_gw_2.setOrigin(0.5, 1);
    ico_gw_2.visible = false;
    point_5_22.add(ico_gw_2);

    // ico_gw_3
    const ico_gw_3 = this.add.image(625, 1623, "ico_gw_3");
    ico_gw_3.name = "ico_gw_3";
    ico_gw_3.setOrigin(0.5, 1);
    ico_gw_3.visible = false;
    point_5_22.add(ico_gw_3);

    // text_20
    const text_20 = this.add.text(titleX + 10, 240, "", {});
    text_20.name = "text_20";
    text_20.setOrigin(0.5, 0);
    text_20.visible = false;
    text_20.text =
      "청자 기와에 맞는 빛깔을 찾아\n드래그해서 지붕에 올려주세요.";
    text_20.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_20.setLineSpacing(2);
    text_20.setWordWrapWidth(850);
    point_5_22.add(text_20);

    // point_5_23
    const point_5_23 = this.add.container(0, 0);
    point_5_23.name = "point_5_23";
    point_5_23.visible = false;
    point_5.add(point_5_23);

    const point_5_23_title = this.add.text(
      titleX,
      titleY,
      "청자정 완성!",
      titleStyle
    );
    point_5_23_title.name = "point_5_23_title";
    point_5_23_title.setOrigin(0.5, 0);
    point_5_23.add(point_5_23_title);

    const content_div_5_3 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">양이정을 고증해서 만든 청자정을 박물관 거울못에서 만나보세요.</p>`
      );
    content_div_5_3.name = "text_21";
    point_5_23.add(content_div_5_3);

    // img_point_5_4
    const img_point_5_4 = this.add.image(
      contentImageX,
      contentImageY - 94,
      "img_point_5_4"
    );
    img_point_5_4.name = "img_point_5_4";
    point_5_23.add(img_point_5_4);

    // point_5_31
    const point_5_31 = this.add.container(0, 0);
    point_5_31.name = "point_5_31";
    point_5_31.visible = false;
    point_5.add(point_5_31);

    // point_5_41
    const point_5_41 = this.add.container(0, 0);
    point_5_41.name = "point_5_41";
    point_5_41.visible = false;
    point_5.add(point_5_41);

    // point_6
    const point_6 = this.add.container(250, 89);
    point_6.visible = false;

    // point_6_11
    const point_6_11 = this.add.container(0, 0);
    point_6_11.name = "point_6_11";
    point_6_11.visible = false;
    point_6.add(point_6_11);

    // bg_img_box_4
    const bg_img_box_4 = this.add.image(290, 948, "bg_img_box");
    bg_img_box_4.visible = false;
    point_6_11.add(bg_img_box_4);

    // text_33
    const text_33 = this.add.text(
      titleX,
      titleY,
      "금속활자 사용 설명서",
      titleStyle
    );
    text_33.setOrigin(0.5, 0);
    point_6_11.add(text_33);

    const content_div_6_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text" style="letter-spacing:-0.024em">산덮을 '복'은 잘 쓰지 않는 글자로 일반 사전에는 수록되어 있지 않아요. 산덮을 '복'의 획순을 살펴보세요!</p>`
      );
    point_6_11.add(content_div_6_1);

    // img_point_6_1_0 285, 1028
    const img_point_6_1_0 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_6_1_0"
    );
    point_6_11.add(img_point_6_1_0);

    // img_point_6_1_1
    const img_point_6_1_1 = this.add.image(253, 699 + 116, "img_point_6_1_1");
    img_point_6_1_1.name = "img_point_6_1_1";
    img_point_6_1_1.visible = false;
    point_6_11.add(img_point_6_1_1);

    // img_point_6_1_2
    const img_point_6_1_2 = this.add.image(21, 1123 + 116, "img_point_6_1_2");
    img_point_6_1_2.name = "img_point_6_1_2";
    img_point_6_1_2.visible = false;
    point_6_11.add(img_point_6_1_2);

    // img_point_6_1_3
    const img_point_6_1_3 = this.add.image(364, 1007 + 116, "img_point_6_1_3");
    img_point_6_1_3.name = "img_point_6_1_3";
    img_point_6_1_3.visible = false;
    point_6_11.add(img_point_6_1_3);

    // img_point_6_1_4
    const img_point_6_1_4 = this.add.image(396, 1326 + 116, "img_point_6_1_4");
    img_point_6_1_4.name = "img_point_6_1_4";
    img_point_6_1_4.visible = false;
    point_6_11.add(img_point_6_1_4);

    // btn_in_next_2
    const btn_in_next_2 = this.add.image(691, 1705, "btn_next");
    btn_in_next_2.name = "btn_in_next_2";
    btn_in_next_2.visible = false;
    point_6_11.add(btn_in_next_2);

    // point_6_21
    const point_6_21 = this.add.container(0, 0);
    point_6_21.name = "point_6_21";
    point_6_21.visible = false;
    point_6.add(point_6_21);

    // bg_img_box_3
    const bg_img_box_3 = this.add.image(290, 948, "bg_img_box");
    bg_img_box_3.visible = false;
    point_6_21.add(bg_img_box_3);

    // text_25
    const text_25 = this.add.text(titleX, titleY, "금속활자 인출", titleStyle);
    text_25.name = "text_25";
    text_25.setOrigin(0.5, 0);
    point_6_21.add(text_25);

    // text_26
    const text_26 = this.add.text(
      titleX,
      titleY + 136,
      "조판대에 ‘고’, ‘려’를 찾아 배열해 보세요.",
      {}
    );
    text_26.name = "text_26";
    text_26.setOrigin(0.5, 0);
    text_26.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_26.setLineSpacing(2);
    text_26.setWordWrapWidth(850, true);
    point_6_21.add(text_26);

    // text_39
    const text_39 = this.add.text(290, 320, "", {});
    text_39.name = "text_39";
    text_39.setOrigin(0.5, 0);
    text_39.text = "※ 좌우반전 활자는 찍었을 때 정방향이 돼요.";
    text_39.setStyle({
      align: "center",
      color: "#522500",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "27pt",
    });
    text_39.setLineSpacing(2);
    text_39.setWordWrapWidth(800);
    point_6_21.add(text_39);

    // box_con
    const box_con = this.add.container(120, 1359);
    box_con.name = "box_con";
    point_6_21.add(box_con);

    // bg_point_6_2_1
    const bg_point_6_2_1 = this.add.image(170, 0, "bg_point_6_2_1");
    box_con.add(bg_point_6_2_1);

    // box_dotted
    const box_dotted = this.add.image(0, 5, "box_dotted");
    box_dotted.name = "box_dotted";
    box_con.add(box_dotted);

    // box_dotted_1
    const box_dotted_1 = this.add.image(345, 5, "box_dotted");
    box_dotted_1.name = "box_dotted_1";
    box_con.add(box_dotted_1);

    // type_con
    const type_con = this.add.container(-50, 609);
    type_con.name = "type_con";
    point_6_21.add(type_con);

    // img_point_6_2_1
    const img_point_6_2_1 = this.add.image(0, 0, "img_point_6_2_1");
    img_point_6_2_1.name = "img_point_6_2_1";
    type_con.add(img_point_6_2_1);

    // img_point_6_2_2
    const img_point_6_2_2 = this.add.image(230, 0, "img_point_6_2_2");
    img_point_6_2_2.name = "img_point_6_2_2";
    type_con.add(img_point_6_2_2);

    // img_point_6_2_3
    const img_point_6_2_3 = this.add.image(450, 0, "img_point_6_2_3");
    img_point_6_2_3.name = "img_point_6_2_3";
    type_con.add(img_point_6_2_3);

    // img_point_6_2_4
    const img_point_6_2_4 = this.add.image(680, 0, "img_point_6_2_4");
    img_point_6_2_4.name = "img_point_6_2_4";
    type_con.add(img_point_6_2_4);

    // img_point_6_2_5
    const img_point_6_2_5 = this.add.image(0, 240, "img_point_6_2_5");
    img_point_6_2_5.name = "img_point_6_2_5";
    type_con.add(img_point_6_2_5);

    // img_point_6_2_6
    const img_point_6_2_6 = this.add.image(230, 240, "img_point_6_2_6");
    img_point_6_2_6.name = "img_point_6_2_6";
    type_con.add(img_point_6_2_6);

    // img_point_6_2_7
    const img_point_6_2_7 = this.add.image(450, 240, "img_point_6_2_7");
    img_point_6_2_7.name = "img_point_6_2_7";
    type_con.add(img_point_6_2_7);

    // img_point_6_2_8
    const img_point_6_2_8 = this.add.image(680, 240, "img_point_6_2_8");
    img_point_6_2_8.name = "img_point_6_2_8";
    type_con.add(img_point_6_2_8);

    // layer_point_6_2_1
    const layer_point_6_2_1 = this.add.image(287, 1360, "layer_point_6_2_1");
    layer_point_6_2_1.name = "layer_point_6_2_1";
    layer_point_6_2_1.scaleX = 0.8710257104749312;
    layer_point_6_2_1.scaleY = 0.8710257104749312;
    layer_point_6_2_1.visible = false;
    point_6_21.add(layer_point_6_2_1);

    // layer_point_6_2_2
    const layer_point_6_2_2 = this.add.image(
      contentImageX,
      contentImageY - 490,
      "layer_point_6_2_2"
    );
    layer_point_6_2_2.name = "layer_point_6_2_2";
    layer_point_6_2_2.visible = false;
    point_6_21.add(layer_point_6_2_2);

    // img_point_6_2_c
    const img_point_6_2_c = this.add.image(290, 1268 + 26, "img_point_6_2_c");
    img_point_6_2_c.name = "img_point_6_2_c";
    img_point_6_2_c.scaleX = 0.8775390882080214;
    img_point_6_2_c.scaleY = 0.8775390882080214;
    img_point_6_2_c.visible = false;
    point_6_21.add(img_point_6_2_c);

    // img_point_6_2_ex_1
    const img_point_6_2_ex_1 = this.add.image(656, 793, "img_point_6_2_4");
    img_point_6_2_ex_1.name = "img_point_6_2_ex_1";
    img_point_6_2_ex_1.angle = -20;
    img_point_6_2_ex_1.visible = false;
    point_6_21.add(img_point_6_2_ex_1);

    // img_point_6_2_ex_2
    const img_point_6_2_ex_2 = this.add.image(451, 846, "img_point_6_2_5");
    img_point_6_2_ex_2.name = "img_point_6_2_ex_2";
    img_point_6_2_ex_2.scaleX = 0.7;
    img_point_6_2_ex_2.scaleY = 0.7;
    img_point_6_2_ex_2.angle = 25;
    img_point_6_2_ex_2.visible = false;
    point_6_21.add(img_point_6_2_ex_2);

    // point_6_31
    const point_6_31 = this.add.container(0, 0);
    point_6_31.name = "point_6_31";
    point_6_31.visible = false;
    point_6.add(point_6_31);

    // point_6_41
    const point_6_41 = this.add.container(0, 0);
    point_6_41.name = "point_6_41";
    point_6_41.visible = false;
    point_6.add(point_6_41);

    // point_7
    const point_7 = this.add.container(250, 90);
    point_7.visible = false;

    // point_7_11
    const point_7_11 = this.add.container(0, 0);
    point_7_11.name = "point_7_11";
    point_7_11.visible = false;
    point_7.add(point_7_11);

    // text_37
    const text_37 = this.add.text(
      titleX,
      titleY,
      "범종에 그려진 무늬의 상징",
      titleStyle
    );
    text_37.name = "text_37";
    text_37.setOrigin(0.5, 0);
    point_7_11.add(text_37);

    const content_div_7_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">범종 꼭대기의 종을 거는 고리를 살펴보세요. 범종을 지키는 듯한 모습으로 입을 벌리고 앉아있는 상상의 동물은 무엇일까요?</p>`
      );
    content_div_7_1.name = "content_div_7_1"; // case
    point_7_11.add(content_div_7_1);

    // point_7_11_1
    const point_7_11_1 = this.add.container(contentImageX, 676);
    point_7_11_1.name = "point_7_11_1";
    point_7_11.add(point_7_11_1);

    // img_point_7_1
    const img_point_7_1 = this.add.image(0, 417, "img_point_7_1");
    img_point_7_1.name = "img_point_7_1";
    point_7_11_1.add(img_point_7_1);

    // eff_point_7_1
    const eff_point_7_1 = this.add.image(14, 68, "eff_point_7_1");
    eff_point_7_1.setScale(0.8);
    eff_point_7_1.name = "eff_point_7_1";
    point_7_11_1.add(eff_point_7_1);

    // btn_word_plus
    const btn_word_plus = this.add.image(16, 238, "btn_word_plus");
    btn_word_plus.name = "btn_word_plus";
    point_7_11_1.add(btn_word_plus);

    // point_7_11_2
    const point_7_11_2 = this.add.container(contentImageX, 1072);
    point_7_11_2.name = "point_7_11_2";
    point_7_11_2.visible = false;
    point_7_11.add(point_7_11_2);

    // img_point_7_2
    const img_point_7_2 = this.add.image(0, 0, "img_point_7_2");
    img_point_7_2.name = "img_point_7_2";
    point_7_11_2.add(img_point_7_2);

    // img_point_7_3
    const img_point_7_3 = this.add.image(0, 0, "img_point_7_3");
    img_point_7_3.name = "img_point_7_3";
    img_point_7_3.visible = false;
    point_7_11_2.add(img_point_7_3);

    // ico_bow_1
    const ico_bow_1 = this.add.image(422, 0, "ico_bow");
    ico_bow_1.name = "ico_bow_1";
    point_7_11_2.add(ico_bow_1);

    // text_50
    const text_50 = this.add.text(-329, -506, "", {});
    text_50.name = "text_50";
    text_50.setOrigin(0.5, 0);
    text_50.visible = false;
    text_50.text = "정면 용뉴";
    text_50.setStyle({
      color: "#ffffff",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_50.setLineSpacing(2);
    text_50.setWordWrapWidth(800);
    point_7_11_2.add(text_50);

    // text_51
    const text_51 = this.add.text(0, 134 + 446 + 20 + 10, "", {});
    text_51.name = "text_51";
    text_51.setOrigin(0.5, 0);
    text_51.text = "사진을 넘겨 다른 면을 살펴보세요. ";
    text_51.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_51.setLineSpacing(2);
    text_51.setWordWrapWidth(800);
    point_7_11_2.add(text_51);

    // ico_bow_1_l
    const ico_bow_1_l = this.add.image(-422, 0, "ico_bow");
    ico_bow_1_l.name = "ico_bow_1_l";
    ico_bow_1_l.angle = -180;
    ico_bow_1_l.visible = false;
    point_7_11_2.add(ico_bow_1_l);

    // point_7_12
    const point_7_12 = this.add.container(0, 0);
    point_7_12.name = "point_7_12";
    point_7_12.visible = false;
    point_7.add(point_7_12);

    // text_76
    const text_76 = this.add.text(
      titleX,
      titleY,
      "범종에 그려진 무늬의 상징",
      titleStyle
    );
    text_76.name = "text_76";
    text_76.setOrigin(0.5, 0);
    point_7_12.add(text_76);

    const content_div_7_3 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">범종에는 다양한 연꽃이 새겨져 있어요. 연꽃잎을 위로 세운 모습을 찾아보세요!</p>`
      );
    content_div_7_3.name = "content_div_7_3";
    point_7_12.add(content_div_7_3);

    // point_7_12_1
    const point_7_12_1 = this.add.container(contentImageX, 676);
    point_7_12_1.name = "point_7_12_1";
    point_7_12.add(point_7_12_1);

    // img_point_2
    const img_point_2 = this.add.image(0, 417, "img_point_7_1");
    img_point_2.name = "img_point_2";
    point_7_12_1.add(img_point_2);

    // eff_point7_2
    const eff_point7_2 = this.add.image(6, 134 + 52, "eff_point7_2");
    eff_point7_2.setScale(0.83);
    eff_point7_2.name = "eff_point7_2";
    point_7_12_1.add(eff_point7_2);

    // btn_word_plus_1
    const btn_word_plus_1 = this.add.image(10, 167 + 52, "btn_word_plus");
    btn_word_plus_1.name = "btn_word_plus_1";
    point_7_12_1.add(btn_word_plus_1);

    // point_7_12_2
    const point_7_12_2 = this.add.container(contentImageX, 1034 + 58);
    point_7_12_2.name = "point_7_12_2";
    point_7_12_2.visible = false;
    point_7_12.add(point_7_12_2);

    // img_point_3
    const img_point_3 = this.add.image(0, 0, "img_point_7_4");
    img_point_3.name = "img_point_3";
    point_7_12_2.add(img_point_3);

    // img_point_4
    const img_point_4 = this.add.image(0, 0, "img_point_7_5");
    img_point_4.name = "img_point_4";
    img_point_4.visible = false;
    point_7_12_2.add(img_point_4);

    // ico_bow_2
    const ico_bow_2 = this.add.image(422, 0, "ico_bow");
    ico_bow_2.name = "ico_bow_2";
    point_7_12_2.add(ico_bow_2);

    // text_53
    const text_53 = this.add.text(0, 655 - 70 + 5, "", {});
    text_53.name = "text_53";
    text_53.setOrigin(0.5, 0);
    text_53.text = "사진을 넘겨 다른 면을 살펴보세요. ";
    text_53.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_53.setLineSpacing(2);
    text_53.setWordWrapWidth(800);
    point_7_12_2.add(text_53);

    // ico_bow_2_l
    const ico_bow_2_l = this.add.image(-422, 0, "ico_bow");
    ico_bow_2_l.name = "ico_bow_2_l";
    ico_bow_2_l.angle = -180;
    ico_bow_2_l.visible = false;
    point_7_12_2.add(ico_bow_2_l);

    // point_7_13
    const point_7_13 = this.add.container(0, 0);
    point_7_13.name = "point_7_13";
    point_7_13.visible = false;
    point_7.add(point_7_13);

    // text_82
    const text_82 = this.add.text(
      titleX,
      titleY,
      "범종에 그려진 무늬의 상징",
      titleStyle
    );
    text_82.name = "text_82";
    text_82.setOrigin(0.5, 0);
    point_7_13.add(text_82);

    const content_div_7_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">범종 아래 네모난 구획에 적혀진 명문을 살펴보세요! 이 종의 이름에서 “청녕 4년”은 어떤 의미일까요?</p>`
      );
    content_div_7_2.name = "content_div_7_2"; // case change
    point_7_13.add(content_div_7_2);

    // point_7_13_1
    const point_7_13_1 = this.add.container(contentImageX, 676);
    point_7_13_1.name = "point_7_13_1";
    point_7_13.add(point_7_13_1);

    // img_point_5
    const img_point_5 = this.add.image(0, 417, "img_point_7_1");
    img_point_5.name = "img_point_5";
    point_7_13_1.add(img_point_5);

    // eff_point_1
    const eff_point_1 = this.add.image(14, 814 - 54, "eff_point_7_3");
    eff_point_1.setScale(0.88);
    eff_point_1.name = "eff_point_1";
    point_7_13_1.add(eff_point_1);

    // btn_word_plus_2
    const btn_word_plus_2 = this.add.image(
      10,
      690 - 54 - 16 - 10,
      "btn_word_plus"
    );
    btn_word_plus_2.name = "btn_word_plus_2";
    point_7_13_1.add(btn_word_plus_2);

    // point_7_13_2
    const point_7_13_2 = this.add.container(0, 0);
    point_7_13_2.name = "point_7_13_2";
    point_7_13_2.visible = false;
    point_7_13.add(point_7_13_2);

    // img_point_7_6
    const img_point_7_6 = this.add.image(
      contentImageX,
      contentImageY - 46,
      "img_point_7_6"
    );
    img_point_7_6.name = "img_point_7_6";
    point_7_13_2.add(img_point_7_6);

    // point_7_21
    const point_7_21 = this.add.container(0, 0);
    point_7_21.name = "point_7_21";
    point_7_21.visible = false;
    point_7.add(point_7_21);

    // 범종 배경
    const bg_point_7_21 = this.add.image(-222, -100, "bg_point_7_21");
    bg_point_7_21.setOrigin(0, 0);
    point_7_21.add(bg_point_7_21);

    // text_75
    const text_75 = this.add.text(220, 416, "", {});
    text_75.setOrigin(0, 0.5);
    text_75.text =
      "오늘날까지 범종은\n사찰 전각에 매달아 놓고\n아침, 저녁으로 예불할 때 친답니다.\n \n나직하게 울려 퍼지는 한 사찰의 타종 소리를 들어보세요.\n한결 마음이 편안해질 거에요.";
    text_75.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "53px",
    });
    text_75.setLineSpacing(57);
    text_75.setWordWrapWidth(800);
    point_7_21.add(text_75);

    let text_75_textExWord = [
      {
        word: "예불",
        ex: "*예불:\n부처나 보살에게\n예배하는 의식이에요.",
      },
    ];
    Util.setTextEx(
      this,
      point_7_21,
      text_75,
      text_75_textExWord,
      text_75.width,
      "btn_word_plus"
    );

    // point_7_31
    const point_7_31 = this.add.container(0, 0);
    point_7_31.name = "point_7_31";
    point_7_31.visible = false;
    point_7.add(point_7_31);

    // point_7_41
    const point_7_41 = this.add.container(0, 0);
    point_7_41.name = "point_7_41";
    point_7_41.visible = false;
    point_7.add(point_7_41);

    // point_8
    const point_8 = this.add.container(250, 90);
    point_8.visible = false;

    // point_8_11
    const point_8_11 = this.add.container(0, 0);
    point_8_11.name = "point_8_11";
    point_8_11.visible = false;
    point_8.add(point_8_11);

    // text_35
    const text_35 = this.add.text(
      titleX,
      77,
      "향완을 장식한 다양한 무늬",
      titleStyle
    );
    text_35.name = "text_35";
    text_35.setOrigin(0.5, 0);
    point_8_11.add(text_35);

    const content_div_8_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text" style="margin-top:-78px">고려시대 향완은 무늬를 <a class="ex_popup_title" data-content="* 은입사:<br />청동이나 철, 구리 등 금속 그릇에 은실을 이용하여 무늬를 박아넣은 새김기법을 말해요.">은입사</a> 기법으로 새겼어요. 향완 몸체 중간에 새겨진 범자, ॐ(옴, Om)을 찾아보세요!</p>`
      );
    content_div_8_1.name = "content_div_8_1"; // case
    point_8_11.add(content_div_8_1);

    // img_point_8_1
    const img_point_8_1 = this.add.image(
      contentImageX,
      1060 - 10,
      "img_point_8_1"
    );
    img_point_8_1.name = "img_point_8_1";
    point_8_11.add(img_point_8_1);

    // eff_point_8_1
    const eff_point_8_1 = this.add.image(
      contentImageX,
      864 - 10,
      "eff_point_8_1"
    );
    eff_point_8_1.name = "eff_point_8_1";
    point_8_11.add(eff_point_8_1);

    // img_point_8_2
    const img_point_8_2 = this.add.image(
      contentImageX,
      1064 + 40,
      "img_point_8_2"
    );
    img_point_8_2.name = "img_point_8_2";
    img_point_8_2.visible = false;
    point_8_11.add(img_point_8_2);

    // btn_word_plus_3
    const btn_word_plus_3 = this.add.image(287, 957, "btn_word_plus");
    btn_word_plus_3.name = "btn_word_plus_3";
    point_8_11.add(btn_word_plus_3);

    // point_8_12
    const point_8_12 = this.add.container(0, 0);
    point_8_12.name = "point_8_12";
    point_8_12.visible = false;
    point_8.add(point_8_12);

    // text_90
    const text_90 = this.add.text(
      titleX,
      titleY,
      "향완을 장식한 다양한 무늬",
      titleStyle
    );
    text_90.name = "text_90";
    text_90.setOrigin(0.5, 0);
    point_8_12.add(text_90);

    const content_div_8_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">향완 아랫부분에 새겨진 용을 찾아보세요!</p>`
      );
    content_div_8_2.name = "content_div_8_2"; // case
    point_8_12.add(content_div_8_2);

    // img_point_8_12
    const img_point_8_12 = this.add.image(290, 1060, "img_point_8_1");
    img_point_8_12.name = "img_point_8_12";
    point_8_12.add(img_point_8_12);

    // eff_point_8_2
    const eff_point_8_2 = this.add.image(307, 1318, "eff_point_8_2");
    eff_point_8_2.name = "eff_point_8_2";
    point_8_12.add(eff_point_8_2);

    // img_point_8_3
    const img_point_8_3 = this.add.image(290, 1063, "img_point_8_3");
    img_point_8_3.name = "img_point_8_3";
    img_point_8_3.visible = false;
    point_8_12.add(img_point_8_3);

    // img_point_8_4
    const img_point_8_4 = this.add.image(290, 1063, "img_point_8_4");
    img_point_8_4.name = "img_point_8_4";
    img_point_8_4.visible = false;
    point_8_12.add(img_point_8_4);

    // ico_bow_3
    const ico_bow_3 = this.add.image(715, 1104, "ico_bow");
    ico_bow_3.name = "ico_bow_3";
    ico_bow_3.visible = false;
    point_8_12.add(ico_bow_3);

    // ico_bow_3_l
    const ico_bow_3_l = this.add.image(-135, 1104, "ico_bow");
    ico_bow_3_l.name = "ico_bow_3_l";
    ico_bow_3_l.angle = -180;
    ico_bow_3_l.visible = false;
    point_8_12.add(ico_bow_3_l);

    // text_47
    const text_47 = this.add.text(
      titleX,
      1680,
      "사진을 넘겨 다른 면을 살펴보세요.",
      {}
    );
    text_47.name = "text_47";
    text_47.setOrigin(0.5, 0);
    text_47.visible = false;
    text_47.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    point_8_12.add(text_47);

    // text_48
    const text_48 = this.add.text(285, 472, "", {});
    text_48.name = "text_48";
    text_48.setOrigin(0.5, 0);
    text_48.visible = false;
    text_48.text = "[받침부에 새겨진 용의 모습 정면]";
    text_48.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_48.setLineSpacing(2);
    text_48.setWordWrapWidth(800);
    point_8_12.add(text_48);

    // btn_word_plus_4
    const btn_word_plus_4 = this.add.image(438, 1276, "btn_word_plus");
    btn_word_plus_4.name = "btn_word_plus_4";
    point_8_12.add(btn_word_plus_4);

    // point_8_21
    const point_8_21 = this.add.container(0, 0);
    point_8_21.name = "point_8_21";
    point_8_21.visible = false;
    point_8.add(point_8_21);

    // text_92
    const text_92 = this.add.text(
      titleX,
      titleY,
      "향완 사용설명서",
      titleStyle
    );
    text_92.name = "text_92";
    text_92.setOrigin(0.5, 0);
    point_8_21.add(text_92);

    const content_div_8_3 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">향완의 모습은 고려시대의 그림에서도 볼 수 있어요.</p>`
      );
    content_div_8_3.name = "content_div_8_3"; // case
    point_8_21.add(content_div_8_3);

    // img_point_8_5
    const img_point_8_5 = this.add.image(290, 1060, "img_point_8_5");
    img_point_8_5.name = "img_point_8_5";
    point_8_21.add(img_point_8_5);

    // img_point_8_6
    const img_point_8_6 = this.add.image(290, 1060, "img_point_8_6");
    img_point_8_6.name = "img_point_8_6";
    img_point_8_6.visible = false;
    point_8_21.add(img_point_8_6);

    // ico_bow_4
    const ico_bow_4 = this.add.image(715, 1085, "ico_bow");
    ico_bow_4.name = "ico_bow_4";
    point_8_21.add(ico_bow_4);

    // ico_bow_4_l
    const ico_bow_4_l = this.add.image(-135, 1085, "ico_bow");
    ico_bow_4_l.name = "ico_bow_4_l";
    ico_bow_4_l.angle = -180;
    ico_bow_4_l.visible = false;
    point_8_21.add(ico_bow_4_l);

    // text_point_8_5
    const text_point_8_5 = this.add.text(295, 1485, "", {});
    text_point_8_5.name = "text_point_8_5";
    text_point_8_5.setOrigin(0.5, 0);
    text_point_8_5.text =
      "<오백나한도 중 제일백칠십 혜군고존자>, 고려, 보물, 덕수 5574";
    text_point_8_5.setStyle({
      color: "#FFF",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "29px",
      align: "center",
    });

    text_point_8_5.setFixedSize(900, 0);
    text_point_8_5.setPadding(0, 25, 0, 25);
    point_8_21.add(text_point_8_5);

    // text_54
    const text_54 = this.add.text(
      titleX,
      1680,
      "사진을 넘겨 그림 속 향완을 확인해 보세요.",
      {}
    );
    text_54.name = "text_54";
    text_54.setOrigin(0.5, 0);
    text_54.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    point_8_21.add(text_54);

    // point_8_22
    const point_8_22 = this.add.container(0, 0);
    point_8_22.name = "point_8_22";
    point_8_22.visible = false;
    point_8.add(point_8_22);

    // img_point_8_7
    const img_point_8_7 = this.add.image(290, 920, "img_point_8_7");
    img_point_8_7.name = "img_point_8_7";
    point_8_22.add(img_point_8_7);

    // img_point_8_11
    const img_point_8_11 = this.add.image(290, 960, "img_point_8_11");
    img_point_8_11.name = "img_point_8_11";
    img_point_8_11.visible = false;
    point_8_22.add(img_point_8_11);

    // bg_point_8_1
    const bg_point_8_1 = this.add.image(290, 1535, "bg_point_8_1");
    bg_point_8_1.name = "bg_point_8_1";
    point_8_22.add(bg_point_8_1);

    // img_point_8_9
    const img_point_8_9 = this.add.image(290, 1535, "img_point_8_9");
    img_point_8_9.name = "img_point_8_9";
    point_8_22.add(img_point_8_9);

    // img_point_8_8
    const img_point_8_8 = this.add.image(0, 1535, "img_point_8_8");
    img_point_8_8.name = "img_point_8_8";
    point_8_22.add(img_point_8_8);

    // img_point_8_10
    const img_point_8_10 = this.add.image(580, 1535, "img_point_8_10");
    img_point_8_10.name = "img_point_8_10";
    point_8_22.add(img_point_8_10);

    // eff_point_8_3
    const eff_point_8_3 = this.add.image(163, 548, "eff_point_8_3");
    eff_point_8_3.name = "eff_point_8_3";
    eff_point_8_3.visible = false;
    point_8_22.add(eff_point_8_3);

    // text_55
    const text_55 = this.add.text(285, 1666, "", {});
    text_55.name = "text_55";
    text_55.setOrigin(0.5, 0);
    text_55.text = "<나전향상>, 고려, 덕수 2510 참고";
    text_55.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_55.setLineSpacing(2);
    text_55.setWordWrapWidth(800);
    point_8_22.add(text_55);

    // text_94
    const text_94 = this.add.text(
      titleX,
      titleY,
      "향완 사용설명서",
      titleStyle
    );
    text_94.name = "text_94";
    text_94.setOrigin(0.5, 0);
    point_8_22.add(text_94);

    const content_div_8_4 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text" style="text-align:center;letter-spacing:-0.04em;margin-top:-78px">향완 안에 산 모양으로 재를 쌓고 불 붙인 <a class="ex_popup_title" data-content="* 향탄:<br />향탄은 향을 피우는 데 쓰는 숯이에요.">향탄</a>을 넣어놨어요. <a class="ex_popup_title" data-content="* 향전:<br />향전은 고려시대 향의 종류 중 하나로, 다양한 향의 분말을 나무 틀에 넣어 찍어 만든 것이에요.">향전</a>을 골라 향탄 위에 올려 향을 피워주세요.</p>`
      );
    content_div_8_4.name = "content_div_8_4"; // case
    point_8_22.add(content_div_8_4);

    // point_8_31
    const point_8_31 = this.add.container(-2178.659423828125, -811.95263671875);
    point_8_31.name = "point_8_31";
    point_8_31.visible = false;
    point_8.add(point_8_31);

    // point_8_41
    const point_8_41 = this.add.container(-2178.659423828125, -811.95263671875);
    point_8_41.name = "point_8_41";
    point_8_41.visible = false;
    point_8.add(point_8_41);

    // btn_next
    const btn_next = this.add.image(942, 1796, "btn_next");

    //btn_close
    const btn_close = this.add.image(924, 65, "btn_close");
    btn_close.setOrigin(0, 0);

    this.temp_p3_name = temp_p3_name;
    this.temp_p3_location = temp_p3_location;
    this.img_lp = img_lp;
    this.temp_p3_title = temp_p3_title;
    this.temp_p3_text = temp_p3_text;
    this.temp_p3 = temp_p3;
    this.point_n_41_text = point_n_41_text;
    this.temp_p4 = temp_p4;
    this.prg_1 = prg_1;
    this.prg_2 = prg_2;
    this.prg_3 = prg_3;
    this.prg_4 = prg_4;
    this.prg_con = prg_con;
    this.point_1 = point_1;
    this.point_2 = point_2;
    this.point_3 = point_3;
    this.point_4 = point_4;
    this.point_5 = point_5;
    this.point_6 = point_6;
    this.point_7 = point_7;
    this.point_8 = point_8;
    this.btn_next = btn_next;
    this.btn_close = btn_close;

    this.events.emit("scene-awake");
  }

  public temp_p3_name!: Phaser.GameObjects.Text;
  public temp_p3_location!: Phaser.GameObjects.Text;
  public img_lp!: Phaser.GameObjects.Image;
  public temp_p3_title!: Phaser.GameObjects.Text;
  public temp_p3_text!: Phaser.GameObjects.DOMElement;
  public temp_p3!: Phaser.GameObjects.Container;
  public point_n_41_text!: Phaser.GameObjects.DOMElement;
  public temp_p4!: Phaser.GameObjects.Container;
  public prg_1!: Phaser.GameObjects.Container;
  public prg_2!: Phaser.GameObjects.Container;
  public prg_3!: Phaser.GameObjects.Container;
  public prg_4!: Phaser.GameObjects.Container;
  public prg_con!: Phaser.GameObjects.Container;
  public point_1!: Phaser.GameObjects.Container;
  public point_2!: Phaser.GameObjects.Container;
  public point_3!: Phaser.GameObjects.Container;
  public point_4!: Phaser.GameObjects.Container;
  public point_5!: Phaser.GameObjects.Container;
  public point_6!: Phaser.GameObjects.Container;
  public point_7!: Phaser.GameObjects.Container;
  public point_8!: Phaser.GameObjects.Container;
  public btn_next!: Phaser.GameObjects.Image;
  public btn_close!: Phaser.GameObjects.Image;

  user: any;
  imageDragViewerConf: any;
  preload() {
    document.body.style.backgroundColor = "#83BBFF";
    this.cameras.main.setBackgroundColor(0x83bbff);
    this.load.pack("itrcop-asset-pack", itrcdiAssetPackUrl);

    let user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
      this.user.lastPage = "MapPlay";
      localStorage.setItem("user", JSON.stringify(this.user));
    } else {
      this.scene.start("Intro");
    }

    let paramsObj: any = Util.getUrlParams(window.location);
    if (paramsObj.point) {
      if (!this.user) {
        this.user = {};
      }
      this.user.currentPoint = "point_" + paramsObj.point;
    }

    //http://localhost:8080/?page=ItrcDiversity&point=6&step=0
    this.user.currentPoint = this.user.currentPoint
      ? this.user.currentPoint
      : "point_1";
    this.user.currentPointSec = paramsObj.step ? parseInt(paramsObj.step) : -1;

    //test
    // this.user.currentPoint = "point_4";
    // this.user.currentPointSec = 0;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    switch (this.user.currentPoint) {
      case "point_1":
        Util.svgImgLoadCheckFronPack(point1AssetPackUrl, () => {
          this.load.pack("point1-asset-pack", point1AssetPackUrl);
        });
        this.load.pack("point1-asset-pack", point1AssetPackUrl);
        break;
      case "point_2":
        Util.svgImgLoadCheckFronPack(point2AssetPackUrl, () => {
          this.load.pack("point2-asset-pack", point2AssetPackUrl);
        });
        this.load.pack("point2-asset-pack", point2AssetPackUrl);
        break;
      case "point_3":
        Util.svgImgLoadCheckFronPack(point3AssetPackUrl, () => {
          this.load.pack("point3-asset-pack", point3AssetPackUrl);
        });
        this.load.pack("point3-asset-pack", point3AssetPackUrl);
        break;
      case "point_4":
        Util.svgImgLoadCheckFronPack(point4AssetPackUrl, () => {
          this.load.pack("point4-asset-pack", point4AssetPackUrl);
        });
        this.load.pack("point4-asset-pack", point4AssetPackUrl);
        break;
      case "point_5":
        Util.svgImgLoadCheckFronPack(point5AssetPackUrl, () => {
          this.load.pack("point5-asset-pack", point5AssetPackUrl);
        });
        this.load.pack("point5-asset-pack", point5AssetPackUrl);
        break;
      case "point_6":
        Util.svgImgLoadCheckFronPack(point6AssetPackUrl, () => {
          this.load.pack("point6-asset-pack", point6AssetPackUrl);
        });
        this.load.pack("point6-asset-pack", point6AssetPackUrl);
        break;
      case "point_7":
        Util.svgImgLoadCheckFronPack(point7AssetPackUrl, () => {
          this.load.pack("point7-asset-pack", point7AssetPackUrl);
        });
        this.load.pack("point7-asset-pack", point7AssetPackUrl);
        break;
      case "point_8":
        Util.svgImgLoadCheckFronPack(point8AssetPackUrl, () => {
          this.load.pack("point8-asset-pack", point8AssetPackUrl);
        });
        this.load.pack("point8-asset-pack", point8AssetPackUrl);
        break;
      default:
        break;
    }

    // 전체 로딩 진행 상황 추적
    this.load.on(Phaser.Loader.Events.PROGRESS, (progress: number) => {
      //console.log(`로딩 진행률: ${progress * 100}%`);
    });

    // 모든 에셋 로딩 완료 시 처리
    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      //console.log('모든 에셋 로딩 완료');
      // 여기에 로딩 완료 후 실행할 코드 추가
    });

    // 로딩 오류 처리
    this.load.on(
      Phaser.Loader.Events.FILE_LOAD_ERROR,
      (file: Phaser.Loader.File) => {
        //console.error(`파일 로드 실패: ${file.key}`);
        // 오류 처리 로직 추가
      }
    );
  }

  point: any;
  steps: any;
  init(data) {
    this.point = data.point;
  }

  create() {
    this.editorCreate();
    Util.fixedButtons("itrc");

    this.addedEventListener = false;

    if (!this.point) {
      this.point = this.user.currentPoint ? this.user.currentPoint : "point_1";
    }
    this.steps = this[this.point];
    this.steps.setVisible(true);

    const prgs = [this.prg_1, this.prg_2, this.prg_3, this.prg_4];
    let currentIndex = 0;
    let currentPageIndex = 1;
    let currentStepIndex = 1;

    const moveStep = (i, pi, si) => {
      document.querySelector(".layer_popup")?.remove();
      this.user.currentPointSec = i;
      if (i) currentIndex = i;
      if (pi) currentPageIndex = pi;
      if (si) currentStepIndex = si;
      if (currentIndex < this.steps.list.length - 1) {
        // 현재 단계 왼쪽으로 이동
        if (currentIndex > -1) {
          const hideContent = this.steps.list[currentIndex];
          this.tweens.add({
            targets: hideContent,
            x: -1500,
            alpha: { from: 0.1, to: 0 },
            duration: 500,
            ease: "Power2",
            onStart: () => {
              hideContent.setVisible(false);
            },
          });
        }

        // 다음 단계 오른쪽에서 현재 위치로 이동
        const showContent = this.steps.list[currentIndex + 1];
        showContent.x = 1500;
        showContent.setVisible(true);
        this.tweens.add({
          targets: showContent,
          x: { from: 0, to: 0 },
          alpha: { from: 0, to: 1 },
          duration: 500,
          ease: "Power2",
        });
        currentIndex++;

        // 아래 코드 addContents 함수로 이동
        if (this.point === "point_2" && currentIndex >= 2 && this.slideImages) {
          this.slideImages.setVisible(false);
          this.maskGraphics.setVisible(false);
        }

        if (showContent.name.endsWith("31")) {
          this.point_n_31();
        } else {
          this.temp_p3.setVisible(false);
        }
        if (showContent.name.endsWith("41")) {
          this.point_n_41();
        } else {
          this.temp_p4.setVisible(false);
        }

        let psNum = showContent.name.replace(this.point + "_", "");
        this.addContents(showContent);
        if (currentPageIndex != Math.floor(psNum / 10)) {
          currentPageIndex = Math.floor(psNum / 10);
          currentStepIndex = psNum % 10;
          const currentPrg = prgs[currentPageIndex - 1];
          if (currentPageIndex <= prgs.length) {
            currentPrg.list.forEach((image: any, index: number) => {
              if (
                image.texture.key.includes("ico_sml") ||
                image.texture.key.includes("ico_big")
              ) {
                const newTexture = image.texture.key.replace("_on", "") + "_on";
                this.time.delayedCall(index * 300, () => {
                  this.tweens.add({
                    targets: image,
                    alpha: { from: 0, to: 1 },
                    duration: 300,
                    ease: "Power2",
                    onStart: () => {
                      image.setTexture(newTexture);
                    },
                  });
                });
              }
            });
          }
        } else {
          const currentPrg = prgs[currentPageIndex - 1];
          currentPrg.list.forEach((image: any, index: number) => {
            this.tweens.add({
              targets: image,
              alpha: { from: 0, to: 1 },
              duration: 300,
              ease: "Power2",
              onStart: () => {},
            });
          });
        }
      } else {
        this.exitScene();
      }
    };

    moveStep(this.user.currentPointSec, null, null);

    // btn_next 클릭 이벤트
    this.btn_next.setInteractive();
    this.btn_next.on("pointerdown", function () {
      moveStep(null, null, null);
    });
    this.btn_next.setDepth(100);

    let _this = this;
    //게임 내부 이벤트리스너 막기위함
    this.blackLayer = this.add
      .rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0)
      .setOrigin(0, 0)
      .setDepth(1000)
      .setInteractive()
      .setVisible(false);
    //btn_close 클릭 이벤트
    this.btn_close.setInteractive();
    this.btn_close.on("pointerdown", () => {
      const $domExitLayer = $("#exit-layer");
      $domExitLayer.show();
      _this.blackLayer.setVisible(true);
      $("#exit-layer > .box > .btn > .exit").one("click", function () {
        $("#exit-layer > .box > .btn > .continue").off("click");
        $("#exit-layer").hide();
        _this.blackLayer.setVisible(false);
        let data: any = {};
        data.mode = "exitItrc";
        _this.exitScene(data);
      });
      $("#exit-layer > .box > .btn > .continue").one("click", function () {
        $("#exit-layer > .box > .btn > .exit").off("click");
        $("#exit-layer").hide();
        _this.blackLayer.setVisible(false);
      });
    });
    this.btn_close.setDepth(1);
  }

  blackLayer: any;
  isDev: any;
  addContents(showContent: any) {
    let _this = this;

    this.isDev = process.env.NODE_ENV === "production" ? false : true;
    if (this.isDev) {
      let label = this.add.text(0, 0, "d - " + showContent.name, {
        color: "#000000",
        fontSize: "20px",
      });
      showContent.add(label);
    }

    if (this.slideImages) {
      this.slideImages.setVisible(false);
      this.maskGraphics.setVisible(false);
    }

    switch (showContent.name) {
      case "point_1_11":
        _this.btn_next.setVisible(false);
        showContent.getByName("eff_point_1_1").setVisible(true);
        showContent.getByName("eff_point_1_2").setVisible(true);

        this.tweens.add({
          targets: [
            showContent.getByName("eff_point_1_1"),
            showContent.getByName("eff_point_1_2"),
          ],
          alpha: { from: 0, to: 1 },
          duration: 500,
          repeat: -1,
          yoyo: true,
          ease: "Sine.easeInOut",
        });

        const messageBox_1_1 = new RacRoundText(_this, {
          xPos: 290,
          yPos: 430,
          width: 700,
          height: 120,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "인종시책 옆면에 구멍이 뚫려 있는 이유는 무엇일까요?",
          align: "center",
        });
        let messageBox_1_1_cont = messageBox_1_1.getContainer();
        messageBox_1_1_cont.setVisible(false);
        showContent.add(messageBox_1_1_cont);

        showContent
          .getByName("btn_word_plus_5")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            messageBox_1_1_cont.setVisible(true);
            showContent.getByName("btn_word_plus_5").setVisible(false);
            showContent
              .getByName("btn_in_next")
              .setVisible(true)
              .setInteractive();
          });

        //showContent.getByName("btn_in_next").setVisible(true).setInteractive();

        showContent.getByName("btn_in_next").on("pointerdown", function () {
          messageBox_1_1.setRacText(
            "이 구멍에 금실 같은 끈을 넣어\n" + "시책을 연결했어요."
          );
          showContent.getByName("btn_in_next").setVisible(false);
          _this.btn_next.setVisible(true);
        });

        break;

      case "point_1_21":
        _this.btn_next.setVisible(false);
        this.tweens.add({
          targets: [showContent.getByName("btn_plus")],
          alpha: { from: 0, to: 1 },
          duration: 1000,
          repeat: -1,
          yoyo: true,
          ease: "Sine.easeInOut",
        });
        showContent
          .getByName("btn_plus")
          .setInteractive()
          .on("pointerdown", function () {
            showContent.getByName("btn_plus").setVisible(false);
            showContent.getByName("text_14").setText("사진을 넘겨보세요.");
            showContent.getByName("text_83").setText("도교의 힘, 호위신장");
            showContent
              .getByName("content_div_1_1")
              .createFromHTML(
                `<p class="content_text">이 신장은 도교의 호위신장으로 보이는데, 국왕과 왕실의 위엄을 나타낸 것으로 보여요.</p>`
              );
            showContent.getByName("bg_img_box_7").setTexture("img_point_1_3");
            showContent.getByName("ico_bow").setVisible(true);
            _this.tweens.add({
              targets: [showContent.getByName("ico_bow")],
              alpha: { from: 0, to: 1 },
              duration: 1000,
              repeat: -1,
              yoyo: true,
              ease: "Sine.easeInOut",
            });
            showContent
              .getByName("ico_bow")
              .setInteractive()
              .on("pointerdown", function () {
                showContent.getByName("ico_bow").setVisible(false);
                showContent
                  .getByName("bg_img_box_7")
                  .setTexture("img_point_1_4");
                showContent.getByName("ico_bow").setVisible(false);
                showContent.getByName("ico_bow_p1_l").setVisible(true);
                _this.btn_next.setVisible(true);
              });
            showContent
              .getByName("ico_bow_p1_l")
              .setInteractive()
              .on("pointerdown", function () {
                showContent.getByName("ico_bow").setVisible(true);
                showContent
                  .getByName("bg_img_box_7")
                  .setTexture("img_point_1_3");
                showContent.getByName("ico_bow").setVisible(true);
                showContent.getByName("ico_bow_p1_l").setVisible(false);
              });
          });

        break;
      case "point_2_11":
        this.imageDragViewerConf = {
          row: 0,
          col: 4,
          scale: 1.01,
        };
        this.imageSlideViewer();
        break;

      case "point_2_21":
        _this.detachImageSlideViewer();
        break;
      case "point_2_22":
        _this.btn_next.setVisible(false);
        showContent
          .getByName("img_water")
          .setInteractive({ cursor: "pointer", draggable: true });
        showContent
          .getByName("img_alcohol")
          .setInteractive({ cursor: "pointer", draggable: true });

        let isOver = false;
        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          const x = gameObject.x;
          const y = gameObject.y;

          if (y > 900 && y < 1450) {
            if (!isOver) {
              this.tweens.add({
                targets:
                  gameObject.name == "img_water"
                    ? showContent.getByName("water_zone")
                    : showContent.getByName("alcohol_zone"),
                scale: 1.1,
                duration: 500,
                ease: "Power2",
              });
            }
            isOver = true;
          } else {
            this.tweens.add({
              targets:
                gameObject.name == "img_water"
                  ? showContent.getByName("water_zone")
                  : showContent.getByName("alcohol_zone"),
              scale: 1,
              duration: 500,
              ease: "Power2",
            });
            isOver = false;
          }

          gameObject.setPosition(gameObject.x, dragY);
        });

        let dragCount = 0;
        this.input.on("dragend", (pointer, gameObject) => {
          const x = gameObject.x;
          const y = gameObject.y;

          if (y > 900 && y < 1450) {
            this.tweens.add({
              targets: gameObject,
              y: 1275,
              alpha: { from: 1, to: 0 },
              duration: 500,
              ease: "Power2",
            });
            this.tweens.add({
              targets:
                gameObject.name == "img_water"
                  ? showContent.getByName("water_zone")
                  : showContent.getByName("alcohol_zone"),
              scale: 1,
              duration: 500,
              ease: "Power2",
              onComplete: () => {
                if (gameObject.name == "img_water") {
                  dragCount++;
                  showContent
                    .getByName("water_1")
                    .setVisible(true)
                    .play("water_1")
                    .on("animationcomplete", (animation, frame) => {
                      if (animation.key === "water_1") {
                        // Animation has completed
                        showContent
                          .getByName("water_2")
                          .setVisible(true)
                          .play("water_2");

                        // Add your code here to handle the event
                      }
                    });
                } else {
                  dragCount++;
                  showContent
                    .getByName("ani_alcohol_1")
                    .setVisible(true)
                    .play("ani_alcohol_1")
                    .on("animationcomplete", (animation, frame) => {
                      if (animation.key === "ani_alcohol_1") {
                        // Animation has completed
                        showContent
                          .getByName("ani_alcohol_2")
                          .setVisible(true)
                          .play("ani_alcohol_2");
                        // Add your code here to handle the event
                      }
                    });
                }

                if (dragCount === 2) {
                  _this.btn_next.setVisible(true);
                  showContent.getByName("text_12").setVisible(false);
                }
              },
            });
          } else {
            this.tweens.add({
              targets: gameObject,
              y: 546,
              duration: 500,
              ease: "Power2",
            });
          }
        });
        break;

      case "point_3_21":
        this.btn_next.setVisible(false);
        const messageBox_0 = new RacRoundText(_this, {
          xPos: 293,
          yPos: 530,
          width: 660,
          height: 120,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "머리 위로 중간을 묶은 높은 보계가 있고,\n양쪽 어깨로 머리카락이 늘어져 있어요.",
          textExWord: [
            {
              word: "보계",
              ex:
                "*보계: \n" +
                "머리카락을 높이 틀어 올려\n" +
                "중간을 묶은 상투 모양이에요.",
              offsetY: -40,
              addX: -300 + 104 * 2,
            },
          ],
          align: "center",
        });
        const message_0 = messageBox_0.getContainer();
        showContent.add(message_0);
        message_0.setVisible(false);

        const messageBox_1 = new RacRoundText(_this, {
          xPos: 293,
          yPos: 940,
          width: 660,
          height: 120,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "머리 위로 중간을 묶은 높은 *보계가 있고,\n양쪽 어깨로 머리카락이 늘어져 있어요.",
          align: "center",
        });
        const message = messageBox_1.getContainer();
        showContent.add(message);
        message.setVisible(false);
        let point3Btns = [
          "bnt_point_3_l_t",
          "bnt_point_3_l_m",
          "bnt_point_3_l_b",
          "bnt_point_3_r_t",
          "bnt_point_3_r_m",
          "bnt_point_3_r_b",
        ];
        let topTextures = [
          "img_point_3_t_1",
          "img_point_3_t_2",
          "img_point_3_t_3",
        ];
        let middleTextures = [
          "img_point_3_m_1",
          "img_point_3_m_2",
          "img_point_3_m_3",
        ];
        let bottomTextures = [
          "img_point_3_b_1",
          "img_point_3_b_2",
          "img_point_3_b_3",
        ];
        let tempNoArr = [0, 0, 0];
        point3Btns.forEach((btn) => {
          showContent
            .getByName(btn)
            .setInteractive({ cursor: "pointer" })
            .on("pointerdown", function () {
              const btnName = btn.split("_");
              const direction = btnName[btnName.length - 2];
              const positionNum = btnName[btnName.length - 1];

              message.setVisible(false);
              if (positionNum === "t") {
                let i = 0;
                if (direction === "r") {
                  if (tempNoArr[i] === 2) {
                    tempNoArr[i] = -1;
                  }
                  tempNoArr[i]++;
                } else {
                  if (tempNoArr[i] === 0) {
                    tempNoArr[i] = 3;
                  }
                  tempNoArr[i]--;
                }
                showContent
                  .getByName("img_point_3_t_1")
                  .setTexture(topTextures[tempNoArr[i]]);
                if (tempNoArr[i] === 2) {
                  message_0.setVisible(true);
                } else {
                  message_0.setVisible(false);
                }
              } else if (positionNum === "m") {
                let i = 1;
                if (direction === "r") {
                  if (tempNoArr[i] === 2) {
                    tempNoArr[i] = -1;
                  }
                  tempNoArr[i]++;
                } else {
                  if (tempNoArr[i] === 0) {
                    tempNoArr[i] = 3;
                  }
                  tempNoArr[i]--;
                }
                showContent
                  .getByName("img_point_3_m_1")
                  .setTexture(middleTextures[tempNoArr[i]]);
                if (tempNoArr[i] === 2) {
                  messageBox_1.setRacText(
                    "각각 양손의 엄지와 중지를 맞대어\n중생을 구제하려는 염원을 나타냈어요."
                  );
                  message.setY(940);
                  message_0.setVisible(false);
                  message.setVisible(true);
                } else {
                  message.setVisible(false);
                }
              } else if (positionNum === "b") {
                let i = 2;
                if (direction === "r") {
                  if (tempNoArr[i] === 2) {
                    tempNoArr[i] = -1;
                  }
                  tempNoArr[i]++;
                } else {
                  if (tempNoArr[i] === 0) {
                    tempNoArr[i] = 3;
                  }
                  tempNoArr[i]--;
                }
                showContent
                  .getByName("img_point_3_b_1")
                  .setTexture(bottomTextures[tempNoArr[i]]);
                if (tempNoArr[i] === 2) {
                  messageBox_1.setRacText(
                    "보살은 부처와 달리 몸에는 목걸이나 팔찌\n 등을 구슬장식으로 화려하게 장식했어요."
                  );
                  message.setY(1360);
                  message_0.setVisible(false);
                  message.setVisible(true);
                } else {
                  message.setVisible(false);
                }
              }
              if (
                tempNoArr[0] === 2 &&
                tempNoArr[1] === 2 &&
                tempNoArr[2] === 2
              ) {
                point3Btns.forEach((btn) => {
                  showContent.getByName(btn).setVisible(false);
                });

                showContent.getByName("text_13").setVisible(false);
                showContent.getByName("btn_in_next_1").setVisible(true);
                showContent
                  .getByName("btn_in_next_1")
                  .setInteractive({ cursor: "pointer" })
                  .on("pointerdown", function () {
                    message.setVisible(false);
                    message_0.setVisible(false);
                    _this.tweens.add({
                      targets: [
                        showContent.getByName("img_point_3_t_1"),
                        showContent.getByName("img_point_3_m_1"),
                        showContent.getByName("img_point_3_b_1"),
                      ],
                      alpha: { from: 1, to: 0 },
                      duration: 0,
                      ease: "Sine.easeOut",
                      yoyo: false,
                      repeat: 0,
                      onStart: () => {
                        showContent.getByName("text_13").setVisible(false);
                      },
                      onComplete: () => {
                        showContent
                          .getByName("img_point_3_t_1")
                          .setVisible(false);
                        showContent
                          .getByName("img_point_3_m_1")
                          .setVisible(false);
                        showContent
                          .getByName("img_point_3_b_1")
                          .setVisible(false);
                        showContent
                          .getByName("img_point_6_3_21")
                          .setVisible(true);
                        showContent
                          .getByName("text_8")
                          .setText(
                            "이 보살상의 보계, 얼굴, 옷에는 고려 후기 보살상의 특징이 잘 반영되어 있답니다."
                          );
                      },
                    });

                    showContent.getByName("btn_in_next_1").setVisible(false);
                    _this.btn_next.setVisible(true);
                  });
              }
            });
        });

        break;

      case "point_4_11":
        this.btn_next.setVisible(false);

        const messageBox_4_11 = new RacRoundText(_this, {
          xPos: 300,
          yPos: 552,
          width: 700,
          height: 120,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "모합 : 자합과 유병을 담는 큰 합",
          align: "center",
        });
        const message_4_11 = messageBox_4_11.getContainer();
        showContent.add(message_4_11);
        message_4_11.setVisible(false);

        let clickedBtns = [];

        const effPointHead = showContent.getByName("eff_point_4_1_head");
        if (effPointHead) {
          effPointHead.setAlpha(0);
          effPointHead.setDepth(10);
          effPointHead.setVisible(false);
        }

        // 공통 클릭 핸들러
        const handleButtonClick = (buttonName, effectName, messageText) => {
          // 버튼 상태 변경
          showContent
            .getByName(buttonName)
            .setTexture(buttonName.replace("_on", ""));
          showContent
            .getByName("eff_point_4_1")
            .setVisible(effectName === "eff_point_4_1");
          showContent
            .getByName("eff_point_4_2")
            .setVisible(effectName === "eff_point_4_2");
          showContent
            .getByName("eff_point_4_3")
            .setVisible(effectName === "eff_point_4_3");

          const effect = showContent.getByName(effectName);
          if (effect) {
            _this.tweens.add({
              targets: [effect],
              alpha: { from: 0, to: 1 },
              duration: 1000,
              repeat: -1,
              yoyo: true,
              ease: "Sine.easeInOut",
            });
          }

          // eff_point_4_1_head 반짝임 추가
          if (buttonName === "btn_point_4_1_on") {
            effPointHead.setVisible(true);
            _this.tweens.add({
              targets: [effPointHead],
              alpha: { from: 0, to: 1 },
              duration: 1000,
              repeat: -1,
              yoyo: true,
              ease: "Sine.easeInOut",
            });
          } else {
            effPointHead.setVisible(false);
          }

          // 메시지 설정
          messageBox_4_11.setRacText(messageText);
          message_4_11.setVisible(true);

          // 클릭 상태 저장
          if (!clickedBtns.includes(buttonName)) {
            clickedBtns.push(buttonName);
            checkBtns();
          }
        };

        // 버튼 설정
        showContent
          .getByName("btn_point_4_1_on")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", () =>
            handleButtonClick(
              "btn_point_4_1_on",
              "eff_point_4_1",
              "모합 : 자합과 유병을 담는 큰 합"
            )
          );

        showContent
          .getByName("btn_point_4_2_on")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", () =>
            handleButtonClick(
              "btn_point_4_2_on",
              "eff_point_4_2",
              "유병 : 머릿기름을 담는 병"
            )
          );

        showContent
          .getByName("btn_point_4_3_on")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", () =>
            handleButtonClick(
              "btn_point_4_3_on",
              "eff_point_4_3",
              "자합 : 분가루, 연지, 눈썹 재료 \n" + "등을 담는 작은 합"
            )
          );

        // 버튼 클릭 확인
        function checkBtns() {
          if (clickedBtns.length === 3) {
            _this.btn_next.setVisible(true);
          }
        }
        break;

      case "point_4_21":
        this.btn_next.setVisible(false);

        let cameraSize = [1080, 1400];
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(
            function (stream) {
              var videoElement = document.createElement("video");
              _this.videoElement = videoElement;
              _this.stream = stream;
              videoElement.srcObject = stream;
              videoElement.play();
              videoElement.width = cameraSize[0];
              videoElement.height = cameraSize[1];

              addVideoToCanvas(videoElement, stream); // Phaser 내에서 비디오 프레임을 캔버스에 복사하는 함수 실행
            }.bind(this)
          )
          .catch(function (err) {
            addVideoToCanvas(false, false);
          });

        function addVideoToCanvas(videoElement, stream) {
          let texture = _this.textures.createCanvas(
            "videoTexture",
            cameraSize[0],
            cameraSize[1]
          );
          let context = texture.getContext();

          if (videoElement && stream) {
            _this.time.addEvent({
              delay: 30, // 매 30ms마다 호출 (약 30FPS)
              callback: () => {
                context.drawImage(
                  videoElement,
                  0,
                  0,
                  cameraSize[0],
                  cameraSize[1]
                );
                texture.refresh(); // 변경된 텍스처를 갱신
              },
              loop: true,
            });
          }

          // Phaser의 게임 루프마다 비디오 프레임을 캔버스에 그리기
          let cameraFeed = _this.add
            .image(290, cameraSize[1] / 2, "videoTexture")
            .setName("cameraFeed");
          cameraFeed.setScale(-1, 1);
          showContent.add(cameraFeed);
          showContent.getByName("cameraFeed").setDepth(1);

          const bg_point_4_0 = _this.add.image(-250, -89, "bg_point_4_0");
          bg_point_4_0.name = "bg_point_4_0";
          bg_point_4_0.setOrigin(0, 0);
          bg_point_4_0.setDepth(2);
          showContent.add(bg_point_4_0);

          const ico_camera = _this.add.image(310, 1617, "ico_camera_2");
          ico_camera.name = "ico_camera";
          ico_camera.setDepth(2);
          showContent.add(ico_camera);

          const img_point_4_1_face = _this.add.image(
            305,
            793,
            "img_point_4_1_face"
          );
          img_point_4_1_face.name = "img_point_4_1_face";
          img_point_4_1_face.setDepth(2);
          showContent.add(img_point_4_1_face);

          const point_4_info_con = _this.add.container(280, 10);
          point_4_info_con.name = "point_4_info_con";
          point_4_info_con.setDepth(2);
          showContent.add(point_4_info_con);

          // bg_point_4_1
          const bg_point_4_1 = _this.add.image(0, 25, "bg_point_4_1");
          bg_point_4_1.scaleY = 0.6;
          bg_point_4_1.angle = -180;
          point_4_info_con.add(bg_point_4_1);

          // text_58
          const text_58 = _this.add.text(0, -5, "", {});
          text_58.setOrigin(0.5, 0);
          text_58.text =
            "얼굴에 맞춰 사진을 찍고\n모자합을 선택해 화장을 해 볼까요?";
          text_58.setStyle({
            align: "center",
            color: "#000",
            fontFamily: "KoddiUDOnGothic-Bold",
            fontSize: "37pt",
          });
          text_58.setLineSpacing(2);
          text_58.setWordWrapWidth(900, true);
          point_4_info_con.add(text_58);

          // text_59
          const text_59 = _this.add.text(0, -85, "", {});
          text_59.setOrigin(0.5, 0);
          text_59.text = "<조반 부인 초상화>, 조선, 덕수 6300 참고";
          text_59.setStyle({
            align: "center",
            color: "#000",
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "28pt",
          });
          text_59.setLineSpacing(2);
          text_59.setWordWrapWidth(900, true);
          point_4_info_con.add(text_59);

          ico_camera
            .setInteractive({ cursor: "pointer" })
            .on("pointerdown", function () {
              // cameraFeed의 텍스처를 가져옴
              if (videoElement && stream) {
                img_point_4_1_face.setVisible(false);
                let texture = _this.textures.get("videoTexture");
                let sourceImage = texture.getSourceImage();

                // 캔버스인 경우에만 toDataURL을 사용
                if (sourceImage instanceof HTMLCanvasElement) {
                  let imageData = sourceImage.toDataURL("image/png");

                  // 이미지 데이터를 다시 텍스처로 로드
                  _this.textures.addBase64("capturedTexture", imageData);

                  // cameraFeed에 새로 로드한 텍스처 적용
                  _this.textures.once("onload", function () {
                    cameraFeed.setTexture("capturedTexture");
                  });

                  ico_camera.setVisible(false);
                  point_4_info_con.setVisible(false);
                  makeup();

                  let tracks = stream.getTracks();
                  tracks.forEach((track) => track.stop());
                  _this.stream = null;
                } else {
                  console.error("The source image is not a canvas element.");
                }
              } else {
                ico_camera.setVisible(false);
                point_4_info_con.setVisible(false);
                makeup();
              }
            });
        }

        const makeup = () => {
          const overlay = _this.add.rectangle(
            300, // 중심 X
            855, // 중심 Y
            560, // 너비
            730, // 높이
            0xffffff, // 흰색
            0.2 // 초기 투명도
          );
          overlay.setAlpha(0.2); // 투명도 설정
          overlay.setDepth(2); // bg_face보다 낮게 설정
          showContent.add(overlay);

          const bg_face = _this.add.image(-250, -89, "bg_point_4_0");
          bg_face.setOrigin(0, 0);
          bg_face.setDepth(3);
          showContent.add(bg_face);

          const messageBox_1 = new RacRoundText(_this, {
            xPos: 540,
            yPos: 120,
            width: 700,
            height: 80,
            round: 25,
            bgColor: 0xffffff,
            color: "#000000",
            bgAlpha: 0.7,
            text: "화장도구를 선택해 주세요.",
            align: "center",
          });
          const messageBox_1_con = messageBox_1.getContainer();

          // bg_point_4_2
          const bg_point_4_2 = _this.add.image(290, 1514, "bg_point_4_2");
          showContent.add(bg_point_4_2);

          // text_41
          const text_41 = _this.add.text(-171, 1440, "", {});
          text_41.setOrigin(0.5, 0);
          text_41.text = "분";
          text_41.setStyle({
            align: "center",
            color: "#000",
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "37pt",
          });
          text_41.setLineSpacing(2);
          text_41.setWordWrapWidth(900, true);
          showContent.add(text_41);

          // text_42
          const text_42 = _this.add.text(720, 1440, "", {});
          text_42.setOrigin(0.5, 0);
          text_42.text = "머릿\n기름";
          text_42.setStyle({
            align: "center",
            color: "#000",
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "37pt",
          });
          text_42.setLineSpacing(2);
          text_42.setWordWrapWidth(900, true);
          showContent.add(text_42);

          // text_43
          const text_43 = _this.add.text(-136, 1725, "", {});
          text_43.setOrigin(0.5, 0);
          text_43.text = "눈썹";
          text_43.setStyle({
            align: "center",
            color: "#000",
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "37pt",
          });
          text_43.setLineSpacing(2);
          text_43.setWordWrapWidth(900, true);
          showContent.add(text_43);

          // text_44
          const text_44 = _this.add.text(720, 1725, "", {});
          text_44.setOrigin(0.5, 0);
          text_44.text = "연지";
          text_44.setStyle({
            align: "center",
            color: "#000",
            fontFamily: "KoddiUDOnGothic-Regular",
            fontSize: "37pt",
          });
          text_44.setLineSpacing(2);
          text_44.setWordWrapWidth(900, true);
          showContent.add(text_44);

          // img_point_4_7
          const img_point_4_7 = _this.add.image(310, 694, "img_point_4_7");
          img_point_4_7.setAlpha(0);
          showContent.add(img_point_4_7);

          // img_point_4_5
          const img_point_4_5 = _this.add.image(305, 636, "img_point_4_5");
          img_point_4_5.setAlpha(0);
          showContent.add(img_point_4_5);

          // img_point_4_6
          const img_point_4_6 = _this.add.image(305, 496, "img_point_4_6");
          img_point_4_6.setAlpha(0);
          showContent.add(img_point_4_6);

          // img_point_4_8
          const img_point_4_8 = _this.add.image(315, 919, "img_point_4_8");
          img_point_4_8.setAlpha(0);
          showContent.add(img_point_4_8);

          // img_point_4_3
          const img_point_4_3 = _this.add.image(15, 1383, "img_point_4_3");
          img_point_4_3.setName("img_point_4_3");
          showContent.add(img_point_4_3);

          // img_point_4_1
          const img_point_4_1 = _this.add.image(15, 1677, "img_point_4_1");
          img_point_4_1.setName("img_point_4_1");
          showContent.add(img_point_4_1);

          // img_point_4_4
          const img_point_4_4 = _this.add.image(507, 1667, "img_point_4_4");
          img_point_4_4.setName("img_point_4_4");
          showContent.add(img_point_4_4);

          // img_point_4_2
          const img_point_4_2 = _this.add.image(507, 1372, "img_point_4_2");
          img_point_4_2.setName("img_point_4_2");
          showContent.add(img_point_4_2);

          let btns = [
            img_point_4_3,
            img_point_4_1,
            img_point_4_4,
            img_point_4_2,
          ];

          btns.forEach((btn: any, index: number) => {
            btn.setInteractive({ cursor: "pointer" }); // 객체를 클릭 가능하게 설정
            btn.originalX = btn.x; // 원래 x좌표 저장
            btn.originalY = btn.y; // 원래 y좌표 저장
            btn.dragCount = 0;
          });

          let facePart = "";

          btns.forEach((btn: any) => {
            btn.on("pointerdown", () => {
              if (btn.name === "img_point_4_3") {
                facePart = "powder";
                handleFacePart(facePart, img_point_4_7, img_point_4_1);
                applyGlowEffect();
              } else if (btn.name === "img_point_4_1") {
                facePart = "eyebrow";
                handleFacePart(facePart, img_point_4_5, img_point_4_1);
              } else if (btn.name === "img_point_4_2") {
                facePart = "hair";
                handleFacePart(facePart, img_point_4_6, img_point_4_2);
              } else if (btn.name === "img_point_4_4") {
                facePart = "lip";
                handleFacePart(facePart, img_point_4_8, img_point_4_4);
              }
            });
          });

          let glowIntensity = 0;

          const applyGlowEffect = () => {
            if (glowIntensity >= 2) {
              glowIntensity = 0; // 처음 상태로 초기화
            }

            glowIntensity++; // 단계 증가
            overlay.setAlpha(1 * glowIntensity);
          };

          function handleFacePart(
            facePart: string,
            targetImage: any,
            sourceImage: any
          ) {
            if (targetImage.alpha < 1) {
              sourceImage.dragCount++;
              _this.tweens.add({
                targets: targetImage,
                alpha: { from: 0.6, to: 1 },
                duration: 500,
                ease: "Power2",
              });
            }
          }

          let clickedParts: string[] = [];
          let btn_exit: any;
          let btn_save: any;

          btns.forEach((btn: any) => {
            btn.on("pointerup", () => {
              if (!clickedParts.includes(facePart)) {
                clickedParts.push(facePart);
              }

              if (clickedParts.length === 4) {
                _this.btn_close.setVisible(false);
                messageBox_1_con.setVisible(false);
                const btn_exit = _this.add.image(-50, 30, "btn_point_4_exit");
                btn_exit.setName("btn_exit");
                showContent.add(btn_exit);
                btn_exit
                  .setInteractive({ cursor: "pointer" })
                  .on("pointerdown", function () {
                    hideAllContent();
                    _this.btn_close.setVisible(true);
                    _this.btn_next.setVisible(true);
                    if (!_this.addedEventListener) {
                      _this.addedEventListener = true;
                      _this.btn_next.once("pointerdown", () => {
                        _this.videoElement.remove();
                        _this.videoElement = null;
                      });
                    }
                  });

                const btn_save = _this.add.image(640, 30, "btn_point_4_save");
                btn_save.setName("btn_save");
                showContent.add(btn_save);
                btn_save
                  .setInteractive({ cursor: "pointer" })
                  .on("pointerdown", function () {
                    hideAllContent();
                    captureAndSaveImage();
                  });
              }
            });
          });

          function hideAllContent() {
            if (showContent.getByName("btn_exit"))
              showContent.getByName("btn_exit").setVisible(false);
            if (showContent.getByName("btn_save"))
              showContent.getByName("btn_save").setVisible(false);
            text_41.setVisible(false);
            text_42.setVisible(false);
            text_43.setVisible(false);
            text_44.setVisible(false);

            img_point_4_1.setVisible(false);
            img_point_4_2.setVisible(false);
            img_point_4_3.setVisible(false);
            img_point_4_4.setVisible(false);
            bg_point_4_2.setVisible(false);
          }
        };

        function captureAndSaveImage() {
          _this.game.renderer.snapshotArea(
            0,
            0,
            _this.game.config.width as number,
            _this.game.config.height as number,
            (image) => {
              // @ts-ignore
              let dataURL = image.src as image;
              fetch(dataURL)
                .then((res) => res.blob())
                .then((blob) => {
                  saveAs(blob, "myface.png"); // 파일 이름 설정
                  _this.btn_close.setVisible(true);
                  _this.btn_next.setVisible(true);
                  if (!_this.addedEventListener) {
                    _this.addedEventListener = true;
                    _this.btn_next.once("pointerdown", () => {
                      _this.btn_close.setVisible(true);
                      _this.videoElement.remove();
                      _this.videoElement = null;
                    });
                  }
                });
            }
          );
        }
        break;

      case "point_5_22":
        this.btn_next.setVisible(false);
        showContent
          .getByName("btn_plus_1")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("img_point_5_2").setVisible(false);
            showContent.getByName("box_area_1").setVisible(false);
            showContent.getByName("btn_plus_1").setVisible(false);
            showContent.getByName("text_20").setVisible(true);
            showContent.getByName("img_point_5_3").setVisible(true);
            showContent.getByName("ico_qm_blue").setVisible(true);
            showContent.getByName("ico_qm_green_1").setVisible(true);
            showContent.getByName("ico_qm_green_2").setVisible(true);

            const label_1 = new RacRoundText(_this, {
              xPos: showContent.getByName("ico_gw_1").x,
              yPos: showContent.getByName("ico_gw_1").y - 40,
              width: 150,
              height: 80,
              round: 40,
              bgColor: 0x161844,
              fontSize: "27pt",
              fontFamily: "KoddiUDOnGothic-Bold",
              bgAlpha: 1,
              text: "수막새",
              color: "#ffffff",
              align: "center",
            });
            const label_1_m = label_1.getContainer();
            showContent.add(label_1_m);

            const label_2 = new RacRoundText(_this, {
              xPos: showContent.getByName("ico_gw_2").x,
              yPos: showContent.getByName("ico_gw_2").y - 40,
              width: 150,
              height: 80,
              round: 40,
              bgColor: 0x161844,
              fontSize: "27pt",
              fontFamily: "KoddiUDOnGothic-Bold",
              bgAlpha: 1,
              text: "암막새",
              color: "#ffffff",
              align: "center",
            });
            const label_2_m = label_2.getContainer();
            showContent.add(label_2_m);

            const label_3 = new RacRoundText(_this, {
              xPos: showContent.getByName("ico_gw_3").x,
              yPos: showContent.getByName("ico_gw_3").y - 40,
              width: 150,
              height: 80,
              round: 40,
              bgColor: 0x161844,
              fontSize: "27pt",
              fontFamily: "KoddiUDOnGothic-Bold",
              bgAlpha: 1,
              text: "연봉",
              color: "#ffffff",
              align: "center",
            });
            const label_3_m = label_3.getContainer();
            showContent.add(label_3_m);

            showContent
              .getByName("ico_gw_1")
              .setVisible(true)
              .setInteractive({ cursor: "pointer", draggable: true });
            showContent.getByName("ico_gw_1").originalX =
              showContent.getByName("ico_gw_1").x;
            showContent.getByName("ico_gw_1").originalY =
              showContent.getByName("ico_gw_1").y;
            showContent
              .getByName("ico_gw_2")
              .setVisible(true)
              .setInteractive({ cursor: "pointer", draggable: true });
            showContent.getByName("ico_gw_2").originalX =
              showContent.getByName("ico_gw_2").x;
            showContent.getByName("ico_gw_2").originalY =
              showContent.getByName("ico_gw_2").y;
            showContent
              .getByName("ico_gw_3")
              .setVisible(true)
              .setInteractive({ cursor: "pointer", draggable: true });
            showContent.getByName("ico_gw_3").originalX =
              showContent.getByName("ico_gw_3").x;
            showContent.getByName("ico_gw_3").originalY =
              showContent.getByName("ico_gw_3").y;

            _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
              const x = gameObject.x;
              const y = gameObject.y;
              gameObject.setPosition(dragX, dragY);
            });

            let dragend = [];
            _this.input.on("dragend", (pointer, gameObject) => {
              const x = gameObject.x;
              const y = gameObject.y;

              if (gameObject.name === "ico_gw_1") {
                if (x > -90 && x < 200 && y > 1100 && y < 1480) {
                  _this.tweens.add({
                    targets: gameObject,
                    x: 65,
                    y: 1300,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    ease: "Power2",
                  });
                  showContent
                    .getByName("ico_qm_green_1")
                    .setTexture("ico_bl_1");
                  dragend.push(gameObject.name);
                } else {
                  gameObject.setPosition(
                    gameObject.originalX,
                    gameObject.originalY
                  );
                }
              }

              if (gameObject.name === "ico_gw_2") {
                if (x > 50 && x < 350 && y > 570 && y < 940) {
                  _this.tweens.add({
                    targets: gameObject,
                    x: 186,
                    y: 755,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    ease: "Power2",
                  });
                  showContent.getByName("ico_qm_blue").setTexture("ico_bl_2");
                  dragend.push(gameObject.name);
                } else {
                  gameObject.setPosition(
                    gameObject.originalX,
                    gameObject.originalY
                  );
                }
              }

              if (gameObject.name === "ico_gw_3") {
                if (x > 450 && x < 750 && y > 580 && y < 940) {
                  _this.tweens.add({
                    targets: gameObject,
                    x: 620,
                    y: 752,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    ease: "Power2",
                  });
                  showContent
                    .getByName("ico_qm_green_2")
                    .setTexture("ico_bl_3");
                  dragend.push(gameObject.name);
                } else {
                  gameObject.setPosition(
                    gameObject.originalX,
                    gameObject.originalY
                  );
                }
              }

              if (dragend.length === 3) {
                _this.btn_next.setVisible(true);
              }
            });
          });
        break;
      case "point_6_11":
        this.btn_next.setVisible(false);

        showContent
          .getByName("btn_in_next_2")
          .setVisible(true)
          .setInteractive({ cursor: "pointer" });
        let reCycleNum = 3;
        let i = 0;
        let isPlaying = false;
        function playhmStrokes(num) {
          if (num <= 4) {
            isPlaying = true;
            let hmStr = "img_point_6_1_" + num;
            _this.tweens.add({
              targets: showContent.getByName(hmStr),
              alpha: { from: 0, to: 1 },
              duration: 500,
              repeat: 0,
              yoyo: false,
              ease: "Sine.easeInOut",
              onStart: () => {
                showContent.getByName(hmStr).setVisible(true);
              },
              onComplete: () => {
                isPlaying = false;
                if (num === 4) {
                  showContent.getByName("btn_in_next_2").setVisible(false);
                  _this.btn_next.setVisible(true);
                }
              },
            });
          }
        }
        showContent.getByName("btn_in_next_2").on("pointerdown", function () {
          if (!isPlaying) {
            i++;
            playhmStrokes(i);
          }
        });

        break;

      case "point_6_21":
        this.btn_next.setVisible(false);

        let point_6_11_textExWord = [
          {
            word: "인출",
            ex: "*인출: \n" + "책판에 박아내는 것을 말해요.",
          },
        ];
        Util.setTextEx(
          _this,
          showContent,
          showContent.getByName("text_25"),
          point_6_11_textExWord,
          showContent.getByName("text_25").width,
          "btn_word_plus"
        );

        let types = showContent.getByName("type_con").list;
        types.forEach((type: any, index: number) => {
          type.setInteractive({ cursor: "pointer" }); // 객체를 인터랙티브로 설정
          _this.input.setDraggable(type); // 드래그 가능하게 설정
          type.originalX = type.x; // 원래 x좌표 저장
          type.originalY = type.y; // 원래 y좌표 저장
          type.setDepth(0);
        });

        _this.input.on("dragstart", (pointer, gameObject) => {
          types.forEach((type: any, index: number) => {
            type.setAlpha(0.2);
          });
          gameObject.setAlpha(1);
        });
        _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          gameObject.setPosition(dragX, dragY);
        });

        let w = 370;
        let h = 370;
        let dropZone_1 = _this.add
          .zone(350, 1460, w, h)
          .setRectangleDropZone(w, h)
          .setInteractive();
        let dropZone_2 = _this.add
          .zone(730, 1460, w, h)
          .setRectangleDropZone(w, h)
          .setInteractive();

        _this.input.on("dragenter", function (pointer, gameObject, dropZone) {
          if (
            dropZone === dropZone_1 &&
            gameObject.name === "img_point_6_2_6"
          ) {
            gameObject.isDropable = true;
          } else if (
            dropZone === dropZone_2 &&
            gameObject.name === "img_point_6_2_3"
          ) {
            gameObject.isDropable = true;
          }
        });

        _this.input.on("dragleave", function (pointer, gameObject, dropZone) {
          gameObject.isDropable = false;
        });

        let dropCount = 0;
        _this.input.on("dragend", function (pointer, gameObject, dropZone) {
          types.forEach((type: any, index: number) => {
            if (!type.isError) {
              type.setAlpha(1);
            }
          });
          if (
            dropZone &&
            gameObject.name === "img_point_6_2_3" &&
            gameObject.isDropable
          ) {
            gameObject.setPosition(516, 756);
            gameObject.setScale(1.35);
            showContent
              .getByName("box_con")
              .getByName("box_dotted_1")
              .setVisible(false);
            dropCount++;
          } else if (
            dropZone &&
            gameObject.name === "img_point_6_2_6" &&
            gameObject.isDropable
          ) {
            gameObject.setPosition(170, 756);
            gameObject.setScale(1.35);
            showContent
              .getByName("box_con")
              .getByName("box_dotted")
              .setVisible(false);
            dropCount++;
          } else {
            if (
              gameObject.name != "img_point_6_2_3" &&
              gameObject.name != "img_point_6_2_6"
            ) {
              const alertModal = new ModaAlert(_this, {
                xPos: 0,
                yPos: 700,
                width: 500,
                height: 300,
                round: 25,
                bgColor: 0xffffff,
                text: '"고", "려"를 찾아 주세요.',
                align: "center",
                blackLayer: true,
              });
              gameObject.setAlpha(0.2).disableInteractive();
              gameObject.isError = true;
            } else {
              const alertModal = new ModaAlert(_this, {
                xPos: 0,
                yPos: 700,
                width: 600,
                height: 370,
                round: 25,
                bgColor: 0xffffff,
                text:
                  "글자가 제대로 보이려면\n" +
                  "글자의 활자가 \n" +
                  "반대로 배치되어야 해요.",
                align: "center",
                blackLayer: true,
              });
            }
            gameObject.setPosition(gameObject.originalX, gameObject.originalY);
            gameObject.setScale(1);
          }
          if (dropCount === 2) {
            let layer1 = showContent
              .getByName("layer_point_6_2_1")
              .setInteractive()
              .setVisible(true);

            // 배경바
            let barBackground = _this.add
              .rexRoundRectangle(-58, 1432, 682, 10, 10, 0x7f7d7c)
              .setOrigin(0, 0);
            showContent.add(barBackground);

            //프로그레스 바
            let bar = _this.add
              .rexRoundRectangle(-58, 1432, 0, 10, 10, 0x83baff)
              .setOrigin(0, 0)
              .setVisible(false);
            showContent.add(bar);

            //동그라미
            let barCircle = _this.add
              .circle(-58, 1442, 16, 0xffffff)
              .setStrokeStyle(8, 0x83baff)
              .setVisible(false);
            showContent.add(barCircle);

            // img_point_6_2_h
            let handCursor = _this.add.image(584, 1377, "img_point_6_2_h");
            handCursor.name = "handCursor";
            handCursor.visible = true;
            showContent.add(handCursor);

            let handCursorAni = _this.tweens.add({
              targets: handCursor,
              x: { from: handCursor.x, to: handCursor.x - 600 },
              duration: 1500,
              repeat: -1,
              yoyo: true,
              ease: "Sine.easeInOut",
              onStart: () => {},
              onComplete: () => {},
            });

            showContent.getByName("text_25").setText("금속활자 인출");
            showContent
              .getByName("text_26")
              .setText(
                "금속활자 면에 먹을 칠하고\n" + "인출지를 놓고 문질러 보세요.\n"
              );
            showContent.getByName("text_39").setVisible(false);
            _this.tweens.add({
              targets: layer1,
              alpha: { from: 0, to: 1 },
              duration: 1000,
              ease: "Sine.easeInOut",
              onComplete: () => {
                let count = 0;
                _this.input.on("pointermove", function (pointer) {
                  if (
                    pointer.x < 90 ||
                    pointer.x > 980 ||
                    pointer.y < 1174 ||
                    pointer.y > 1716
                  )
                    return;
                  if (pointer.isDown) {
                    count++;
                    if (count < 10) {
                      handCursorAni.stop();
                      bar.setVisible(true);
                      barCircle.setVisible(true);
                    }
                    handCursor.setPosition(pointer.x - 260, pointer.y - 120);
                    if (count < 200) {
                      layer1.setAlpha(1 - count / 200);
                      barCircle.setX(-58 + (682 * count) / 200);
                      bar.width = (682 * count) / 200;
                    } else {
                      showContent.getByName("text_25").setText("금속활자");
                      showContent.getByName("text_26").setText("인쇄 완성!");
                      showContent.getByName("type_con").setVisible(false);
                      showContent.getByName("box_con").setVisible(false);
                      showContent.getByName("text_39").setVisible(false);
                      showContent
                        .getByName("layer_point_6_2_2")
                        .setVisible(true);
                      showContent.getByName("img_point_6_2_c").setVisible(true);
                      // showContent
                      //   .getByName("img_point_6_2_ex_1")
                      //   .setVisible(true);
                      // showContent
                      //   .getByName("img_point_6_2_ex_2")
                      //   .setVisible(true);

                      layer1.setVisible(false);
                      handCursor.setVisible(false);
                      bar.setVisible(false);
                      barBackground.setVisible(false);
                      barCircle.setVisible(false);
                      showContent.remove(handCursor);
                      showContent.remove(bar);
                      showContent.remove(barBackground);
                      showContent.remove(barCircle);

                      _this.btn_next.setVisible(true);
                    }
                  } else {
                    // 포인터가 내려가 있지 않으면 마지막 위치 초기화
                  }
                });
              },
            });
          }
        });
        break;

      case "point_7_11":
        _this.btn_next.setVisible(false);
        let con_1 = showContent.getByName("point_7_11_1");
        let con_2 = showContent.getByName("point_7_11_2");
        _this.tweens.add({
          targets: con_1.getByName("eff_point_7_1"),
          alpha: { from: 0, to: 1 },
          duration: 1000,
          ease: "Sine.easeInOut",
          repeat: -1,
          yoyo: true,
        });

        const messageBox_7_1 = new RacRoundText(_this, {
          xPos: 288,
          yPos: 610,
          width: 300,
          height: 70,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "정면 용뉴",
          align: "center",
        });
        const message_7_1 = messageBox_7_1.getContainer();
        showContent.add(message_7_1);
        message_7_1.setVisible(false);

        con_1
          .getByName("btn_word_plus")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            con_1.setVisible(false);
            con_2.setVisible(true);
            showContent
              .getByName("content_div_7_1")
              .createFromHTML(
                `<p class="content_text">상상의 동물 용이에요. 범종의 고리 부분을 龍鈕(용뉴)라고 부른답니다.</p>`
              );
            message_7_1.setVisible(true);
          });

        con_2
          .getByName("ico_bow_1")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            // con_2.getByName("text_51").setVisible(false);
            con_2.getByName("img_point_7_2").setVisible(false);
            con_2.getByName("img_point_7_3").setVisible(true);
            con_2.getByName("ico_bow_1").setVisible(false);
            con_2.getByName("ico_bow_1_l").setVisible(true);
            messageBox_7_1.setRacText("측면 용뉴");
            _this.btn_next.setVisible(true);
          });

        con_2
          .getByName("ico_bow_1_l")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            // con_2.getByName("text_51").setVisible(true);
            con_2.getByName("img_point_7_2").setVisible(true);
            con_2.getByName("img_point_7_3").setVisible(false);
            con_2.getByName("ico_bow_1").setVisible(true);
            con_2.getByName("ico_bow_1_l").setVisible(false);
            messageBox_7_1.setRacText("정면 용뉴");
          });

        break;

      case "point_7_12":
        _this.btn_next.setVisible(false);
        let con_3 = showContent.getByName("point_7_12_1");
        let con_4 = showContent.getByName("point_7_12_2");
        _this.tweens.add({
          targets: con_3.getByName("eff_point7_2"),
          alpha: { from: 0, to: 1 },
          duration: 1000,
          ease: "Sine.easeInOut",
          repeat: -1,
          yoyo: true,
        });

        const messageBox_7_2 = new RacRoundText(_this, {
          xPos: 290,
          yPos: 650,
          width: 300,
          height: 70,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "정면 입상화문대",
          align: "center",
        });
        const message_7_2 = messageBox_7_2.getContainer();
        showContent.add(message_7_2);
        message_7_2.setVisible(false);

        con_3
          .getByName("btn_word_plus_1")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            message_7_2.setVisible(true);
            con_3.setVisible(false);
            con_4.setVisible(true);
            showContent
              .getByName("content_div_7_3")
              .createFromHTML(
                `<p class="content_text">연꽃잎을 위로 세운 입상화문대라는 장식이에요. 하늘을 향해 꽃이 활짝 핀 것처럼 보여요.</p>`
              );
            _this.btn_next.setVisible(true);
          });
        con_4
          .getByName("ico_bow_2")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            con_4.getByName("ico_bow_2").setVisible(false);
            con_4.getByName("ico_bow_2_l").setVisible(true);
            con_4.getByName("img_point_3").setVisible(false);
            con_4.getByName("img_point_4").setVisible(true);
            messageBox_7_2.setRacText("측면 입상화문대");
            _this.btn_next.setVisible(true);
          });
        con_4
          .getByName("ico_bow_2_l")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            con_4.getByName("ico_bow_2").setVisible(true);
            con_4.getByName("ico_bow_2_l").setVisible(false);
            con_4.getByName("img_point_3").setVisible(true);
            con_4.getByName("img_point_4").setVisible(false);
            messageBox_7_2.setRacText("정면 입상화문대");
          });

        break;

      case "point_7_13":
        _this.btn_next.setVisible(false);
        let con_5 = showContent.getByName("point_7_13_1");
        let con_6 = showContent.getByName("point_7_13_2");

        _this.tweens.add({
          targets: con_5.getByName("eff_point_1"),
          alpha: { from: 0, to: 1 },
          duration: 1000,
          ease: "Sine.easeInOut",
          repeat: -1,
          yoyo: true,
        });

        const img1_1 = _this.add.image(149, 922, "img_point_7_6_1_1");
        const img1_2 = _this.add.image(149, 992, "img_point_7_6_1_2");
        const img1_3 = _this.add.image(149, 1052, "img_point_7_6_1_3");
        const img1_4 = _this.add.image(149, 1089, "img_point_7_6_1_4");
        const img2_1 = _this.add.image(-7, 914, "img_point_7_6_2_1");
        const img2_2 = _this.add.image(-7, 970, "img_point_7_6_2_2");
        const img2_3 = _this.add.image(-5, 1025, "img_point_7_6_2_3");
        const img2_4 = _this.add.image(-7, 1082, "img_point_7_6_2_4");

        const imagesGroup1 = [img1_1, img1_2, img1_3, img1_4];
        const imagesGroup2 = [img2_1, img2_2, img2_3, img2_4];
        imagesGroup1.forEach((img) => {
          img.setAlpha(0).setVisible(false);
          showContent.add(img);
        });

        imagesGroup2.forEach((img) => {
          img.setAlpha(0).setVisible(false);
          showContent.add(img);
        });

        con_5
          .getByName("btn_word_plus_2")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            con_5.setVisible(false);
            con_6.setVisible(true);

            animateImages(imagesGroup1, () => {
              _this.time.delayedCall(500, () => {
                animateImages(imagesGroup2, () => {
                  _this.btn_next.setVisible(true);
                });
              });
            });
          });

        function animateImages(imageGroup, onComplete) {
          let index = 0;

          const animateNext = () => {
            if (index < imageGroup.length) {
              const img = imageGroup[index];
              img.setVisible(true);

              _this.tweens.add({
                targets: img,
                alpha: 1,
                duration: 770,
                ease: "Sine.easeInOut",
                onComplete: () => {
                  if (imageGroup === imagesGroup1 && img === img1_4) {
                    _this.time.delayedCall(700, () => {
                      showContent
                        .getByName("content_div_7_2")
                        .setHTML(
                          `<p class="content_text">‘淸寧(청녕) 4년’은 고려 문종 12년인 1058년을 의미해요</p>`
                        );
                    });
                  }
                  index++;
                  animateNext(); // 다음 이미지 애니메이션
                },
              });
            } else if (onComplete) {
              onComplete(); // 그룹 애니메이션 완료 후 콜백 호출
            }
          };
          animateNext(); // 첫 번째 애니메이션 시작
        }
        break;

      case "point_7_21":
        const btn_play = this.add
          .image(288, 1410, "btn_play")
          .setOrigin(0.5, 0.5);
        btn_play.setInteractive();
        showContent.add(btn_play);

        const btn_pause = this.add
          .image(288, 1410, "btn_pause")
          .setOrigin(0.5, 0.5);
        btn_pause.setInteractive();
        btn_pause.visible = false;
        showContent.add(btn_pause);
        this.audio = this.sound.add("audio_point_7_1", {
          loop: false,
          volume: 1.0,
        });

        let isPaused = false;

        btn_play.on("pointerdown", () => {
          if (this.audio) {
            if (isPaused) {
              this.audio.resume();
              isPaused = false;
            } else {
              this.audio.play();
            }
          }
          btn_play.visible = false;
          btn_pause.visible = true;
        });

        btn_pause.on("pointerdown", () => {
          if (this.audio && this.audio.isPlaying) {
            this.audio.pause();
            isPaused = true;
          }
          btn_play.visible = true;
          btn_pause.visible = false;
        });

        this.audio.on("complete", () => {
          btn_play.visible = true;
          btn_pause.visible = false;
          isPaused = false;
        });
        break;

      case "point_7_31":
        if (this.audio && this.audio.isPlaying) {
          this.audio.stop();
        }
        break;

      case "point_8_11":
        _this.btn_next.setVisible(false);

        _this.tweens.add({
          targets: showContent.getByName("eff_point_8_1"),
          alpha: { from: 0, to: 1 },
          duration: 1000,
          ease: "Sine.easeInOut",
          repeat: -1,
          yoyo: true,
        });

        const messageBox_8_1 = new RacRoundText(_this, {
          xPos: 180,
          yPos: 696,
          width: 475,
          height: 152,
          round: 25,
          bgColor: 0x000000,
          color: "#fff",
          bgAlpha: 0.5,
          text: "범자\n" + "ॐ(옴, Om)",
          align: "center",
        });
        const message_8_1 = messageBox_8_1.getContainer();
        showContent.add(message_8_1);
        message_8_1.setVisible(false);

        showContent
          .getByName("eff_point_8_1")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("btn_word_plus_3").setVisible(false);
            showContent.getByName("eff_point_8_1").setVisible(false);
            showContent.getByName("img_point_8_1").setVisible(false);
            showContent.getByName("img_point_8_2").setVisible(true);
            showContent
              .getByName("content_div_8_1")
              .setHTML(
                `<p class="content_text">범자, ॐ(옴, Om) ॐ मणि पद्मे हूँ(옴마니 반메훔)은 모든 죄악이 소멸되고, 모든 공덕이 생겨나는 진언을 뜻해요.</p>`
              );
            message_8_1.setVisible(true);
            _this.btn_next.setVisible(true);
          });

        break;

      case "point_8_12":
        _this.btn_next.setVisible(false);
        _this.tweens.add({
          targets: showContent.getByName("eff_point_8_2"),
          alpha: { from: 0, to: 1 },
          duration: 1000,
          ease: "Sine.easeInOut",
          repeat: -1,
          yoyo: true,
        });

        const messageBox_8_2 = new RacRoundText(_this, {
          xPos: 290,
          yPos: 630,
          width: 560,
          height: 90,
          round: 25,
          bgColor: 0xffffff,
          color: "#000000",
          bgAlpha: 0.7,
          text: "받침부에 새겨진 용의 모습 정면",
          align: "center",
        });
        const message_8_2 = messageBox_8_2.getContainer();
        showContent.add(message_8_2);
        message_8_2.setVisible(false);

        showContent
          .getByName("eff_point_8_2")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("btn_word_plus_4").setVisible(false);
            showContent.getByName("eff_point_8_2").setVisible(false);
            showContent.getByName("img_point_8_12").setVisible(false);
            showContent.getByName("ico_bow_3").setVisible(true);
            showContent.getByName("img_point_8_3").setVisible(true);
            showContent.getByName("text_47").setVisible(true);
            // showContent.getByName("text_48").setVisible(true);
            showContent
              .getByName("content_div_8_2")
              .setHTML(
                `<p class="content_text">받침부에는 한 마리의 용이 전체를 감싸듯 새겨져 있어요.</p>`
              );
            message_8_2.setVisible(true);
          });

        showContent
          .getByName("ico_bow_3")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("ico_bow_3").setVisible(false);
            showContent.getByName("ico_bow_3_l").setVisible(true);
            showContent.getByName("img_point_8_3").setVisible(false);
            // showContent.getByName("text_47").setVisible(false);
            showContent.getByName("img_point_8_4").setVisible(true);
            messageBox_8_2.setRacText("받침부에 새겨진 용의 모습 측면");
            _this.btn_next.setVisible(true);
          });

        showContent
          .getByName("ico_bow_3_l")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("ico_bow_3").setVisible(true);
            showContent.getByName("ico_bow_3_l").setVisible(false);
            showContent.getByName("img_point_8_3").setVisible(true);
            // showContent.getByName("text_47").setVisible(true);
            showContent.getByName("img_point_8_4").setVisible(false);
            messageBox_8_2.setRacText("받침부에 새겨진 용의 모습 정면");
          });

        break;

      case "point_8_21":
        _this.btn_next.setVisible(false);
        showContent
          .getByName("ico_bow_4")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("ico_bow_4").setVisible(false);
            showContent.getByName("ico_bow_4_l").setVisible(true);
            showContent.getByName("img_point_8_5").setVisible(false);
            showContent.getByName("img_point_8_6").setVisible(true);
            showContent.getByName("text_point_8_5").setVisible(false);
            _this.btn_next.setVisible(true);
          });

        showContent
          .getByName("ico_bow_4_l")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("ico_bow_4").setVisible(true);
            showContent.getByName("ico_bow_4_l").setVisible(false);
            showContent.getByName("img_point_8_5").setVisible(true);
            showContent.getByName("img_point_8_6").setVisible(false);
            showContent.getByName("text_point_8_5").setVisible(true);
          });

        break;

      case "point_8_22":
        _this.btn_next.setVisible(false);

        showContent.getByName("text_94").setDepth(1);

        let btns = ["img_point_8_8", "img_point_8_9", "img_point_8_10"];
        for (let i = 0; i < btns.length; i++) {
          let btn = showContent
            .getByName(btns[i])
            .setInteractive({ cursor: "pointer" });
          _this.input.setDraggable(btn);
          btn.originalX = btn.x;
          btn.originalY = btn.y;
        }

        _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          gameObject.setDepth(200);
          gameObject.setPosition(dragX, dragY);
        });

        let size = 330;
        let dropZoneBox = _this.add
          .zone(540, 950, size, size)
          .setRectangleDropZone(size, size)
          .setInteractive();

        _this.input.on("dragenter", function (pointer, gameObject, dropZone) {
          gameObject.isDropable = true;
        });

        _this.input.on("dragleave", function (pointer, gameObject, dropZone) {
          gameObject.isDropable = false;
        });

        let doneCount = 0;
        let isDoneBtn;
        _this.input.on("dragend", function (pointer, gameObject, dropZone) {
          if (dropZone && gameObject.isDropable) {
            if (doneCount === 0) {
              isDoneBtn = gameObject;
              doneCount = 1;
              gameObject.x = 290;
              gameObject.y = 860;
              _this.tweens.add({
                targets: gameObject,
                y: { from: 860, to: 530 },
                duration: 500,
                ease: "Power2",
                onStart: () => {
                  showContent.getByName("img_point_8_7").setVisible(false);
                  showContent.getByName("img_point_8_11").setVisible(true);
                  gameObject.setTexture(gameObject.name + "_on");
                  _this.btn_next.setVisible(true);
                },
                onComplete: () => {
                  _this.tweens.add({
                    targets: showContent.getByName("eff_point_8_3"),
                    y: { from: 548, to: 5 },
                    scale: { from: 0, to: 1 },
                    duration: 3000,
                    ease: "Sine.easeInOut",
                    onStart: () => {
                      showContent.getByName("eff_point_8_3").setVisible(true);
                      dropZoneBox.setY(650);
                    },
                    onComplete: () => {},
                  });
                },
              });
            } else {
              doneCount++;
              isDoneBtn.setVisible(false);
              isDoneBtn = gameObject;
              gameObject.x = 290;
              gameObject.y = 860;
              _this.tweens.add({
                targets: gameObject,
                y: { from: 860, to: 530 },
                duration: 500,
                ease: "Power2",
                onStart: () => {
                  gameObject.setTexture(gameObject.name + "_on");
                },
                onComplete: () => {
                  _this.tweens.add({
                    targets: showContent.getByName("eff_point_8_3"),
                    y: { from: 548, to: 5 },
                    scale: { from: 0, to: 1 },
                    duration: 3000,
                    ease: "Sine.easeInOut",
                    onStart: () => {
                      // if(doneCount > 0) {
                      // 	showContent.getByName("bg_point_8_1").setVisible(false);
                      // 	_this.btn_next.setVisible(true);
                      // }
                    },
                    onComplete: () => {},
                  });
                },
              });
            }
          } else {
            gameObject.x = gameObject.originalX;
            gameObject.y = gameObject.originalY;
          }
        });

        break;

      // case 'point_8_22':
      //
      //
      //
      // 	break;

      default:
        break;
    }
  }

  point_n_31() {
    let pointNData = {
      point_1: {
        title: "다양한 종교와 사상이\n" + "공존했던 고려의 문화", //인종시호
        text: "고려는 주로 불교를 믿었지만 도교도 믿으며 왕실과 나라의 안녕을 빌고, 재난과 질병을 물리치려고 했답니다.",
        name: "<호장 김지원의 딸 묘지명>",
        location: "고려, 고려 1실, 덕수 2580",
        scale: 1.6,
      },
      point_2: {
        title: "정치에 활용한 유교 이념", //희준
        text: "고려시대에는 왕실부터 일반 백성까지 불교를 믿었지만 유교도 존중해 중요한 유교 ‘의례’를 정치에 활용했어요.",
        name: "<희준>",
        location: "조선, 15-16세기, 조선실, 신수 8087",
        scale: 1.8,
      },
      point_3: {
        title: "마음을 하나로 모으는 불교", //보살상
        text:
          "고려의 불교는 왕실부터 일반 백성까지 대부분이 믿는 국가 종교였어요. " +
          "고려 사람들은 불교를 통해 개인의 행복과 국가의 안녕을 기원했어요.",
        name: "<부처>",
        location: "고려, 10세기, 보물, 불교조각실, 덕수 2748",
        scale: 1.04,
      },
      point_4: {
        title: "아름다움을 담는 그릇", //모자합
        text:
          "모자합 주변에는 고려 개경 여성의 다양한 " +
          "화장용품을 담은 그릇이 전시되어 있어요. " +
          "아름다움을 담는 그릇, 화장 용기를 감상하면서 " +
          "나를 아름답게 꾸미고자 했던 고려 사람의 마음을 헤아려 보세요.",
        name: "<청자 기름병>",
        location: "고려, 12-13세기, 고려 1실, 덕수 3444",
        scale: 2.24,
      },
      point_5: {
        title: "고려청자를 다양하게 활용한 지혜", //청자기와
        text:
          "고려 사람들은 생활 속에서 청자를 다양하게 " +
          "활용했어요. 우리가 흔히 알고 있는 그릇, " +
          "찻잔뿐만 아니라 청자 기와로 지붕을 덮은 " +
          "양이정이라는 정자까지 만들었어요.",
        name: "<번개무늬가 새겨진 청자 배모양 그릇>",
        location: "고려, 12세기, 고려 1실, 본관 2148",
        scale: 1.48,
      },
      point_6: {
        title: "뛰어난 인쇄술", //금속활자
        text: "금속활자 인쇄술은 필요한 활자를 모아 판에 고정하고 종이에 찍어내는 방식이에요. 짧은 시간 안에 많은 내용을 인쇄할 수 있었고 보관이 편리했어요.",
        name: "<한글 활자>",
        location: "조선, 조선실, 본관 3369",
        scale: 2,
      },
      point_7: {
        title: "고려의 국교로 지정된 불교", //청녕 4년 종
        text:
          "고려 사람들은 다양한 종교를 믿었어요. \n" +
          "그 중 불교는 왕실의 보호와 지원을 받으면서\n" +
          "발전했어요. 사찰이 늘어나면서 범종 역시 많이\n" +
          "만들어졌답니다.",
        name: "<보신각 종>",
        location: "조선, 1468년, 보물, 야외정원, 신수 18240",
        scale: 0.92,
      },
      point_8: {
        title: "다양한 소재와 무늬의 조화", //향완
        text: "청동 바탕에 은실로 그림을 표현하여 만든 향완은 고려시대의 대표 불교 공예품이에요.",
        name: "<기린을 본떠 만든 청자 향로>",
        location: "고려, 12세기, 고려 1실, 덕수 3063",
        scale: 1.44,
      },
    };

    this.temp_p3.setVisible(true);

    this.img_lp
      .setTexture("img_" + this.user.currentPoint)
      .setScale(pointNData[this.user.currentPoint].scale);

    this.temp_p3_title.setText(pointNData[this.user.currentPoint].title);
    this.temp_p3_text.createFromHTML(
      `<p class="content_text">${pointNData[this.user.currentPoint].text}</p>`
    );
    this.temp_p3_name.setText(pointNData[this.user.currentPoint].name);
    this.temp_p3_location.setText(pointNData[this.user.currentPoint].location);
  }

  point_n_41() {
    let pointNData = {
      point_1: {
        text:
          "현대에는 죽음을 어떤 방식으로 기록할까요? 요즘은 대부분 납골함으로 죽음을 기록하고 추모해요.<br /><br />" +
          "나의 묘지명에 <인종의 시호를 올리며 지은 글>처럼 인품과 관련한 기록을 적는다면, 나의 어떤 장점을 적어볼 수 있을까요?",
      },
      point_2: {
        text:
          "우리나라 명절에 지내는 차례를 알고 있나요? 오늘날에도 차례를 지낼 때 조상님에게 술잔에 술을 따라 올리는 것은 예나 지금이나 같아요.<br /><br />" +
          "모습은 달라졌지만 역할과 의미는 현재까지 이어지고 있다는 사실, 기억해 주세요!",
      },
      point_3: {
        text:
          "우리는 이해심이 많고 너그러운 사람을 가리켜서 ‘보살이다’라고 해요. 종교를 막론하고 사람들이 느끼는 보살의 이미지를 잘 보여주는 단어지요.<br /><br />" +
          "오늘 하루도 보살 같은 마음으로 너그럽게 이해하고 지내보면 어떨까요?",
      },
      point_4: {
        text:
          "시대에 따라 미의 기준이 바뀌어도 나를 아름답게 꾸미고자 하는 마음은 변함없어요.<br /><br />" +
          "나를 아름답게 만드는 방법은 무엇일까요? 나다운 아름다움을 생각해 보세요!",
      },
      point_5: {
        text: "푸른색 기와, 청기와로 지붕을 얹어 만든 청와대를 알고 있나요? 청와대는 고려시대부터 이어진 푸른색 기와의 전통이 현대와 만나 조화를 보여주는 장소랍니다.<br /><br />우리 주변에 전통과 현대가 만나 조화를 이루는 것들은 무엇이 있을까요?",
      },
      point_6: {
        text: "우리는 기록을 통해 정보를 보관·보존하고 싶어 해요. 시대가 갈수록 인쇄 기술이 발전하면서 오늘날에는 전차책이 발간되기까지 했어요.<br /><br />오늘만큼은 손으로 종이 책장을 넘기면서 활자로 찍은 글자의 가치를 되새겨볼까요?",
      },
      point_7: {
        text: "우리 주변에서 들리는 종소리는 어떤 것들이 있을까요? 한 해가 지고 새해가 오는 밤에는 제야의 종소리를 들을 수 있어요.<br /><br />우리 주변의 소리를 귀 기울여 보세요. 여러분 마음에 위안을 주는 소리를 찾았나요?",
      },
      point_8: {
        text: `<span style="letter-spacing:-0.01em">주변 환경과 공간의 분위기를 바꿔주는 향은 불교 의례 공간을 신성하게 만들어줬어요. 요즘도 향은 ‘향 + 인테리어=향테리어’라는 신조어가 생길 정도로 인기가 많아요.<br /><br />지금 여러분이 서 있는 이 공간을 향기로 가득 채운다면, 어떤 향이 가장 잘 어울릴까요?</span>`,
      },
    };
    this.point_n_41_text.setHTML(
      `<p class="think_together">${pointNData[this.user.currentPoint].text}</p>`
    );
    this.temp_p4.setVisible(true);
  }

  addedEventListener: boolean = false;
  videoElement: any;
  stream: any;
  maskGraphics: any;
  slideImages: any;
  bowSlideLeft: any;
  bowSlideRight: any;
  imageSlideViewerBox: any;
  imageSlideViewer() {
    if (this.slideImages && this.imageSlideViewerBox) {
      this.slideImages.destroy();
      this.imageSlideViewerBox.destroy();
    }
    this.slideImages = null;
    const maskGraphics = this.add.graphics();
    this.imageSlideViewerBox = maskGraphics;
    const yImageCount = this.imageDragViewerConf.row;
    const xImageCount = this.imageDragViewerConf.col; // 가로 이미지 개수
    const onlyXImage = this.imageDragViewerConf.row < 1;
    const xPos = this.imageDragViewerConf.xPos
      ? this.imageDragViewerConf.xPos
      : 50; // 이미지의 x 좌표
    const yPos = this.imageDragViewerConf.yPos
      ? this.imageDragViewerConf.yPos
      : 600 + 132; // 이미지의 y 좌표
    const imageWidth = this.imageDragViewerConf.imageWidth
      ? this.imageDragViewerConf.imageWidth
      : 976; // 이미지의 가로 길이
    const imageHeight = this.imageDragViewerConf.imageHeight
      ? this.imageDragViewerConf.imageHeight
      : 986; // 이미지의 세로 길이
    const setScale = this.imageDragViewerConf.scale
      ? this.imageDragViewerConf.scale
      : 1; // 이미지 크기를 50%로 축소
    const cornerRadius = 55; // 둥근 모서리 반경
    maskGraphics.fillStyle(0xffffff);
    maskGraphics.fillRoundedRect(
      xPos,
      yPos,
      imageWidth,
      imageHeight,
      cornerRadius
    );
    const mask = maskGraphics.createGeometryMask();
    this.maskGraphics = maskGraphics;

    let currentRow = 0;
    let currentCol = 1;
    const updateImage = () => {
      const textureKey = currentRow + "_" + currentCol;
      if (this.slideImages) {
        this.slideImages.setTexture(textureKey);
      } else {
        this.slideImages = this.add.image(
          xPos + imageWidth / 2,
          yPos + imageHeight / 2,
          textureKey
        );
        this.slideImages.setMask(mask);
        this.slideImages.setDepth(0);
        this.slideImages.setScale(setScale); // 이미지 크기를 50%로 축소
        this.slideImages.setInteractive();
        this.input.setDraggable(this.slideImages);
      }
      if (this.bowSlideLeft || this.bowSlideRight) {
        this.tweens.add({
          targets: [this.bowSlideLeft, this.bowSlideRight],
          alpha: 0,
          duration: 300,
          ease: "Sine.easeOut",
        });
      }
    };

    updateImage(); // 초기 이미지 표시
    let bowXAddPos = [70, 660];
    let bowScale = 1.5;
    let bowAlpha = 0.8;
    if (this.imageDragViewerConf.scale > 1) {
      bowXAddPos = [90, 890];
      bowScale = 2;
    }
    this.bowSlideLeft = this.add.image(
      xPos + bowXAddPos[0],
      yPos + imageHeight / 2,
      "ico_rotate_1"
    );
    this.bowSlideLeft.setScale(bowScale);
    this.bowSlideLeft.setAlpha(bowAlpha);

    this.bowSlideRight = this.add.image(
      xPos + bowXAddPos[1],
      yPos + imageHeight / 2,
      "ico_rotate_2"
    );
    this.bowSlideRight.setScale(bowScale);
    this.bowSlideRight.setAlpha(bowAlpha);

    let startX = 0;
    let startY = 0;

    this.input.on("dragstart", function (pointer) {
      startX = pointer.x;
      startY = pointer.y;
    });

    this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
      const dragDistanceX = pointer.x - startX;
      const dragDistanceY = pointer.y - startY;
      const threshold = 15;
      const thresholdY = 30;

      // 좌우 드래그 처리
      if (Math.abs(dragDistanceX) > threshold) {
        if (dragDistanceX < 0) {
          currentCol = currentCol === xImageCount ? 1 : currentCol + 1;
        } else {
          currentCol = currentCol === 1 ? xImageCount : currentCol - 1;
        }

        updateImage();
        startX = pointer.x;
      }

      // 상하 드래그 처리
      else if (Math.abs(dragDistanceY) > threshold && !onlyXImage) {
        if (dragDistanceY > 0 && currentRow < yImageCount) {
          currentRow += 1;
        } else if (dragDistanceY < 0 && currentRow > 0) {
          currentRow -= 1;
        }

        updateImage();
        startY = pointer.y;
      }
    });
  }

  detachImageSlideViewer() {
    if (this.slideImages) this.slideImages.destroy();
    if (this.imageSlideViewerBox) this.imageSlideViewerBox.destroy();
    if (this.bowSlideLeft) this.bowSlideLeft.destroy();
    if (this.bowSlideRight) this.bowSlideRight.destroy();
    this.input.off("drag");
  }

  exitScene(data = {}) {
    // if (this.hasimageSlideViewer) this.detachImageSlideViewer();
    if (this.textures) {
      this.textures.remove("videoTexture");
      this.textures = null;
    }
    if (this.videoElement) {
      this.videoElement.remove();
      this.videoElement = null;
    }
    if (this.stream) {
      let tracks = this.stream.getTracks();
      tracks.forEach((track) => track.stop());
      this.stream = null;
    }
    this.btn_next.removeAllListeners();
    // this.btn_prev.removeAllListeners();
    this.btn_close.removeAllListeners();
    // this.prevResourceManager = {};
    this.scene.resume("MapPlay", data);
    this.scene.stop("ItrcDiversity");
    this.scene.remove("ItrcDiversity");
  }
}
