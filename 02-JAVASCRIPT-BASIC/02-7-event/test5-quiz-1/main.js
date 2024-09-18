"use strict";

let result = document.getElementById('result')
let form = document.getElementById('form')

function printResult(msg){
  result.innerHTML = msg
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let nameNode = document.getElementById('name')
  let phoneNode = document.getElementById('phone')
  let jobNode = document.getElementById('job')
  printResult(`name: ${nameNode.value}<br /> phone: ${phoneNode.value}<br /> job: ${jobNode.value}`)
})

form.addEventListener('reset', () => {
  printResult('취소되었습니다.')
})
