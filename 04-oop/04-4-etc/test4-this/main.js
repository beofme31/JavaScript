'use strict';

// 생성자 함수 내에서의 this
function User2(arg1) {
  // new로 호출이 되므로, 호출하자마자 빈 상태의 객체가 만들어지고
  // 생성자 함수가 호출이 되는 동안의 this는 그 객체
  console.log(this); // User1 {}
  this.data = arg1
  console.log(this);
}
let User1 = new User2('홍길동')