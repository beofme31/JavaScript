"use strict";

// window의 기본 정보 추출
console.log(window.innerWidth, window.innerHeight)
console.log(window.outerWidth, window.outerHeight)
console.log(window.screenLeft, window.screenTop)

// 스크롤 정보는 스크롤 이벤트가 발생한 경우만 유지
window.addEventListener('scroll', () => {
  console.log(window.scrollX, window.scrollY)
})

// 새로운 tap으로 새 창이 뜬다.
// target을 지정하지 않으면 기본이 _blank(새 창)
function myOpen1() {
  window.open('http://www.google.com')
}

// 열려있는 창에서 url이 열림
function myOpen2() {
  window.open('http://www.google.com', '_self')
}

// 물론 X버튼이 있지만 부모 버튼에서 떠 있는 자식 창을 close시킬때
// 자식 창 지칭 객체
let childWindow

// 세번째 매개변수에 옵션을 줘서 위치와 크기를 지정할 수 있음
function myOpen3() {
  childWindow = window.open('http://www.google.com'
    , '_blank'
    , 'left = 100, top = 100, width = 300, height = 400')
  if (childWindow == null) {
    alert('팝업이 차단되었습니다. 해제해 주세요.')
  }
}

// 아래는 작동 안해서 강사님이 다시 알아보시기로 함
function myClose() {
  childWindow.close()
}

function myScroll() {
  window.scrollBy(100, 100)
}

