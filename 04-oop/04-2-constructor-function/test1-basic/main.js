'use strict';

// 일반 함수 선언, this로 멤버 준비되지 않은 경우
function User1(arg1, arg2) {
  // 함수 내에 변수 및 함수가 선언되어 있다.
  // 함수 scope 내에 선언된 함수의 로컬 멤버다.
  let name = arg1;
  let age = arg2;
  let sayHello = function () {
    console.log(`User1: ${name}, ${age}`);
  }
  sayHello();
}
// 일반 함수로 호출 => 정상, 함수가 일반 함수로 준비되어 있기 때문에 문제없이 결과 나옴
User1('홍길동', 20); // User1: 홍길동, 20

// 객체 생성으로 호출
// new를 이용했기 때문에 this는 준비된다.(메모리는 준비된다.)
// 하지만 함수 내에서 this.xxx으로, this에 아무것도 추가되지 않은 상태다. 즉, 빈 상태의 객체
// 그 객체 내에는 name, age 없다. sayHello() 함수 없다.
let obj1 = new User1('홍길동', 30);
console.log(`${obj1.name}, ${obj1.age}`);
// obj1.sayHello(); // error

// 생성자 함수로 준비
function User2(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`${this.name}, ${this.age}`);
  }
}

// 일반 함수로 이용
// new를 이용하지 않았으므로 this가 준비되지 않는다. 그 상태에서 함수 내에서 this이용 시, 에러가 남
// User2('홍길동', 20); // error

// 객체 생성으로 이용
// 모형(생성자 함수)을 선언하고, 모형을 통해 동일 구조의 객체를 반복 생성
let user1 = new User2('홍길동', 25);
let user2 = new User2('김길동', 30);
user1.sayHello();
user2.sayHello();
