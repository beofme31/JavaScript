'use strict';

function Member(id, nickname, photo) {
  this.id = id
  this.nickname = nickname
  this.photo = photo
}

function Emoji(emojiId) {
  this.emojiId = emojiId
  this.count = 0
  this.members = []
  this.add = function (memberId) {
    this.count++
    this.members.push(memberId)
  }
}

function Message(msg, member) {
  this.msgId = ++msgId
  this.msg = msg
  this.member = member
  this.date = new Date().toLocaleString()
  this.emojis = []
  this.addEmoji = function (emojiId, memberId) {
    if (this.emojis.every(item => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId)
      emoji.add(memberId)
      this.emojis.push(emoji)
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId)
      this.emojis[index].add(memberId)
    }
  }
}

// 전체 채팅 메시지가 저장되는 배열, Message 객체 여러개가 저장
let messages = []
// 채팅 메시지를 식별해야 이모지를 어디다 추가할건지가 결정될 수 있어서
// 1씩 증가시켜서 신규 발생 채팅 메시지 식별자 id(msgId)로 사용하기 위해서
let msgId = 0

// 필요한 dom node 객체 획득
let nicknameInpuNode = document.getElementById('nicknameInput')
let idInpuNode = document.getElementById('idInput')
let msgInpuNode = document.getElementById('msgInput')
// 최종 동적으로 양산된 채팅 글이 찍힐 위치
let chatMainNode = document.getElementById('chat-main')

function send(e) {
  // 유저 입력 데이터 추출

  // 유효성 검증

  // 화면에 동적 노드 만들어서 출력

}

function printEmoji(message) {

}

// 이모지 추가 클릭 이벤트 처리
function emojiclick() {
  // 동적으로 이모지를 메시지에 출력

}