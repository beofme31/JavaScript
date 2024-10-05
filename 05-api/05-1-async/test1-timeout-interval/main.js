'use strict';

// function sayHello() {
//   // 시간측정하려고
//   console.timeEnd();
//   console.log('Hello');
// }

// setTimeout()은 특정 시간이 지난 다음에 코드를 실행하는 함수
// console.time() // timeEnd에서 걸린 시간출력
// // 즉시 실행
// setTimeout(sayHello);

// // 1초 후에 실행
// setTimeout(sayHello, 1000) // default: 0.045166015625 ms


// 데이터 전달
// 함수를 직접 실행시키는 것이 아니라, 의뢰하는 것이므로
// 의뢰 내용에 데이터를 전달해야 한다.
// function sayHello2(arg1, arg2, arg3) {
//   console.log(`Hello, ${arg1}, ${arg2}. ${arg3}`);
// }
// setTimeout(sayHello2, 1000, '홍길동', 10, true);


// 의뢰, 취소
// function sayHello3() {
//   console.log('Hello');
// }

// // 몇 개라도 등록, 하나하나식별자가 리턴, 취소를 위해서는 식별자가 필요하다.
// let id = setTimeout(sayHello3, 1000)
// clearTimeout(id)

// interval
// function fun1(name) {
//   console.log(`fun1, ${name}`);
// }
// let id = setInterval(fun1, 1000, '홍길동')
// setTimeout(() => clearInterval(id), 3000)


// // 0.5초 걸리는 업무를 진행하는 함수를 1초마다 반복 호출
// // 일부러 시간을 지연시키기 위해서
// function sleep(sec) {
//   // 매개변수 시간 후에 결과 리턴
//   return new Promise(resolve => setTimeout(resolve, sec))
// }
// let beforeTime = performance.now()