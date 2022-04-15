// html에서 가져온 처리해야할 클래스 요소
const startButton = document.querySelector("start__btn");
const openButton = document.querySelector("result-btn__go");
const shareButton = document.querySelector(".result-btn__share");
const closeButton = document.querySelector("modal__close-btn");
const result = document.querySelector(".result"); // 디스플레이 on-off
const modal = document.querySelector(".modal"); // 디스플레이 off-on
const loading = document.querySelector(".result-loading"); // 디스플레이 off-on

//버튼 클릭 감지 기능
function calculator() {
  // 인풋에서 필드,타임 밸류 가져옴
  const fieldValue = document.querySelector("#field-value");
  let timeValue = document.querySelector("#time-value");
  let timeValue_int = Number(timeValue);

  // 리절트에서 필드,타임 리절트 가져옴
  const fieldResult = document.querySelector(".result__field");
  const timeResult = document.querySelector(".result__time");

  //입력값 계산 함수
  if (fieldValue.value == "") {
    alert("입력되지 않았습니다.");
    // fieldValue.focus();
    // return false;
  } else if (timeValue_int.value == "") {
    alert("시간이 입력되지 않았습니다.");
    // timeValue.focus();
    // return false;
  } else if (timeValue > 24) {
    alert("하루는 24시간 입니다. 다시 입력 하세요");
    return false;
  }

  result.style.display = "none";
  loading.style.display = "flex"; //로딩 되는 화면이 먼저 나올것임

  setTimeout(function)
}

function openModal() {}
function copyUrl() {}
function closeModal() {}

//버튼 클릭 감지
startButton.addEventListener("click", calculator);
openButton.addEventListener("click", openModal);
shareButton.addEventListener("click", copyUrl);
closeButton.addEventListener("click", closeModal);

if(false){
  console.log("hi")
}else{
  console.log("bye")
}

if(8 > 10){
  console.log("hi")
}else if(8 < 10){
  console.log("hello")
} else {
  console.log("bye")
}