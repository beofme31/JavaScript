"use strict";

// HTML 문서 로딩 완료 이벤트, DOM node가 메모리에 완성된 순간
window.addEventListener('load', () => {
  console.log('HTML 문서 로딩이 완료');
})

window.onload = () => {
  console.log('HTML 문서 로딩이 완료2');
}

// button3 onclick에서 연결한 함수
const myEventHandler = () => {
  console.log('myEventHandler, button click');
}

let button1Node = document.getElementById('button1')
button1Node.addEventListener('click', () => {
  console.log('button1 click');
})

let button2Node = document.getElementById('button2')
button2Node.onclick = () => {
  console.log('button2 click');
}