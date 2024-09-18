"use strict";

let array = [11, 3, 20, 15, 5]
// 배열 데이터 중에서 10보다 큰 수만
let result = array.filter((value) => {
  // filter 함수는 조건을 명시하기 위해서 사용
  // 이 함수의 리턴값은 true/false
  // true가 리턴되는 value만 모아서 전달한다.
  return value > 10
})
console.log(result) // (3) [11, 20, 15]

// 배열의 데이터가 모두 조건에 만족하는지? 최종 결과는 true/false
result = array.every((value) => {
  // every에 지정한 함수의 반환 값은 조건 판단임으로 true/false
  return value > 4
})

console.log(result) // false

// 배열의 데이터에 모두 2를 곱한 결과값 -> 최종 결과는 배열
result = array.map((value) => {
  // 조건을 판단하는 것이 아니라 조작된 데이터를 획득하고자 하므로
  // 리턴은 조작된 값
  return value*2
})
console.log(result) // (5) [22, 6, 40, 30, 10]
console.log(array) // (5) [11, 3, 20, 15, 5]: 원래 array 배열의 값은 변하지 않는다.

// sort: 오름차순 정렬, 작은 것 먼저
// 정렬 알고리즘은 개발자 알고리즘, 함수로 매개변수 지정
// 정렬을 하려면 두 데이터 중 어느 것이 큰지에 대한 판단이 있어야 함
// 매개변수는 두 개 받는다.
result = array.sort((data1, data2) => {
  // 반환 값은 1, 0, -1
  // 1: data1이 data2보다 크다.
  // 0: 두 데이터가 동일하다.
  // -1: data2가 data1보다 크다.
  if(data1 > data2) return 1
  else if(data1 == data2) return 0
  else return -1
})
console.log(result) // (5) [3, 5, 11, 15, 20]

// 내림차순 정렬
result = array.sort((data1, data2) => {
  if(data1 > data2) return -1
  else if(data1 == data2) return 0
  else return 1
})