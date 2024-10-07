'use strict';

// // test1 - 동기 실행
// function myFun() {
//   console.log('done');
//   return 10
// }
// console.log('step1'); // step1
// let result = myFun() // done
// console.log('step2: ' + result); // step2: 10
// // step1이 실행된 후 함수 호출, 함수의 실행이 끝나야 step2 출력


// test2 - 비동기 실행
// 비동기: 어떤 업무가 끝날 때까지 기다리지 않고, 다른 일을 먼저 할 수 있도록 하는 것
function myFun() {
  // 호출되자마자 Promise 객체를 리턴시켜서
  // 함수를 호출한 곳이 대기상태가 되지 않게
  // promise의 매개변수는 함수, 시간이 오래걸리는 업무를 처리하는 함수
  return new Promise((resolve, reject) => {
    // 1초 후에 10 데이터 발생
    setTimeout(() => resolve(10), 1000)
  })
}
console.log('step1');
let promise = myFun()
// promise의 비동기 업무에 의한 결과가 발생할때 실행될 함수를 등록
// 결과를 받을 함수를 등록만 한거다. 실행을 시킨 것이 아니다.
// 실행은 비동기 업무에서 결과를 발생할때 알아서 실행된다.
promise.then(result => {
  // 매개변수가 promise가 발생시킨 데이터
  console.log(`result: ${result}`);
})
console.log('step2');