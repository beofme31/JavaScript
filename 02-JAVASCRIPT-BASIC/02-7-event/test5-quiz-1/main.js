"use strict";

let resultNode = document.getElementById('result')
let formNode = document.getElementById('form')

function printResult(msg) {
  resultNode.innerHTML = msg
}

formNode.addEventListener('submit', (e) => {
  e.preventDefault()

  let nameNode = document.getElementById('name')
  let phoneNode = document.getElementById('phone')
  let jobNode = document.getElementById('job')

  let msg = `이름: ${nameNode.value}<br />전화번호: ${phoneNode.value}<br />직업: ${jobNode.value}`

  printResult(msg)
})