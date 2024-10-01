"use strict"

let idValidCheck = false
let pwValidCheck = false
let id = ''
let pw = ''

function isIdValid() {
  let idNode = document.getElementById('id')
  id = idNode.value
  let idErrorMsgNode = document.getElementById('idErrorMsg')

  if (id == null || id.trim().length == 0) {
    idValidCheck = false
    idErrorMsgNode.innerHTML = '아이디는 필수 입력입니다.'
  } else {
    idValidCheck = true
    idErrorMsgNode = ''
  }
}

function isPwValid() {
  let pwNode = document.getElementById('pw')
  pw = pwNode.value
  let pwErrorMsgNode = document.getElementById('pwErrorMsg')
  let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/

  if (pw == null || pw.trim().length == 0) {
    pwValidCheck = false
    pwErrorMsgNode.innerHTML = '패스워드는 필수 입력입니다.'
  } else if (!regExpPassword.test(pw)) {
    pwValidCheck = false
    pwErrorMsgNode.innerHTML = '패스워드는 영문자, 숫자 조합 6자 이상이어야 합니다.'
  } else {
    pwValidCheck = true
    pwErrorMsgNode = ''
  }
}

function login() {
  isIdValid()
  isPwValid()
  let resultNode = document.getElementById('result')

  if (idValidCheck && pwValidCheck) {
    resultNode.innerHTML = `${id}, ${pw}로 로그인을 시도합니다.`
  }
}