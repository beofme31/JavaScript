"use strict";

// 중복 선언
var data1 = 10
let data2 = 10
const data3 = 10

var data1 = '홍길동'
// let data2 = '홍길동' // Error
// const data3 = '홍길동' // Error

// ==> 동일 스코프에서 중복 선언은 var에 한해서만 지원된다.

// scope가 다른 위치에서 중복 선언
let data4 = '홍길동' // global scope

const myFun = () => {
  let data4 = '김길동' // local scope
  console.log(`in function ${data4}`) // in function 김길동
}
myFun()
console.log(`out function ${data4}`) // out function 홍길동

// ==> 스코프가 다르다면 let, const도 변수 중복 선언 가능하다.
// local이 우선이다.
// 변수명을 의미있는 단어로 주는 것이 기본이므로
// 변수명을 중복해서 local 변수를 자주 만든다.

// 함수 중복 선언 (함수의 body를 바꿔치기)
function myFun1(){ console.log('step1') }
function myFun1(){ console.log('step2') }
myFun1() // step2

var myFun2 = function (){ console.log('step1') }
var myFun2 = function (){ console.log('step2') }
myFun2() // step2

let myFun3 = function(){ console.log('step1')}
// let myFun3 = function(){ console.log('step2')} // Error

// ==> 함수 중복 선언: 선언식 함수와 var에 대입되는 표현식 함수만 가능

// scope
// 모든 software language에서는 하나의 scope ( {} ) 내에 선언된
// 변수, 함수는 그 스코프 내에서만

// var name1 = '홍길동'

// const someFun = () => {
//   var name1 = '김길동'
//   console.log(`in someFun 1, name1 = ${name1}`) // in someFun 1, name1 = 김길동
//   for(let i = 0; i < 1; i++){
//     var name1 = '이길동'
//     console.log(`in someFun 1, in for, name1 = ${name1}`) // in someFun 1, in for, name1 = 이길동
//   }
//   console.log(`in someFun 2, name1 = ${name1}`) // in someFun 2, name1 = 이길동
//   if(true){
//     var name1 = '박길동'
//     console.log(`in someFun, in if, name1 = ${name1}`) // in someFun, in if, name1 = 박길동
//   }
//   console.log(`in someFun 3, name1 = ${name1}`) // in someFun 3, name1 = 박길동
// }
// someFun()
// console.log(`out someFun, name1 = ${name1}`) // out someFun, name1 = 홍길동

// ==> var로 선언된 변수, 함수 scope만 지원한다. for, if는 지원하지 않는다.

let name1 = '홍길동'

const someFun = () => {
  let name1 = '김길동'
  console.log(`in someFun 1, name1 = ${name1}`) // in someFun 1, name1 = 김길동
  for(let i = 0; i < 1; i++){
    let name1 = '이길동'
    console.log(`in someFun 1, in for, name1 = ${name1}`) // in someFun 1, in for, name1 = 이길동
  }
  console.log(`in someFun 2, name1 = ${name1}`) // in someFun 2, name1 = 김길동
  if(true){
    let name1 = '박길동'
    console.log(`in someFun, in if, name1 = ${name1}`) // in someFun, in if, name1 = 박길동
  }
  console.log(`in someFun 3, name1 = ${name1}`) // in someFun 3, name1 = 김길동
}
someFun()
console.log(`out someFun, name1 = ${name1}`) // out someFun, name1 = 홍길동

// ==> let은 함수, for, it 스코프 지원한다. (해당 스코프 내에서만 가능하다.)