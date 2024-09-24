'use strict';

// 반복적으로 생성될 객체 도출

// Member: {
//   id: 'jangyj',
//   nickname: '장유진',
//   photo: 'jangyj.png'
// },

// 객체가 가지는 데이터를 생성자 함수 내에서 발생하는가?
// 외부에서 전달받아야 하는가?
function Member(id, nickname, photo) {
  this.id = id;
  this.nickname = nickname;
  this.photo = photo;
}

function Emoji(emojiId) {
  this.emojiIdid = id;
  this.count = 0;
  this.members = [];
  this.add = function (memberId) {
    this.count++
    this.members.push(memberId);
  }
}

function Message(msg, member) {
  this.msgId = ++msgId
  this.msg = msg;
  this.member = member;
  this.date = new Date().toLocaleString();
  this.emojis = [];
  this.addEmoji = function (emojiId, memberId) {
    if (this.emojis.every(item => item.id !== emojiId)) {
      this.emojis.push(new this.Emoji(emojiId))
    } else {
      let index = this.emojis.findIndex((item) => item.id === emojiId)
      this.emojis[index].add(memberId)
    }
  }
}

// 메시지가 여러개 생성되는 구조이다.
// 전체 메시지를 담기 위한 배열
// 메시지 객체 여러개를 담는 배열
let messages = [];

// 메시지 객체 여러개가 유지된다.
// 각각의 메시지 객체를 식별해서 사용해야 한다.
// 메시지 식별자로 사용하기 위한 변수, 메시지 객체 만들어질 때마다 1씩
// 증가시켜서 사용하겠다.
let msgId = 0;

// test
// 신규 메시지 발생 1
let member1 = new Member('kim', '김길동', 'kim.png');
let message1 = new Message('첫번째 메시지', member1);
messages.push(message1);
console.dir(messages);

// 신규 메시지 발생 2
let member2 = new Member('lee', '이길동', 'lee.png');
let message2 = new Message('두번째 메시지', member2);
messages.push(message2);
console.dir(message2);

// park이 첫번째 메시지에 ok 이모지를 추가했다는 가정
message1.addEmoji('ok', 'park');
console.dir(messages);

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

let student1 = new Student('철수', 12, 6)

Student.prototype.introduce = function () {
  console.log(`저는 ${name}입니다. 저는 ${grade}입니다.`);
}

function Book(title, writer, pages) {
  this.title = title;
  this.writer = writer;
  this.pages = pages;
}

let myBook = new Book('어린 왕자', '생텍쥐페리', 120);

myBook.prototype.read = function () {
  console.log(`${title}을(를) 읽습니다.`);
}

