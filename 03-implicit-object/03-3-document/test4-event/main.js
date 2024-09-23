"use strict";

let area1 = document.getElementById('area1')
let area2 = document.getElementById('area2')
let area3 = document.getElementById('area3')

// event handler 등록, bubbling 단계에서 실행할 handler
area1.addEventListener('click', function () {
  console.log('bubbling area1 event handler')
})
area2.addEventListener('click', function () {
  console.log('bubbling area2 event handler')
})
area3.addEventListener('click', function () {
  console.log('bubbling area3 event handler')
  event.stopPropagation()
})

// event handler - capturing
area1.addEventListener('click', function (event) {
  console.log('capturing area1 event handler')
  event.stopPropagation() // 캡쳐링이나 버블링이 더 이상 진행 안 되도록 하는 것
}, true)
area2.addEventListener('click', function () {
  console.log('capturing area2 event handler')
}, true)
area3.addEventListener('click', function () {
  console.log('capturing area3 event handler')
}, true)

let link1 = document.getElementById('link1')
let form1 = document.getElementById('form1')

link1.addEventListener('click', function (e) {
  console.log('link click')
  // js code에서 ajax로 서버 연동처리
  e.preventDefault() // 브라우저의 기본 이벤트가 처리 안되게끔
})

form1.addEventListener('submit', function (e) {
  console.log('form submit')
  // browser form의 이벤트 처리보다는
  // 개발자 js code에서 ajax로 서버 연동
  e.preventDefault()
})