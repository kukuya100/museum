import itrcopAssetPackUrl from "../../static/assets/itrcop/itrcop.json";
import Util from "../Util";
import RacRoundText from "../components/RacRoundText";
import ModaAlert from "../components/ModaAlert";
import point1AssetPackUrl from "../../static/assets/itrcop/point_1/point1.json";
import point2AssetPackUrl from "../../static/assets/itrcop/point_2/point2.json";
import point3AssetPackUrl from "../../static/assets/itrcop/point_3/point3.json";
import point4AssetPackUrl from "../../static/assets/itrcop/point_4/point4.json";
import point5AssetPackUrl from "../../static/assets/itrcop/point_5/point5.json";
import point6AssetPackUrl from "../../static/assets/itrcop/point_6/point6.json";
import point7AssetPackUrl from "../../static/assets/itrcop/point_7/point7.json";
import point8AssetPackUrl from "../../static/assets/itrcop/point_8/point8.json";
import $ from "jquery";

export default class ItrcOpenness extends Phaser.Scene {
  contentImageX: any;
  contentImageY: any;
  constructor() {
    super("ItrcOpenness");
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
    bg_interactive.setOrigin(0, 0);

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

    // temp_p3_text_1
    const temp_p3_text_1 = this.add.text(288, 695, "", {});
    temp_p3_text_1.setOrigin(0.5, 0);
    temp_p3_text_1.text = "연계 전시품도 관람해 보세요.";
    temp_p3_text_1.setStyle({
      align: "center",
      color: "#fff",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "27pt",
    });
    temp_p3_text_1.setLineSpacing(2);
    temp_p3.add(temp_p3_text_1);

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

    // temp_p3_tempText
    const temp_p3_tempText = this.add.text(-100, 1386, "", {});
    temp_p3_tempText.name = "temp_p3_tempText";
    temp_p3_tempText.text = "1";
    temp_p3_tempText.setStyle({
      align: "center",
      color: "#568CFF",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "27pt",
      fixedWidth: 776,
    });
    temp_p3_tempText.setOrigin(0, 0);
    temp_p3_tempText.setVisible(false);
    temp_p3.add(temp_p3_tempText);
    this.temp_p3_tempText = temp_p3_tempText;

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
    const temp_p3_title = this.add.text(
      titleX,
      titleY,
      "고려 자부심의 상징",
      titleStyle
    );
    temp_p3_title.name = "temp_p3_title";
    temp_p3_title.setOrigin(0.5, 0);
    temp_p3.add(temp_p3_title);

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

    // point_n_41_quote
    const point_n_41_quote = this.add.text(-70, 670, "", {});
    point_n_41_quote.visible = false;
    point_n_41_quote.text =
      "‘한마디 말로써 기록하니, 천년만년이 지나도 어찌 잊히리’";
    point_n_41_quote.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "48px",
    });
    point_n_41_quote.setLineSpacing(0.3 * 48);
    point_n_41_quote.setLetterSpacing(-0.02 * 48);
    // point_n_41_quote.setWordWrapWidth(715);
    temp_p4.add(point_n_41_quote);

    // point_n_41_quoteAuthor
    const point_n_41_quoteAuthor = this.add.text(448, 865, "", {});
    point_n_41_quoteAuthor.setOrigin(0.5, 0);
    point_n_41_quoteAuthor.visible = false;
    point_n_41_quoteAuthor.text = "복녕궁주 묘지명 中";
    point_n_41_quoteAuthor.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "48px",
    });
    point_n_41_quoteAuthor.setLineSpacing(0.3 * 48);
    point_n_41_quoteAuthor.setLetterSpacing(-0.02 * 48);
    // point_n_41_quoteAuthor.setWordWrapWidth(715);
    temp_p4.add(point_n_41_quoteAuthor);

    // point_1
    const point_1 = this.add.container(250, 90);
    point_1.visible = false;

    // point_1_11
    const point_1_11 = this.add.container(0, 0);
    point_1_11.name = "point_1_11";
    point_1_11.visible = false;
    point_1.add(point_1_11);

    // btn_in_next
    const btn_in_next = this.add.image(685, 1707, "btn_next");
    btn_in_next.name = "btn_in_next";
    point_1_11.add(btn_in_next);

    // text_27
    const text_27 = this.add.text(
      titleX,
      titleY,
      "보름달처럼 환한 천자의 따님",
      titleStyle
    );
    text_27.name = "text_27";
    text_27.setOrigin(0.5, 0);
    point_1_11.add(text_27);

    const content_open_1_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">묘지명에는 복녕궁주의 얼굴 생김새를 표현한 구절이 있어요. “천자의 따님이여, 보름달 같으셨네.” 눈을 감고 궁주의 얼굴을 머릿속으로 상상해 보세요.</p>`
      );
    content_open_1_1.name = "content_open_1_1"; // case 애니메이션으로 추후 텍스트 변경을 위해 추가
    this.content_open_1_1 = content_open_1_1;
    point_1_11.add(content_open_1_1);

    // img_point_1_1
    const img_point_1_1 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_1_1"
    );
    point_1_11.add(img_point_1_1);

    // eff_point_1_1
    const eff_point_1_1 = this.add.image(634 + 12, 994 + 24, "eff_point_1_1");
    eff_point_1_1.name = "eff_point_1_1";
    eff_point_1_1.visible = false;
    point_1_11.add(eff_point_1_1);

    // text_122
    const text_122 = this.add.text(569 + 12, 854 + 30, "", {});
    text_122.name = "text_122";
    text_122.setOrigin(0.5, 0);
    text_122.visible = false;
    text_122.text = "해\n동\n복\n녕\n궁\n주";
    text_122.setStyle({
      align: "center",
      color: "#ffffff",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_122.setWordWrapWidth(800);
    point_1_11.add(text_122);

    // point_1_21
    const point_1_21 = this.add.container(0, 0);
    point_1_21.name = "point_1_21";
    point_1_21.visible = false;
    point_1.add(point_1_21);

    const content_open_1_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">고려가요, <a class="ex_popup_title" data-content="* 풍입송:<br />풍입송은 연회가 끝났을 때 신하들이 왕의 만수무강을 빌던 노래예요."><풍입송></a>에는 신하들이 고려 왕을 ‘해동천자’로 표현했어요. 고려 사람들이 고려를 ‘천자의 나라’로 인식했음을 확인할 수 있어요.</p>`
      );
    point_1_21.add(content_open_1_2);

    // text_83
    const text_83 = this.add.text(titleX, titleY, "해동천자", titleStyle);
    text_83.name = "text_83";
    text_83.setOrigin(0.5, 0);
    point_1_21.add(text_83);

    // bg_img_point
    const bg_img_point = this.add.image(
      contentImageX,
      contentImageY,
      "bg_img_point"
    );
    point_1_21.add(bg_img_point);

    const content_open_1_3 = this.add
      .dom(contentImageX, contentImageY - 1032 + 1326 - 116)
      .createFromHTML(
        `<p class="content_open_1_3" style="font-family:'KoddiUDOnGothic-Bold';font-size:44px;text-align:center;line-height:400%;margin-top:-530px">해동(海東)의 천자(天子)이신<br />임금께서는 부처와 하늘을 보조하여<br />교화(敎化)를 펴러 오셨네.</p>`
      );
    point_1_21.add(content_open_1_3);

    // text_115
    const text_115 = this.add.text(
      contentImageX + 112,
      contentImageY + 284,
      "『고려사』 속악(俗樂) 풍입송(風入松)",
      {}
    );
    text_115.setOrigin(0.5, 0);
    text_115.setStyle({
      align: "center",
      color: "#080809",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35px",
    });
    text_115.setLineSpacing(2);
    text_115.setWordWrapWidth(800);
    point_1_21.add(text_115);

    // point_1_31
    const point_1_31 = this.add.container(0, 0);
    point_1_31.name = "point_1_31";
    point_1_31.visible = false;
    point_1.add(point_1_31);

    // point_1_41
    const point_1_41 = this.add.container(0, 0);
    point_1_41.name = "point_1_41";
    point_1_41.visible = false;
    point_1.add(point_1_41);

    // point_2
    const point_2 = this.add.container(250, 90);
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
      "청자에 새겨진 글씨",
      titleStyle
    );
    text_1.name = "text_1";
    text_1.setOrigin(0.5, 0);
    point_2_11.add(text_1);

    const content_open_2_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">몇 글자의 한자가 새겨져 있나요? 전시실에서 보이지 않는 부분을 아래 사진 속에서 자세히 확인해 보세요.</p>`
      );
    point_2_11.add(content_open_2_1);

    // bg_img_box
    const bg_img_box = this.add.image(
      contentImageX,
      contentImageY,
      "bg_img_box"
    );
    bg_img_box.visible = false;
    point_2_11.add(bg_img_box);

    // text_119
    const text_119 = this.add.text(
      contentImageX,
      contentImageY + 536,
      "사진을 오른쪽으로 천천히 돌려보세요.",
      {}
    );
    text_119.setOrigin(0.5, 0);
    text_119.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_119.setLineSpacing(2);
    text_119.setWordWrapWidth(850);
    point_2_11.add(text_119);

    // point_2_12
    const point_2_12 = this.add.container(0, 0);
    point_2_12.name = "point_2_12";
    point_2_12.visible = false;
    point_2.add(point_2_12);

    // text_2
    const text_2 = this.add.text(
      titleX,
      titleY - 32,
      "향상원방내시우번\n(向上員房內侍右番)",
      titleStyle
    );
    text_2.setStyle({
      align: "center",
    });
    text_2.name = "text_2";
    text_2.setOrigin(0.5, 0);
    point_2_12.add(text_2);

    const content_open_2_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">‘향상원방내시우번(向上員房內侍右番)’은 “상원방 내시우번에서 왕에게 바친다.”라는 내용이에요.\n여기서 ‘內侍(내시)’는 무엇을 뜻할까요?</p>`
      );
    point_2_12.add(content_open_2_2);

    // text_120
    const text_120 = this.add.text(contentImageX, contentImageY + 536, "", {});
    text_120.setOrigin(0.5, 0);
    text_120.text = "사진을 오른쪽으로 천천히 돌려보세요.";
    text_120.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_120.setLineSpacing(2);
    text_120.setWordWrapWidth(800);
    point_2_12.add(text_120);

    // point_2_21
    const point_2_21 = this.add.container(0, 0);
    point_2_21.name = "point_2_21";
    point_2_21.visible = false;
    point_2.add(point_2_21);

    // text_4
    const text_4 = this.add.text(
      titleX,
      titleY,
      "국왕을 보좌하는 조직, 내시",
      titleStyle
    );
    text_4.name = "text_4";
    text_4.setOrigin(0.5, 0);
    point_2_21.add(text_4);

    const content_open_2_3 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">‘內侍(내시)’에 뽑힌 사람들은 국왕을 <a class="ex_popup_title" data-content="* 보좌:<br />나보다 높은 직책을 가진 사람의 일을 도와 처리해 주는 것을 말해요.">보좌</a>하며, 조언하고 정책 결정을 돕는 등의 중요한 업무를 맡아 수행했어요.</p>`
      );
    point_2_21.add(content_open_2_3);

    // bg_point_2_21
    const bg_point_2_21 = this.add.image(288, 1060, "bg_img_point");
    point_2_21.add(bg_point_2_21);

    // text_41
    const text_41 = this.add.text(208 + 40, 660 + 68, "", {});
    text_41.setOrigin(0.5, 0);
    text_41.text = "『고려사』에 실린 이제현의 글";
    text_41.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "40pt",
    });
    text_41.setLineSpacing(0.5);
    text_41.setWordWrapWidth(850);
    point_2_21.add(text_41);

    const content_open_2_4 = this.add
      .dom(-80 + 144, 860 - 162 * 2)
      .createFromHTML(
        `<p class="content_text" style="width:738px;line-height:1.8;font-size:32pt;color:#000">문종은 ··· 현명하고 재주가 있는 자들을 등용하였으며, ···<b style="color:#004EE0">내시는 반드시 공로와 재능이 있는 자를 가려서 중용하되 20여 명에 지나지 않았다.</b> 쓸모 없는 관원들을 줄여서 일을 간단하게 하고 비용을 절약하여 나라를 부유하게 하였다.</p>`
      );
    point_2_21.add(content_open_2_4);

    // text_43
    const text_43 = this.add.text(481 - 60 + 18, 1417 - 76, "", {});
    text_43.setOrigin(0.5, 0);
    text_43.text = "『고려사』 권9 세가 권제9";
    text_43.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_43.setLineSpacing(2);
    text_43.setWordWrapWidth(950);
    point_2_21.add(text_43);

    // point_2_22
    const point_2_22 = this.add.container(0, 0);
    point_2_22.name = "point_2_22";
    point_2_22.visible = false;
    point_2.add(point_2_22);

    // text_6
    const text_6 = this.add.text(298, 77, "", {});
    text_6.setOrigin(0.5, 0);
    text_6.text = "고려시대 내시 선발";
    text_6.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_6.setLineSpacing(0.5);
    text_6.setWordWrapWidth(800);
    point_2_22.add(text_6);

    // text_7
    const text_7 = this.add.text(-120, 193, "", {});
    text_7.text = "어떤 사람들이 내시에 선발되었을까요?";
    text_7.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_7.setLineSpacing(2);
    text_7.setWordWrapWidth(850, true);
    point_2_22.add(text_7);

    // step_03_inner_01
    const step_03_inner_01 = this.add.container(-238, 262);
    point_2_22.add(step_03_inner_01);

    // bg_type_99
    const bg_type_99 = this.add.image(0, 0, "bg_text_03");
    bg_type_99.setOrigin(0, 0);
    step_03_inner_01.add(bg_type_99);

    // text_14
    const text_14 = this.add.text(277, 114, "", {});
    text_14.setOrigin(0.5, 0);
    text_14.text = "평가항목";
    text_14.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "32pt",
    });
    text_14.setLineSpacing(2);
    text_14.setWordWrapWidth(800);
    step_03_inner_01.add(text_14);

    // text_15
    const text_15 = this.add.text(775, 114, "", {});
    text_15.setOrigin(0.5, 0);
    text_15.text = "담당업무";
    text_15.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "32pt",
    });
    text_15.setLineSpacing(2);
    text_15.setWordWrapWidth(800);
    step_03_inner_01.add(text_15);

    // text_16
    const text_16 = this.add.text(290, 207, "", {});
    text_16.setOrigin(0.5, 0);
    text_16.text = "학식과 재능을 겸비한 사람";
    text_16.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      align: "center",
    });
    text_16.setLineSpacing(2);
    text_16.setWordWrapWidth(300);
    step_03_inner_01.add(text_16);

    // text_17
    const text_17 = this.add.text(785, 207, "", {});
    text_17.setOrigin(0.5, 0);
    text_17.text = "국왕의 비서 업무, 왕실 사원의\n관리, 의례 참여 등";
    text_17.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
      align: "center",
    });
    text_17.setLineSpacing(2);
    text_17.setWordWrapWidth(400);
    step_03_inner_01.add(text_17);

    // text_18
    const text_18 = this.add.text(203, 506, "", {});
    text_18.setOrigin(0.5, 0);
    text_18.text = "재능";
    text_18.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "31pt",
    });
    text_18.setLineSpacing(2);
    text_18.setWordWrapWidth(800);
    step_03_inner_01.add(text_18);

    // text_19
    const text_19 = this.add.text(528, 506, "", {});
    text_19.setOrigin(0.5, 0);
    text_19.text = "공로";
    text_19.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "32pt",
    });
    text_19.setLineSpacing(2);
    text_19.setWordWrapWidth(800);
    step_03_inner_01.add(text_19);

    // text_20
    const text_20 = this.add.text(860, 506, "", {});
    text_20.setOrigin(0.5, 0);
    text_20.text = "가문";
    text_20.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "32pt",
    });
    text_20.setLineSpacing(2);
    text_20.setWordWrapWidth(800);
    step_03_inner_01.add(text_20);

    // step_03_inner_02
    const step_03_inner_02 = this.add.container(294, 1322);
    point_2_22.add(step_03_inner_02);

    // img_dl2_01
    const img_dl2_01 = this.add.image(1, 0, "img_dl2_01");
    step_03_inner_02.add(img_dl2_01);

    // text_21
    const text_21 = this.add.text(0, 177, "", {});
    text_21.setOrigin(0.5, 0);
    text_21.text = "내시를 지냈던 고려의 인물, 안향";
    text_21.setStyle({
      color: "#ffffff",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "29pt",
      align: "center",
    });
    text_21.setLineSpacing(2);
    text_21.setWordWrapWidth(800);
    step_03_inner_02.add(text_21);

    // text_22
    const text_22 = this.add.text(0, 244, "", {});
    text_22.setOrigin(0.5, 0);
    text_22.text = "안향 초상 | 국립중앙박물관, 고려 2실";
    text_22.setStyle({
      color: "#ffffff",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "23pt",
      align: "center",
    });
    text_22.setLineSpacing(2);
    step_03_inner_02.add(text_22);

    // point_2_23
    const point_2_23 = this.add.container(0, 0);
    point_2_23.name = "point_2_23";
    point_2_23.visible = false;
    point_2.add(point_2_23);

    // text_8
    const text_8 = this.add.text(
      titleX,
      titleY,
      "고려의 내시와 조선의 내시",
      titleStyle
    );
    text_8.setOrigin(0.5, 0);
    point_2_23.add(text_8);

    const content_open_2_5 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">고려시대의 내시와 조선시대의 내시는 국왕을 보좌하는 역할을 했다는 점은 비슷해요. 하지만 그 출신과 맡은 업무의 중요도는 매우 달랐어요.</p>`
      );
    point_2_23.add(content_open_2_5);

    // bg_text_01
    const bg_text_01 = this.add.image(-246 + 12, 502 + 180, "bg_text_01");
    bg_text_01.setOrigin(0, 0);
    point_2_23.add(bg_text_01);

    // bg_text_02
    const bg_text_02 = this.add.image(-246 + 12, 913 + 180, "bg_text_02");
    bg_text_02.setOrigin(0, 0);
    point_2_23.add(bg_text_02);

    // text_23
    const text_23 = this.add.text(-125 + 12, 603 + 180, "", {});
    text_23.text = "고려시대 내시";
    text_23.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "32pt",
    });
    text_23.setLineSpacing(0.5);
    text_23.setWordWrapWidth(800);
    point_2_23.add(text_23);

    // text_24
    const text_24 = this.add.text(-125 + 12, 1020 + 180, "", {});
    text_24.text = "조선시대 내시";
    text_24.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "32pt",
    });
    text_24.setLineSpacing(0.5);
    text_24.setWordWrapWidth(800);
    point_2_23.add(text_24);

    // text_25
    const text_25 = this.add.text(-125 + 12, 738 + 180, "", {});
    text_25.text =
      "과거 시험 합격자 중 우수한 사람이거나 훌륭한 가문 출신의 자녀 등이 선발되었어요.";
    text_25.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_25.setLineSpacing(2);
    text_25.setWordWrapWidth(800);
    point_2_23.add(text_25);

    // text_26
    const text_26 = this.add.text(-125 + 12, 1145 + 180, "", {});
    text_26.text = "환관 등 하층민 출신들이 선발되었어요.";
    text_26.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_26.setLineSpacing(2);
    text_26.setWordWrapWidth(900);
    point_2_23.add(text_26);

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
    const point_3 = this.add.container(250, 90);
    point_3.visible = false;

    // point_3_11
    const point_3_11 = this.add.container(0, 0);
    point_3_11.name = "point_3_11";
    point_3_11.visible = false;
    point_3.add(point_3_11);

    // text_10
    const text_10 = this.add.text(290, 84, "", {});
    text_10.setOrigin(0.5, 0);
    text_10.text = "상상의 동물 기린";
    text_10.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_10.setLineSpacing(0.5);
    text_10.setWordWrapWidth(1000);
    point_3_11.add(text_10);

    const content_open_3_11 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text" style="top:204px;text-align:center;">기린의 특징을 확대해서 살펴보세요.</p>`
      );
    point_3_11.add(content_open_3_11);

    // img_3_8
    const img_point_3_8 = this.add.image(289, 714, "img_point_3_8");
    img_point_3_8.name = "img_point_3_8";
    point_3_11.add(img_point_3_8);
    this.img_point_3_8 = img_point_3_8;

    // bnt_zoom
    const img_zoom = this.add.image(602, 402, "img_zoom");
    img_zoom.setDisplaySize(90, 90);
    img_zoom.name = "img_zoom";
    point_3_11.add(img_zoom);

    // // text_11
    // const text_11 = this.add.text(298, 180, "", {});
    // text_11.setOrigin(0.5, 0);
    // text_11.text = "기린의 특징을 확대해서 살펴보세요.";
    // text_11.setStyle({
    //   align: "center",
    //   color: "#000",
    //   fontFamily: "KoddiUDOnGothic-Regular",
    //   fontSize: "26pt",
    // });
    // text_11.setLineSpacing(2);
    // text_11.setWordWrapWidth(1000);
    // point_3_11.add(text_11);

    // point_3_check_1
    const point_3_check_1 = this.add.container(-54, 1181);
    point_3_check_1.name = "point_3_check_1";
    point_3_11.add(point_3_check_1);

    // checkbox_g_2
    const checkbox_g_2 = this.add.image(0, 32, "checkbox_g");
    checkbox_g_2.name = "checkbox_g_2";
    point_3_check_1.add(checkbox_g_2);

    // checkbox_gt_on_2
    const checkbox_gt_on_2 = this.add.image(58, 27, "checkbox_gt_on");
    checkbox_gt_on_2.name = "checkbox_gt_on_2";
    checkbox_gt_on_2.setOrigin(0, 0.5);
    checkbox_gt_on_2.visible = false;
    point_3_check_1.add(checkbox_gt_on_2);

    // text_13
    const text_13 = this.add.text(85, 0, "", {});
    text_13.name = "text_13";
    text_13.text = "뿔이 하나 솟았어요.";
    text_13.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_13.setLineSpacing(2);
    text_13.setWordWrapWidth(1000);
    point_3_check_1.add(text_13);

    // point_5_checkboxEvent
    const point_5_checkboxEvent = this.add.rectangle(-53, 32, 500, 90);
    point_5_checkboxEvent.name = "point_5_checkboxEvent";
    point_5_checkboxEvent.setOrigin(0, 0.5);
    point_5_checkboxEvent.visible = false;
    point_3_check_1.add(point_5_checkboxEvent);

    // point_3_check_2
    const point_3_check_2 = this.add.container(-54, 1291);
    point_3_check_2.name = "point_3_check_2";
    point_3_11.add(point_3_check_2);

    // checkbox_g_3
    const checkbox_g_3 = this.add.image(0, 32, "checkbox_g");
    checkbox_g_3.name = "checkbox_g_3";
    point_3_check_2.add(checkbox_g_3);

    // checkbox_gt_on_3
    const checkbox_gt_on_3 = this.add.image(58, 27, "checkbox_gt_on");
    checkbox_gt_on_3.name = "checkbox_gt_on_3";
    checkbox_gt_on_3.setOrigin(0, 0.5);
    checkbox_gt_on_3.visible = false;
    point_3_check_2.add(checkbox_gt_on_3);

    // text_29
    const text_29 = this.add.text(85, 0, "", {});
    text_29.name = "text_29";
    text_29.text = "갈기가 곱슬곱슬해요.";
    text_29.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_29.setLineSpacing(2);
    text_29.setWordWrapWidth(1000);
    point_3_check_2.add(text_29);

    // point_5_checkboxEvent_3
    const point_5_checkboxEvent_3 = this.add.rectangle(-53, 32, 500, 90);
    point_5_checkboxEvent_3.name = "point_5_checkboxEvent_3";
    point_5_checkboxEvent_3.setOrigin(0, 0.5);
    point_3_check_2.add(point_5_checkboxEvent_3);

    // point_3_check_3
    const point_3_check_3 = this.add.container(-54, 1404.22);
    point_3_check_3.name = "point_3_check_3";
    point_3_11.add(point_3_check_3);

    // checkbox_g_5
    const checkbox_g_5 = this.add.image(0, 32, "checkbox_g");
    checkbox_g_5.name = "checkbox_g_5";
    point_3_check_3.add(checkbox_g_5);

    // checkbox_gt_on_5
    const checkbox_gt_on_5 = this.add.image(58, 27, "checkbox_gt_on");
    checkbox_gt_on_5.name = "checkbox_gt_on_5";
    checkbox_gt_on_5.setOrigin(0, 0.5);
    checkbox_gt_on_5.visible = false;
    point_3_check_3.add(checkbox_gt_on_5);

    // text_67
    const text_67 = this.add.text(85, 0, "", {});
    text_67.name = "text_67";
    text_67.text = "눈이 동그래요.";
    text_67.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_67.setLineSpacing(2);
    text_67.setWordWrapWidth(1000);
    point_3_check_3.add(text_67);

    // point_5_checkboxEvent_5
    const point_5_checkboxEvent_5 = this.add.rectangle(-53, 32, 500, 90);
    point_5_checkboxEvent_5.name = "point_5_checkboxEvent_5";
    point_5_checkboxEvent_5.setOrigin(0, 0.5);
    point_3_check_3.add(point_5_checkboxEvent_5);

    // point_3_check_4
    const point_3_check_4 = this.add.container(-54, 1514.219970703125);
    point_3_check_4.name = "point_3_check_4";
    point_3_11.add(point_3_check_4);

    // checkbox_g_4
    const checkbox_g_4 = this.add.image(0, 32, "checkbox_g");
    checkbox_g_4.name = "checkbox_g_4";
    point_3_check_4.add(checkbox_g_4);

    // checkbox_gt_on_4
    const checkbox_gt_on_4 = this.add.image(58, 27, "checkbox_gt_on");
    checkbox_gt_on_4.name = "checkbox_gt_on_4";
    checkbox_gt_on_4.setOrigin(0, 0.5);
    checkbox_gt_on_4.visible = false;
    point_3_check_4.add(checkbox_gt_on_4);

    // text_63
    const text_63 = this.add.text(85, 0, "", {});
    text_63.name = "text_63";
    text_63.text = "이빨이 날카로워요.";
    text_63.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_63.setLineSpacing(2);
    text_63.setWordWrapWidth(1000);
    point_3_check_4.add(text_63);

    // point_5_checkboxEvent_4
    const point_5_checkboxEvent_4 = this.add.rectangle(-53, 32, 500, 90);
    point_5_checkboxEvent_4.name = "point_5_checkboxEvent_4";
    point_5_checkboxEvent_4.setOrigin(0, 0.5);
    point_3_check_4.add(point_5_checkboxEvent_4);

    // point_3_21
    const point_3_21 = this.add.container(0, 0);
    point_3_21.name = "point_3_21";
    point_3_21.visible = false;
    point_3.add(point_3_21);

    // text_68
    const text_68 = this.add.text(
      titleX,
      87 - 24,
      "향을 피우는 방법",
      titleStyle
    );
    text_68.name = "text_68";
    text_68.setOrigin(0.5, 0);
    point_3_21.add(text_68);

    const content_open_3_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text" style="top:188px;left:-139px;text-align:center"><a class="ex_popup_title" data-content="* 소향:<br />향로에 불을 붙인 향을 넣고 향기로운 연기를 피우는 일">소향</a>해 볼까요?</p>`
      );
    point_3_21.add(content_open_3_1);

    // bg_point_3_1
    const bg_point_3_1 = this.add.image(290, 957, "bg_point_3_1");
    point_3_21.add(bg_point_3_1);

    // bg_point_3_2
    const bg_point_3_2 = this.add.image(290, 706, "bg_point_3_2");
    bg_point_3_2.name = "bg_point_3_2";
    point_3_21.add(bg_point_3_2);

    // img_point_3_4
    const img_point_3_4 = this.add.image(290, 1397, "img_point_3_4");
    img_point_3_4.name = "img_point_3_4";
    point_3_21.add(img_point_3_4);

    // eff_point_3_7
    const eff_point_3_7 = this.add.image(315, 964, "eff_point_3_7"); //테스트로 다양성에 있는 연기 갖다 써봄
    eff_point_3_7.name = "eff_point_3_7";
    eff_point_3_7.visible = false;
    point_3_21.add(eff_point_3_7);

    // img_point_3_1
    const img_point_3_1 = this.add.image(290, 650, "img_point_3_1");
    img_point_3_1.name = "img_point_3_1";
    point_3_21.add(img_point_3_1);

    // text_69
    const text_69 = this.add.text(290, 820, "", {});
    text_69.name = "text_69";
    text_69.setOrigin(0.5, 0);
    text_69.text = "향";
    text_69.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "40pt",
    });
    text_69.setLineSpacing(0.5);
    text_69.setWordWrapWidth(850);
    point_3_21.add(text_69);

    // text_124
    const text_124 = this.add.text(290, 1660, "", {});
    text_124.name = "text_124";
    text_124.setOrigin(0.5, 0);
    text_124.text = "향 조각을 향로에 넣어주세요.";
    text_124.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_124.setLineSpacing(2);
    text_124.setWordWrapWidth(1000);
    point_3_21.add(text_124);

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
      "고려시대 묘지명의 특징",
      titleStyle
    );
    text_31.setOrigin(0.5, 0);
    point_4_11.add(text_31);

    const content_open_4_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">고려시대 묘지명은 아래 사진처럼 주로 두 가지 모양으로 만들었고 크기도 매우 컸어요.</p>`
      );
    point_4_11.add(content_open_4_1);

    // img_point_4_11__1
    const img_point_4_11__1 = this.add.image(288, 1043, "img_point_4_11._1");
    point_4_11.add(img_point_4_11__1);

    // point_4_21
    const point_4_21 = this.add.container(0, 0);
    point_4_21.name = "point_4_21";
    point_4_21.visible = false;
    point_4.add(point_4_21);

    // in_con_1
    const in_con_1 = this.add.container(0, 0); //282, 67
    in_con_1.name = "in_con_1";
    in_con_1.visible = false;
    point_4_21.add(in_con_1);

    // text_44
    const text_44 = this.add.text(titleX, titleY, "묘지명 제작", titleStyle);
    text_44.name = "text_44";
    text_44.setOrigin(0.5, 0);
    in_con_1.add(text_44);

    // bg_chat
    const bg_chat = this.add.image(282, 1120 + 67, "bg_chat_ss");
    bg_chat.name = "bg_chat";
    in_con_1.add(bg_chat);

    const content_open_4_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">이 묘지명은 어린 나이에 세상을 떠난 딸을 위해 만들었어요. 슬픔 속에서도 딸을 생각한 아버지의 마음으로 묘지명을 제작해 보세요.</p>`
      );
    in_con_1.add(content_open_4_2);

    // bg_search_box
    const bg_search_box = this.add.image(282, 1272 + 67, "bg_search_box");
    bg_search_box.name = "bg_search_box";
    in_con_1.add(bg_search_box);

    // in_con_2
    const in_con_2 = this.add.container(282, 0);
    in_con_2.name = "in_con_2";
    in_con_2.visible = false;
    point_4_21.add(in_con_2);

    // bg_chat_1
    const bg_chat_1 = this.add.image(0, 937, "bg_chat");
    bg_chat_1.name = "bg_chat_1";
    in_con_2.add(bg_chat_1);

    // chat_1
    const chat_1 = this.add.container(130, 490);
    chat_1.name = "chat_1";
    chat_1.alpha = 0;
    in_con_2.add(chat_1);

    // bg_tb_01
    const bg_tb_01 = this.add.image(0, 1, "bg_tb_01");
    chat_1.add(bg_tb_01);

    // text_49
    const text_49 = this.add.text(3, 3, "", {});
    text_49.name = "text_49";
    text_49.setOrigin(0.5, 0.5);
    text_49.text = "묘지명을 하나 제작하려 하오.";
    text_49.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_49.setLineSpacing(2);
    text_49.setWordWrapWidth(950);
    chat_1.add(text_49);

    // text_48
    const text_48 = this.add.text(249, -115, "", {});
    text_48.name = "text_48";
    text_48.setOrigin(0.5, 0.5);
    text_48.text = "김지원";
    text_48.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    text_48.setLineSpacing(2);
    text_48.setWordWrapWidth(950);
    chat_1.add(text_48);

    // chat_2
    const chat_2 = this.add.container(-130, 760);
    chat_2.name = "chat_2";
    chat_2.alpha = 0;
    in_con_2.add(chat_2);

    // bg_tb
    const bg_tb = this.add.image(18, 21, "bg_tb_02");
    chat_2.add(bg_tb);

    // text_50
    const text_50 = this.add.text(-220, -26, "", {});
    text_50.name = "text_50";
    text_50.setOrigin(0, 0);
    text_50.text = "안녕하세요. \n어떤 분의 묘지명이십니까?";
    text_50.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_50.setLineSpacing(2);
    text_50.setWordWrapWidth(950);
    chat_2.add(text_50);

    // text_51
    const text_51 = this.add.text(-149, -123, "", {});
    text_51.name = "text_51";
    text_51.setOrigin(0.5, 0.5);
    text_51.text = "묘지명 제작소";
    text_51.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    text_51.setLineSpacing(2);
    text_51.setWordWrapWidth(950);
    chat_2.add(text_51);

    // chat_3
    const chat_3 = this.add.container(130, 1044);
    chat_3.name = "chat_3";
    chat_3.alpha = 0;
    in_con_2.add(chat_3);

    // bg_tb_1
    const bg_tb_1 = this.add.image(37, 1, "bg_tb_03");
    chat_3.add(bg_tb_1);

    // text_52
    const text_52 = this.add.text(51, 4, "", {});
    text_52.name = "text_52";
    text_52.setOrigin(0.5, 0.5);
    text_52.text = "내 딸아이의 묘지명일세.";
    text_52.setStyle({
      align: "right",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_52.setLineSpacing(2);
    text_52.setWordWrapWidth(950);
    chat_3.add(text_52);

    // text_53
    const text_53 = this.add.text(249, -115, "", {});
    text_53.name = "text_53";
    text_53.setOrigin(0.5, 0.5);
    text_53.text = "김지원";
    text_53.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    text_53.setLineSpacing(2);
    text_53.setWordWrapWidth(950);
    chat_3.add(text_53);

    // chat_4
    const chat_4 = this.add.container(-130, 1335);
    chat_4.name = "chat_4";
    chat_4.alpha = 0;
    in_con_2.add(chat_4);

    // bg_tb_2
    const bg_tb_2 = this.add.image(88, 21, "bg_tb_04");
    chat_4.add(bg_tb_2);

    // text_54
    const text_54 = this.add.text(-220, -26, "", {});
    text_54.name = "text_54";
    text_54.setOrigin(0, 0);
    text_54.text = "상심이 크시겠습니다. \n묘지명 제작 주문서를 작성해 주세요.";
    text_54.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_54.setLineSpacing(2);
    text_54.setWordWrapWidth(950);
    chat_4.add(text_54);

    // text_55
    const text_55 = this.add.text(-149, -123, "", {});
    text_55.name = "text_55";
    text_55.setOrigin(0.5, 0.5);
    text_55.text = "묘지명 제작소";
    text_55.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    text_55.setLineSpacing(2);
    text_55.setWordWrapWidth(950, true);
    chat_4.add(text_55);

    // btn_order_form
    const btn_order_form = this.add.image(-103, 210, "btn_blue_round");
    btn_order_form.name = "btn_order_form";
    chat_4.add(btn_order_form);

    // in_con_3
    const in_con_3 = this.add.container(282, 0);
    in_con_3.name = "in_con_3";
    in_con_3.visible = false;
    point_4_21.add(in_con_3);

    // bg_chat_3
    const bg_chat_3 = this.add.image(0, 947, "bg_chat");
    bg_chat_3.name = "bg_chat_3";
    in_con_3.add(bg_chat_3);

    // text_60
    const text_60 = this.add.text(0, 230, "", {});
    text_60.name = "text_60";
    text_60.setOrigin(0.5, 0);
    text_60.text = "묘지명 제작 신청서";
    text_60.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_60.setLineSpacing(0.5);
    text_60.setWordWrapWidth(850);
    in_con_3.add(text_60);

    // text_61
    const text_61 = this.add.text(-400, 420, "", {});
    text_61.name = "text_61";
    text_61.text = "고인 이름";
    text_61.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "29pt",
    });
    text_61.setLineSpacing(2);
    text_61.setWordWrapWidth(950);
    in_con_3.add(text_61);

    // text_62
    const text_62 = this.add.text(-400, 720, "", {});
    text_62.name = "text_62";
    text_62.text = "성별";
    text_62.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "29pt",
    });
    text_62.setLineSpacing(2);
    text_62.setWordWrapWidth(950);
    in_con_3.add(text_62);

    // text_134
    const text_134 = this.add.text(-400, 1020, "", {});
    text_134.name = "text_134";
    text_134.text = "가족";
    text_134.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "29pt",
    });
    text_134.setLineSpacing(2);
    text_134.setWordWrapWidth(950);
    in_con_3.add(text_134);

    // btn_order_send
    const btn_order_send = this.add.image(0, 1545, "btn_blur_round_l");
    btn_order_send.name = "btn_order_send";
    btn_order_send.visible = false;
    in_con_3.add(btn_order_send);

    // in_con_4
    const in_con_4 = this.add.container(282, 0);
    in_con_4.name = "in_con_4";
    in_con_4.visible = false;
    point_4_21.add(in_con_4);

    // bg_chat_2
    const bg_chat_2 = this.add.image(0, 937, "bg_chat");
    bg_chat_2.name = "bg_chat_2";
    in_con_4.add(bg_chat_2);

    // text_56
    const text_56 = this.add.text(0, 220, "", {});
    text_56.name = "text_56";
    text_56.setOrigin(0.5, 0);
    text_56.text = "묘지명 모양 선택";
    text_56.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_56.setLineSpacing(0.5);
    text_56.setWordWrapWidth(800);
    in_con_4.add(text_56);

    // chat_btn_1
    const chat_btn_1 = this.add.container(0, 538);
    chat_btn_1.name = "chat_btn_1";
    in_con_4.add(chat_btn_1);

    // bg_chat_btn_1
    const bg_chat_btn_1 = this.add.image(0, 3, "bg_chat_btn");
    bg_chat_btn_1.name = "bg_chat_btn_1";
    chat_btn_1.add(bg_chat_btn_1);

    // img_point4_01
    const img_point4_01 = this.add.image(-200, -6, "img_point4_01");
    chat_btn_1.add(img_point4_01);

    // text_57
    const text_57 = this.add.text(50, -55, "", {});
    text_57.name = "text_57";
    text_57.text = "네모난\n모양";
    text_57.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "32pt",
    });
    text_57.setLineSpacing(2);
    text_57.setWordWrapWidth(950);
    chat_btn_1.add(text_57);

    // chat_btn_2
    const chat_btn_2 = this.add.container(0, 993);
    chat_btn_2.name = "chat_btn_2";
    in_con_4.add(chat_btn_2);

    // bg_chat_btn_2
    const bg_chat_btn_2 = this.add.image(0, 3, "bg_chat_btn");
    bg_chat_btn_2.name = "bg_chat_btn_2";
    chat_btn_2.add(bg_chat_btn_2);

    // img_point
    const img_point = this.add.image(-200, 0, "img_point4_02");
    chat_btn_2.add(img_point);

    // text_58
    const text_58 = this.add.text(50, -80, "", {});
    text_58.name = "text_58";
    text_58.text = "좌우 \n모서리를\n깎은 모양";
    text_58.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "32pt",
    });
    text_58.setLineSpacing(2);
    text_58.setWordWrapWidth(950);
    chat_btn_2.add(text_58);

    // chat_btn_3
    const chat_btn_3 = this.add.container(0, 1448);
    chat_btn_3.name = "chat_btn_3";
    in_con_4.add(chat_btn_3);

    // bg_chat_btn_3
    const bg_chat_btn_3 = this.add.image(0, 3, "bg_chat_btn");
    bg_chat_btn_3.name = "bg_chat_btn_3";
    chat_btn_3.add(bg_chat_btn_3);

    // img_point_1
    const img_point_1 = this.add.image(-200, -7, "img_point4_03");
    chat_btn_3.add(img_point_1);

    // text_59
    const text_59 = this.add.text(50, -56, "", {});
    text_59.name = "text_59";
    text_59.text = "특별한 모양\n(꽃, 관 등)";
    text_59.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "32pt",
    });
    text_59.setLineSpacing(2);
    text_59.setWordWrapWidth(950);
    chat_btn_3.add(text_59);

    // btn_order_send_1
    const btn_order_send_1 = this.add.image(0, 1649, "btn_blur_round_3");
    btn_order_send_1.name = "btn_order_send_1";
    btn_order_send_1.visible = false;
    in_con_4.add(btn_order_send_1);

    // in_con_5
    const in_con_5 = this.add.container(282, 0);
    in_con_5.name = "in_con_5";
    in_con_5.visible = false;
    point_4_21.add(in_con_5);

    // bg_chat_4
    const bg_chat_4 = this.add.image(0, 937, "bg_chat");
    bg_chat_4.name = "bg_chat_4";
    in_con_5.add(bg_chat_4);

    // chat
    const chat = this.add.container(143, 476);
    chat.name = "chat";
    chat.alpha = 0;
    in_con_5.add(chat);

    // text_64
    const text_64 = this.add.text(249, -200, "", {});
    text_64.name = "text_64";
    text_64.setOrigin(0.5, 0.5);
    text_64.text = "김지원";
    text_64.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    text_64.setLineSpacing(2);
    text_64.setWordWrapWidth(950);
    chat.add(text_64);

    // btn_blue_round_2
    const btn_blue_round_2 = this.add.image(105, -79, "btn_blue_round_2");
    chat.add(btn_blue_round_2);

    // chat_5
    const chat_5 = this.add.container(-155, 729);
    chat_5.name = "chat_5";
    chat_5.alpha = 0;
    in_con_5.add(chat_5);

    // bg_tb_4
    const bg_tb_4 = this.add.image(108, -18, "bg_tb_05");
    chat_5.add(bg_tb_4);

    // text_65
    const text_65 = this.add.text(92, -18, "", {});
    text_65.name = "text_65";
    text_65.setOrigin(0.5, 0.5);
    text_65.text =
      "낙랑의 호장 어르신이셨군요!!\n제가 더 신경써서 잘 만들어서 \n보내드리겠습니다.\n따님의 명복을 빕니다.";
    text_65.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_65.setLineSpacing(2);
    text_65.setWordWrapWidth(950);
    chat_5.add(text_65);

    // text_66
    const text_66 = this.add.text(-149, -222, "", {});
    text_66.name = "text_66";
    text_66.setOrigin(0.5, 0.5);
    text_66.text = "묘지명 제작소";
    text_66.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "30pt",
    });
    text_66.setLineSpacing(2);
    text_66.setWordWrapWidth(950);
    chat_5.add(text_66);

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
    const point_5 = this.add.container(250, 90);
    point_5.visible = false;

    // point_5_11
    const point_5_11 = this.add.container(0, 1);
    point_5_11.name = "point_5_11";
    point_5_11.visible = false;
    point_5.add(point_5_11);

    // text_39
    const text_39 = this.add.text(
      titleX,
      titleY,
      "쇠북에 장식된 무늬",
      titleStyle
    );
    text_39.setOrigin(0.5, 0);
    point_5_11.add(text_39);

    // img_point_5_11_1
    const img_point_5_11_1 = this.add.image(
      292,
      585 + 122 + 80,
      "img_point_5_11_1"
    );
    point_5_11.add(img_point_5_11_1);

    const content_open_5_11 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text" style="text-align:center;">확인하고 싶은 무늬를 선택하세요.</p>`
      );
    point_5_11.add(content_open_5_11);

    // point_5_check_1
    const point_5_check_1 = this.add.container(-56, 1170 + 77);
    point_5_check_1.name = "point_5_check_1";
    point_5_11.add(point_5_check_1);

    // checkbox_g
    const checkbox_g = this.add.image(0, 32 + 77, "checkbox_g");
    checkbox_g.name = "checkbox_g";
    point_5_check_1.add(checkbox_g);

    // checkbox_gt_on
    const checkbox_gt_on = this.add.image(58, 27 + 77, "checkbox_gt_on");
    checkbox_gt_on.name = "checkbox_gt_on";
    checkbox_gt_on.scaleX = 0.45;
    checkbox_gt_on.setOrigin(0, 0.5);
    checkbox_gt_on.visible = false;
    point_5_check_1.add(checkbox_gt_on);

    // text_82
    const text_82 = this.add.text(85, 77 + 4, "", {});
    text_82.name = "text_82";
    text_82.text = "연꽃무늬";
    text_82.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_82.setLineSpacing(2);
    text_82.setWordWrapWidth(1000);
    point_5_check_1.add(text_82);

    // point_5_checkboxEvent_1
    const point_5_checkboxEvent_1 = this.add.rectangle(
      -53,
      32 + 77 + 4,
      500,
      90
    );
    point_5_checkboxEvent_1.name = "point_5_checkboxEvent_1";
    point_5_checkboxEvent_1.setOrigin(0, 0.5);
    point_5_check_1.add(point_5_checkboxEvent_1);

    // point_5_check_2
    const point_5_check_2 = this.add.container(-56, 1280 + 77);
    point_5_check_2.name = "point_5_check_2";
    point_5_11.add(point_5_check_2);

    // checkbox_g_1
    const checkbox_g_1 = this.add.image(0, 32 + 77, "checkbox_g");
    checkbox_g_1.name = "checkbox_g_1";
    point_5_check_2.add(checkbox_g_1);

    // checkbox_gt_on_1
    const checkbox_gt_on_1 = this.add.image(58, 27 + 77, "checkbox_gt_on");
    checkbox_gt_on_1.name = "checkbox_gt_on_1";
    checkbox_gt_on_1.scaleX = 0.45;
    checkbox_gt_on_1.setOrigin(0, 0.5);
    checkbox_gt_on_1.visible = false;
    point_5_check_2.add(checkbox_gt_on_1);

    // text_89
    const text_89 = this.add.text(85, 77 + 4, "", {});
    text_89.name = "text_89";
    text_89.text = "넝쿨무늬";
    text_89.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "35pt",
    });
    text_89.setLineSpacing(2);
    text_89.setWordWrapWidth(1000);
    point_5_check_2.add(text_89);

    // point_5_checkboxEvent_2
    const point_5_checkboxEvent_2 = this.add.rectangle(-53, 32 + 77, 500, 90);
    point_5_checkboxEvent_2.name = "point_5_checkboxEvent_2";
    point_5_checkboxEvent_2.setOrigin(0, 0.5);
    point_5_check_2.add(point_5_checkboxEvent_2);

    // eff_point_5_11_2
    const eff_point_5_11_2 = this.add.image(
      293,
      592 + 122 + 80,
      "eff_point_5_11_2"
    );
    eff_point_5_11_2.name = "eff_point_5_11_2";
    eff_point_5_11_2.alpha = 0;
    eff_point_5_11_2.alphaTopLeft = 0;
    eff_point_5_11_2.alphaTopRight = 0;
    eff_point_5_11_2.alphaBottomLeft = 0;
    eff_point_5_11_2.alphaBottomRight = 0;
    point_5_11.add(eff_point_5_11_2);

    // eff_point_5_11_1
    const eff_point_5_11_1 = this.add.image(
      293,
      595 + 122 + 80,
      "eff_point_5_11_1"
    );
    eff_point_5_11_1.name = "eff_point_5_11_1";
    eff_point_5_11_1.alpha = 0;
    eff_point_5_11_1.alphaTopLeft = 0;
    eff_point_5_11_1.alphaTopRight = 0;
    eff_point_5_11_1.alphaBottomLeft = 0;
    eff_point_5_11_1.alphaBottomRight = 0;
    point_5_11.add(eff_point_5_11_1);

    // point_5_21
    const point_5_21 = this.add.container(0, 0);
    point_5_21.name = "point_5_21";
    point_5_21.visible = false;
    point_5.add(point_5_21);

    // text_40
    const text_40 = this.add.text(
      titleX,
      titleY,
      "쇠북에 새겨진 글",
      titleStyle
    );
    text_40.name = "text_40";
    text_40.setOrigin(0.5, 0);
    point_5_21.add(text_40);

    // content_open_5_21
    const content_open_5_21 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">쇠북 옆면에 새겨진 글자를 확인해 볼까요?</p>`
      );
    content_open_5_21.name = "content_open_5_21";
    point_5_21.add(content_open_5_21);

    const text_5_box = this.add.text(288, 1707 - 32, "", {});
    text_5_box.name = "text_5_box";
    text_5_box.setOrigin(0.5, 0);
    text_5_box.text = "쇠북 옆면의 박스를 눌러 확인하세요.";
    text_5_box.setStyle({
      color: "#080809",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
      align: "center",
    });
    text_5_box.setLineSpacing(2);
    text_5_box.setWordWrapWidth(1080, true);
    text_5_box.setVisible(false);
    point_5_21.add(text_5_box);

    // img_point_5_2_1
    const img_point_5_2_1 = this.add.image(288, 1069, "img_point_5_2_1");
    img_point_5_2_1.name = "img_point_5_2_1";
    point_5_21.add(img_point_5_2_1);

    // img_point_5_2_2
    const img_point_5_2_2 = this.add.image(288, 1069, "img_point_5_2_2");
    img_point_5_2_2.name = "img_point_5_2_2";
    img_point_5_2_2.visible = false;
    point_5_21.add(img_point_5_2_2);

    // btn_in_next_5_1
    const btn_in_next_5_1 = this.add.image(684, 1701, "btn_next");
    btn_in_next_5_1.name = "btn_in_next_5_1";
    point_5_21.add(btn_in_next_5_1);

    // line_dotted_white_521
    const line_dotted_white_521 = this.add.image(
      330 - 2,
      980 + 38,
      "line_dotted_white"
    );
    line_dotted_white_521.name = "line_dotted_white_521";
    line_dotted_white_521.alpha = 0;
    line_dotted_white_521.alphaTopLeft = 0;
    line_dotted_white_521.alphaTopRight = 0;
    line_dotted_white_521.alphaBottomLeft = 0;
    line_dotted_white_521.alphaBottomRight = 0;
    point_5_21.add(line_dotted_white_521);

    // eff_point_5_2_1
    const eff_point_5_2_1 = this.add.image(313, 996 + 38, "eff_point_5_2_1");
    eff_point_5_2_1.name = "eff_point_5_2_1";
    eff_point_5_2_1.alpha = 0;
    eff_point_5_2_1.alphaTopLeft = 0;
    eff_point_5_2_1.alphaTopRight = 0;
    eff_point_5_2_1.alphaBottomLeft = 0;
    eff_point_5_2_1.alphaBottomRight = 0;
    point_5_21.add(eff_point_5_2_1);

    // line_dotted_5_2_2
    const line_dotted_5_2_2 = this.add.image(
      280,
      1104 - 10,
      "line_dotted_5_2_2"
    );
    line_dotted_5_2_2.name = "line_dotted_5_2_2";
    line_dotted_5_2_2.alpha = 0;
    line_dotted_5_2_2.alphaTopLeft = 0;
    line_dotted_5_2_2.alphaTopRight = 0;
    line_dotted_5_2_2.alphaBottomLeft = 0;
    line_dotted_5_2_2.alphaBottomRight = 0;
    point_5_21.add(line_dotted_5_2_2);

    // eff_point_5_2_2
    const eff_point_5_2_2 = this.add.image(269, 1103 - 10, "eff_point_5_2_2");
    eff_point_5_2_2.name = "eff_point_5_2_2";
    eff_point_5_2_2.alpha = 0;
    eff_point_5_2_2.alphaTopLeft = 0;
    eff_point_5_2_2.alphaTopRight = 0;
    eff_point_5_2_2.alphaBottomLeft = 0;
    eff_point_5_2_2.alphaBottomRight = 0;
    point_5_21.add(eff_point_5_2_2);

    // line_dotted_5_2_3
    const line_dotted_5_2_3 = this.add.image(
      338,
      680 + 38,
      "line_dotted_5_2_3"
    );
    line_dotted_5_2_3.name = "line_dotted_5_2_3";
    line_dotted_5_2_3.alpha = 0;
    line_dotted_5_2_3.alphaTopLeft = 0;
    line_dotted_5_2_3.alphaTopRight = 0;
    line_dotted_5_2_3.alphaBottomLeft = 0;
    line_dotted_5_2_3.alphaBottomRight = 0;
    point_5_21.add(line_dotted_5_2_3);

    // eff_point_5_2_3
    const eff_point_5_2_3 = this.add.image(341, 679 + 38, "eff_point_5_2_3");
    eff_point_5_2_3.name = "eff_point_5_2_3";
    eff_point_5_2_3.alpha = 0;
    eff_point_5_2_3.alphaTopLeft = 0;
    eff_point_5_2_3.alphaTopRight = 0;
    eff_point_5_2_3.alphaBottomLeft = 0;
    eff_point_5_2_3.alphaBottomRight = 0;
    point_5_21.add(eff_point_5_2_3);

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
    const point_6 = this.add.container(250, 90);
    point_6.visible = false;

    // point_6_11
    const point_6_11 = this.add.container(0, -10);
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
      "밭을 가는 쟁기, 보습",
      titleStyle
    );
    text_33.setOrigin(0.5, 0);
    point_6_11.add(text_33);

    const content_open_6_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">이 농기구는 보습이에요. 논밭을 가는 쟁기의 아랫부분에 끼워 직접 땅을 가는데 사용해요.</p>`
      );
    point_6_11.add(content_open_6_1);

    // img_point6_1
    const img_point6_1 = this.add.image(
      288,
      820 + (352 - 205) * 2,
      "img_point6_1"
    );
    point_6_11.add(img_point6_1);

    // text_79
    const text_79 = this.add.text(288, 1169 + (247 - 111) * 2, "", {});
    text_79.setOrigin(0.5, 0);
    text_79.text = "고려시대의 농기구와 철은\n어디서 만들었까요?";
    text_79.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
      align: "center",
    });
    text_79.setLineSpacing(0.5);
    text_79.setWordWrapWidth(800);
    point_6_11.add(text_79);

    // point_6_21
    const point_6_21 = this.add.container(0, 0);
    point_6_21.name = "point_6_21";
    point_6_21.visible = false;
    point_6.add(point_6_21);

    // bg_point_6_2
    const bg_point_6_2 = this.add.image(315, 888, "bg_point_6_2");
    bg_point_6_2.scaleX = 0.93;
    bg_point_6_2.scaleY = 0.93;
    point_6_21.add(bg_point_6_2);

    // text_77
    const text_77 = this.add.text(298, 87, "", {});
    text_77.name = "text_77";
    text_77.setOrigin(0.5, 0);
    text_77.text = "향 · 부곡 · 소";
    text_77.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_77.setLineSpacing(0.5);
    text_77.setWordWrapWidth(850);
    point_6_21.add(text_77);

    // text_78
    const text_78 = this.add.text(-130 + 113 - 48, 196, "", {});
    text_78.name = "text_78";
    text_78.text =
      "고려시대에는 나라에서 필요한 물건이나 \n식량을 생산하는 특별한 지역이 있었어요. ";
    text_78.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
      align: "center",
    });
    text_78.setLineSpacing(2);
    text_78.setWordWrapWidth(850, true);
    point_6_21.add(text_78);

    // contents_box
    const contents_box = this.add.container(164, 538);
    contents_box.name = "contents_box";
    point_6_21.add(contents_box);

    // img_point_6_2_1
    const img_point_6_2_1 = this.add.image(231, 69, "img_point_6_2_1");
    img_point_6_2_1.name = "img_point_6_2_1";
    contents_box.add(img_point_6_2_1);

    // img_point_6_2_5
    const img_point_6_2_5 = this.add.image(469, -30, "img_point_6_2_5");
    img_point_6_2_5.name = "img_point_6_2_5";
    contents_box.add(img_point_6_2_5);

    // img_point_6_2_3
    const img_point_6_2_3 = this.add.image(-118, 305, "img_point_6_2_3");
    img_point_6_2_3.name = "img_point_6_2_3";
    contents_box.add(img_point_6_2_3);

    // img_point_6_2_7
    const img_point_6_2_7 = this.add.image(-166, 113, "img_point_6_2_7");
    img_point_6_2_7.name = "img_point_6_2_7";
    contents_box.add(img_point_6_2_7);

    // img_point_6_2_4
    const img_point_6_2_4 = this.add.image(146, 543, "img_point_6_2_4");
    img_point_6_2_4.name = "img_point_6_2_4";
    contents_box.add(img_point_6_2_4);

    // img_point_6_2_8
    const img_point_6_2_8 = this.add.image(194, 344, "img_point_6_2_8");
    img_point_6_2_8.name = "img_point_6_2_8";
    contents_box.add(img_point_6_2_8);

    // img_point_6_2_2
    const img_point_6_2_2 = this.add.image(217, 863, "img_point_6_2_2");
    img_point_6_2_2.name = "img_point_6_2_2";
    contents_box.add(img_point_6_2_2);

    // img_point_6_2_6
    const img_point_6_2_6 = this.add.image(-54, 787, "img_point_6_2_6");
    img_point_6_2_6.name = "img_point_6_2_6";
    contents_box.add(img_point_6_2_6);

    // img_point_6_2_11
    const img_point_6_2_11 = this.add.image(39, 28, "img_point_6_2_11");
    img_point_6_2_11.name = "img_point_6_2_11";
    contents_box.add(img_point_6_2_11);

    // img_point_6_2_14
    const img_point_6_2_14 = this.add.image(-305, 252, "img_point_6_2_14");
    img_point_6_2_14.name = "img_point_6_2_14";
    contents_box.add(img_point_6_2_14);

    // img_point_6_2_17
    const img_point_6_2_17 = this.add.image(189, 568, "img_point_6_2_17");
    img_point_6_2_17.name = "img_point_6_2_17";
    contents_box.add(img_point_6_2_17);

    // img_point_6_2_12
    const img_point_6_2_12 = this.add.image(427, 829, "img_point_6_2_12");
    img_point_6_2_12.name = "img_point_6_2_12";
    contents_box.add(img_point_6_2_12);

    // bottom_box
    const bottom_box = this.add.container(290, 1669);
    bottom_box.name = "bottom_box";
    point_6_21.add(bottom_box);

    // bg_point_6_2_1
    const bg_point_6_2_1 = this.add.image(0, 0, "bg_point_6_2_1");
    bg_point_6_2_1.scaleX = 0.854;
    bg_point_6_2_1.scaleY = 0.854;
    bottom_box.add(bg_point_6_2_1);

    // btn_point_6_2_1
    const btn_point_6_2_1 = this.add.image(-350, 20, "btn_point_6_2_1");
    btn_point_6_2_1.name = "btn_point_6_2_1";
    bottom_box.add(btn_point_6_2_1);

    // img_point_6_2_9
    const img_point_6_2_9 = this.add.image(-115, 20, "img_point_6_2_9");
    img_point_6_2_9.name = "img_point_6_2_9";
    bottom_box.add(img_point_6_2_9);

    // btn_point_6_2_3
    const btn_point_6_2_3 = this.add.image(115, 20, "btn_point_6_2_3");
    btn_point_6_2_3.name = "btn_point_6_2_3";
    bottom_box.add(btn_point_6_2_3);

    // btn_point_6_2_2
    const btn_point_6_2_2 = this.add.image(350, 20, "btn_point_6_2_2");
    btn_point_6_2_2.name = "btn_point_6_2_2";
    bottom_box.add(btn_point_6_2_2);

    // btn_point_6_2_4
    const btn_point_6_2_4 = this.add.image(-350, 100, "btn_point_6_2_4");
    btn_point_6_2_4.scaleX = 0.5;
    btn_point_6_2_4.scaleY = 0.5;
    bottom_box.add(btn_point_6_2_4);

    // btn_point_6_2_7
    const btn_point_6_2_7 = this.add.image(-115, 100, "btn_point_6_2_7");
    btn_point_6_2_7.scaleX = 0.5;
    btn_point_6_2_7.scaleY = 0.5;
    bottom_box.add(btn_point_6_2_7);

    // btn_point_6_2_6
    const btn_point_6_2_6 = this.add.image(115, 100, "btn_point_6_2_6");
    btn_point_6_2_6.scaleX = 0.5;
    btn_point_6_2_6.scaleY = 0.5;
    bottom_box.add(btn_point_6_2_6);

    // btn_point_6_2_5
    const btn_point_6_2_5 = this.add.image(350, 100, "btn_point_6_2_5");
    btn_point_6_2_5.scaleX = 0.5;
    btn_point_6_2_5.scaleY = 0.5;
    bottom_box.add(btn_point_6_2_5);

    // point_6_31
    const point_6_31 = this.add.container(
      1235.540771484375,
      1619.5235595703125
    );
    point_6_31.name = "point_6_31";
    point_6_31.visible = false;
    point_6.add(point_6_31);

    // point_6_41
    const point_6_41 = this.add.container(
      1235.540771484375,
      1619.5235595703125
    );
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
      "여성의 필수품, 거울",
      titleStyle
    );
    text_37.name = "text_37";
    text_37.setOrigin(0.5, 0);
    point_7_11.add(text_37);

    const content_open_7_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">고려 사람들은 청동거울의 어떤 면을 사용했을까요? 문양이 없는 반대편 면을 활용해 얼굴을 단장했어요. 한가운데 솟은 꼭지는 어떤 역할을 할까요?</p>`
      );
    point_7_11.add(content_open_7_1);

    // img_point_7_1
    const img_point_7_1 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_7_1"
    );
    point_7_11.add(img_point_7_1);

    // point_7_12
    const point_7_12 = this.add.container(0, 0);
    point_7_12.name = "point_7_12";
    point_7_12.visible = false;
    point_7.add(point_7_12);

    // text_86
    const text_86 = this.add.text(
      titleX,
      titleY,
      "사용하기 편한 화장대 거울",
      titleStyle
    );
    text_86.name = "text_86";
    text_86.setOrigin(0.5, 0);
    point_7_12.add(text_86);

    const content_open_7_2 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">꼭지의 구멍에 끈을 묶어 손에 걸어서 사용하거나 거울걸이와 함께 사용했어요. 전시된 거울걸이의 연꽃 모양 고리를 찾아보세요.</p>`
      );
    point_7_12.add(content_open_7_2);

    // img_point_16
    const img_point_16 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_7_2"
    );
    img_point_16.name = "img_point_16";
    point_7_12.add(img_point_16);

    // bg_point_7_1
    const bg_point_7_1 = this.add.image(321, 795 + 96, "bg_point_7_1");
    bg_point_7_1.name = "bg_point_7_1";
    point_7_12.add(bg_point_7_1);

    // text_125
    const text_125 = this.add.text(290, 1563 + 96, "", {});
    text_125.name = "text_125";
    text_125.setOrigin(0.5, 0);
    text_125.text = "거울의 고리를 눌러 확인하세요.";
    text_125.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_125.setLineSpacing(2);
    text_125.setWordWrapWidth(800);
    point_7_12.add(text_125);

    // point_7_21
    const point_7_21 = this.add.container(0, 0);
    point_7_21.name = "point_7_21";
    point_7_21.visible = false;
    point_7.add(point_7_21);

    // text_80
    const text_80 = this.add.text(
      titleX,
      88,
      "그림을 맞춰 청동거울에 새겨진 이야기를 확인해 보세요.",
      titleStyle
    );
    text_80.name = "text_80";
    text_80.setOrigin(0.5, 0);
    text_80.setWordWrapWidth(850);
    point_7_21.add(text_80);

    // img_point_7_4 (전체)
    const img_point_7_4 = this.add.image(290, 620, "img_point_7_4");
    point_7_21.add(img_point_7_4);

    // btn_point_7_4_on (용 1-1)
    const btn_point_7_4_on = this.add.image(-10, 1198, "btn_point_7_4_on");
    point_7_21.add(btn_point_7_4_on);

    // btn_point_7_4
    const btn_point_7_4 = this.add.image(-10, 1198, "btn_point_7_4");
    btn_point_7_4.name = "btn_point_7_4";
    point_7_21.add(btn_point_7_4);

    // btn_point_7_5_on (용에 맞서는 사람들 1-2)
    const btn_point_7_5_on = this.add.image(290, 1198, "btn_point_7_5_on");
    point_7_21.add(btn_point_7_5_on);

    // btn_point_7_5
    const btn_point_7_5 = this.add.image(290, 1198, "btn_point_7_5");
    btn_point_7_5.name = "btn_point_7_5";
    point_7_21.add(btn_point_7_5);

    // btn_point_7_1_on (물고기 1-3)
    const btn_point_7_1_on = this.add.image(590, 1198, "btn_point_7_1_on");
    point_7_21.add(btn_point_7_1_on);

    // btn_point_7_1
    const btn_point_7_1 = this.add.image(590, 1198, "btn_point_7_1");
    btn_point_7_1.name = "btn_point_7_1";
    point_7_21.add(btn_point_7_1);

    // btn_point_7_6_on (마갈어 2-1)
    const btn_point_7_6_on = this.add.image(-10, 1531, "btn_point_7_6_on");
    point_7_21.add(btn_point_7_6_on);

    // btn_point_7_6
    const btn_point_7_6 = this.add.image(-10, 1531, "btn_point_7_6");
    btn_point_7_6.name = "btn_point_7_6";
    point_7_21.add(btn_point_7_6);

    // btn_point_7_3_on (방향을 잡는 뱃사람 2-2)
    const btn_point_7_3_on = this.add.image(290, 1531, "btn_point_7_3_on");
    point_7_21.add(btn_point_7_3_on);

    // btn_point_7_3
    const btn_point_7_3 = this.add.image(290, 1531, "btn_point_7_3");
    btn_point_7_3.name = "btn_point_7_3";
    point_7_21.add(btn_point_7_3);

    // btn_point_7_2_on (황비창천 2-3)
    const btn_point_7_2_on = this.add.image(590, 1531, "btn_point_7_2_on");
    point_7_21.add(btn_point_7_2_on);

    // btn_point_7_2
    const btn_point_7_2 = this.add.image(590, 1531, "btn_point_7_2");
    btn_point_7_2.name = "btn_point_7_2";
    point_7_21.add(btn_point_7_2);

    // point_7_22
    const point_7_22 = this.add.container(0, 0);
    point_7_22.name = "point_7_22";
    point_7_22.visible = false;
    point_7.add(point_7_22);

    // text_85
    const text_85 = this.add.text(
      titleX,
      titleY,
      "밝게 빛나며 크고 창성한 하늘",
      titleStyle
    );
    text_85.name = "text_85";
    text_85.setOrigin(0.5, 0);
    point_7_22.add(text_85);

    const content_open_7_3 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">거울 속 이야기는 잘 보셨나요? 거울에 새겨진 문양에는 맑은 하늘과 안전한 항해를 기원하는 고려 사람의 간절한 마음이 담겨있어요.</p>`
      );
    point_7_22.add(content_open_7_3);

    // img_point_3
    const img_point_3 = this.add.image(
      contentImageX,
      contentImageY,
      "img_point_7_5"
    );
    point_7_22.add(img_point_3);

    // point_7_31
    const point_7_31 = this.add.container(474.08795166015625, 3622.1962890625);
    point_7_31.name = "point_7_31";
    point_7_31.visible = false;
    point_7.add(point_7_31);

    // point_7_41
    const point_7_41 = this.add.container(474.08795166015625, 3622.1962890625);
    point_7_41.name = "point_7_41";
    point_7_41.visible = false;
    point_7.add(point_7_41);

    // point_8
    const point_8 = this.add.container(250, 0);
    point_8.visible = false;

    // point_8_11
    const point_8_11 = this.add.container(0, 10);
    point_8_11.name = "point_8_11";
    point_8_11.visible = false;
    point_8.add(point_8_11);

    // text_35
    const text_35 = this.add.text(298, 160, "", {});
    text_35.setOrigin(0.5, 0);
    text_35.text =
      "묘지명의 내용을 확인해\n문신 양택춘의 가계도를 완성해 보세요.";
    text_35.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "35pt",
    });
    text_35.setLineSpacing(0.5);
    text_35.setWordWrapWidth(950);
    point_8_11.add(text_35);

    // img_point_8_1
    const img_point_8_1 = this.add.image(285, 595, "img_point_8_1");
    point_8_11.add(img_point_8_1);

    // con_fl
    const con_fl = this.add.container(-250, 70);
    con_fl.name = "con_fl";
    point_8_11.add(con_fl);

    // fl_4_3
    const fl_4_3 = this.add.container(790, 1310);
    fl_4_3.name = "fl_4_3";
    fl_4_3.visible = false;
    con_fl.add(fl_4_3);

    // line_3
    const line_3 = this.add.image(-132 + 22, -263 + 27 + 60, "line_3");
    line_3.name = "line_3";
    fl_4_3.add(line_3);

    // fl_4_4
    const fl_4_4 = this.add.container(790, 1310);
    fl_4_4.name = "fl_4_4";
    fl_4_4.visible = false;
    con_fl.add(fl_4_4);

    // fl_4_5
    const fl_4_5 = this.add.container(791, 1521);
    fl_4_5.name = "fl_4_5";
    fl_4_5.visible = false;
    con_fl.add(fl_4_5);

    // fl_3_r
    const fl_3_r = this.add.container(789, 1087);
    fl_3_r.name = "fl_3_r";
    fl_3_r.visible = false;
    con_fl.add(fl_3_r);

    // fl_4_1
    const fl_4_1 = this.add.container(285, 1309);
    fl_4_1.name = "fl_4_1";
    fl_4_1.visible = false;
    con_fl.add(fl_4_1);

    // line_2
    const line_2 = this.add.image(131 - 10, -263 + 29 + 60, "line_2");
    line_2.name = "line_2";
    fl_4_1.add(line_2);

    // fl_4_2
    const fl_4_2 = this.add.container(287, 1455);
    fl_4_2.name = "fl_4_2";
    fl_4_2.visible = false;
    con_fl.add(fl_4_2);

    // fl_3_l
    const fl_3_l = this.add.container(290, 1087);
    fl_3_l.name = "fl_3_l";
    fl_3_l.visible = false;
    con_fl.add(fl_3_l);

    // fl_1
    const fl_1 = this.add.container(540, 870);
    fl_1.name = "fl_1";
    fl_1.visible = false;
    con_fl.add(fl_1);

    // bg_1
    const bg_1 = this.add.image(-2, 120, "bg_1");
    bg_1.name = "bg_1";
    fl_1.add(bg_1);

    // text_36
    const text_36 = this.add.text(0, 60, "", {});
    text_36.setOrigin(0.5, 0);
    text_36.text = "양택춘";
    text_36.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
    });
    text_36.setLineSpacing(0.5);
    text_36.setWordWrapWidth(950);
    fl_1.add(text_36);

    // text_47
    const text_47 = this.add.text(0, 120, "", {});
    text_47.setOrigin(0.5, 0);
    text_47.text = "1172년 임진년 출생 / 1254년 갑인년 사망";
    text_47.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_47.setLineSpacing(0.5);
    text_47.setWordWrapWidth(950);
    fl_1.add(text_47);

    // fl_2
    const fl_2 = this.add.container(540, 1010);
    fl_2.name = "fl_2";
    fl_2.visible = false;
    con_fl.add(fl_2);

    // line_1
    const line_1 = this.add.image(0, 78, "line_1");
    line_1.name = "line_1";
    fl_2.add(line_1);

    // text_70
    const text_70 = this.add.text(0, 80, "", {});
    text_70.setOrigin(0.5, 0);
    text_70.text = "부부";
    text_70.setStyle({
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "36pt",
      color: "#000",
    });
    text_70.setLineSpacing(0.5);
    text_70.setWordWrapWidth(950);
    fl_2.add(text_70);

    // bg_open_point_8_1
    const bg_open_point_8_1 = this.add.image(18, 46, "bg_open_point_8_1");
    bg_open_point_8_1.name = "bg_open_point_8_1";
    fl_4_1.add(bg_open_point_8_1);

    // bg_open_point_8_2
    const bg_open_point_8_2 = this.add.image(-20, 110, "bg_open_point_8_2");
    bg_open_point_8_2.name = "bg_open_point_8_2";
    fl_4_3.add(bg_open_point_8_2);

    // bg_open_point_8_2_on
    const bg_open_point_8_2_on = this.add.image(
      -20,
      110,
      "bg_open_point_8_2_on"
    );
    bg_open_point_8_2_on.name = "bg_open_point_8_2_on";
    bg_open_point_8_2_on.setAlpha(0);
    fl_4_4.add(bg_open_point_8_2_on);

    // bg_open_point_8_3
    const bg_open_point_8_3 = this.add.image(0, 0, "bg_open_point_8_3");
    bg_open_point_8_3.name = "bg_open_point_8_3";
    bg_open_point_8_3.setAlpha(0);
    fl_4_1.add(bg_open_point_8_3);

    // mark_lay_3
    const mark_lay_3 = this.add.image(226, 642, "btn_lay_3");
    mark_lay_3.name = "mark_lay_3";
    point_8_11.add(mark_lay_3);

    // mark_lay_2
    const mark_lay_2 = this.add.image(262, 480, "btn_lay_2");
    mark_lay_2.name = "mark_lay_2";
    point_8_11.add(mark_lay_2);

    // mark_lay_1
    const mark_lay_1 = this.add.image(656, 442, "btn_lay_1");
    mark_lay_1.name = "mark_lay_1";
    point_8_11.add(mark_lay_1);

    // btn_lay_3
    const btn_lay_3 = this.add.image(226, 785, "btn_plus");
    btn_lay_3.name = "btn_lay_3";
    btn_lay_3.visible = false;
    point_8_11.add(btn_lay_3);

    // btn_lay_2
    const btn_lay_2 = this.add.image(262, 665, "btn_plus");
    btn_lay_2.name = "btn_lay_2";
    btn_lay_2.visible = false;
    point_8_11.add(btn_lay_2);

    // btn_lay_1
    const btn_lay_1 = this.add.image(656, 543, "btn_plus");
    btn_lay_1.name = "btn_lay_1";
    point_8_11.add(btn_lay_1);

    // mark_line_3
    const mark_line_3 = this.add.image(209, 575, "mark_line_3");
    mark_line_3.name = "mark_line_3";
    mark_line_3.alpha = 0;
    mark_line_3.alphaTopLeft = 0;
    mark_line_3.alphaTopRight = 0;
    mark_line_3.alphaBottomLeft = 0;
    mark_line_3.alphaBottomRight = 0;
    point_8_11.add(mark_line_3);

    // mark_line_2
    const mark_line_2 = this.add.image(245, 595, "mark_line_2");
    mark_line_2.name = "mark_line_2";
    mark_line_2.alpha = 0;
    mark_line_2.alphaTopLeft = 0;
    mark_line_2.alphaTopRight = 0;
    mark_line_2.alphaBottomLeft = 0;
    mark_line_2.alphaBottomRight = 0;
    point_8_11.add(mark_line_2);

    // mark_line_1
    const mark_line_1 = this.add.image(387, 564, "mark_line_1");
    mark_line_1.name = "mark_line_1";
    mark_line_1.alpha = 0;
    mark_line_1.alphaTopLeft = 0;
    mark_line_1.alphaTopRight = 0;
    mark_line_1.alphaBottomLeft = 0;
    mark_line_1.alphaBottomRight = 0;
    point_8_11.add(mark_line_1);

    // point_8_12
    const point_8_12 = this.add.container(0, 70);
    point_8_12.name = "point_8_12";
    point_8_12.visible = false;
    point_8.add(point_8_12);

    // point_8_21
    const point_8_21 = this.add.container(0, 0);
    point_8_21.name = "point_8_21";
    point_8_21.visible = false;
    point_8.add(point_8_21);

    // text_96
    const text_96 = this.add.text(290, 180, "", {});
    text_96.setOrigin(0.5, 0);
    text_96.text = "부처의 깨달음이 담긴 진언";
    text_96.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "45pt",
    });
    text_96.setLineSpacing(0.5);
    text_96.setWordWrapWidth(800);
    point_8_21.add(text_96);

    // text_96_sub
    const text_96_sub = this.add.text(290, 300, "", {});
    text_96_sub.setOrigin(0.5, 0);
    text_96_sub.text = "불교의 주문이 산스크리트어로 적혀있어요.";
    text_96_sub.setStyle({
      color: "#080809",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "36pt",
    });
    text_96_sub.setLineSpacing(2);
    text_96_sub.setWordWrapWidth(1080);
    point_8_21.add(text_96_sub);

    // img_point_2
    const img_point_2 = this.add.image(288, 714, "img_point_8_2");
    point_8_21.add(img_point_2);

    const img_point_2_bottom = this.add.image(
      292 + 44,
      714 + 712 - 32,
      "img_point_8_2_bottom"
    );
    point_8_21.add(img_point_2_bottom);

    // b_ex_1
    const b_ex_1 = this.add.container(-118, 1144);
    point_8_21.add(b_ex_1);

    // text_105
    const text_105 = this.add.text(
      titleX,
      titleY,
      "우수한 승려를 선발하는 승과",
      titleStyle
    );
    text_105.setOrigin(0.5, 0);
    point_8_12.add(text_105);

    const content_open_8_1 = this.add
      .dom(0, 0)
      .createFromHTML(
        `<p class="content_text">고려시대 승려들은 승과에 합격하면 국가에서 벼슬과 경제적 대가를 받았어요. 일정기간 근무하면 승진할 수도 있었어요. 승려가 올라갈 수 있는 가장 높은 자리는 <a class="ex_popup_title" data-content="* 왕사:<br />고려시대 국왕의 스승 역할을 했던 고승으로 국왕도 제자의 예를 갖추었어요. 고려에는 총 27명의 왕사가 있었어요.">왕사</a>와 <a class="ex_popup_title" data-content="* 국사:<br />나라의 스승 역할을 했던 고승으로, 왕사가 사망한 후 국사로 추대되기도 했어요.">국사</a>에요</p>`
      );
    point_8_12.add(content_open_8_1);

    // bg_box_1
    const bg_box_1 = this.add.image(295, 802, "bg_box_1");
    point_8_12.add(bg_box_1);

    // bg_box_2
    const bg_box_2 = this.add.image(295, 1135, "bg_box_2");
    point_8_12.add(bg_box_2);

    // bg_box
    const bg_box = this.add.image(295, 1471, "bg_box_2");
    point_8_12.add(bg_box);

    // btn_up
    const btn_up = this.add.image(292, 966, "btn_up");
    point_8_12.add(btn_up);

    // btn_up_1
    const btn_up_1 = this.add.image(292, 1296, "btn_up");
    point_8_12.add(btn_up_1);

    // text_107
    const text_107 = this.add.text(292, 1409, "", {});
    text_107.setOrigin(0.5, 0);
    text_107.text = "승과 합격";
    text_107.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "35pt",
    });
    text_107.setLineSpacing(0.5);
    text_107.setWordWrapWidth(850);
    point_8_12.add(text_107);

    // text_108
    const text_108 = this.add.text(292, 1072, "", {});
    text_108.setOrigin(0.5, 0);
    text_108.text = "승진";
    text_108.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "35pt",
    });
    text_108.setLineSpacing(0.5);
    text_108.setWordWrapWidth(850);
    point_8_12.add(text_108);

    // text_109
    const text_109 = this.add.text(515, 743, "", {});
    text_109.setOrigin(0.5, 0);
    text_109.text = "왕사";
    text_109.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "35pt",
    });
    text_109.setLineSpacing(0.5);
    text_109.setWordWrapWidth(850);
    point_8_12.add(text_109);

    // text_110
    const text_110 = this.add.text(69, 743, "", {});
    text_110.setOrigin(0.5, 0);
    text_110.text = "국사";
    text_110.setStyle({
      align: "center",
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Bold",
      fontSize: "35pt",
    });
    text_110.setLineSpacing(0.5);
    text_110.setWordWrapWidth(850);
    point_8_12.add(text_110);

    // text_111
    const text_111 = this.add.text(292, 1152, "", {});
    text_111.setOrigin(0.5, 0);
    text_111.text = "(대사, 중대사, 삼중대사, 선사, 대선사, 수좌, 승통)";
    text_111.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_111.setLineSpacing(2);
    text_111.setWordWrapWidth(900);
    point_8_12.add(text_111);

    // text_112
    const text_112 = this.add.text(292, 1496, "", {});
    text_112.setOrigin(0.5, 0);
    text_112.text = "(대덕)";
    text_112.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_112.setLineSpacing(2);
    text_112.setWordWrapWidth(900);
    point_8_12.add(text_112);

    // text_113
    const text_113 = this.add.text(69, 829, "", {});
    text_113.setOrigin(0.5, 0);
    text_113.text = "(국왕이 임명)";
    text_113.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_113.setLineSpacing(2);
    text_113.setWordWrapWidth(900);
    point_8_12.add(text_113);

    // text_114
    const text_114 = this.add.text(515, 829, "", {});
    text_114.setOrigin(0.5, 0);
    text_114.text = "(국왕이 임명)";
    text_114.setStyle({
      color: "#000",
      fontFamily: "KoddiUDOnGothic-Regular",
      fontSize: "30pt",
    });
    text_114.setLineSpacing(2);
    text_114.setWordWrapWidth(900);
    point_8_12.add(text_114);

    // point_8_31
    const point_8_31 = this.add.container(0, 0);
    point_8_31.name = "point_8_31";
    point_8_31.visible = false;
    point_8.add(point_8_31);

    // point_8_41
    const point_8_41 = this.add.container(0, 0);
    point_8_41.name = "point_8_41";
    point_8_41.visible = false;
    point_8.add(point_8_41);

    // btn_next
    const btn_next = this.add.image(942, 1796, "btn_next");

    // btn_prev
    const btn_prev = this.add.image(132, 1796, "btn_next");
    btn_prev.setFlipX(true); //좌우반전

    // rectangle_2
    const rectangle_2 = this.add.rectangle(1029, 426, 100, 128);
    rectangle_2.fillColor = 16331314;

    //btn_close
    const btn_close = this.add.image(924, 65, "btn_close");
    btn_close.setOrigin(0, 0);

    this.prg_1 = prg_1;
    this.prg_2 = prg_2;
    this.prg_3 = prg_3;
    this.prg_4 = prg_4;
    this.prg_con = prg_con;
    this.temp_p3_text_1 = temp_p3_text_1;
    this.temp_p3_name = temp_p3_name;
    this.temp_p3_location = temp_p3_location;
    this.img_lp = img_lp;
    this.temp_p3_text = temp_p3_text;
    this.temp_p3_title = temp_p3_title;
    this.temp_p3 = temp_p3;
    this.point_n_41_text = point_n_41_text;
    this.point_n_41_quote = point_n_41_quote;
    this.point_n_41_quoteAuthor = point_n_41_quoteAuthor;
    this.temp_p4 = temp_p4;
    this.point_1 = point_1;
    this.point_2 = point_2;
    this.point_3 = point_3;
    this.point_4 = point_4;
    this.point_5 = point_5;
    this.point_6 = point_6;
    this.point_7 = point_7;
    this.point_8 = point_8;
    this.btn_next = btn_next;
    this.btn_prev = btn_prev;
    this.point_3_11 = point_3_11;
    this.btn_close = btn_close;

    this.events.emit("scene-awake");
  }

  public prg_1!: Phaser.GameObjects.Container;
  public prg_2!: Phaser.GameObjects.Container;
  public prg_3!: Phaser.GameObjects.Container;
  public prg_4!: Phaser.GameObjects.Container;
  public prg_con!: Phaser.GameObjects.Container;
  public temp_p3_text_1!: Phaser.GameObjects.Text;
  public temp_p3_name!: Phaser.GameObjects.Text;
  public temp_p3_location!: Phaser.GameObjects.Text;
  public img_lp!: Phaser.GameObjects.Image;
  public temp_p3_text!: Phaser.GameObjects.DOMElement;
  public temp_p3_title!: Phaser.GameObjects.Text;
  public temp_p3!: Phaser.GameObjects.Container;
  public point_n_41_text!: Phaser.GameObjects.DOMElement;
  public point_n_41_quote!: Phaser.GameObjects.Text;
  public point_n_41_quoteAuthor!: Phaser.GameObjects.Text;
  public temp_p4!: Phaser.GameObjects.Container;
  public point_1!: Phaser.GameObjects.Container;
  public point_2!: Phaser.GameObjects.Container;
  public point_3!: Phaser.GameObjects.Container;
  public point_4!: Phaser.GameObjects.Container;
  public point_5!: Phaser.GameObjects.Container;
  public point_6!: Phaser.GameObjects.Container;
  public text_135!: Phaser.GameObjects.Text;
  public text_136!: Phaser.GameObjects.Text;
  public text_137!: Phaser.GameObjects.Text;
  public text_138!: Phaser.GameObjects.Text;
  public text_139!: Phaser.GameObjects.Text;
  public text_140!: Phaser.GameObjects.Text;
  public text_141!: Phaser.GameObjects.Text;
  public point_7!: Phaser.GameObjects.Container;
  public point_8!: Phaser.GameObjects.Container;
  public btn_next!: Phaser.GameObjects.Image;
  public btn_prev!: Phaser.GameObjects.Image;
  public point_3_11!: Phaser.GameObjects.Container;
  public btn_close!: Phaser.GameObjects.Image;

  user: any;
  imageDragViewerConf: any;
  temp_p3_tempText: any;
  preload() {
    document.body.style.backgroundColor = "#83BBFF";
    this.cameras.main.setBackgroundColor(0x83bbff);
    this.load.pack("itrcop-asset-pack", itrcopAssetPackUrl);

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

    //http://localhost:8080/?page=ItrcOpenness&point=2&step=1
    this.user.currentPoint = this.user.currentPoint
      ? this.user.currentPoint
      : "point_1";
    this.user.currentPointSec = paramsObj.step ? parseInt(paramsObj.step) : -1;

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
        // for (let col = 0; col <= 4; col++) {
        // 	for (let row = 1; row <= 17; row++) {
        // 		this.textures.remove(col+"_"+row);
        // 	}
        // }
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

    this.load.on("complete", function () {}, this);
  }
  point: any;
  steps: any;
  init(data) {
    this.point = data.point;
    //todo 몇번째 여행자인지 통신해서 값 가져오기
  }

  public btn_next_originalListener: any;
  public btn_prev_originalListener: any;
  create() {
    Util.fixedButtons("itrc");
    this.editorCreate();

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
        const tempCurrentIndex = currentIndex;
        if (this.isDev) this.btn_prev.setVisible(true); //1페이지가 아니므로 무조건 이전버튼 보이게

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
                  if (currentIndex < tempCurrentIndex) return; //애니메이션 끝나기전에 다음 인덱스로 넘어간 상황이면 애니메이션 중지
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

        // if (currentPageNumber <= prgs.length) {
        // 	const currentPrg = prgs[currentPageNumber - 1];
        // 	this.tweens.add({
        // 		targets: currentPrg.list,
        // 		alpha: { from: 1, to: 0.5 },
        // 		yoyo: true,
        // 		repeat: 1,
        // 		duration: 200,
        // 		ease: 'Power2',
        // 		onComplete: () => {
        // 			// 깜박임 효과 후에 이미 변환된 이미지는 처리하지 않고 새로운 이미지만 적용
        // 			currentPrg.list.forEach((image:any) => {
        // 				if (image.texture.key.includes("ico_sml") || image.texture.key.includes("ico_big")) {
        // 					const newTexture = image.texture.key.replace("_on", "") + "_on";
        // 					image.setTexture(newTexture);
        // 				}
        // 			});
        // 		}
        // 	});
        // }
      } else {
        // console.log("end");
        //todo mapplay로 return
        this.exitScene();
      }
    };

    // btn_next 클릭 이벤트
    this.btn_next.setInteractive();
    this.btn_next_originalListener = () => {
      //오리지널 이벤트 리스너 함수 저장
      moveStep(null, null, null);
    };
    this.btn_next.on("pointerdown", this.btn_next_originalListener);
    this.btn_next.setDepth(1);

    moveStep(this.user.currentPointSec, null, null); //moveStep -> addContents에서 btn_next.off 실행되므로 아래로 내려야함

    const moveBackStep = (i, pi, si) => {
      this.user.currentPointSec = i;
      if (i) currentIndex = i;
      if (pi) currentPageIndex = pi;
      if (si) currentStepIndex = si;
      if (currentIndex > 0) {
        // 현재 단계 오른쪽으로 이동(숨김처리)
        if (currentIndex < this.steps.list.length) {
          const hideContent = this.steps.list[currentIndex];
          this.tweens.add({
            targets: hideContent,
            x: 1500,
            alpha: { from: 0.1, to: 0 },
            duration: 500,
            ease: "Power2",
            onStart: () => {
              hideContent.setVisible(false);
            },
          });
        }

        // 다음 단계 오른쪽에서 현재 위치로 이동
        const showContent = this.steps.list[currentIndex - 1];

        showContent.x = -1500;
        showContent.setVisible(true);
        this.tweens.add({
          targets: showContent,
          x: { from: 0, to: 0 },
          alpha: { from: 0, to: 1 },
          duration: 500,
          ease: "Power2",
        });
        currentIndex--;
        const tempCurrentIndex = currentIndex;
        if (currentIndex === 0) this.btn_prev.setVisible(false); //1페이지면 이전버튼 숨김

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
          const currentPrg = prgs[currentPageIndex];
          if (currentPageIndex <= prgs.length) {
            currentPrg.list
              .slice()
              .reverse()
              .forEach((image: any, index: number) => {
                if (
                  image.texture.key.includes("ico_sml") ||
                  image.texture.key.includes("ico_big")
                ) {
                  const newTexture = image.texture.key.replace("_on", "");
                  this.time.delayedCall(index * 300, () => {
                    if (currentIndex > tempCurrentIndex) return; //애니메이션 끝나기전에 다음 인덱스로 넘어간 상황이면 애니메이션 중지
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
          const currentPrg = prgs[currentPageIndex];
          currentPrg.list
            .slice()
            .reverse()
            .forEach((image: any, index: number) => {
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
      }
    };

    // btn_prev 클릭 이벤트
    this.btn_prev.setInteractive();
    this.btn_prev.setVisible(false);
    this.btn_prev_originalListener = () => {
      //오리지널 이벤트 리스너 함수 저장
      moveBackStep(null, null, null);
    };
    this.btn_prev.on("pointerdown", this.btn_prev_originalListener);
    this.btn_prev.setDepth(1);

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
  isZoomed: boolean = false;
  previousDistance: any;
  img_point_3_8!: Phaser.GameObjects.Image;
  point_1_11_originalContent: any;
  isTweenRunning: boolean = false; //뒤로가기 앞으로가기 애니메이션 안겹치기위해 사용
  content_open_1_1: Phaser.GameObjects.DOMElement;
  prevResourceManager: any = {};
  addContents(showContent: any) {
    let _this = this;
    // 배포시 주석 제거해야함
    // this.isDev = process.env.NODE_ENV === "production" ? false : true;
    switch (showContent.name) {
      case "point_1_11":
        //이전버튼 위해서 변경되는거 다 저장해놔야함
        if (_this.point_1_11_originalContent) {
          showContent.getByName("btn_in_next").setVisible(true);
          showContent.getByName("eff_point_1_1").setVisible(false);
          showContent.getByName("text_122").setVisible(false);
          showContent
            .getByName("text_27")
            .setText(_this.point_1_11_originalContent.text_27);
          _this.content_open_1_1.createFromHTML(
            _this.point_1_11_originalContent.content_open_1_1
          );
        } else {
          _this.point_1_11_originalContent = {
            text_27: showContent.getByName("text_27").text,
            content_open_1_1: _this.content_open_1_1.node.innerHTML,
          };
        }
        _this.btn_next.setVisible(false);

        showContent
          .getByName("btn_in_next")
          .setInteractive()
          .off("pointerdown")
          .on("pointerdown", function () {
            showContent.getByName("btn_in_next").setVisible(false);
            showContent.getByName("text_27").setText("해동복녕궁주");
            showContent
              .getByName("content_open_1_1")
              .setHTML(
                `<p class="content_text">고려는 스스로를 ‘해동천자’로 칭하고 군주를 황제 또는 천자로 불렀어요. 묘지명에서 복녕궁주를  ‘천자의 딸, ‘해동복녕궁주’라고 강조해요. ‘해동복녕궁주’ 글자를 찾아보세요.</p>`
              );

            _this.tweens.add({
              targets: [showContent.getByName("eff_point_1_1")],
              alpha: { from: 0, to: 1 },
              scale: { from: 1.1, to: 1 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                showContent.getByName("eff_point_1_1").setVisible(true);
                showContent.getByName("text_122").setVisible(true);
              },
              onComplete: () => {
                showContent.getByName("btn_in_next").setVisible(false);
                _this.btn_next.setVisible(true);
              },
            });
          });

        break;

      case "point_2_11":
        this.imageDragViewerConf = {
          imagePath: "assets/itrcop/2/",
          row: 0,
          col: 9,
          scale: 1.3,
        };
        this.imageSlideViewer();
        break;
      case "point_2_12":
        this.imageSlideViewer();
        break;
      case "point_2_21":
        _this.detachImageSlideViewer();
        if (this.prevResourceManager.isSet_point_2_21) break;
        this.prevResourceManager.isSet_point_2_21 = true;
        break;
      case "point_2_23":
        // showContent.getByName('bg_text_01').setInteractive();
        // showContent.getByName('bg_text_01').on('pointerdown', () => {
        // 	this.scene.pause();
        // 	this.scene.launch('ItrcOpennessPopup', { point: 'point_2_23' });
        // });
        // showContent.getByName('bg_text_02').setInteractive();
        // showContent.getByName('bg_text_02').on('pointerdown', () => {
        // 	this.scene.pause();
        // 	this.scene.launch('ItrcOpennessPopup', { point: 'point_2_23' });
        // });
        break;

      case "point_3_11":
        _this.btn_next.setVisible(false);
        let p3selectedCheck = [];
        let point_3_check_1 = showContent.getByName("point_3_check_1");
        point_3_check_1
          .getByName("checkbox_g_2")
          .setInteractive()
          .on("pointerdown", function () {
            _this.tweens.add({
              targets: point_3_check_1.getByName("checkbox_gt_on_2"),
              alpha: { from: 0, to: 1 },
              scale: { from: 0, to: 1 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                point_3_check_1
                  .getByName("checkbox_g_2")
                  .setTexture("checkbox_g_on");
                point_3_check_1.getByName("checkbox_gt_on_2").setVisible(true);
                //check when push point_3_check_1

                if (!p3selectedCheck.includes("point_3_check_1")) {
                  p3selectedCheck.push("point_3_check_1");
                }
                if (p3selectedCheck.length == 4) {
                  _this.btn_next.setVisible(true);
                }
              },
              onComplete: () => {},
            });
          });

        let point_3_check_2 = showContent.getByName("point_3_check_2");
        point_3_check_2
          .getByName("checkbox_g_3")
          .setInteractive()
          .on("pointerdown", function () {
            _this.tweens.add({
              targets: point_3_check_2.getByName("checkbox_gt_on_3"),
              alpha: { from: 0, to: 1 },
              scale: { from: 0, to: 1 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                point_3_check_2
                  .getByName("checkbox_g_3")
                  .setTexture("checkbox_g_on");
                point_3_check_2.getByName("checkbox_gt_on_3").setVisible(true);
                if (!p3selectedCheck.includes("point_3_check_2")) {
                  p3selectedCheck.push("point_3_check_2");
                }
                if (p3selectedCheck.length == 4) {
                  _this.btn_next.setVisible(true);
                }
              },
              onComplete: () => {},
            });
          });

        let point_3_check_3 = showContent.getByName("point_3_check_3");
        point_3_check_3
          .getByName("checkbox_g_5")
          .setInteractive()
          .on("pointerdown", function () {
            _this.tweens.add({
              targets: point_3_check_3.getByName("checkbox_gt_on_5"),
              alpha: { from: 0, to: 1 },
              scale: { from: 0, to: 1 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                point_3_check_3
                  .getByName("checkbox_g_5")
                  .setTexture("checkbox_g_on");
                point_3_check_3.getByName("checkbox_gt_on_5").setVisible(true);
                if (!p3selectedCheck.includes("point_3_check_3")) {
                  p3selectedCheck.push("point_3_check_3");
                }
                if (p3selectedCheck.length == 4) {
                  _this.btn_next.setVisible(true);
                }
              },
              onComplete: () => {},
            });
          });

        let point_3_check_4 = showContent.getByName("point_3_check_4");
        point_3_check_4
          .getByName("checkbox_g_4")
          .setInteractive()
          .on("pointerdown", function () {
            _this.tweens.add({
              targets: point_3_check_4.getByName("checkbox_gt_on_4"),
              alpha: { from: 0, to: 1 },
              scale: { from: 0, to: 1 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                point_3_check_4
                  .getByName("checkbox_g_4")
                  .setTexture("checkbox_g_on");
                point_3_check_4.getByName("checkbox_gt_on_4").setVisible(true);
                if (!p3selectedCheck.includes("point_3_check_4")) {
                  p3selectedCheck.push("point_3_check_4");
                }
                if (p3selectedCheck.length == 4) {
                  _this.btn_next.setVisible(true);
                }
              },
              onComplete: () => {},
            });
          });

        point_3_check_1
          .getByName("text_13")
          .setInteractive()
          .on("pointerdown", function () {
            point_3_check_1.getByName("checkbox_g_2").emit("pointerdown");
          });
        point_3_check_2
          .getByName("text_29")
          .setInteractive()
          .on("pointerdown", function () {
            point_3_check_2.getByName("checkbox_g_3").emit("pointerdown");
          });
        point_3_check_3
          .getByName("text_67")
          .setInteractive()
          .on("pointerdown", function () {
            point_3_check_3.getByName("checkbox_g_5").emit("pointerdown");
          });
        point_3_check_4
          .getByName("text_63")
          .setInteractive()
          .on("pointerdown", function () {
            point_3_check_4.getByName("checkbox_g_4").emit("pointerdown");
          });

        const img_point_3_8_config = {
          x: 290,
          y: 619 + 94,
          width: 790,
          height: 790,
        };

        const zoomBox = showContent.getByName("img_zoom");

        const mask = this.add.graphics();
        mask
          .fillStyle(0x000000) // White fill
          .fillRoundedRect(
            img_point_3_8_config.x - 144,
            img_point_3_8_config.y - 306,
            790,
            790,
            40
          );
        // const geoMask = new Phaser.Display.Masks.GeometryMask(this, mask);
        mask.generateTexture("point_3_11_mask");
        mask.destroy();
        const maskImage = this.add.image(0, 0, "point_3_11_mask").setOrigin(0);
        maskImage.setVisible(false);
        const geoMask = new Phaser.Display.Masks.BitmapMask(this, maskImage);
        this.img_point_3_8.setInteractive();

        zoomBox.setInteractive().on("pointerdown", () => {
          if (this.isZoomed) {
            this.img_point_3_8.setScale(1);
            this.isZoomed = false;
            this.img_point_3_8.clearMask();

            //드래그 해제
            this.input.setDraggable(this.img_point_3_8, false);
            this.img_point_3_8.off("drag");
            this.img_point_3_8.off("pointermove");
            this.img_point_3_8.off("pointerup");
            this.img_point_3_8.off("pointerdown");
            this.img_point_3_8
              .setX(img_point_3_8_config.x)
              .setY(img_point_3_8_config.y);
          } else {
            this.img_point_3_8.setMask(geoMask);
            this.img_point_3_8.setScale(3);
            this.isZoomed = true;

            // 드래그 구현
            this.input.setDraggable(this.img_point_3_8);
            this.img_point_3_8.on("drag", (pointer, dragX, dragY) => {
              if (this.input.pointer2.isDown) return;
              // 이미지를 드래그할 때 X와 Y 위치를 제한하여 움직임을 제한

              //이미지 자체에 여백이 많이 있어서 움직임 제한이 제대로 안됨 이미지를 수정하든 min, max를 하드코딩하든 해야함
              this.img_point_3_8.x = Phaser.Math.Clamp(
                dragX,
                img_point_3_8_config.x -
                  (this.img_point_3_8.displayWidth * 0.9 -
                    img_point_3_8_config.width) /
                    2,
                img_point_3_8_config.x +
                  (this.img_point_3_8.displayWidth * 0.9 -
                    img_point_3_8_config.width) /
                    2
              );
              this.img_point_3_8.y = Phaser.Math.Clamp(
                dragY,
                img_point_3_8_config.y -
                  (this.img_point_3_8.displayHeight * 0.9 -
                    img_point_3_8_config.height) /
                    2,
                img_point_3_8_config.y +
                  (this.img_point_3_8.displayHeight * 0.9 -
                    img_point_3_8_config.height) /
                    2
              );

              if (this.img_point_3_8.displayWidth <= img_point_3_8_config.width)
                this.img_point_3_8.x = img_point_3_8_config.x;
              if (
                this.img_point_3_8.displayHeight <= img_point_3_8_config.height
              )
                this.img_point_3_8.y = img_point_3_8_config.y;
            });

            this.previousDistance = null;
            this.img_point_3_8.on("pointermove", (pointer) => {
              // pointermove 이벤트 리스너 설정
              if (this.input.pointer1.isDown && this.input.pointer2.isDown) {
                // 두 포인터(손가락) 사이의 거리 계산
                const dist = Phaser.Math.Distance.Between(
                  this.input.pointer1.x,
                  this.input.pointer1.y,
                  this.input.pointer2.x,
                  this.input.pointer2.y
                );

                // 손가락 사이의 중심 계산
                let centerX =
                  (this.input.pointer1.x + this.input.pointer2.x) / 2;
                let centerY =
                  (this.input.pointer1.y + this.input.pointer2.y) / 2;

                if (this.previousDistance !== null) {
                  // 이전 거리와 현재 거리의 차이를 계산하여 이미지 스케일 조정
                  const scaleFactor = dist / this.previousDistance;
                  let newScale = this.img_point_3_8.scale * scaleFactor;

                  //스케일 제한 적용
                  if (newScale > 10) newScale = 10;
                  if (newScale < 1) newScale = 1;

                  // 월드 좌표 기준으로 중심 계산
                  const worldPoint = this.cameras.main.getWorldPoint(
                    centerX,
                    centerY
                  );

                  // 이미지의 이동량 계산 (보정 값)
                  const dx =
                    (worldPoint.x - this.img_point_3_8.x) *
                    (newScale / this.img_point_3_8.scale - 1);
                  const dy =
                    (worldPoint.y - this.img_point_3_8.y) *
                    (newScale / this.img_point_3_8.scale - 1);
                  // 이미지 확대/축소 시 이동할 위치 계산

                  this.img_point_3_8.setScale(newScale);
                  // this.img_point_3_8.x -= dx;
                  this.img_point_3_8.x = Phaser.Math.Clamp(
                    this.img_point_3_8.x - dx,
                    img_point_3_8_config.x -
                      (this.img_point_3_8.displayWidth * 0.9 -
                        img_point_3_8_config.width) /
                        2,
                    img_point_3_8_config.x +
                      (this.img_point_3_8.displayWidth * 0.9 -
                        img_point_3_8_config.width) /
                        2
                  );
                  // this.img_point_3_8.y -= dy;
                  this.img_point_3_8.y = Phaser.Math.Clamp(
                    this.img_point_3_8.y - dy,
                    img_point_3_8_config.y -
                      (this.img_point_3_8.displayHeight * 0.9 -
                        img_point_3_8_config.height) /
                        2,
                    img_point_3_8_config.y +
                      (this.img_point_3_8.displayHeight * 0.9 -
                        img_point_3_8_config.height) /
                        2
                  );

                  if (
                    this.img_point_3_8.displayWidth <=
                    img_point_3_8_config.width
                  )
                    this.img_point_3_8.x = img_point_3_8_config.x;
                  if (
                    this.img_point_3_8.displayHeight <=
                    img_point_3_8_config.height
                  )
                    this.img_point_3_8.y = img_point_3_8_config.y;
                }

                // 현재 거리를 이전 거리로 저장
                this.previousDistance = dist;
              }
            });

            // pointerup 이벤트 리스너 설정
            this.img_point_3_8.on("pointerup", () => {
              // 손가락을 뗄 때 거리를 초기화
              this.previousDistance = null;
            });

            // pointerdown 이벤트 리스너 설정
            this.img_point_3_8.on("pointerdown", () => {
              // 손가락을 댈 때 초기 거리 설정
              if (this.input.pointer1.isDown && this.input.pointer2.isDown) {
                this.previousDistance = Phaser.Math.Distance.Between(
                  this.input.pointer1.x,
                  this.input.pointer1.y,
                  this.input.pointer2.x,
                  this.input.pointer2.y
                );
              }
            });
          }
        });

        break;

      case "point_3_21":
        _this.btn_next.setVisible(false);

        let btn = showContent
          .getByName("img_point_3_1")
          .setInteractive({ cursor: "pointer" });
        let target = showContent.getByName("img_point_3_4");
        let addtext = showContent.getByName("text_69");
        let holder = showContent.getByName("bg_point_3_2");
        _this.input.setDraggable(btn);
        btn.originalX = btn.x;
        btn.originalY = btn.y;

        _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          gameObject.setDepth(200);
          gameObject.setPosition(dragX, dragY);
        });

        let size = 500;
        let dropZone = _this.add
          .zone(540, 1350, size, size)
          .setRectangleDropZone(size, size)
          .setInteractive();

        _this.input.on("dragenter", function (pointer, gameObject, dropZone) {
          gameObject.isDropable = true;
        });
        _this.input.on("dragleave", function (pointer, gameObject, dropZone) {
          gameObject.isDropable = false;
        });

        let dragCount = 0;
        _this.input.on("dragend", (pointer, gameObject) => {
          if (gameObject.isDropable) {
            if (dragCount === 0) {
              gameObject.setPosition(316, 1236);
              gameObject.setScale(0.5);
              target.setTexture("img_point_3_5").setY(1353);
              btn.setTexture("img_point_3_2").setScale(1).setX(295).setY(660);
              addtext.setText("불");
              showContent
                .getByName("text_124")
                .setText("향에 불을 붙여주세요.");
            } else if (dragCount === 1) {
              gameObject.setPosition(316, 1236);
              gameObject.setScale(0.5);
              target.setTexture("img_point_3_6").setY(1155);
              btn.setTexture("img_point_3_3").setScale(1).setX(295).setY(660);
              addtext.setText("향로의 뚜껑");
              showContent.getByName("text_124").setText("뚜껑을 덮어주세요.");
            } else if (dragCount === 2) {
              holder.setVisible(false);
              btn.setVisible(false);
              addtext.setVisible(false);
              showContent.getByName("text_124").setVisible(false);
              target.setTexture("img_point_3_7").setY(965);
              // _this.btn_next.setVisible(true);

              let eff_point_3_7 = showContent.getByName("eff_point_3_7");
              eff_point_3_7.setOrigin(0.8, 1).setX(273);
              //향로 연기애니메이션
              _this.tweens.add({
                targets: showContent.getByName("eff_point_3_7"),
                scale: { from: 0, to: 0.65 },
                duration: 1500,
                ease: "Sine.easeOut",
                // repeat: -1,
                onStart: () => {
                  showContent.getByName("eff_point_3_7").setVisible(true);
                },
                onComplete: () => {
                  _this.btn_next.setVisible(true);
                },
              });
            }
            dragCount++;
          } else {
            gameObject.setPosition(gameObject.originalX, gameObject.originalY);
          }
        });

        break;

      case "point_4_11":
        //기존 btn_next 버튼을 임시로 다른 기능으로 사용
        _this.btn_next.off("pointerdown", _this.btn_next_originalListener);
        const temporaryListner = function () {
          const alertModal = new ModaAlert(_this, {
            xPos: 0,
            yPos: 758,
            width: 800,
            height: 405,
            round: 25,
            bgColor: 0xffffff,
            text:
              "이 묘지명은 작은 꽃 모양으로\n" +
              "꽃 무늬가 새겨져 있어요.\n\n" +
              "[b][size=44]어떤 사연이 담겨 있을까요?[/b][/size]",
            align: "center",
            blackLayer: true,
            useBBCodeText: true,
            onClose: () => {
              _this.btn_next.off("pointerdown", temporaryListner);
              _this.btn_next.on("pointerdown", _this.btn_next_originalListener);
              _this.btn_next_originalListener(); //다음버튼 누름 처리
            },
          });
        };
        _this.btn_next.on("pointerdown", temporaryListner);

        break;
      case "point_4_21":
        this.btn_next.setVisible(false);

        let in_con_1 = showContent.getByName("in_con_1").setVisible(true);
        let in_con_2 = showContent.getByName("in_con_2");
        let in_con_3 = showContent.getByName("in_con_3");
        let in_con_4 = showContent.getByName("in_con_4");
        let in_con_5 = showContent.getByName("in_con_5");

        function nextShow(hideContent: any, showContent: any) {
          hideContent.setVisible(false);
          showContent.setVisible(true);
          //showContent.y = 85;
          _this.tweens.add({
            targets: showContent,
            alpha: { from: 0, to: 1 },
            duration: 300,
            ease: "Power2",
            onStart: () => {},
            onComplete: () => {
              if (showContent.name === "in_con_2") {
                _this.tweens.add({
                  targets: in_con_2.getByName("chat_1"),
                  alpha: { from: 0, to: 1 },
                  x: { from: 300, to: 130 },
                  duration: 1000,
                  ease: "Power2",
                  onComplete: () => {
                    _this.tweens.add({
                      targets: in_con_2.getByName("chat_2"),
                      alpha: { from: 0, to: 1 },
                      x: { from: -300, to: -130 },
                      duration: 1000,
                      ease: "Power2",
                      onComplete: () => {
                        _this.tweens.add({
                          targets: in_con_2.getByName("chat_3"),
                          alpha: { from: 0, to: 1 },
                          x: { from: 300, to: 130 },
                          duration: 1000,
                          ease: "Power2",
                          onComplete: () => {
                            _this.tweens.add({
                              targets: in_con_2.getByName("chat_4"),
                              alpha: { from: 0, to: 1 },
                              x: { from: -300, to: -130 },
                              duration: 1000,
                              ease: "Power2",
                              onComplete: () => {},
                            });
                          },
                        });
                      },
                    });
                  },
                });
              } else if (showContent.name === "in_con_5") {
                _this.tweens.add({
                  targets: in_con_5.getByName("chat"),
                  alpha: { from: 0, to: 1 },
                  x: { from: 300, to: 143 },
                  duration: 1000,
                  ease: "Power2",
                  onComplete: () => {
                    _this.tweens.add({
                      targets: in_con_5.getByName("chat_5"),
                      alpha: { from: 0, to: 1 },
                      x: { from: -300, to: -155 },
                      duration: 1000,
                      ease: "Power2",
                      onComplete: () => {},
                    });
                  },
                });
              }
            },
          });
        }

        //1
        const messageBox_1 = new RacRoundText(this, {
          xPos: 282,
          yPos: 967,
          width: 700,
          height: 130,
          round: 25,
          bgColor: 0xffffff,
          bgAlpha: 0.3,
          text: "묘지명 제작소 채널이 검색되었어요.\n돋보기를 눌러 채널에 입장하세요.",
          align: "center",
        });
        const container_1 = messageBox_1.getContainer();
        in_con_1.add(container_1);

        let btnSearchBox = in_con_1.getByName("bg_search_box");
        btnSearchBox.setInteractive();
        btnSearchBox.on("pointerdown", () => {
          nextShow(in_con_1, in_con_2);
        });

        //2
        const messageBox_2 = new RacRoundText(this, {
          xPos: 0,
          yPos: 250,
          width: 600,
          height: 80,
          round: 25,
          bgColor: 0xffffff,
          bgAlpha: 0.3,
          text: "묘지명 제작소 채널에 입장했습니다.",
          align: "center",
        });
        const container_2 = messageBox_2.getContainer();
        in_con_2.add(container_2);

        let btnOrderForm = in_con_2
          .getByName("chat_4")
          .getByName("btn_order_form");
        btnOrderForm.setInteractive();
        btnOrderForm.on("pointerdown", () => {
          nextShow(in_con_2, in_con_3);
        });

        //3
        const inputBox_1 = new RacRoundText(this, {
          xPos: 0,
          yPos: 570,
          width: 860,
          height: 170,
          round: 25,
          bgColor: 0xffffff,
          bgAlpha: 1,
          text: "터치하면 이름이 입력됩니다.",
          fontSize: "30pt",
          align: "center",
          textXPos: 0,
        });
        const inputBox_1_con = inputBox_1.getContainer();
        in_con_3.add(inputBox_1_con);

        const inputBox_2 = new RacRoundText(this, {
          xPos: 0,
          yPos: 870,
          width: 860,
          height: 170,
          round: 25,
          bgColor: 0xffffff,
          bgAlpha: 1,
          text: "터치하면 성별이 입력됩니다.",
          fontSize: "30pt",
          align: "center",
          textXPos: 0,
        });
        const inputBox_2_con = inputBox_2.getContainer();
        in_con_3.add(inputBox_2_con);

        const inputBox_3 = new RacRoundText(this, {
          xPos: 0,
          yPos: 1170,
          width: 860,
          height: 170,
          round: 25,
          bgColor: 0xffffff,
          bgAlpha: 1,
          text: "터치하면 가족이 입력됩니다.",
          fontSize: "30pt",
          align: "center",
          textXPos: 0,
        });
        const inputBox_3_con = inputBox_3.getContainer();
        in_con_3.add(inputBox_3_con);

        const content_open_4_3 = this.add.dom(0, 0).createFromHTML("");
        content_open_4_3.setName("content_open_4_3");
        inputBox_1_con.add(content_open_4_3);

        const content_open_4_4 = this.add.dom(0, 0).createFromHTML("");
        content_open_4_4.setName("content_open_4_4");
        inputBox_3_con.add(content_open_4_4);

        let selCountibox = 0;
        inputBox_1_con
          .getByName("roundBox")
          .setInteractive()
          .on("pointerdown", () => {
            inputBox_1_con.getByName("text").setText("");

            inputBox_1_con
              .getByName("content_open_4_3")
              .createFromHTML(
                `<p class="content_text" style="font-size:30pt;top:-26px;left:-430px;text-align:center"><a class="ex_popup_title" data-content="* 낙랑:<br />옛날에 경주지역을 불렀던 말이에요.">낙랑</a> 김씨 ㅇㅇ</p>`
              );

            //a 엘리먼트에 접근 후 이벤트 리스너
            Util.addPopupListener(
              inputBox_1_con
                .getByName("content_open_4_3")
                .getChildByProperty("className", "ex_popup_title")
            );

            inputBox_1_con.getByName("roundBox").off("pointerdown");
            selCountibox++;
            if (selCountibox === 3) {
              in_con_3.getByName("btn_order_send").setVisible(true);
            }
          });

        inputBox_2_con
          .getByName("roundBox")
          .setInteractive()
          .on("pointerdown", () => {
            inputBox_2_con.getByName("text").setText("여자");
            inputBox_2_con.getByName("roundBox").off("pointerdown");
            selCountibox++;
            if (selCountibox === 3) {
              in_con_3.getByName("btn_order_send").setVisible(true);
            }
          });

        inputBox_3_con
          .getByName("roundBox")
          .setInteractive()
          .on("pointerdown", () => {
            inputBox_3_con.getByName("text").setText("");

            inputBox_3_con
              .getByName("content_open_4_4")
              .createFromHTML(
                `<p class="content_text" style="font-size:30pt;top:-26px;left:-430px;text-align:center">부 <a class="ex_popup_title" data-content="* 호장:<br />고려시대 향리 중에서 제일높은 사람으로 중앙정부에서 임명장을 받은 지배층이에요." 호장은 맡은 지역의 백성들에게 세금을 걷고 일을 시키며 국가를 대신해서 관리했어요.">호장</a> 김지원</p>`
              );

            //a 엘리먼트에 접근 후 이벤트 리스너
            Util.addPopupListener(
              inputBox_3_con
                .getByName("content_open_4_4")
                .getChildByProperty("className", "ex_popup_title")
            );

            inputBox_3_con.getByName("roundBox").off("pointerdown");
            selCountibox++;
            if (selCountibox === 3) {
              in_con_3.getByName("btn_order_send").setVisible(true);
            }
          });

        in_con_3
          .getByName("btn_order_send")
          .setInteractive()
          .on("pointerdown", () => {
            inputBox_1_con.getByName("content_open_4_3").removeElement();
            inputBox_3_con.getByName("content_open_4_4").removeElement();

            nextShow(in_con_3, in_con_4);
          });

        //4
        let btn_1 = in_con_4.getByName("chat_btn_1").getByName("bg_chat_btn_1");
        let btn_2 = in_con_4.getByName("chat_btn_2").getByName("bg_chat_btn_2");
        let btn_3 = in_con_4.getByName("chat_btn_3").getByName("bg_chat_btn_3");
        btn_1.setInteractive().on("pointerdown", () => {
          const alertModal = new ModaAlert(this, {
            xPos: 0,
            yPos: 700,
            width: 500,
            height: 300,
            round: 25,
            bgColor: 0xffffff,
            text: "딸아이의 마지막이\n특별했으면 하네.",
            align: "center",
            blackLayer: true,
          });
        });
        btn_2.setInteractive().on("pointerdown", () => {
          const alertModal = new ModaAlert(this, {
            xPos: 0,
            yPos: 700,
            width: 500,
            height: 300,
            round: 25,
            bgColor: 0xffffff,
            text: "딸아이의 마지막이\n특별했으면 하네.",
            align: "center",
            blackLayer: true,
          });
        });
        btn_3.setInteractive().once("pointerdown", () => {
          _this.tweens.add({
            targets: [
              in_con_4.getByName("chat_btn_1"),
              in_con_4.getByName("chat_btn_2"),
            ],
            alpha: 0,
            duration: 500,
            ease: "Power2",
          });
          _this.tweens.add({
            targets: in_con_4.getByName("chat_btn_3"),
            y: in_con_4.getByName("chat_btn_3").y - 600,
            duration: 500,
            ease: "Power2",
          });
          in_con_4.getByName("btn_order_send_1").setVisible(true);
        });

        in_con_4
          .getByName("btn_order_send_1")
          .setInteractive()
          .on("pointerdown", () => {
            nextShow(in_con_4, in_con_5);
            this.btn_next.setVisible(true);
          });

        break;

      case "point_5_11":
        _this.btn_next.setVisible(false);

        let selectedCheck = [];

        let checkBox_1 = showContent.getByName("point_5_check_1");
        checkBox_1
          .getByName("point_5_checkboxEvent_1")
          .setInteractive()
          .on("pointerdown", function () {
            _this.tweens.add({
              targets: checkBox_1.getByName("checkbox_gt_on"),
              alpha: { from: 0, to: 1 },
              scale: { from: 0, to: 0.45 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                checkBox_1.getByName("checkbox_g").setTexture("checkbox_g_on");
                checkBox_1.getByName("checkbox_gt_on").setVisible(true);
                selectedCheck.push("point_5_check_1");
                if (selectedCheck.length == 2) {
                  _this.btn_next.setVisible(true);
                }
              },
              onComplete: () => {},
            });

            _this.tweens.add({
              targets: showContent.getByName("eff_point_5_11_2"),
              alpha: { from: 0, to: 1 },
              duration: 1000,
              ease: "Power2",
            });
          });

        let checkBox_2 = showContent.getByName("point_5_check_2");
        checkBox_2
          .getByName("point_5_checkboxEvent_2")
          .setInteractive()
          .on("pointerdown", function () {
            _this.tweens.add({
              targets: checkBox_2.getByName("checkbox_gt_on_1"),
              alpha: { from: 0, to: 1 },
              scale: { from: 0, to: 0.45 },
              duration: 1000,
              ease: "Power2",
              onStart: () => {
                checkBox_2
                  .getByName("checkbox_g_1")
                  .setTexture("checkbox_g_on");
                checkBox_2.getByName("checkbox_gt_on_1").setVisible(true);
                selectedCheck.push("point_5_check_2");
                if (selectedCheck.length == 2) {
                  _this.btn_next.setVisible(true);
                }
              },
              onComplete: () => {},
            });
            _this.tweens.add({
              targets: showContent.getByName("eff_point_5_11_1"),
              alpha: { from: 0, to: 1 },
              duration: 1000,
              ease: "Power2",
            });
          });

        break;

      case "point_5_21":
        _this.btn_next.setVisible(false);

        showContent
          .getByName("btn_in_next_5_1")
          .setInteractive()
          .on("pointerdown", function () {
            showContent.getByName("btn_in_next_5_1").setVisible(false);
            showContent.getByName("text_40").setText("쇠북을 만든 사람");
            showContent
              .getByName("content_open_5_21")
              .setHTML(
                `<p class="content_text">쇠북을 만든 사람은 누구일까요?</p>`
              );
            showContent.getByName("text_5_box").setVisible(true);

            _this.tweens.add({
              targets: showContent.getByName("line_dotted_white_521"),
              alpha: { from: 0, to: 1 },
              duration: 700,
              yoyo: true,
              repeat: -1,
              ease: "Linear",
            });

            showContent
              .getByName("line_dotted_white_521")
              .setInteractive()
              .on("pointerdown", function () {
                showContent
                  .getByName("line_dotted_white_521")
                  .setVisible(false);
                showContent.getByName("text_5_box").setVisible(false);
                showContent
                  .getByName("text_40")
                  .setY(122 - 48)
                  .setStyle({
                    align: "center",
                  })
                  .setText("文氏夫人等造上\n(문씨부인등조상)");
                showContent
                  .getByName("content_open_5_21")
                  .setHTML(
                    `<p class="content_text">문씨부인이 주도적으로 사람을 모으고 비용을 지원해 만들었어요.</p>`
                  );
                _this.tweens.add({
                  targets: showContent.getByName("eff_point_5_2_1"),
                  alpha: { from: 0, to: 1 },
                  scale: { from: 1.1, to: 1 },
                  duration: 500,
                  ease: "Power2",
                  onComplete: () => {
                    showContent.getByName("btn_in_next_5_1").setVisible(true);
                    showContent
                      .getByName("btn_in_next_5_1")
                      .off("pointerdown")
                      .on("pointerdown", function () {
                        showContent
                          .getByName("img_point_5_2_1")
                          .setVisible(false);
                        showContent
                          .getByName("img_point_5_2_2")
                          .setVisible(true);
                        showContent
                          .getByName("btn_in_next_5_1")
                          .setVisible(false);
                        showContent
                          .getByName("eff_point_5_2_1")
                          .setVisible(false);
                        showContent
                          .getByName("text_40")
                          .setY(122)
                          .setText("쇠북을 사용한 장소");
                        showContent
                          .getByName("content_open_5_21")
                          .setHTML(
                            `<p class="content_text">쇠북을 사용한 장소는 어디일까요?</p>`
                          );
                        showContent.getByName("text_5_box").setVisible(true);
                        _this.tweens.add({
                          targets: showContent.getByName("line_dotted_5_2_2"),
                          alpha: { from: 0, to: 1 },
                          duration: 700,
                          yoyo: true,
                          repeat: -1,
                          ease: "Linear",
                        });
                        showContent
                          .getByName("line_dotted_5_2_2")
                          .setInteractive()
                          .on("pointerdown", function () {
                            showContent
                              .getByName("text_5_box")
                              .setVisible(false);
                            showContent
                              .getByName("line_dotted_5_2_2")
                              .setVisible(false);
                            showContent
                              .getByName("text_40")
                              .setText("靑雲寺(청운사)");
                            showContent
                              .getByName("content_open_5_21")
                              .setHTML(
                                `<p class="content_text">이 쇠북은 ‘靑雲寺(청운사)’라는 절에서 사용하기 위해 만들어졌어요.</p>`
                              );
                            _this.tweens.add({
                              targets: showContent.getByName("eff_point_5_2_2"),
                              alpha: { from: 0, to: 1 },
                              scale: { from: 1.1, to: 1 },
                              duration: 500,
                              ease: "Power2",
                              onComplete: () => {
                                showContent
                                  .getByName("btn_in_next_5_1")
                                  .setVisible(true);
                                showContent
                                  .getByName("btn_in_next_5_1")
                                  .off("pointerdown")
                                  .on("pointerdown", function () {
                                    showContent
                                      .getByName("btn_in_next_5_1")
                                      .setVisible(false);
                                    showContent
                                      .getByName("eff_point_5_2_2")
                                      .setVisible(false);
                                    showContent
                                      .getByName("img_point_5_2_2")
                                      .setVisible(false);
                                    showContent
                                      .getByName("img_point_5_2_1")
                                      .setVisible(true);
                                    showContent
                                      .getByName("text_40")
                                      .setText("쇠북을 만든 공동체");
                                    showContent
                                      .getByName("content_open_5_21")
                                      .setHTML(
                                        `<p class="content_text">이 쇠북을 함께 만든 공동체의 활동을 확인해 보세요.</p>`
                                      );
                                    showContent
                                      .getByName("text_5_box")
                                      .setVisible(true);

                                    _this.tweens.add({
                                      targets:
                                        showContent.getByName(
                                          "line_dotted_5_2_3"
                                        ),
                                      alpha: { from: 0, to: 1 },
                                      duration: 700,
                                      yoyo: true,
                                      repeat: -1,
                                      ease: "Linear",
                                    });
                                    showContent
                                      .getByName("line_dotted_5_2_3")
                                      .setInteractive()
                                      .on("pointerdown", function () {
                                        showContent
                                          .getByName("text_5_box")
                                          .setVisible(false);
                                        showContent
                                          .getByName("line_dotted_5_2_3")
                                          .setVisible(false);
                                        showContent
                                          .getByName("text_40")
                                          .setText(
                                            "불교 신앙 조직, 香徒(향도)"
                                          );
                                        showContent
                                          .getByName("content_open_5_21")
                                          .setHTML(
                                            `<p class="content_text">향도는 고려시대 불교 신앙 활동을 위한 지역 공동체로 불상과 종, 탑 등을 만들었어요.</p>`
                                          );
                                        _this.tweens.add({
                                          targets:
                                            showContent.getByName(
                                              "eff_point_5_2_3"
                                            ),
                                          alpha: {
                                            from: 0,
                                            to: 1,
                                          },
                                          scale: {
                                            from: 1.1,
                                            to: 1,
                                          },
                                          duration: 500,
                                          ease: "Power2",
                                          onComplete: () => {
                                            _this.btn_next.setVisible(true);
                                          },
                                        });
                                      });
                                  });
                              },
                            });
                          });
                      });
                  },
                });
              });
          });

        break;

      case "point_6_21":
        _this.btn_next.setVisible(false);
        let contentsBox = showContent.getByName("contents_box");
        let bottomBox = showContent.getByName("bottom_box");
        let btn_61 = bottomBox
          .getByName("btn_point_6_2_2")
          .setInteractive({ cursor: "pointer" });
        btn_61.originalX = btn_61.x;
        btn_61.originalY = btn_61.y;
        let btn_62 = bottomBox
          .getByName("img_point_6_2_9")
          .setInteractive({ cursor: "pointer" });
        btn_62.originalX = btn_62.x;
        btn_62.originalY = btn_62.y;
        let btn_63 = bottomBox
          .getByName("btn_point_6_2_3")
          .setInteractive({ cursor: "pointer" });
        btn_63.originalX = btn_63.x;
        btn_63.originalY = btn_63.y;
        let btn_64 = bottomBox
          .getByName("btn_point_6_2_1")
          .setInteractive({ cursor: "pointer" });
        btn_64.originalX = btn_64.x;
        btn_64.originalY = btn_64.y;
        _this.input.setDraggable(btn_61);
        _this.input.setDraggable(btn_62);
        _this.input.setDraggable(btn_63);
        _this.input.setDraggable(btn_64);

        _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          gameObject.setPosition(dragX, dragY);
        });

        let zoneSize = 200;
        let dropZoneBox_1 = _this.add
          .zone(880, 600, zoneSize, zoneSize)
          .setRectangleDropZone(zoneSize, zoneSize)
          .setInteractive()
          .setName("dropZoneBox_1");
        let dropZoneBox_2 = _this.add
          .zone(247, 740, zoneSize, zoneSize)
          .setRectangleDropZone(zoneSize, zoneSize)
          .setInteractive()
          .setName("dropZoneBox_2");
        let dropZoneBox_3 = _this.add
          .zone(610, 970, zoneSize, zoneSize)
          .setRectangleDropZone(zoneSize, zoneSize)
          .setInteractive()
          .setName("dropZoneBox_3");
        let dropZoneBox_4 = _this.add
          .zone(360, 1410, zoneSize, zoneSize)
          .setRectangleDropZone(zoneSize, zoneSize)
          .setInteractive()
          .setName("dropZoneBox_4");
        // let dropZoneGraphics = _this.add.graphics();
        // dropZoneGraphics.lineStyle(2, 0xffff00);
        // dropZoneGraphics.strokeRect(dropZoneBox_0.x - dropZoneBox_0.input.hitArea.width / 2,
        // 	dropZoneBox_0.y - dropZoneBox_0.input.hitArea.height / 2,
        // 	dropZoneBox_0.input.hitArea.width, dropZoneBox_0.input.hitArea.height);

        let curDropZone;
        _this.input.on("dragenter", function (pointer, gameObject, dropZone) {
          curDropZone = dropZone.name;
          gameObject.isDropable = true;
        });
        _this.input.on("dragleave", function (pointer, gameObject, dropZone) {
          curDropZone = null;
          gameObject.isDropable = false;
          gameObject.setDepth(0);
        });

        let dropCount = 0;
        //afterMap();
        _this.input.on("dragend", (pointer, gameObject, dropZone) => {
          if (gameObject.isDropable && curDropZone) {
            if (
              gameObject.name === "btn_point_6_2_2" &&
              curDropZone === "dropZoneBox_1"
            ) {
              gameObject.setPosition(343, -1178);
              dropCount++;
            } else if (
              gameObject.name === "img_point_6_2_9" &&
              curDropZone === "dropZoneBox_2"
            ) {
              gameObject.setPosition(-292, -1026);
              dropCount++;
            } else if (
              gameObject.name === "btn_point_6_2_3" &&
              curDropZone === "dropZoneBox_3"
            ) {
              gameObject.setPosition(68, -808);
              dropCount++;
            } else if (
              gameObject.name === "btn_point_6_2_1" &&
              curDropZone === "dropZoneBox_4"
            ) {
              gameObject.setPosition(-182, -347);
              dropCount++;
            } else {
              gameObject.setPosition(
                gameObject.originalX,
                gameObject.originalY
              );
            }
            if (dropCount === 4) {
              // 각주 데이터 설정
              let dropCount_4_textExWord = [
                {
                  x: -6 * 2,
                  y: 73 * 2,
                  word: "양민",
                  ex: "고려시대 신분구조",
                  image: {
                    texture: "img_people_class",
                    y: 80,
                    scale: 0.5,
                  },
                },
              ];

              const alertModal = new ModaAlert(this, {
                xPos: 0,
                yPos: 700,
                width: 800,
                height: 700,
                round: 25,
                bgColor: 0xffffff,
                title: "향 · 부곡 · 소",
                text:
                  "고려시대 ‘향’과 ‘부곡’은 농사를\n지었던 지역이고, '소'는 도자기나\n철, 먹, 차 등 특산품들을 생산했던\n지역이에요.\n\n" +
                  "향 · 부곡 · 소에 사는 사람들의 신분은\n" +
                  "일반 백성인 [color=#004EE0]양민[/color]이었어요.",
                textAddY: -30,
                align: "center",
                blackLayer: true,
                useBBCodeText: true,
                comment: dropCount_4_textExWord,
                onClose: () => {
                  afterMap();
                },
              });
              _this.input.off("dragend");
              _this.input.off("drag");
              _this.input.off("dragenter");
              _this.input.off("dragleave");
            }
          } else {
            gameObject.setPosition(gameObject.originalX, gameObject.originalY);
          }
        });

        function afterMap() {
          contentsBox.getByName("img_point_6_2_5").setVisible(false);
          contentsBox.getByName("img_point_6_2_7").setVisible(false);
          contentsBox.getByName("img_point_6_2_8").setVisible(false);
          contentsBox.getByName("img_point_6_2_6").setVisible(false);

          showContent
            .getByName("text_78")
            .setText(
              "각 마을에 이주를 원하는 사람들이 있어요. 사람들을 다른 마을로 옮겨 보세요."
            );
          bottomBox.setVisible(false);
          const messageBox_1 = new RacRoundText(_this, {
            xPos: 540,
            yPos: 1750,
            width: 750,
            height: 70,
            round: 25,
            bgColor: 0xffffff,
            bgAlpha: 1,
            text: "주민을 드래그하여 다른 마을로 옮겨보세요.",
            align: "center",
          });
          let messageBox_1_con = messageBox_1.getContainer();

          let peoples = [
            "img_point_6_2_12",
            "img_point_6_2_17",
            "img_point_6_2_14",
            "img_point_6_2_11",
          ];
          peoples.forEach((key: any, index: number) => {
            let pp = contentsBox
              .getByName(key)
              .setInteractive({ cursor: "pointer" }); // 객체를 인터랙티브로 설정
            _this.input.setDraggable(pp); // 드래그 가능하게 설정
            pp.originalX = pp.x; // 원래 x좌표 저장
            pp.originalY = pp.y; // 원래 y좌표 저장
          });

          _this.input.on("dragstart", (pointer, gameObject, dragX, dragY) => {
            // peoples.forEach((key:any, index:number) => {
            // 	contentsBox.getByName(key).setDepth(0)
            // });
            // gameObject.setDepth(1);
          });

          _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            gameObject.setPosition(dragX, dragY);
          });

          _this.input.on("dragend", function (pointer, gameObject, dropZone) {
            gameObject.setPosition(gameObject.originalX, gameObject.originalY);
            const alertModal2 = new ModaAlert(_this, {
              xPos: 0,
              yPos: 700,
              width: 800,
              height: 700,
              round: 25,
              bgColor: 0xffffff,
              title: "향 · 부곡 · 소",
              text: "고려의 향 · 부곡 · 소에 사는 사람들은\n다른 지역으로 이사를 갈 수 없었어요.\n그리고 세금도 많이 내는 등의\n차별을 받았어요.",
              fontSize: "30pt",
              textAddY: 70,
              align: "center",
              blackLayer: true,
              addImg: {
                x: 0,
                y: -120,
                texture: "ico_alert",
              },
              onClose: () => {
                messageBox_1_con.setVisible(false);
                _this.btn_next.emit("pointerdown");
                _this.btn_next.setVisible(true);
              },
            });
          });
        }

        break;

      case "point_7_12":
        _this.btn_next.setVisible(false);
        _this.tweens.add({
          targets: showContent.getByName("bg_point_7_1"),
          alpha: { from: 0, to: 1 },
          duration: 700,
          yoyo: true,
          repeat: -1,
          ease: "Linear",
        });

        showContent
          .getByName("bg_point_7_1")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("img_point_16").setTexture("img_point_7_3");
            showContent.getByName("bg_point_7_1").setVisible(false);
            showContent.getByName("text_125").setVisible(false);
            _this.btn_next.setVisible(true);
          });

        break;

      case "point_7_21":
        _this.btn_next.setVisible(false);

        const alertModal_7_21 = new ModaAlert(this, {
          xPos: 0,
          yPos: 700,
          width: 580,
          height: 405,
          round: 30,
          bgColor: 0xffffff,
          fontSize: "42px",
          fontFamily: "KoddiUDOnGothic-Bold",
          lineSpacing: 0.3 * 42,
          textAddY: 60,
          addImg: {
            x: 0,
            y: -92,
            texture: "speaker",
          },
          text: "스피커 볼륨을" + "\n올려주세요",
          align: "center",
          blackLayer: true,
        });

        const items = [
          {
            x: -20,
            y: 1272,
            image: "img_label_1",
            text: "용",
            name: "label_1_m",
          },
          {
            x: 284,
            y: 1272,
            image: "img_label_2",
            text: "용에 맞서는 사람들",
            name: "label_4_m",
          },
          {
            x: 580,
            y: 1272,
            image: "img_label_3",
            text: "물고기",
            name: "label_3_m",
          },
          {
            x: -20,
            y: 1606,
            image: "img_label_4",
            text: "마갈어",
            name: "label_6_m",
          },
          {
            x: 284,
            y: 1606,
            image: "img_label_5",
            text: "방향을 잡는 뱃사람",
            name: "label_5_m",
          },
          {
            x: 580,
            y: 1606,
            image: "img_label_6",
            text: "황비창천",
            name: "label_2_m",
          },
        ];

        items.forEach(({ x, y, image, text, name }) => {
          // 이미지 추가
          let img = _this.add.image(x, y, image).setOrigin(0.5, 0.5);
          img.setDisplaySize(100, 100); // 이미지 크기 조정

          // 텍스트 추가
          let label = _this.add.text(0, 0, text, {
            fontFamily: "KoddiUDOnGothic-Bold",
            fontSize: "35px",
            color: "#FFFFFF",
            align: "center",
          });
          label.setOrigin(0.5, 0.5);

          // 텍스트 배경 박스 생성
          const paddingX = 30;
          const paddingY = 18;
          const boxWidth = label.width + paddingX * 2;
          const boxHeight = label.height + paddingY * 2;

          const background = _this.add.graphics();
          background.fillStyle(0x161844, 1);
          background.fillRoundedRect(
            -boxWidth / 2,
            img.height / 2 + 20,
            boxWidth,
            boxHeight,
            40
          );

          // 컨테이너에 추가하여 이미지와 텍스트 배경 및 텍스트 함께 관리
          const container = _this.add.container(x, y);
          container.add([img, background, label]);

          // 텍스트 위치 조정 (이미지 아래 중앙에 위치)
          label.setPosition(0, img.height / 2 + boxHeight / 2 + 20); // 텍스트 위치 살짝 조정
          container.name = name;

          showContent.add(container);
        });

        const messageBox_71 = new RacRoundText(_this, {
          xPos: 300,
          yPos: 983,
          width: 850,
          height: 90,
          round: 25,
          bgColor: 0xffffff,
          bgAlpha: 0.8,
          text: "-",
          fontSize: "23pt",
          fontFamily: "KoddiUDOnGothic-Bold",
          color: "#000000",
          align: "center",
        });
        const message7 = messageBox_71.getContainer();
        showContent.add(message7);
        message7.setVisible(false);

        let btns = [
          "btn_point_7_4",
          "btn_point_7_2",
          "btn_point_7_1",
          "btn_point_7_6",
          "btn_point_7_5",
          "btn_point_7_3",
        ];
        btns.forEach((key: any, index: number) => {
          let btn = showContent
            .getByName(key)
            .setInteractive({ cursor: "pointer" });
          btn.originalX = btn.x;
          btn.originalY = btn.y;
          _this.input.setDraggable(btn);
        });

        let dropZoneBox_71 = _this.add
          .zone(545, 505, 230, 230)
          .setRectangleDropZone(230, 230)
          .setInteractive()
          .setName("dropZoneBox_71");
        let dropZoneBox_72 = _this.add
          .zone(280, 665, 120, 120)
          .setRectangleDropZone(120, 120)
          .setInteractive()
          .setName("dropZoneBox_72");
        let dropZoneBox_73 = _this.add
          .zone(365, 840, 150, 150)
          .setRectangleDropZone(150, 150)
          .setInteractive()
          .setName("dropZoneBox_73");
        let dropZoneBox_74 = _this.add
          .zone(505, 830, 125, 125)
          .setRectangleDropZone(125, 125)
          .setInteractive()
          .setName("dropZoneBox_74");
        let dropZoneBox_75 = _this.add
          .zone(730, 830, 125, 125)
          .setRectangleDropZone(125, 125)
          .setInteractive()
          .setName("dropZoneBox_75");
        let dropZoneBox_76 = _this.add
          .zone(725, 590, 125, 125)
          .setRectangleDropZone(125, 125)
          .setInteractive()
          .setName("dropZoneBox_76");

        // 좌표 확인용 코드
        // let graphics76 = _this.add.graphics();
        // graphics76.lineStyle(2, 0xff0000);
        // graphics76.strokeRect(
        //   dropZoneBox_76.x - dropZoneBox_76.width / 2,
        //   dropZoneBox_76.y - dropZoneBox_76.height / 2,
        //   dropZoneBox_76.width,
        //   dropZoneBox_76.height
        // );

        _this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          gameObject.setDepth(200);
          gameObject.setPosition(dragX, dragY);
        });

        let curDropZone7;
        _this.input.on("dragenter", function (pointer, gameObject, dropZone) {
          curDropZone7 = dropZone.name;
          gameObject.isDropable = true;
        });
        _this.input.on("dragleave", function (pointer, gameObject, dropZone) {
          curDropZone7 = null;
          gameObject.isDropable = false;
        });

        let dropCount7 = 0;
        _this.input.on("dragend", (pointer, gameObject, dropZone) => {
          console.log(gameObject.name);
          if (gameObject.isDropable && curDropZone7) {
            if (
              gameObject.name === "btn_point_7_2" &&
              curDropZone7 === "dropZoneBox_71"
            ) {
              gameObject.setTexture("btn_point_7_2_s");
              gameObject.setPosition(300, 418);
              messageBox_71.setRacText(
                "파도가 잔잔해지고 맑고 푸른 하늘이 나타났어요."
              );
              message7.setVisible(true);
              const sound = this.sound.add("waves");
              sound.play();
              dropCount7++;
            } else if (
              gameObject.name === "btn_point_7_1" &&
              curDropZone7 === "dropZoneBox_72"
            ) {
              gameObject.setTexture("btn_point_7_1_s");
              gameObject.setPosition(29, 577);
              messageBox_71.setRacText(
                "커다란 물고기도 파도 사이로 목을 내밀었어요."
              );
              message7.setVisible(true);
              const sound = this.sound.add("waves");
              sound.play();
              dropCount7++;
            } else if (
              gameObject.name === "btn_point_7_4" &&
              curDropZone7 === "dropZoneBox_73"
            ) {
              gameObject.setTexture("btn_point_7_4_s");
              messageBox_71.setRacText("사나운 용이 배를 가로막았어요.");
              message7.setVisible(true);
              gameObject.setPosition(117, 754);
              const sound = this.sound.add("dragon");
              sound.play();
              dropCount7++;
            } else if (
              gameObject.name === "btn_point_7_5" &&
              curDropZone7 === "dropZoneBox_74"
            ) {
              gameObject.setTexture("btn_point_7_5_s");
              messageBox_71.setRacText(
                "용을 마주한 사람들은 물러서지 않고 칼을 쥐고 맞섰어요."
              );
              message7.setVisible(true);
              gameObject.setPosition(256, 742);
              const sound = this.sound.add("swords");
              sound.play();
              dropCount7++;
            } else if (
              gameObject.name === "btn_point_7_3" &&
              curDropZone7 === "dropZoneBox_75"
            ) {
              gameObject.setTexture("btn_point_7_3_s");
              messageBox_71.setRacText(
                "뱃사람들이 방향을 잡으려 애를 쓰고 있어요."
              );
              message7.setVisible(true);
              gameObject.setPosition(483, 741);
              const sound = this.sound.add("waves");
              sound.play();
              dropCount7++;
            } else if (
              gameObject.name === "btn_point_7_6" &&
              curDropZone7 === "dropZoneBox_76"
            ) {
              gameObject.setTexture("btn_point_7_6_s");
              gameObject.setPosition(475, 498);
              messageBox_71.setRacText(
                "물고기의 왕, 마갈어도 모습을 드러냈죠."
              );
              message7.setVisible(true);
              const sound = this.sound.add("waves");
              sound.play();
              dropCount7++;
            } else {
              gameObject.setPosition(
                gameObject.originalX,
                gameObject.originalY
              );
            }
            if (dropCount7 === 6) {
              _this.time.delayedCall(3000, () => {
                _this.btn_next.emit("pointerdown");
                _this.btn_next.setVisible(true);
              });
            }
          } else {
            gameObject.setPosition(gameObject.originalX, gameObject.originalY);
          }
        });
        break;

      case "point_7_22":
        const sound = this.sound.add("birds");
        sound.play();
        break;

      case "point_8_11":
        _this.btn_next.setVisible(false);
        let con_fl = showContent.getByName("con_fl");

        showContent
          .getByName("btn_lay_1")
          .setInteractive({ cursor: "pointer" })
          .on("pointerdown", function () {
            showContent.getByName("mark_lay_1").setVisible(false);
            showContent.getByName("btn_lay_1").setVisible(false);
            showContent.getByName("btn_lay_2").setVisible(true);

            con_fl.getByName("fl_1").setVisible(true);

            _this.tweens.add({
              targets: "bg_open_point_8_1",
              alpha: { from: 0, to: 1 },
              duration: 1000,
              ease: "Linear",
            });

            _this.tweens.add({
              targets: showContent.getByName("mark_line_1"),
              alpha: { from: 0, to: 1 },
              duration: 500,
              ease: "Sine.easeOut",
              yoyo: true,
              repeat: 1,
              onComplete: () => {
                showContent.getByName("mark_line_1").setAlpha(1);
              },
            });

            showContent
              .getByName("btn_lay_2")
              .setInteractive({ cursor: "pointer" })
              .on("pointerdown", function () {
                showContent.getByName("mark_lay_2").setVisible(false);
                showContent.getByName("btn_lay_2").setVisible(false);
                showContent.getByName("btn_lay_3").setVisible(true);

                con_fl.getByName("fl_2").setVisible(true);
                con_fl.getByName("fl_3_l").setVisible(true);
                con_fl.getByName("fl_4_1").setVisible(true);
                con_fl.getByName("fl_4_2").setVisible(true);
                _this.tweens.add({
                  targets: showContent.getByName("mark_line_2"),
                  alpha: { from: 0, to: 1 },
                  duration: 500,
                  ease: "Sine.easeOut",
                  yoyo: true,
                  repeat: 1,
                  onComplete: () => {
                    showContent.getByName("mark_line_2").setAlpha(1);
                  },
                });
              });

            showContent
              .getByName("btn_lay_3")
              .setInteractive({ cursor: "pointer" })
              .on("pointerdown", function () {
                showContent.getByName("mark_lay_3").setVisible(false);
                showContent.getByName("btn_lay_3").setVisible(false);

                con_fl.getByName("fl_3_r").setVisible(true);
                con_fl.getByName("fl_4_3").setVisible(true);
                con_fl.getByName("fl_4_4").setVisible(true);
                con_fl.getByName("fl_4_5").setVisible(true);
                _this.tweens.add({
                  targets: showContent.getByName("mark_line_3"),
                  alpha: { from: 0, to: 1 },
                  duration: 500,
                  yoyo: true,
                  repeat: 1,
                  ease: "Sine.easeOut",
                  onComplete: () => {
                    const bg_open_point_8_2_on = _this.add.image(
                      -20,
                      110,
                      "bg_open_point_8_2_on"
                    );
                    bg_open_point_8_2_on.setAlpha(0);
                    bg_open_point_8_2_on.setDepth(1);
                    con_fl.getByName("fl_4_4").add(bg_open_point_8_2_on);
                    // con_fl.getByName("fl_4_4").getByName("bg_open_point_8_2_on").setDepth(20);
                    // blackLayer.setDepth(2);

                    showContent.getByName("mark_line_3").setAlpha(1);

                    const blackLayer = _this.add.graphics();
                    // const blueLayer = _this.add.graphics();
                    const point_8_11_addTextBox = _this.add.rexRoundRectangle(
                      143,
                      1157,
                      787,
                      102,
                      29
                    );
                    point_8_11_addTextBox
                      .setOrigin(0, 0)
                      .setAlpha(0)
                      .setFillStyle(0xffffff)
                      .setStrokeStyle(4, 0x598dff);
                    const point_8_11_addText = _this.add
                      .text(
                        143,
                        1157 + 26,
                        "양택춘의 자녀 중 3명이 승려였어요."
                      )
                      .setOrigin(0, 0)
                      .setAlpha(0)
                      .setStyle({
                        fixedWidth: 787,
                        fixedheight: 102,
                        align: "center",
                        fontFamily: "KoddiUDOnGothic-Bold",
                        fontSize: "39px",
                        color: "#000",
                      });
                    // blueLayer.lineStyle(1, 0x000000);
                    // blueLayer.strokeRect(0,0,_this.scale.width,_this.scale.height,);
                    // blackLayer.lineStyle(1, 0xff0000);
                    blackLayer.fillStyle(0x000000, 0.5);
                    blackLayer.fillRect(
                      -280,
                      -1389,
                      _this.scale.width,
                      _this.scale.height
                    );
                    // blackLayer.strokeRect(-790,-1389,_this.scale.width, _this.scale.height,);
                    blackLayer.setAlpha(0);
                    con_fl.getByName("fl_4_1").add(blackLayer);

                    const bg_open_point_8_3 = _this.add.image(
                      280 - 28,
                      -100 + 222,
                      "bg_open_point_8_3"
                    );
                    bg_open_point_8_3.setAlpha(0);
                    con_fl.getByName("fl_4_1").add(bg_open_point_8_3);

                    _this.btn_next.once("pointerdown", () => {
                      blackLayer.destroy();
                      con_fl.getByName("fl_4_4").remove();
                      bg_open_point_8_2_on.destroy();
                      bg_open_point_8_3.destroy();
                      point_8_11_addText.destroy();
                      point_8_11_addTextBox.destroy();
                    });

                    _this.time.delayedCall(700, () => {
                      _this.tweens.add({
                        targets: [
                          blackLayer,
                          con_fl.getByName("fl_4_4"),
                          bg_open_point_8_2_on,
                          point_8_11_addText,
                          point_8_11_addTextBox,
                        ],
                        alpha: { from: 0, to: 1 },
                        duration: 700,
                        ease: "Sine.easeOut",
                        onStart: () => {},
                        onComplete: () => {
                          _this.btn_next.setVisible(true);
                          // con_fl.getByName("fl_4_4").remove(blackLayer);
                          // blackLayer.destroy();
                          //다음버튼 누르면 임시 오브젝트들파괴
                        },
                      });
                    });

                    _this.time.delayedCall(700, () => {
                      _this.tweens.add({
                        targets: [
                          blackLayer,
                          con_fl.getByName("fl_4_4"),
                          bg_open_point_8_3,
                          point_8_11_addText,
                          point_8_11_addTextBox,
                        ],
                        alpha: { from: 0, to: 1 },
                        duration: 700,
                        ease: "Sine.easeOut",
                        onStart: () => {},
                        onComplete: () => {
                          _this.btn_next.setVisible(true);
                          // con_fl.getByName("fl_4_4").remove(blackLayer);
                          // blackLayer.destroy();
                          //다음버튼 누르면 임시 오브젝트들파괴
                        },
                      });
                    });
                  },
                });
              });
          });

        break;

      case "point_8_21":
        const alertModal = new ModaAlert(this, {
          xPos: 0,
          yPos: 700,
          width: 1000,
          height: 700,
          round: 30,
          bgColor: 0xffffff,
          fontSize: "30pt",
          text:
            "이렇듯 묘지명에는 고인에 대한 \n" +
            "많은 이야기가 새겨져 있어요.\n" +
            "\n" +
            "묘지명 뒷면에는 어떤 내용이 있을까요?\n",
          align: "center",
          buttons: [
            {
              height: 100,
              label: "뒷면 보기",
              action: "close",
              fontSize: "30pt",
              round: 50,
            },
          ],
          blackLayer: true,
        });
        break;
    }
  }

  point_n_31() {
    this.btn_next.setVisible(true);
    let pointNData = {
      point_1: {
        title: "고려 자부심의 상징", //복녕궁주
        text: "고려는 동아시아 속 또 하나의 ‘천하’라는 자부심을 바탕으로 중국을 비롯한 이웃나라와 활발하게 교류하며 새로운 문물을 폭넓게 수용했어요.",
        name: "<복녕궁방고가 새겨진 은제 접시>",
        location: "고려, 고려 1실, 덕수 131",
        scale: 1.5,
      },
      point_2: {
        title: "개인 능력을 중시한 고려사회 ",
        text: "고려에서는 역사상 처음으로 과거제도를 실시해 능력으로 관리를 뽑았어요. 고려는 이전 시대보다 다양한 사람들에게 기회를 준 개방된 사회였어요.",
        name: "<소전색이 새겨진 그릇>",
        location: "고려, 14세기, 청자실, 본관 4229",
        scale: 1.8,
      },
      point_3: {
        title: "고려의 향 문화와 향로", //항로
        text: "고급 청자 향로는 의례 필수품이었지만 일상에서도 향 문화를 즐겼어요. 고상한 취미를 즐기려는 고려인의 열망이 향을 가까이하는 문화를 만들었겠죠?",
        name: "<청자귀룡장식향로>",
        location: "고려, 청자실, 덕수 5146",
        tempText: "특별전 “푸른 세상을 빚다, 고려 상형청자” 출품 중", //25년 4월 1일자로 사라질 문구
        scale: 1.2,
      },
      point_4: {
        title: "지방 통치에 개방적인 고려", //김지원딸 묘지
        text: "고려는 통일 이후 각 지방의 힘있는 세력가들에게 직책과 권한을 주고 그들을 통해 효율적으로 지방의 백성들을 다스렸어요.",
        name: "<딸을 공녀로 보낸 왕족 부인의 묘지명>",
        location: "고려, 1335년, 고려 2실, 신수 5874",
        scale: 0.92,
      },
      point_5: {
        title: "개방적인 여성의 사회적 활동", //쇠북
        text: "고려에서는 조선과 달리 여성들의 사회적 활동이 비교적 자유로웠어요. 고려의 여성들은 정치활동을 하지 못했지만 호주가 될 수 있었고, 부모로부터 재산도 공평하게 상속받았어요.",
        name: "<청동으로 만든 북>",
        location: "고려, 고려 1실, 신수 15423",
        scale: 1.2,
      },
      point_6: {
        title: "일반 군현으로 승격한 다인철소", //농기구
        text: "다인철소 사람들이 몽골과 싸워 큰 공을 세우자 나라에서는 이곳을 익안현으로 승격시켰어요. 고려는 엄격한 신분제 사회였지만 개방적인 면도 있었어요.",
        name: "<묵소에서 만든 먹>",
        location: "고려, 고려 1실, 복고역 164",
        scale: 1.08,
      },
      point_7: {
        title: "고려의 해상교류", //거울
        text: "고려는 해상무역을 통해 외국 문물을 적극 받아들였어요. 청동거울 중에는 고려에서 만든 ‘고려국조, Made in Goryeo’ 제품도 있지만, 중국에서 다양한 청동거울을 들여오기도 했어요.",
        name: "<‘고려국조’가 새겨진 거울>",
        location: "고려, 고려 1실, 본관 2579",
        scale: 1.6,
      },
      point_8: {
        title: "불교와 승려의 사회적 지위", //양택춘
        text: "고려시대 승려는 국가에서 관리 할 정도로 중요하고 존경받는 직업이었어요. 양택춘의 아들 중 세 명이 승려라는 사실에서 알 수 있듯 이름있는  집안의 자녀부터 많은 백성들이 승려가 되려고 했어요.",
        name: "<화엄종의 영도자 대각국사 의천>",
        location:
          "조선, 1805년, 고려2실, 복고역 153 (출처: 국가유산청)",
        scale: 0.7,
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

    if (pointNData[this.user.currentPoint].tempText) {
      this.temp_p3_tempText.setText(
        pointNData[this.user.currentPoint].tempText
      );
      this.temp_p3_tempText.setVisible(true);
    } else {
      this.temp_p3_tempText.setVisible(false);
    }
  }

  point_n_41() {
    let pointNData = {
      point_1: {
        text:
          "‘한마디 말로써 기록하니, <br />" +
          "천년만년이 지나도 어찌 잊히리’</p>" +
          `<p class="think_together" style="font-family:'KoddiUDOnGothic-Bold';text-align:right;padding:34px 0 104px">복녕궁주묘지명 中</p>` +
          `<p class="think_together">묘지명은 한 사람의 생애를 담은 기록물이에요. 나의 경험을 짧게 묘사하는 것도 하나의 기록물이 될 거에요. 나의 하루를 한 문장으로 남겨보세요.`,
      },
      point_2: {
        text: "우리는 자신의 능력을 SNS나 영상 등 다양한 콘텐츠로 보여줄 수 있는 시대를 살고 있어요.<br /><br />여러분의 능력을 잘 보여줄 수 있는 콘텐츠와 방법은 무엇인가요?",
      },
      point_3: {
        text: "우리는 후각으로 지나간 기억과 그 때의 감정을 떠올릴 수 있어요.<br /><br />당신이 기억하는 좋은 향기가 났던 순간은 언제인지 생각해 보세요.",
      },
      point_4: {
        text:
          "먼 미래에 여러분의 묘지명을 만들게 된다면 어떻게 만들고 싶나요?<br /><br />" +
          "나의 묘지명에 어떤 재료와 형태가 어울릴지, 그리고 그 내용은 어떤 것이 적합할지 구체적으로 고민해 보세요.",
      },
      point_5: {
        text:
          "사람들이 어딘가 후원을 할 때, 이름을 남기기도 하고, 그렇지 않을 때도 있어요.<br /><br />" +
          "만약 여러분들은 자신의 이름을 어떤 방법으로 남기고 싶나요?", // 만약 자신의 이름을 남긴다면 어떤 방법으로 남기고 싶나요?
      },
      point_6: {
        text:
          "우리는 많은 것이 자동화된 세상을 살고 있지만 아직도 사람 손을 거쳐야 하는 일이 많습니다.<br /><br />" +
          "어떤 일을 예로 들 수 있을까요?<br /><br />" +
          "이런 일 가운데 무엇이 자동화로 변할지 생각해 보세요.",
      },
      point_7: {
        text:
          "거울은 그 사람의 마음을 그대로 비춰줍니다. 오늘 당신의 마음 상태는 어떤가요?<br /><br />" +
          "만약 힘든 일이 있었다면 거울을 보고 활짝 미소를 지어보세요. 그리고 하루를 기쁘게 마무리해 보세요.",
      },
      point_8: {
        text:
          "한 분야에서 최선을 다해 최고가 되기 위해서는 어떤 노력이 필요할까요?<br /><br />" +
          "여러분은 지금 어떤 분야에서 최고가 되고 싶나요?",
      },
    };
    this.point_n_41_text.setHTML(
      `<p class="think_together">${pointNData[this.user.currentPoint].text}</p>`
    );
    this.temp_p4.setVisible(true);
  }

  maskGraphics: any;
  slideImages: any;
  bowSlideLeft: any;
  bowSlideRight: any;
  bowSlideBottom: any;
  imageSlideViewerBox: any;
  hasimageSlideViewer: boolean = false;
  imageSlideViewer() {
    if (this.hasimageSlideViewer) return;
    this.hasimageSlideViewer = true;
    if (this.slideImages && this.imageSlideViewerBox) {
      this.slideImages.destroy();
      this.imageSlideViewerBox.destroy();
    }
    this.slideImages = null;
    const maskGraphics = this.add.graphics();
    this.imageSlideViewerBox = maskGraphics;
    const yImageCount = this.imageDragViewerConf.row;
    const xImageCount = this.imageDragViewerConf.col;
    const onlyXImage = this.imageDragViewerConf.row < 1;
    const xPos = this.imageDragViewerConf.xPos
      ? this.imageDragViewerConf.xPos
      : this.contentImageX - 230; // 이미지의 x 좌표
    const yPos = this.imageDragViewerConf.yPos
      ? this.imageDragViewerConf.yPos
      : this.contentImageY - 388; // 이미지의 y 좌표
    const imageWidth = this.imageDragViewerConf.imageWidth
      ? this.imageDragViewerConf.imageWidth
      : 960; // 이미지의 가로 길이
    const imageHeight = this.imageDragViewerConf.imageHeight
      ? this.imageDragViewerConf.imageHeight
      : 954; // 이미지의 세로 길이
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
    let prvStr = "";
    if (this.user.currentPoint === "point_2") {
      prvStr = "p2_";
    }
    const updateImage = () => {
      const textureKey = `${prvStr}${currentRow}_${currentCol}`;

      // 이미 동일한 텍스처라면 업데이트하지 않음
      if (this.slideImages && this.slideImages.texture.key === textureKey) {
        return;
      }

      if (!this.slideImages) {
        // 슬라이드 이미지가 없을 경우 초기화
        this.slideImages = this.add.image(
          xPos + imageWidth / 2,
          yPos + imageHeight / 2,
          textureKey
        );
        this.slideImages.setMask(mask);
        this.slideImages.setDepth(0);
        this.slideImages.setScale(setScale); // 이미지 크기 조정
        this.slideImages.setInteractive();
        this.input.setDraggable(this.slideImages);
      } else {
        // 슬라이드 이미지가 있을 경우 텍스처만 업데이트
        this.slideImages.setTexture(textureKey);
      }

      // `bowSlideLeft`와 `bowSlideRight` 트윈 효과 추가
      if (this.bowSlideBottom) {
        // this.bowSlideLeft || this.bowSlideRight ||
        if (
          // this.bowSlideLeft.alpha > 0 ||
          // this.bowSlideRight.alpha > 0 ||
          this.bowSlideBottom.alpha > 0
        ) {
          this.tweens.add({
            targets: [
              // this.bowSlideLeft,
              // this.bowSlideRight,
              this.bowSlideBottom,
            ],
            alpha: 0,
            duration: 300,
            ease: "Sine.easeOut",
          });
        }
      }
    };

    updateImage(); // 초기 이미지 표시
    let bowXAddPos = [70, 660, 730 / 2];
    let bowScale = 1.5;
    let bowAlpha = 0.8;
    if (this.imageDragViewerConf.scale > 1) {
      bowXAddPos = [90, 890, (890 + 90) / 2];
      bowScale = 2;
    }
    // this.bowSlideLeft = this.add.image(
    //   xPos + bowXAddPos[0],
    //   yPos + imageHeight / 2,
    //   "ico_rotate_1"
    // );
    // this.bowSlideLeft.setScale(bowScale);
    // this.bowSlideLeft.setAlpha(bowAlpha);

    // this.bowSlideRight = this.add.image(
    //   xPos + bowXAddPos[1],
    //   yPos + imageHeight / 2,
    //   "ico_rotate_2"
    // );
    // this.bowSlideRight.setScale(bowScale);
    // this.bowSlideRight.setAlpha(bowAlpha);

    this.bowSlideBottom = this.add.image(
      xPos + bowXAddPos[2] - 6,
      yPos + imageHeight / 2 + 390,
      "ico_rotate_3"
    );
    this.bowSlideBottom.setAlpha(bowAlpha);

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

      let lastProcessedTime = 0; // 마지막으로 처리한 시간
      const debounceTime = 500; // 최소 500ms 간격으로 처리

      // 좌우 드래그 처리
      if (Math.abs(dragDistanceX) > threshold) {
        const now = Date.now();
        if (now - lastProcessedTime > debounceTime) {
          lastProcessedTime = now;

          if (dragDistanceX < 0) {
            currentCol = currentCol === xImageCount ? 1 : currentCol + 1;
          } else {
            currentCol = currentCol === 1 ? xImageCount : currentCol - 1;
          }

          updateImage();
          startX = pointer.x;
        }
      }

      // 상하 드래그 처리
      else if (Math.abs(dragDistanceY) > threshold && !onlyXImage) {
        const now = Date.now();
        if (now - lastProcessedTime > debounceTime) {
          lastProcessedTime = now;

          if (dragDistanceY > 0 && currentRow < yImageCount) {
            currentRow += 1;
          } else if (dragDistanceY < 0 && currentRow > 0) {
            currentRow -= 1;
          }

          updateImage();
          startY = pointer.y;
        }
      }
    });
  }

  detachImageSlideViewer() {
    // 객체가 존재할 경우만 destroy 호출
    [
      this.slideImages,
      this.imageSlideViewerBox,
      this.bowSlideLeft,
      this.bowSlideRight,
      this.bowSlideBottom,
    ].forEach((item) => {
      if (item) {
        item.destroy();
        item = null; // 참조 해제
      }
    });

    // 이벤트 리스너 해제
    if (this.input && this.input.listeners("drag")) {
      this.input.off("drag");
    }

    this.hasimageSlideViewer = false;
  }

  exitScene(data = {}) {
    if (this.hasimageSlideViewer) this.detachImageSlideViewer();
    this.btn_next.removeAllListeners();
    this.btn_prev.removeAllListeners();
    this.btn_close.removeAllListeners();
    this.prevResourceManager = {};
    this.scene.resume("MapPlay", data);
    this.scene.stop("ItrcOpenness");
    this.scene.remove("ItrcOpenness");
  }
}
