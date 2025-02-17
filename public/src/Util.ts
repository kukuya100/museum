import $ from "jquery";
import ModaAlert from "./components/ModaAlert";
export default class Util {
  private static isSafeDown: boolean;

  constructor() {}

  static svgImgLoadCheckFronPack(packUrl, cb) {
    fetch(packUrl)
      .then((response) => response.json())
      .then((assetPackJson) => {
        // 가져온 JSON 데이터에서 SVG 파일의 URL을 추출합니다.
        const svgUrls = assetPackJson.section1.files
          .filter((file) => file.type === "svg") // type이 'svg'인 파일만 선택
          .map((file) => file.url); // 각 파일의 URL을 추출하여 배열로 만듭니다

        // 추출한 SVG URL들을 svgImgLoadCheck 함수에 전달합니다.
        Util.svgImgLoadCheck(svgUrls, cb);
      })
      .catch((error) => {
        console.error(
          "Asset pack JSON을 로드하는 중 오류가 발생했습니다:",
          error
        );
      });
  }

  static svgImgLoadCheck(imagePaths, cb) {
    let loadedImages = 0;
    const totalImages = imagePaths.length;

    imagePaths.forEach((path) => {
      const image = new Image();
      image.src = path;
      image.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages && cb) {
          cb();
        }
      };
      image.onerror = (error) => {
        console.error("이미지 로드 에러:", path, error);
        alert('이미지 로드 에러:'+ path+error);
        // 필요에 따라 에러 처리를 추가하세요
      };
    });
  }

  static setTextEx(
    _this,
    container,
    ortTextObj,
    textExWord,
    containerWidth,
    imageKey,
    customOffsetX = 0,
    customOffsetY = 0
  ) {
    let originalText = ortTextObj.text;
    let lines = [];
    const words = originalText.split(" "); // 단어 단위로 나눔

    // 임시 텍스트 객체를 만들어 텍스트 너비를 계산
    const tempTextObj = _this.add.text(0, 0, "", ortTextObj.style);

    let currentLine = "";
    let offsetX =
      textExWord && textExWord[0].offsetX
        ? textExWord[0].offsetX
        : ortTextObj.x - ortTextObj.width / 2;
    let offsetY =
      textExWord && textExWord[0].offsetY
        ? textExWord[0].offsetY
        : ortTextObj.y;
    const lineSpacing = ortTextObj.lineSpacing || 0;

    //중앙정렬 안맞는 경우 있어서 수동으로 맞추기 위해 추가
    offsetX += customOffsetX;
    offsetY += customOffsetY;

    const processedWords = new Set(); // 한번만 처리되도록

    // 각 단어를 너비에 맞게 라인으로 나눔
    words.forEach((word, i) => {
      //console.log(word.indexOf('\n'))
      let cleanWord = word;
      let testLine = currentLine + (currentLine ? " " : "") + cleanWord;

      tempTextObj.setText(testLine);

      if (testLine.indexOf("\n") > -1) {
        let splitWord = testLine.split("\n");
        currentLine = splitWord[0];
        lines.push(currentLine.trim());
        currentLine = splitWord[1] !== "" ? splitWord[1] : "";
      }

      // 텍스트가 너비를 초과하면 줄바꿈 처리
      else if (tempTextObj.width > containerWidth && currentLine !== "") {
        lines.push(currentLine.trim());
        currentLine = cleanWord; // 새로운 라인에 현재 단어로 시작
      } else {
        currentLine = testLine;
      }

      // 마지막 단어인 경우 라인 추가
      if (i === words.length - 1) {
        lines.push(currentLine.trim());
      }
    });
    tempTextObj.destroy(); // 임시 텍스트 객체 제거

    // 각 라인의 문장을 단어가 아닌 전체 문장에서 클릭 가능한 단어를 찾아 처리
    lines.forEach((line) => {
      let currentOffsetX = offsetX;
      let remainingText = line;

      if (textExWord && textExWord.length > 0) {
        textExWord.forEach((item, i) => {
          const wordIndex = remainingText.indexOf(item.word);

          if (wordIndex !== -1 && !processedWords.has(item.word)) {
            processedWords.add(item.word); // 단어를 처리한 것으로 저장
            let partBefore = remainingText.substring(0, wordIndex); // 클릭 가능한 단어 앞의 텍스트 처리
            if (partBefore) {
              const textObj = _this.add.text(
                currentOffsetX,
                offsetY,
                partBefore,
                ortTextObj.style
              );
              textObj.setOrigin(0, 0);
              container.add(textObj);
              currentOffsetX += textObj.width;
            }

            // 클릭 가능한 단어 처리 (파란색으로 표시)
            const clickableText = _this.add
              .text(currentOffsetX, offsetY, item.word, {
                ...ortTextObj.style,
                color: "#004EE0", // 파란색 폰트
              })
              .setInteractive({ useHandCursor: true })
              .on("pointerdown", () => {
                // 클릭 시 설명 표시
                if (container.getByName("explanationTextContainer")) {
                  container.getByName("explanationTextContainer").destroy();
                }

                let addX =
                  textExWord && textExWord[i].addX ? textExWord[i].addX : 0;
                let customX =
                  textExWord && textExWord[i].customX !== undefined
                    ? textExWord[i].customX
                    : null;
                let explanationTextContainer = _this.add.container(
                  customX !== null ? customX : addX + 4,
                  38
                );

                explanationTextContainer.setName("explanationTextContainer");
                container.add(explanationTextContainer);

                const explanationText = _this.add
                  .text(clickableText.x, clickableText.y, item.ex, {
                    fontSize: "35px",
                    color: "#004EE0",
                    backgroundColor: "#ffffff",
                    fontFamily: "KoddiUDOnGothic-Regular",
                    lineSpacing: 10,
                    padding: { left: 5, right: 5, top: 5, bottom: 5 },
                  })
                  .setOrigin(0, 0);
                explanationText.setName("explanationText");
                explanationText.setDepth(1);

                let roundBox = _this.add.rexRoundRectangle(
                  clickableText.x - 25,
                  clickableText.y - 40,
                  explanationText.width + 50,
                  explanationText.height + 75,
                  20,
                  0xffffff
                );
                roundBox.setStrokeStyle(2, 0x598dff);
                roundBox.setOrigin(0, 0);

                explanationTextContainer.add(roundBox);
                explanationTextContainer.add(explanationText);

                // 이미지가 정의되어 있을 때 이미지 추가
                if (item.image) {
                  const image = _this.add.image(0, 0, item.image.texture); // 이미지 위치를 0,0으로 맞춰 컨테이너 중심에 배치
                  image.setScale(item.image.scale || 1);
                  explanationTextContainer.add(image);
                }

                let btnClose = _this.add
                  .image(
                    clickableText.x + explanationText.width + 10,
                    clickableText.y - 25,
                    "btn_x"
                  )
                  .setName("btn_x")
                  .setOrigin(1, 0);
                btnClose.setScale(0.75);
                explanationTextContainer.add(btnClose);
                roundBox
                  .setInteractive({ useHandCursor: true })
                  .on("pointerdown", function () {
                    explanationTextContainer.destroy();
                  });

                const displayDuration = item.timeout || 3000; // 각주 데이터에 timeout이 없으면 기본값 3초
                setTimeout(() => {
                  if (
                    explanationTextContainer &&
                    explanationTextContainer.active
                  ) {
                    explanationTextContainer.destroy();
                  }
                }, displayDuration);

                //container.explanationText = explanationTextContainer;  // 이후 삭제를 위해 참조
              });

            container.add(clickableText);
            currentOffsetX += clickableText.width;

            const image = _this.add.image(
              currentOffsetX - clickableText.width - 17,
              offsetY + clickableText.height / 5,
              imageKey
            );
            image.setScale(0.17);
            image.setOrigin(0, 0.5);
            container.add(image);

            // 클릭 가능한 단어 뒤의 텍스트를 처리
            remainingText = remainingText.substring(
              wordIndex + item.word.length
            );
          }
        });
      }

      // 남은 텍스트 처리
      if (remainingText) {
        const remainingTextObj = _this.add.text(
          currentOffsetX,
          offsetY,
          remainingText,
          ortTextObj.style
        );
        remainingTextObj.setOrigin(0, 0);
        container.add(remainingTextObj);
      }

      // 다음 라인으로 이동
      offsetY += tempTextObj.height + lineSpacing;
    });

    // 기존 텍스트 객체 숨기기
    ortTextObj.setVisible(false);
  }

  static addPopupListeners(selector, _this = null) {
    const linkElements = document.querySelectorAll(selector);
    linkElements.forEach((linkElement) => {
      linkElement.addEventListener("click", (event) => {
        event.preventDefault();
        const content = linkElement.getAttribute("data-content");
        Util.showPopup(event, content, linkElement, _this);
      });
    });
  }

  static addPopupListener(element) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const content = element.getAttribute("data-content");
      Util.showPopup(event, content, element);
    });
  }

  static showPopup(event, content, element, _this = null) {
    const existingPopup = document.querySelector(".layer_popup");
    if (existingPopup) existingPopup.remove();

    const popup = document.createElement("section");
    popup.className = "layer_popup";
    popup.innerHTML = `
      <article>${content}</article>
      <button class="close"></button>
    `;
    element.parentElement.appendChild(popup);

    let left = event.target.offsetLeft;
    let top = event.target.offsetTop + event.target.offsetHeight;
    const margin = 120;

    let popupRect = popup.getBoundingClientRect();
    // 위치 적용
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;

    popupRect = popup.getBoundingClientRect();

    const canvas = document.querySelector("#game-container canvas");
    const canvasRect = canvas.getBoundingClientRect();

    let leftOverflowed =
      popupRect.left + popupRect.width - (canvasRect.left + canvasRect.width);
    let ratio = popup.offsetWidth / popupRect.width;
    if (leftOverflowed > 0) {
      leftOverflowed = leftOverflowed * ratio;
      popup.style.left = left - leftOverflowed - margin + "px"; //overflow된만큼 뺌
    }
    let topOverflowed =
      popupRect.top + popupRect.height - (canvasRect.top + canvasRect.height);
    if (topOverflowed > 0) {
      topOverflowed = topOverflowed * ratio;
      popup.style.top = top - topOverflowed - margin + "px"; //overflow된만큼 뺌
    }

    // 닫기 버튼 클릭 이벤트 추가
    const closeButton = popup.querySelector(".close");
    closeButton.addEventListener("pointerdown", (e) => {
      if (_this) _this.isBlacklayerBlock = true;
      popup.remove();
    });

    setTimeout(() => {
      popup.remove();
    }, 3000);
  }

  static fixedButtons(sceneName) {
    $(".fixed-btn").hide();
    let $showbtns = $(".fixed-btn.scene_" + sceneName);
    $showbtns.css({ display: "inline-block" });

    this.buttonBindEvent();
    this.isSafeDown = false;
  }

  static setHotBtns(params, scene) {
    let btSize = 57;
    let containnerPadding = params.contPadding ? params.contPadding : btSize;
    const gnb = scene.add.container(containnerPadding, containnerPadding);
    gnb.name = "gnb";

    //휠체어모드 다른데서도 적용
    // const isSafedownMode = scene.registry.get("isSafedownMode");
    const isSafedownMode = false; //휠체어모드 삭제

    for (let key in params.btns) {
      let btnName = params.btns[key];
      let btnObj = scene.add.image(0, 0, btnName).setName(btnName);
      gnb.add(btnObj);
      if (btnObj) {
        btnObj.setInteractive({ cursor: "pointer" });
        switch (btnName) {
          case "btn_home":
            btnObj.setOrigin(0, 0).setX(0);
            if (
              ["Intro", "ExploreRooms"].includes(params.sceneName) &&
              isSafedownMode
            )
              btnObj.setOrigin(0, 1).setY(1806);
            if (params.sceneName === "ExploreRooms") gnb.setDepth(10);
            btnObj.on("pointerdown", function () {
              if (params.sceneName === "Intro") {
                //좋아요팝업 > 홈 > 다시 재진입후 좋아요팝업 시 뜨는 에러 수정
                if (scene.explanationPopupCon) {
                  scene.explanationPopupCon.destroy();
                  scene.explanationPopupCon = null;
                }
              }
              //체험 중 홈버튼 클릭하더라도 여행종료하기 팝업 안내와 동일한 프로세스로 진행
              if (params.sceneName === "Mapplay") {
                scene.showConfirmPopup();
                return;
              }
              if (params.sceneName === "MyPage") {
                localStorage.removeItem("user_id");
              }
              scene.scene.start("Start");
            });
            break;
          case "btn_exproom":
            btnObj.setOrigin(0, 0).setX(0);
            if (params.sceneName === "Start" && isSafedownMode)
              btnObj.setOrigin(0, 1).setY(1806);
            btnObj.on("pointerdown", function () {
              scene.scene.start("ExploreRooms");
            });
            break;
          case "btn_how_play":
            btnObj.setOrigin(1, 0);
            btnObj.setX(968);
            if (params.sceneName === "Start" && isSafedownMode)
              btnObj
                .setOrigin(0, 1)
                .setY(1806)
                .setX(gnb.getByName("btn_exproom").width + btSize);
            scene.start_guide_layer
              .setInteractive()
              .on("pointerdown", function () {});
            btnObj.on("pointerdown", function () {
              scene.start_guide_cont.setDepth(100);
              scene.tweens.add({
                targets: scene.start_guide_cont,
                alpha: { from: 0, to: 1 },
                y: 960,
                duration: 200,
                repeat: 0,
                ease: "Sine.easeOut",
              });
            });
            scene.btn_close_layer
              .setInteractive({ cursor: "pointer" })
              .on("pointerdown", function () {
                scene.start_guide_cont.setDepth(0);
                scene.tweens.add({
                  targets: scene.start_guide_cont,
                  alpha: { from: 1, to: 0 },
                  y: -1000,
                  duration: 200,
                  repeat: 0,
                  ease: "Sine.easeOut",
                });
              });

            break;

          case "btn_guide":
            btnObj.setTexture("btn_how_play");
            btnObj.setOrigin(0, 0).setX((80 + btSize) * 2);
            scene.guide_cont.setDepth(100);
            scene.guide_cont.setX(540);
            scene.start_guide_layer
              .setInteractive()
              .on("pointerdown", function () {});

            btnObj.on("pointerdown", function () {
              showGuideHome();
              scene.tweens.add({
                targets: scene.guide_cont,
                alpha: { from: 0, to: 1 },
                y: { from: -1000, to: 960 },
                duration: 200,
                repeat: 0,
                ease: "Sine.easeOut",
              });
            });
            function hideGuideHome() {
              scene.btn_close_layer
                .disableInteractive({ cursor: "default" })
                .off("pointerdown");
              scene.btn_show_guide_1
                .disableInteractive({ cursor: "default" })
                .off("pointerdown");
              scene.btn_show_guide_2
                .disableInteractive({ cursor: "default" })
                .off("pointerdown");
              scene.btn_show_guide_3
                .disableInteractive({ cursor: "default" })
                .off("pointerdown");
              scene.btn_show_guide_4
                .disableInteractive({ cursor: "default" })
                .off("pointerdown");
            }
            function showGuideHome() {
              scene.btn_close_layer
                .setInteractive({ cursor: "pointer" })
                .on("pointerdown", function () {
                  scene.tweens.add({
                    targets: scene.guide_cont,
                    alpha: { from: 1, to: 0 },
                    y: -1000,
                    duration: 100,
                    repeat: 0,
                    ease: "Sine.easeOut",
                  });
                });
              scene.btn_show_guide_1
                .setInteractive({ cursor: "pointer" })
                .on("pointerdown", function () {
                  hideGuideHome();
                  scene.tweens.add({
                    targets: scene.guide_1,
                    alpha: { from: 0, to: 1 },
                    duration: 200,
                    repeat: 0,
                    ease: "Sine.easeOut",
                  });
                  scene.btn_close_layer
                    .setInteractive({ cursor: "pointer" })
                    .on("pointerdown", function () {
                      scene.tweens.add({
                        targets: scene.guide_1,
                        alpha: { from: 1, to: 0 },
                        duration: 200,
                        repeat: 0,
                        ease: "Sine.easeOut",
                        onComplete: function () {
                          showGuideHome();
                        },
                      });
                    });
                });
              scene.btn_show_guide_2
                .setInteractive({ cursor: "pointer" })
                .on("pointerdown", function () {
                  hideGuideHome();
                  scene.tweens.add({
                    targets: scene.guide_2,
                    alpha: { from: 0, to: 1 },
                    duration: 200,
                    repeat: 0,
                    ease: "Sine.easeOut",
                  });
                  scene.btn_close_layer
                    .setInteractive({ cursor: "pointer" })
                    .on("pointerdown", function () {
                      scene.tweens.add({
                        targets: scene.guide_2,
                        alpha: { from: 1, to: 0 },
                        duration: 200,
                        repeat: 0,
                        ease: "Sine.easeOut",
                        onComplete: function () {
                          showGuideHome();
                        },
                      });
                    });
                });
              scene.btn_show_guide_3
                .setInteractive({ cursor: "pointer" })
                .on("pointerdown", function () {
                  hideGuideHome();
                  scene.tweens.add({
                    targets: scene.guide_3,
                    alpha: { from: 0, to: 1 },
                    duration: 200,
                    repeat: 0,
                    ease: "Sine.easeOut",
                  });
                  scene.btn_close_layer
                    .setInteractive({ cursor: "pointer" })
                    .on("pointerdown", function () {
                      scene.tweens.add({
                        targets: scene.guide_3,
                        alpha: { from: 1, to: 0 },
                        duration: 200,
                        repeat: 0,
                        ease: "Sine.easeOut",
                        onComplete: function () {
                          showGuideHome();
                        },
                      });
                    });
                });
              scene.btn_show_guide_4
                .setInteractive({ cursor: "pointer" })
                .on("pointerdown", function () {
                  hideGuideHome();
                  scene.tweens.add({
                    targets: scene.guide_4,
                    alpha: { from: 0, to: 1 },
                    duration: 200,
                    repeat: 0,
                    ease: "Sine.easeOut",
                  });
                  scene.btn_close_layer
                    .setInteractive({ cursor: "pointer" })
                    .on("pointerdown", function () {
                      scene.tweens.add({
                        targets: scene.guide_4,
                        alpha: { from: 1, to: 0 },
                        duration: 200,
                        repeat: 0,
                        ease: "Sine.easeOut",
                        onComplete: function () {
                          showGuideHome();
                        },
                      });
                    });
                });
            }

            break;
          case "btn_my_artifact":
            btnObj.setOrigin(0, 0).setX(80 + btSize);
            btnObj.on("pointerdown", function () {
              const parentContainer = btnObj.parentContainer;
              const globalPosition = btnObj.getBounds();

              if (parentContainer) {
                parentContainer.remove(btnObj);
                btnObj.setPosition(globalPosition.x, globalPosition.y);
              }

              if (scene.artifact_list.y > 1000) {
                if (scene.isGuiding && scene.currentGuideIndex === 4) {
                  scene.currentGuideIndex = 5;
                  scene.nextGuideLayer(5);
                }
                scene.blackLayer.setVisible(true);
                scene.blackLayer.setDepth(19);
                Util.toggleBlackLayer("show", ()=> {
                  hideBlackLayer(scene);
                },);  //btn_my_artifact 가 mapplay에서만 사용해서 hideBlackLayer.bind 가능

                scene.blackLayer
                  .setInteractive({ cursor: "pointer" })
                  .off("pointerdown")
                  .on("pointerdown", function () {
                    btnObj.emit("pointerdown");
                  });

                scene.tweens.add({
                  targets: scene.artifact_list,
                  alpha: { from: 0, to: 1 },
                  y: 1000,
                  duration: 200,
                  repeat: 0,
                  ease: "Sine.easeOut",
                });

                if (
                  scene.guideFlow[scene.currentGuideIndex].action ===
                  "click-my-artifact"
                ) {
                  scene.currentGuideIndex++;
                  scene.guideText.setText(
                    scene.guideFlow[scene.currentGuideIndex].text
                  );
                }
              } else {
                btnObj.setDepth(10);
                if (parentContainer) {
                  parentContainer.add(btnObj);
                }

                

                hideBlackLayer(scene);
              }
              // scene.tweens.add({
              //     targets: scene.artifact_list,
              //     y: {from:3384 , to: 1100},
              //     duration: 300,
              //     ease: 'Quad.easeIn'
              // });
              //scene.artifact_list.setPositionY(0, 300);
            });

            function hideBlackLayer(scene) {
              if (scene.isGuiding && scene.currentGuideIndex === 5) {
                scene.currentGuideIndex = 6;
                scene.nextGuideLayer(6);
              }
              
              scene.blackLayer.setVisible(false);
              Util.toggleBlackLayer("hide", null);
          
              scene.tweens.add({
                targets: scene.artifact_list,
                alpha: { from: 0, to: 1 },
                y: 2385,
                duration: 200,
                repeat: 0,
                ease: "Sine.easeOut",
              });
              if (
                scene.guideFlow[scene.currentGuideIndex].action ===
                "close-qr-button"
              ) {
                scene.currentGuideIndex++;
                scene.guideText.setText(
                  scene.guideFlow[scene.currentGuideIndex].text
                );
              }
            }
            break;
            
        }
      }
    }

    // switch (sceneName) {
    //     case "home":
    //         break;
    //     case "exproom":
    //         break;
    //     default:
    //         break;
    //
    // }
  }

  static toggleBlackLayer(action, hideBindFn,option = null) {
    let $blackLayer = $("#black-layer");
    if(option === "active") {
      $blackLayer.attr("data-state", "active");
    }
    if($blackLayer.attr("data-state") === "inactive")  {
      return; //inactive상태면 작동안함 - 튜토리얼에서 디밍영역터치 막기위함
    }
    if(option === "inactive") {
      $blackLayer.attr("data-state", "inactive");
    }


    if (
      action !== "hide" &&
      ($blackLayer.css("display") === "none" || action === "show")
    ) {
      $blackLayer.css({ display: "block" });
      $("canvas").css({ position: "relative" });
    } else {
      $blackLayer.css({ display: "none" });
      $("canvas").css({ position: "inherit" });
    }
    $blackLayer.off("click").on("click", function () {
      if($blackLayer.attr("data-state") === "inactive")  {
        return; //inactive상태면 작동안함 - 튜토리얼에서 디밍영역터치 막기위함
      }
      if (hideBindFn) {
        hideBindFn();
      }
      $blackLayer.css({ display: "none" });
    });
  }

  static buttonBindEvent() {
    let _this = this;
    $(".fixed-btn")
      .off("click")
      .on("click", function () {
        let action = $(this).attr("action");
        switch (action) {
          case "home":
            window.location.href = "/?page=home";
            break;
          // case "back":
          //     window.history.back();
          //     break;
          case "exproom":
            window.location.href = "/?page=exproom";
            break;

          case "safedown":
            if (!_this.isSafeDown) {
              $("#bottom-left-ctrl").append($("#left-button-ctrl").children());
              $("#bottom-left-ctrl").append($("#right-button-ctrl").children());
            } else {
              $("#left-button-ctrl").append($("#bottom-left-ctrl").children());
            }
            _this.isSafeDown = !_this.isSafeDown;

            break;
          default:
            break;
        }

        // if(sceneName) {
        //     window.location.href = "/game/" + sceneName;
        // }
      });
  }

  static getUrlParams(url) {
    let params = new URLSearchParams(url.search);
    let obj = {};
    for (let param of params) {
      obj[param[0]] = param[1];
    }
    return obj;
  }

  static removeURLParameters() {
    const url =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.replaceState({ path: url }, "", url);
    // let url = window.location.href.split('?')[0];
    // window.history.pushState({}, document.title, url);
  }

  static gql(params) {
    const operation = params.operation;
    const queryType = params.type;
    const getData = params.getData;
    const variables = params.variables;
    let queryStr = queryType + " " + operation + " { " + operation;

    if (Object.keys(variables).length > 0) {
      queryStr += "( ";
      for (let key in variables) {
        // if(typeof variables[key] === 'boolean' || typeof variables[key] === 'number') {
        //     queryStr += key + ': ' + variables[key] + ' ';
        // }
        if (typeof variables[key] === "string") {
          queryStr += key + ': "' + variables[key] + '" ';
        } else if (typeof variables[key] === "object") {
          let jsonStr = JSON.stringify(variables[key]);
          jsonStr = jsonStr.replace(/\"([^(\")"]+)\":/g, "$1:");

          queryStr += key + ": " + jsonStr + " ";
        } else {
          queryStr += key + ": " + variables[key] + " ";
        }
      }
      queryStr += ") ";
    }
    queryStr += " {" + getData + "}}";

    const gpqParams = {
      operationName: operation,
      query: queryStr,
      variables: {},
    };

    return gpqParams;
  }

  static setTextEx_2(
    _this,
    container,
    ortTextObj,
    textExWord,
    containerWidth,
    customOffsetX = 0,
    customOffsetY = 0
  ) {
    let offsetX;
    let offsetY;

    if (textExWord && textExWord.length > 0) {
      textExWord.forEach((item, i) => {
        offsetX = customOffsetX;
        offsetY = customOffsetY;

        if (item.x) offsetX += item.x;
        if (item.y) offsetY += item.y;

        // 클릭 가능한 단어 처리 (파란색으로 표시)
        const clickableText = _this.add
          .text(offsetX, offsetY, item.word, {
            ...ortTextObj.style,
            color: "rgba(255,255,255,0)", // 안보이게 알파값 0으로
          })
          .setInteractive({ useHandCursor: true })
          .on("pointerdown", () => {
            // 클릭 시 설명 표시
            if (container.getByName("explanationTextContainer")) {
              container.getByName("explanationTextContainer").destroy();
            }

            let addX =
              textExWord && textExWord[i].addX ? textExWord[i].addX : 0;
            let customX =
              textExWord && textExWord[i].customX !== undefined
                ? textExWord[i].customX
                : null;
            let explanationTextContainer = _this.add.container(
              customX !== null ? customX : addX + 4,
              38
            );

            explanationTextContainer.setName("explanationTextContainer");
            container.add(explanationTextContainer);

            const explanationText = _this.add
              .text(clickableText.x, clickableText.y, item.ex, {
                fontSize: "35px",
                color: "#004EE0",
                backgroundColor: "#ffffff",
                fontFamily: "KoddiUDOnGothic-Regular",
                lineSpacing: 10,
                padding: { left: 5, right: 5, top: 5, bottom: 5 },
              })
              .setOrigin(0, 0);
            explanationText.setName("explanationText");
            explanationText.setDepth(1);

            // 이미지가 정의되어 있을 때 이미지 추가 및 크기 조정
            let image;
            let finalWidth = explanationText.width + 50;
            let finalHeight = explanationText.height + 50;

            if (item.image) {
              image = _this.add.image(
                item.image.x + clickableText.x || clickableText.x,
                item.image.y + clickableText.y || clickableText.y,
                item.image.texture
              );
              image.setScale(item.image.scale || 1);
              image.setOrigin(0, 0);

              // 텍스트와 이미지의 크기를 비교하여 컨테이너 크기 조정
              finalWidth =
                Math.max(explanationText.width, image.width * image.scaleX) +
                50;
              finalHeight =
                explanationText.height + image.height * image.scaleY + 75;
            }

            // roundBox 크기와 위치 조정
            let roundBox = _this.add.rexRoundRectangle(
              clickableText.x - 25,
              clickableText.y - 32,
              finalWidth,
              finalHeight,
              20,
              0xffffff
            );
            roundBox.setStrokeStyle(2, 0x598dff);
            roundBox.setOrigin(0, 0);

            explanationTextContainer.add(roundBox);
            explanationTextContainer.add(explanationText);

            // console.log(container.x, explanationTextContainer.x, explanationTextContainer.width);
            // console.log(container.x, roundBox.x, roundBox.width);
            // console.log(explanationTextContainer.x, explanationTextContainer.y);
            // console.log(explanationTextContainer.width, explanationTextContainer.height);
            // roundBox.setX(0).setY(0);
            if (
              container.x + explanationTextContainer.x + roundBox.width >
              1080
            )
              explanationTextContainer.setX(
                1080 - roundBox.width - container.x
              );
            if (
              container.y + explanationTextContainer.y + roundBox.height >
              1920
            )
              explanationTextContainer.setY(
                1920 - roundBox.height - container.y
              );

            if (image) {
              explanationTextContainer.add(image);
            }

            let btnClose = _this.add
              .image(roundBox.x + roundBox.width - 25, roundBox.y + 25, "btn_x")
              .setName("btn_x")
              .setOrigin(1, 0);
            btnClose.setScale(0.75);
            explanationTextContainer.add(btnClose);
            roundBox
              .setInteractive({ useHandCursor: true })
              .on("pointerdown", function () {
                explanationTextContainer.destroy();
              });

            const displayDuration = item.timeout || 10000; // 각주 데이터에 timeout이 없으면 기본값 10초
            setTimeout(() => {
              if (explanationTextContainer && explanationTextContainer.active) {
                explanationTextContainer.destroy();
              }
            }, displayDuration);

            //container.explanationText = explanationTextContainer;  // 이후 삭제를 위해 참조
          });

        const image = _this.add.image(
          clickableText.x,
          clickableText.y,
          "btn_word_plus"
        );
        image.setScale(0.17);
        image.setOrigin(0.5, 0.5);
        container.add(image);
        // clickableText.color = 'rgba(255,255,255,0)';

        container.add(clickableText);
      });
    }
  }
}
